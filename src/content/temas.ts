// Temas do teste (24 nov 2026): um por cada tópico da lista «TEMAS POR AULA» do documento
// «Resumo Temas por Aula» do professor. Cada tema é um ecrã compacto.
// Textos e diagramas vêm de modelos.ts e aulas/aulaNN.ts, confirmados contra os slides.
// `tambemSai`: o que as 70 perguntas de escolha múltipla do professor testam e os slides tratam pouco.

import type { Diagrama } from './types'

export interface Tema {
  id: string
  aulas: number[]
  titulo: string
  autor?: string
  /** 2–4 frases: o que escrever numa resposta aberta */
  essencial: string
  /** 3–8 pontos */
  pontos: string[]
  diagrama?: Diagrama
  /** um exemplo, dos slides */
  exemplo: string
  /** a confusão clássica */
  armadilha: string
  tambemSai?: string[]
}

export const TEMAS: Tema[] = [
  // ---------- Aula 1 (e Aula 6) ----------
  {
    id: 'polc',
    aulas: [1, 6],
    titulo: 'POLC: planear, organizar, liderar, controlar',
    essencial: 'Gestão é o processo de coordenar pessoas e recursos e tomar decisões para concretizar os objetivos de uma organização. O POLC resume as quatro funções que a gestão tem de assegurar: planear (onde queremos chegar e como), organizar (quem faz o quê, com que recursos), liderar (mobilizar pessoas) e controlar (comparar resultados com objetivos e corrigir desvios). Vem de Fayol e é uma perspetiva funcional: diz o que tem de ser assegurado, não descreve o dia a dia do gestor.',
    pontos: [
      '**Planear**: objetivos, alternativas, escolhas, recursos. Não é prever o futuro: é preparar escolhas sobre o futuro.',
      '**Organizar**: transformar o plano em capacidade de execução. Quem faz o quê? Com que recursos? Quem decide? Quem coordena? Estratégia sem organização fica no papel.',
      '**Liderar**: comunicar, motivar, influenciar, coordenar, gerir conflitos. As organizações não executam planos; as pessoas executam-nos.',
      '**Controlar**: objetivo → resultado → comparação → ação. Medir, identificar desvios, corrigir, aprender.',
      'Raiz em **Fayol** (prever, organizar, comandar, coordenar, controlar): comandar e coordenar fundem-se hoje em liderar.',
      'O trabalho real não é linear: as quatro funções estão presentes ao longo do dia, misturadas.',
      '**POLC + Mintzberg**, não POLC vs Mintzberg: funções (o que tem de ser assegurado) e papéis (como o gestor atua) são complementares.',
    ],
    diagrama: {
      tipo: 'fluxo', ciclo: true, passos: [
        { t: 'Planear', d: 'Onde queremos chegar e como? Objetivos, alternativas, escolhas, recursos.', tom: 'indigo' },
        { t: 'Organizar', d: 'Quem faz o quê? Com que recursos? Quem decide? Quem coordena?', tom: 'teal' },
        { t: 'Liderar', d: 'Mobilizar pessoas: comunicar, motivar, influenciar, coordenar, gerir conflitos.', tom: 'pink' },
        { t: 'Controlar', d: 'Objetivo → resultado → comparação → ação. Medir, identificar desvios, corrigir, aprender.', tom: 'orange' },
      ],
    },
    exemplo: 'O dia da Maria Silva, diretora de operações de um e-commerce: consultar o dashboard de entregas às 08:15 é controlar; analisar a proposta de automatização é planear; o conflito Operações vs IT é liderar/organizar; a negociação com o parceiro logístico é planear/organizar.',
    armadilha: 'Imaginar as funções lineares e separadas («segunda planeio, terça organizo, quarta lidero, quinta controlo»). O POLC está em todo o lado ao mesmo tempo.',
    tambemSai: [
      'A gestão é necessária porque é preciso coordenar recursos e pessoas para alcançar objetivos.',
      'Planear define objetivos e caminhos; organizar distribui recursos e responsabilidades (organizar não é sinónimo de organigrama).',
      'Controlar = acompanhar resultados e corrigir desvios (não é delegar sem acompanhar).',
    ],
  },
  {
    id: 'a1-eficacia',
    aulas: [1],
    titulo: 'Eficácia e eficiência',
    essencial: 'Eficácia é atingir os objetivos definidos, «fazer as coisas certas». Eficiência é utilizar bem os recursos, ou seja, a relação entre recursos utilizados e resultados obtidos, «fazer bem as coisas». A gestão procura as duas ao mesmo tempo, mas pode haver uma sem a outra: uma organização pode ser eficiente sem ser eficaz se gastar pouco a fazer bem algo que não serve o objetivo.',
    pontos: [
      '**Eficácia**: atingir os objetivos («fazer as coisas certas»).',
      '**Eficiência**: usar bem os recursos («fazer bem as coisas»).',
      'Sem conhecer o objetivo não se consegue avaliar a eficácia.',
      'Eficaz sem ser eficiente: cumpre a meta, mas gasta mais recursos do que o previsto.',
      'Eficiente sem ser eficaz: poupa recursos, mas falha o objetivo.',
      'A gestão procura simultaneamente eficácia e eficiência.',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 2, celulas: [
        { t: 'Eficácia', d: 'Atingir os objetivos. «Fazer as coisas certas».', tom: 'indigo' },
        { t: 'Eficiência', d: 'Utilizar bem os recursos. «Fazer bem as coisas».', tom: 'teal' },
      ],
    },
    exemplo: 'Uma empresa reduz os custos em 20%, mas perde 30% dos clientes: pode ter sido eficiente (menos recursos) sem ter sido eficaz (falhou o objetivo de manter ou ganhar clientes).',
    armadilha: 'Trocar os dois termos: eficácia é sobre o objetivo (resultado), eficiência é sobre os recursos (custo para lá chegar). Cortar custos não torna uma empresa eficaz.',
    tambemSai: [
      'Cumprir a meta de vendas usando mais recursos do que o previsto = eficácia sem plena eficiência.',
      'Ser eficaz não é reduzir trabalhadores nem usar o menor orçamento: é atingir os objetivos definidos.',
    ],
  },

  // ---------- Aula 2 ----------
  {
    id: 'a2-coase',
    aulas: [2],
    titulo: 'Coase: make or buy',
    autor: 'Ronald Coase (1937)',
    essencial: 'Coase pergunta porque é que algumas atividades são coordenadas pelo mercado e outras dentro das empresas. Usar o mercado tem custos de transação (procurar, comparar, negociar, contratar, monitorizar, resolver problemas), mas fazer internamente tem custos de organização (gestores, hierarquia, controlo, sistemas, incentivos, burocracia). A empresa faz internamente (make) quando a coordenação interna é mais vantajosa do que transacionar no mercado, e compra (buy) no caso contrário: a fronteira da empresa depende dos custos e benefícios relativos de coordenar cada atividade dentro ou fora.',
    pontos: [
      'Duas formas de coordenar: **mercado** (preço, contratos) e **organização** (autoridade, regras, coordenação interna).',
      '**Custos de transação**: custos de realizar e coordenar uma transação para além do preço do bem ou serviço.',
      '**Custos de organização**: as empresas também não são gratuitas (gestores, coordenação, hierarquia, controlo, sistemas, incentivos, comunicação, burocracia).',
      'Critérios além do custo: importância estratégica, competências internas, qualidade, escala, flexibilidade, risco, dados e confidencialidade, dependência de fornecedores, necessidade de controlo.',
      'Não existe necessariamente uma resposta universalmente correta: cada escolha tem de ser justificada.',
      'Contexto: a especialização cria interdependência, a interdependência exige coordenação.',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 2, celulas: [
        { t: 'MAKE: fazer internamente', d: 'Coordenação por autoridade e regras. Custos de organização: gestores, hierarquia, controlo, sistemas, incentivos, comunicação, burocracia.', tom: 'indigo' },
        { t: 'BUY: comprar no mercado', d: 'Coordenação por preço e contratos. Custos de transação: procurar, comparar, negociar, contratar, monitorizar, resolver problemas.', tom: 'teal' },
      ],
    },
    exemplo: 'Hotelia, cadeia com 40 hotéis: limpeza ou lavandaria podem ser compradas a fornecedores fiáveis (custos de transação baixos); a gestão dos dados dos clientes ou o revenue management pesam em importância estratégica, confidencialidade e controlo, o que puxa para fazer internamente.',
    armadilha: 'Achar que o mercado é sempre mais barato ou que fazer tudo internamente é sempre melhor. E confundir os custos: negociar e monitorizar um contrato com um fornecedor é custo de transação; pagar salários ou comprar a matéria-prima em si não é.',
    tambemSai: [
      '**Outsourcing** (buy): uma razão é aceder a capacidades especializadas de um fornecedor. Não elimina a dependência externa nem os custos de coordenação.',
      '**Dependência de fornecedor crítico**: quanto maior, maior pode ser o risco de oportunismo e de interrupção (e mais importantes ficam os contratos e a coordenação).',
      '**Oportunismo**: o fornecedor aproveitar a dependência da empresa para impor preços ou condições. É uma das razões para fazer internamente atividades críticas.',
      'A decisão make-or-buy compara custos, capacidades, riscos e coordenação interna e externa, não apenas o preço inicial do fornecedor.',
    ],
  },

  // ---------- Aula 3 ----------
  {
    id: 'a3-taylor',
    aulas: [3],
    titulo: 'Taylor: Scientific Management (tarefa)',
    autor: 'Frederick W. Taylor (1911)',
    essencial: 'Taylor, em The Principles of Scientific Management (1911), procurou a forma mais eficiente de executar cada tarefa, substituindo a «rule of thumb» (tradição e experiência individual) por conhecimento sistemático: observar, medir, analisar, padronizar e controlar. Propôs quatro princípios (ciência, seleção e formação, cooperação, divisão de responsabilidades entre gestão e trabalhadores) e usou estudos de tempos para definir um standard. O resultado foi mais produtividade e previsibilidade, mas com repetição, menos autonomia e monotonia.',
    pontos: [
      'Pergunta: qual é a forma mais eficiente de executar uma **tarefa**?',
      'Observar → medir → analisar → padronizar → controlar.',
      '**4 princípios**: ciência (método para cada tarefa), seleção & formação, cooperação (garantir a aplicação do método), responsabilidade (dividida entre gestão e trabalhadores).',
      '**Time & motion studies**: tempos (Taylor), movimentos (Frank e Lillian Gilbreth) → um **standard**.',
      'Antes, o trabalhador escolhia o método (variação elevada); com Taylor: selecionar, formar, padronizar, avaliar.',
      'Taylor não morreu: armazéns, call centers, plataformas digitais e algoritmos de produtividade continuam a medir cada tarefa.',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 2, celulas: [
        { t: '1. Ciência', d: 'Desenvolver um método científico para cada tarefa.', tom: 'indigo' },
        { t: '2. Seleção & formação', d: 'Escolher e desenvolver os trabalhadores adequadamente.', tom: 'indigo' },
        { t: '3. Cooperação', d: 'Garantir a aplicação do método definido.', tom: 'indigo' },
        { t: '4. Responsabilidade', d: 'Dividir responsabilidades entre gestão e trabalhadores.', tom: 'indigo' },
      ],
    },
    exemplo: 'FastBox (20 000 encomendas/dia): métodos diferentes entre trabalhadores e movimentos desnecessários → estudar tempos e movimentos, definir um standard, selecionar e formar. A produtividade subiu 30%, mas 6 meses depois subiram a rotatividade, o absentismo e os conflitos.',
    armadilha: 'Confundir níveis: Taylor otimiza a tarefa; Ford, o processo produtivo. E os estudos de movimentos são de Frank e Lillian Gilbreth, não de Taylor.',
    tambemSai: [
      '**Limites da especialização excessiva**: monotonia e menor flexibilidade dos trabalhadores (repetição ↑, autonomia ↓). Não impede aumentar a produtividade.',
    ],
  },
  {
    id: 'a3-ford',
    aulas: [3],
    titulo: 'Ford: produção em massa (processo)',
    autor: 'Henry Ford (1913)',
    essencial: 'Ford passou da eficiência da tarefa para a eficiência do sistema produtivo com a moving assembly line (1913): o produto vai ao trabalhador, que repete uma pequena parte do processo. Combinando padronização do produto, especialização, fluxo contínuo e escala, chegou à produção em massa, com mais produtividade, menor custo unitário e mais previsibilidade. O preço foi repetição, menos autonomia e monotonia.',
    pontos: [
      'Pergunta: como organizar melhor todo o **processo** produtivo?',
      '**Padronização** + **especialização** + **fluxo contínuo** + **escala** → produção em massa.',
      'O produto vai ao trabalhador (antes, o trabalhador ia ao produto).',
      'Adam Smith à escala industrial: cada trabalhador repete uma pequena parte.',
      'Ford não «inventou tudo»: combinou e aperfeiçoou ideias.',
      'Produtividade ↑, custo unitário ↓, output ↑, previsibilidade ↑; mas repetição ↑, autonomia ↓, monotonia ↑.',
    ],
    diagrama: {
      tipo: 'fluxo', passos: [
        { t: 'Padronização', d: 'Do produto.', tom: 'indigo' },
        { t: 'Especialização', d: 'Cada trabalhador repete uma pequena parte.', tom: 'indigo' },
        { t: 'Fluxo contínuo', d: 'O produto vai ao trabalhador.', tom: 'teal' },
        { t: 'Escala', d: 'Custo unitário ↓, output ↑.', tom: 'teal' },
        { t: 'Produção em massa', tom: 'orange' },
      ],
    },
    exemplo: 'FastBox: com a produtividade a variar muito entre equipas, a resposta «à Ford» é organizar o processo em fluxo contínuo, com tarefas especializadas.',
    armadilha: 'Achar que a linha de montagem elimina a divisão do trabalho ou permite personalização ilimitada: é o contrário, favorece padronização e produção em escala. A pergunta dos slides: estamos a otimizar o sistema ou as pessoas?',
    tambemSai: [
      '**Limites da especialização excessiva**: monotonia e menor flexibilidade dos trabalhadores.',
    ],
  },
  {
    id: 'a3-fayol',
    aulas: [3],
    titulo: 'Fayol: a gestão e a origem do POLC',
    autor: 'Henri Fayol (1916)',
    essencial: 'Fayol, em Administration Industrielle et Générale (1916), olhou para a organização como um todo e procurou princípios gerais de administração. Definiu as funções da gestão (prever/planear, organizar, comandar, coordenar, controlar), que deram origem ao POLC de hoje, com comandar e coordenar fundidos em liderar. Formulou ainda 14 princípios, como a unidade de comando e a cadeia escalar.',
    pontos: [
      'Pergunta: é possível identificar princípios gerais de **administração**?',
      'Nível de análise: a gestão (Taylor: tarefa; Ford: processo; Weber: estrutura).',
      'Funções: prever/planear, organizar, comandar, coordenar, controlar → **POLC**.',
      '**14 princípios** agrupados em estrutura (divisão do trabalho, unidade de comando, cadeia escalar…), autoridade & ordem, pessoas (equidade, estabilidade, iniciativa, espírito de equipa) e organização.',
      'Não é uma lista para decorar: unidade de comando numa estrutura matricial, em 2026?',
    ],
    diagrama: {
      tipo: 'tabela', cabecalho: ['Fayol (1916)', 'Hoje (POLC)'], linhas: [
        ['Prever / planear', 'Planear'],
        ['Organizar', 'Organizar'],
        ['Comandar', 'Liderar'],
        ['Coordenar', 'Liderar'],
        ['Controlar', 'Controlar'],
      ],
    },
    exemplo: 'FastBox: chefias que dão instruções contraditórias → unidade de comando, cadeia escalar e funções de gestão claras.',
    armadilha: 'Achar que o POLC é uma invenção recente: tem raízes claras em Fayol. E as funções de Fayol dizem o que deve ser assegurado, não o dia a dia real do gestor (isso é Mintzberg).',
    tambemSai: [
      'Fayol destacou-se por propor princípios gerais de administração (não as cinco forças nem a inexistência de hierarquia).',
    ],
  },
  {
    id: 'a3-weber',
    aulas: [3],
    titulo: 'Weber: burocracia (estrutura)',
    autor: 'Max Weber',
    essencial: 'Weber racionalizou a estrutura, a autoridade e as regras. A burocracia assenta em divisão clara do trabalho, regras formais, competência técnica, hierarquia definida, impessoalidade e carreira, e procura previsibilidade, consistência e racionalidade. Foi um avanço contra o favoritismo, o nepotismo e a arbitrariedade: a autoridade pertence ao cargo, não à pessoa. O risco é degenerar em rigidez, lentidão, silos e regras como fim em si mesmas.',
    pontos: [
      'Pergunta: como organizar a **estrutura**, a autoridade e as regras?',
      'Seis características: divisão clara do trabalho, regras formais, competência técnica, hierarquia definida, impessoalidade, carreira.',
      'Em vez de favoritismo, nepotismo e autoridade pessoal: regras, competências, funções e critérios.',
      '**A autoridade pertence ao cargo, não à pessoa.**',
      'Porque a detestamos: rigidez, lentidão, silos, resistência à mudança, excesso de regras.',
      'O problema é a burocracia… ou o excesso de burocracia?',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 3, celulas: [
        { t: 'Divisão clara do trabalho', tom: 'indigo' },
        { t: 'Regras formais', tom: 'indigo' },
        { t: 'Competência técnica', tom: 'indigo' },
        { t: 'Hierarquia definida', tom: 'indigo' },
        { t: 'Impessoalidade', d: 'aplicar regras e critérios', tom: 'indigo' },
        { t: 'Carreira', tom: 'indigo' },
      ],
    },
    exemplo: 'FastBox: responsabilidades pouco claras e decisões que dependem de pessoas específicas → regras formais, funções definidas e autoridade do cargo.',
    armadilha: 'Impessoalidade não é «tratar pessoas friamente»: é aplicar regras e critérios iguais para todos. E burocracia não é sinónimo de ineficiência: o problema é o excesso.',
    tambemSai: [
      '**Autoridade legal-racional**: é o tipo de autoridade da burocracia. Assenta em regras formais e no cargo, não em relações pessoais. A burocracia valoriza regras formais, competências e autoridade legal-racional.',
    ],
  },

  // ---------- Aula 4 ----------
  {
    id: 'a4-hawthorne',
    aulas: [4],
    titulo: 'Experiências de Hawthorne',
    autor: 'Elton Mayo e outros',
    essencial: 'Os estudos de Hawthorne (Western Electric, Chicago, anos 1920–30), associados a Elton Mayo, investigaram como as condições de trabalho influenciam a produtividade. Os resultados surpreenderam (a produtividade subia quando a iluminação aumentava e também quando diminuía) e mostraram que o comportamento no trabalho não se explica apenas por condições físicas e incentivos económicos: contam os fatores sociais, os grupos e as relações humanas. Daí nasce a escola das Relações Humanas e a ideia de organização informal.',
    pontos: [
      'Pergunta inicial: a iluminação influencia o desempenho?',
      'Iluminação ↑ → produtividade ↑; iluminação ↓ → produtividade… ↑.',
      '**Legado**: o comportamento não se explica só por condições físicas e incentivos económicos.',
      'O trabalhador não trabalha isolado: colegas, supervisor, normas do grupo, reconhecimento, pertença, comunicação.',
      '**Organização formal** (organograma, regras, funções, hierarquia) ≠ **organização informal** (relações, influência, grupos, normas sociais, lideranças informais).',
      'Relações Humanas alargaram a visão, mas satisfação ≠ produtividade e motivação ≠ desempenho automático.',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 2, celulas: [
        { t: 'Organização formal', d: 'Organograma, regras, funções, hierarquia, procedimentos.', tom: 'indigo' },
        { t: 'Organização informal', d: 'Relações, influência, grupos, normas sociais, lideranças informais.', tom: 'pink' },
      ],
    },
    exemplo: 'Numa equipa de 9 que faz cerca de 40 pedidos/dia, um novo trabalhador faz 80: «Excelente!», «Calma…», «Estás a estragar isto.» Quem define o desempenho aceitável: o chefe ou o grupo?',
    armadilha: 'Reduzir o «efeito Hawthorne» a «ser observado aumenta a produtividade»: houve várias experiências e várias interpretações. E Hawthorne não elimina a estrutura formal nem prova que a remuneração variável é superior.',
    tambemSai: [
      '**Rede informal**: conjunto de relações que pode não coincidir com o organigrama (não é uma unidade jurídica nem um procedimento escrito).',
    ],
  },
  {
    id: 'a4-contingencia',
    aulas: [4],
    titulo: 'Teoria da contingência',
    essencial: 'A teoria da contingência defende que não existe uma forma universalmente superior de gerir: a solução adequada depende das características da situação, como o ambiente, a dimensão, a tecnologia, a tarefa, a estratégia e as pessoas («it depends»). «Depende» não significa «vale tudo»: significa ajustar a forma de gerir ao contexto. Por isso Taylor não estava simplesmente errado: padronização e controlo funcionam em certos contextos, o erro é tratá-los como solução universal.',
    pontos: [
      '**«It depends…»**: ambiente, dimensão, tecnologia, tarefa, estratégia, pessoas.',
      '«Depende» não significa «vale tudo».',
      'Partes da mesma organização podem exigir formas diferentes (cozinha vs desenvolvimento de produtos; esterilização vs diagnóstico; logística vs design).',
      'Eficiência continua a importar; só não é suficiente.',
      'Base: a organização como **sistema aberto** (inputs → organização → outputs, com feedback).',
      '**Ótimo local ≠ ótimo do sistema**: otimizar uma parte não otimiza necessariamente o todo.',
      'Os dados não eliminam a necessidade de compreender o contexto.',
    ],
    diagrama: {
      tipo: 'tabela', cabecalho: ['', 'McDonald\'s', 'Startup de IA'], linhas: [
        ['Contexto', 'Volume elevado, tarefas repetitivas', 'Incerteza, inovação'],
        ['Precisa de', 'Consistência, padronização', 'Experimentação, flexibilidade'],
      ],
    },
    exemplo: 'O McDonald\'s (volume elevado, tarefas repetitivas, consistência) não se gere como uma startup de IA (incerteza, inovação, experimentação).',
    armadilha: 'Confundir contingência com «não há regras». E pensar que existe uma única estrutura ótima para todas as empresas: é exatamente o que a contingência nega.',
    tambemSai: [
      '**Sistema aberto**: reconhecer trocas e interdependências com o ambiente (clientes, fornecedores, concorrentes, Estado, tecnologia, sociedade). Não se tratam os departamentos como independentes.',
      'Se vendas e logística atingem os seus KPI, mas os clientes recebem tarde: interdependência e possível desalinhamento entre áreas (um dashboard pode mostrar que uma área bateu todos os KPI e a empresa estar pior).',
    ],
  },

  // ---------- Aula 5 ----------
  {
    id: 'a5-vuca',
    aulas: [5],
    titulo: 'VUCA',
    essencial: 'VUCA descreve quatro problemas diferentes de um ambiente em mudança: volatilidade (mudança rápida), incerteza (dificuldade em prever), complexidade (múltiplas variáveis interdependentes) e ambiguidade (dificuldade em interpretar situações novas). VUCA não significa caos nem deixar de planear: a incerteza não elimina a gestão, torna-a mais necessária. A resposta passa por monitorizar, experimentar, aprender, criar cenários, adaptar e ganhar resiliência.',
    pontos: [
      '**V · Volatilidade**: mudança rápida.',
      '**U · Incerteza**: dificuldade em antecipar acontecimentos e resultados.',
      '**C · Complexidade**: multiplicidade de fatores e interdependências.',
      '**A · Ambiguidade**: dificuldade em interpretar situações novas.',
      'Não deixamos de planear: planeamos de forma diferente.',
      'Mais dados e melhores modelos não significam necessariamente menos incerteza.',
      'Gerir não é controlar o ambiente: é decidir como responder-lhe.',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 2, celulas: [
        { t: 'V · Volatility', d: 'Mudança rápida. Ex.: preço de uma matéria-prima oscila 30% em semanas.', tom: 'orange' },
        { t: 'U · Uncertainty', d: 'Dificuldade em prever. Ex.: não sabemos se uma nova tecnologia será adotada.', tom: 'teal' },
        { t: 'C · Complexity', d: 'Múltiplas variáveis interdependentes. Ex.: produção depende de fornecedores, câmbios, energia e regulação em 12 países.', tom: 'indigo' },
        { t: 'A · Ambiguity', d: 'Dificuldade em interpretar situações novas. Ex.: surge uma tecnologia nova e ninguém sabe como irá criar valor.', tom: 'pink' },
      ],
    },
    exemplo: 'Volatilidade: o preço de uma matéria-prima oscila 30% em semanas. Complexidade: a produção depende de fornecedores, câmbios, energia e regulação em 12 países.',
    armadilha: 'Confundir incerteza (não conseguimos prever se uma tecnologia será adotada) com ambiguidade (não conseguimos interpretar como uma tecnologia nova vai criar valor). E complexidade não é «orçamento grande» nem «ter concorrentes»: são muitos fatores interdependentes.',
    tambemSai: [
      '**Transformação digital**: pode criar oportunidades e novos riscos de gestão. Não dispensa competências humanas nem elimina a incerteza. A tecnologia é recurso interno (software, dados, IA) e força externa (novos concorrentes e modelos de negócio, ex.: Netflix, Amazon, Uber).',
    ],
  },
  {
    id: 'a5-intercultural',
    aulas: [5],
    titulo: 'Gestão intercultural',
    essencial: 'A globalização também significa pessoas: equipas em vários países, com o mesmo projeto e os mesmos objetivos, não trabalham necessariamente da mesma forma. A cultura influencia expectativas sobre comunicação, autoridade, decisão, colaboração, feedback, tempo, conflito e risco. Gerir equipas multiculturais exige comunicar, clarificar, coordenar e integrar, tratando as diferenças culturais como tendências e não como etiquetas individuais. A diversidade aumenta informação e perspetivas, mas também as necessidades de coordenação.',
    pontos: [
      'A cultura influencia expectativas: comunicação, autoridade, decisão, colaboração, feedback, tempo, conflito, risco.',
      '**Diferenças culturais são tendências, não etiquetas individuais**: compreender padrões ajuda; estereotipar pessoas não.',
      'O problema pode não estar na mensagem, mas no contexto em que é interpretada.',
      'Gerir equipas multiculturais: **comunicar, clarificar, coordenar, integrar**.',
      'Gerir diversidade não é eliminar diferenças.',
      'Diversidade: mais informação e perspetivas, mas mais necessidade de coordenação.',
    ],
    diagrama: {
      tipo: 'fluxo', passos: [
        { t: 'Comunicar', tom: 'indigo' },
        { t: 'Clarificar', tom: 'teal' },
        { t: 'Coordenar', tom: 'pink' },
        { t: 'Integrar', tom: 'orange' },
      ],
    },
    exemplo: '«I think you may want to reconsider this proposal»: para a pessoa A é uma sugestão; para a pessoa B, «o chefe quer que eu altere isto».',
    armadilha: 'Aplicar estereótipos sem questionar ou impor sempre as práticas do país de origem. As diferenças culturais descrevem tendências de grupo, não a pessoa concreta à nossa frente.',
    tambemSai: [
      'A gestão intercultural exige atenção a diferenças de comunicação e práticas de trabalho (não eliminar equipas internacionais).',
    ],
  },

  // ---------- Aula 6 ----------
  {
    id: 'a6-mintzberg',
    aulas: [6],
    titulo: 'Mintzberg: o que fazem realmente os gestores',
    autor: 'Henry Mintzberg',
    essencial: 'Mintzberg observou gestores a trabalhar para perceber o que efetivamente fazem, não o que deveriam fazer. Concluiu que o trabalho é fragmentado, variado, interrompido, relacional e intensivo em informação, e identificou 10 papéis em três grupos: interpessoais (figurehead, leader, liaison), informacionais (monitor, disseminator, spokesperson) e decisionais (entrepreneur, disturbance handler, resource allocator, negotiator). Os papéis complementam o POLC: o POLC diz o que tem de ser assegurado; Mintzberg mostra como o gestor atua.',
    pontos: [
      'Trabalho real: **fragmentado, variado, interrompido, relacional, intensivo em informação**.',
      '**Interpessoais** (pessoas): figurehead, leader, liaison.',
      '**Informacionais** (informação): monitor, disseminator, spokesperson.',
      '**Decisionais** (ação): entrepreneur, disturbance handler, resource allocator, negotiator.',
      'Relações → informação → decisão / ação.',
      'Os papéis não acontecem isoladamente: o trabalho real não cabe perfeitamente em caixas.',
      '**POLC** (funcional, mais abstrato) **+ Mintzberg** (comportamental, mais observável): complementares.',
    ],
    diagrama: {
      tipo: 'grupos', grupos: [
        { t: 'Interpessoais (pessoas)', tom: 'pink', itens: [
          { t: 'Figurehead', d: 'Representa formal e simbolicamente a organização.' },
          { t: 'Leader', d: 'Orienta, motiva e desenvolve pessoas.' },
          { t: 'Liaison', d: 'Constrói relações e redes dentro e fora da organização.' },
        ] },
        { t: 'Informacionais (informação)', tom: 'teal', itens: [
          { t: 'Monitor', d: 'Procura e recebe informação relevante.' },
          { t: 'Disseminator', d: 'Transmite informação dentro da organização.' },
          { t: 'Spokesperson (porta-voz)', d: 'Comunica em nome da organização / unidade.' },
        ] },
        { t: 'Decisionais (ação)', tom: 'indigo', itens: [
          { t: 'Entrepreneur', d: 'Procura oportunidades e promove mudança.' },
          { t: 'Disturbance handler', d: 'Responde a problemas, conflitos e crises.' },
          { t: 'Resource allocator', d: 'Decide como distribuir recursos escassos.' },
          { t: 'Negotiator', d: 'Negocia em nome da organização.' },
        ] },
      ],
    },
    exemplo: 'Um fornecedor comunica um atraso crítico: o gestor é monitor (recebe a informação), liaison (gere a relação), disturbance handler (resolve o problema) e resource allocator (reorganiza recursos).',
    armadilha: 'Atribuir um só papel a cada situação, ou pôr POLC e Mintzberg em oposição. E trocar grupos: negociar com um fornecedor é decisional (negotiator), não interpessoal.',
    tambemSai: [
      'Na escolha múltipla do professor, representar a empresa numa conferência = papel **informacional de porta-voz** (spokesperson), porque comunica em nome da organização.',
      'Segundo Mintzberg, o trabalho do gestor inclui papéis interpessoais, informacionais e decisionais: não é linear nem se resume a controlar indicadores.',
    ],
  },

  // ---------- Aula 7 ----------
  {
    id: 'a7-pestel',
    aulas: [7],
    titulo: 'PESTEL',
    essencial: 'A PESTEL estrutura a análise do macroambiente em seis dimensões: política, económica, sociocultural, tecnológica, ambiental e legal. Serve para identificar fatores externos relevantes para a estratégia, explicar o mecanismo pelo qual afetam o negócio e definir prioridades. Uma boa análise não é uma lista de tendências: segue a cadeia fator → mecanismo → impacto → resposta, e o mesmo fator pode ser oportunidade ou ameaça consoante a empresa.',
    pontos: [
      '**Político**: política comercial, estabilidade, tarifas, incentivos.',
      '**Económico**: inflação, taxas de juro, crescimento, câmbios, rendimento.',
      '**Sociocultural**: demografia, hábitos de consumo, estilos de vida, valores.',
      '**Tecnológico**: IA, automação, plataformas, digitalização, cibersegurança.',
      '**Ambiental**: clima, energia, água, resíduos, recursos naturais.',
      '**Legal**: laboral, privacidade, concorrência, consumo, produto.',
      'Priorizar por relevância, impacto, horizonte e incerteza.',
      'O PESTEL não escolhe automaticamente a estratégia; só cobre o macroambiente (o competitivo é Porter).',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 2, celulas: [
        { t: 'P · Político', d: 'Política comercial, estabilidade política, tarifas, incentivos → acesso a mercados, custo de importar.', tom: 'indigo' },
        { t: 'E · Económico', d: 'Inflação, taxas de juro, crescimento, câmbios, rendimento → procura, financiamento, custos, investimento.', tom: 'teal' },
        { t: 'S · Sociocultural', d: 'Demografia, hábitos de consumo, estilos de vida, valores → procura e expectativas dos clientes.', tom: 'pink' },
        { t: 'T · Tecnológico', d: 'IA, automação, plataformas, digitalização, cibersegurança → novos modelos de negócio, produtividade, substituição.', tom: 'blue' },
        { t: 'E · Ambiental', d: 'Clima, energia, água, resíduos, recursos naturais → risco operacional, custos, novas exigências.', tom: 'green' },
        { t: 'L · Legal', d: 'Laboral, privacidade, concorrência, consumo, produto → custos de conformidade, restrições, responsabilidades.', tom: 'orange' },
      ],
    },
    exemplo: '«O envelhecimento da população pode alterar a procura de produtos de saúde, levando uma cadeia de farmácias a reavaliar a oferta e os serviços»: fator sociodemográfico → mecanismo → impacto → resposta (uma tendência demográfica a criar uma oportunidade).',
    armadilha: 'Confundir político com legal: político são orientações e decisões de política pública (o governo anuncia prioridade às renováveis); legal são normas jurídicas em vigor (nova obrigação de reporte, regras de proteção de dados). E fazer uma lista («A IA está a crescer») em vez de explicar o mecanismo.',
    tambemSai: [
      'Taxas de juro = fator económico; envelhecimento da população = social/demográfico; nova regra de proteção de dados = legal.',
      'Uma nova tecnologia que altera hábitos de consumo pode ser oportunidade ou ameaça, dependendo da empresa.',
    ],
  },

  // ---------- Aula 8 ----------
  {
    id: 'a8-porter',
    aulas: [8],
    titulo: 'As 5 forças de Porter',
    autor: 'Porter',
    essencial: 'As cinco forças de Porter ajudam a compreender as pressões sobre a rentabilidade de um setor, ou seja, a sua atratividade: rivalidade entre concorrentes, poder negocial dos clientes, poder negocial dos fornecedores, ameaça de novos entrantes e ameaça de substitutos. Mostram que a concorrência vai além dos rivais diretos. Antes de as aplicar é preciso definir o setor, e cada força deve ser analisada como mecanismo: força → mecanismo → impacto → resposta.',
    pontos: [
      '**Rivalidade**: intensifica-se com muitos concorrentes, crescimento lento, baixa diferenciação, custos fixos elevados.',
      '**Poder dos clientes**: aumenta com poucos compradores, grandes volumes, baixos custos de mudança.',
      '**Poder dos fornecedores**: aumenta com fornecedores concentrados, inputs únicos, alternativas escassas, custos de mudança elevados.',
      '**Novos entrantes**: dependem das barreiras (capital, marca, escala, regulação, acesso a distribuição).',
      '**Substitutos**: satisfazem a mesma necessidade por outra solução; limitam o preço.',
      '**Setor rentável ≠ empresa necessariamente rentável.**',
      'Não é uma fotografia eterna: as forças e as fronteiras do setor mudam.',
    ],
    diagrama: {
      tipo: 'porter',
      centro: { t: 'Rivalidade entre concorrentes', d: 'Intensifica-se com muitos concorrentes, crescimento lento, baixa diferenciação, custos fixos elevados.', tom: 'indigo' },
      cima: { t: 'Ameaça de novos entrantes', d: 'Depende das barreiras: capital, marca, escala, regulação, acesso a distribuição.', tom: 'teal' },
      esquerda: { t: 'Poder dos fornecedores', d: 'Aumenta com fornecedores concentrados, inputs únicos, alternativas escassas.', tom: 'orange' },
      direita: { t: 'Poder dos clientes', d: 'Aumenta com poucos compradores, grandes volumes, baixos custos de mudança.', tom: 'pink' },
      baixo: { t: 'Ameaça de substitutos', d: 'Satisfazem a mesma necessidade por outra solução; limitam o preço.', tom: 'green' },
    },
    exemplo: 'Substituto: a videoconferência em vez da viagem de negócios. Fornecedores: conteúdos exclusivos ou tecnologia essencial podem gerar dependência e o fornecedor captura parte do valor do setor.',
    armadilha: 'Confundir concorrente com substituto: duas plataformas de streaming são concorrência direta; jogos ou redes sociais que disputam o tempo de lazer são substitutos (soluções diferentes para a mesma necessidade).',
    tambemSai: [
      'O poder negocial dos fornecedores aumenta quando existem poucos fornecedores e elevados custos de mudança (não quando há muitos equivalentes).',
    ],
  },
  {
    id: 'a8-swot',
    aulas: [8],
    titulo: 'SWOT',
    essencial: 'A SWOT integra a análise externa (PESTEL e Porter, que dão oportunidades e ameaças) com a análise interna (recursos, competências e processos, que dão forças e fraquezas). Forças são capacidades internas que favorecem a empresa; fraquezas, limitações internas face ao desafio; oportunidades e ameaças, condições externas potencialmente favoráveis ou desfavoráveis. A SWOT sintetiza evidência e gera hipóteses de ação, mas não decide sozinha nem substitui as análises.',
    pontos: [
      '**Forças (S)**: capacidades internas que favorecem a empresa.',
      '**Fraquezas (W)**: limitações internas face ao desafio.',
      '**Oportunidades (O)**: condições externas potencialmente favoráveis.',
      '**Ameaças (T)**: condições externas potencialmente desfavoráveis.',
      'Interno = S e W; externo = O e T.',
      'Cada elemento deve ter fundamento e relevância: «Marca forte» → «Reconhecimento de marca facilita obtenção de clientes».',
      'Integra, mas não substitui, PESTEL e Porter; gera hipóteses, não decide.',
    ],
    diagrama: {
      tipo: 'matriz', colunas: ['Favorável', 'Desfavorável'], linhas: ['Interno', 'Externo'], celulas: [
        { t: 'Forças (S)', d: 'Capacidades internas que favorecem a empresa.', tom: 'green' },
        { t: 'Fraquezas (W)', d: 'Limitações internas face ao desafio.', tom: 'red' },
        { t: 'Oportunidades (O)', d: 'Condições externas potencialmente favoráveis.', tom: 'teal' },
        { t: 'Ameaças (T)', d: 'Condições externas potencialmente desfavoráveis.', tom: 'orange' },
      ],
    },
    exemplo: 'Força «capacidade logística rápida» + oportunidade «procura por entrega ágil» → escolha «aproveitar a capacidade» → ação «testar um serviço mais rápido».',
    armadilha: 'Trocar interno com externo: forças e fraquezas são da empresa (marca, competências); oportunidades e ameaças vêm do ambiente (legislação, procura, concorrentes). E escrever palavras soltas («Tecnologia», «Concorrência») em vez de afirmações fundamentadas.',
    tambemSai: [
      'Uma marca forte da empresa é normalmente uma força; uma alteração favorável da legislação do setor é uma oportunidade.',
    ],
  },
  {
    id: 'a8-vantagem',
    aulas: [8],
    titulo: 'Vantagem competitiva',
    autor: 'Porter',
    essencial: 'Vantagem competitiva é criar valor de forma superior ou distinta face aos concorrentes relevantes: criar valor (resolver um problema relevante para o cliente) e captar valor (obter receitas que excedam os custos de entregar esse valor). Tem duas fontes clássicas: custo relativo inferior (valor comparável com custos mais favoráveis) e diferenciação (atributos valorizados que sustentam maior disposição a pagar). É dinâmica: pode desaparecer por imitação ou mudança, e exige reinvenção.',
    pontos: [
      'Duas perguntas diferentes: **atratividade do setor** vs **posição da empresa**.',
      '**Criar valor**: resolver um problema relevante para o cliente.',
      '**Captar valor**: receitas acima dos custos de entregar esse valor.',
      '**Custo relativo inferior** (ex.: Ryanair) vs **diferenciação** (ex.: Apple).',
      'Mede-se face a concorrentes relevantes.',
      'Pode desaparecer: capacidade → imitação → mudança → reinvenção. Não é um prémio vitalício.',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 2, celulas: [
        { t: 'Custo relativo inferior', d: 'Entregar valor comparável com uma estrutura de custos mais favorável. Ex.: Ryanair, operação de baixo custo orientada para preço.', tom: 'teal' },
        { t: 'Diferenciação', d: 'Oferecer atributos valorizados pelos clientes e sustentar maior disposição a pagar. Ex.: Apple, ecossistema, design, marca.', tom: 'pink' },
      ],
    },
    exemplo: 'Zara: rapidez de resposta, integração operacional e renovação da oferta. Ryanair (custo) e Apple (diferenciação) são as duas fontes clássicas.',
    armadilha: 'Pensar que vender mais ou ser o maior é ter vantagem: mais vendas não significam mais rentabilidade, e vantagem não é atuar sem concorrentes nem nunca baixar preços.',
  },

  // ---------- Aula 9 ----------
  {
    id: 'a9-fatores',
    aulas: [9],
    titulo: 'Fatores incontroláveis, de postura e controláveis',
    essencial: 'As vendas dependem de três tipos de fatores. Incontroláveis: a empresa não decide o seu valor (inflação, juros, câmbios, legislação, meteorologia). De postura: escolhas sobre como competir e responder ao contexto (mercado-alvo, proposta de valor, posicionamento). Controláveis: instrumentos que a empresa pode ajustar (produto e serviço, preço, distribuição e comunicação). A distinção ajuda a separar condições externas de alavancas de ação; mas não controlar não significa não poder responder, e controlar a decisão não é controlar o resultado.',
    pontos: [
      '**Incontroláveis**: económicos, político-legais, sociais e demográficos, tecnológicos, naturais e geopolíticos.',
      '**Postura**: mercado-alvo (que clientes servimos?), proposta de valor (porque nos escolheriam?), posicionamento (como queremos ser percebidos?).',
      '**Controláveis**: produto e serviço, preço, distribuição e comunicação. São alavancas, não garantias de vendas.',
      'O grau de controlo depende do prazo: curto (campanhas), médio (canais, gama), longo (marca, competências, rede logística, tecnologia).',
      'Mesmo choque, posturas diferentes: com inflação elevada, A reforça a oferta económica; B, a diferenciação premium.',
      'Vender mais não é ganhar mais: receita = preço × quantidade; a margem depende dos custos.',
    ],
    diagrama: {
      tipo: 'fluxo', passos: [
        { t: 'Incontroláveis', d: 'A empresa não decide o seu valor. Ex.: inflação, meteorologia, legislação, juros, câmbios.', tom: 'gray' },
        { t: 'De postura', d: 'Escolhas sobre como competir: mercado-alvo, proposta de valor, posicionamento (segmento, risco).', tom: 'indigo' },
        { t: 'Controláveis', d: 'Instrumentos ajustáveis: produto e serviço, preço, distribuição e comunicação.', tom: 'teal' },
      ],
    },
    exemplo: 'Preço da energia ↑ (fator incontrolável) → produzir e transportar fica mais caro (mecanismo) → margem menor ou preço final maior (impacto) → eficiência energética, investimento, fornecedores ou política de preços (decisão controlável).',
    armadilha: 'Achar que incontrolável é irrelevante ou impossível de responder: a empresa não decide as taxas de juro, mas pode rever financiamento, investimento e preços. E postura não é «atitude»: são escolhas estratégicas concretas.',
    tambemSai: [
      'Controlável: política de preços, orçamento de marketing, embalagem, horário de atendimento. Incontrolável: taxa de câmbio, inflação, legislação laboral, mudança inesperada na regulamentação.',
      'A distinção serve para identificar alavancas de ação e condicionantes externas (não garante previsões perfeitas).',
    ],
  },

  // ---------- Aula 10 ----------
  {
    id: 'a10-decisao',
    aulas: [10],
    titulo: 'Processo de decisão racional',
    essencial: 'O processo racional de decisão é um modelo normativo (como se deveria decidir) com sete etapas: definir o problema; definir objetivos e critérios; identificar alternativas; avaliá-las com os mesmos critérios; escolher; implementar; avaliar e acompanhar os resultados. Organiza-se em diagnosticar, comparar e agir. A racionalidade está no processo, não apenas no resultado, e a decisão só se completa com execução e avaliação.',
    pontos: [
      '**1. Definir o problema**: «as vendas caíram» é um sintoma, não um diagnóstico.',
      '**2. Objetivos e critérios**: o que é ser «melhor»; os pesos exprimem prioridades, não verdades objetivas.',
      '**3. Identificar alternativas**: não mudar também pode ser uma alternativa.',
      '**4. Avaliar alternativas**: custos, benefícios e riscos, mesmos critérios, pressupostos explícitos.',
      '**5–7. Escolher, implementar, avaliar**: recursos, responsabilidades e prazos; comparar resultados com objetivos e corrigir.',
      'Matriz ponderada: pontuação = Σ (peso × avaliação); testar a robustez (análise de sensibilidade).',
      'Modelo normativo: na realidade faltam informação, tempo e capacidade cognitiva (Simon, Aula 11).',
    ],
    diagrama: {
      tipo: 'fluxo', passos: [
        { t: 'Definir o problema', d: 'Em que produtos, lojas, clientes? Desde quando?', tom: 'indigo' },
        { t: 'Definir objetivos e critérios', d: 'O que significa uma alternativa ser «melhor»; pesos e restrições.', tom: 'indigo' },
        { t: 'Identificar alternativas', d: 'Incluindo não mudar.', tom: 'teal' },
        { t: 'Avaliar alternativas', d: 'Custos, benefícios e riscos, com os mesmos critérios e pressupostos explícitos.', tom: 'teal' },
        { t: 'Escolher', d: 'A alternativa mais adequada aos critérios.', tom: 'pink' },
        { t: 'Implementar', d: 'Alocar recursos, responsabilidades e prazos.', tom: 'pink' },
        { t: 'Avaliar e acompanhar', d: 'Comparar resultados com objetivos e corrigir desvios.', tom: 'pink' },
      ],
    },
    exemplo: 'Cadeia com 20 lojas e 500 mil € para investir: com pesos rentabilidade 35%, risco 25%, crescimento 25% e rapidez 15%, o comércio eletrónico obtém 7,5, contra 7,05 da modernização e 6,5 das novas lojas.',
    armadilha: 'Começar pela solução («baixar preços!») antes de definir o problema. E achar que a alternativa vencedora na matriz é «a melhor»: vence com aqueles pesos e estimativas; mudando os pressupostos, a escolha pode mudar.',
    tambemSai: [
      '**Decisões programadas**: repetitivas, apoiadas em regras ou procedimentos (ex.: repor stock abaixo de um mínimo).',
      '**Decisões não programadas**: problemas novos ou pouco estruturados, que exigem análise e julgamento (ex.: entrar num novo mercado).',
      'Depois de implementar, importa avaliar resultados e aprender com os desvios (recolher dados, ver efeitos inesperados, não assumir que a decisão foi correta).',
      'Atribuir pesos aos critérios reflete a importância relativa de cada um (não garante resultados nem elimina riscos).',
    ],
  },

  // ---------- Aula 11 ----------
  {
    id: 'a11-simon',
    aulas: [11],
    titulo: 'Racionalidade limitada de Simon',
    autor: 'Herbert Simon',
    essencial: 'Herbert Simon observou decisões reais e concluiu que os gestores procuram ser racionais dentro de limites: de informação (não conhecem todas as alternativas nem as consequências), de tempo (não podem analisar indefinidamente) e de cognição (atenção e capacidade de processamento limitadas). Por isso, em vez de otimizar (encontrar a melhor alternativa possível), tendem a satisfazer (satisficing): escolher uma alternativa suficientemente boa face a um critério de aceitável definido antecipadamente.',
    pontos: [
      'O modelo clássico pressupõe que conseguimos identificar e comparar todas as alternativas: o problema não é só escolher, é conseguir analisar.',
      'Limites de **informação**, **tempo** e **cognição**.',
      '**Otimizar**: encontrar a melhor alternativa possível.',
      '**Satisfazer (satisficing)**: a primeira alternativa que cumpre um critério de aceitável definido antecipadamente.',
      'O custo de continuar a procurar também entra na decisão.',
      'Processo real: procurar (opções limitadas) → avaliar (informação imperfeita) → parar (opção suficientemente boa).',
      '**Heurísticas**: atalhos mentais que poupam tempo e atenção; podem ajudar ou prejudicar.',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 3, celulas: [
        { t: 'Informação', d: 'Não conhecemos tudo.', tom: 'indigo' },
        { t: 'Tempo', d: 'Não podemos analisar indefinidamente.', tom: 'teal' },
        { t: 'Cognição', d: 'Atenção e processamento limitados.', tom: 'pink' },
      ],
    },
    exemplo: 'Contratar um gestor: entrevistar 300 candidatos ou escolher o primeiro que cumpre os requisitos? O custo de continuar a procurar também conta.',
    armadilha: 'Achar que satisficing é escolher ao acaso ou decidir sem critério: é parar na primeira opção que cumpre um critério de aceitável definido antes. E racionalidade limitada não é irracionalidade.',
  },
  {
    id: 'a11-vieses',
    aulas: [11],
    titulo: 'Vieses cognitivos',
    essencial: 'Um enviesamento cognitivo é uma tendência sistemática de julgamento que pode afastar as decisões de um padrão adequado: o problema não é errar, é errar repetidamente na mesma direção. Os principais são ancoragem, disponibilidade, confirmação, excesso de confiança, aversão à perda, enquadramento (framing), custos irrecuperáveis e escalada do compromisso. Não se eliminam, mas reduzem-se com processos mais robustos: critérios explícitos, procurar evidência contraditória, comparar alternativas e rever as decisões.',
    pontos: [
      '**Ancoragem**: uma referência inicial pesa demasiado nas estimativas seguintes.',
      '**Disponibilidade**: julgar a probabilidade pela facilidade de lembrar exemplos.',
      '**Confirmação**: privilegiar informação que sustenta crenças prévias.',
      '**Excesso de confiança**: subestimar riscos e sobrestimar a precisão das previsões.',
      '**Aversão à perda**: perder 100 € pesa mais do que ganhar 100 €.',
      '**Framing**: «90% de sucesso» vs «10% de fracasso» muda a preferência.',
      '**Custos irrecuperáveis** (o dinheiro já gasto) e **escalada do compromisso** (continuar a investir por causa dele).',
      'Reduzir: antes (critérios e cenários explícitos), durante (contraditório), depois (monitorização); pre-mortem.',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 2, celulas: [
        { t: 'Ancoragem', d: 'Uma informação inicial serve de referência e pesa demasiado nas estimativas seguintes.', tom: 'indigo' },
        { t: 'Disponibilidade', d: 'Julgar a frequência pela facilidade com que nos lembramos de exemplos.', tom: 'indigo' },
        { t: 'Confirmação', d: 'Valorizar a informação que confirma o que já acreditamos.', tom: 'teal' },
        { t: 'Excesso de confiança', d: 'Confiança nas nossas previsões superior à sua precisão efetiva.', tom: 'teal' },
        { t: 'Aversão à perda', d: 'As perdas pesam mais do que ganhos equivalentes.', tom: 'pink' },
        { t: 'Enquadramento (framing)', d: 'A forma de apresentar muda a preferência, com a mesma informação.', tom: 'pink' },
        { t: 'Custos irrecuperáveis', d: 'Custos já incorridos que não se recuperam, decida-se o que se decidir.', tom: 'orange' },
        { t: 'Escalada do compromisso', d: 'Continuar a investir para não «perder» o já investido.', tom: 'orange' },
      ],
    },
    exemplo: 'Ancoragem: «o projeto vai custar 1 milhão» → como avaliamos depois uma proposta de 800 mil? Custos irrecuperáveis: «já investimos 2 milhões, devemos continuar?» A decisão deve depender de custos e benefícios futuros.',
    armadilha: 'Confundir custos irrecuperáveis (o dinheiro já gasto) com escalada do compromisso (o comportamento de continuar a investir por causa dele). E heurística não é sinónimo de erro.',
    tambemSai: [
      'Uma forma de reduzir vieses: procurar evidência contraditória e comparar alternativas explicitamente (não ouvir apenas quem concorda nem decidir mais depressa).',
    ],
  },

  // ---------- Aula 12 ----------
  {
    id: 'a12-dados',
    aulas: [12],
    titulo: 'Dados: responder à pergunta certa',
    essencial: 'Decidir com base em dados não é ter muitos dados: é começar pela pergunta de gestão (a decisão a apoiar) e só depois procurar os dados necessários. Dados são registos de acontecimentos; informação são dados organizados e contextualizados; evidência é informação relevante para sustentar ou questionar uma hipótese; decisão é a escolha de uma ação face a objetivos. Os dados apoiam o processo, mas não escolhem os objetivos: volume não substitui relevância, qualidade e contexto.',
    pontos: [
      '**Dados → informação → evidência → decisão.**',
      '**Começar pela pergunta, não pelos dados**: «temos milhões de registos», mas qual é o problema de gestão?',
      'Muitos dados ≠ boa informação: **relevância** (respondem à pergunta certa?), **qualidade** (fiáveis e representativos?), **contexto** (o que ficou de fora?).',
      'Descrever (o que aconteceu?) → diagnosticar (porquê?) → prever (o que poderá acontecer?) → decidir (o que fazer?).',
      'Algoritmos: escala, rapidez, consistência; mas erram nos dados, no modelo ou no contexto.',
      '**Dados vs intuição é um falso dilema**: dados testam e quantificam; o julgamento define objetivos, interpreta e assume responsabilidade.',
    ],
    diagrama: {
      tipo: 'fluxo', passos: [
        { t: 'Dados', d: 'Registos, observações ou medições de acontecimentos.', tom: 'gray' },
        { t: 'Informação', d: 'Dados organizados e contextualizados.', tom: 'teal' },
        { t: 'Evidência', d: 'Informação relevante para sustentar, questionar ou avaliar uma hipótese.', tom: 'blue' },
        { t: 'Decisão', d: 'Escolha de uma ação face a objetivos.', tom: 'indigo' },
      ],
    },
    exemplo: 'Os analistas, com um modelo de previsão, recomendam A; um gestor com 25 anos de experiência prefere B. Não é uma competição: é preciso avaliar a qualidade de ambas as recomendações.',
    armadilha: 'Achar que mais dados significam automaticamente melhores decisões, ou que os dados escolhem os objetivos. Uma empresa com ótimos sistemas pode decidir mal por usar os indicadores errados.',
    tambemSai: [
      '**Qualidade dos dados**: depende, entre outros, de **exatidão** (os valores estão certos?), **completude** (falta alguma coisa?) e **atualidade** (estão em dia?). Não depende da quantidade de gráficos nem do software.',
      '**Dashboard de gestão**: serve para acompanhar indicadores e apoiar decisões. Não garante que os dados são corretos nem substitui a análise e o julgamento.',
      '**Decisão baseada em evidências**: combina dados relevantes, contexto e julgamento crítico (não apenas intuição, médias ou a última observação).',
    ],
  },
  {
    id: 'a12-correlacao',
    aulas: [12],
    titulo: 'Correlação e causalidade',
    essencial: 'Duas variáveis podem variar em conjunto (correlação) sem que uma cause a outra (causalidade). A correlação pode resultar de uma causa comum, de causalidade inversa ou de coincidência, por isso não demonstra por si só uma relação causal. Isto importa porque os gestores querem alterar o que acontece: prever quem vai comprar não é saber quem comprará por causa de uma campanha, e um modelo pode prever bem sem identificar causas.',
    pontos: [
      '**Correlação**: variam em conjunto. **Causalidade**: uma provoca a outra.',
      'Três explicações alternativas: **causa comum**, **causalidade inversa**, **coincidência**.',
      '**Previsão ≠ intervenção**: quem tem mais probabilidade de comprar vs quem comprará por causa da campanha.',
      '**Prever não é explicar**: um modelo pode prever bem sem identificar causas.',
      'Precisamos de hipóteses e evidência, não de conclusões automáticas.',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 3, celulas: [
        { t: 'Causa comum', d: 'Gelados e afogamentos sobem juntos por causa do calor.', tom: 'indigo' },
        { t: 'Causalidade inversa', d: 'A empresa investe em publicidade porque já espera mais procura.', tom: 'teal' },
        { t: 'Coincidência', d: 'Variam juntas por acaso.', tom: 'gray' },
      ],
    },
    exemplo: 'Publicidade e vendas sobem juntas. A publicidade aumentou as vendas, ou a empresa investiu mais porque já antecipava mais procura (brinquedos em novembro e dezembro)?',
    armadilha: 'Concluir causa a partir de coincidência temporal: as vendas caíram depois da subida de preços, mas o rendimento, a concorrência ou a disponibilidade podem ter mudado ao mesmo tempo.',
    tambemSai: [
      'Uma correlação não demonstra por si só uma relação causal (nem elimina fatores de confusão); também não é sempre irrelevante.',
    ],
  },

  // ---------- Aula 13 ----------
  {
    id: 'a13-ansoff',
    aulas: [13],
    titulo: 'Matriz de Ansoff',
    autor: 'Ansoff',
    essencial: 'A matriz de Ansoff identifica quatro direções de crescimento combinando duas dimensões: produtos (atuais ou novos) e mercados (atuais ou novos). Penetração de mercado: vender mais dos produtos atuais nos mercados atuais. Desenvolvimento de mercado: levar os produtos atuais a novos mercados (geografias, segmentos, canais). Desenvolvimento de produto: produtos novos para os clientes atuais. Diversificação: produtos novos em mercados novos. Indica a direção, não o modo de entrada, e crescer não é necessariamente criar valor.',
    pontos: [
      '**Penetração de mercado** (atual × atual): quota, frequência, retenção. Risco: concorrência, saturação.',
      '**Desenvolvimento de mercado** (produto atual × mercado novo): nova geografia, segmentos, canais. Risco: adaptação local, regulação.',
      '**Desenvolvimento de produto** (produto novo × mercado atual): inovação, serviços complementares. Risco: aceitação, canibalização.',
      '**Diversificação** (novo × novo): interno, aquisição, parcerias. Risco: pouca experiência, maior incerteza.',
      'Escolher por **atratividade**, **adequação** e **viabilidade**.',
      'Ansoff dá a direção; orgânico, aquisição ou parceria é o modo de entrada.',
    ],
    diagrama: {
      tipo: 'matriz', colunas: ['Produtos atuais', 'Produtos novos'], linhas: ['Mercados atuais', 'Mercados novos'], celulas: [
        { t: 'Penetração de mercado', d: 'Ganhar quota, aumentar frequência, melhorar retenção. Risco: concorrência, custos de aquisição, saturação.', tom: 'green' },
        { t: 'Desenvolvimento de produto', d: 'Inovação, extensão da oferta, serviços complementares. Risco: investimento, aceitação, canibalização, execução.', tom: 'blue' },
        { t: 'Desenvolvimento de mercado', d: 'Nova geografia, segmentos, canais. Risco: adaptação local, concorrência, regulação, distribuição.', tom: 'orange' },
        { t: 'Diversificação', d: 'Interno, aquisição, parcerias. Risco: pouca experiência, novos concorrentes, maior incerteza.', tom: 'red' },
      ],
    },
    exemplo: 'Penetração: Netflix a melhorar a retenção onde já opera. Desenvolvimento de mercado: cadeia portuguesa de restauração a entrar em Espanha. Desenvolvimento de produto: Zara com serviço de reparação e personalização. Diversificação: empresa de vestuário que entra na hotelaria.',
    armadilha: 'Trocar desenvolvimento de mercado (o mesmo produto para clientes novos) com desenvolvimento de produto (algo novo para os clientes atuais). E achar que a diversificação é sempre a mais arriscada ou que reduz automaticamente o risco: depende da proximidade e das capacidades transferíveis.',
    tambemSai: [
      'Vender os produtos atuais num novo país = desenvolvimento de mercado; novo produto para clientes atuais = desenvolvimento de produto; vender mais do mesmo no mesmo mercado = penetração; novos produtos em novos mercados = diversificação.',
    ],
  },

  // ---------- Aula 14 ----------
  {
    id: 'a14-smart',
    aulas: [14],
    titulo: 'Objetivos SMART',
    essencial: 'Um objetivo SMART torna explícito o resultado pretendido: é Específico (diz exatamente o que se quer), Mensurável (tem um indicador e um valor), Alcançável (realista face aos recursos), Relevante (alinhado com a estratégia) e Temporalmente definido (tem prazo). Uma meta precisa ainda de referência inicial e responsável. SMART ajuda a formular, mas não garante que o objetivo seja o certo: é preciso avaliar a relevância e os efeitos sobre outros objetivos.',
    pontos: [
      '**S · Específico**: o que exatamente queremos alcançar.',
      '**M · Mensurável**: indicador e valor-alvo.',
      '**A · Alcançável**: realista face aos recursos e ao contexto.',
      '**R · Relevante**: ligado à estratégia.',
      '**T · Temporalmente definido**: prazo.',
      'Uma meta precisa de **referência inicial, prazo e responsável**.',
      'Objetivos podem entrar em conflito (vendas, margem, qualidade, prazo): gerir é explicitar prioridades e trade-offs.',
      'SMART ajuda a formular; a MBO (Drucker) ajuda a coordenar.',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 5, celulas: [
        { t: 'S', d: 'Específico', tom: 'indigo' },
        { t: 'M', d: 'Mensurável', tom: 'indigo' },
        { t: 'A', d: 'Alcançável', tom: 'indigo' },
        { t: 'R', d: 'Relevante', tom: 'indigo' },
        { t: 'T', d: 'Temporalmente definido', tom: 'indigo' },
      ],
    },
    exemplo: '«Melhorar a satisfação» → «Aumentar a satisfação média de 7,5 para 8,2 até dezembro». «Reduzir saídas» → «Diminuir a rotatividade anual de 18% para 13%».',
    armadilha: 'SMART não significa bom: «Reduzir a duração média das chamadas para menos de 2 minutos» é SMART e pode ser prejudicial (desligar chamadas sem resolver problemas).',
    tambemSai: [
      'Bem formulado: «Aumentar em 8% as vendas online até 31 de dezembro». Mal formulado: «Melhorar bastante o negócio até 31 de dezembro» (tem prazo, mas não é específico nem mensurável).',
      'Um **objetivo desafiante** funciona melhor quando é **aceite** e acompanhado de **recursos e feedback** (não quando é impossível, secreto ou sem prazo nem responsável).',
    ],
  },
  {
    id: 'a14-kpi',
    aulas: [14],
    titulo: 'KPI',
    essencial: 'Um KPI (indicador-chave de desempenho) é um indicador usado para acompanhar um aspeto relevante do desempenho: uma medida selecionada pela sua importância para um objetivo de gestão. Distingue-se do dado (registo bruto, ex.: 4 200 visitas ao site) e da métrica (cálculo a partir dos dados, ex.: taxa de conversão de 2,4%): a métrica só é KPI quando é comparada com uma meta estratégica. Cada KPI precisa de definição, meta, responsável e fonte, e deve refletir o objetivo, não substituí-lo.',
    pontos: [
      '**Dado**: 4 200 visitas ao site. **Métrica**: conversão de 2,4%. **KPI**: conversão face à meta estratégica.',
      'A mesma métrica pode ser central numa empresa e secundária noutra.',
      'Contexto de um KPI: **definição** (o que mede, como se calcula), **meta** (valor-alvo e prazo), **responsável**, **fonte**.',
      '**Lagging** (resultados: margem, vendas, churn) vs **leading** (sinais: pedidos, conversão, tempos de resposta).',
      'Um conjunto limitado de KPI relevantes, compreensíveis, fiáveis e acionáveis.',
      'A seleção de KPI é uma decisão estratégica; KPI são meios, não fins.',
    ],
    diagrama: {
      tipo: 'fluxo', passos: [
        { t: 'Dado', d: '4 200 visitas ao site.', tom: 'gray' },
        { t: 'Métrica', d: 'Taxa de conversão: 2,4%.', tom: 'teal' },
        { t: 'KPI', d: 'Conversão face à meta estratégica.', tom: 'indigo' },
      ],
    },
    exemplo: 'Menor tempo médio de atendimento = melhor serviço? Não necessariamente: combinar com resolução no primeiro contacto e satisfação.',
    armadilha: 'Achar que qualquer métrica é um KPI, ou que um KPI garante causalidade. E um indicador leading é um sinal potencial, não uma causa demonstrada.',
    tambemSai: [
      'Um **KPI mal definido** pode induzir comportamentos desalinhados com o objetivo (ligação direta à lei de Goodhart).',
    ],
  },
  {
    id: 'a14-bsc',
    aulas: [14],
    titulo: 'Balanced Scorecard',
    autor: 'Kaplan e Norton (1992)',
    essencial: 'O Balanced Scorecard, de Kaplan e Norton (1992), avalia o desempenho através de quatro perspetivas articuladas com a estratégia, porque os indicadores financeiros não bastam: financeira (que resultados económicos?), clientes (que valor entregamos?), processos internos (em que devemos ser excelentes?) e aprendizagem e crescimento (que capacidades desenvolver?). As perspetivas ligam-se por relações causa-efeito que são hipóteses a testar. Evoluiu de avaliação de desempenho para sistema de gestão estratégica.',
    pontos: [
      '**Financeira**: que resultados económicos? Ex.: margem operacional.',
      '**Clientes**: que valor entregamos? Ex.: retenção e satisfação.',
      '**Processos internos**: em que devemos ser excelentes? Ex.: ruturas de stock.',
      '**Aprendizagem e crescimento**: que capacidades desenvolver? Ex.: formação e competências.',
      'Cadeia: formação → melhores processos → clientes satisfeitos → melhores resultados? São hipóteses.',
      'Os indicadores devem corresponder à estratégia escolhida.',
    ],
    diagrama: {
      tipo: 'fluxo', passos: [
        { t: 'Aprendizagem', d: 'Que capacidades desenvolver? Ex.: formação e competências.', tom: 'pink' },
        { t: 'Processos', d: 'Em que devemos ser excelentes? Ex.: ruturas de stock.', tom: 'teal' },
        { t: 'Clientes', d: 'Que valor entregamos? Ex.: retenção e satisfação.', tom: 'blue' },
        { t: 'Financeira', d: 'Que resultados económicos? Ex.: margem operacional.', tom: 'indigo' },
      ],
    },
    exemplo: 'Cadeia de lojas com rentabilidade a cair e produtos esgotados: margem operacional (financeira), retenção e satisfação (clientes), ruturas de stock (processos), formação e competências (aprendizagem).',
    armadilha: 'Usar só indicadores financeiros: pode melhorar-se o lucro do trimestre cortando formação ou manutenção e criar problemas futuros. E tratar as setas causa-efeito como factos, quando são hipóteses.',
    tambemSai: [
      'O BSC inclui habitualmente as perspetivas financeira, clientes, processos internos e aprendizagem/crescimento (não apenas a financeira nem apenas receitas e custos).',
    ],
  },
  {
    id: 'a14-goodhart',
    aulas: [14],
    titulo: 'Lei de Goodhart',
    autor: 'Goodhart (1975)',
    essencial: 'A lei de Goodhart (1975, originalmente sobre política monetária) diz que, quando uma métrica se torna um objetivo, as pessoas alteram comportamentos para a otimizar e ela perde qualidade como medida. O indicador pode melhorar sem que o objetivo melhore. Para reduzir distorções: combinar indicadores de resultado, qualidade e processo, analisar efeitos secundários, rever metas quando o contexto muda e complementar os dados com avaliação e julgamento.',
    pontos: [
      'Métrica transformada em objetivo → comportamentos mudam para a otimizar → perde utilidade como medida.',
      '**O indicador pode melhorar sem que o objetivo melhore.**',
      'Combinar indicadores de resultado, qualidade e processo.',
      'Analisar efeitos secundários e comportamentos incentivados.',
      'Rever metas quando o contexto muda; complementar dados com julgamento.',
      'Não diz para deixar de medir: medir pode melhorar a gestão ou distorcer a ação.',
    ],
    diagrama: {
      tipo: 'grelha', colunas: 1, celulas: [
        { t: 'Call center: premiar chamadas curtas', d: 'Combinar com resolução no primeiro contacto, satisfação, chamadas repetidas, reclamações.', tom: 'orange' },
        { t: 'Escola: avaliar apenas notas', d: 'Combinar com índice de aprovação, satisfação dos alunos e da comunidade escolar, acesso a tecnologia, outras competências.', tom: 'orange' },
        { t: 'Comercial: premiar só contratos assinados', d: 'Combinar com margem e valor por contrato, retenção, cancelamentos, incumprimento, rentabilidade dos clientes.', tom: 'orange' },
      ],
    },
    exemplo: 'Call center que premeia chamadas curtas: o tempo médio de atendimento desce, mas os problemas ficam por resolver e as chamadas repetidas aumentam.',
    armadilha: 'Ver uma métrica a melhorar e concluir que o desempenho melhorou. E ler Goodhart como «toda a medição é inútil»: o alerta é sobre transformar a medida em alvo.',
    tambemSai: [
      'Um **KPI mal definido** induz comportamentos desalinhados com o objetivo: é o mecanismo de Goodhart.',
    ],
  },
]
