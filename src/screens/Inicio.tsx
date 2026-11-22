import { isIosSafariTab } from 'aranha-pwa-kit'
import { BookOpen, ChevronRight, ClipboardCheck, Play, RotateCcw, Share, X } from 'lucide-react'
import { useState } from 'react'
import { AulaRow } from '../components/AulaRow'
import { Page } from '../components/Page'
import { ABERTAS, BLOCOS, PROFESSOR, TEMAS, TESTE, aulaByN } from '../content'
import { actions, useProgress } from '../lib/progress'
import { overall } from '../lib/stats'
import { diasAte } from '../lib/text'

export function Inicio() {
  const p = useProgress()
  const s = overall(p)
  const dias = diasAte(TESTE)
  const [armed, setArmed] = useState(false)
  const showHint = !p.hintDismissed && isIosSafariTab()

  // "Continuar": última página visitada, ou o primeiro tema que ainda não sabes
  const firstTodo = TEMAS.find((t) => !p.temas[t.id]) ?? TEMAS[0]
  const cont = p.last ?? (firstTodo ? { href: `/tema/${firstTodo.id}`, label: `Aula ${firstTodo.aulas[0]} · ${firstTodo.titulo}` } : { href: '/temas', label: 'Temas' })

  const eyebrow = dias > 0 ? `LCDG · Teste a 24 nov · ${dias === 1 ? 'falta 1 dia' : `faltam ${dias} dias`}` : dias === 0 ? 'LCDG · O teste é hoje. Boa sorte!' : 'LCDG · Aulas 1 a 14'

  return (
    <Page title="Princípios de Gestão" restoreKey="inicio">
      <div className="hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="large-title">Princípios de Gestão</h1>
        <div className="stats">
          <a className="stat" href="#/temas"><b>{s.temasOk}/{TEMAS.length}</b><span>temas que sei</span></a>
          <a className="stat" href="#/escolha"><b>{s.profOk}/{PROFESSOR.length}</b><span>perguntas certas</span></a>
          <a className="stat" href="#/abertas"><b>{s.abOk}/{ABERTAS.length}</b><span>abertas que sei</span></a>
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
        </span>
        <ChevronRight className="chev" aria-hidden="true" />
      </a>

      <div className="tiles">
        <a className="tile" href="#/simulado">
          <ClipboardCheck aria-hidden="true" />
          <b>Simulado</b>
          <span>20 perguntas do professor + 3 abertas</span>
        </a>
        <a className="tile" href={s.profErr ? '#/quiz?src=prof&erradas=1' : '#/quiz?src=prof&n=10'}>
          <RotateCcw aria-hidden="true" />
          <b>{s.profErr ? `Rever erradas (${s.profErr})` : 'Quiz rápido'}</b>
          <span>{s.profErr ? 'As perguntas do professor que falhaste' : '10 perguntas do professor ao calhas'}</span>
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
        Feito a partir da lista de temas e das questões do professor e dos slides das aulas. Em caso de dúvida, confirma nos slides.
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
