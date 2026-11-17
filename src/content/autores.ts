import type { Autor } from './types'

// Ordem cronológica. `anoForaSlides`: o ano não aparece nos slides e foi acrescentado por ser conhecido.
export const AUTORES: Autor[] = [
  {
    id: 'smith', nome: 'Adam Smith', ano: '1776', obra: 'The Wealth of Nations',
    ideia: 'Fábrica de alfinetes: um trabalhador sozinho faz menos de 20 alfinetes por dia; 10 trabalhadores com tarefas especializadas fazem ≈ 48 000. Divisão do trabalho → especialização → produtividade ↑.',
    aulas: [2, 3],
  },
  {
    id: 'taylor', nome: 'Frederick W. Taylor', ano: '1911', obra: 'The Principles of Scientific Management (viveu 1856–1915)',
    ideia: 'Scientific management: qual é a forma mais eficiente de executar uma tarefa? Substituir a «rule of thumb» por conhecimento sistemático (observar, medir, analisar, padronizar, controlar). Quatro princípios e estudos de tempos.',
    aulas: [3, 4], modelo: 'taylor',
  },
  {
    id: 'gilbreth', nome: 'Frank e Lillian Gilbreth', ano: 'c. 1910', anoForaSlides: true,
    ideia: 'Destaque nos estudos de movimentos (motion studies), ao lado dos estudos de tempos de Taylor.',
    aulas: [3],
  },
  {
    id: 'ford', nome: 'Henry Ford', ano: '1913', obra: 'Moving assembly line (Ford Motor Company)',
    ideia: 'Da eficiência da tarefa à eficiência do processo produtivo: padronização do produto, especialização, fluxo contínuo e escala → produção em massa. O produto vai ao trabalhador. Combinou e aperfeiçoou ideias existentes.',
    aulas: [3],
  },
  {
    id: 'fayol', nome: 'Henri Fayol', ano: '1916', obra: 'Administration Industrielle et Générale (viveu 1841–1925)',
    ideia: 'É possível identificar princípios gerais de administração? Funções da gestão (prever/planear, organizar, comandar, coordenar, controlar), raiz do POLC, e 14 princípios.',
    aulas: [3, 6], modelo: 'fayol-funcoes',
  },
  {
    id: 'weber', nome: 'Max Weber', ano: '1864–1920',
    ideia: 'Burocracia: divisão clara do trabalho, regras formais, competência técnica, hierarquia definida, impessoalidade, carreira. A autoridade pertence ao cargo, não à pessoa.',
    aulas: [3], modelo: 'weber',
  },
  {
    id: 'mayo', nome: 'Elton Mayo e os estudos de Hawthorne', ano: 'décadas de 1920–30', obra: 'Hawthorne Works, Western Electric, Chicago',
    ideia: 'Iluminação ↑ e produtividade ↑; iluminação ↓ e produtividade… ↑. Legado: o comportamento no trabalho não se explica só por condições físicas e incentivos económicos (grupos, normas, reconhecimento, pertença). Origem das Relações Humanas.',
    aulas: [4],
  },
  {
    id: 'coase', nome: 'Ronald Coase', ano: '1937', obra: 'The Nature of the Firm (Prémio Nobel de Economia, 1991)',
    ideia: 'Porque é que algumas atividades são coordenadas pelo mercado e outras dentro das empresas? Usar o mercado tem custos de transação; organizar internamente tem custos de organização.',
    aulas: [2], modelo: 'make-or-buy',
  },
  {
    id: 'simon', nome: 'Herbert Simon', ano: '1947', anoForaSlides: true, obra: 'Administrative Behavior (Nobel de Economia em 1978)',
    ideia: 'Racionalidade limitada: decidimos com limites de informação, tempo e cognição. Em vez de otimizar, muitas vezes satisfazemos (satisficing): escolher uma alternativa suficientemente boa face a um critério definido.',
    aulas: [4, 11],
  },
  {
    id: 'drucker', nome: 'Peter Drucker', ano: '1954', anoForaSlides: true, obra: 'The Practice of Management',
    ideia: 'Gestão por Objetivos (MBO): ligar os objetivos da organização aos das equipas e dos indivíduos.',
    aulas: [14], modelo: 'mbo',
  },
  {
    id: 'katz', nome: 'Robert L. Katz', ano: '1955', anoForaSlides: true, obra: 'Skills of an Effective Administrator',
    ideia: 'Três competências do gestor: técnicas, humanas e conceptuais. O peso muda com o nível (técnicas pesam mais na primeira linha, conceptuais no topo; humanas em todos).',
    aulas: [6], modelo: 'katz',
  },
  {
    id: 'ansoff', nome: 'H. Igor Ansoff', ano: '1957', anoForaSlides: true, obra: 'Strategies for Diversification',
    ideia: 'Matriz produto × mercado com quatro direções de crescimento: penetração de mercado, desenvolvimento de mercado, desenvolvimento de produto, diversificação.',
    aulas: [13], modelo: 'ansoff',
  },
  {
    id: 'mintzberg', nome: 'Henry Mintzberg', ano: '1975', obra: 'The Manager’s Job: Folklore and Fact (Harvard Business Review)',
    ideia: 'O que fazem realmente os gestores? Observou-os a trabalhar: 10 papéis em três grupos (interpessoais, informacionais, decisionais). Complementa o POLC.',
    aulas: [6], modelo: 'mintzberg',
  },
  {
    id: 'goodhart', nome: 'Charles Goodhart', ano: '1975', obra: 'Lei de Goodhart (política monetária)',
    ideia: 'Quando uma métrica se torna um objetivo, as pessoas alteram comportamentos para a otimizar e ela perde utilidade.',
    aulas: [14], modelo: 'goodhart',
  },
  {
    id: 'porter', nome: 'Michael Porter', ano: '1979', anoForaSlides: true, obra: 'How Competitive Forces Shape Strategy',
    ideia: 'Cinco forças que explicam a atratividade de um setor (rivalidade, clientes, fornecedores, novos entrantes, substitutos) e duas fontes clássicas de vantagem: custo relativo inferior e diferenciação.',
    aulas: [8], modelo: 'porter',
  },
  {
    id: 'kaplan-norton', nome: 'Robert Kaplan e David Norton', ano: '1992', obra: 'Balanced Scorecard',
    ideia: 'Avaliar o desempenho em quatro perspetivas ligadas à estratégia (financeira, clientes, processos, aprendizagem), com relações causa-efeito entre elas.',
    aulas: [14], modelo: 'bsc',
  },
  {
    id: 'maslow', nome: 'Abraham Maslow', ano: '—', mencionado: true,
    ideia: 'Mencionado na abordagem comportamental; os slides dizem que voltaremos a ele em motivação e liderança.',
    aulas: [4],
  },
  {
    id: 'mcgregor', nome: 'Douglas McGregor', ano: '—', mencionado: true,
    ideia: 'Mencionado na abordagem comportamental; os slides dizem que voltaremos a ele em motivação e liderança.',
    aulas: [4],
  },
  {
    id: 'herzberg', nome: 'Frederick Herzberg', ano: '—', mencionado: true,
    ideia: 'Mencionado na abordagem comportamental; os slides dizem que voltaremos a ele em motivação e liderança.',
    aulas: [4],
  },
]
