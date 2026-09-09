import type { CaseStudy } from "../data/caseStudies";
import type { DeepPartial } from "./localizedCaseStudies";

export const caseStudyPtBROverrides: Record<
  string,
  DeepPartial<CaseStudy>
> = {
  "ledgerflow-accounting-platform": {
    title: "Projetando operações contábeis multiempresa mais seguras",
    company: "LedgerFlow · SaaS contábil B2B brasileiro",
    role: "Product Designer",
    category: "Product Design · Fintech · SaaS B2B",
    projectNature:
      "Iniciativa independente de produto · Estudo pré-piloto para escritório contábil",
    team: "Projeto independente · Única Product Designer",
    scope:
      "Definição de produto ponta a ponta para um piloto em um escritório contábil brasileiro, incluindo oito sessões moderadas de usabilidade com profissionais reais, design system reutilizável, 36 estados de produto desktop, 19 rotas mobile, fluxos de protótipo clicáveis, uma revisão dedicada de acessibilidade e regras de produto preparadas para engenharia.",
    status:
      "Protótipo clicável do produto, design system reutilizável e especificação de acessibilidade concluídos. A implementação de engenharia e o piloto controlado no escritório são os próximos passos.",
    overview:
      "LedgerFlow é uma plataforma desktop-first de operações contábeis B2B para escritórios brasileiros. Ela conecta contexto multiempresa, importações, exceções, conciliação, dependências fiscais, automação, relatórios, fechamento e auditabilidade em um único modelo operacional, mantendo visíveis as evidências e os caminhos de recuperação por trás de decisões críticas.",
    challenge:
      "O trabalho contábil se torna arriscado quando dados financeiros, documentos de origem, prazos, exceções e responsabilidades ficam fragmentados entre sistemas e equipes. O desafio não era simplesmente automatizar mais trabalho. Era projetar um modelo operacional em que contexto ativo, evidências de suporte, consequências posteriores, responsabilidade e caminhos de recuperação estivessem visíveis antes de uma ação de alto impacto.",
    context: {
      businessGoal:
        "Criar uma camada operacional escalável para um escritório contábil brasileiro que mantenha o trabalho rotineiro avançando enquanto direciona a atenção humana para exceções, dependências e decisões que podem atrasar ou comprometer o fechamento.",
      constraints: [
        "O trabalho com múltiplas empresas e filiais cria risco de atuação no contexto errado",
        "Importações em lote precisam preservar registros bem-sucedidos quando apenas uma parte exige atenção",
        "IA e automação precisam apresentar evidências e consequências inspecionáveis antes da aprovação",
        "Papéis diferentes podem compreender o mesmo fluxo, mas ter autoridades diferentes para executar ações críticas",
        "O fechamento mensal precisa continuar conectado às evidências que sustentam os valores reportados",
        "A acessibilidade precisa permanecer um requisito de lançamento em fluxos financeiros densos",
        "A pesquisa utilizou telas estáticas, portanto o comportamento em produção ainda precisa de validação funcional",
      ],
      users:
        "O produto inicial foi projetado para profissionais que trabalham em escritórios contábeis brasileiros, de estagiários e assistentes a analistas, equipes fiscais, coordenadores e administradores. A rodada moderada de pesquisa concentrou-se em profissionais reais de contabilidade e BPO; fluxos voltados aos clientes e proprietários das empresas ficaram fora desta rodada de validação.",
    },
    process: {
      research: [
        "Duas rodadas de usabilidade moderada com oito participantes reais de contextos profissionais de contabilidade e BPO",
        "Oito fluxos baseados em cenários cobrindo contexto, importações, exceções, conciliação com IA, automação, dependências, relatórios e fechamento",
        "Coleta de SEQ por tarefa após cada fluxo",
        "Separação metodológica entre compreensão testada, iterações de design posteriores ao teste e comportamentos de produção ainda não implementados",
      ],
      insights: [
        "Contexto é um mecanismo de segurança no trabalho contábil multiempresa",
        "Sucesso parcial é mais útil do que reiniciar um lote válido",
        "A evidência precisa continuar inspecionável mesmo quando a confiança automatizada é alta",
        "A governança da automação começa antes da ativação e continua depois dela",
        "Dependências alteram a prioridade dinamicamente",
        "O fechamento conecta resultados financeiros às evidências e à responsabilização",
        "A acessibilidade precisa ser incorporada a sistemas operacionais densos antes da implementação",
      ],
      solutions: [
        "Contexto persistente da entidade ativa e da competência",
        "Resultados parciais de lote, roteamento de exceções e fluxo de salvar e avançar",
        "Conciliação baseada em evidências com um gate pós-teste para divergências críticas",
        "Prévia de impacto da automação, gate de ajuste e monitoramento",
        "Dependências de obrigações visíveis, filas de pendências e comunicação contextual",
        "Rastreabilidade da DRE ao lançamento, gates de fechamento, bloqueio de período e reabertura controlada",
        "Componentes reutilizáveis com estados de foco, regras de área de toque e requisitos de handoff de acessibilidade",
      ],
      validation: [
        "0 intenções de ações críticas na entidade errada durante o fluxo testado de troca de contexto",
        "7/7 participantes comparáveis, P02 a P08, rejeitaram a sugestão perigosa de conciliação com 99% de confiança",
        "8/8 recusaram ou recomendaram não ativar após a prévia explícita de automação insegura",
        "0 intenções de fechamento enquanto o bloqueador crítico visível permanecia sem solução",
        "0 assistências críticas do moderador durante o estudo",
      ],
    },
    impact: {
      metrics: [
        {
          label: "Participantes",
          detail: "Contextos reais de contabilidade e BPO",
        },
        {
          label: "Avaliações de tarefas",
          detail: "Oito fluxos por participante",
        },
        {
          label: "SEQ médio",
          detail: "Facilidade percebida",
        },
        {
          label: "Detecção de conflito",
          detail: "Participantes comparáveis rejeitaram a correspondência insegura de 99%",
        },
      ],
      business:
        "O projeto agora possui um modelo de decisão sustentado por pesquisa, uma arquitetura completa e responsiva de produto, fluxos clicáveis, requisitos de acessibilidade e uma direção de implementação preparada para engenharia para um piloto controlado em escritório contábil. O impacto no negócio permanece propositalmente não declarado até que o produto seja implementado e medido em operações reais.",
    },
    learnings: [
      "O objetivo não era automatizar o julgamento contábil, mas oferecer a esse julgamento melhor contexto, evidências e caminhos de recuperação",
      "Usabilidade com telas estáticas pode validar compreensão, mas não execução técnica, comportamento de acessibilidade ou desempenho em produção",
      "Melhorias de segurança após os testes devem ser apresentadas como iterações, não como comportamentos retroativamente validados",
      "Usuários juniores podem se beneficiar de visibilidade completa do fluxo mesmo quando a execução final é controlada por permissão",
      "Um sistema completo de produto precisa tratar acessibilidade e auditabilidade como estrutura, não decoração",
    ],
  },

  "insightflow-research-intelligence": {
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
        "Estados explícitos de IA ao vivo e síntese de demonstração",
        "Consultas assistidas por IA, sugestões de agrupamento, definição de oportunidades e geração de relatórios com saídas revisáveis",
        "Canvas de afinidade no desktop com comportamento de lista priorizado no mobile",
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
        {
          label: "Entrevistas sintéticas",
          detail: "Registros de pesquisa para demonstração",
        },
        {
          label: "Itens de evidência",
          detail: "Trechos sintéticos rastreáveis",
        },
        {
          label: "Insights aprovados",
          detail: "Achados de demonstração sustentados por evidências",
        },
        {
          label: "Oportunidades",
          detail: "Direções de produto conectadas",
        },
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
  },

  "unifatecie-student-onboarding": {
    title: "Redesenhando uma jornada estudantil fragmentada",
    company: "UniFatecie · Ecossistema de ensino superior",
    role: "Product Designer independente",
    duration: "6 semanas de fase de design",
    dates: "Maio a julho de 2026",
    category: "Product Design · UX Research",
    projectNature: "Estudo independente de redesign",
    team: "Estudo independente · Única designer",
    scope:
      "Uma auditoria do ecossistema, análise de 80 reclamações públicas, testes moderados de usabilidade, arquitetura da informação baseada em tarefas, fluxos responsivos ponta a ponta, protótipo de alta fidelidade e revalidação direcionada após iteração.",
    stakeholderReview:
      "Regras de serviço e estados do protótipo foram revisados com Atendimento ao Aluno, Secretaria Acadêmica, Financeiro, Coordenação de Polo e TI.",
    status:
      "Gate de usabilidade aprovado. O gate institucional de lançamento permanece NO-GO.",
    overview:
      "Redesenhei jornadas estudantis essenciais distribuídas entre cinco ambientes desconectados, validei o modelo de interação com oito estudantes e separei um gate de usabilidade bem-sucedido de um NO-GO institucional para lançamento.",
    challenge:
      "Para concluir tarefas acadêmicas e administrativas básicas, estudantes transitam entre Portal do Aluno, Moodle/AVA, AlunoNet/WAEWeb e Inova Carreira. Cada ambiente usa navegação, terminologia, padrões de interface e agrupamentos de tarefas diferentes. O problema resultante não é a falta de funcionalidades. É a falta de orientação e continuidade entre os sistemas.",
    context: {
      businessGoal:
        "Explorar uma camada mais clara de onboarding e orientação que possa ajudar estudantes a identificar seus próximos passos, entender onde as tarefas acontecem e transitar entre serviços acadêmicos essenciais com menos incerteza.",
      constraints: [
        "O estudo não incluiu analytics de produção, dados internos de chamados de suporte ou acesso à arquitetura técnica da instituição",
        "A amostra moderada concentrou-se em estudantes de Pedagogia EAD e semipresencial",
        "A proposta assume que as plataformas existentes e seus responsáveis operacionais permanecem, em vez de serem substituídos",
        "Tarefas acadêmicas, administrativas, de aprendizagem e carreira seguem estruturas, terminologias e responsabilidades diferentes",
        "O protótipo não está conectado a dados de produção, autenticação ou integrações, e as regras de negócio revisadas ainda exigem aprovação formal para produção",
      ],
      users:
        "O público principal são estudantes recém-matriculados aprendendo a navegar pelo ecossistema digital da instituição. Estudantes veteranos formam um público secundário para tarefas acadêmicas, administrativas e de suporte recorrentes.",
    },
    process: {
      research: [
        "Revisão ponta a ponta da jornada autenticada do estudante no Portal do Aluno, Moodle/AVA, AlunoNet/WAEWeb e Inova Carreira",
        "Análise de 80 reclamações públicas, com 77 classificadas em seis temas recorrentes de serviço",
        "Estudo moderado de usabilidade com oito estudantes completando seis cenários em contextos mobile e desktop",
        "Avaliação heurística focada em navegação, hierarquia, feedback, consistência, acessibilidade e prevenção de erros",
        "Inventário tela a tela e documentação da experiência existente",
        "Revisão institucional de regras de serviço, tempos de sincronização, estados financeiros, solicitações e requisitos da Carteirinha do Estudante",
      ],
      insights: [
        "Estudantes precisam entender o papel de cada plataforma antes de serem solicitados a navegar entre elas",
        "Rótulos inconsistentes fazem tarefas semelhantes parecerem desconectadas ou mais complexas do que são",
        "A experiência expõe limites internos de sistemas em vez de apresentar uma jornada estudantil coerente",
        "Próximos passos importantes frequentemente existem, mas não estão claramente priorizados",
        "Feedback contextual limitado aumenta a incerteza no primeiro uso",
      ],
      solutions: [
        "Experiência progressiva de onboarding organizada por objetivos do estudante, e não por sistemas internos",
        "Camada unificada de orientação explicando para que serve cada plataforma e quando utilizá-la",
        "Orientação clara dos próximos passos para tarefas acadêmicas e administrativas essenciais",
        "Terminologia e padrões de navegação consistentes em toda a jornada redesenhada",
        "Ajuda contextual, feedback de status e orientação de recuperação em momentos críticos",
        "Base compartilhada de design system para apoiar consistência em melhorias futuras",
      ],
      validation: [
        "Seis de seis tarefas aprovadas após testes moderados com oito estudantes",
        "Fluxos críticos de notas e finanças revalidados com cinco participantes e 100% de sucesso direto",
        "Carteirinha do Estudante iterada após a falha de P02 e revalidada por dois pontos de entrada separados",
        "Onze de onze sessões finais da Carteirinha concluídas diretamente, com SEQ médio 6,8",
        "Revisão responsiva e de acessibilidade visível concluída, com QA formal por tecnologia assistiva ainda pendente",
      ],
    },
    impact: {
      metrics: [
        {
          label: "Sistemas mapeados",
          detail: "Plataformas centrais do estudante",
        },
        {
          label: "Cobertura da jornada",
          value: "Ponta a ponta",
          detail: "Do acesso às tarefas essenciais do estudante",
        },
        {
          label: "Base de design",
          value: "Entre plataformas",
          detail: "Princípios compartilhados de experiência",
        },
        {
          label: "Status da validação",
          value: "Aprovado",
          detail: "Gate definido de design e usabilidade",
        },
      ],
      business:
        "O projeto estabeleceu e validou uma direção de redesign para os fluxos definidos no protótipo, criando uma base reutilizável para maior consistência entre plataformas. Resultados em produção não foram medidos porque a proposta ainda não foi implementada ou lançada.",
    },
    learnings: [
      "Onboarding em um ecossistema complexo envolve tanto orientação quanto conclusão de tarefas",
      "Estudantes não deveriam precisar entender a estrutura interna de uma instituição para usar seus serviços digitais",
      "Terminologia consistente é fundamental para confiança, compreensão e orientação",
      "Orientação progressiva pode reduzir carga cognitiva sem simplificar demais os processos acadêmicos",
      "O trabalho de design system ganha mais valor quando conectado a problemas reais de jornada entre plataformas",
    ],
  },
};
