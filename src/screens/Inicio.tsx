import { isIosSafariTab } from 'aranha-pwa-kit'
import { BookOpen, ChevronRight, GalleryVerticalEnd, Play, Share, X, Zap } from 'lucide-react'
import { useState } from 'react'
import { AulaRow } from '../components/AulaRow'
import { Page } from '../components/Page'
import { AULAS, BLOCOS, TESTE, aulaByN } from '../content'
import { actions, useProgress } from '../lib/progress'
import { aulaQuiz, overall } from '../lib/stats'
import { diasAte } from '../lib/text'

export function Inicio() {
  const p = useProgress()
  const s = overall(p)
  const dias = diasAte(TESTE)
  const [armed, setArmed] = useState(false)
  const showHint = !p.hintDismissed && isIosSafariTab()

  // "Continuar": última aula visitada, ou a primeira ainda não revista
  const lastN = p.last?.href.match(/^\/aula\/(\d+)/)?.[1]
  const firstTodo = AULAS.find((a) => !p.revisto[a.n]) ?? AULAS[0]
  const cont = p.last ?? { href: `/aula/${firstTodo.n}`, label: `Aula ${firstTodo.n} · ${firstTodo.titulo}` }
  const contAula = lastN ? aulaByN(+lastN) : p.last ? undefined : firstTodo
  const contPct = contAula ? Math.round((aulaQuiz(p, contAula.n).ok / Math.max(1, contAula.quiz.length)) * 100) : null

  const eyebrow = dias > 0 ? `LCDG · Teste a 24 nov · ${dias === 1 ? 'falta 1 dia' : `faltam ${dias} dias`}` : dias === 0 ? 'LCDG · O teste é hoje. Boa sorte!' : 'LCDG · Aulas 1 a 14'

  return (
    <Page title="Princípios de Gestão" restoreKey="inicio">
      <div className="hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="large-title">Princípios de Gestão</h1>
        <div className="stats">
          <div className="stat"><b>{s.revistas}/{AULAS.length}</b><span>aulas revistas</span></div>
          <div className="stat"><b>{s.quizPct === null ? '—' : s.quizPct + '%'}</b><span>certas no quiz</span></div>
          <div className="stat"><b>{s.known}</b><span>cartões «sei»</span></div>
        </div>
      </div>

      {showHint && (
        <div className="hint">
          <Share aria-hidden="true" />
          <span>Instala no ecrã principal para estudar sem rede: <b>Partilhar → Adicionar ao ecrã principal</b>. O progresso da app instalada começa do zero.</span>
          <button type="button" aria-label="Fechar" onClick={actions.dismissHint}><X size={18} /></button>
        </div>
      )}

      <a className="cont" href={'#' + cont.href}>
        <span className="ic">{p.last ? <Play aria-hidden="true" /> : <BookOpen aria-hidden="true" />}</span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <small>{p.last ? 'Continuar onde ficaste' : 'Começar por aqui'}</small>
          <b>{cont.label}</b>
          {contPct !== null && <span className="pbar"><i style={{ width: contPct + '%' }} /></span>}
        </span>
        <ChevronRight className="chev" aria-hidden="true" />
      </a>

      <div className="tiles">
        <a className="tile" href="#/quiz?n=10">
          <Zap aria-hidden="true" />
          <b>Quiz rápido</b>
          <span>10 perguntas ao calhas de todas as aulas</span>
        </a>
        <a className="tile" href="#/flashcards">
          <GalleryVerticalEnd aria-hidden="true" />
          <b>Flashcards</b>
          <span>Os que não sabes aparecem mais vezes</span>
        </a>
      </div>

      {BLOCOS.map((b) => {
        const aulas = b.aulas.map(aulaByN).filter((a) => !!a)
        if (!aulas.length) return null
        return (
          <section key={b.id}>
            <h2 className="sec-h">{b.n} · {b.titulo}</h2>
            <nav className="list" aria-label={b.titulo}>
              {aulas.map((a) => <AulaRow key={a.n} a={a} p={p} />)}
            </nav>
          </section>
        )
      })}

      <p className="foot">
        Resumos feitos a partir dos slides das aulas, para estudar. Em caso de dúvida, confirma nos slides ou com o professor.
        <br />O teu progresso fica guardado só neste dispositivo.
        <br />
        <button
          type="button"
          onClick={() => {
            if (armed) {
              actions.reset()
              setArmed(false)
            } else {
              setArmed(true)
              setTimeout(() => setArmed(false), 4000)
            }
          }}
        >
          {armed ? 'Carrega outra vez para confirmar' : 'Apagar o meu progresso'}
        </button>
      </p>
    </Page>
  )
}
