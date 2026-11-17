import { Check, ChevronRight } from 'lucide-react'
import type { Aula } from '../content/types'
import type { Progress } from '../lib/progress'
import { aulaQuiz } from '../lib/stats'

export function AulaRow({ a, p, showQuestion }: { a: Aula; p: Progress; showQuestion?: boolean }) {
  const q = aulaQuiz(p, a.n)
  const revisto = !!p.revisto[a.n]
  const pct = q.total ? Math.round((q.ok / q.total) * 100) : 0
  const meta: string[] = [`Aula ${a.n}`]
  if (revisto) meta.push('revista')
  if (q.seen) meta.push(`quiz ${q.ok}/${q.total}`)
  return (
    <a className="row" href={`#/aula/${a.n}`}>
      <span className={'ring' + (revisto ? ' done' : '')} style={{ ['--p' as string]: revisto ? 100 : pct }}>
        <span>{revisto ? <Check aria-hidden="true" strokeWidth={3} /> : a.n}</span>
      </span>
      <span className="rt">
        <b>{showQuestion ? a.pergunta : a.titulo}</b>
        <span>{meta.join(' · ')}{showQuestion && a.titulo !== a.pergunta ? ` · ${a.titulo}` : ''}</span>
      </span>
      <ChevronRight className="chev" aria-hidden="true" />
    </a>
  )
}
