import { LiquidTabBar, type LiquidTab } from 'aranha-pwa-kit'
import { BookOpen, LayoutGrid, Search, House, Zap } from 'lucide-react'
import { useSyncExternalStore } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { useRoute, go } from './lib/router'
import { AulaPage } from './screens/AulaPage'
import { Aulas } from './screens/Aulas'
import { Flashcards } from './screens/Flashcards'
import { Inicio } from './screens/Inicio'
import { ModeloPage } from './screens/ModeloPage'
import { Autores, Modelos } from './screens/Modelos'
import { NotFound } from './screens/NotFound'
import { Pesquisa } from './screens/Pesquisa'
import { Quiz } from './screens/Quiz'
import { Treinar } from './screens/Treinar'

type Tab = 'inicio' | 'aulas' | 'modelos' | 'treinar' | 'pesquisa'

const TABS: LiquidTab<Tab>[] = [
  { id: 'inicio', label: 'Início', icon: <House aria-hidden="true" /> },
  { id: 'aulas', label: 'Aulas', icon: <BookOpen aria-hidden="true" /> },
  { id: 'modelos', label: 'Modelos', icon: <LayoutGrid aria-hidden="true" /> },
  { id: 'treinar', label: 'Treinar', icon: <Zap aria-hidden="true" /> },
  { id: 'pesquisa', label: 'Pesquisa', icon: <Search aria-hidden="true" /> },
]
const TAB_ROOT: Record<Tab, string> = { inicio: '/', aulas: '/aulas', modelos: '/modelos', treinar: '/treinar', pesquisa: '/pesquisa' }

const darkQuery = typeof matchMedia === 'function' ? matchMedia('(prefers-color-scheme: dark)') : null
function useDark() {
  return useSyncExternalStore(
    (cb) => { darkQuery?.addEventListener('change', cb); return () => darkQuery?.removeEventListener('change', cb) },
    () => !!darkQuery?.matches,
  )
}

const LIGHT = { lens: 'rgba(81, 70, 217, 0.13)', lensHeld: 'rgba(81, 70, 217, 0.11)', icon: 'rgba(60, 60, 67, 0.72)', iconOnLens: '#5146d9', iconOnHeldLens: '#5146d9' }
const DARK = { lens: 'rgba(139, 132, 255, 0.22)', lensHeld: 'rgba(139, 132, 255, 0.19)', icon: 'rgba(235, 235, 245, 0.7)', iconOnLens: '#a9a4ff', iconOnHeldLens: '#a9a4ff' }

export function App() {
  const route = useRoute()
  const dark = useDark()
  const { needRefresh: [needRefresh, setNeedRefresh], updateServiceWorker } = useRegisterSW()
  const [p0, p1] = route.parts

  let screen
  let tab: Tab = 'inicio'
  let tabsAway = false
  switch (p0) {
    case undefined: screen = <Inicio />; break
    case 'aulas': tab = 'aulas'; screen = <Aulas />; break
    case 'aula': tab = 'aulas'; screen = <AulaPage key={p1} n={Number(p1)} section={route.section} />; break
    case 'modelos': tab = 'modelos'; screen = <Modelos />; break
    case 'autores': tab = 'modelos'; screen = <Autores section={route.section} />; break
    case 'modelo': tab = 'modelos'; screen = <ModeloPage key={p1} id={p1 ?? ''} />; break
    case 'treinar': tab = 'treinar'; screen = <Treinar />; break
    case 'quiz': tab = 'treinar'; tabsAway = true; screen = <Quiz aulasParam={route.query.get('aulas')} nParam={route.query.get('n')} runKey={route.raw} />; break
    case 'flashcards': tab = 'treinar'; tabsAway = true; screen = <Flashcards aulasParam={route.query.get('aulas')} tipoParam={route.query.get('tipo')} runKey={route.raw} />; break
    case 'pesquisa': tab = 'pesquisa'; screen = <Pesquisa />; break
    default: screen = <NotFound />
  }

  return (
    <>
      <div className="pwa-backdrop backdrop" />
      <div className="pwa-frame">
        {screen}
        <LiquidTabBar
          tabs={TABS}
          active={tab}
          onSelect={(t) => go(TAB_ROOT[t])}
          colors={dark ? DARK : LIGHT}
          className={'tabs pwa-above-home-indicator' + (tabsAway ? ' away' : '')}
          ariaLabel="Secções"
        />
        {needRefresh && (
          <div className="toast" role="status">
            Há uma versão nova
            <button type="button" onClick={() => { setNeedRefresh(false); updateServiceWorker(true) }}>Atualizar</button>
          </div>
        )}
      </div>
    </>
  )
}
