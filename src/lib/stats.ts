import { ABERTAS, AULAS, CARTOES, PROFESSOR, TEMAS } from '../content'
import type { Progress } from './progress'

export const temasDaAula = (n: number) => TEMAS.filter((t) => t.aulas.includes(n))
export const profDaAula = (n: number) => PROFESSOR.filter((q) => q.aula === n)
export const abertasDaAula = (n: number) => ABERTAS.filter((a) => a.aula === n)

/** Progresso de uma aula: temas que sei, perguntas do professor certas, abertas que sei. */
export function aulaStats(p: Progress, n: number) {
  const temas = temasDaAula(n)
  const prof = profDaAula(n)
  const ab = abertasDaAula(n)
  const temasOk = temas.filter((t) => p.temas[t.id]).length
  const profOk = prof.filter((q) => p.qa[q.id]?.ok).length
  const profSeen = prof.filter((q) => p.qa[q.id]).length
  const abOk = ab.filter((a) => p.ab[a.id]?.r === 2).length
  const total = temas.length + prof.length + ab.length
  const pct = total ? Math.round(((temasOk + profOk + abOk) / total) * 100) : 0
  return { temas: temas.length, temasOk, prof: prof.length, profOk, profSeen, ab: ab.length, abOk, pct }
}

export function overall(p: Progress) {
  const temasOk = TEMAS.filter((t) => p.temas[t.id]).length
  const profOk = PROFESSOR.filter((q) => p.qa[q.id]?.ok).length
  const profErr = PROFESSOR.filter((q) => p.qa[q.id] && !p.qa[q.id].ok).length
  const abOk = ABERTAS.filter((a) => p.ab[a.id]?.r === 2).length
  const cardsOk = CARTOES.filter((c) => (p.fc[c.id]?.box ?? 0) >= 1).length
  const aulasProntas = AULAS.filter((a) => aulaStats(p, a.n).pct === 100).length
  return { temasOk, profOk, profErr, abOk, cardsOk, aulasProntas }
}
