import { RotateCcw, Shuffle, Zap } from 'lucide-react'
import { useState } from 'react'
import { Page } from '../components/Page'
import { AULAS, EXTRA, PROFESSOR } from '../content'
import { useProgress } from '../lib/progress'
import { go } from '../lib/router'

type Src = 'prof' | 'extra'

export function Escolha() {
  const p = useProgress()
  const [src, setSrc] = useState<Src>('prof')
  const [sel, setSel] = useState<number[]>([])
  const pool = src === 'prof' ? PROFESSOR : EXTRA
  const inSel = pool.filter((q) => !sel.length || sel.includes(q.aula))
  const erradas = inSel.filter((q) => p.qa[q.id] && !p.qa[q.id].ok).length
  const toggle = (k: number) => setSel((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k].sort((a, b) => a - b)))
  const aulasQ = sel.length ? `&aulas=${sel.join(',')}` : ''
  const okAll = PROFESSOR.filter((q) => p.qa[q.id]?.ok).length

  return (
    <Page title="Escolha múltipla" restoreKey="escolha">
      <p className="eyebrow">Sem penalização</p>
      <h1 className="large-title">Escolha múltipla</h1>
      <p className="subtitle">As 70 perguntas do professor, com a chave oficial e a explicação de cada opção. «Mais treino» são perguntas nossas sobre os mesmos temas.</p>

      <div className="seg" role="tablist" style={{ marginTop: 14 }}>
        <button type="button" role="tab" aria-selected={src === 'prof'} className={src === 'prof' ? 'on' : ''} onClick={() => setSrc('prof')}>Professor ({PROFESSOR.length})</button>
        <button type="button" role="tab" aria-selected={src === 'extra'} className={src === 'extra' ? 'on' : ''} onClick={() => setSrc('extra')}>Mais treino ({EXTRA.length})</button>
      </div>

      <h2 className="sec-h">Aulas</h2>
      <div className="card">
        <div className="chipbtns">
          <button type="button" className={'chipbtn' + (sel.length === 0 ? ' on' : '')} onClick={() => setSel([])}>Todas</button>
          {AULAS.map((a) => (
            <button type="button" key={a.n} className={'chipbtn' + (sel.includes(a.n) ? ' on' : '')} onClick={() => toggle(a.n)} aria-pressed={sel.includes(a.n)} aria-label={`Aula ${a.n}`}>{a.n}</button>
          ))}
        </div>
        <div className="stack" style={{ marginTop: 14 }}>
          <button type="button" className="btn primary block" onClick={() => go(`/quiz?src=${src}${aulasQ}`)}>
            <Zap aria-hidden="true" /> Começar ({inSel.length} perguntas)
          </button>
          <div className="btn-row" style={{ marginTop: 0 }}>
            <button type="button" className="btn" onClick={() => go(`/quiz?src=${src}${aulasQ}&n=10`)}><Shuffle aria-hidden="true" /> 10 ao calhas</button>
            <button type="button" className="btn" onClick={() => go(`/quiz?src=${src}${aulasQ}&erradas=1`)} style={erradas ? undefined : { opacity: 0.45 }}>
              <RotateCcw aria-hidden="true" /> Erradas ({erradas})
            </button>
          </div>
        </div>
      </div>

      <h2 className="sec-h"><span>Professor, por aula</span><span>{okAll}/{PROFESSOR.length}</span></h2>
      <nav className="list">
        {AULAS.map((a) => {
          const qs = PROFESSOR.filter((q) => q.aula === a.n)
          const ok = qs.filter((q) => p.qa[q.id]?.ok).length
          const seen = qs.filter((q) => p.qa[q.id]).length
          const full = seen === qs.length && ok === qs.length
          return (
            <a className="row plain" key={a.n} href={`#/quiz?src=prof&aulas=${a.n}`}>
              <span className="rt">
                <b>Aula {a.n} · {a.titulo}</b>
                <span>{seen ? `${ok} de ${qs.length} certas` : `${qs.length} perguntas por fazer`}</span>
              </span>
              <span className="chip" style={full ? { background: 'var(--green-t)', color: 'var(--green)' } : undefined}>{ok}/{qs.length}</span>
            </a>
          )
        })}
      </nav>
    </Page>
  )
}
