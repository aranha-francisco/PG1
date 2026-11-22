import { Check, ChevronRight } from 'lucide-react'
import type { AulaInfo } from '../content'
import type { Progress } from '../lib/progress'
import { aulaStats, temasDaAula } from '../lib/stats'

/** Uma aula na lista do início: anel com o progresso (temas + perguntas do professor + abertas). */
export function AulaRow({ a, p }: { a: AulaInfo; p: Progress }) {
  const s = aulaStats(p, a.n)
  const first = temasDaAula(a.n)[0]
  const done = s.pct === 100
  const meta = [`Temas ${s.temasOk}/${s.temas}`, `Professor ${s.profOk}/${s.prof}`]
  if (s.ab) meta.push(`Abertas ${s.abOk}/${s.ab}`)
  return (
    <a className="row" href={first ? `#/tema/${first.id}` : '#/temas'}>
      <span className={'ring' + (done ? ' done' : '')} style={{ ['--p' as string]: s.pct }}>
        <span>{done ? <Check aria-hidden="true" strokeWidth={3} /> : a.n}</span>
      </span>
      <span className="rt">
        <b>{a.titulo}</b>
        <span>{meta.join(' · ')}</span>
      </span>
      <ChevronRight className="chev" aria-hidden="true" />
    </a>
  )
}
