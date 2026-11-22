import { LiquidTabBar, type LiquidTab } from 'aranha-pwa-kit'
import { BookOpen, CircleCheckBig, GalleryVerticalEnd, House, MessageSquareText } from 'lucide-react'
import { useSyncExternalStore } from 'react'
import { useRegisterSW } from 'virtual:pwa-register/react'
import { useRoute, go } from './lib/router'
import { AbertaTreino, Abertas } from './screens/Abertas'
import { Cartoes } from './screens/Cartoes'
import { Escolha } from './screens/Escolha'
import { Flashcards } from './screens/Flashcards'
import { Inicio } from './screens/Inicio'
import { NotFound } from './screens/NotFound'
import { Quiz, parseQuiz } from './screens/Quiz'
import { Simulado } from './screens/Simulado'
import { TemaPage, Temas } from './screens/Temas'

type Tab = 'inicio' | 'temas' | 'escolha' | 'abertas' | 'cartoes'

const TABS: LiquidTab<Tab>[] = [
  { id: 'inicio', label: 'Início', icon: <House aria-hidden="true" /> },
  { id: 'temas', label: 'Temas', icon: <BookOpen aria-hidden="true" /> },
  { id: 'escolha', label: 'Escolha', icon: <CircleCheckBig aria-hidden="true" /> },
  { id: 'abertas', label: 'Abertas', icon: <MessageSquareText aria-hidden="true" /> },
  { id: 'cartoes', label: 'Cartões', icon: <GalleryVerticalEnd aria-hidden="true" /> },
]
const TAB_ROOT: Record<Tab, string> = { inicio: '/', temas: '/temas', escolha: '/escolha', abertas: '/abertas', cartoes: '/cartoes' }

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
    case 'temas': tab = 'temas'; screen = <Temas />; break
    case 'tema': tab = 'temas'; screen = <TemaPage key={p1} id={p1 ?? ''} />; break
    case 'escolha': tab = 'escolha'; screen = <Escolha />; break
    case 'quiz': tab = 'escolha'; tabsAway = true; screen = <Quiz params={parseQuiz(route.query)} runKey={route.raw} />; break
    case 'simulado': tab = 'inicio'; tabsAway = true; screen = <Simulado key={route.raw} />; break
    case 'abertas': tab = 'abertas'; screen = <Abertas />; break
    case 'aberta': tab = 'abertas'; tabsAway = true; screen = <AbertaTreino query={route.query} runKey={route.raw} />; break
    case 'cartoes': tab = 'cartoes'; screen = <Cartoes />; break
    case 'flashcards': tab = 'cartoes'; tabsAway = true; screen = <Flashcards aulasParam={route.query.get('aulas')} tipoParam={route.query.get('tipo')} runKey={route.raw} />; break
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
