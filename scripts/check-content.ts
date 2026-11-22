// Verifica o conteúdo antes de cada build. Uso: npm run check
import { ABERTAS, AULAS, CARTOES, CHAVE_PROFESSOR, EXTRA, PROFESSOR, TEMAS, type QuizItem } from '../src/content/index.ts'

const errors: string[] = []
const err = (m: string) => errors.push(m)
const N_AULAS = 14

// --- perguntas (professor e extra) ---
function checkQ(q: QuizItem) {
  if (q.opcoes.length < 3 || q.opcoes.length > 5) err(`${q.id}: ${q.opcoes.length} opções`)
  if (q.certa < 0 || q.certa >= q.opcoes.length) err(`${q.id}: índice da certa fora das opções`)
  q.opcoes.forEach((o, i) => {
    if (!o.t.trim() || !o.porque.trim()) err(`${q.id}: opção ${i} sem texto ou sem explicação`)
    const saysRight = /^certo\b/i.test(o.porque.trim())
    if (i === q.certa && !saysRight) err(`${q.id}: a explicação da opção certa deve começar por "Certo"`)
    if (i !== q.certa && saysRight) err(`${q.id}: opção errada ${i} com explicação "Certo"`)
    if (i !== q.certa && o.porque.trim().length < 14) err(`${q.id}: opção ${i} com explicação demasiado curta`)
  })
  if (new Set(q.opcoes.map((o) => o.t)).size !== q.opcoes.length) err(`${q.id}: opções repetidas`)
}
PROFESSOR.forEach(checkQ)
EXTRA.forEach(checkQ)

// as 70 do professor: 5 por aula, ids 1.1–14.5, e a certa igual à chave oficial
if (PROFESSOR.length !== 70) err(`Professor: ${PROFESSOR.length} perguntas (deviam ser 70)`)
for (let a = 1; a <= N_AULAS; a++) {
  for (let k = 1; k <= 5; k++) {
    const q = PROFESSOR.find((x) => x.id === `p${a}.${k}`)
    if (!q) { err(`Professor: falta a ${a}.${k}`); continue }
    if (q.opcoes.length !== 4) err(`p${a}.${k}: devia ter 4 opções (A–D)`)
    if ('ABCD'[q.certa] !== CHAVE_PROFESSOR[a][k - 1]) err(`p${a}.${k}: certa ${'ABCD'[q.certa]} ≠ chave ${CHAVE_PROFESSOR[a][k - 1]}`)
  }
}

// --- abertas: as 25 do documento ---
const ABERTAS_IDS = ['1.1', '1.2', '2.1', '3.1', '3.2', '4.1', '4.2', '5.1', '5.2', '6.1', '6.2', '7.1', '7.2', '8.1', '8.2', '8.3', '9.1', '10.1', '11.1', '11.2', '12.1', '13.1', '14.1', '14.2']
for (const id of ABERTAS_IDS) if (!ABERTAS.some((a) => a.id === id)) err(`Abertas: falta a ${id}`)
for (const a of ABERTAS) {
  if (a.aula !== Number(a.id.split('.')[0])) err(`Aberta ${a.id}: aula ${a.aula} não bate com o id`)
  if (!a.blocos.length) err(`Aberta ${a.id}: sem resposta modelo`)
}

// --- temas: todas as aulas têm pelo menos um tema e uma pergunta ---
for (let a = 1; a <= N_AULAS; a++) {
  if (!TEMAS.some((t) => t.aulas.includes(a))) err(`Aula ${a}: sem temas`)
  if (!AULAS.some((x) => x.n === a)) err(`Aula ${a}: falta no índice`)
}
for (const t of TEMAS) {
  if (!t.essencial.trim()) err(`Tema ${t.id}: sem "essencial"`)
  if (!t.exemplo.trim() || !t.armadilha.trim()) err(`Tema ${t.id}: falta exemplo ou armadilha`)
  if (t.aulas.some((a) => a < 1 || a > N_AULAS)) err(`Tema ${t.id}: aula inválida`)
}

// --- ids únicos (o progresso depende deles) ---
const dup = (ids: string[], what: string) => {
  const seen = new Set<string>()
  for (const id of ids) {
    if (seen.has(id)) err(`${what} com id repetido: ${id}`)
    seen.add(id)
  }
}
dup([...PROFESSOR, ...EXTRA].map((q) => q.id), 'Pergunta')
dup(CARTOES.map((c) => c.id), 'Cartão')
dup(TEMAS.map((t) => t.id), 'Tema')
dup(ABERTAS.map((a) => a.id), 'Aberta')
for (const x of [...EXTRA, ...CARTOES]) if (x.aula < 1 || x.aula > N_AULAS) err(`${x.id}: aula inválida`)

// --- português europeu (o texto do professor fica como está) ---
const BR: [RegExp, string][] = [
  [/\bvoc[êe]s?\b/i, 'você'],
  [/\busu[áa]rios?\b/i, 'usuário → utilizador'],
  [/\bregistros?\b/i, 'registro → registo'],
  [/\bfatos?\b/i, 'fato → facto'],
  [/\bcontatos?\b/i, 'contato → contacto'],
  [/\bequipes?\b/i, 'equipe → equipa'],
  [/\bcelulares?\b/i, 'celular → telemóvel'],
  [/\bse[çc][ãa]o\b/i, 'seção → secção'],
  [/\bgerenci/i, 'gerenciar → gerir'],
  [/\bplanej/i, 'planejar → planear'],
  [/(ômic|ênic|ômeno|ênero|ônimo|êmic|ônom)/i, 'acentuação brasileira'],
  [/\b(estou|est[áa]|estamos|est[ãa]o|estava|estavam|ficou|vai|v[ãa]o)\s+\w+ndo\b/i, 'gerúndio (estar a + infinitivo)'],
  [/\ba gente\b/i, '"a gente"'],
]
function walk(v: unknown, path: string) {
  if (typeof v === 'string') {
    for (const [re, label] of BR) if (re.test(v)) err(`pt-PT em ${path}: ${label} → "${v.slice(0, 90)}"`)
  } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`))
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (k !== 'pergunta' || !path.startsWith('prof')) walk(x, `${path}.${k}`)
}
walk(TEMAS, 'temas')
walk(ABERTAS.map(({ pergunta: _p, ...r }) => r), 'abertas')
walk(PROFESSOR.map((q) => q.opcoes.map((o) => o.porque)), 'prof.explicacoes')
walk(EXTRA, 'extra')
walk(CARTOES, 'cartoes')

console.log(`Temas: ${TEMAS.length} · Professor: ${PROFESSOR.length} · Abertas: ${ABERTAS.length} · Mais treino: ${EXTRA.length} · Cartões: ${CARTOES.length}`)
if (errors.length) {
  console.error(`\n${errors.length} erro(s):\n- ` + errors.join('\n- '))
  process.exit(1)
}
console.log('Conteúdo OK')
