import { GalleryVerticalEnd } from 'lucide-react'
import { useState } from 'react'
import { Page } from '../components/Page'
import { AULAS, CARTOES } from '../content'
import type { FlashTipo } from '../content/types'
import { useProgress } from '../lib/progress'
import { go } from '../lib/router'

const TIPOS: { id: FlashTipo | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'termo', label: 'Termos' },
  { id: 'autor', label: 'Autores' },
  { id: 'explica', label: 'Explica' },
  { id: 'exemplo', label: 'Exemplos' },
]

export function Cartoes() {
  const p = useProgress()
  const [sel, setSel] = useState<number[]>([])
  const [tipo, setTipo] = useState<FlashTipo | 'todos'>('todos')
  const toggle = (k: number) => setSel((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k].sort((a, b) => a - b)))
  const pool = CARTOES.filter((c) => (!sel.length || sel.includes(c.aula)) && (tipo === 'todos' || c.tipo === tipo))
  const known = CARTOES.filter((c) => (p.fc[c.id]?.box ?? 0) >= 1).length
  const tipos = TIPOS.filter((t) => t.id === 'todos' || CARTOES.some((c) => c.tipo === t.id))

  return (
    <Page title="Cartões" restoreKey="cartoes">
      <p className="eyebrow">{known} de {CARTOES.length} «sei»</p>
      <h1 className="large-title">Cartões</h1>
      <p className="subtitle">Definições, listas e autores dos temas do professor. Toca para virar; os que não sabes voltam mais vezes.</p>

      <h2 className="sec-h">Aulas</h2>
      <div className="card">
        <div className="chipbtns">
          <button type="button" className={'chipbtn' + (sel.length === 0 ? ' on' : '')} onClick={() => setSel([])}>Todas</button>
          {AULAS.map((a) => (
            <button type="button" key={a.n} className={'chipbtn' + (sel.includes(a.n) ? ' on' : '')} onClick={() => toggle(a.n)} aria-pressed={sel.includes(a.n)} aria-label={`Aula ${a.n}`}>{a.n}</button>
          ))}
        </div>
      </div>

      <h2 className="sec-h">Tipo</h2>
      <div className="card">
        <div className="chipbtns">
          {tipos.map((t) => (
            <button type="button" key={t.id} className={'chipbtn' + (tipo === t.id ? ' on' : '')} onClick={() => setTipo(t.id)}>{t.label}</button>
          ))}
        </div>
        <button type="button" className="btn primary block" style={{ marginTop: 14 }} disabled={!pool.length}
          onClick={() => go(`/flashcards?${sel.length ? `aulas=${sel.join(',')}&` : ''}${tipo !== 'todos' ? `tipo=${tipo}` : ''}`)}>
          <GalleryVerticalEnd aria-hidden="true" /> Começar ({Math.min(20, pool.length)} de {pool.length})
        </button>
      </div>
    </Page>
  )
}
