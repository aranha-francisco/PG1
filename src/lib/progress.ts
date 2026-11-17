import { useSyncExternalStore } from 'react'

// Progresso guardado só neste dispositivo (localStorage, sempre dentro de try/catch).
// Atenção: no iPhone, a app instalada tem armazenamento separado do Safari.

export interface Progress {
  v: 1
  /** aulas marcadas como revistas: n → timestamp */
  revisto: Record<string, number>
  /** última resposta a cada pergunta do quiz */
  qa: Record<string, { ok: boolean; t: number }>
  /** melhor e último resultado de quizzes só de uma aula */
  quiz: Record<string, { best: number; last: number; total: number; t: number }>
  /** flashcards: caixa de Leitner (0 = não sei … 4 = sei bem) */
  fc: Record<string, { box: number; t: number }>
  /** última página de conteúdo visitada, para "Continuar" */
  last?: { href: string; label: string; t: number }
  hintDismissed?: boolean
}

const KEY = 'pg-gestao:v1'
const EMPTY: Progress = { v: 1, revisto: {}, qa: {}, quiz: {}, fc: {} }

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...EMPTY }
    const p = JSON.parse(raw) as Partial<Progress>
    return { ...EMPTY, ...p, revisto: p.revisto || {}, qa: p.qa || {}, quiz: p.quiz || {}, fc: p.fc || {} }
  } catch {
    return { ...EMPTY }
  }
}

let state: Progress = load()
const listeners = new Set<() => void>()

function commit(next: Progress) {
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(next))
  } catch {
    /* armazenamento indisponível (modo privado, etc.): continua só em memória */
  }
  listeners.forEach((l) => l())
}

export function update(fn: (p: Progress) => Progress) {
  commit(fn(state))
}

export function getProgress() {
  return state
}

export function useProgress(): Progress {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => state,
    () => state,
  )
}

// Outras abas/janelas do mesmo dispositivo
window.addEventListener('storage', (e) => {
  if (e.key === KEY) {
    state = load()
    listeners.forEach((l) => l())
  }
})

export const actions = {
  toggleRevisto(n: number) {
    update((p) => {
      const revisto = { ...p.revisto }
      if (revisto[n]) delete revisto[n]
      else revisto[n] = Date.now()
      return { ...p, revisto }
    })
  },
  answer(id: string, ok: boolean) {
    update((p) => ({ ...p, qa: { ...p.qa, [id]: { ok, t: Date.now() } } }))
  },
  quizDone(aula: number, score: number, total: number) {
    update((p) => {
      const prev = p.quiz[aula]
      const best = prev && prev.total === total ? Math.max(prev.best, score) : score
      return { ...p, quiz: { ...p.quiz, [aula]: { best, last: score, total, t: Date.now() } } }
    })
  },
  card(id: string, known: boolean) {
    update((p) => {
      const box = known ? Math.min(4, (p.fc[id]?.box ?? 0) + 1) : 0
      return { ...p, fc: { ...p.fc, [id]: { box, t: Date.now() } } }
    })
  },
  visit(href: string, label: string) {
    update((p) => (p.last?.href === href ? p : { ...p, last: { href, label, t: Date.now() } }))
  },
  dismissHint() {
    update((p) => ({ ...p, hintDismissed: true }))
  },
  reset() {
    commit({ ...EMPTY, hintDismissed: state.hintDismissed })
  },
}
