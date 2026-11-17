import { ChevronLeft } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { go } from '../lib/router'

const saved = new Map<string, number>()

interface Props {
  /** chave para guardar a posição de scroll (listas); páginas de detalhe começam no topo */
  restoreKey?: string
  /** título pequeno que aparece na barra quando o título grande sai do ecrã */
  title: string
  back?: { label: string; to: string }
  right?: ReactNode
  section?: string
  noTabs?: boolean
  children: ReactNode
}

export function Page({ restoreKey, title, back, right, section, noTabs, children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [showTitle, setShowTitle] = useState(false)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (section) {
      const target = document.getElementById(section)
      if (target) {
        el.scrollTop = Math.max(0, target.offsetTop - 110)
        return
      }
    }
    el.scrollTop = restoreKey ? saved.get(restoreKey) ?? 0 : 0
  }, [restoreKey, section, title])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const lt = el.querySelector<HTMLElement>('.large-title')
    const nav = el.querySelector<HTMLElement>('.navbar')
    const onScroll = () => {
      setScrolled(el.scrollTop > 4)
      // o título pequeno aparece quando o título grande passa por baixo da barra
      if (lt) setShowTitle(el.scrollTop + (nav?.offsetHeight ?? 64) > lt.offsetTop + lt.offsetHeight - 8)
      if (restoreKey) saved.set(restoreKey, el.scrollTop)
    }
    onScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [restoreKey, title])

  return (
    <div className={'page' + (noTabs ? ' no-tabs' : '')} ref={ref}>
      <header className={'navbar' + (scrolled ? ' scrolled' : '') + (showTitle ? ' show-title' : '')}>
        <div className="nav-in">
          {back ? (
            <button type="button" className="back" onClick={() => go(back.to)}>
              <ChevronLeft aria-hidden="true" />
              <span>{back.label}</span>
            </button>
          ) : (
            <span />
          )}
          <div className="nav-title" aria-hidden={!showTitle}>{title}</div>
          <div className="nav-right">{right}</div>
        </div>
      </header>
      <main className="wrap">{children}</main>
    </div>
  )
}
