import {
  ArrowRightLeft, BadgeCheck, Building2, Calculator, ChartNoAxesColumn, ChevronRight, Compass, Gauge, Globe2, Grid2x2, Layers,
  ListChecks, Repeat, Scale, ShieldAlert, Sigma, Split, Target, Timer, TrendingUp, UserCog, Users, Workflow, Brain, Landmark, ClipboardList,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { Page } from '../components/Page'
import { AUTORES, MODELOS } from '../content'
import { go } from '../lib/router'

export const MODEL_ICONS: Record<string, ComponentType<{ 'aria-hidden'?: boolean | 'true' }>> = {
  'make-or-buy': ArrowRightLeft, taylor: Timer, 'fayol-funcoes': Workflow, 'fayol-14': ClipboardList, weber: Landmark, polc: Repeat,
  mintzberg: Users, katz: UserCog, vuca: Globe2, pestel: Layers, porter: Compass, 'estrategias-genericas': Scale, swot: Grid2x2,
  'fatores-tres': Split, 'processo-racional': ListChecks, 'matriz-decisao': Calculator, enviesamentos: Brain, 'tipos-analise': ChartNoAxesColumn,
  ansoff: TrendingUp, smart: Target, mbo: Building2, 'dado-metrica-kpi': Gauge, 'lagging-leading': Sigma, bsc: BadgeCheck, goodhart: ShieldAlert,
}

function Seg({ on }: { on: 'modelos' | 'autores' }) {
  return (
    <div className="seg" role="tablist" style={{ marginTop: 12 }}>
      <button type="button" role="tab" aria-selected={on === 'modelos'} className={on === 'modelos' ? 'on' : ''} onClick={() => go('/modelos')}>Modelos</button>
      <button type="button" role="tab" aria-selected={on === 'autores'} className={on === 'autores' ? 'on' : ''} onClick={() => go('/autores')}>Autores</button>
    </div>
  )
}

export function Modelos() {
  const sorted = [...MODELOS].sort((a, b) => a.aulas[a.aulas.length - 1] - b.aulas[b.aulas.length - 1] || 0)
  return (
    <Page title="Modelos" restoreKey="modelos">
      <p className="eyebrow">{MODELOS.length} modelos</p>
      <h1 className="large-title">Modelos</h1>
      <p className="subtitle">Cada modelo num ecrã: o que é, as partes, quando usar, limitações e a armadilha típica.</p>
      <Seg on="modelos" />
      <div className="mgrid" style={{ marginTop: 16 }}>
        {sorted.map((m) => {
          const Icon = MODEL_ICONS[m.id] ?? Layers
          return (
            <a key={m.id} className="mcard" href={`#/modelo/${m.id}`}>
              <span className="mi"><Icon aria-hidden="true" /></span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <b>{m.nome}</b>
                <span>Aula {m.aulas.join(', ')}</span>
              </span>
              <ChevronRight className="chev" aria-hidden="true" />
            </a>
          )
        })}
      </div>
    </Page>
  )
}

export function Autores({ section }: { section?: string }) {
  return (
    <Page title="Autores" restoreKey={section ? undefined : 'autores'} section={section}>
      <p className="eyebrow">Quem disse o quê</p>
      <h1 className="large-title">Autores</h1>
      <p className="subtitle">Por ordem cronológica. <span className="small">* ano que não aparece nos slides.</span></p>
      <Seg on="autores" />
      <div className="list" style={{ marginTop: 16 }}>
        {AUTORES.map((a) => (
          <div className="autor" id={a.id} key={a.id}>
            <div className="ah"><b>{a.nome}</b><span>{a.ano}{a.anoForaSlides ? '*' : ''}</span></div>
            {a.obra && <p className="ob">{a.obra}</p>}
            <p>{a.ideia}</p>
            <div className="chips">
              {a.aulas.map((n) => <a key={n} className="chip gray" href={`#/aula/${n}`}>Aula {n}</a>)}
              {a.modelo && <a className="chip" href={`#/modelo/${a.modelo}`}>Ver modelo</a>}
            </div>
          </div>
        ))}
      </div>
    </Page>
  )
}
