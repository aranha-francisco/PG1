import type { Pergunta, QuizTipo } from './types'

// As 70 questões de escolha múltipla do documento "Resumo Temas por Aula" do professor.
// Texto e ordem das opções iguais ao documento (A–D); `certa` vem da chave de respostas.
// As explicações são nossas.

export interface QuestaoProf extends Pergunta {
  aula: number
}

const L = 'ABCD'
function q(id: string, tipo: QuizTipo, pergunta: string, opcoes: [string, string][], certa: 'A' | 'B' | 'C' | 'D'): QuestaoProf {
  return { id: 'p' + id, aula: Number(id.split('.')[0]), tipo, pergunta, opcoes: opcoes.map(([t, porque]) => ({ t, porque })), certa: L.indexOf(certa) }
}

export const PROFESSOR: QuestaoProf[] = [
  // ---------- Aula 1 ----------
  q('1.1', 'cenario', 'Uma empresa cumpre a meta de vendas, mas utiliza mais recursos do que o previsto. Isto indica:', [
    ['Produtividade necessariamente máxima', 'Errado: usar mais recursos do que o previsto é o contrário de produtividade máxima.'],
    ['Eficácia sem plena eficiência', 'Certo: cumpriu o objetivo (eficácia), mas gastou mais recursos do que devia (eficiência incompleta).'],
    ['Ausência de eficácia e eficiência', 'Errado: a meta foi cumprida, por isso houve eficácia.'],
    ['Eficiência sem eficácia', 'Errado: é ao contrário. Atingiu o objetivo e foi no uso de recursos que falhou.'],
  ], 'B'),
  q('1.2', 'conceito', 'A eficiência refere-se sobretudo:', [
    ['Ao cumprimento de qualquer objetivo, independentemente dos custos', 'Errado: isso aproxima-se da eficácia; a eficiência olha precisamente para os custos.'],
    ['À relação entre recursos utilizados e resultados obtidos', 'Certo: eficiência é utilizar bem os recursos, «fazer bem as coisas».'],
    ['À dimensão da organização', 'Errado: uma organização grande pode ser pouco eficiente.'],
    ['À satisfação exclusiva dos acionistas', 'Errado: não é a definição de eficiência.'],
  ], 'B'),
  q('1.3', 'conceito', 'Qual é uma função do ciclo de gestão POLC?', [
    ['Publicidade', 'Errado: é uma atividade de marketing, não uma função do POLC.'],
    ['Contratação externa', 'Errado: é uma decisão possível, não uma das quatro funções.'],
    ['Faturação', 'Errado: é uma tarefa administrativa.'],
    ['Planeamento', 'Certo: POLC = planear, organizar, liderar, controlar.'],
  ], 'D'),
  q('1.4', 'conceito', 'Uma organização é eficaz quando:', [
    ['Reduz sempre o número de trabalhadores', 'Errado: reduzir pessoas pode até impedir de atingir os objetivos.'],
    ['Atinge os objetivos definidos', 'Certo: eficácia é atingir os objetivos, «fazer as coisas certas».'],
    ['Utiliza sempre o menor orçamento', 'Errado: isso tem a ver com eficiência, e nem sempre é o melhor.'],
    ['Elimina todos os riscos', 'Errado: é impossível eliminar todos os riscos, e não é a definição de eficácia.'],
  ], 'B'),
  q('1.5', 'conceito', 'A gestão é necessária porque:', [
    ['As empresas não enfrentam restrições', 'Errado: decidem com recursos limitados, informação incompleta e incerteza.'],
    ['Os objetivos individuais coincidem sempre', 'Errado: se coincidissem sempre, haveria menos necessidade de coordenar.'],
    ['Todas as decisões podem ser automatizadas', 'Errado: os dados melhoram as decisões, mas não decidem por nós.'],
    ['É preciso coordenar recursos e pessoas para alcançar objetivos', 'Certo: é a própria definição de gestão.'],
  ], 'D'),

  // ---------- Aula 2 ----------
  q('2.1', 'conceito', 'Na perspetiva de Coase, a empresa pode internalizar atividades quando:', [
    ['A concorrência é proibida', 'Errado: não tem a ver com proibir a concorrência.'],
    ['A especialização deixa de existir', 'Errado: a especialização continua a existir dentro da empresa.'],
    ['Os custos de transação são sempre nulos', 'Errado: se fossem nulos, usar o mercado seria sempre preferível.'],
    ['A coordenação interna é mais vantajosa do que transacionar no mercado', 'Certo: internaliza-se quando os custos de organização são inferiores aos custos de transação.'],
  ], 'D'),
  q('2.2', 'conceito', 'Qual é um exemplo de custo de transação?', [
    ['Pagar salários da equipa de produção', 'Errado: é um custo de produção/organização interna.'],
    ['Comprar matéria-prima em si', 'Errado: é o preço do bem; os custos de transação são os que existem para além do preço.'],
    ['Negociar e monitorizar um contrato com fornecedor', 'Certo: procurar, comparar, negociar, contratar, monitorizar e resolver problemas são custos de transação.'],
    ['Depreciar equipamento fabril', 'Errado: é um custo de produção interno.'],
  ], 'C'),
  q('2.3', 'conceito', 'Uma razão para recorrer a outsourcing é:', [
    ['Eliminar qualquer dependência externa', 'Errado: o outsourcing cria dependência de um fornecedor.'],
    ['Tornar todos os processos estratégicos', 'Errado: costuma subcontratar-se o que não é central.'],
    ['Garantir que não há custos de coordenação', 'Errado: usar o mercado também tem custos (de transação).'],
    ['Aceder a capacidades especializadas de um fornecedor', 'Certo: o fornecedor pode ter competências, escala ou qualidade que a empresa não tem.'],
  ], 'D'),
  q('2.4', 'conceito', 'A decisão make-or-buy deve comparar:', [
    ['Apenas a preferência do diretor', 'Errado: não basta escolher, é preciso justificar com critérios.'],
    ['Custos, capacidades, riscos e coordenação interna e externa', 'Certo: custo, competências internas, risco, controlo, custos de transação e de organização…'],
    ['Apenas o preço inicial do fornecedor', 'Errado: há custos para além do preço (negociar, monitorizar, dependência).'],
    ['Apenas o número de trabalhadores', 'Errado: é só um aspeto, e não o decisivo.'],
  ], 'B'),
  q('2.5', 'cenario', 'Quanto maior a dependência de um fornecedor crítico:', [
    ['Menor é sempre a importância da qualidade', 'Errado: um fornecedor crítico torna a qualidade mais importante.'],
    ['Menor é sempre a necessidade de contratos', 'Errado: aumenta a necessidade de contratos e monitorização.'],
    ['Mais irrelevante se torna a coordenação', 'Errado: a coordenação torna-se mais importante.'],
    ['Maior pode ser o risco de oportunismo e interrupção', 'Certo: o fornecedor pode aproveitar-se da dependência ou falhar, e não há alternativa fácil.'],
  ], 'D'),

  // ---------- Aula 3 ----------
  q('3.1', 'conceito', 'Taylor é associado principalmente:', [
    ['À organização científica do trabalho', 'Certo: scientific management, encontrar a forma mais eficiente de executar a tarefa.'],
    ['À teoria da autodeterminação', 'Errado: não é uma teoria da matéria nem de Taylor.'],
    ['À análise PESTEL', 'Errado: a PESTEL é da Aula 7 e analisa o macroambiente.'],
    ['À matriz de Ansoff', 'Errado: a matriz de Ansoff é sobre direções de crescimento (Aula 13).'],
  ], 'A'),
  q('3.2', 'conceito', 'A produção em linha de montagem de Ford favorece:', [
    ['Eliminação da divisão do trabalho', 'Errado: a linha de montagem leva a divisão do trabalho ao extremo.'],
    ['Padronização e produção em escala', 'Certo: padronização + especialização + fluxo contínuo + escala = produção em massa.'],
    ['Ausência de coordenação', 'Errado: o fluxo contínuo exige muita coordenação.'],
    ['Personalização ilimitada de cada unidade', 'Errado: o produto é padronizado.'],
  ], 'B'),
  q('3.3', 'conceito', 'Fayol destacou-se por:', [
    ['Criar a teoria da expectativa', 'Errado: não é de Fayol.'],
    ['Propor princípios gerais de administração', 'Certo: funções da gestão (origem do POLC) e 14 princípios.'],
    ['Desenvolver as cinco forças competitivas', 'Errado: as cinco forças são de Porter.'],
    ['Defender a inexistência de hierarquia', 'Errado: Fayol defende cadeia escalar e unidade de comando.'],
  ], 'B'),
  q('3.4', 'conceito', 'A burocracia de Weber valoriza:', [
    ['Ausência de documentação', 'Errado: a burocracia assenta em regras formais e registos.'],
    ['Decisões baseadas exclusivamente em relações pessoais', 'Errado: é precisamente o favoritismo que a burocracia veio combater.'],
    ['Regras formais, competências e autoridade legal-racional', 'Certo: a autoridade pertence ao cargo, definido por regras, não à pessoa.'],
    ['Improvisação como princípio universal', 'Errado: a burocracia procura previsibilidade e consistência.'],
  ], 'C'),
  q('3.5', 'conceito', 'Uma limitação da especialização excessiva é:', [
    ['Impossibilidade de aumentar a produtividade', 'Errado: a especialização aumenta a produtividade.'],
    ['Ausência de aprendizagem', 'Errado: a repetição até gera aprendizagem.'],
    ['Monotonia e menor flexibilidade dos trabalhadores', 'Certo: repetição ↑, autonomia ↓, monotonia ↑; cada pessoa só sabe fazer uma parte.'],
    ['Eliminação de rotinas', 'Errado: a especialização cria rotinas.'],
  ], 'C'),

  // ---------- Aula 4 ----------
  q('4.1', 'conceito', 'As experiências de Hawthorne ajudaram a destacar:', [
    ['A inutilidade da comunicação', 'Errado: a comunicação é um dos fatores sociais destacados.'],
    ['A influência de fatores sociais e relações humanas no trabalho', 'Certo: o comportamento não se explica só por condições físicas e incentivos económicos.'],
    ['A superioridade universal da remuneração variável', 'Errado: Hawthorne mostrou que os incentivos económicos não explicam tudo.'],
    ['A eliminação da estrutura formal', 'Errado: a estrutura formal continua; junta-se-lhe a informal.'],
  ], 'B'),
  q('4.2', 'conceito', 'Considerar a empresa um sistema aberto implica:', [
    ['Ignorar fornecedores e clientes', 'Errado: são parte do ambiente com que a empresa interage.'],
    ['Tratar departamentos como independentes', 'Errado: num sistema, as partes são interdependentes.'],
    ['Reconhecer trocas e interdependências com o ambiente', 'Certo: a organização troca recursos, informação e influência com o ambiente.'],
    ['Eliminar a necessidade de objetivos', 'Errado: o sistema continua a ter objetivos.'],
  ], 'C'),
  q('4.3', 'conceito', 'A abordagem contingencial sustenta que:', [
    ['A solução de gestão adequada depende do contexto', 'Certo: «it depends» (ambiente, dimensão, tecnologia, tarefa, estratégia, pessoas).'],
    ['A cultura é irrelevante', 'Errado: o contexto, incluindo as pessoas, importa.'],
    ['A tecnologia não influencia a organização', 'Errado: a tecnologia é um dos fatores de contingência.'],
    ['Existe uma única estrutura ótima para todas as empresas', 'Errado: é exatamente o que a contingência nega.'],
  ], 'A'),
  q('4.4', 'conceito', 'Uma rede informal numa organização é:', [
    ['Uma unidade jurídica autónoma', 'Errado: não tem existência jurídica.'],
    ['Um conjunto de relações que pode não coincidir com o organigrama', 'Certo: relações, influência, grupos e lideranças informais (organização informal).'],
    ['Um procedimento obrigatório escrito', 'Errado: isso é organização formal.'],
    ['Uma estratégia de preços', 'Errado: não tem relação.'],
  ], 'B'),
  q('4.5', 'cenario', 'Se vendas e logística atingem KPI próprios, mas os clientes recebem tarde, isso ilustra:', [
    ['Interdependência e possível desalinhamento entre áreas', 'Certo: ótimo local ≠ ótimo do sistema; cada área bate os seus KPI e o todo falha.'],
    ['Impossibilidade de medir resultados', 'Errado: os resultados foram medidos; o problema é o que se mediu.'],
    ['Ausência de necessidade de coordenação', 'Errado: mostra precisamente que é preciso coordenar.'],
    ['Prova de eficácia global', 'Errado: os clientes recebem tarde, logo a organização não é eficaz.'],
  ], 'A'),

  // ---------- Aula 5 ----------
  q('5.1', 'conceito', 'Em VUCA, a letra V significa:', [
    ['Visibilidade', 'Errado: V é Volatility (volatilidade).'],
    ['Valor', 'Errado: V é Volatility (volatilidade).'],
    ['Volatilidade', 'Certo: mudança rápida.'],
    ['Velocidade operacional', 'Errado: parece próximo, mas V é volatilidade (mudança rápida do ambiente).'],
  ], 'C'),
  q('5.2', 'conceito', 'A incerteza caracteriza situações em que:', [
    ['Os processos são totalmente repetitivos', 'Errado: processos repetitivos são previsíveis.'],
    ['Não existem mudanças', 'Errado: sem mudanças não há incerteza.'],
    ['Todos os efeitos são conhecidos', 'Errado: é o oposto da incerteza.'],
    ['É difícil antecipar acontecimentos e resultados', 'Certo: incerteza = dificuldade em prever.'],
  ], 'D'),
  q('5.3', 'conceito', 'Complexidade organizacional refere-se sobretudo:', [
    ['À ausência de informação digital', 'Errado: não tem a ver com digital.'],
    ['À multiplicidade de fatores e interdependências', 'Certo: múltiplas variáveis interdependentes (ex.: fornecedores, câmbios, energia e regulação em 12 países).'],
    ['Apenas à dimensão do orçamento', 'Errado: o orçamento sozinho não cria complexidade.'],
    ['Apenas à existência de concorrentes', 'Errado: a concorrência é só um dos fatores.'],
  ], 'B'),
  q('5.4', 'conceito', 'A gestão intercultural exige:', [
    ['Atenção a diferenças de comunicação e práticas de trabalho', 'Certo: a cultura influencia comunicação, autoridade, decisão, feedback, tempo, conflito e risco.'],
    ['Aplicar estereótipos sem questionar', 'Errado: diferenças culturais são tendências, não etiquetas individuais.'],
    ['Impor sempre as práticas do país de origem', 'Errado: é preciso comunicar, clarificar, coordenar e integrar.'],
    ['Eliminar equipas internacionais', 'Errado: a diversidade traz informação e perspetivas; gere-se, não se elimina.'],
  ], 'A'),
  q('5.5', 'conceito', 'A transformação digital:', [
    ['Dispensa competências humanas', 'Errado: algoritmos recomendam, mas o humano continua a decidir e a interpretar.'],
    ['Resolve automaticamente todos os conflitos', 'Errado: não resolve conflitos por si.'],
    ['Elimina toda a incerteza', 'Errado: mais dados não significam necessariamente menos incerteza.'],
    ['Pode criar oportunidades e novos riscos de gestão', 'Certo: a tecnologia pode melhorar processos e mudar modelos de negócio, com novos riscos.'],
  ], 'D'),

  // ---------- Aula 6 ----------
  q('6.1', 'conceito', 'No modelo POLC, controlar significa:', [
    ['Acompanhar resultados e corrigir desvios', 'Certo: objetivo → resultado → comparação → ação.'],
    ['Substituir todos os colaboradores', 'Errado: não tem a ver com substituir pessoas.'],
    ['Delegar sem acompanhar', 'Errado: controlar é precisamente acompanhar.'],
    ['Definir apenas a missão da empresa', 'Errado: definir onde queremos chegar é planear.'],
  ], 'A'),
  q('6.2', 'cenario', 'Um gestor que representa a empresa numa conferência exerce um papel:', [
    ['Informacional de porta-voz', 'Certo: spokesperson, comunica em nome da organização. (Pode ter também algo de figurehead, mas a opção certa aqui é esta.)'],
    ['Exclusivamente técnico', 'Errado: não é um papel de Mintzberg.'],
    ['De auditor externo', 'Errado: o gestor não está a auditar.'],
    ['De consumidor', 'Errado: não faz sentido no modelo.'],
  ], 'A'),
  q('6.3', 'cenario', 'Negociar com um fornecedor corresponde, em Mintzberg, a um papel:', [
    ['De produção', 'Errado: não é um dos três grupos de papéis.'],
    ['Decisional', 'Certo: negotiator é um papel decisional.'],
    ['Exclusivamente operacional', 'Errado: não é uma categoria de Mintzberg.'],
    ['Exclusivamente interpessoal', 'Errado: interpessoais são figurehead, leader e liaison.'],
  ], 'B'),
  q('6.4', 'conceito', 'O planeamento distingue-se da organização porque:', [
    ['Define objetivos e caminhos, enquanto a organização distribui recursos e responsabilidades', 'Certo: planear = onde queremos chegar e como; organizar = quem faz o quê, com que recursos.'],
    ['Dispensa decisões', 'Errado: planear é preparar escolhas.'],
    ['É sempre posterior ao controlo', 'Errado: as funções não são uma sequência rígida, e o planeamento não vem «depois» do controlo.'],
    ['É sinónimo de organigrama', 'Errado: o organigrama tem a ver com organizar.'],
  ], 'A'),
  q('6.5', 'conceito', 'Segundo Mintzberg, o trabalho do gestor:', [
    ['Resume-se a controlar indicadores', 'Errado: há 10 papéis, não só controlo.'],
    ['É sempre linear e previsível', 'Errado: é fragmentado, variado e interrompido.'],
    ['Inclui papéis interpessoais, informacionais e decisionais', 'Certo: os três grupos dos 10 papéis.'],
    ['Exclui negociação e comunicação', 'Errado: negotiator e spokesperson são papéis de Mintzberg.'],
  ], 'C'),

  // ---------- Aula 7 ----------
  q('7.1', 'conceito', 'Qual dos seguintes é um fator económico na PESTEL?', [
    ['Competência do diretor', 'Errado: é um fator interno.'],
    ['Estrutura de departamentos', 'Errado: é interno.'],
    ['Cultura interna da empresa', 'Errado: é interno; a PESTEL analisa o macroambiente.'],
    ['Taxas de juro', 'Certo: económico (inflação, juros, crescimento, câmbios, rendimento).'],
  ], 'D'),
  q('7.2', 'cenario', 'Uma alteração nas regras de proteção de dados é sobretudo um fator:', [
    ['De produto', 'Errado: não é uma dimensão da PESTEL.'],
    ['Tecnológico apenas', 'Errado: pode ter efeitos tecnológicos, mas é uma norma jurídica.'],
    ['Legal', 'Certo: privacidade é um exemplo de fator legal (normas jurídicas aplicáveis).'],
    ['Interno', 'Errado: é externo, a empresa não decide a lei.'],
  ], 'C'),
  q('7.3', 'cenario', 'O envelhecimento da população é um fator:', [
    ['De organização funcional', 'Errado: é externo.'],
    ['De autoridade formal', 'Errado: não tem relação com autoridade.'],
    ['Exclusivamente financeiro', 'Errado: pode ter efeitos económicos, mas é demografia.'],
    ['Social/demográfico', 'Certo: dimensão sociocultural (demografia, hábitos, estilos de vida, valores).'],
  ], 'D'),
  q('7.4', 'conceito', 'A análise PESTEL pretende:', [
    ['Avaliar apenas os recursos internos', 'Errado: a PESTEL analisa o macroambiente (externo).'],
    ['Determinar automaticamente o preço ótimo', 'Errado: o PESTEL não escolhe automaticamente a estratégia.'],
    ['Substituir a análise de concorrência', 'Errado: a concorrência analisa-se com Porter (ambiente competitivo).'],
    ['Identificar fatores macroambientais relevantes para a estratégia', 'Certo: estruturar a análise do macroambiente.'],
  ], 'D'),
  q('7.5', 'cenario', 'Uma nova tecnologia que altera hábitos de consumo pode representar:', [
    ['Sempre uma força interna', 'Errado: é um fator externo.'],
    ['Uma oportunidade ou ameaça, dependendo da empresa', 'Certo: o mesmo fator tem impactos diferentes conforme o modelo de negócio e a exposição.'],
    ['Sempre uma fraqueza interna', 'Errado: é externo, e não é sempre negativo.'],
    ['Sempre uma oportunidade', 'Errado: para algumas empresas é uma ameaça (ex.: Kodak, Blockbuster).'],
  ], 'B'),

  // ---------- Aula 8 ----------
  q('8.1', 'conceito', 'A ameaça de substitutos refere-se:', [
    ['A soluções diferentes que satisfazem a mesma necessidade', 'Certo: ex.: videoconferência em vez de viagem de negócios.'],
    ['Apenas a concorrentes idênticos', 'Errado: isso é rivalidade entre concorrentes.'],
    ['Aos colaboradores que mudam de equipa', 'Errado: não tem relação.'],
    ['A empresas que fornecem componentes', 'Errado: são fornecedores.'],
  ], 'A'),
  q('8.2', 'cenario', 'Na SWOT, uma marca forte da empresa é normalmente:', [
    ['Força', 'Certo: capacidade interna que favorece a empresa.'],
    ['Fator político', 'Errado: não é um fator do macroambiente.'],
    ['Ameaça', 'Errado: ameaças são externas e desfavoráveis.'],
    ['Oportunidade', 'Errado: oportunidades são externas; a marca é interna.'],
  ], 'A'),
  q('8.3', 'cenario', 'Uma alteração favorável da legislação do setor é normalmente:', [
    ['Fraqueza', 'Errado: fraquezas são internas.'],
    ['Oportunidade', 'Certo: condição externa potencialmente favorável.'],
    ['Força', 'Errado: forças são internas; a legislação é externa.'],
    ['Recurso interno', 'Errado: é externa.'],
  ], 'B'),
  q('8.4', 'conceito', 'O poder negocial dos fornecedores tende a aumentar quando:', [
    ['A empresa pode mudar sem custo', 'Errado: isso reduz o poder do fornecedor.'],
    ['Existem poucos fornecedores e elevados custos de mudança', 'Certo: fornecedores concentrados, inputs únicos, alternativas escassas.'],
    ['Existem muitos fornecedores equivalentes', 'Errado: com muitas alternativas o poder do fornecedor baixa.'],
    ['O produto é facilmente substituível', 'Errado: isso reduz o poder do fornecedor.'],
  ], 'B'),
  q('8.5', 'conceito', 'A vantagem competitiva significa:', [
    ['Nunca reduzir preços', 'Errado: a Ryanair compete com preços baixos e tem vantagem.'],
    ['Ter sempre a maior dimensão', 'Errado: dimensão não é sinónimo de vantagem.'],
    ['Criar valor de forma superior ou distinta face aos concorrentes', 'Certo: custo relativo inferior ou diferenciação, face aos rivais relevantes.'],
    ['Atuar sem concorrentes', 'Errado: a vantagem mede-se precisamente face aos concorrentes.'],
  ], 'C'),

  // ---------- Aula 9 ----------
  q('9.1', 'conceito', 'Qual é uma variável tipicamente controlável pela empresa?', [
    ['Taxa de câmbio de mercado', 'Errado: é incontrolável.'],
    ['Legislação laboral', 'Errado: é incontrolável.'],
    ['Inflação nacional', 'Errado: é incontrolável.'],
    ['Política de preços', 'Certo: o preço é um instrumento controlável.'],
  ], 'D'),
  q('9.2', 'conceito', 'Uma variável incontrolável é:', [
    ['O orçamento de marketing aprovado', 'Errado: a empresa decide-o.'],
    ['O desenho da embalagem', 'Errado: faz parte do produto, controlável.'],
    ['O horário de atendimento definido pela empresa', 'Errado: é controlável (curto prazo).'],
    ['Uma mudança inesperada na regulamentação', 'Certo: a empresa não decide a regulamentação (fator político-legal).'],
  ], 'D'),
  q('9.3', 'conceito', 'A postura estratégica representa:', [
    ['A soma de todas as vendas', 'Errado: isso é um resultado.'],
    ['A forma como a organização escolhe posicionar-se perante o ambiente', 'Certo: mercado-alvo, proposta de valor e posicionamento.'],
    ['A lista de fatores económicos', 'Errado: esses são fatores incontroláveis.'],
    ['A descrição dos procedimentos de segurança', 'Errado: não tem relação.'],
  ], 'B'),
  q('9.4', 'cenario', 'Perante uma subida dos custos de energia, a empresa pode controlar diretamente:', [
    ['A inflação internacional', 'Errado: é incontrolável.'],
    ['Medidas de eficiência energética nas suas instalações', 'Certo: não controlar o preço ≠ não poder responder.'],
    ['A política monetária', 'Errado: é decidida pelos bancos centrais.'],
    ['O preço mundial do petróleo', 'Errado: é incontrolável.'],
  ], 'B'),
  q('9.5', 'conceito', 'A distinção entre variáveis controláveis e incontroláveis é útil para:', [
    ['Impedir adaptações estratégicas', 'Errado: serve para escolher como responder.'],
    ['Eliminar a necessidade de análise', 'Errado: exige análise.'],
    ['Garantir previsões perfeitas', 'Errado: controlar a decisão não é controlar o resultado.'],
    ['Identificar alavancas de ação e condicionantes externas', 'Certo: separar o que a empresa pode ajustar do que tem de enfrentar.'],
  ], 'D'),

  // ---------- Aula 10 ----------
  q('10.1', 'conceito', 'O primeiro passo de um processo estruturado de decisão é:', [
    ['Identificar o problema', 'Certo: etapa 1, definir o problema (o primeiro erro é começar pela solução).'],
    ['Atribuir prémios', 'Errado: não faz parte do processo.'],
    ['Escolher a alternativa preferida', 'Errado: escolher é a etapa 5.'],
    ['Implementar sem análise', 'Errado: implementar é a etapa 6, depois da análise.'],
  ], 'A'),
  q('10.2', 'conceito', 'Atribuir pesos aos critérios permite:', [
    ['Refletir a importância relativa de cada critério', 'Certo: os pesos exprimem prioridades e somam 100%.'],
    ['Dispensar alternativas', 'Errado: os pesos servem para comparar alternativas.'],
    ['Garantir resultados futuros', 'Errado: um cálculo coerente pode assentar em estimativas erradas.'],
    ['Eliminar todos os riscos', 'Errado: o risco é, quanto muito, um critério.'],
  ], 'A'),
  q('10.3', 'conceito', 'Uma decisão programada é normalmente:', [
    ['Tomada sem informação', 'Errado: usa a informação de procedimentos já definidos.'],
    ['Sempre estratégica', 'Errado: costuma ser operacional e rotineira.'],
    ['Repetitiva e apoiada em regras ou procedimentos', 'Certo: problemas frequentes e bem estruturados resolvem-se com uma regra (ex.: repor stock abaixo de um nível).'],
    ['Única e sem precedentes', 'Errado: isso é uma decisão não programada.'],
  ], 'C'),
  q('10.4', 'conceito', 'Uma decisão não programada tende a exigir:', [
    ['Eliminação de critérios', 'Errado: exige critérios ainda mais explícitos.'],
    ['Análise e julgamento para um problema novo ou pouco estruturado', 'Certo: não há rotina; aplica-se o processo de decisão e o julgamento.'],
    ['Aplicação automática de uma rotina', 'Errado: isso é uma decisão programada.'],
    ['Ausência de alternativas', 'Errado: é preciso identificar e avaliar alternativas.'],
  ], 'B'),
  q('10.5', 'conceito', 'Depois de implementar uma decisão, importa:', [
    ['Evitar recolher dados', 'Errado: é preciso medir resultados.'],
    ['Ignorar os efeitos inesperados', 'Errado: devem ser analisados.'],
    ['Assumir que foi necessariamente correta', 'Errado: uma boa decisão pode falhar; é preciso verificar.'],
    ['Avaliar resultados e aprender com desvios', 'Certo: etapa 7, comparar resultados com objetivos e corrigir.'],
  ], 'D'),

  // ---------- Aula 11 ----------
  q('11.1', 'conceito', 'A racionalidade limitada de Simon sugere que gestores:', [
    ['Conhecem todas as alternativas', 'Errado: é o pressuposto do gestor perfeitamente racional.'],
    ['Procuram frequentemente soluções satisfatórias dadas as limitações', 'Certo: satisficing, por limites de informação, tempo e cognição.'],
    ['Maximizam sempre resultados', 'Errado: otimizar nem sempre é possível.'],
    ['Decidem sem qualquer critério', 'Errado: satisficing usa um critério de aceitável.'],
  ], 'B'),
  q('11.2', 'conceito', 'O viés de confirmação consiste em:', [
    ['Escolher sempre a opção mais barata', 'Errado: não é a definição.'],
    ['Consultar fontes contraditórias', 'Errado: isso é uma forma de combater o viés.'],
    ['Privilegiar informação que sustenta crenças prévias', 'Certo: valorizar o que confirma aquilo em que já acreditamos.'],
    ['Ignorar todas as experiências passadas', 'Errado: não é a definição.'],
  ], 'C'),
  q('11.3', 'conceito', 'A ancoragem ocorre quando:', [
    ['Todos os dados têm o mesmo peso', 'Errado: na ancoragem um dado pesa demais.'],
    ['Os critérios são eliminados', 'Errado: não é a definição.'],
    ['A decisão é sempre coletiva', 'Errado: não tem relação.'],
    ['Uma referência inicial influencia excessivamente o julgamento', 'Certo: ex.: ouvir «1 milhão» e achar barata uma proposta de 800 mil.'],
  ], 'D'),
  q('11.4', 'conceito', 'O excesso de confiança pode levar a:', [
    ['Aumentar sempre a qualidade da decisão', 'Errado: convicção não é qualidade da evidência.'],
    ['Subestimar riscos e sobrestimar a precisão das previsões', 'Certo: a confiança subjetiva excede a precisão efetiva.'],
    ['Eliminar incerteza', 'Errado: a incerteza continua lá, só é ignorada.'],
    ['Garantir imparcialidade', 'Errado: é um enviesamento.'],
  ], 'B'),
  q('11.5', 'conceito', 'Uma forma de reduzir vieses é:', [
    ['Procurar evidência contraditória e comparar alternativas explicitamente', 'Certo: contraditório, critérios explícitos, pre-mortem.'],
    ['Ouvir apenas quem concorda', 'Errado: reforça o enviesamento de confirmação.'],
    ['Decidir sempre mais depressa', 'Errado: a pressa favorece atalhos e erros.'],
    ['Eliminar critérios objetivos', 'Errado: os critérios explícitos ajudam a reduzir vieses.'],
  ], 'A'),

  // ---------- Aula 12 ----------
  q('12.1', 'conceito', 'Uma correlação entre duas variáveis:', [
    ['Elimina fatores de confusão', 'Errado: pode haver uma causa comum por trás.'],
    ['Prova necessariamente causalidade', 'Errado: correlação não é causalidade.'],
    ['É sempre irrelevante', 'Errado: pode ser útil para prever ou levantar hipóteses.'],
    ['Não demonstra por si só uma relação causal', 'Certo: pode haver causa comum, causalidade inversa ou coincidência.'],
  ], 'D'),
  q('12.2', 'conceito', 'Um dashboard de gestão é útil para:', [
    ['Garantir que os dados são corretos', 'Errado: mostra os dados, não garante a sua qualidade.'],
    ['Eliminar julgamento humano', 'Errado: dados e julgamento são complementares.'],
    ['Substituir integralmente a análise', 'Errado: os dados apoiam a análise, não a substituem.'],
    ['Acompanhar indicadores e apoiar decisões', 'Certo: é uma ferramenta de acompanhamento (ex.: o dashboard da Maria às 08:15).'],
  ], 'D'),
  q('12.3', 'conceito', 'Um KPI mal definido pode:', [
    ['Dispensar validação', 'Errado: precisa de definição, meta, responsável e fonte.'],
    ['Induzir comportamentos desalinhados com o objetivo', 'Certo: as métricas alteram comportamentos (Lei de Goodhart).'],
    ['Melhorar sempre o desempenho', 'Errado: o indicador pode melhorar sem que o objetivo melhore.'],
    ['Ser interpretado sem contexto', 'Errado: um KPI precisa sempre de contexto.'],
  ], 'B'),
  q('12.4', 'conceito', 'A qualidade dos dados depende, entre outros fatores, de:', [
    ['Apenas da quantidade de gráficos', 'Errado: volume e apresentação não são qualidade.'],
    ['Apenas do software utilizado', 'Errado: o software não garante dados corretos.'],
    ['Exatidão, completude e atualidade', 'Certo: dados certos, sem falhas e atualizados (fiáveis e representativos).'],
    ['Da preferência do diretor', 'Errado: não é um critério de qualidade.'],
  ], 'C'),
  q('12.5', 'conceito', 'Uma decisão baseada em evidências deve combinar:', [
    ['Dados relevantes, contexto e julgamento crítico', 'Certo: dados vs intuição é um falso dilema; boa gestão integra evidência, experiência e pensamento crítico.'],
    ['Apenas intuição', 'Errado: a intuição pode transportar enviesamentos.'],
    ['Apenas médias sem análise', 'Errado: descrever não é explicar.'],
    ['Apenas a última observação', 'Errado: é o enviesamento da disponibilidade.'],
  ], 'A'),

  // ---------- Aula 13 ----------
  q('13.1', 'cenario', 'Vender produtos atuais a clientes num novo país é:', [
    ['Diversificação', 'Errado: o produto não é novo.'],
    ['Desenvolvimento de produto', 'Errado: o produto é o mesmo.'],
    ['Desenvolvimento de mercado', 'Certo: produto atual, mercado novo (nova geografia).'],
    ['Penetração de mercado', 'Errado: o mercado é novo.'],
  ], 'C'),
  q('13.2', 'cenario', 'Lançar um novo produto para clientes atuais é:', [
    ['Integração vertical', 'Errado: não é um quadrante de Ansoff.'],
    ['Desenvolvimento de mercado', 'Errado: o mercado é o atual.'],
    ['Desenvolvimento de produto', 'Certo: produto novo, mercado atual.'],
    ['Penetração de mercado', 'Errado: há um produto novo.'],
  ], 'C'),
  q('13.3', 'cenario', 'Vender mais produtos atuais no mercado atual é:', [
    ['Desenvolvimento de produto', 'Errado: o produto é o atual.'],
    ['Diversificação', 'Errado: nada é novo.'],
    ['Desenvolvimento de mercado', 'Errado: o mercado é o atual.'],
    ['Penetração de mercado', 'Certo: produto atual, mercado atual (quota, frequência, retenção).'],
  ], 'D'),
  q('13.4', 'cenario', 'Entrar com novos produtos em novos mercados é:', [
    ['Especialização funcional', 'Errado: não é um quadrante de Ansoff.'],
    ['Penetração de mercado', 'Errado: é produto e mercado atuais.'],
    ['Desenvolvimento de produto', 'Errado: aqui o mercado também é novo.'],
    ['Diversificação', 'Certo: produto novo, mercado novo.'],
  ], 'D'),
  q('13.5', 'conceito', 'A matriz de Ansoff combina duas dimensões:', [
    ['Pessoas e departamentos', 'Errado: não são as dimensões de Ansoff.'],
    ['Produtos e mercados, atuais ou novos', 'Certo: produto atual/novo × mercado atual/novo.'],
    ['Risco e liquidez apenas', 'Errado: o risco varia entre quadrantes, mas não é um eixo.'],
    ['Custos e receitas apenas', 'Errado: não são os eixos da matriz.'],
  ], 'B'),

  // ---------- Aula 14 ----------
  q('14.1', 'cenario', 'Qual objetivo está melhor formulado segundo SMART?', [
    ['Ser uma referência no futuro', 'Errado: não é específico, mensurável nem tem prazo.'],
    ['Trabalhar mais intensamente', 'Errado: não é mensurável nem tem prazo.'],
    ['Melhorar bastante o negócio até 31 de dezembro', 'Errado: tem prazo, mas «bastante» não é específico nem mensurável.'],
    ['Aumentar em 8% as vendas online até 31 de dezembro', 'Certo: específico, mensurável e com prazo.'],
  ], 'D'),
  q('14.2', 'conceito', 'Um KPI é:', [
    ['Um tipo de organigrama', 'Errado: não tem relação com estrutura.'],
    ['Uma garantia de causalidade', 'Errado: um indicador não prova causas.'],
    ['Uma estratégia de diversificação', 'Errado: é Ansoff (Aula 13).'],
    ['Um indicador usado para acompanhar um aspeto relevante do desempenho', 'Certo: medida selecionada pela sua importância para um objetivo de gestão.'],
  ], 'D'),
  q('14.3', 'conceito', 'O Balanced Scorecard inclui habitualmente:', [
    ['Apenas a perspetiva financeira', 'Errado: o BSC existe precisamente porque os indicadores financeiros não bastam.'],
    ['Perspetivas financeira, clientes, processos internos e aprendizagem/crescimento', 'Certo: as quatro perspetivas de Kaplan e Norton (1992).'],
    ['Apenas a perspetiva de recursos humanos', 'Errado: é só parte da perspetiva de aprendizagem.'],
    ['Apenas receitas e custos', 'Errado: é só a perspetiva financeira.'],
  ], 'B'),
  q('14.4', 'conceito', 'A lei de Goodhart alerta que:', [
    ['Qualquer KPI garante eficiência', 'Errado: é o contrário.'],
    ['A qualidade dos dados é irrelevante', 'Errado: não é o que diz a lei.'],
    ['Toda a medição é inútil', 'Errado: medir pode melhorar a gestão, só altera também comportamentos.'],
    ['Uma métrica transformada em objetivo pode perder qualidade como medida', 'Certo: as pessoas otimizam o indicador e ele deixa de refletir o objetivo.'],
  ], 'D'),
  q('14.5', 'conceito', 'Um objetivo desafiante tende a funcionar melhor quando:', [
    ['É impossível de atingir', 'Errado: tem de ser alcançável (o A de SMART).'],
    ['Não tem prazo nem responsável', 'Errado: uma meta precisa de prazo e responsável.'],
    ['É secreto', 'Errado: objetivos partilhados orientam a ação.'],
    ['É aceite e acompanhado de recursos e feedback', 'Certo: aceitação, recursos e acompanhamento (feedback) tornam um objetivo exigente eficaz.'],
  ], 'D'),
]

/** Chave oficial do documento, para validação. */
export const CHAVE_PROFESSOR: Record<number, string> = {
  1: 'BBDBD', 2: 'DCDBD', 3: 'ABBCC', 4: 'BCABA', 5: 'CDBAD', 6: 'AABAC', 7: 'DCDDB',
  8: 'AABBC', 9: 'DDBBD', 10: 'AACBD', 11: 'BCDBA', 12: 'DDBCA', 13: 'CCDDB', 14: 'DDBDD',
}
