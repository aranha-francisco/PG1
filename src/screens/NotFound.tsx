import { Page } from '../components/Page'

export function NotFound() {
  return (
    <Page title="Não encontrado" back={{ label: 'Início', to: '/' }}>
      <h1 className="large-title">Página não encontrada</h1>
      <p className="subtitle">Este endereço não existe ou mudou. <a href="#/">Voltar ao início</a>.</p>
    </Page>
  )
}
