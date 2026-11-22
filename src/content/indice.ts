import type { BlocoId } from './types'

export interface AulaInfo { n: number; titulo: string; pergunta: string; data: string; bloco: BlocoId }

export const AULAS: AulaInfo[] = [
  {
    "n": 1,
    "titulo": "O que é a Gestão e porque precisamos de gestores?",
    "pergunta": "O que é a Gestão e porque precisamos de gestores?",
    "data": "22 set",
    "bloco": "origens"
  },
  {
    "n": 2,
    "titulo": "Porque existem empresas?",
    "pergunta": "Porque existem empresas?",
    "data": "24 set",
    "bloco": "origens"
  },
  {
    "n": 3,
    "titulo": "Existe uma «melhor forma» de gerir?",
    "pergunta": "Existe uma «melhor forma» de gerir?",
    "data": "29 set",
    "bloco": "origens"
  },
  {
    "n": 4,
    "titulo": "Das Máquinas às Pessoas e aos Sistemas",
    "pergunta": "Existe uma «melhor forma» de gerir?",
    "data": "1 out",
    "bloco": "origens"
  },
  {
    "n": 5,
    "titulo": "A Gestão num Mundo em Mudança",
    "pergunta": "O que podem realmente os gestores controlar?",
    "data": "6 out",
    "bloco": "origens"
  },
  {
    "n": 6,
    "titulo": "O Trabalho do Gestor",
    "pergunta": "O que fazem realmente os gestores?",
    "data": "13 out",
    "bloco": "origens"
  },
  {
    "n": 7,
    "titulo": "Compreender o Ambiente Empresarial",
    "pergunta": "Que forças externas podem destruir um bom negócio?",
    "data": "15 out",
    "bloco": "ambiente"
  },
  {
    "n": 8,
    "titulo": "Concorrência e Estratégia",
    "pergunta": "Porque são alguns setores mais rentáveis do que outros?",
    "data": "22 out",
    "bloco": "ambiente"
  },
  {
    "n": 9,
    "titulo": "Do Ambiente à Ação",
    "pergunta": "Que fatores determinam as vendas?",
    "data": "27 out",
    "bloco": "ambiente"
  },
  {
    "n": 10,
    "titulo": "Tomada de Decisão na Gestão I",
    "pergunta": "Como deveria decidir um gestor perfeitamente racional?",
    "data": "29 out",
    "bloco": "decisao"
  },
  {
    "n": 11,
    "titulo": "Tomada de Decisão na Gestão II",
    "pergunta": "Porque é que gestores inteligentes tomam más decisões?",
    "data": "3 nov",
    "bloco": "decisao"
  },
  {
    "n": 12,
    "titulo": "Tomada de Decisão Baseada em Dados",
    "pergunta": "Devem os gestores confiar mais nos dados do que na sua intuição?",
    "data": "5 nov",
    "bloco": "decisao"
  },
  {
    "n": 13,
    "titulo": "Estratégia e Crescimento",
    "pergunta": "Para onde deve a empresa crescer a seguir?",
    "data": "12 nov",
    "bloco": "estrategia"
  },
  {
    "n": 14,
    "titulo": "Objetivos, KPI e Desempenho",
    "pergunta": "Medir algo melhora o seu desempenho?",
    "data": "14 nov",
    "bloco": "estrategia"
  }
]
