import { Check, ChevronRight, GalleryVerticalEnd, Zap } from 'lucide-react'
import { useEffect } from 'react'
import { Page } from '../components/Page'
import { AULAS, BLOCOS, MODELOS, aulaByN } from '../content'
import { actions, useProgress } from '../lib/progress'
import { aulaCards, aulaQuiz } from '../lib/stats'
import { Rich } from '../lib/text'
import { NotFound } from './NotFound'

export function AulaPage({ n, section }: { n: number; section?: string }) {
  const a = aulaByN(n)
  const p = useProgress()

  useEffect(() => {
    if (a) actions.visit(`/aula/${a.n}`, `Aula ${a.n} · ${a.titulo}`)
  }, [a])

  if (!a) return <NotFound />
  const bloco = BLOCOS.find((b) => b.id === a.bloco)
  const idx = AULAS.findIndex((x) => x.n === a.n)
  const prev = AULAS[idx - 1]
  const next = AULAS[idx + 1]
  const revisto = !!p.revisto[a.n]
  const q = aulaQuiz(p, a.n)
  const c = aulaCards(p, a.n)
  const modelos = MODELOS.filter((m) => m.aulas.includes(a.n))

  return (
    <Page title={`Aula ${a.n}`} back={{ label: 'Aulas', to: '/aulas' }} section={section}>
      <p className="eyebrow">Aula {a.n} · {bloco?.titulo} · {a.data}</p>
      <h1 className="large-title q">{a.pergunta}</h1>
      {a.titulo !== a.pergunta && <p className="subtitle" style={{ fontWeight: 600, color: 'var(--txt)' }}>{a.titulo}</p>}
      <p className="subtitle">{a.fio}</p>

      <div className="btn-row">
        <a className="btn" href={`#/quiz?aulas=${a.n}`}>
          <Zap aria-hidden="true" />
          Quiz {q.seen ? `${q.ok}/${q.total}` : `· ${q.total}`}
        </a>
        <a className="btn" href={`#/flashcards?aulas=${a.n}`}>
          <GalleryVerticalEnd aria-hidden="true" />
          Cartões {c.known ? `${c.known}/${c.total}` : `· ${c.total}`}
        </a>
      </div>

      <h2 className="sec-h" id="resumo">Resumo</h2>
      <div className="card prose">
        {a.resumo.map((r, i) => (
          <div key={i}>
            {r.h && <h3>{r.h}</h3>}
            {r.p && <p><Rich text={r.p} /></p>}
            {r.bullets && <ul>{r.bullets.map((b, j) => <li key={j}><Rich text={b} /></li>)}</ul>}
          </div>
        ))}
      </div>

      <h2 className="sec-h" id="ideias">Cinco ideias para levar</h2>
      <ol className="list ideas">
        {a.ideias.map((t, i) => <li key={i}><i>{i + 1}</i><span>{t}</span></li>)}
      </ol>

      <h2 className="sec-h" id="conceitos">Conceitos-chave</h2>
      <div className="list concepts">
        {a.conceitos.map((k) => (
          <div className="concept" key={k.id}>
            <b>{k.termo}</b>
            <p>{k.def}</p>
            {k.modelo && <a href={`#/modelo/${k.modelo}`}>Ver o modelo <ChevronRight aria-hidden="true" /></a>}
          </div>
        ))}
      </div>

      <h2 className="sec-h" id="cuidados">Cuidado com…</h2>
      <div>
        {a.cuidados.map((k, i) => (
          <div className="warn" key={i}>
            <div className="vs"><span>{k.a}</span><i>{k.sinal ?? '≠'}</i><span>{k.b}</span></div>
            <p>{k.explicacao}</p>
          </div>
        ))}
      </div>

      <h2 className="sec-h" id="caso">Mini-caso · {a.caso.nome}</h2>
      <div className="card caso">
        <p className="ctx">{a.caso.contexto}</p>
        {a.caso.dados && <div className="chips">{a.caso.dados.map((d, i) => <span className="chip gray" key={i}>{d}</span>)}</div>}
        <p className="q">{a.caso.pergunta}</p>
        <ol className="chain">
          {a.caso.cadeia.map((s, i) => (
            <li key={i}><i>{i + 1}</i><em>{s.etapa}</em><span>{s.texto}</span></li>
          ))}
        </ol>
        {a.caso.nota && <p className="nota">{a.caso.nota}</p>}
      </div>

      {modelos.length > 0 && (
        <>
          <h2 className="sec-h">Modelos desta aula</h2>
          <nav className="list">
            {modelos.map((m) => (
              <a className="row plain" key={m.id} href={`#/modelo/${m.id}`}>
                <span className="rt"><b>{m.nome}</b></span>
                <ChevronRight className="chev" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </>
      )}

      <button type="button" className={'btn block' + (revisto ? ' done' : ' primary')} style={{ marginTop: 24 }} onClick={() => actions.toggleRevisto(a.n)}>
        {revisto ? <><Check aria-hidden="true" strokeWidth={3} /> Revista</> : 'Marcar como revista'}
      </button>

      <nav className="pn" aria-label="Outras aulas">
        {prev && <a href={`#/aula/${prev.n}`}><span>‹ Aula {prev.n}</span><b>{prev.titulo}</b></a>}
        {next && <a className="next" href={`#/aula/${next.n}`}><span>Aula {next.n} ›</span><b>{next.titulo}</b></a>}
      </nav>
    </Page>
  )
}
