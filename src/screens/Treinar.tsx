import { GalleryVerticalEnd, Zap } from 'lucide-react'
import { useState } from 'react'
import { Page } from '../components/Page'
import { AULAS, ALL_CARDS, ALL_QUIZ } from '../content'
import type { FlashTipo } from '../content/types'
import { useProgress } from '../lib/progress'
import { go } from '../lib/router'
import { aulaQuiz } from '../lib/stats'

const TIPOS: { id: FlashTipo | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'termo', label: 'Termos' },
  { id: 'autor', label: 'Autores' },
  { id: 'explica', label: 'Explica' },
  { id: 'exemplo', label: 'Exemplos' },
]

export function Treinar() {
  const p = useProgress()
  const [sel, setSel] = useState<number[]>([])
  const [n, setN] = useState(10)
  const [tipo, setTipo] = useState<FlashTipo | 'todos'>('todos')
  const aulasQ = sel.length ? sel.join(',') : ''
  const toggle = (k: number) => setSel((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k].sort((a, b) => a - b)))
  const poolQ = ALL_QUIZ.filter((q) => !sel.length || sel.includes(q.aula)).length
  const poolC = ALL_CARDS.filter((c) => (!sel.length || sel.includes(c.aula)) && (tipo === 'todos' || c.tipo === tipo)).length

  return (
    <Page title="Treinar" restoreKey="treinar">
      <p className="eyebrow">Sem penalização</p>
      <h1 className="large-title">Treinar</h1>
      <p className="subtitle">Escolhe as aulas e treina com perguntas de escolha múltipla ou com flashcards.</p>

      <h2 className="sec-h">Aulas</h2>
      <div className="card">
        <div className="chipbtns">
          <button type="button" className={'chipbtn' + (sel.length === 0 ? ' on' : '')} onClick={() => setSel([])}>Todas</button>
          {AULAS.map((a) => (
            <button type="button" key={a.n} className={'chipbtn' + (sel.includes(a.n) ? ' on' : '')} onClick={() => toggle(a.n)} aria-pressed={sel.includes(a.n)} aria-label={`Aula ${a.n}`}>
              {a.n}
            </button>
          ))}
        </div>
      </div>

      <h2 className="sec-h">Quiz</h2>
      <div className="card">
        <div className="seg" role="group" aria-label="Número de perguntas">
          {[10, 20, 0].map((k) => (
            <button type="button" key={k} className={n === k ? 'on' : ''} onClick={() => setN(k)}>{k ? `${k} perguntas` : `Todas (${poolQ})`}</button>
          ))}
        </div>
        <button type="button" className="btn primary block" style={{ marginTop: 12 }} onClick={() => go(`/quiz?${aulasQ ? `aulas=${aulasQ}&` : ''}n=${n}`)}>
          <Zap aria-hidden="true" /> Começar quiz
        </button>
      </div>

      <h2 className="sec-h">Flashcards</h2>
      <div className="card">
        <div className="chipbtns">
          {TIPOS.map((t) => (
            <button type="button" key={t.id} className={'chipbtn' + (tipo === t.id ? ' on' : '')} onClick={() => setTipo(t.id)}>{t.label}</button>
          ))}
        </div>
        <p className="small" style={{ margin: '10px 2px 0' }}>«Explica» e «Exemplos» preparam as perguntas de resposta curta e aberta: pensa na resposta, vira o cartão e compara.</p>
        <button type="button" className="btn primary block" style={{ marginTop: 12 }} onClick={() => go(`/flashcards?${aulasQ ? `aulas=${aulasQ}&` : ''}${tipo !== 'todos' ? `tipo=${tipo}` : ''}`)} disabled={!poolC}>
          <GalleryVerticalEnd aria-hidden="true" /> Começar ({Math.min(20, poolC)} de {poolC} cartões)
        </button>
      </div>

      <h2 className="sec-h">Resultados por aula</h2>
      <div className="list">
        {AULAS.map((a) => {
          const q = aulaQuiz(p, a.n)
          const best = p.quiz[a.n]
          return (
            <a className="row plain" key={a.n} href={`#/quiz?aulas=${a.n}`}>
              <span className="rt">
                <b>Aula {a.n} · {a.titulo}</b>
                <span>{q.seen ? `${q.ok} de ${q.total} certas na última resposta` : `${q.total} perguntas por fazer`}{best ? ` · melhor quiz ${best.best}/${best.total}` : ''}</span>
              </span>
              <span className="chip" style={{ background: q.seen && q.ok === q.total ? 'var(--green-t)' : undefined, color: q.seen && q.ok === q.total ? 'var(--green)' : undefined }}>
                {q.total ? Math.round((q.ok / q.total) * 100) : 0}%
              </span>
            </a>
          )
        })}
      </div>
    </Page>
  )
}
