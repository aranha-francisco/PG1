import type { Aula } from '../types'

export const aula04: Aula = {
  n: 4,
  bloco: 'origens',
  titulo: 'Das Máquinas às Pessoas e aos Sistemas',
  pergunta: 'Existe uma «melhor forma» de gerir?',
  fio: 'Máquina → Pessoa → Grupo → Organização → Sistema → Contexto',
  data: '1 out',
  resumo: [
    {
      p: 'A FastBox melhorou ou piorou? **Depende do que estamos a medir.** Ficaram de fora expectativas, relações, motivação, perceções, grupos e comportamentos. Uma organização não é apenas uma estrutura produtiva: é também um **sistema social**.',
    },
    {
      h: 'As pessoas não são máquinas',
      bullets: [
        'Uma máquina é previsível, repetível, não interpreta, não cria expectativas nem relações sociais.',
        'Uma pessoa interpreta, compara, aprende, cria expectativas, estabelece relações, coopera… ou resiste.',
      ],
    },
    {
      h: 'Hawthorne',
      bullets: [
        'Hawthorne Works (Western Electric, Chicago, décadas de 1920–30): como influenciam as condições de trabalho a produtividade? **Elton Mayo** e outros ficaram associados aos estudos.',
        'Resultado estranho: iluminação ↑ → produtividade ↑; iluminação ↓ → produtividade… ↑.',
        'O «efeito Hawthorne» **não significa simplesmente «ser observado aumenta a produtividade»**: houve várias experiências e várias interpretações.',
        'Legado: o comportamento no trabalho **não se explica apenas por condições físicas e incentivos económicos**.',
      ],
    },
    {
      h: 'O grupo e a organização informal',
      bullets: [
        'O trabalhador não trabalha isoladamente: colegas, supervisor, normas do grupo, reconhecimento, pertença, comunicação.',
        '**Organização formal** (organograma, regras, funções, hierarquia, procedimentos) ≠ **organização informal** (relações, influência, grupos, normas sociais, lideranças informais).',
        'Numa equipa de 9 que faz ≈ 40 pedidos/dia, um novo trabalhador faz 80: «Excelente!», «Calma…», «Estás a estragar isto.» Quem define o desempenho aceitável: o chefe ou o grupo?',
      ],
    },
    {
      h: 'Das Relações Humanas ao comportamento',
      bullets: [
        'Gestão clássica: como tornar o trabalho mais eficiente? Relações Humanas: como influenciam as relações sociais o comportamento? Abordagem comportamental: como compreender sistematicamente o comportamento humano? (Mayo, Maslow, McGregor, Herzberg, Simon.)',
        'Basta ter trabalhadores felizes? **Não**: satisfação ≠ produtividade; motivação ≠ desempenho automático. As Relações Humanas alargaram a visão, mas não eliminaram o problema da eficiência.',
      ],
    },
    {
      h: 'A organização como sistema aberto',
      bullets: [
        'Inputs (pessoas, capital, informação, tecnologia, materiais) → organização (pessoas, estrutura, processos, tecnologia, decisões) → outputs (produtos/serviços, resultados, informação, impactos), com **feedback**.',
        'Sistema **aberto**: troca continuamente recursos, informação e influência com clientes, fornecedores, concorrentes, Estado, economia, tecnologia e sociedade.',
        'Tudo está ligado: Compras escolhe um fornecedor 20% mais barato (sucesso!), mas qualidade ↓, defeitos ↑, devoluções ↑, satisfação ↓, clientes ↓. **Local optimum ≠ system optimum.** Um dashboard pode mostrar que uma área bateu todos os KPI e a empresa estar pior.',
      ],
    },
    {
      h: 'Teoria da contingência',
      bullets: [
        '**«It depends…»**: a forma adequada de gerir depende das características da situação (ambiente, dimensão, tecnologia, tarefa, estratégia, pessoas). «Depende» não significa «vale tudo».',
        "McDonald's (volume elevado, tarefas repetitivas, consistência) não se gere como uma startup de IA (incerteza, inovação, experimentação). E partes da mesma organização podem exigir formas diferentes (cozinha vs desenvolvimento de produtos; esterilização vs diagnóstico; logística vs design).",
        'Taylor estava errado? Não necessariamente: padronização, controlo e especialização funcionam em certos contextos. O problema é tratar uma solução contextual como universal. **Eficiência continua a importar; só não é suficiente.**',
      ],
    },
    {
      p: 'E os dados? Taylor: melhorar a tarefa; Relações Humanas: compreender pessoas e grupos; Sistemas: relações e feedback; Contingência: o que funciona, onde e em que condições. **Os dados não eliminam a necessidade de compreender o contexto.**',
    },
  ],
  conceitos: [
    { id: 'hawthorne', termo: 'Estudos de Hawthorne', def: 'Estudos na Western Electric (Chicago, anos 1920–30) sobre condições de trabalho e produtividade. Legado: o comportamento não se explica só por condições físicas e incentivos económicos.' },
    { id: 'efeito-hawthorne', termo: 'Efeito Hawthorne', def: 'Não significa simplesmente que ser observado aumenta a produtividade: os estudos tiveram várias experiências e interpretações.' },
    { id: 'org-formal', termo: 'Organização formal', def: 'Organograma, regras, funções, hierarquia, procedimentos.' },
    { id: 'org-informal', termo: 'Organização informal', def: 'Relações, influência, grupos, normas sociais, lideranças informais.' },
    { id: 'relacoes-humanas', termo: 'Relações Humanas', def: 'Abordagem que pergunta como as relações sociais influenciam o comportamento no trabalho.' },
    { id: 'comportamental', termo: 'Abordagem comportamental', def: 'Procura compreender sistematicamente o comportamento humano nas organizações (Mayo, Maslow, McGregor, Herzberg, Simon).' },
    { id: 'sistema-aberto', termo: 'Sistema aberto', def: 'A organização troca continuamente recursos, informação e influência com o ambiente: inputs → organização → outputs, com feedback.' },
    { id: 'otimo-local', termo: 'Ótimo local ≠ ótimo do sistema', def: 'Uma decisão pode melhorar o desempenho de uma unidade e piorar o da organização.' },
    { id: 'contingencia', termo: 'Teoria da contingência', def: '«It depends»: a forma adequada de gerir depende das características da situação e do contexto. Não significa «vale tudo».' },
  ],
  ideias: [
    'A industrialização clássica não explica, por si só, o comportamento das pessoas.',
    'Grupos e relações informais influenciam o comportamento nas organizações.',
    'Uma organização é um sistema aberto composto por elementos interdependentes.',
    'Otimizar uma parte não significa necessariamente otimizar o sistema.',
    'Não existe uma forma universalmente superior de gerir: a solução depende do contexto.',
  ],
  cuidados: [
    { a: 'Efeito Hawthorne', b: '«Ser observado aumenta a produtividade»', explicacao: 'Os slides avisam que não é tão simples: houve várias experiências e os resultados foram interpretados de formas diferentes. O legado é que o comportamento não depende só de condições físicas e incentivos.' },
    { a: 'Satisfação', b: 'Produtividade', explicacao: 'Trabalhadores felizes não são automaticamente mais produtivos; motivação também não é desempenho automático.' },
    { a: 'Organização formal', b: 'Organização real', explicacao: 'O organograma e as regras não explicam tudo: grupos, normas sociais e lideranças informais também determinam o comportamento.' },
    { a: 'Ótimo local', b: 'Ótimo do sistema', explicacao: 'Um fornecedor 20% mais barato pode ser um sucesso para Compras e um prejuízo para a empresa (defeitos, devoluções, clientes perdidos).' },
    { a: '«Depende»', b: '«Vale tudo»', explicacao: 'A contingência diz que a forma de gerir depende do contexto (ambiente, dimensão, tecnologia, tarefa, estratégia, pessoas), não que qualquer forma serve.' },
  ],
  caso: {
    nome: 'Uma solução para todos?',
    contexto: "Quatro organizações: A — McDonald's (operação repetitiva, grande volume, consistência); B — startup de IA (20 engenheiros, produto em desenvolvimento, incerteza); C — hospital (especialização, risco elevado, protocolos + julgamento); D — Zara (procura rápida, velocidade, integração, informação).",
    pergunta: 'Mais padronização? Mais autonomia? Mais centralização? Que mecanismos de coordenação? Justifiquem com base no contexto.',
    cadeia: [
      { etapa: 'Contexto', texto: "Identificar volume, incerteza, risco e ritmo de mudança de cada organização." },
      { etapa: 'Forma de gerir', texto: "McDonald's: mais padronização e controlo. Startup de IA: mais autonomia e experimentação. Hospital: protocolos e julgamento profissional. Zara: velocidade e integração da informação." },
      { etapa: 'Dentro da organização', texto: "Partes diferentes pedem formas diferentes: cozinha vs desenvolvimento de novos produtos (McDonald's), esterilização vs diagnóstico clínico (hospital), logística vs design (Zara)." },
      { etapa: 'Conclusão', texto: 'Não há uma forma universalmente superior de gerir: a solução depende do contexto, e eficiência continua a importar, só não é suficiente.' },
    ],
    nota: 'As respostas por organização são um exemplo de raciocínio a partir das características que os slides indicam.',
  },
  flashcards: [
    { id: 'a4f1', tipo: 'autor', frente: 'Elton Mayo / Hawthorne', verso: 'Estudos na Hawthorne Works (Western Electric, Chicago, anos 1920–30). Iluminação ↑ ou ↓ e a produtividade subiu nos dois casos. Legado: o comportamento não se explica só por condições físicas e incentivos económicos.' },
    { id: 'a4f2', tipo: 'termo', frente: 'Organização informal', verso: 'Relações, influência, grupos, normas sociais e lideranças informais que também determinam o comportamento, ao lado da organização formal.' },
    { id: 'a4f3', tipo: 'termo', frente: 'Sistema aberto', verso: 'A organização troca continuamente recursos, informação e influência com o ambiente: inputs → organização → outputs, com feedback.' },
    { id: 'a4f4', tipo: 'termo', frente: 'Teoria da contingência', verso: '«It depends»: a forma adequada de gerir depende da situação (ambiente, dimensão, tecnologia, tarefa, estratégia, pessoas). Não significa «vale tudo».' },
    { id: 'a4f5', tipo: 'explica', frente: 'Explica numa frase o legado de Hawthorne para a gestão.', verso: 'O comportamento no trabalho não pode ser explicado apenas por condições físicas e incentivos económicos: grupos, reconhecimento e relações também contam.' },
    { id: 'a4f6', tipo: 'exemplo', frente: 'Dá um exemplo de ótimo local que piora o sistema.', verso: 'Compras escolhe um fornecedor 20% mais barato: qualidade ↓, defeitos e devoluções ↑, satisfação e clientes ↓. Compras «teve sucesso», a empresa ficou pior.' },
    { id: 'a4f7', tipo: 'exemplo', frente: 'Dá um exemplo de normas do grupo a definir o desempenho.', verso: 'Equipa de 9 faz ≈ 40 pedidos/dia; um novo trabalhador faz 80 e ouve «Calma…» e «Estás a estragar isto». Quem define o aceitável: o chefe ou o grupo?' },
    { id: 'a4f8', tipo: 'explica', frente: 'Basta ter trabalhadores felizes?', verso: 'Não: satisfação ≠ produtividade e motivação ≠ desempenho automático. As Relações Humanas alargaram a visão, mas não eliminaram o problema da eficiência.' },
    { id: 'a4f9', tipo: 'explica', frente: 'Taylor estava errado?', verso: 'Não necessariamente: padronização, controlo e especialização podem ser muito eficazes em certos contextos. O erro é tratar uma solução contextual como universal.' },
    { id: 'a4f10', tipo: 'exemplo', frente: "Dá um exemplo de duas organizações que não se devem gerir da mesma forma.", verso: "McDonald's (volume elevado, tarefas repetitivas, consistência, eficiência) vs startup de IA (incerteza elevada, inovação, conhecimento especializado, experimentação, mudança rápida)." },
    { id: 'a4f11', tipo: 'explica', frente: 'Gestão clássica, Relações Humanas e abordagem comportamental: que pergunta faz cada uma?', verso: 'Clássica: como tornar o trabalho mais eficiente? Relações Humanas: como influenciam as relações sociais o comportamento? Comportamental: como compreender sistematicamente o comportamento humano?' },
    { id: 'a4f12', tipo: 'explica', frente: 'Que caminho fez a gestão, da Aula 3 à Aula 4?', verso: 'Tarefa (Taylor) → processo (Ford) → gestão (Fayol) → estrutura (Weber) → pessoas e grupos (Relações Humanas) → organização (sistemas) → contexto (contingência).' },
  ],
  quiz: [
    {
      id: 'a4q1', tipo: 'conceito',
      pergunta: 'Nos estudos de Hawthorne, o que aconteceu quando a iluminação foi reduzida?',
      opcoes: [
        { t: 'A produtividade caiu, como esperado', porque: 'Errado: foi esse o «resultado estranho», a produtividade não caiu.' },
        { t: 'A produtividade também subiu', porque: 'Certo: iluminação ↓, produtividade… ↑.' },
        { t: 'Os trabalhadores fizeram greve', porque: 'Errado: não é o que os slides relatam.' },
        { t: 'Não houve qualquer alteração', porque: 'Errado: a produtividade subiu.' },
      ],
      certa: 1,
    },
    {
      id: 'a4q2', tipo: 'conceito',
      pergunta: 'Qual é a leitura correta do «efeito Hawthorne» segundo os slides?',
      opcoes: [
        { t: 'Ser observado aumenta sempre a produtividade', porque: 'Errado: os slides dizem explicitamente que não significa simplesmente isto.' },
        { t: 'A luz é o principal fator de produtividade', porque: 'Errado: era «mesmo a luz?» Não tão simples.' },
        { t: 'O comportamento no trabalho não se explica apenas por condições físicas e incentivos económicos', porque: 'Certo: é o legado importante para a gestão.' },
        { t: 'Os incentivos económicos são irrelevantes', porque: 'Errado: não são irrelevantes, só não explicam tudo.' },
      ],
      certa: 2,
    },
    {
      id: 'a4q3', tipo: 'conceito',
      pergunta: 'Qual destes elementos pertence à organização INFORMAL?',
      opcoes: [
        { t: 'Organograma', porque: 'Errado: é organização formal.' },
        { t: 'Procedimentos', porque: 'Errado: é organização formal.' },
        { t: 'Lideranças informais e normas sociais', porque: 'Certo: relações, influência, grupos, normas sociais, lideranças informais.' },
        { t: 'Hierarquia', porque: 'Errado: é organização formal.' },
      ],
      certa: 2,
    },
    {
      id: 'a4q4', tipo: 'cenario',
      pergunta: 'Numa equipa que faz ≈ 40 pedidos/dia, um novo trabalhador faz 80 e os colegas dizem «Estás a estragar isto». Que conceito ilustra?',
      opcoes: [
        { t: 'Normas do grupo a definir o desempenho aceitável', porque: 'Certo: quem define o aceitável pode ser o grupo, não o chefe.' },
        { t: 'Scientific management', porque: 'Errado: aqui é o grupo, não um standard da gestão, que limita o ritmo.' },
        { t: 'Custos de transação', porque: 'Errado: não há transação de mercado.' },
        { t: 'Burocracia', porque: 'Errado: não são regras formais, são normas sociais.' },
      ],
      certa: 0,
    },
    {
      id: 'a4q5', tipo: 'conceito',
      pergunta: '«Basta ter trabalhadores felizes?» A resposta dos slides é…',
      opcoes: [
        { t: 'Sim, a satisfação garante a produtividade', porque: 'Errado: satisfação ≠ produtividade.' },
        { t: 'Não: satisfação ≠ produtividade e motivação ≠ desempenho automático', porque: 'Certo: as Relações Humanas não eliminaram o problema da eficiência.' },
        { t: 'Sim, desde que haja incentivos económicos', porque: 'Errado: não é a conclusão dos slides.' },
        { t: 'Não, porque a felicidade reduz a produtividade', porque: 'Errado: os slides não dizem isso.' },
      ],
      certa: 1,
    },
    {
      id: 'a4q6', tipo: 'conceito',
      pergunta: 'O que significa dizer que a organização é um sistema ABERTO?',
      opcoes: [
        { t: 'Que qualquer pessoa pode entrar na empresa', porque: 'Errado: não tem a ver com acesso físico.' },
        { t: 'Que troca continuamente recursos, informação e influência com o ambiente', porque: 'Certo: clientes, fornecedores, concorrentes, Estado, economia, tecnologia, sociedade.' },
        { t: 'Que não tem estrutura formal', porque: 'Errado: um sistema aberto tem estrutura.' },
        { t: 'Que partilha todos os dados publicamente', porque: 'Errado: não é esse o sentido.' },
      ],
      certa: 1,
    },
    {
      id: 'a4q7', tipo: 'cenario',
      pergunta: 'Compras escolhe um fornecedor 20% mais barato. Depois, defeitos e devoluções sobem e perdem-se clientes. O que ilustra?',
      opcoes: [
        { t: 'Ótimo local ≠ ótimo do sistema', porque: 'Certo: otimizar a parte não significa otimizar o todo.' },
        { t: 'Eficácia sem eficiência', porque: 'Errado: o ponto é que a melhoria numa unidade piorou a organização.' },
        { t: 'Teoria da contingência', porque: 'Errado: o exemplo dos slides está no tema "Tudo está ligado".' },
        { t: 'Efeito Hawthorne', porque: 'Errado: não tem a ver com observação dos trabalhadores.' },
      ],
      certa: 0,
    },
    {
      id: 'a4q8', tipo: 'conceito',
      pergunta: 'Na teoria da contingência, «it depends» significa que…',
      opcoes: [
        { t: 'Vale tudo: qualquer forma de gerir serve', porque: 'Errado: os slides dizem explicitamente que «depende» não significa «vale tudo».' },
        { t: 'A forma adequada de gerir depende das características da situação e do contexto', porque: 'Certo: ambiente, dimensão, tecnologia, tarefa, estratégia, pessoas.' },
        { t: 'Existe uma melhor forma de gerir, mas depende de quem a aplica', porque: 'Errado: não existe uma forma universalmente superior.' },
        { t: 'A gestão depende só da intuição do gestor', porque: 'Errado: depende do contexto, não da intuição.' },
      ],
      certa: 1,
    },
    {
      id: 'a4q9', tipo: 'cenario',
      pergunta: 'Uma startup de IA com 20 engenheiros, produto em desenvolvimento e incerteza elevada deve, à partida, privilegiar…',
      opcoes: [
        { t: 'Padronização rígida das tarefas', porque: 'Errado: funciona em operações repetitivas como o McDonald\'s, não em contextos de grande incerteza.' },
        { t: 'Autonomia e experimentação', porque: 'Certo: incerteza, inovação, conhecimento especializado e mudança rápida pedem mais autonomia.' },
        { t: 'Estudos de tempos e movimentos', porque: 'Errado: servem tarefas repetitivas e mensuráveis.' },
        { t: 'Linha de montagem', porque: 'Errado: é produção em massa de produto padronizado.' },
      ],
      certa: 1,
    },
    {
      id: 'a4q10', tipo: 'conceito',
      pergunta: '«Taylor estava errado?» A resposta dos slides é…',
      opcoes: [
        { t: 'Sim, a padronização nunca funciona', porque: 'Errado: pode ser extremamente eficaz em certos contextos.' },
        { t: 'Não necessariamente: o problema é tratar uma solução contextual como universal', porque: 'Certo: eficiência continua a importar, só não é suficiente.' },
        { t: 'Não, Taylor tinha razão em todos os contextos', porque: 'Errado: não existe forma universalmente superior.' },
        { t: 'Sim, porque ignorou a tecnologia', porque: 'Errado: não é o argumento dos slides.' },
      ],
      certa: 1,
    },
    {
      id: 'a4q11', tipo: 'conceito',
      pergunta: 'Na visão de sistema, qual destes é um OUTPUT da organização?',
      opcoes: [
        { t: 'Capital', porque: 'Errado: é um input.' },
        { t: 'Materiais', porque: 'Errado: é um input.' },
        { t: 'Produtos/serviços e impactos', porque: 'Certo: outputs são produtos/serviços, resultados, informação e impactos.' },
        { t: 'Tecnologia comprada', porque: 'Errado: é um input.' },
      ],
      certa: 2,
    },
    {
      id: 'a4q12', tipo: 'conceito',
      pergunta: 'Que pergunta orienta a abordagem das Relações Humanas?',
      opcoes: [
        { t: 'Como tornar o trabalho mais eficiente?', porque: 'Errado: é a pergunta da gestão clássica.' },
        { t: 'Como influenciam as relações sociais o comportamento?', porque: 'Certo.' },
        { t: 'Como compreender sistematicamente o comportamento humano?', porque: 'Errado: é a abordagem comportamental.' },
        { t: 'Onde termina a empresa?', porque: 'Errado: é a pergunta da Aula 2 (make or buy).' },
      ],
      certa: 1,
    },
    {
      id: 'a4q13', tipo: 'cenario',
      pergunta: 'Um dashboard mostra que uma área bateu todos os seus KPI, mas a empresa está pior. Isto mostra que…',
      opcoes: [
        { t: 'Os KPI estavam mal calculados', porque: 'Errado: podem estar bem calculados; o problema é a interdependência.' },
        { t: 'Otimizar uma parte não significa otimizar o sistema', porque: 'Certo: é a 4.ª ideia da aula.' },
        { t: 'A área deve ser premiada e o resto ignorado', porque: 'Errado: o resultado global piorou.' },
        { t: 'A organização é um sistema fechado', porque: 'Errado: é aberto e interdependente.' },
      ],
      certa: 1,
    },
    {
      id: 'a4q14', tipo: 'cenario',
      pergunta: 'Num hospital, a esterilização e o diagnóstico clínico devem ser geridos da mesma forma?',
      opcoes: [
        { t: 'Sim, uma organização deve ter uma só forma de gerir', porque: 'Errado: partes diferentes podem exigir formas diferentes.' },
        { t: 'Não: a esterilização pede protocolos rigorosos; o diagnóstico pede também julgamento profissional', porque: 'Certo: «partes diferentes da mesma organização podem exigir formas diferentes de gerir».' },
        { t: 'Sim, ambos devem seguir a linha de montagem', porque: 'Errado: o diagnóstico não é uma tarefa repetitiva padronizável.' },
        { t: 'Não, o diagnóstico deve ser totalmente padronizado', porque: 'Errado: o hospital combina protocolos e julgamento.' },
      ],
      certa: 1,
    },
    {
      id: 'a4q15', tipo: 'conceito',
      pergunta: 'Que ordem resume como a gestão foi alargando aquilo que considera relevante?',
      opcoes: [
        { t: 'Contexto → organização → pessoas → tarefa', porque: 'Errado: é a ordem inversa.' },
        { t: 'Tarefa → processo → gestão → estrutura → pessoas e grupos → organização → contexto', porque: 'Certo: Taylor, Ford, Fayol, Weber, Relações Humanas, sistemas, contingência.' },
        { t: 'Pessoas → tarefa → estrutura → contexto', porque: 'Errado: as pessoas só entram com as Relações Humanas, depois dos clássicos.' },
        { t: 'Processo → tarefa → contexto → estrutura', porque: 'Errado: não segue o slide "De onde viemos?".' },
      ],
      certa: 1,
    },
    {
      id: 'a4q16', tipo: 'conceito',
      pergunta: 'Segundo os slides, os dados…',
      opcoes: [
        { t: 'Eliminam a necessidade de compreender o contexto', porque: 'Errado: é exatamente o contrário.' },
        { t: 'Não eliminam a necessidade de compreender o contexto', porque: 'Certo: cada abordagem usa dados para coisas diferentes, mas o contexto continua a importar.' },
        { t: 'Só servem para medir tarefas, como em Taylor', porque: 'Errado: também servem para compreender pessoas, relações e o que funciona em cada contexto.' },
        { t: 'São irrelevantes para a teoria da contingência', porque: 'Errado: ajudam a perceber o que funciona, onde e em que condições.' },
      ],
      certa: 1,
    },
  ],
}
