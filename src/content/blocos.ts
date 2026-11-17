import type { Bloco } from './types'

// "A nossa viagem" (Aula 1). Os slides não indicam a que bloco pertence cada aula:
// a atribuição abaixo segue os temas e as transições "Onde ficámos?".
export const BLOCOS: Bloco[] = [
  { id: 'origens', n: 1, titulo: 'Origens', pergunta: 'Como nasceu o pensamento de Gestão?', aulas: [1, 2, 3, 4, 5, 6] },
  { id: 'ambiente', n: 2, titulo: 'Ambiente & Competição', pergunta: 'Onde compete a organização?', aulas: [7, 8, 9] },
  { id: 'decisao', n: 3, titulo: 'Decisão', pergunta: 'Como decidimos?', aulas: [10, 11, 12] },
  { id: 'estrategia', n: 4, titulo: 'Estratégia, Objetivos & Organização', pergunta: 'Para onde vamos e como nos organizamos?', aulas: [13, 14] },
]
