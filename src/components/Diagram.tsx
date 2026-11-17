import { ArrowDown, RotateCw } from 'lucide-react'
import { Fragment } from 'react'
import type { Celula, Diagrama } from '../content/types'

function Cell({ c, n, className = '' }: { c: Celula; n?: number; className?: string }) {
  return (
    <div className={`cell t-${c.tom ?? 'indigo'} ${className}`}>
      {n !== undefined && <i>{n}</i>}
      <b>{c.t}</b>
      {c.d && <span>{c.d}</span>}
    </div>
  )
}

export function Diagram({ d }: { d: Diagrama }) {
  switch (d.tipo) {
    case 'fluxo':
      return (
        <div className="dg">
          <div className="dg-flow">
            {d.passos.map((p, i) => (
              <Fragment key={i}>
                {i > 0 && <div className="arrow"><ArrowDown aria-hidden="true" /></div>}
                <Cell c={p} n={i + 1} />
              </Fragment>
            ))}
          </div>
          {d.ciclo && <p className="dg-cycle"><RotateCw aria-hidden="true" /> e volta ao início: é um ciclo</p>}
        </div>
      )
    case 'grelha': {
      const cols = d.colunas
      return (
        <div className="dg dg-grid" style={{ gridTemplateColumns: cols >= 5 ? 'repeat(auto-fit, minmax(96px, 1fr))' : cols === 3 ? 'repeat(auto-fit, minmax(150px, 1fr))' : cols === 2 ? 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))' : '1fr' }}>
          {d.celulas.map((c, i) => <Cell key={i} c={c} />)}
        </div>
      )
    }
    case 'matriz':
      return (
        <div className="dg dg-matrix">
          <span />
          <span className="ax">{d.colunas[0]}</span>
          <span className="ax">{d.colunas[1]}</span>
          <span className="ax v">{d.linhas[0]}</span>
          <Cell c={d.celulas[0]} />
          <Cell c={d.celulas[1]} />
          <span className="ax v">{d.linhas[1]}</span>
          <Cell c={d.celulas[2]} />
          <Cell c={d.celulas[3]} />
        </div>
      )
    case 'porter':
      return (
        <div className="dg dg-porter">
          <Cell c={d.cima} className="top" />
          <Cell c={d.esquerda} className="left" />
          <Cell c={d.centro} className="mid" />
          <Cell c={d.direita} className="right" />
          <Cell c={d.baixo} className="bot" />
        </div>
      )
    case 'grupos':
      return (
        <div className="dg dg-groups">
          {d.grupos.map((g, i) => (
            <div key={i} className={`t-${g.tom}`}>
              <h4>{g.t}</h4>
              <div className="items">{g.itens.map((c, j) => <Cell key={j} c={{ ...c, tom: g.tom }} />)}</div>
            </div>
          ))}
        </div>
      )
    case 'tabela':
      return (
        <div className="dg" style={{ overflowX: 'auto' }}>
          <table className="dg-table">
            <thead><tr>{d.cabecalho.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {d.linhas.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j} className={/^●+$/.test(c) ? 'dots' : undefined}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )
  }
}
