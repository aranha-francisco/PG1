import type { Aula, Flashcard, Pergunta } from './types'
import { aula01 } from './aulas/aula01'

export { BLOCOS } from './blocos'
export { MODELOS } from './modelos'
export { AUTORES } from './autores'

export const AULAS: Aula[] = [aula01].sort((a, b) => a.n - b.n)

export const aulaByN = (n: number) => AULAS.find((a) => a.n === n)

export interface QuizItem extends Pergunta { aula: number }
export interface CardItem extends Flashcard { aula: number }

export const ALL_QUIZ: QuizItem[] = AULAS.flatMap((a) => a.quiz.map((q) => ({ ...q, aula: a.n })))
export const ALL_CARDS: CardItem[] = AULAS.flatMap((a) => a.flashcards.map((c) => ({ ...c, aula: a.n })))

export const TESTE = new Date('2026-11-24T09:00:00')
