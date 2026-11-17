import { AULAS, aulaByN } from '../content'
import type { Progress } from './progress'

/** Perguntas desta aula cuja última resposta foi certa / total de perguntas. */
export function aulaQuiz(p: Progress, n: number) {
  const a = aulaByN(n)
  if (!a) return { ok: 0, seen: 0, total: 0 }
  let ok = 0
  let seen = 0
  for (const q of a.quiz) {
    const r = p.qa[q.id]
    if (r) {
      seen++
      if (r.ok) ok++
    }
  }
  return { ok, seen, total: a.quiz.length }
}

export function aulaCards(p: Progress, n: number) {
  const a = aulaByN(n)
  if (!a) return { known: 0, total: 0 }
  const known = a.flashcards.filter((c) => (p.fc[c.id]?.box ?? 0) >= 1).length
  return { known, total: a.flashcards.length }
}

export function overall(p: Progress) {
  const revistas = AULAS.filter((a) => p.revisto[a.n]).length
  let ok = 0
  let seen = 0
  for (const a of AULAS) {
    const s = aulaQuiz(p, a.n)
    ok += s.ok
    seen += s.seen
  }
  const known = Object.values(p.fc).filter((c) => c.box >= 1).length
  return { revistas, quizPct: seen ? Math.round((ok / seen) * 100) : null, known }
}
