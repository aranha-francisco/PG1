import { useCallback, useEffect, useState } from 'react'
import type { QuizItem } from '../content'
import { actions } from '../lib/progress'
import { shuffle } from '../lib/text'

export const LETRAS = 'ABCDEFGH'
const TIPO = { conceito: 'Conceito', cenario: 'Cenário', calculo: 'Cálculo' } as const

export interface RunQ extends QuizItem {
  order: number[]
  prof: boolean
}

/** Perguntas do professor mantêm a ordem A–D do documento; as extra são baralhadas. */
export function prepare(items: QuizItem[]): RunQ[] {
  return items.map((q) => {
    const prof = q.id.startsWith('p')
    return { ...q, prof, order: prof ? q.opcoes.map((_, i) => i) : shuffle(q.opcoes.map((_, i) => i)) }
  })
}

interface Props {
  qs: RunQ[]
  label: string
  onFinish: (results: boolean[]) => void
}

export function QuizRun({ qs, label, onFinish }: Props) {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [results, setResults] = useState<boolean[]>([])
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

  const next = useCallback(() => {
    document.querySelector('.page')?.scrollTo({ top: 0 })
    if (i + 1 < qs.length) {
      setI(i + 1)
      setPicked(null)
    } else onFinish(results)
  }, [i, qs.length, onFinish, results])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!q) return
      const k = e.key.toLowerCase()
      const pos = '1234'.includes(k) ? '1234'.indexOf(k) : 'abcd'.indexOf(k)
      if (!answered && pos >= 0 && pos < q.order.length) choose(q.order[pos])
      else if (answered && (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight')) { e.preventDefault(); next() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [q, answered, choose, next])

  if (!q) return null
  return (
    <>
      <div className="qhead"><span>{label} · <b>{i + 1}</b> de <b>{qs.length}</b></span><span>Certas: <b>{score}</b></span></div>
      <div className="qbar"><i style={{ width: `${(i / qs.length) * 100}%` }} /></div>
      <div className={'qcard' + (answered ? ' answered' : '')}>
        <div className="qtag">
          {q.prof ? <span className="chip">Professor · {q.id.slice(1)}</span> : <span className="chip gray">Mais treino · {TIPO[q.tipo]}</span>}
          <span className="chip gray">Aula {q.aula}</span>
        </div>
        <p className="qtext">{q.pergunta}</p>
        <div className="opts" role="group" aria-label="Opções">
          {q.order.map((orig, pos) => {
            const o = q.opcoes[orig]
            const cls = answered ? (orig === q.certa ? ' right' : orig === picked ? ' wrong' : '') : ''
            return (
              <button type="button" key={orig} className={'opt' + cls} onClick={() => choose(orig)} aria-pressed={orig === picked}>
                <span className="ol">{LETRAS[pos]}</span>
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
            {picked === q.certa ? 'Certo!' : `Errado. A certa é a ${LETRAS[q.order.indexOf(q.certa)]}.`}
          </p>
        )}
      </div>
      {answered && (
        <button type="button" className="btn primary block" style={{ marginTop: 14 }} onClick={next}>
          {i + 1 < qs.length ? 'Seguinte' : 'Ver resultado'}
        </button>
      )}
    </>
  )
}

/** Resultado final com revisão das erradas. */
export function QuizResult({ qs, results, title, children }: { qs: RunQ[]; results: boolean[]; title?: string; children?: React.ReactNode }) {
  const score = results.filter(Boolean).length
  const pct = qs.length ? Math.round((score / qs.length) * 100) : 0
  const wrong = qs.filter((_, k) => !results[k])
  return (
    <div className="card result">
      <div className="big-ring" style={{ ['--p' as string]: pct }}><div><b>{score}/{qs.length}</b><span>{pct}%</span></div></div>
      <h2>{title ?? (pct === 100 ? 'Perfeito!' : pct >= 80 ? 'Muito bem!' : pct >= 50 ? 'Vais no bom caminho' : 'Vale a pena rever')}</h2>
      <p>{wrong.length ? 'Revê as que falhaste:' : 'Acertaste em todas.'}</p>
      {wrong.length > 0 && (
        <div className="review">
          {wrong.map((w) => (
            <div className="rv" key={w.id}>
              <p>{w.prof ? `${w.id.slice(1)} · ` : ''}{w.pergunta}</p>
              <span><b>{LETRAS[w.order.indexOf(w.certa)]}) {w.opcoes[w.certa].t}.</b> {w.opcoes[w.certa].porque.replace(/^Certo:\s*/, '')}</span>
            </div>
          ))}
        </div>
      )}
      {children}
    </div>
  )
}
