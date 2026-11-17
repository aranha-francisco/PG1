import { X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Page } from '../components/Page'
import { ALL_QUIZ, aulaByN, type QuizItem } from '../content'
import { actions } from '../lib/progress'
import { go } from '../lib/router'
import { shuffle } from '../lib/text'

const L = 'ABCDEFGH'
const TIPO = { conceito: 'Conceito', cenario: 'Cenário', calculo: 'Cálculo' } as const

interface Q extends QuizItem {
  order: number[]
}

function build(aulas: number[], n: number): Q[] {
  const pool = ALL_QUIZ.filter((q) => !aulas.length || aulas.includes(q.aula))
  const picked = shuffle(pool).slice(0, n > 0 ? n : pool.length)
  return picked.map((q) => ({ ...q, order: shuffle(q.opcoes.map((_, i) => i)) }))
}

function leave(fallback: string) {
  if (history.length > 1) history.back()
  else go(fallback)
}

export function Quiz({ aulasParam, nParam, runKey }: { aulasParam: string | null; nParam: string | null; runKey: string }) {
  const aulas = useMemo(() => (aulasParam ? aulasParam.split(',').map(Number).filter(Boolean) : []), [aulasParam])
  const n = nParam !== null ? Number(nParam) : aulas.length ? 0 : 10
  const single = aulas.length === 1 ? aulas[0] : null
  const fallback = single ? `/aula/${single}` : '/treinar'

  const [qs, setQs] = useState<Q[]>(() => build(aulas, n))
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [results, setResults] = useState<boolean[]>([])
  const [done, setDone] = useState(false)

  const restart = useCallback(() => {
    setQs(build(aulas, n))
    setI(0)
    setPicked(null)
    setResults([])
    setDone(false)
  }, [aulas, n])

  useEffect(() => { restart() }, [runKey, restart])

  const q = qs[i]
  const answered = picked !== null
  const score = results.filter(Boolean).length

  const choose = useCallback((orig: number) => {
    if (!q || picked !== null) return
    const ok = orig === q.certa
    setPicked(orig)
    setResults((r) => [...r, ok])
    actions.answer(q.id, ok)
  }, [q, picked])

  const nextQ = useCallback(() => {
    if (i + 1 < qs.length) {
      setI(i + 1)
      setPicked(null)
      document.querySelector('.page')?.scrollTo({ top: 0 })
    } else {
      setDone(true)
      if (single && qs.length === aulaByN(single)?.quiz.length) actions.quizDone(single, results.filter(Boolean).length, qs.length)
      document.querySelector('.page')?.scrollTo({ top: 0 })
    }
  }, [i, qs.length, single, results])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done || !q) return
      const k = e.key.toLowerCase()
      const pos = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k) /* k já está em minúsculas */
      if (!answered && pos >= 0 && pos < q.order.length) choose(q.order[pos])
      else if (answered && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight')) { e.preventDefault(); nextQ() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [q, answered, done, choose, nextQ])

  const title = single ? `Quiz · Aula ${single}` : aulas.length ? `Quiz · Aulas ${aulas.join(', ')}` : 'Quiz rápido'
  const exit = (
    <button type="button" className="back" onClick={() => leave(fallback)} aria-label="Sair do quiz">
      <X aria-hidden="true" style={{ width: 22, height: 22 }} /> <span>Sair</span>
    </button>
  )

  if (!qs.length) {
    return (
      <Page title={title} noTabs right={exit}>
        <h1 className="large-title">{title}</h1>
        <p className="subtitle">Ainda não há perguntas para estas aulas.</p>
      </Page>
    )
  }

  if (done) {
    const pct = Math.round((score / qs.length) * 100)
    const wrong = qs.filter((_, k) => !results[k])
    return (
      <Page title={title} noTabs right={exit}>
        <h1 className="large-title" style={{ fontSize: 28 }}>{title}</h1>
        <div className="card result">
          <div className="big-ring" style={{ ['--p' as string]: pct }}><div><b>{score}/{qs.length}</b><span>{pct}%</span></div></div>
          <h2>{pct === 100 ? 'Perfeito!' : pct >= 80 ? 'Muito bem!' : pct >= 50 ? 'Vais no bom caminho' : 'Vale a pena rever'}</h2>
          <p>{wrong.length ? 'Revê as que falhaste:' : 'Acertaste em todas.'}</p>
          {wrong.length > 0 && (
            <div className="review">
              {wrong.map((w) => (
                <div className="rv" key={w.id}>
                  <p>{w.pergunta}</p>
                  <span><b>{w.opcoes[w.certa].t}.</b> {w.opcoes[w.certa].porque.replace(/^Certo:\s*/, '')}</span>
                  <span><a href={`#/aula/${w.aula}`}>Aula {w.aula}</a></span>
                </div>
              ))}
            </div>
          )}
          <div className="stack">
            <button type="button" className="btn primary block" onClick={restart}>Outra vez</button>
            <button type="button" className="btn block" onClick={() => leave(fallback)}>{single ? `Voltar à Aula ${single}` : 'Voltar'}</button>
          </div>
        </div>
      </Page>
    )
  }

  return (
    <Page title={title} noTabs right={exit}>
      <div className="qhead"><span>{title} · <b>{i + 1}</b> de <b>{qs.length}</b></span><span>Certas: <b>{score}</b></span></div>
      <div className="qbar"><i style={{ width: `${(i / qs.length) * 100}%` }} /></div>
      <div className={'qcard' + (answered ? ' answered' : '')}>
        <div className="qtag">
          <span className="chip">{TIPO[q.tipo]}</span>
          <span className="chip gray">Aula {q.aula}</span>
        </div>
        <p className="qtext">{q.pergunta}</p>
        <div className="opts" role="group" aria-label="Opções">
          {q.order.map((orig, pos) => {
            const o = q.opcoes[orig]
            const cls = answered ? (orig === q.certa ? ' right' : orig === picked ? ' wrong' : '') : ''
            return (
              <button type="button" key={orig} className={'opt' + cls} onClick={() => choose(orig)} aria-pressed={orig === picked}>
                <span className="ol">{L[pos]}</span>
                <span className="ot">
                  <span>{o.t}</span>
                  {answered && <span className="why">{o.porque}</span>}
                </span>
              </button>
            )
          })}
        </div>
        {answered && (
          <p className={'qmsg ' + (picked === q.certa ? 'good' : 'bad')} aria-live="polite">
            {picked === q.certa ? 'Certo!' : `Errado. A certa é a ${L[q.order.indexOf(q.certa)]}).`}
          </p>
        )}
      </div>
      {answered && (
        <button type="button" className="btn primary block" style={{ marginTop: 14 }} onClick={nextQ}>
          {i + 1 < qs.length ? 'Seguinte' : 'Ver resultado'}
        </button>
      )}
    </Page>
  )
}
