import { X } from 'lucide-react'
import { useState } from 'react'
import { AbertaRun, RespostaModelo } from '../components/AbertaRun'
import { Page } from '../components/Page'
import { QuizResult, QuizRun, prepare, type RunQ } from '../components/QuizRun'
import { ABERTAS, PROFESSOR, type Aberta } from '../content'
import type { Nivel } from '../lib/progress'
import { shuffle } from '../lib/text'
import { leave } from './Quiz'

const N_MCQ = 20
const N_ABERTAS = 3

/** 20 perguntas do professor de aulas variadas + 3 respostas abertas de aulas diferentes. */
function build(): { qs: RunQ[]; abertas: Aberta[] } {
  const qs = prepare(shuffle(PROFESSOR).slice(0, N_MCQ))
  const abertas: Aberta[] = []
  for (const a of shuffle(ABERTAS)) {
    if (abertas.length >= N_ABERTAS) break
    if (!abertas.some((x) => x.aula === a.aula)) abertas.push(a)
  }
  return { qs, abertas }
}

type Fase = 'intro' | 'mcq' | 'abertas' | 'fim'

export function Simulado() {
  const [s, setS] = useState(build)
  const [fase, setFase] = useState<Fase>('intro')
  const [res, setRes] = useState<boolean[]>([])
  const [rat, setRat] = useState<Nivel[]>([])
  const [run, setRun] = useState(0)

  const again = () => { setS(build()); setRes([]); setRat([]); setFase('mcq'); setRun((x) => x + 1) }
  const exit = (
    <button type="button" className="back" onClick={() => leave('/')} aria-label="Sair do simulado">
      <X aria-hidden="true" style={{ width: 22, height: 22 }} /> <span>Sair</span>
    </button>
  )

  return (
    <Page title="Simulado" noTabs={fase !== 'intro' && fase !== 'fim'} right={exit}>
      {fase === 'intro' && (
        <>
          <p className="eyebrow">Teste a 24 nov</p>
          <h1 className="large-title">Simulado</h1>
          <div className="card prose" style={{ marginTop: 12 }}>
            <p><b>{N_MCQ} perguntas de escolha múltipla</b> do professor, de aulas variadas, e depois <b>{N_ABERTAS} respostas abertas</b> de aulas diferentes.</p>
            <p>Nas abertas, responde de cabeça (ou num papel) antes de ver a resposta modelo. Como no teste, as erradas não descontam.</p>
          </div>
          <button type="button" className="btn primary block" style={{ marginTop: 16 }} onClick={() => setFase('mcq')}>Começar</button>
        </>
      )}
      {fase === 'mcq' && (
        <QuizRun key={'m' + run} qs={s.qs} label="Simulado · escolha múltipla" onFinish={(r) => { setRes(r); setFase('abertas') }} />
      )}
      {fase === 'abertas' && (
        <AbertaRun key={'a' + run} list={s.abertas} label="Simulado · abertas" onFinish={(r) => { setRat(r); setFase('fim') }} />
      )}
      {fase === 'fim' && (
        <>
          <h1 className="large-title" style={{ fontSize: 28 }}>Resultado do simulado</h1>
          <QuizResult qs={s.qs} results={res} title={`Escolha múltipla: ${res.filter(Boolean).length} de ${s.qs.length}`}>
            <div className="review">
              <p className="small" style={{ margin: '0 0 6px' }}>Abertas: {rat.filter((r) => r === 2).length} sei · {rat.filter((r) => r === 1).length} mais ou menos · {rat.filter((r) => r === 0).length} não sei</p>
              {s.abertas.map((a, k) => rat[k] < 2 && (
                <details className="rv" key={a.id}>
                  <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{a.id} · {a.pergunta}</summary>
                  <div style={{ marginTop: 8 }}><RespostaModelo a={a} /></div>
                </details>
              ))}
            </div>
            <div className="stack">
              <button type="button" className="btn primary block" onClick={again}>Novo simulado</button>
              <button type="button" className="btn block" onClick={() => leave('/')}>Voltar ao início</button>
            </div>
          </QuizResult>
        </>
      )}
    </Page>
  )
}
