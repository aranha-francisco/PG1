import { ChevronRight, Search, X } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { Page } from '../components/Page'
import { search, snippet } from '../lib/search'
import { Highlight } from '../lib/text'

const SUGESTOES = ['eficácia', 'Coase', 'burocracia', 'Hawthorne', 'Mintzberg', 'VUCA', 'PESTEL', 'substituto', 'SWOT', 'postura', 'ancoragem', 'causalidade', 'Ansoff', 'KPI', 'Goodhart']

let lastQ = ''

export function Pesquisa() {
  const [q, setQ] = useState(lastQ)
  const input = useRef<HTMLInputElement>(null)
  const res = useMemo(() => search(q), [q])
  const set = (v: string) => { lastQ = v; setQ(v) }

  return (
    <Page title="Pesquisa" restoreKey="pesquisa">
      <h1 className="large-title" style={{ marginTop: 8 }}>Pesquisa</h1>
      <div className="search">
        <Search aria-hidden="true" />
        <input
          ref={input}
          type="search"
          inputMode="search"
          enterKeyHint="search"
          placeholder="Conceitos, modelos, autores…"
          aria-label="Pesquisar"
          value={q}
          onChange={(e) => set(e.target.value)}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
        {q && <button type="button" aria-label="Limpar" onClick={() => { set(''); input.current?.focus() }}><X size={18} /></button>}
      </div>

      {!q.trim() ? (
        <>
          <h2 className="sec-h">Experimenta</h2>
          <div className="chipbtns" style={{ marginLeft: 2 }}>
            {SUGESTOES.map((s) => <button type="button" key={s} className="chipbtn" onClick={() => set(s)}>{s}</button>)}
          </div>
        </>
      ) : res.length === 0 ? (
        <p className="subtitle" style={{ marginTop: 20, textAlign: 'center' }}>Sem resultados para «{q}».</p>
      ) : (
        <>
          <h2 className="sec-h">{res.length} {res.length === 1 ? 'resultado' : 'resultados'}</h2>
          <nav className="list">
            {res.map((d, i) => (
              <a key={i} className="row plain" href={'#' + d.href}>
                <span className="rt">
                  <span className="res-k">{d.tipo}{d.aula ? ` · Aula ${d.aula}` : ''}</span>
                  <b><Highlight text={d.titulo} q={q} /></b>
                  <span><Highlight text={snippet(d.texto)} q={q} /></span>
                </span>
                <ChevronRight className="chev" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </>
      )}
    </Page>
  )
}
