import { Fragment, type ReactNode } from 'react'

/** Converte `**negrito**` em <b>. Tudo o resto é texto simples. */
export function Rich({ text }: { text: string }): ReactNode {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((p, i) => (i % 2 ? <b key={i}>{p}</b> : <Fragment key={i}>{p}</Fragment>))
}

export const plain = (s: string) => s.replace(/\*\*/g, '')

/** Minúsculas e sem acentos, para pesquisar. */
export const fold = (s: string) => plain(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Realça os termos pesquisados num texto (comparação sem acentos). */
export function Highlight({ text, q }: { text: string; q: string }): ReactNode {
  const t = plain(text)
  const needle = fold(q.trim())
  if (!needle) return t
  const hay = fold(t)
  const out: ReactNode[] = []
  let from = 0
  let idx = hay.indexOf(needle)
  let k = 0
  while (idx !== -1 && k < 20) {
    out.push(t.slice(from, idx), <mark key={k++}>{t.slice(idx, idx + needle.length)}</mark>)
    from = idx + needle.length
    idx = hay.indexOf(needle, from)
  }
  out.push(t.slice(from))
  return out
}

export function diasAte(d: Date): number {
  const now = new Date()
  const a = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  const b = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())
  return Math.round((b - a) / 86400000)
}
