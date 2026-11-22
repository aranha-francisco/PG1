import { useSyncExternalStore } from 'react'

// Progresso guardado só neste dispositivo (localStorage, sempre dentro de try/catch).
// Atenção: no iPhone, a app instalada tem armazenamento separado do Safari.

/** Autoavaliação de uma resposta aberta: 0 não sei · 1 mais ou menos · 2 sei */
export type Nivel = 0 | 1 | 2

export interface Progress {
  v: 2
  /** temas marcados como "sei este tema" */
  temas: Record<string, number>
  /** última resposta a cada pergunta de escolha múltipla (professor: "p7.2"; extra: "a7q4") */
  qa: Record<string, { ok: boolean; t: number }>
  /** respostas abertas: última autoavaliação */
  ab: Record<string, { r: Nivel; t: number }>
  /** flashcards: caixa de Leitner (0 = não sei … 4 = sei bem) */
  fc: Record<string, { box: number; t: number }>
  /** última página visitada, para "Continuar" */
  last?: { href: string; label: string; t: number }
  hintDismissed?: boolean
}

const KEY = 'pg-gestao:v2'
const EMPTY: Progress = { v: 2, temas: {}, qa: {}, ab: {}, fc: {} }

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...EMPTY }
    const p = JSON.parse(raw) as Partial<Progress>
    return { ...EMPTY, ...p, temas: p.temas || {}, qa: p.qa || {}, ab: p.ab || {}, fc: p.fc || {} }
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

window.addEventListener('storage', (e) => {
  if (e.key === KEY) {
    state = load()
    listeners.forEach((l) => l())
  }
})

// A versão anterior (pg-gestao:v1) tinha progresso de conteúdos que já não existem.
try {
  localStorage.removeItem('pg-gestao:v1')
} catch {
  /* ignorar */
}

export const actions = {
  toggleTema(id: string) {
    update((p) => {
      const temas = { ...p.temas }
      if (temas[id]) delete temas[id]
      else temas[id] = Date.now()
      return { ...p, temas }
    })
  },
  answer(id: string, ok: boolean) {
    update((p) => ({ ...p, qa: { ...p.qa, [id]: { ok, t: Date.now() } } }))
  },
  rate(id: string, r: Nivel) {
    update((p) => ({ ...p, ab: { ...p.ab, [id]: { r, t: Date.now() } } }))
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
