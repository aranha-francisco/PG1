// Tipos partilhados do conteúdo (temas, perguntas, cartões, diagramas).
// Os `id` de cartões e perguntas nunca devem mudar depois de publicados: o progresso guardado depende deles.

export type BlocoId = 'origens' | 'ambiente' | 'decisao' | 'estrategia'

export interface Bloco {
  id: BlocoId
  n: number
  titulo: string
  pergunta: string
  aulas: number[]
}

export type FlashTipo = 'termo' | 'autor' | 'explica' | 'exemplo'

export interface Flashcard {
  id: string
  tipo: FlashTipo
  frente: string
  verso: string
}

export type QuizTipo = 'conceito' | 'cenario' | 'calculo'

export interface Opcao {
  t: string
  /** porque está certa ou errada */
  porque: string
}

export interface Pergunta {
  id: string
  tipo: QuizTipo
  pergunta: string
  opcoes: Opcao[]
  /** índice da opção certa (0 = a) */
  certa: number
}

// ---------- Diagramas ----------

export type Tom = 'indigo' | 'teal' | 'orange' | 'pink' | 'green' | 'blue' | 'gray' | 'red'

export interface Celula {
  t: string
  d?: string
  tom?: Tom
}

export type Diagrama =
  | { tipo: 'fluxo'; passos: Celula[]; ciclo?: boolean }
  | { tipo: 'grelha'; colunas: number; celulas: Celula[] }
  | { tipo: 'matriz'; colunas: [string, string]; linhas: [string, string]; celulas: [Celula, Celula, Celula, Celula] }
  | { tipo: 'porter'; centro: Celula; cima: Celula; esquerda: Celula; direita: Celula; baixo: Celula }
  | { tipo: 'grupos'; grupos: { t: string; tom: Tom; itens: Celula[] }[] }
  | { tipo: 'tabela'; cabecalho: string[]; linhas: string[][] }

