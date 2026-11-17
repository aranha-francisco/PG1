import { useSyncExternalStore } from 'react'

// Rotas com hash (#/aula/7, #/quiz?aulas=1,2&n=10): a app fica numa só página, como pede o guia iOS.
export interface Route {
  raw: string
  path: string
  parts: string[]
  query: URLSearchParams
  /** secção dentro da página (#/aula/7#ideias → "ideias") */
  section?: string
}

function read(): string {
  return location.hash.replace(/^#/, '') || '/'
}

function subscribe(cb: () => void) {
  window.addEventListener('hashchange', cb)
  return () => window.removeEventListener('hashchange', cb)
}

export function parse(raw: string): Route {
  const [main, section] = raw.split('#')
  const [path, qs = ''] = main.split('?')
  const clean = path.startsWith('/') ? path : '/' + path
  return { raw, path: clean, parts: clean.split('/').filter(Boolean), query: new URLSearchParams(qs), section }
}

export function useRoute(): Route {
  const raw = useSyncExternalStore(subscribe, read, () => '/')
  return parse(raw)
}

export function go(to: string) {
  location.hash = '#' + to
}
