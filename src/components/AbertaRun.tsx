import { Eye } from 'lucide-react'
import { useState } from 'react'
import type { Aberta } from '../content'
import { actions, getProgress, type Nivel } from '../lib/progress'
import { Rich } from '../lib/text'

export const NIVEL_LABEL: Record<Nivel, string> = { 0: 'Não sei', 1: 'Mais ou menos', 2: 'Sei' }

/** Ordem de estudo: "não sei" primeiro, depois nunca vistas, "mais ou menos" e por fim "sei". */
export function porNecessidade(list: Aberta[]): Aberta[] {
  const p = getProgress()
  const w = (a: Aberta) => {
    const r = p.ab[a.id]?.r
    return r === undefined ? 1 : r === 0 ? 0 : r === 1 ? 2 : 3
  }
  return [...list].sort((a, b) => w(a) - w(b))
}

export function RespostaModelo({ a }: { a: Aberta }) {
  return (
    <div className="prose answer-model">
      {a.blocos.map((b, i) => (
        <div key={i}>
          {b.h && <h3>{b.h}</h3>}
          {b.p && <p><Rich text={b.p} /></p>}
          {b.bullets && <ul>{b.bullets.map((x, j) => <li key={j}><Rich text={x} /></li>)}</ul>}
        </div>
      ))}
      {a.chave.length > 0 && (
        <div className="chips" style={{ marginTop: 12 }}>
          <span className="small" style={{ alignSelf: 'center', marginRight: 2 }}>Palavras-chave:</span>
          {a.chave.map((k) => <span key={k} className="chip">{k}</span>)}
        </div>
      )}
    </div>
  )
}

interface Props {
  list: Aberta[]
  label: string
  onFinish: (ratings: Nivel[]) => void
}

export function AbertaRun({ list, label, onFinish }: Props) {
  const [i, setI] = useState(0)
  const [shown, setShown] = useState(false)
  const [ratings, setRatings] = useState<Nivel[]>([])
  const a = list[i]
  if (!a) return null

  const rate = (r: Nivel) => {
    actions.rate(a.id, r)
    const next = [...ratings, r]
    setRatings(next)
    document.querySelector('.page')?.scrollTo({ top: 0 })
    if (i + 1 < list.length) {
      setI(i + 1)
      setShown(false)
    } else onFinish(next)
  }

  return (
    <>
      <div className="qhead"><span>{label} · <b>{i + 1}</b> de <b>{list.length}</b></span><span>Aula {a.aula}</span></div>
      <div className="qbar"><i style={{ width: `${(i / list.length) * 100}%` }} /></div>
      <div className="qcard">
        <div className="qtag"><span className="chip">Resposta aberta · {a.id}</span></div>
        <p className="qtext">{a.pergunta}</p>
        {!shown ? (
          <>
            <p className="small" style={{ margin: '12px 0 0' }}>Pensa na tua resposta (ou di-la em voz alta): definição, explicação, exemplo. Depois compara.</p>
            <button type="button" className="btn primary block" style={{ marginTop: 14 }} onClick={() => setShown(true)}>
              <Eye aria-hidden="true" /> Ver resposta modelo
            </button>
          </>
        ) : (
          <div style={{ marginTop: 14 }}>
            <RespostaModelo a={a} />
          </div>
        )}
      </div>
      {shown && (
        <>
          <p className="small" style={{ textAlign: 'center', margin: '14px 0 8px' }}>Como correu a tua resposta?</p>
          <div className="rate3">
            <button type="button" className="btn no" onClick={() => rate(0)}>Não sei</button>
            <button type="button" className="btn mid" onClick={() => rate(1)}>Mais ou menos</button>
            <button type="button" className="btn yes" onClick={() => rate(2)}>Sei</button>
          </div>
        </>
      )}
    </>
  )
}
