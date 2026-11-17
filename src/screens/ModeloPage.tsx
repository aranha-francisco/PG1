import { useEffect } from 'react'
import { Diagram } from '../components/Diagram'
import { Page } from '../components/Page'
import { AUTORES, MODELOS, aulaByN } from '../content'
import { actions } from '../lib/progress'
import { NotFound } from './NotFound'

export function ModeloPage({ id }: { id: string }) {
  const m = MODELOS.find((x) => x.id === id)
  useEffect(() => {
    if (m) actions.visit(`/modelo/${m.id}`, `Modelo · ${m.nome}`)
  }, [m])
  if (!m) return <NotFound />
  const autor = m.autor ? AUTORES.find((a) => a.id === m.autor) : undefined

  return (
    <Page title={m.nome} back={{ label: 'Modelos', to: '/modelos' }}>
      <p className="eyebrow">Modelo · Aula {m.aulas.join(', ')}</p>
      <h1 className="large-title q">{m.nome}</h1>
      <p className="subtitle">{m.oQue}</p>

      <div className="card" style={{ marginTop: 16 }}>
        <Diagram d={m.diagrama} />
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <dl className="kv"><dt>Quando usar</dt><dd>{m.quandoUsar}</dd></dl>
        <dl className="kv"><dt>Limitações</dt><dd><ul>{m.limitacoes.map((l, i) => <li key={i}>{l}</li>)}</ul></dd></dl>
      </div>

      <div className="warn" style={{ marginTop: 12 }}>
        <span className="lab">Armadilha</span>
        <p>{m.armadilha}</p>
      </div>

      <h2 className="sec-h">Onde aparece</h2>
      <div className="chips" style={{ margin: '0 0 0 4px' }}>
        {m.aulas.map((n) => <a key={n} className="chip" href={`#/aula/${n}`} title={aulaByN(n)?.titulo}>Aula {n}</a>)}
        {autor && <a className="chip gray" href={`#/autores#${autor.id}`}>{autor.nome}</a>}
      </div>
    </Page>
  )
}
