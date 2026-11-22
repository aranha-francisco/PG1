import type { Flashcard, Pergunta } from './types'

export { BLOCOS } from './blocos'
export { AULAS, type AulaInfo } from './indice'
export { TEMAS, type Tema } from './temas'
export { ABERTAS, type Aberta } from './abertas'
export { PROFESSOR, CHAVE_PROFESSOR, type QuestaoProf } from './professor'
export { EXTRA } from './extra'
export { CARTOES } from './cartoes'

import { AULAS } from './indice'

export interface QuizItem extends Pergunta { aula: number }
export interface CardItem extends Flashcard { aula: number }

export const aulaByN = (n: number) => AULAS.find((a) => a.n === n)

export const TESTE = new Date('2026-11-24T09:00:00')
