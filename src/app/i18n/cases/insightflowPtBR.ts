import type { CaseStudy } from "../../data/caseStudies";
import type { DeepPartial } from "../localizedCaseStudies";

const visualGroups = [
  ["Home: evidência responsiva do produto", "Resumir atividade de pesquisa, volume de evidências, insights, temas e oportunidades em um único workspace."],
  ["Entrevista: evidência responsiva do produto", "Manter momentos da transcrição, classificação de evidências e análise assistida por IA no mesmo contexto."],
  ["Insights: evidência responsiva do produto", "Expor estado de aprovação, impacto, força da evidência e cobertura de participantes antes de uma análise mais profunda."],
  ["Temas: evidência responsiva do produto", "Apoiar a síntese por agrupamentos visíveis que conectam insights relacionados."],
  ["Oportunidade: evidência responsiva do produto", "Preservar a trilha de pesquisa de uma oportunidade de volta aos temas, insights, evidências e participantes."],
  ["Relatórios: evidência responsiva do produto", "Transformar achados aprovados em resultados de pesquisa compartilháveis mantendo a síntese rastreável."],
  ["Login: evidência responsiva do produto", "Criar um ponto de entrada focado antes de pesquisadores acessarem o repositório."],
  ["Onboarding: evidência responsiva do produto", "Explicar o fluxo orientado por evidências e estabelecer expectativas do produto antes do primeiro projeto."],
  ["Projetos: evidência responsiva do produto", "Facilitar a comparação de status do projeto, volume de estudos e atividade recente no repositório."],
  ["Projeto: evidência responsiva do produto", "Reunir progresso do projeto, ativos de pesquisa e pipeline de síntese em uma única visão geral."],
  ["Estudos: evidência responsiva do produto", "Organizar iniciativas de pesquisa por método, status, participantes e progresso."],
  ["Entrevistas: evidência responsiva do produto", "Ajudar pesquisadores a percorrer sessões de participantes e entrar rapidamente na análise da transcrição."],
  ["Oportunidades: evidência responsiva do produto", "Transformar padrões de pesquisa em direções de produto priorizadas sem perder a base de evidências."],
  ["Biblioteca: evidência responsiva do produto", "Centralizar evidências e ativos reutilizáveis de pesquisa para manter o conhecimento encontrável entre projetos."],
  ["Sistema: evidência responsiva do produto", "Tornar explícitas e gerenciáveis a configuração do workspace, o comportamento da IA e as configurações do repositório."],
] as const;

export const insightflowPtBR: DeepPartial<CaseStudy> = {
  title: "Projetando IA fundamentada em evidências para síntese de pesquisa",
  company: "InsightFlow · Inteligência de pesquisa com IA",
  role: "Product Designer independente",
  dates: "Agosto de 2026",
  category: "Product Design · IA · Inteligência de Pesquisa",
  projectNature: "Exploração independente de produto",
  team: "Estudo independente · Única designer",
  scope:
    "Um fluxo ponta a ponta de inteligência de pesquisa que abrange análise de entrevistas, extração de evidências, síntese de insights, agrupamento temático, definição de oportunidades, vínculo com fontes, consultas assistidas por IA, geração de relatórios, acessibilidade e comportamento responsivo.",
  status:
    "Protótipo funcional codificado com conjunto de dados sintético para demonstração e integração ao Gemini testada localmente. A versão atual é apresentada como uma exploração pronta para implementação, com validação por profissionais definida como o próximo marco, e não como algo já concluído.",
  executiveSummary: {
    heading:
      "Um fluxo de IA confiável precisa de evidências inspecionáveis, estado explícito do sistema e revisão humana.",
    summary:
      "InsightFlow é uma exploração de produto codificada que transforma entrevistas qualitativas em evidências, insights, temas, oportunidades e relatórios enquanto mantém inspecionável o caminho até a fonte. O trabalho se concentrou em separar sinais de suporte de sinais contraditórios e tornar o comportamento do modelo ao vivo distinto do fallback de demonstração. O resultado é um protótipo funcional pronto para testes com profissionais, não uma afirmação de impacto validado do produto.",
    metrics: [
      {
        label: "Entrevistas sintéticas",
        detail: "Registros de demonstração usados para exercitar o fluxo",
      },
      {
        label: "Itens de evidência",
        detail: "Trechos rastreáveis conectados pelo modelo de síntese",
      },
      {
        label: "Insights aprovados",
        detail: "Achados de demonstração revisados por uma pessoa",
      },
      {
        label: "Status da validação",
        value: "Pendente",
        detail: "Estudo de usabilidade com profissionais ainda necessário",
      },
    ],
    gate: {
      usability: "Pronto para testes com pesquisadores",
      release: "Ainda não pronto para produção",
      explanation:
        "O protótipo demonstra o modelo de interação pretendido, salvaguardas de estado da IA, comportamento responsivo e implementação de acessibilidade. Ele ainda não demonstra confiança, adoção ou valor do fluxo com profissionais reais de pesquisa ou dados de produção.",
    },
    iteration: [
      {
        step: "Modelar primeiro os vínculos com as fontes",
        description:
          "O fluxo foi estruturado em torno das relações conectadas entre evidência, insight, tema, oportunidade e relatório antes que as decisões visuais fossem finalizadas.",
      },
      {
        step: "Tornar explícito o estado da IA",
        description:
          "IA ao vivo, síntese de demonstração e checkpoints de revisão foram separados para que o fallback não parecesse uma resposta bem-sucedida do modelo.",
      },
      {
        step: "Adaptar a síntese densa para mobile",
        description:
          "A experiência de Temas foi refeita de um Canvas comprimido para uma interação em Lista que preserva a tarefa em telas estreitas.",
      },
    ],
    participantEvidence:
      "As contagens de participantes, trechos e achados exibidos no protótipo pertencem a um conjunto de dados sintético criado para testar vínculos com fontes, tratamento de contradições e divulgação do estado da IA. São artefatos de produto, não validação de pesquisa com usuários.",
  },
  overview:
    "InsightFlow é um produto funcional de inteligência de pesquisa assistida por IA que conecta entrevistas qualitativas a evidências, insights, temas, oportunidades e relatórios, mantendo visíveis o material de origem, os sinais contraditórios e a revisão humana.",
  challenge:
    "A IA pode acelerar a síntese de pesquisa qualitativa, mas a velocidade cria um problema de confiança quando conclusões geradas se distanciam do material que as sustenta. O desafio de design não era apenas gerar insights mais rápido. Era tornar a síntese assistida por IA suficientemente inspecionável para que pesquisadores pudessem verificar por que um insight existe, enxergar o que o contradiz e entender quando um modelo ao vivo foi ou não utilizado.",
  context: {
    businessGoal:
      "Explorar um fluxo de pesquisa que reduza a distância entre material qualitativo bruto e sínteses prontas para apoiar decisões, sem tratar a saída da IA como evidência inquestionável.",
    constraints: [
      "O conjunto de dados do portfólio é sintético e não pode ser apresentado como validação de pesquisa com usuários",
      "Toda conclusão gerada precisava manter um caminho rastreável até a evidência de origem",
      "Evidências de suporte e de contradição precisavam continuar distinguíveis após a síntese",
      "A disponibilidade da IA ao vivo poderia mudar conforme acesso ao modelo, cota ou configuração",
      "Interações densas de pesquisa precisavam de comportamento utilizável em telas estreitas, e não apenas de uma versão desktop comprimida",
    ],
    users:
      "UX Researchers, Product Researchers e equipes de produto que trabalham com entrevistas qualitativas e precisam sintetizar achados sem perder acesso às evidências subjacentes.",
  },
  existingExperience: {
    heading: "Onde a síntese assistida por IA pode romper a cadeia de evidências",
    introduction:
      "A IA pode tornar a síntese qualitativa mais fácil de consumir ao mesmo tempo em que dificulta inspecionar o caminho de volta ao material de origem.",
    platforms: [
      {
        name: "Material de origem",
        role:
          "Transcrições de entrevistas, áudios, arquivos, timestamps e trechos de participantes que contêm a evidência original da pesquisa.",
      },
      {
        name: "Camada de síntese",
        role:
          "Extração de evidências, insights candidatos, temas, agrupamentos e resumos que transformam material bruto em padrões.",
      },
      {
        name: "Camada de decisão",
        role:
          "Oportunidades, relatórios e direção de produto que dependem da qualidade e da visibilidade das fontes na síntese abaixo deles.",
      },
    ],
    issues: [
      {
        title: "A rastreabilidade pode desaparecer depois da síntese",
        description:
          "Uma afirmação concisa gerada por IA só é útil se a pessoa pesquisadora ainda puder inspecionar os trechos, participantes e contexto que a sustentam.",
      },
      {
        title: "Contradições podem ser achatadas em um padrão dominante",
        description:
          "A sumarização pode fazer os achados parecerem mais unânimes do que o material subjacente, especialmente quando evidências contraditórias não são modeladas explicitamente.",
      },
      {
        title: "O estado da IA pode ser ambíguo",
        description:
          "Quando uma solicitação ao modelo falha ou fica indisponível, o fallback não deve parecer indistinguível de uma resposta real do modelo ao vivo.",
      },
      {
        title: "Interações densas de desktop não se tornam automaticamente interações mobile",
        description:
          "Agrupamento espacial, drawers de evidência e análises em múltiplas colunas exigem adaptação de comportamento em telas estreitas, não apenas dimensões menores.",
      },
    ],
  },
  researchDiscovery: {
    heading: "Enquadrando a síntese com IA como um problema de confiança e vínculo com fontes",
    introduction:
      "Esta exploração independente utilizou dados sintéticos para exercitar lógica de produto, estados de interação e salvaguardas de IA sem apresentar participantes fictícios como validação de pesquisa.",
    methods: [
      {
        title: "Mapeamento de fluxo e modelo de dados",
        description:
          "Mapeei a relação entre trechos de origem, insights, temas, oportunidades e relatórios antes de desenhar a interface, tratando os vínculos com fontes como parte da arquitetura do produto.",
        output:
          "Um modelo rastreável Evidência → Insight → Tema → Oportunidade → Relatório com IDs conectados e referências aos participantes.",
      },
      {
        title: "Design dos estados de falha da IA",
        description:
          "Tratei a indisponibilidade do modelo como um estado normal do produto e projetei um fallback transparente, em vez de permitir que a síntese de demonstração se passasse por uma resposta ao vivo bem-sucedida.",
        output:
          "Estados explícitos de IA ao vivo e Síntese de demonstração em Ask AI, análise de entrevistas e geração de relatórios.",
      },
      {
        title: "Conjunto sintético de cenários",
        description:
          "Um conjunto controlado de dados de demonstração foi criado para exercitar sinais conflitantes, diferentes níveis de familiaridade com SaaS, achados sustentados por evidências, organização de temas e definição de oportunidades sem apresentar participantes fictícios como pesquisa real.",
        output:
          "10 entrevistas sintéticas, 40 itens de evidência, 6 insights aprovados, 5 temas e 5 oportunidades.",
      },
      {
        title: "QA técnico e de interação",
        description:
          "O protótipo codificado foi revisado por builds de produção, verificações de prontidão da IA, QA em telas estreitas, revisão de estados de interação e uma passagem de acessibilidade nos fluxos principais.",
        output:
          "Um protótipo React pronto para portfólio, com comportamento responsivo, suporte a teclado, estados explícitos de IA e integração configurável ao Gemini no servidor.",
      },
    ],
    limitations: [
      "Todos os participantes, entrevistas, citações e achados do conjunto de demonstração são sintéticos",
      "Nenhum estudo de usabilidade com UX Researchers ou Product Researchers foi concluído",
      "Não existe baseline de produção para tempo de síntese, confiança, adoção ou qualidade da decisão",
      "A acessibilidade foi implementada e revisada manualmente, mas não passou por auditoria independente com usuários de tecnologias assistivas",
    ],
  },
  keyFindings: {
    heading: "O que o protótipo revelou sobre fluxos confiáveis de pesquisa com IA",
    introduction:
      "Estes achados vêm da modelagem do produto, implementação e QA, e não de pesquisa comportamental com usuários reais.",
    findings: [
      {
        title: "A procedência precisa continuar visível depois da síntese",
        evidence:
          "Os insights do protótipo mantêm IDs de evidência vinculados, contagens de participantes, timestamps, força da evidência e navegação direta de volta aos trechos de origem.",
        consequence:
          "Uma afirmação sintetizada pode ser questionada sem obrigar a pessoa pesquisadora a reconstruir como ela foi produzida.",
        implication:
          "A rastreabilidade se tornou um caminho principal de interação, e não metadado secundário.",
      },
      {
        title: "Evidências contraditórias precisam sobreviver à camada de resumo",
        evidence:
          "Trechos de suporte e de contradição são modelados como tipos separados de evidência e permanecem visíveis no drawer de evidências e nos resumos de insights.",
        consequence:
          "A interface evita apresentar um padrão dominante como se todos os participantes concordassem com ele.",
        implication:
          "A semântica das evidências utiliza rótulos, contagens e estados visuais distintos em todo o produto.",
      },
      {
        title: "A disponibilidade da IA faz parte da experiência do usuário",
        evidence:
          "Ask AI, análise de entrevistas e geração de relatórios distinguem uma resposta real do Gemini de um fallback de demonstração pré-computado.",
        consequence:
          "Uma falha na solicitação ao modelo não se transforma silenciosamente em uma interação falsa de IA bem-sucedida.",
        implication:
          "IA ao vivo e Síntese de demonstração são estados explícitos do produto, com linguagem de divulgação diferente.",
      },
      {
        title: "Comportamento responsivo às vezes exige outro modelo de interação",
        evidence:
          "O QA em 375 px mostrou que o Canvas de afinidade ficava comprimido e difícil de usar quando tratado como uma versão reduzida da interação desktop.",
        consequence:
          "Manter a mesma interação em todos os breakpoints preservaria consistência visual às custas da usabilidade.",
        implication:
          "Temas utiliza por padrão uma Lista linear em telas estreitas, enquanto o Canvas espacial permanece uma interação desktop.",
      },
    ],
  },
  designStrategy: {
    heading: "Projetando confiança dentro do fluxo em vez de adicioná-la como aviso",
    introduction:
      "Quatro princípios de produto mantiveram velocidade, visibilidade das fontes, incerteza e julgamento humano conectados ao longo da experiência.",
    principles: [
      {
        title: "Sem evidência, sem insight",
        explanation:
          "A síntese assistida por IA precisa permanecer conectada aos trechos dos participantes que a justificam.",
        problemAddressed:
          "Conclusões geradas podem parecer definitivas depois que o contexto da fonte desaparece.",
        influence:
          "Insights expõem contagens de fontes e vínculos com evidências, e saídas de nível superior continuam conectadas à trilha de pesquisa abaixo delas.",
      },
      {
        title: "Contradições continuam visíveis",
        explanation:
          "Evidências que enfraquecem ou qualificam um padrão são preservadas em vez de serem suavizadas durante a síntese.",
        problemAddressed:
          "Interfaces de resumo podem criar falsa unanimidade ao enfatizar apenas o sinal dominante.",
        influence:
          "Evidências de suporte e de contradição utilizam tratamentos semânticos separados e podem ser revisadas independentemente.",
      },
      {
        title: "O estado da IA é explícito",
        explanation:
          "A interface deve comunicar se uma resposta veio do modelo ao vivo configurado ou de um fallback de demonstração transparente.",
        problemAddressed:
          "Um fallback pode enganar usuários se parecer idêntico a uma resposta bem-sucedida do modelo.",
        influence:
          "Rótulos de IA ao vivo e Síntese de demonstração permanecem visíveis no ponto em que o conteúdo gerado é consumido.",
      },
      {
        title: "O julgamento humano permanece no fluxo",
        explanation:
          "A IA pode acelerar a interpretação, mas etapas de síntese com consequências devem continuar inspecionáveis e revisáveis.",
        problemAddressed:
          "A automação pode colapsar sugestão, evidência e decisão em uma única etapa opaca.",
        influence:
          "Insights candidatos, sugestões de agrupamento, inspeção de evidências e mudanças de grupo preservam estados explícitos de revisão.",
      },
    ],
  },
  redesignedExperience: {
    heading: "Transformando síntese de pesquisa em uma trilha de decisão inspecionável",
    introduction:
      "Cada camada acrescenta síntese mantendo acessível o material de origem subjacente.",
    solutions: [
      {
        title: "Análise de entrevistas sustentada por evidências",
        problem:
          "Uma transcrição pode conter dezenas de sinais, mas a extração automatizada é arriscada quando a interpretação gerada não pode ser conferida com o material original.",
        response:
          "Segmentos de transcrição, timestamps, classificação de evidências e insights candidatos são conectados em um único ambiente de revisão. Momentos ligados a evidências continuam selecionáveis a partir da transcrição.",
        intendedEffect:
          "Reduzir o esforço necessário para inspecionar a extração assistida por IA sem separar interpretação do contexto da fonte.",
      },
      {
        title: "Evidências de insight inspecionáveis",
        problem:
          "Um insight sintetizado pode esconder quanto de evidência o sustenta e se existem contraexemplos relevantes.",
        response:
          "Cada insight expõe contagem de participantes, força da evidência, trechos de suporte, trechos contraditórios e navegação direta para a transcrição.",
        intendedEffect:
          "Ajudar pesquisadores a avaliar força e nuance de um achado antes de utilizá-lo em decisões de produto.",
      },
      {
        title: "Perguntas e respostas de pesquisa fundamentadas em fontes",
        problem:
          "Consultas em linguagem natural podem fazer respostas da IA parecerem desconectadas do repositório que as produziu.",
        response:
          "Ask AI retorna uma síntese concisa com insights vinculados, contagem de fontes de evidência e estado explícito de IA ao vivo ou Síntese de demonstração.",
        intendedEffect:
          "Tornar consultas em todo o repositório mais rápidas mantendo contexto de fonte suficiente para verificar a resposta.",
      },
      {
        title: "Organização de temas que muda conforme o contexto",
        problem:
          "Mapeamento espacial de afinidade funciona bem em telas maiores, mas se torna difícil de ler e manipular em viewports estreitos.",
        response:
          "No desktop há Canvas arrastável e visualização em Lista. No mobile, o padrão é uma Lista linear com seletores de tema acessíveis por teclado e sem um Canvas comprimido.",
        intendedEffect:
          "Preservar a tarefa de pesquisa entre dispositivos sem forçar mecânicas idênticas de interação em todos os breakpoints.",
      },
      {
        title: "Trilha de origem da oportunidade",
        problem:
          "Oportunidades de produto podem se desconectar das evidências de pesquisa que originalmente as justificaram.",
        response:
          "A Research Trail conecta a direção da oportunidade de volta aos insights, evidências e participantes, mantendo a justificativa inspecionável.",
        intendedEffect:
          "Facilitar questionar ou revisitar a direção de produto quando novas evidências surgirem.",
      },
      {
        title: "Geração de relatórios com estado visível da IA",
        problem:
          "Resumos executivos podem amplificar excesso de confiança quando o conteúdo gerado esconde tanto as fontes quanto o estado do sistema de IA.",
        response:
          "A geração de relatórios utiliza seções selecionadas, achados aprovados, IDs de oportunidades vinculadas e rotulagem explícita de estado ao vivo ou fallback.",
        intendedEffect:
          "Apoiar comunicação mais rápida sem apresentar a síntese gerada como evidência mais forte do que o repositório contém.",
      },
    ],
    prototypeCoverage: [
      "Entrada da demonstração do portfólio e prévia de onboarding",
      "Dashboard inicial do repositório de pesquisa",
      "Lista de entrevistas e análise de entrevistas",
      "Revisão de insights sustentados por evidências",
      "Consultas de pesquisa com Ask AI",
      "Organização de Temas em Canvas e Lista",
      "Definição de oportunidades e Research Trail",
      "Geração de relatório de pesquisa",
    ],
  },
  visualEvidence: {
    heading:
      "Telas de produto que tornam visíveis os vínculos com fontes, o estado da IA e o comportamento responsivo",
    introduction:
      "As telas abaixo documentam o protótipo implementado, incluindo as mudanças de interação introduzidas durante o QA em telas estreitas.",
    expandLabel: "Ver galeria completa do produto",
    groups: visualGroups.map(([title, description], index) => ({
      title,
      description,
      images: [
        {
          alt: `Tela ${title.split(":")[0]} do InsightFlow no desktop.`,
          caption: `${description} Desktop.`,
        },
        {
          alt: `Tela ${title.split(":")[0]} do InsightFlow no mobile.`,
          caption: `${description} Mobile.`,
        },
      ],
    })),
  },
  designSystemAccessibility: {
    heading: "Usando o design system para tornar o estado da pesquisa legível",
    introduction:
      "Um sistema semântico contido mantém legíveis o tipo de evidência, modo da IA, estado de interação e hierarquia em telas densas de pesquisa.",
    foundations: [
      {
        title: "Semântica de evidências",
        description:
          "Evidências de suporte e de contradição usam cores semânticas, rótulos, contagens e tratamentos de borda separados para que o significado não dependa apenas da cor.",
      },
      {
        title: "Hierarquia visual contida",
        description:
          "Um sistema neutro de superfícies e um destaque índigo contido mantêm a atenção no conteúdo de pesquisa, em vez de usar uma estética genérica de IA com alta saturação.",
      },
      {
        title: "Hierarquia de estados da IA",
        description:
          "IA ao vivo, fallback de demonstração, sugestões de IA, insights revisados e força da evidência usam linguagem e tratamentos de status consistentes.",
      },
      {
        title: "Responsividade orientada à tarefa",
        description:
          "Análises densas de duas colunas se empilham em telas estreitas, a navegação mobile mantém destinos centrais acessíveis e Temas muda do comportamento espacial do Canvas para Lista.",
      },
    ],
    components: [
      "Sidebar desktop e navegação inferior mobile",
      "Busca global e diálogo Ask AI",
      "Transcrição de entrevista e marcadores de evidência",
      "Cards de insight e drawer de evidências",
      "Canvas de temas, Lista e controles de reatribuição",
      "Nós de Oportunidade e Research Trail",
      "Rótulos de IA, badges de status e estados de divulgação",
      "Controles de geração de relatório e estados de feedback",
    ],
    accessibility: [
      {
        title: "Comportamento por teclado e foco",
        description:
          "Diálogos e drawers suportam Escape para fechar, restauração de foco, contenção de foco quando necessário e interações com evidências e Research Trail operáveis por teclado.",
      },
      {
        title: "Controles e estados semânticos",
        description:
          "Controles apenas por ícone expõem nomes acessíveis, formulários utilizam labels e estados interativos usam atributos como aria-selected, aria-pressed, aria-current, aria-expanded e semântica de progresso quando relevante.",
      },
      {
        title: "Movimento reduzido",
        description:
          "A interface respeita prefers-reduced-motion para que animações e transições não essenciais não se tornem uma barreira.",
      },
      {
        title: "Interação mobile alternativa",
        description:
          "O Canvas de afinidade não é forçado em telas estreitas. O mobile utiliza uma Lista linear com seletores nativos para preservar legibilidade e operabilidade.",
      },
    ],
    limitation:
      "O protótipo recebeu uma revisão de acessibilidade focada em implementação, mas ainda não foi avaliado por uma auditoria WCAG independente nem por sessões de usabilidade com usuários de tecnologias assistivas.",
  },
  validationNextSteps: {
    heading: "Separando prontidão técnica de validação do produto",
    introduction:
      "Verificações de build, prontidão da IA, responsividade e interação confirmam o comportamento do protótipo, não a confiança de pesquisadores ou o valor do fluxo.",
    completedReviews: [
      {
        title: "Integridade do build de produção",
        description:
          "O pacote preparado para o portfólio concluiu um build de produção sem erros de TypeScript ou bundle no ambiente local.",
      },
      {
        title: "Prontidão da IA ao vivo",
        description:
          "Uma verificação no servidor confirmou que o modelo Gemini configurado conseguia retornar uma resposta válida antes de a demonstração local ser exercitada.",
      },
      {
        title: "QA responsivo",
        description:
          "Layouts desktop e 375 px foram revisados na experiência de entrada, evidências de insight, análise de entrevistas e Temas. A interação mobile de Temas foi alterada depois que o comportamento inicial de Canvas comprimido falhou visualmente.",
      },
      {
        title: "Revisão de implementação de acessibilidade",
        description:
          "Fluxos principais foram revisados quanto a acesso por teclado, nomes acessíveis, comportamento de diálogos, gerenciamento de foco, semântica de estados e suporte a movimento reduzido.",
      },
    ],
    pendingValidation: [
      {
        title: "Estudo de usabilidade com pesquisadores",
        description:
          "Testar se pesquisadores conseguem voltar de um insight gerado para as evidências, identificar sinais contraditórios e compreender a diferença entre estados de IA ao vivo e fallback.",
      },
      {
        title: "Calibração de confiança",
        description:
          "Avaliar se força da evidência, contagem de fontes e rótulos de IA criam confiança apropriada, em vez de excesso de confiança ou ceticismo desnecessário.",
      },
      {
        title: "Revisão de privacidade e segurança em produção",
        description:
          "Definir requisitos de retenção, acesso, consentimento, processamento de dados e governança do modelo antes de material real de pesquisa ser enviado.",
      },
      {
        title: "Testes de escala e desempenho",
        description:
          "Avaliar repositórios maiores, transcrições longas, recuperação entre estudos, densidade de agrupamentos e comportamento da geração de relatórios com conjuntos de dados próximos de produção.",
      },
    ],
    proposedSignals: [
      {
        label: "Taxa de inspeção de evidências",
        description:
          "Com que frequência pesquisadores abrem evidências vinculadas antes de aprovar ou reutilizar um achado gerado.",
      },
      {
        label: "Taxa de correção de sugestões da IA",
        description:
          "Com que frequência pesquisadores editam, rejeitam ou reagrupam sínteses assistidas por IA antes de aceitá-las.",
      },
      {
        label: "Tempo até insight validado",
        description:
          "Tempo entre a entrada do material de origem no repositório e um insight revisado por uma pessoa e pronto para uso posterior.",
      },
      {
        label: "Taxa de revisão de contradições",
        description:
          "Se evidências contraditórias são inspecionadas quando qualificam de forma relevante um insight ou oportunidade.",
      },
    ],
  },
  outcomesCurrentStatus: {
    heading: "Um protótipo funcional, não uma afirmação de impacto do produto",
    introduction:
      "O resultado atual é uma direção funcional de implementação com salvaguardas explícitas de IA, e não impacto medido para usuários ou negócio.",
    deliverables: [
      {
        title: "Arquitetura de produto orientada por evidências",
        description:
          "Um modelo conectado da evidência de origem até insight, tema, oportunidade e relatório, com vínculos de fonte preservados entre as camadas.",
      },
      {
        title: "Fluxo funcional codificado",
        description:
          "Um protótipo em React e TypeScript cobrindo navegação do repositório, análise de entrevistas, revisão de evidências, Ask AI, agrupamento, oportunidades e geração de relatórios.",
      },
      {
        title: "Salvaguardas de confiança da IA",
        description:
          "Integração Gemini no servidor, grounding em fontes, estados explícitos de IA ao vivo versus Síntese de demonstração e checkpoints de revisão humana.",
      },
      {
        title: "Padrões responsivos e acessíveis de interação",
        description:
          "Comportamento em telas estreitas, controles operáveis por teclado, gerenciamento de foco, estados semânticos e suporte a movimento reduzido nos fluxos principais.",
      },
    ],
    currentStatus: [
      { label: "Protótipo", description: "Funcional e com build testado localmente." },
      { label: "Dados de pesquisa", description: "Somente conjunto sintético para demonstração." },
      { label: "Integração de IA", description: "Conexão ao Gemini ao vivo verificada localmente, com fallback transparente." },
      { label: "Validação com usuários", description: "Pendente com profissionais reais de pesquisa." },
    ],
    evidenceNote:
      "Não são declarados adoção em produção, ganho de produtividade, score de confiança, economia de tempo ou resultado de negócio. As contagens numéricas descrevem apenas o conjunto sintético de demonstração e a cobertura do protótipo.",
  },
  learningsNextSteps: {
    heading: "O que esta exploração mudou na minha abordagem ao design de produtos com IA",
    introduction:
      "Os aprendizados mais claros vieram de três decisões concretas: manter os caminhos até as fontes visíveis, rotular o fallback com honestidade e mudar a interação mobile de Temas em vez de apenas reduzir o Canvas desktop.",
    learnings: [
      {
        title: "A confiança precisa ser projetada no modelo de evidências",
        description:
          "Se as relações com fontes não existirem na estrutura subjacente, a interface não conseguirá reconstruí-las de forma confiável depois. Os vínculos de evidência precisam existir antes das explicações visuais.",
      },
      {
        title: "O comportamento de fallback faz parte da honestidade do produto",
        description:
          "Um fallback elegante não é suficiente se ele se passar por um modelo ao vivo. O estado do sistema precisa continuar legível quando a camada de IA falha ou está intencionalmente indisponível.",
      },
      {
        title: "Contradições são informação de produto",
        description:
          "Contraevidências não devem ser tratadas como ruído a remover durante a síntese. Preservá-las muda a forma como força do insight e confiança na decisão são comunicadas.",
      },
      {
        title: "Design responsivo pode exigir mudança na interação",
        description:
          "A iteração mobile de Temas mostrou que preservar a tarefa pode ser mais importante do que preservar a mecânica do desktop.",
      },
    ],
    nextIteration: [
      {
        title: "Testar com profissionais de pesquisa",
        description:
          "Conduzir sessões moderadas sobre inspeção de fontes, revisão de contradições, compreensão do estado da IA, aprovação de insights e reatribuição de temas.",
      },
      {
        title: "Registrar correções humanas",
        description:
          "Tornar persistentes edições, rejeições e mudanças de agrupamento para que o sistema diferencie sugestões do modelo de decisões de pesquisadores ao longo do tempo.",
      },
      {
        title: "Adicionar governança de dados para produção",
        description:
          "Definir autenticação, permissões de workspace, retenção, histórico de auditoria, consentimento e controles de processamento do modelo antes de aceitar material real de pesquisa.",
      },
      {
        title: "Publicar a demonstração do portfólio com IA no servidor",
        description:
          "Hospedar a versão acessível atual com segredos protegidos no servidor para que a demonstração pública possa usar IA ao vivo sem expor a chave de API no navegador.",
      },
    ],
  },
  process: {
    research: [
      "Mapeamento do fluxo ponta a ponta de síntese qualitativa e dos pontos em que o contexto da fonte poderia se perder",
      "Definição de um conjunto de dados sintético para exercitar evidências, contradições, temas, oportunidades e estados de IA sem apresentar pesquisa fictícia como validação real",
      "Modelagem das relações entre IDs de evidência, insights, temas, oportunidades, participantes e relatórios",
      "Revisão de estados de falha da IA, requisitos de grounding em fontes, comportamento responsivo e necessidades de acessibilidade antes do QA final",
    ],
    insights: [
      "Os links de evidência precisavam permanecer como um caminho de interação visível, e não como metadados ocultos",
      "Evidências contraditórias precisavam de um estado persistente próprio ao longo da síntese",
      "Uma resposta de modelo ao vivo e uma síntese de fallback não poderiam compartilhar o mesmo sinal de confiança",
      "A revisão humana era necessária nos pontos de síntese com consequências para decisões",
      "O Canvas espacial de afinidade precisava de um comportamento mobile diferente, e não apenas ser reduzido",
    ],
    solutions: [
      "Análise de transcrições e revisão de insights conectadas às evidências",
      "Drawers com evidências de suporte e contradição e navegação direta para a fonte",
      "Estados explícitos de IA ao vivo e Síntese de demonstração",
      "Consultas assistidas por IA, sugestões de agrupamento, definição de oportunidades e geração de relatórios com saídas revisáveis",
      "Canvas de afinidade no desktop com comportamento de Lista priorizado no mobile",
      "Diálogos acessíveis, interação por teclado, atributos semânticos de estado e suporte a redução de movimento",
    ],
    validation: [
      "Verificações de build de produção e TypeScript",
      "Verificação de prontidão do Gemini com o modelo configurado",
      "QA visual em desktop e 375 px nos fluxos principais",
      "Revisão de implementação com foco em acessibilidade",
      "Validação com usuários reais permanece como próximo passo definido, e não como resultado concluído",
    ],
  },
  impact: {
    metrics: [
      { label: "Entrevistas sintéticas", detail: "Registros de pesquisa para demonstração" },
      { label: "Itens de evidência", detail: "Trechos sintéticos rastreáveis" },
      { label: "Insights aprovados", detail: "Achados de demonstração sustentados por evidências" },
      { label: "Oportunidades", detail: "Direções de produto conectadas" },
    ],
    business:
      "O projeto produziu uma direção funcional para síntese de pesquisa com IA fundamentada em evidências, incluindo modelo de dados, arquitetura de interação, comportamento responsivo, padrões de acessibilidade e estados de IA ao vivo/fallback. O impacto para usuários e negócio não foi medido porque o produto ainda não foi validado com equipes reais de pesquisa nem lançado em produção.",
  },
  learnings: [
    "UX de IA confiável começa no modelo de dados, não no texto explicativo",
    "Evidências contraditórias devem continuar visíveis quando a síntese se torna mais concisa",
    "Estados de falha da IA precisam de linguagem de produto honesta em vez de fallback invisível",
    "A revisão humana é mais valiosa nos pontos em que síntese se transforma em tomada de decisão",
    "Design responsivo de produto pode exigir mudança no modelo de interação sem mudar a tarefa",
  ],
};
