// Verifica o conteúdo antes de cada build. Uso: npm run check
import { ALL_CARDS, ALL_QUIZ, AULAS, AUTORES, MODELOS } from '../src/content/index.ts'

const errors: string[] = []
const warn: string[] = []
const err = (m: string) => errors.push(m)

// --- estrutura de cada aula ---
for (const a of AULAS) {
  const at = `Aula ${a.n}`
  if (a.ideias.length !== 5) err(`${at}: tem ${a.ideias.length} ideias (devem ser 5)`)
  if (a.quiz.length < 15) err(`${at}: só ${a.quiz.length} perguntas (mínimo 15)`)
  if (a.flashcards.length < 8) err(`${at}: só ${a.flashcards.length} flashcards (mínimo 8)`)
  if (!a.cuidados.length) err(`${at}: sem "Cuidado com…"`)
  if (a.caso.cadeia.length < 2) err(`${at}: mini-caso sem cadeia de raciocínio`)
  for (const q of a.quiz) {
    if (q.opcoes.length < 3 || q.opcoes.length > 5) err(`${q.id}: ${q.opcoes.length} opções`)
    if (q.certa < 0 || q.certa >= q.opcoes.length) err(`${q.id}: índice da certa fora das opções`)
    q.opcoes.forEach((o, i) => {
      if (!o.t.trim() || !o.porque.trim()) err(`${q.id}: opção ${i} sem texto ou sem explicação`)
      const saysRight = /^certo\b/i.test(o.porque.trim())
      if (i === q.certa && !saysRight) err(`${q.id}: a explicação da opção certa deve começar por "Certo"`)
      if (i !== q.certa && saysRight) err(`${q.id}: opção errada ${i} com explicação "Certo"`)
    })
    if (new Set(q.opcoes.map((o) => o.t)).size !== q.opcoes.length) err(`${q.id}: opções repetidas`)
    if (/todas as anteriores|nenhuma das anteriores/i.test(q.opcoes.map((o) => o.t).join(' '))) err(`${q.id}: as opções são baralhadas, não usar "todas/nenhuma das anteriores"`)
  }
  for (const c of a.conceitos) if (c.modelo && !MODELOS.some((m) => m.id === c.modelo)) err(`${at}: conceito ${c.id} aponta para modelo inexistente ${c.modelo}`)
}

// --- ids únicos (o progresso depende deles) ---
const dup = (ids: string[], what: string) => {
  const seen = new Set<string>()
  for (const id of ids) {
    if (seen.has(id)) err(`${what} com id repetido: ${id}`)
    seen.add(id)
  }
}
dup(ALL_QUIZ.map((q) => q.id), 'Pergunta')
dup(ALL_CARDS.map((c) => c.id), 'Flashcard')
dup(MODELOS.map((m) => m.id), 'Modelo')
dup(AUTORES.map((a) => a.id), 'Autor')
dup(AULAS.flatMap((a) => a.conceitos.map((c) => c.id)), 'Conceito')

for (const m of MODELOS) if (m.autor && !AUTORES.some((a) => a.id === m.autor)) err(`Modelo ${m.id}: autor inexistente ${m.autor}`)
for (const a of AUTORES) if (a.modelo && !MODELOS.some((m) => m.id === a.modelo)) err(`Autor ${a.id}: modelo inexistente ${a.modelo}`)

// --- português europeu ---
const BR: [RegExp, string][] = [
  [/\bvoc[êe]s?\b/i, 'você'],
  [/\busu[áa]rios?\b/i, 'usuário → utilizador'],
  [/\b[ôo]nibus\b/i, 'ônibus → autocarro'],
  [/\bregistros?\b/i, 'registro → registo'],
  [/\bfatos?\b/i, 'fato → facto'],
  [/\bcontatos?\b/i, 'contato → contacto'],
  [/\bequipes?\b/i, 'equipe → equipa'],
  [/\btelas?\b/i, 'tela → ecrã'],
  [/\bcelulares?\b/i, 'celular → telemóvel'],
  [/\bse[çc][ãa]o\b/i, 'seção → secção'],
  [/\bgerenci/i, 'gerenciar → gerir'],
  [/\bplanej/i, 'planejar → planear'],
  [/\bsorvetes?\b/i, 'sorvete → gelado'],
  [/(ômic|ênic|ômeno|ênero|ônimo|êmic|ônom)/i, 'acentuação brasileira (ó/é em pt-PT)'],
  [/\b(estou|est[áa]|estamos|est[ãa]o|estava|estavam|ficou|vai|v[ãa]o)\s+\w+ndo\b/i, 'gerúndio (estar a + infinitivo)'],
  [/\ba gente\b/i, '"a gente"'],
]
function walk(v: unknown, path: string) {
  if (typeof v === 'string') {
    for (const [re, label] of BR) if (re.test(v)) err(`pt-PT em ${path}: ${label} → "${v.slice(0, 90)}"`)
  } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`))
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, `${path}.${k}`)
}
walk(AULAS, 'aulas')
walk(MODELOS, 'modelos')
walk(AUTORES, 'autores')

// --- equilíbrio das respostas certas (as opções são baralhadas no ecrã, mas convém variar) ---
const tipos = { conceito: 0, cenario: 0, calculo: 0 }
for (const q of ALL_QUIZ) tipos[q.tipo]++

console.log(`Aulas: ${AULAS.length} · Perguntas: ${ALL_QUIZ.length} (conceito ${tipos.conceito}, cenário ${tipos.cenario}, cálculo ${tipos.calculo}) · Flashcards: ${ALL_CARDS.length} · Modelos: ${MODELOS.length} · Autores: ${AUTORES.length}`)
if (AULAS.length < 14) warn.push(`Só ${AULAS.length} de 14 aulas têm conteúdo`)
warn.forEach((w) => console.warn('Aviso: ' + w))
if (errors.length) {
  console.error(`\n${errors.length} erro(s):\n- ` + errors.join('\n- '))
  process.exit(1)
}
console.log('Conteúdo OK')
