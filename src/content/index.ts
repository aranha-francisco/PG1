import type { Aula, Flashcard, Pergunta } from './types'
import { aula01 } from './aulas/aula01'
import { aula02 } from './aulas/aula02'
import { aula03 } from './aulas/aula03'
import { aula04 } from './aulas/aula04'
import { aula05 } from './aulas/aula05'
import { aula06 } from './aulas/aula06'
import { aula07 } from './aulas/aula07'
import { aula08 } from './aulas/aula08'
import { aula09 } from './aulas/aula09'
import { aula10 } from './aulas/aula10'
import { aula11 } from './aulas/aula11'
import { aula12 } from './aulas/aula12'
import { aula13 } from './aulas/aula13'
import { aula14 } from './aulas/aula14'

export { BLOCOS } from './blocos'
export { MODELOS } from './modelos'
export { AUTORES } from './autores'

export const AULAS: Aula[] = [aula01, aula02, aula03, aula04, aula05, aula06, aula07, aula08, aula09, aula10, aula11, aula12, aula13, aula14].sort((a, b) => a.n - b.n)

export const aulaByN = (n: number) => AULAS.find((a) => a.n === n)

export interface QuizItem extends Pergunta { aula: number }
export interface CardItem extends Flashcard { aula: number }

export const ALL_QUIZ: QuizItem[] = AULAS.flatMap((a) => a.quiz.map((q) => ({ ...q, aula: a.n })))
export const ALL_CARDS: CardItem[] = AULAS.flatMap((a) => a.flashcards.map((c) => ({ ...c, aula: a.n })))

export const TESTE = new Date('2026-11-24T09:00:00')
