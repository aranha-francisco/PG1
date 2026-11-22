import { ChevronRight, Play, X } from 'lucide-react'
import { useState } from 'react'
import { AbertaRun, NIVEL_LABEL, porNecessidade } from '../components/AbertaRun'
import { Page } from '../components/Page'
import { ABERTAS, AULAS, type Aberta } from '../content'
import { useProgress, type Nivel } from '../lib/progress'
import { go } from '../lib/router'
import { leave } from './Quiz'

const DOT: Record<Nivel, string> = { 0: 'var(--red)', 1: 'var(--orange)', 2: 'var(--green)' }

export function Abertas() {
  const p = useProgress()
  const sei = ABERTAS.filter((a) => p.ab[a.id]?.r === 2).length
  return (
    <Page title="Abertas" restoreKey="abertas">
      <p className="eyebrow">Questões do professor</p>
      <h1 className="large-title">Respostas abertas</h1>
      <p className="subtitle">As {ABERTAS.length} questões de resposta aberta do documento do professor. Pensa na resposta, vê a resposta modelo e avalia-te: as que não sabes aparecem primeiro.</p>
      <div className="btn-row" style={{ gridTemplateColumns: '1fr' }}>
        <button type="button" className="btn primary" onClick={() => go('/aberta')}>
          <Play aria-hidden="true" /> Treinar ({sei}/{ABERTAS.length} sei)
        </button>
      </div>
      {AULAS.map((au) => {
        const list = ABERTAS.filter((a) => a.aula === au.n)
        if (!list.length) return null
        return (
          <section key={au.n}>
            <h2 className="sec-h">Aula {au.n} · {au.titulo}</h2>
            <nav className="list">
              {list.map((a) => {
                const r = p.ab[a.id]?.r
                return (
                  <a key={a.id} className="row plain" href={`#/aberta?ids=${a.id}`}>
                    <span className="rt">
                      <b>{a.id} · {a.pergunta}</b>
                      <span>{r === undefined ? 'Por fazer' : NIVEL_LABEL[r]}</span>
                    </span>
                    {r !== undefined && <span className="dot" style={{ background: DOT[r] }} aria-hidden="true" />}
                    <ChevronRight className="chev" aria-hidden="true" />
                  </a>
                )
              })}
            </nav>
          </section>
        )
      })}
    </Page>
  )
}

export function AbertaTreino({ query, runKey }: { query: URLSearchParams; runKey: string }) {
  const ids = (query.get('ids') || '').split(',').filter(Boolean)
  const aulas = (query.get('aulas') || '').split(',').map(Number).filter(Boolean)
  const pick = (): Aberta[] => {
    if (ids.length) return ids.map((id) => ABERTAS.find((a) => a.id === id)).filter((a): a is Aberta => !!a)
    return porNecessidade(ABERTAS.filter((a) => !aulas.length || aulas.includes(a.aula)))
  }
  const [list, setList] = useState(pick)
  const [done, setDone] = useState<Nivel[] | null>(null)
  const [key, setKey] = useState(runKey)
  const [nonce, setNonce] = useState(0)
  if (key !== runKey) { setKey(runKey); setList(pick()); setDone(null) }

  const title = ids.length === 1 ? `Aberta ${ids[0]}` : aulas.length === 1 ? `Abertas · Aula ${aulas[0]}` : 'Respostas abertas'
  const exit = (
    <button type="button" className="back" onClick={() => leave('/abertas')} aria-label="Sair">
      <X aria-hidden="true" style={{ width: 22, height: 22 }} /> <span>Sair</span>
    </button>
  )
  if (!list.length) {
    return (
      <Page title={title} noTabs right={exit}>
        <h1 className="large-title">{title}</h1>
        <p className="subtitle">Ainda não há respostas abertas para esta escolha.</p>
      </Page>
    )
  }
  return (
    <Page title={title} noTabs right={exit}>
      {done ? (
        <>
          <h1 className="large-title" style={{ fontSize: 28 }}>{title}</h1>
          <div className="card result">
            <h2>{done.every((r) => r === 2) ? 'Sabes todas!' : 'Feito'}</h2>
            <p>{done.filter((r) => r === 2).length} sei · {done.filter((r) => r === 1).length} mais ou menos · {done.filter((r) => r === 0).length} não sei</p>
            <div className="stack">
              {done.some((r) => r < 2) && (
                <button type="button" className="btn primary block" onClick={() => { setList(list.filter((_, k) => done[k] < 2)); setDone(null); setNonce((x) => x + 1) }}>
                  Rever as que não sabia
                </button>
              )}
              <button type="button" className="btn block" onClick={() => leave('/abertas')}>Voltar</button>
            </div>
          </div>
        </>
      ) : (
        <AbertaRun key={key + '|' + nonce} list={list} label={title} onFinish={setDone} />
      )}
    </Page>
  )
}
