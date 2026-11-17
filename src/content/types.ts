// Formato do conteúdo. Cada aula é um objeto `Aula` num ficheiro próprio (src/content/aulas/aulaNN.ts).
// Os `id` de cartões e perguntas nunca devem mudar depois de publicados: o progresso guardado depende deles.

export type BlocoId = 'origens' | 'ambiente' | 'decisao' | 'estrategia'

export interface Bloco {
  id: BlocoId
  n: number
  titulo: string
  pergunta: string
  aulas: number[]
}

/** Um parágrafo do resumo: subtítulo opcional, texto e/ou pontos. `**negrito**` é permitido. */
export interface ResumoBloco {
  h?: string
  p?: string
  bullets?: string[]
}

export interface Conceito {
  id: string
  termo: string
  def: string
  /** id de um modelo em modelos.ts, se o conceito tiver cartão próprio */
  modelo?: string
}

/** "Cuidado com…": duas ideias que se confundem. */
export interface Cuidado {
  a: string
  b: string
  /** símbolo entre as duas (por omissão ≠) */
  sinal?: string
  explicacao: string
}

export interface Caso {
  nome: string
  contexto: string
  pergunta: string
  /** dados do enunciado, em pontos curtos */
  dados?: string[]
  /** o raciocínio que os slides modelam */
  cadeia: { etapa: string; texto: string }[]
  nota?: string
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

export interface Aula {
  n: number
  bloco: BlocoId
  titulo: string
  pergunta: string
  /** fio condutor do slide de capa, ex.: "Macroambiente → PESTEL → Relações de causa e efeito" */
  fio: string
  data: string
  resumo: ResumoBloco[]
  conceitos: Conceito[]
  ideias: [string, string, string, string, string]
  cuidados: Cuidado[]
  caso: Caso
  flashcards: Flashcard[]
  quiz: Pergunta[]
}

// ---------- Modelos ----------

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

export interface Modelo {
  id: string
  nome: string
  aulas: number[]
  autor?: string
  oQue: string
  diagrama: Diagrama
  quandoUsar: string
  limitacoes: string[]
  armadilha: string
}

export interface Autor {
  id: string
  nome: string
  /** ano ou período mostrado */
  ano: string
  /** true se o ano não aparece nos slides (acrescentado por ser conhecido) */
  anoForaSlides?: boolean
  obra?: string
  ideia: string
  aulas: number[]
  modelo?: string
  /** só mencionado nos slides, sem desenvolvimento */
  mencionado?: boolean
}
