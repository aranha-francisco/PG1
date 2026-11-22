// As 24 questões de resposta aberta do documento "Resumo Temas por Aula" do professor (pp. 11–12).
// `pergunta` é o texto do documento, tal como está. As respostas-modelo são nossas, escritas
// com a terminologia e os exemplos dos slides das aulas. `**negrito**` marca os termos-chave.

export interface Aberta {
  id: string // '1.1', como no documento
  aula: number
  pergunta: string // texto literal do documento
  blocos: { h?: string; p?: string; bullets?: string[] }[]
  chave: string[] // 3–6 termos que o corretor espera encontrar
}

export const ABERTAS: Aberta[] = [
  // ---------- Aula 1 ----------
  {
    id: '1.1',
    aula: 1,
    pergunta: 'Distinga eficácia de eficiência, apresentando um exemplo de cada conceito. Comente: «Uma organização pode ser eficiente sem ser eficaz».',
    blocos: [
      { p: '**Eficácia** é atingir os objetivos definidos: «fazer as coisas certas». **Eficiência** é utilizar bem os recursos, isto é, a relação entre os recursos utilizados e os resultados obtidos: «fazer bem as coisas».' },
      {
        bullets: [
          '**Exemplo de eficácia:** se o objetivo da Comes & Bebes era crescer as vendas, os +18% mostram eficácia; mas o lucro caiu 12%, sinal de que os recursos não foram bem usados.',
          '**Exemplo de eficiência:** a FastBox padroniza métodos e elimina movimentos desnecessários, e passa a tratar as mesmas encomendas com menos tempo e custo.',
        ],
      },
      { h: 'Comentário', p: 'A afirmação é verdadeira. Uma empresa pode reduzir os custos em 20% (eficiente) e perder 30% dos clientes e, assim, falhar o objetivo (não eficaz). Fazer bem a coisa errada não cria valor. Além disso, sem conhecer o objetivo nem sequer conseguimos avaliar a eficácia. A gestão procura as duas **em simultâneo**.' },
    ],
    chave: ['atingir objetivos', 'uso de recursos', 'fazer as coisas certas', 'fazer bem as coisas', 'reduzir custos e perder clientes'],
  },
  {
    id: '1.2',
    aula: 1,
    pergunta: 'Identifique as quatro funções do ciclo de gestão (POLC). Descreva o ciclo de gestão, ilustrando as suas funções numa empresa comercial.',
    blocos: [
      { p: 'As quatro funções são **Planear, Organizar, Liderar e Controlar** (POLC), com raízes nas funções de Fayol. Ilustração numa cadeia de retalho com 25 lojas que lança uma linha premium:' },
      {
        bullets: [
          '**Planear** (onde queremos chegar?): fixar o objetivo de aumentar as vendas em 15% e escolher como lá chegar.',
          '**Organizar** (como distribuímos os recursos?): decidir quem faz o quê: compras, stocks por loja, orçamento, equipas e quem decide.',
          '**Liderar** (como mobilizamos as pessoas?): comunicar a estratégia aos gerentes, formar e motivar os vendedores, gerir conflitos.',
          '**Controlar** (estamos a atingir o pretendido?): comparar vendas, margem e ruturas de stock com as metas, identificar desvios e corrigir.',
        ],
      },
      { p: 'É um **ciclo**: o controlo gera informação que alimenta um novo planeamento. Na prática as funções não acontecem de forma linear e separada; sobrepõem-se no dia a dia do gestor.' },
    ],
    chave: ['Planear', 'Organizar', 'Liderar', 'Controlar', 'ciclo / feedback', 'Fayol'],
  },

  // ---------- Aula 2 ----------
  {
    id: '2.1',
    aula: 2,
    pergunta: 'Comente à luz de Coase a decisão “Make or Buy?” aludindo aos conceitos de Custos de Transação e Custos de Organização.',
    blocos: [
      { p: '**Coase** (The Nature of the Firm, 1937) perguntou porque é que umas atividades são coordenadas pelo **mercado** (preço, contratos) e outras **dentro da empresa** (autoridade, regras, hierarquia). Nenhuma das formas é gratuita.' },
      {
        bullets: [
          '**Custos de transação:** custos de usar o mercado para além do preço: procurar, comparar, negociar, contratar, monitorizar e resolver problemas.',
          '**Custos de organização:** custos de fazer internamente: gestores, hierarquia, coordenação, burocracia, controlo, sistemas e incentivos.',
        ],
      },
      { p: '**Make or buy:** a empresa faz internamente (make) quando os custos de transação superam os de organização, e compra no mercado (buy) no caso contrário. É assim que se define a **fronteira da empresa**.' },
      { p: 'Exemplo: a Hotelia (40 hotéis) pode comprar a lavandaria, um serviço padronizado com muitos fornecedores, mas manter internamente a gestão dos dados dos clientes, que é estratégica e confidencial. Pesam ainda a qualidade, as competências internas, o risco e a dependência de fornecedores.' },
    ],
    chave: ['Coase', 'custos de transação', 'custos de organização', 'mercado vs. hierarquia', 'fronteira da empresa'],
  },

  // ---------- Aula 3 ----------
  {
    id: '3.1',
    aula: 3,
    pergunta: 'Explique a contribuição de Taylor para a organização científica do trabalho.',
    blocos: [
      { p: '**Taylor** (The Principles of Scientific Management, 1911) procurou a forma mais eficiente de executar cada **tarefa** e quis substituir a «rule of thumb» (tradição e experiência individual) por conhecimento sistemático: observar → medir → analisar → padronizar → controlar. Os quatro princípios são:' },
      {
        bullets: [
          '**Ciência:** um método científico para cada tarefa, apoiado em **estudos de tempos e movimentos**.',
          '**Seleção e formação:** o trabalhador certo para a tarefa certa.',
          '**Cooperação:** garantir que o método definido é aplicado.',
          '**Divisão de responsabilidades:** a gestão concebe e controla; os trabalhadores executam.',
        ],
      },
      { p: 'O resultado foi mais **produtividade e previsibilidade**. Na FastBox, por exemplo, significaria padronizar métodos e eliminar movimentos inúteis. Limites: monotonia, menos autonomia e esquecimento do lado humano. A lógica continua atual em armazéns, call centers e software de monitorização.' },
    ],
    chave: ['Scientific Management', 'estudos de tempos e movimentos', 'padronização', 'one best way / rule of thumb', 'produtividade'],
  },
  {
    id: '3.2',
    aula: 3,
    pergunta: 'Distinga os contributos de Taylor, Fayol e Weber.',
    blocos: [
      { p: 'Os três procuram **eficiência, racionalidade, previsibilidade e controlo**, mas atuam em níveis diferentes do problema da coordenação:' },
      {
        bullets: [
          '**Taylor (tarefa):** como executar o trabalho de forma eficiente? Organização científica do trabalho, estudos de tempos e movimentos, padronização do método.',
          '**Fayol (gestão):** como administrar a organização como um todo? Funções da gestão (prever, organizar, comandar, coordenar, controlar), origem do POLC, e 14 princípios, como a unidade de comando e a cadeia escalar.',
          '**Weber (estrutura):** como organizar racionalmente a autoridade e as regras? **Burocracia**: regras formais, hierarquia, divisão do trabalho, impessoalidade e competência técnica. A autoridade é legal-racional: pertence ao cargo, não à pessoa.',
        ],
      },
      { p: 'Na FastBox: Taylor uniformizava os métodos, Fayol acabava com as instruções contraditórias das chefias (unidade de comando) e Weber definia responsabilidades para que as decisões não dependessem de pessoas específicas.' },
    ],
    chave: ['Taylor – tarefa', 'Fayol – funções da gestão / POLC', 'Weber – burocracia', 'autoridade legal-racional', 'unidade de comando'],
  },

  // ---------- Aula 4 ----------
  {
    id: '4.1',
    aula: 4,
    pergunta: 'Qual foi a importância das experiências de Hawthorne?',
    blocos: [
      { p: 'As experiências de **Hawthorne** (Western Electric, Chicago, anos 1920–30), associadas a **Elton Mayo**, estudavam como as condições de trabalho influenciam a produtividade. Quando se aumentou a iluminação, a produtividade subiu; quando se reduziu, também subiu. Não era a luz.' },
      { p: 'Mostraram que o comportamento no trabalho **não se explica apenas por condições físicas e incentivos económicos**. Revelaram:' },
      {
        bullets: [
          'o peso do **grupo** e das suas normas: numa equipa que faz 40 pedidos por dia, o colega novo que faz 80 é pressionado a abrandar;',
          'a importância do reconhecimento, da pertença e da comunicação;',
          'a **organização informal** (relações, lideranças informais), que não coincide com o organigrama.',
        ],
      },
      { p: 'Deram origem às **Relações Humanas** e à visão da organização como **sistema social**. Mas atenção: o «efeito Hawthorne» não é só «ser observado aumenta a produtividade», e satisfação não é sinónimo de produtividade.' },
    ],
    chave: ['Elton Mayo', 'fatores sociais', 'normas do grupo', 'organização informal', 'Relações Humanas'],
  },
  {
    id: '4.2',
    aula: 4,
    pergunta: 'Defina teoria da contingência.',
    blocos: [
      { p: 'A **teoria da contingência** defende que **não existe uma «melhor forma» universal de gerir**: a forma adequada depende das características da situação e do contexto («it depends»). «Depende» não significa «vale tudo»; significa ajustar a gestão a fatores como o **ambiente, a tecnologia, a estratégia, a dimensão, a tarefa e as pessoas**.' },
      { p: 'Exemplo: o McDonald’s, com grande volume, tarefas repetitivas e necessidade de consistência, beneficia de padronização e controlo. Uma startup de IA, com incerteza elevada, inovação e mudança rápida, precisa de autonomia e experimentação. Até dentro da mesma organização se gere de forma diferente: na Zara, a logística e o design.' },
      { p: 'Assim, Taylor não estava necessariamente errado. O erro é tratar uma solução adequada a um contexto como se fosse universal.' },
    ],
    chave: ['não há uma melhor forma', 'depende do contexto', 'ambiente, tecnologia, dimensão', 'McDonald’s vs. startup', 'ajustamento'],
  },

  // ---------- Aula 5 ----------
  {
    id: '5.1',
    aula: 5,
    pergunta: 'Explique as dimensões de VUCA.',
    blocos: [
      { p: '**VUCA** descreve um ambiente em mudança, que o gestor não controla:' },
      {
        bullets: [
          '**Volatilidade:** mudanças rápidas e intensas. Ex.: o preço de uma matéria-prima oscila 30% em semanas.',
          '**Incerteza:** dificuldade em prever acontecimentos e resultados. Ex.: não sabemos se uma nova tecnologia será adotada.',
          '**Complexidade:** muitas variáveis interdependentes. Ex.: a produção depende de fornecedores, câmbios, energia e regulação em 12 países.',
          '**Ambiguidade:** dificuldade em interpretar situações novas. Ex.: surge uma tecnologia e ninguém sabe ainda como vai criar valor.',
        ],
      },
      { p: 'VUCA não significa caos: a incerteza **torna a gestão mais necessária**. Não se deixa de planear; planeia-se de forma diferente: monitorizar, criar cenários, experimentar, aprender, adaptar e ganhar **resiliência**, o que pode exigir alguma redundância em vez de eficiência máxima.' },
    ],
    chave: ['Volatilidade', 'Incerteza', 'Complexidade', 'Ambiguidade', 'adaptação / resiliência'],
  },
  {
    id: '5.2',
    aula: 5,
    pergunta: 'Comente os desafios da gestão intercultural.',
    blocos: [
      { p: 'Com a globalização, a mesma empresa pode ter equipas em Lisboa, São Paulo, Berlim, Mumbai e Tóquio no mesmo projeto e com os mesmos objetivos. Isso não significa que trabalhem da mesma forma: a **cultura influencia as expectativas** sobre comunicação, autoridade, feedback, conflito, tempo, risco e decisão.' },
      {
        bullets: [
          '**Mal-entendidos:** o e-mail «I think you may want to reconsider this proposal» é uma sugestão para uma pessoa e uma ordem do chefe para outra.',
          '**Estereótipos:** as diferenças culturais são tendências, não etiquetas individuais.',
          '**Coordenação:** a diversidade traz mais informação e perspetivas, mas aumenta a necessidade de coordenar.',
        ],
      },
      { p: 'O gestor deve **comunicar, clarificar, coordenar e integrar**. Gerir a diversidade não é eliminar diferenças nem impor as práticas do país de origem. É compreender padrões culturais sem estereotipar pessoas.' },
    ],
    chave: ['diferenças de comunicação', 'expectativas culturais', 'evitar estereótipos', 'coordenação', 'diversidade'],
  },

  // ---------- Aula 6 ----------
  {
    id: '6.1',
    aula: 6,
    pergunta: 'Enuncie e caracterize as funções POLC.',
    blocos: [
      { p: 'O **POLC** reúne as quatro funções fundamentais que a gestão tem de assegurar, herdadas de Fayol:' },
      {
        bullets: [
          '**Planear:** onde queremos chegar e como? Definir objetivos, gerar alternativas, fazer escolhas e afetar recursos. Ex.: a Netflix quer crescer na Ásia em 3 anos; que caminho escolher? Planear não é prever o futuro, é preparar escolhas sobre o futuro.',
          '**Organizar:** transformar o plano em capacidade de execução. Pessoas, tarefas, recursos e autoridade: quem faz o quê, quem decide, quem coordena.',
          '**Liderar:** mobilizar pessoas para objetivos comuns. Comunicar, motivar, influenciar e gerir conflitos. As organizações não executam planos; as pessoas é que os executam.',
          '**Controlar:** estamos a conseguir o que pretendíamos? Medir, comparar com o objetivo, identificar desvios, corrigir e aprender, com base em dados.',
        ],
      },
      { p: 'As funções formam um ciclo, mas no trabalho real (o dia da Maria, diretora de operações) acontecem misturadas e não em sequência.' },
    ],
    chave: ['Planear', 'Organizar', 'Liderar', 'Controlar', 'corrigir desvios'],
  },
  {
    id: '6.2',
    aula: 6,
    pergunta: 'Compare as funções POLC com os papéis de Mintzberg.',
    blocos: [
      { p: 'O **POLC** (Fayol) é uma perspetiva **funcional** e mais abstrata: o que a gestão tem de assegurar. **Mintzberg** observou gestores a trabalhar e adotou uma perspetiva **comportamental** e observável: o que os gestores realmente fazem. Concluiu que o trabalho é fragmentado, interrompido, relacional e intensivo em informação, e identificou 10 papéis:' },
      {
        bullets: [
          '**Interpessoais:** figurehead (representante), leader (líder), liaison (ligação).',
          '**Informacionais:** monitor, disseminator (disseminador), spokesperson (porta-voz).',
          '**Decisionais:** entrepreneur (empreendedor), disturbance handler (gestor de perturbações), resource allocator (afetação de recursos), negotiator (negociador).',
        ],
      },
      { p: 'São perspetivas **complementares**, não concorrentes. Quando um fornecedor atrasa uma entrega, a Maria é monitor, liaison, disturbance handler e resource allocator ao mesmo tempo, e está a organizar e a controlar. O papel de leader corresponde a liderar; o de monitor apoia o controlo.' },
    ],
    chave: ['funções vs. papéis', 'perspetiva funcional vs. comportamental', 'interpessoais', 'informacionais', 'decisionais', 'complementares'],
  },

  // ---------- Aula 7 ----------
  {
    id: '7.1',
    aula: 7,
    pergunta: 'Identifique e caracterize as seis dimensões da PESTEL.',
    blocos: [
      { p: 'O **PESTEL** estrutura a análise do **macroambiente**, isto é, das forças gerais que a empresa não controla:' },
      {
        bullets: [
          '**Político:** política comercial, tarifas, incentivos, estabilidade governativa. Afeta o acesso a mercados e o custo de importar.',
          '**Económico:** inflação, taxas de juro, crescimento, câmbios, rendimento. Afeta a procura, o financiamento e os custos.',
          '**Sociocultural:** demografia, hábitos de consumo, estilos de vida, valores. Altera a procura e as expectativas.',
          '**Tecnológico:** IA, automação, plataformas, cibersegurança. Afeta a produtividade e cria novos modelos de negócio e substitutos.',
          '**Ambiental:** clima, energia, água, resíduos. Traz risco operacional, custos e novas exigências.',
          '**Legal:** normas laborais, de privacidade, de concorrência e de consumo. Impõe custos de conformidade e restrições.',
        ],
      },
      { p: 'Político não é o mesmo que legal: um é uma orientação de política, o outro uma norma em vigor. Uma boa análise não é uma lista de tendências; segue a cadeia **fator → mecanismo → impacto → resposta**.' },
    ],
    chave: ['macroambiente', 'Político, Económico, Sociocultural', 'Tecnológico, Ambiental, Legal', 'mecanismo de impacto', 'político ≠ legal'],
  },
  {
    id: '7.2',
    aula: 7,
    pergunta: 'Explique como uma tendência demográfica pode criar uma oportunidade.',
    blocos: [
      { p: 'Uma tendência demográfica é um fator **sociocultural** do PESTEL e uma **tendência**, uma mudança persistente ao longo do tempo, não um acontecimento pontual. Não é, por si só, uma oportunidade: torna-se uma quando muda a procura de forma favorável a um negócio que tem capacidade para responder.' },
      { p: 'Exemplo: o **envelhecimento da população** (fator) altera a composição da procura e aumenta a procura de produtos e serviços de saúde (mecanismo). Uma cadeia de farmácias pode vender mais e captar novos clientes (impacto) se reavaliar a oferta e a organização dos serviços, por exemplo com produtos para seniores, aconselhamento ou entregas ao domicílio (resposta).' },
      { p: 'A mesma tendência pode ser uma ameaça para outra empresa, por exemplo pela falta de mão de obra jovem. Por isso deve ser confirmada com dados (INE, Eurostat) e, na SWOT, cruzada com as forças internas.' },
    ],
    chave: ['fator sociocultural', 'tendência', 'mudança na procura', 'fator → mecanismo → impacto → resposta', 'oportunidade depende da empresa'],
  },

  // ---------- Aula 8 ----------
  {
    id: '8.1',
    aula: 8,
    pergunta: 'Identifique e caracterize as cinco forças de Porter.',
    blocos: [
      { p: 'O modelo de **Porter** analisa a estrutura competitiva de um setor e explica a sua **rentabilidade** e **atratividade**. A concorrência vai além dos rivais diretos:' },
      {
        bullets: [
          '**Rivalidade entre concorrentes:** aumenta com muitos concorrentes, crescimento lento, pouca diferenciação e custos fixos elevados. Gera descontos, publicidade e pressão sobre as margens.',
          '**Poder negocial dos clientes:** aumenta com poucos compradores, grandes volumes e baixos custos de mudança. Ex.: uma cadeia de retalho perante pequenos fornecedores.',
          '**Poder negocial dos fornecedores:** aumenta com fornecedores concentrados, inputs únicos e alternativas escassas. Ex.: os conteúdos exclusivos de que a Netflix depende.',
          '**Ameaça de novos entrantes:** depende das barreiras à entrada (capital, marca, escala, regulação, acesso à distribuição).',
          '**Ameaça de substitutos:** soluções diferentes para a mesma necessidade. Ex.: a videoconferência em vez da viagem de negócios. Limita o preço.',
        ],
      },
      { p: 'Quanto mais fortes as forças, menos atrativo é o setor. Mas um setor rentável não faz uma empresa necessariamente rentável, e as forças mudam com o tempo.' },
    ],
    chave: ['rivalidade', 'poder dos clientes', 'poder dos fornecedores', 'novos entrantes / barreiras', 'substitutos', 'atratividade do setor'],
  },
  {
    id: '8.2',
    aula: 8,
    pergunta: 'Defina vantagem competitiva e dê um exemplo.',
    blocos: [
      { p: '**Vantagem competitiva** é a capacidade de uma empresa **criar valor de forma superior ou distinta face aos concorrentes relevantes** e de **captar** esse valor, com receitas que excedem os custos de o entregar. Exige sempre comparação com os rivais. Há duas fontes clássicas:' },
      {
        bullets: [
          '**Custo relativo inferior:** entregar valor comparável com uma estrutura de custos mais favorável. Ex.: a **Ryanair**, com uma operação de baixo custo e uma oferta orientada para o preço.',
          '**Diferenciação:** oferecer atributos que os clientes valorizam e que sustentam uma maior disposição a pagar. Ex.: a **Apple**, com ecossistema, design e marca.',
        ],
      },
      { p: 'A Zara combina rapidez de resposta, integração operacional e renovação constante da oferta. A vantagem é **dinâmica**, não um prémio vitalício: os rivais imitam, as preferências e a tecnologia mudam, e é preciso reinvestir e reinventar.' },
    ],
    chave: ['criar e captar valor', 'face aos concorrentes', 'custo relativo inferior', 'diferenciação', 'Ryanair / Apple', 'dinâmica'],
  },
  {
    id: '8.3',
    aula: 8,
    pergunta: 'Explique a diferença entre forças e fraquezas na SWOT.',
    blocos: [
      { p: 'A **SWOT** é uma matriz 2×2 que integra a análise **interna** (forças e fraquezas) com a **externa** (oportunidades e ameaças, vindas do PESTEL e de Porter).' },
      {
        bullets: [
          '**Forças (S):** capacidades internas que favorecem a empresa face ao desafio e aos concorrentes. Ex.: escala e reconhecimento da marca na Netflix, ou uma capacidade logística rápida.',
          '**Fraquezas (W):** limitações internas face ao desafio. Ex.: a dependência da Netflix de investimento contínuo em conteúdos.',
        ],
      },
      { p: 'A diferença está no sentido: a força ajuda e a fraqueza limita. Ambas são **internas**, ou seja, dependem de recursos, competências e processos que a empresa pode desenvolver, ao contrário das oportunidades e ameaças, que são externas. São também **relativas** aos concorrentes e ao objetivo. Devem ser fundamentadas: em vez de «marca forte», escrever «o reconhecimento da marca facilita a obtenção de clientes». A SWOT gera hipóteses, não decide sozinha.' },
    ],
    chave: ['interno vs. externo', 'forças favorecem', 'fraquezas limitam', 'relativas aos concorrentes', 'fundamentadas'],
  },

  // ---------- Aula 9 ----------
  {
    id: '9.1',
    aula: 9,
    pergunta: 'Distinga variáveis controláveis, incontroláveis e de postura. Dê dois exemplos de cada uma delas.',
    blocos: [
      {
        bullets: [
          '**Incontroláveis:** fatores do ambiente cujo valor a empresa não decide diretamente. Ex.: a **inflação** (ou as taxas de juro) e uma **alteração da legislação**. Não controlar não significa não poder responder.',
          '**De postura:** escolhas estratégicas sobre como competir e responder ao contexto: mercado-alvo, proposta de valor, posicionamento. Ex.: **competir pelo preço com uma oferta económica** ou **apostar na diferenciação premium**; escolher o **segmento** a servir.',
          '**Controláveis:** instrumentos que a empresa pode ajustar: produto, preço, distribuição e comunicação. Ex.: **baixar o preço de 20 € para 18 €** e **lançar uma campanha** ou abrir um canal online.',
        ],
      },
      { p: 'Os três tipos interagem: perante a inflação (incontrolável), uma empresa reforça a oferta económica (postura) e simplifica a gama (controlável), enquanto outra aposta no premium.' },
      { p: '**Controlar a decisão não é controlar o resultado.** No exemplo do preço, as unidades sobem de 1 000 para 1 200 (+20%) e a receita de 20 000 € para 21 600 € (+8%). A margem depende dos custos.' },
    ],
    chave: ['incontroláveis – ambiente', 'postura – posicionamento', 'controláveis – instrumentos', 'preço 20 € → 18 €', 'controlar decisão ≠ resultado'],
  },

  // ---------- Aula 10 ----------
  {
    id: '10.1',
    aula: 10,
    pergunta: 'Descreva as etapas essenciais de um processo racional de decisão.',
    blocos: [
      { p: 'O modelo racional é **normativo**: descreve como decidiria um gestor com objetivos claros e informação completa. As etapas são:' },
      {
        bullets: [
          '**1. Definir o problema:** separar o sintoma do problema. «As vendas caíram 15%» ainda não é um diagnóstico: em que produtos, lojas, clientes, desde quando?',
          '**2. Definir objetivos e critérios**, com pesos e restrições. Ex.: rentabilidade 35%, risco 25%, crescimento 25%, rapidez 15%.',
          '**3. Identificar alternativas:** novas lojas, comércio eletrónico, modernização. Não mudar também é uma alternativa.',
          '**4. Avaliar as alternativas** com os mesmos critérios e dados: pontuação = Σ (peso × avaliação). Comércio eletrónico 7,5; modernização 7,05; novas lojas 6,5.',
          '**5. Escolher** a alternativa mais adequada aos critérios.',
          '**6. Implementar:** recursos, responsáveis e prazos.',
          '**7. Acompanhar e avaliar:** comparar os resultados com os objetivos e corrigir desvios.',
        ],
      },
      { p: 'Deve testar-se a robustez da escolha, por exemplo com outros pesos. A racionalidade está no **processo**, não só no resultado.' },
    ],
    chave: ['definir o problema', 'objetivos e critérios (pesos)', 'alternativas', 'avaliar e escolher', 'implementar e acompanhar'],
  },

  // ---------- Aula 11 ----------
  {
    id: '11.1',
    aula: 11,
    pergunta: 'Defina e explique o conceito de racionalidade limitada.',
    blocos: [
      { p: 'A **racionalidade limitada**, de **Herbert Simon**, diz que os gestores procuram ser racionais, mas **dentro de limites**. O modelo racional pressupõe que se conhecem e comparam todas as alternativas; Simon observou decisões reais, tomadas sob restrições de:' },
      {
        bullets: [
          '**Informação:** não conhecemos todas as alternativas nem as suas consequências.',
          '**Tempo:** não podemos analisar indefinidamente, e procurar tem custos.',
          '**Cognição:** a atenção e a capacidade de processamento são limitadas.',
        ],
      },
      { p: 'Por isso, em vez de **otimizar** (encontrar a melhor alternativa possível), os gestores **satisfazem** (satisficing): definem antecipadamente o que é aceitável e escolhem uma alternativa suficientemente boa. Ex.: para contratar um gestor, em vez de entrevistar 300 candidatos, escolhe-se o primeiro que cumpre os requisitos. Satisficing não é escolher ao acaso. Para decidir depressa usam-se **heurísticas**, que são úteis mas podem gerar enviesamentos.' },
    ],
    chave: ['Herbert Simon', 'informação, tempo, cognição', 'satisficing', 'solução satisfatória vs. ótima', 'heurísticas'],
  },
  {
    id: '11.2',
    aula: 11,
    pergunta: 'Indique que 4 viés cognitivos, dando um exemplo concreto de um deles.',
    blocos: [
      { p: 'Um **enviesamento cognitivo** é uma tendência sistemática de julgamento que afasta as decisões de um padrão adequado: errar repetidamente na mesma direção. Quatro exemplos:' },
      {
        bullets: [
          '**Ancoragem:** uma referência inicial influencia excessivamente as estimativas seguintes.',
          '**Confirmação:** valorizar a informação que confirma o que já acreditamos e desvalorizar a contrária.',
          '**Excesso de confiança:** a confiança nas nossas previsões é superior à sua precisão real.',
          '**Custos irrecuperáveis (sunk costs):** deixar que o dinheiro já gasto, que não se recupera, justifique novos investimentos.',
        ],
      },
      { h: 'Exemplo: ancoragem', p: 'Dizem à direção que «o projeto vai custar 1 milhão de euros». Quando chega uma proposta de 800 mil euros, parece barata, mesmo que o custo razoável seja muito inferior, porque o julgamento parte da âncora inicial. Para reduzir o efeito, devem fixar-se critérios antes de ver propostas e procurar evidência contrária.' },
    ],
    chave: ['tendência sistemática', 'ancoragem', 'confirmação', 'excesso de confiança', 'custos irrecuperáveis'],
  },

  // ---------- Aula 12 ----------
  {
    id: '12.1',
    aula: 12,
    pergunta: 'Diferencie correlação e causalidade.',
    blocos: [
      { p: 'Há **correlação** quando duas variáveis variam em conjunto (uma associação estatística). Há **causalidade** quando uma variável provoca a alteração da outra: se mudarmos X, Y muda. **Uma correlação não demonstra, por si só, uma relação causal**, porque pode haver:' },
      {
        bullets: [
          '**causa comum:** os afogamentos e o consumo de gelados sobem juntos por causa do calor;',
          '**causalidade inversa:** uma empresa de brinquedos investe mais em publicidade em novembro e dezembro porque já antecipa mais procura, e não é a publicidade que cria toda essa procura;',
          '**coincidência.**',
        ],
      },
      { p: 'Para o gestor isto é decisivo, porque decide para **alterar** resultados. Prever não é explicar: um modelo de telecomunicações conclui que quem contacta o apoio ao cliente tem mais probabilidade de cancelar, mas fechar o apoio não reduziria os cancelamentos. Para provar uma causa são precisos hipóteses, testes e dados sobre o efeito das ações.' },
    ],
    chave: ['variam em conjunto', 'relação de causa-efeito', 'causa comum', 'causalidade inversa', 'prever ≠ explicar'],
  },

  // ---------- Aula 13 ----------
  {
    id: '13.1',
    aula: 13,
    pergunta: 'Identifique e caracterize os quatro quadrantes da matriz de Ansoff.',
    blocos: [
      { p: 'A **matriz de Ansoff** cruza duas dimensões, **produtos** e **mercados** (atuais ou novos), e daí resultam quatro direções de crescimento:' },
      {
        bullets: [
          '**Penetração de mercado** (produto atual, mercado atual): ganhar quota, aumentar a frequência de compra, melhorar a retenção. Risco: concorrência e saturação. Ex.: a cadeia de 25 lojas reforça o marketing e a fidelização.',
          '**Desenvolvimento de mercado** (produto atual, mercado novo): nova geografia, segmento ou canal. Risco: adaptação local e regulação. Ex.: levar o conceito atual para Espanha.',
          '**Desenvolvimento de produto** (produto novo, mercado atual): inovação ou extensão da oferta. Risco: aceitação e canibalização. Ex.: uma linha premium para os clientes atuais, ou um serviço de reparação na Zara.',
          '**Diversificação** (produto novo, mercado novo): por desenvolvimento interno, aquisição ou parcerias. Risco: pouca experiência, novos concorrentes, maior incerteza. Ex.: uma empresa de vestuário que entra na hotelaria.',
        ],
      },
      { p: 'O risco tende a crescer com a distância ao negócio atual, mas também depende da execução e do contexto. A matriz indica a direção, não o modo de entrada (orgânico, aquisição ou parceria). E crescer não é necessariamente criar valor.' },
    ],
    chave: ['produtos × mercados', 'penetração de mercado', 'desenvolvimento de mercado', 'desenvolvimento de produto', 'diversificação', 'risco crescente'],
  },

  // ---------- Aula 14 ----------
  {
    id: '14.1',
    aula: 14,
    pergunta: 'Defina objetivo SMART e explique cada dimensão.',
    blocos: [
      { p: 'Um **objetivo SMART** é formulado de modo a tornar explícito o resultado pretendido, para poder orientar a ação e ser avaliado:' },
      {
        bullets: [
          '**S – Específico:** diz claramente o que se quer alcançar; «melhorar a satisfação» é vago.',
          '**M – Mensurável:** tem um indicador e um valor que permitem verificar se foi atingido (de 7,5 para 8,2).',
          '**A – Alcançável:** é desafiante mas realista com os recursos disponíveis.',
          '**R – Relevante:** está ligado à estratégia e aos objetivos da organização.',
          '**T – Temporalmente definido:** tem um prazo («até dezembro»).',
        ],
      },
      { p: 'Ex.: «vender mais» passa a «aumentar em 8% as vendas online até 31 de dezembro». Uma meta precisa ainda de uma referência inicial e de um responsável. Mas SMART ajuda a formular, não garante que o objetivo seja o certo: «reduzir a duração média das chamadas para menos de 2 minutos» é SMART e pode piorar o serviço.' },
    ],
    chave: ['Específico', 'Mensurável', 'Alcançável', 'Relevante', 'Temporal (prazo)'],
  },
  {
    id: '14.2',
    aula: 14,
    pergunta: 'Distinga os conceitos de dados, métricas e KPI.',
    blocos: [
      {
        bullets: [
          '**Dados:** registos, observações ou medições de acontecimentos, ainda sem contexto. Ex.: 4 200 visitas ao site.',
          '**Métrica:** medida calculada a partir dos dados que quantifica um aspeto do desempenho. Ex.: taxa de conversão de 2,4%.',
          '**KPI** (Key Performance Indicator): métrica **selecionada pela sua importância para um objetivo de gestão**, com definição, meta, responsável e fonte. Ex.: conversão face à meta estratégica.',
        ],
      },
      { p: 'Todo o KPI é uma métrica, mas nem todas as métricas são KPI: são o contexto e a finalidade que transformam a medição em informação útil. A mesma métrica pode ser central numa empresa e secundária noutra. Deve escolher-se um conjunto limitado de KPI relevantes, fiáveis e acionáveis.' },
      { p: 'O KPI deve refletir o objetivo, não substituí-lo. Pela **lei de Goodhart**, uma métrica transformada em objetivo pode perder qualidade como medida: premiar chamadas curtas num call center leva a desligar sem resolver os problemas.' },
    ],
    chave: ['dados brutos', 'métrica calculada', 'KPI ligado a objetivo', 'meta e responsável', 'Goodhart'],
  },
]
