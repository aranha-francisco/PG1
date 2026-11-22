import { Check, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Page } from '../components/Page'
import { CARTOES, type CardItem } from '../content'
import type { FlashTipo } from '../content/types'
import { actions, getProgress } from '../lib/progress'
import { go } from '../lib/router'
import { shuffle } from '../lib/text'

const TIPO: Record<FlashTipo, string> = { termo: 'Termo', autor: 'Autor', explica: 'Explica numa frase', exemplo: 'Dá um exemplo' }
const SESSION = 20

/** Os cartões que não sabes (caixa baixa) e os nunca vistos vêm primeiro. */
function build(aulas: number[], tipo: string | null): CardItem[] {
  const p = getProgress()
  const pool = CARTOES.filter((c) => (!aulas.length || aulas.includes(c.aula)) && (!tipo || c.tipo === tipo))
  const weight = (c: CardItem) => {
    const s = p.fc[c.id]
    if (!s) return 1 // nunca visto
    return s.box === 0 ? 0 : 1 + s.box // não sei → primeiro; sei bem → último
  }
  return shuffle(pool).sort((a, b) => weight(a) - weight(b)).slice(0, SESSION)
}

function leave(fallback: string) {
  if (history.length > 1) history.back()
  else go(fallback)
}

export function Flashcards({ aulasParam, tipoParam, runKey }: { aulasParam: string | null; tipoParam: string | null; runKey: string }) {
  const aulas = useMemo(() => (aulasParam ? aulasParam.split(',').map(Number).filter(Boolean) : []), [aulasParam])
  const single = aulas.length === 1 ? aulas[0] : null
  const fallback = '/cartoes'
  const [queue, setQueue] = useState<CardItem[]>(() => build(aulas, tipoParam))
  const [total, setTotal] = useState(queue.length)
  const [flip, setFlip] = useState(false)
  const [known, setKnown] = useState<string[]>([])
  const [unknown, setUnknown] = useState<string[]>([])
  const [dx, setDx] = useState(0)
  const drag = useRef<{ x: number; y: number; moved: boolean } | null>(null)

  const restart = useCallback((only?: CardItem[]) => {
    const q = only ?? build(aulas, tipoParam)
    setQueue(q)
    setTotal(q.length)
    setFlip(false)
    setKnown([])
    setUnknown([])
  }, [aulas, tipoParam])

  useEffect(() => { restart() }, [runKey, restart])

  const card = queue[0]

  const decide = useCallback((ok: boolean) => {
    if (!card) return
    actions.card(card.id, ok)
    setFlip(false)
    setDx(0)
    if (ok) {
      setKnown((k) => (k.includes(card.id) || unknown.includes(card.id) ? k : [...k, card.id]))
      setQueue((q) => q.slice(1))
    } else {
      setUnknown((u) => (u.includes(card.id) ? u : [...u, card.id]))
      // volta a aparecer daqui a 3 cartões
      setQueue((q) => {
        const rest = q.slice(1)
        const at = Math.min(3, rest.length)
        return [...rest.slice(0, at), card, ...rest.slice(at)]
      })
    }
  }, [card, unknown])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!card) return
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); setFlip((f) => !f) }
      else if (flip && e.key === 'ArrowLeft') decide(false)
      else if (flip && e.key === 'ArrowRight') decide(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [card, flip, decide])

  const title = single ? `Flashcards · Aula ${single}` : 'Flashcards'
  const exit = (
    <button type="button" className="back" onClick={() => leave(fallback)} aria-label="Sair dos flashcards">
      <X aria-hidden="true" style={{ width: 22, height: 22 }} /> <span>Sair</span>
    </button>
  )

  if (!total) {
    return (
      <Page title={title} noTabs right={exit}>
        <h1 className="large-title">{title}</h1>
        <p className="subtitle">Não há cartões com estes filtros.</p>
      </Page>
    )
  }

  if (!card) {
    const missed = CARTOES.filter((c) => unknown.includes(c.id))
    return (
      <Page title={title} noTabs right={exit}>
        <h1 className="large-title" style={{ fontSize: 28 }}>{title}</h1>
        <div className="card result">
          <div className="big-ring" style={{ ['--p' as string]: Math.round((known.length / total) * 100) }}>
            <div><b>{known.length}/{total}</b><span>à primeira</span></div>
          </div>
          <h2>{unknown.length ? 'Sessão terminada' : 'Sabias todos!'}</h2>
          <p>{unknown.length ? `${unknown.length} ${unknown.length === 1 ? 'cartão vai' : 'cartões vão'} aparecer mais vezes nas próximas sessões.` : 'Estes cartões vão aparecer menos vezes.'}</p>
          <div className="stack">
            {missed.length > 0 && <button type="button" className="btn primary block" onClick={() => restart(shuffle(missed))}>Rever os {missed.length} que não sabia</button>}
            <button type="button" className={'btn block' + (missed.length ? '' : ' primary')} onClick={() => restart()}>Nova sessão</button>
            <button type="button" className="btn block" onClick={() => leave(fallback)}>Voltar</button>
          </div>
        </div>
      </Page>
    )
  }

  const done = total - queue.length + 0
  const onDown = (e: React.PointerEvent) => { drag.current = { x: e.clientX, y: e.clientY, moved: false } }
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current
    if (!d || !flip) return
    const x = e.clientX - d.x
    if (!d.moved && Math.abs(x) > 8 && Math.abs(x) > Math.abs(e.clientY - d.y)) {
      d.moved = true
      ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    }
    if (d.moved) setDx(x)
  }
  const onUp = () => {
    const d = drag.current
    drag.current = null
    if (d?.moved) {
      if (dx > 90) decide(true)
      else if (dx < -90) decide(false)
      else setDx(0)
      return
    }
    setFlip((f) => !f)
  }

  return (
    <Page title={title} noTabs right={exit}>
      <div className="qhead"><span>{title} · <b>{Math.min(done + 1, total)}</b> de <b>{total}</b></span><span>Sei: <b>{known.length}</b></span></div>
      <div className="qbar"><i style={{ width: `${(done / total) * 100}%` }} /></div>
      <div className="fc-stage">
        <div
          className={'fc' + (flip ? ' flip' : '')}
          style={dx ? { transform: `translateX(${dx}px) rotate(${dx / 30}deg) rotateY(180deg)`, transition: 'none' } : undefined}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={() => { drag.current = null; setDx(0) }}
          role="button"
          tabIndex={0}
          aria-label={flip ? 'Resposta. Toca para voltar à pergunta.' : 'Pergunta. Toca para ver a resposta.'}
        >
          <div className="fc-face fc-front">
            <div className="fc-type"><span>{TIPO[card.tipo]}</span><span>Aula {card.aula}</span></div>
            <div className="fc-main"><span>{card.frente}</span></div>
            <div className="fc-tip">{card.tipo === 'explica' || card.tipo === 'exemplo' ? 'Pensa na resposta e toca para comparar' : 'Toca para virar'}</div>
          </div>
          <div className="fc-face fc-back">
            <span className="fc-swipe-r" style={{ opacity: Math.max(0, Math.min(1, dx / 90)) }}>SEI</span>
            <span className="fc-swipe-l" style={{ opacity: Math.max(0, Math.min(1, -dx / 90)) }}>NÃO SEI</span>
            <div className="fc-type"><span>{card.tipo === 'explica' || card.tipo === 'exemplo' ? 'Resposta modelo' : 'Resposta'}</span><span>Aula {card.aula}</span></div>
            <div className="fc-main"><span>{card.verso}</span></div>
            <div className="fc-tip">Desliza ou usa os botões</div>
          </div>
        </div>
      </div>
      {flip ? (
        <div className="fc-btns">
          <button type="button" className="btn no" onClick={() => decide(false)}><X aria-hidden="true" /> Não sei</button>
          <button type="button" className="btn yes" onClick={() => decide(true)}><Check aria-hidden="true" /> Sei</button>
        </div>
      ) : (
        <button type="button" className="btn primary block" style={{ marginTop: 16 }} onClick={() => setFlip(true)}>Ver resposta</button>
      )}
    </Page>
  )
}
