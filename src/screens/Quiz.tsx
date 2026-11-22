import { X } from 'lucide-react'
import { useCallback, useState } from 'react'
import { Page } from '../components/Page'
import { QuizResult, QuizRun, prepare, type RunQ } from '../components/QuizRun'
import { EXTRA, PROFESSOR, type QuizItem } from '../content'
import { getProgress } from '../lib/progress'
import { go } from '../lib/router'
import { shuffle } from '../lib/text'

export function leave(fallback: string) {
  if (history.length > 1) history.back()
  else go(fallback)
}

export interface QuizParams {
  src: 'prof' | 'extra' | 'mix'
  aulas: number[]
  n: number
  erradas: boolean
}

export function parseQuiz(q: URLSearchParams): QuizParams {
  const src = (q.get('src') as QuizParams['src']) || 'prof'
  const aulas = (q.get('aulas') || '').split(',').map(Number).filter(Boolean)
  return { src, aulas, n: Number(q.get('n') || 0), erradas: q.get('erradas') === '1' }
}

export function buildPool({ src, aulas, erradas }: QuizParams): QuizItem[] {
  const p = getProgress()
  const base = src === 'prof' ? PROFESSOR : src === 'extra' ? EXTRA : [...PROFESSOR, ...EXTRA]
  return base.filter((q) => (!aulas.length || aulas.includes(q.aula)) && (!erradas || (p.qa[q.id] && !p.qa[q.id].ok)))
}

function build(params: QuizParams): RunQ[] {
  let pool = buildPool(params)
  // Por aula, as perguntas do professor seguem a ordem do documento; caso contrário, baralhadas.
  if (!(params.src === 'prof' && params.aulas.length === 1 && !params.erradas)) pool = shuffle(pool)
  if (params.n > 0) pool = pool.slice(0, params.n)
  return prepare(pool)
}

export function Quiz({ params, runKey }: { params: QuizParams; runKey: string }) {
  const single = params.aulas.length === 1 ? params.aulas[0] : null
  const fallback = '/escolha'
  const [qs, setQs] = useState<RunQ[]>(() => build(params))
  const [results, setResults] = useState<boolean[] | null>(null)
  const [key, setKey] = useState(runKey)
  const [nonce, setNonce] = useState(0)
  if (key !== runKey) {
    setKey(runKey)
    setQs(build(params))
    setResults(null)
  }
  const restart = useCallback(() => { setQs(build(params)); setResults(null); setNonce((x) => x + 1) }, [params])

  const what = params.src === 'prof' ? 'Professor' : params.src === 'extra' ? 'Mais treino' : 'Misto'
  const title = `${params.erradas ? 'Erradas · ' : ''}${what}${single ? ` · Aula ${single}` : params.aulas.length ? ` · Aulas ${params.aulas.join(', ')}` : ''}`
  const exit = (
    <button type="button" className="back" onClick={() => leave(fallback)} aria-label="Sair">
      <X aria-hidden="true" style={{ width: 22, height: 22 }} /> <span>Sair</span>
    </button>
  )

  if (!qs.length) {
    return (
      <Page title={title} noTabs right={exit}>
        <h1 className="large-title" style={{ fontSize: 28 }}>{title}</h1>
        <p className="subtitle">{params.erradas ? 'Não tens perguntas erradas aqui. Bom sinal!' : 'Não há perguntas com estes filtros.'}</p>
      </Page>
    )
  }

  return (
    <Page title={title} noTabs right={exit}>
      {results ? (
        <>
          <h1 className="large-title" style={{ fontSize: 28 }}>{title}</h1>
          <QuizResult qs={qs} results={results}>
            <div className="stack">
              <button type="button" className="btn primary block" onClick={restart}>Outra vez</button>
              <button type="button" className="btn block" onClick={() => leave(fallback)}>Voltar</button>
            </div>
          </QuizResult>
        </>
      ) : (
        <QuizRun key={key + '|' + nonce} qs={qs} label={title} onFinish={setResults} />
      )}
    </Page>
  )
}
