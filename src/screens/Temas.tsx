import { Check, ChevronRight, MessageSquareText, Zap } from 'lucide-react'
import { useEffect } from 'react'
import { Diagram } from '../components/Diagram'
import { Page } from '../components/Page'
import { AULAS, BLOCOS, TEMAS, aulaByN } from '../content'
import { actions, useProgress } from '../lib/progress'
import { abertasDaAula, aulaStats, profDaAula, temasDaAula } from '../lib/stats'
import { Rich } from '../lib/text'
import { NotFound } from './NotFound'

export function Temas() {
  const p = useProgress()
  return (
    <Page title="Temas" restoreKey="temas">
      <p className="eyebrow">A lista do professor</p>
      <h1 className="large-title">Temas</h1>
      <p className="subtitle">Só o que o professor indicou para cada aula. Cada tema cabe num ecrã: o essencial, as partes, um exemplo e a armadilha.</p>
      {BLOCOS.map((b) => (
        <section key={b.id}>
          {b.aulas.map((n) => {
            const au = aulaByN(n)
            const temas = temasDaAula(n)
            if (!au || !temas.length) return null
            const s = aulaStats(p, n)
            return (
              <div key={n}>
                <h2 className="sec-h"><span>Aula {n} · {au.titulo}</span><span>{s.pct}%</span></h2>
                <nav className="list">
                  {temas.map((t) => {
                    const sei = !!p.temas[t.id]
                    return (
                      <a key={t.id} className="row" href={`#/tema/${t.id}`}>
                        <span className={'ring' + (sei ? ' done' : '')} style={{ ['--p' as string]: sei ? 100 : 0 }}>
                          <span>{sei ? <Check aria-hidden="true" strokeWidth={3} /> : n}</span>
                        </span>
                        <span className="rt">
                          <b>{t.titulo}</b>
                          <span>{t.autor ? `${t.autor} · ` : ''}{t.aulas.length > 1 ? `Aulas ${t.aulas.join(' e ')}` : `Aula ${n}`}</span>
                        </span>
                        <ChevronRight className="chev" aria-hidden="true" />
                      </a>
                    )
                  })}
                </nav>
              </div>
            )
          })}
        </section>
      ))}
    </Page>
  )
}

export function TemaPage({ id }: { id: string }) {
  const p = useProgress()
  const t = TEMAS.find((x) => x.id === id)
  useEffect(() => {
    if (t) actions.visit(`/tema/${t.id}`, `Aula ${t.aulas[0]} · ${t.titulo}`)
  }, [t])
  if (!t) return <NotFound />

  const n = t.aulas[0]
  const idx = TEMAS.indexOf(t)
  const prev = TEMAS[idx - 1]
  const next = TEMAS[idx + 1]
  const sei = !!p.temas[t.id]
  const prof = t.aulas.flatMap(profDaAula)
  const ab = t.aulas.flatMap(abertasDaAula)
  const profOk = prof.filter((q) => p.qa[q.id]?.ok).length

  return (
    <Page title={t.titulo} back={{ label: 'Temas', to: '/temas' }}>
      <p className="eyebrow">{t.aulas.length > 1 ? `Aulas ${t.aulas.join(' e ')}` : `Aula ${n}`} · {AULAS.find((a) => a.n === n)?.titulo}</p>
      <h1 className="large-title q">{t.titulo}</h1>
      {t.autor && <div className="chips" style={{ marginTop: 4 }}><span className="chip">{t.autor}</span></div>}

      <div className="card essencial" style={{ marginTop: 14 }}>
        <span className="lab">O essencial</span>
        <p><Rich text={t.essencial} /></p>
      </div>

      {t.diagrama && <div className="card" style={{ marginTop: 12 }}><Diagram d={t.diagrama} /></div>}

      {t.pontos.length > 0 && (
        <>
          <h2 className="sec-h">Pontos-chave</h2>
          <div className="card prose"><ul>{t.pontos.map((x, i) => <li key={i}><Rich text={x} /></li>)}</ul></div>
        </>
      )}

      <h2 className="sec-h">Exemplo</h2>
      <div className="card prose"><p><Rich text={t.exemplo} /></p></div>

      <div className="warn" style={{ marginTop: 12 }}>
        <span className="lab">Armadilha</span>
        <p><Rich text={t.armadilha} /></p>
      </div>

      {t.tambemSai && t.tambemSai.length > 0 && (
        <div className="flag" style={{ marginTop: 12 }}>
          <span className="lab">Também sai</span>
          <ul>{t.tambemSai.map((x, i) => <li key={i}><Rich text={x} /></li>)}</ul>
        </div>
      )}

      <div className="btn-row">
        <a className="btn" href={`#/quiz?src=prof&aulas=${t.aulas.join(',')}`}>
          <Zap aria-hidden="true" /> {prof.length} perguntas{profOk ? ` · ${profOk} ✓` : ''}
        </a>
        <a className="btn" href={`#/aberta?ids=${ab.map((a) => a.id).join(',')}`} aria-disabled={!ab.length} style={ab.length ? undefined : { opacity: 0.4, pointerEvents: 'none' }}>
          <MessageSquareText aria-hidden="true" /> {ab.length === 1 ? '1 aberta' : `${ab.length} abertas`}
        </a>
      </div>

      <button type="button" className={'btn block' + (sei ? ' done' : ' primary')} style={{ marginTop: 12 }} onClick={() => actions.toggleTema(t.id)}>
        {sei ? <><Check aria-hidden="true" strokeWidth={3} /> Sei este tema</> : 'Marcar: sei este tema'}
      </button>

      <nav className="pn" aria-label="Outros temas">
        {prev && <a href={`#/tema/${prev.id}`}><span>‹ Aula {prev.aulas[0]}</span><b>{prev.titulo}</b></a>}
        {next && <a className="next" href={`#/tema/${next.id}`}><span>Aula {next.aulas[0]} ›</span><b>{next.titulo}</b></a>}
      </nav>
    </Page>
  )
}
