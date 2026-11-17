import { AulaRow } from '../components/AulaRow'
import { Page } from '../components/Page'
import { BLOCOS, aulaByN } from '../content'
import { useProgress } from '../lib/progress'

export function Aulas() {
  const p = useProgress()
  return (
    <Page title="Aulas" restoreKey="aulas">
      <p className="eyebrow">Aulas 1 a 14</p>
      <h1 className="large-title">Aulas</h1>
      <p className="subtitle">Cada aula tem a pergunta-guia, um resumo, as cinco ideias para levar, as confusões a evitar e o mini-caso.</p>
      {BLOCOS.map((b) => {
        const aulas = b.aulas.map(aulaByN).filter((a) => !!a)
        if (!aulas.length) return null
        return (
          <section key={b.id}>
            <h2 className="sec-h">{b.n} · {b.titulo}</h2>
            <nav className="list" aria-label={b.titulo}>
              {aulas.map((a) => <AulaRow key={a.n} a={a} p={p} showQuestion />)}
            </nav>
          </section>
        )
      })}
    </Page>
  )
}
