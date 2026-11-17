import { AULAS, AUTORES, MODELOS } from '../content'
import { fold, plain } from './text'

export type ResTipo = 'Conceito' | 'Modelo' | 'Autor' | 'Aula' | 'Ideia' | 'Cuidado'

export interface Doc {
  tipo: ResTipo
  titulo: string
  texto: string
  href: string
  aula?: number
  /** texto normalizado para pesquisa */
  k: string
  kt: string
}

function doc(tipo: ResTipo, titulo: string, texto: string, href: string, aula?: number): Doc {
  return { tipo, titulo, texto, href, aula, k: fold(titulo + ' ' + texto), kt: fold(titulo) }
}

let INDEX: Doc[] | null = null

function build(): Doc[] {
  const out: Doc[] = []
  for (const a of AULAS) {
    out.push(doc('Aula', `Aula ${a.n} · ${a.titulo}`, a.pergunta + ' ' + a.fio, `/aula/${a.n}`, a.n))
    for (const c of a.conceitos) out.push(doc('Conceito', c.termo, c.def, c.modelo ? `/modelo/${c.modelo}` : `/aula/${a.n}#conceitos`, a.n))
    a.ideias.forEach((i) => out.push(doc('Ideia', i, `Cinco ideias para levar · Aula ${a.n}`, `/aula/${a.n}#ideias`, a.n)))
    for (const c of a.cuidados) out.push(doc('Cuidado', `${c.a} ${c.sinal ?? '≠'} ${c.b}`, c.explicacao, `/aula/${a.n}#cuidados`, a.n))
  }
  for (const m of MODELOS) out.push(doc('Modelo', m.nome, m.oQue, `/modelo/${m.id}`, m.aulas[0]))
  for (const au of AUTORES) out.push(doc('Autor', au.nome, `${au.ano} · ${au.ideia}`, `/autores#${au.id}`, au.aulas[0]))
  return out
}

const RANK: Record<ResTipo, number> = { Modelo: 0, Conceito: 1, Autor: 2, Aula: 3, Cuidado: 4, Ideia: 5 }

export function search(q: string): Doc[] {
  const terms = fold(q).split(/\s+/).filter((t) => t.length > 1 || /\d/.test(t))
  if (!terms.length) return []
  INDEX ??= build()
  const scored: { d: Doc; s: number }[] = []
  for (const d of INDEX) {
    if (!terms.every((t) => d.k.includes(t))) continue
    let s = RANK[d.tipo]
    if (terms.every((t) => d.kt.includes(t))) s -= 10
    if (d.kt.startsWith(terms[0])) s -= 5
    scored.push({ d, s })
  }
  return scored.sort((a, b) => a.s - b.s).slice(0, 60).map((x) => x.d)
}

export const snippet = (s: string, n = 140) => {
  const t = plain(s)
  return t.length > n ? t.slice(0, n - 1).trimEnd() + '…' : t
}
