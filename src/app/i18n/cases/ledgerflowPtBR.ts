import type { CaseStudy } from "../../data/caseStudies";
import type { DeepPartial } from "../localizedCaseStudies";

export const ledgerflowPtBR: DeepPartial<CaseStudy> = {
  title: "Projetando operações contábeis multiempresa mais seguras",
  company: "LedgerFlow · SaaS contábil B2B brasileiro",
  role: "Product Designer",
  category: "Product Design · Fintech · SaaS B2B",
  projectNature:
    "Iniciativa independente de produto · Estudo pré-piloto para escritório contábil",
  team: "Projeto independente · Única Product Designer",
  scope:
    "Definição de produto ponta a ponta para um piloto em um escritório contábil brasileiro, incluindo oito sessões moderadas de usabilidade com profissionais reais, um design system reutilizável, 36 estados de produto desktop, 19 rotas mobile, fluxos clicáveis de protótipo, uma revisão dedicada de acessibilidade e regras de produto preparadas para engenharia.",
  status:
    "Protótipo clicável do produto, design system reutilizável e especificação de acessibilidade concluídos. A implementação de engenharia e o piloto controlado no escritório são os próximos passos.",
  executiveSummary: {
    heading: "Transformando a complexidade contábil em um modelo operacional mais seguro",
    summary:
      "LedgerFlow organiza o trabalho contábil multiempresa em torno dos momentos que exigem julgamento: confirmar contexto, preservar o trabalho bem-sucedido em lotes, revisar as evidências por trás de sugestões automatizadas, expor dependências e decidir quando um período está realmente pronto para fechar. Primeiro testei esse modelo de decisão com oito profissionais reais de contabilidade e BPO. Depois, ampliei os fluxos validados para um sistema de produto completo, desktop-first, com experiência mobile complementar, gates explícitos de segurança, auditabilidade e requisitos de acessibilidade incorporados ao design system.",
    metrics: [
      {
        label: "Participantes",
        detail: "Contextos reais de contabilidade e BPO",
      },
      {
        label: "Avaliações de tarefas",
        detail: "Oito fluxos críticos por participante",
      },
      {
        label: "SEQ médio",
        detail: "Facilidade percebida ao longo do estudo",
      },
      {
        label: "Detecção de conflito",
        detail: "Participantes comparáveis rejeitaram a correspondência insegura de 99%",
      },
    ],
    gate: {
      usability: "SUSTENTADO",
      release: "PENDENTE",
      explanation:
        "O estudo moderado sustentou o modelo central de decisão em telas estáticas de alta fidelidade. O produto final no Figma agora inclui as iterações pós-teste e fluxos clicáveis, mas permissões reais, processamento em segundo plano, notificações, integrações, bloqueio de período, comportamento por teclado e saída para tecnologias assistivas ainda exigem implementação e QA em produção antes do piloto no escritório.",
    },
    iteration: [
      {
        step: "Validar o modelo de decisão",
        description:
          "Testar troca de contexto, importações parciais, evidências de conciliação, risco de automação, cadeias de dependência e gates de fechamento com oito profissionais reais.",
      },
      {
        step: "Transformar os fluxos em produto",
        description:
          "Expandir os estados testados para uma arquitetura completa de aplicação com visões de portfólio, empresas, trabalho fiscal, pendências, comunicações, configurações, histórico de auditoria, rotas responsivas e fluxos de protótipo conectados.",
      },
      {
        step: "Reforçar segurança e acessibilidade",
        description:
          "Adicionar revisão obrigatória para evidências conflitantes de CNPJ, gate de ajuste para prévias de automação inseguras, continuidade de importação mais clara, fluxo de salvar e avançar, conceitos de autorização por papel, estados explícitos de foco, áreas de interação maiores e um contrato de acessibilidade para lançamento.",
      },
    ],
    participantEvidence:
      "Um participante menos experiente identificou repetidamente o próximo passo seguro, ao mesmo tempo em que reconheceu que ativação, transmissão ou bloqueio de período deveriam pertencer a um papel com maior autorização. Essa distinção se tornou uma questão de produto sobre permitir preparar o trabalho sem esconder o contexto crítico.",
  },
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
  researchDiscovery: {
    heading: "Testando as decisões de maior risco antes de expandir o produto",
    introduction:
      "Antes de transformar os fluxos em um sistema completo de produto, conduzi duas rodadas de sessões moderadas de usabilidade com oito participantes reais. O estudo investigou se a interface comunicava estados críticos com clareza e se os participantes conseguiam tomar decisões seguras ao longo do ciclo contábil.",
    methods: [
      {
        title: "Perfil dos participantes",
        description:
          "A amostra incluiu um estagiário de contabilidade, um assistente contábil, três profissionais em nível de analista ou autodeclarado sênior, dois profissionais de coordenação e BPO/controle e um participante com experiência em Consultoria Tributária e Auditoria.",
        output:
          "8 profissionais entre contextos de entrada, operação, análise, coordenação, controle, tecnologia e auditoria",
      },
      {
        title: "Recrutamento interno e estrutura do estudo",
        description:
          "Os participantes foram recrutados internamente no escritório contábil para o qual o produto é destinado. O mecanismo exato de seleção interna não foi registrado. O estudo aconteceu em duas rodadas sequenciais de quatro participantes, com aproximadamente 50 a 60 minutos por sessão. As rodadas não foram um teste A/B.",
        output:
          "2 rodadas · 4 participantes por rodada · aproximadamente 50–60 minutos por sessão",
      },
      {
        title: "Sessões moderadas de usabilidade",
        description:
          "Os participantes analisaram telas estáticas de alta fidelidade enquanto narravam o que fariam, quais evidências verificariam e em que momento escalariam uma decisão.",
        output: "8 sessões concluídas em 8 fluxos críticos",
      },
      {
        title: "Cenários de risco crítico",
        description:
          "As tarefas incluíram intencionalmente risco de entidade errada, resultados parciais em lote, uma sugestão perigosa de conciliação com 99% de confiança, uma regra de automação ampla demais, bloqueadores de dependência e um gate de fechamento com evidência sem suporte.",
        output: "Padrões de decisão observados sobre segurança, evidência e escalonamento",
      },
      {
        title: "SEQ após cada tarefa",
        description:
          "Os participantes avaliaram a facilidade percebida de cada tarefa em uma escala de 1 a 7. O SEQ foi utilizado como sinal descritivo de usabilidade, e não como evidência de velocidade em produção ou eficiência operacional.",
        output: "SEQ médio de 6,94 / 7 em 64 avaliações de tarefas",
      },
    ],
    limitations: [
      "Telas estáticas validaram compreensão e ações pretendidas, não o comportamento funcional da interação.",
      "Atalhos de teclado, entrega de notificações, processamento em segundo plano, mudanças automáticas de estado, aplicação de papéis e bloqueio de período não foram tecnicamente testados no estudo.",
      "Alertas explícitos e estados desabilitados validam a compreensão de salvaguardas visíveis, não a descoberta independente de riscos ocultos.",
      "P01 recebeu um estímulo T5B anterior e ambíguo, portanto a comparação corrigida de conciliação perigosa utiliza apenas P02 a P08.",
      "O sistema final de produto inclui iterações pós-teste que não fizeram parte dos estímulos originais da pesquisa e, portanto, não são apresentadas como comportamento validado pela pesquisa.",
    ],
  },
  keyFindings: {
    heading: "A pesquisa orientou o produto para evidências, não para volume de automação",
    introduction:
      "O padrão mais forte não foi um pedido por mais automação. Os participantes recorreram de forma consistente a contexto, evidências, consequências visíveis e rastreabilidade antes de decisões de alto impacto. Esses comportamentos se tornaram a base do sistema final de produto.",
    findings: [
      {
        title: "Contexto faz parte da segurança contábil",
        evidence:
          "Os participantes verificaram repetidamente empresa, filial, CNPJ e competência antes de continuar. Nenhum participante pretendeu executar uma ação crítica na entidade errada durante o fluxo testado de troca de contexto.",
        consequence:
          "O contexto da entidade não pode ser tratado como metadado secundário de navegação no trabalho multiempresa.",
        implication:
          "O produto final mantém empresa, filial, CNPJ, código interno e competência visíveis em torno de fluxos críticos e oferece estados dedicados de troca de contexto.",
      },
      {
        title: "O sucesso parcial precisa continuar útil",
        evidence:
          "Os participantes entenderam o resultado de importação 288 de 300 e evitaram de forma consistente reprocessar o lote inteiro quando apenas 12 registros precisavam de atenção.",
        consequence:
          "Um pequeno conjunto de exceções não deveria invalidar um trabalho já concluído com sucesso.",
        implication:
          "O produto preserva registros bem-sucedidos, mostra o progresso de processamento, separa itens que exigem atenção e direciona o usuário diretamente ao tratamento de exceções.",
      },
      {
        title: "Evidência precisa ter mais peso do que a confiança da IA",
        evidence:
          "Com o estímulo corrigido, 7/7 participantes comparáveis, de P02 a P08, rejeitaram uma sugestão de conciliação com 99% de confiança depois de perceber que o movimento bancário e o documento tinham CNPJs diferentes.",
        consequence:
          "A confiança pode priorizar a revisão, mas nunca deve substituir evidências inspecionáveis.",
        implication:
          "O produto final mantém as evidências lado a lado e adiciona um gate pós-teste de revisão obrigatória quando há conflito crítico de identidade.",
      },
      {
        title: "Automação precisa mostrar suas consequências antes de ser ativada",
        evidence:
          "Os oito participantes recusaram ou recomendaram não ativar a regra quando a prévia mostrou explicitamente que uma regra ampla também capturaria uma transação de manutenção de equipamento de R$ 1.850.",
        consequence:
          "Uma regra pode corresponder ao padrão textual e ainda assim estar errada em significado contábil.",
        implication:
          "O fluxo final expõe condições, escopo, impacto, correspondências não intencionais e um gate pós-teste de ajuste antes da ativação, além de monitoramento após as regras entrarem em operação.",
      },
      {
        title: "A prioridade muda quando as dependências mudam",
        evidence:
          "Os participantes combinaram prazo, consequência, bloqueador, dependência e estado atual. Eles repriorizaram o trabalho quando uma dependência passou de bloqueada para acionável.",
        consequence:
          "A prioridade operacional é dinâmica e não pode ser reduzida apenas ao prazo.",
        implication:
          "Obrigações, pendências, responsáveis, dependências e estados atuais permanecem visíveis em toda a estrutura operacional, em vez de ficarem isolados em telas separadas.",
      },
      {
        title: "Fechamento é uma camada de controle, não um botão final",
        evidence:
          "Os participantes rastrearam um valor da DRE até sua composição e um lançamento manual sem suporte, então recusaram o fechamento enquanto o problema crítico permanecia visivelmente sem solução.",
        consequence:
          "O fechamento é o ponto em que evidências, exceções, obrigações e responsabilização convergem.",
        implication:
          "O produto final inclui detalhamento de relatórios, estados críticos de fechamento, estado pronto para bloqueio, período bloqueado e governança explícita de reabertura.",
      },
    ],
  },
  designStrategy: {
    heading: "Um modelo de produto construído em torno do julgamento profissional",
    introduction:
      "Reformulei a experiência: em vez de processar todos os itens da mesma forma, o produto ajuda profissionais a identificar o que é rotineiro, incerto, bloqueado ou consequente, mantendo a automação questionável e os caminhos de recuperação visíveis.",
    principles: [
      {
        title: "Contexto antes da ação",
        explanation:
          "Usuários devem saber exatamente qual entidade, filial e período uma decisão afetará antes de agir.",
        problemAddressed: "Risco de empresa ou período errado",
        influence: "Contexto persistente da entidade e troca explícita de contexto",
      },
      {
        title: "Exceções antes do volume",
        explanation:
          "O trabalho bem-sucedido deve continuar avançando enquanto exceções são isoladas para revisão.",
        problemAddressed: "Tratamento de lote tudo ou nada",
        influence: "Estados de sucesso parcial, filtros, filas e fluxo de salvar e avançar",
      },
      {
        title: "Evidência antes da confiança",
        explanation:
          "Recomendações automatizadas precisam continuar questionáveis por meio de evidências inspecionáveis.",
        problemAddressed: "Dependência excessiva de scores de confiança da IA",
        influence: "Evidências lado a lado e revisão obrigatória para conflitos críticos de identidade",
      },
      {
        title: "Automatizar a certeza",
        explanation:
          "Ações recorrentes só devem se tornar automáticas depois que usuários puderem inspecionar o escopo e o impacto provável.",
        problemAddressed: "Falsos positivos causados por regras de automação amplas",
        influence: "Prévia de impacto, gate de ajuste e monitoramento após ativação",
      },
      {
        title: "Manter pessoas no controle",
        explanation:
          "Decisões de alto impacto precisam de caminhos claros de revisão, autorização, escalonamento e recuperação.",
        problemAddressed: "Ações opacas ou irreversíveis do sistema",
        influence: "Gates de revisão, conceitos de permissão, confirmações, reversões e fluxos de reabertura",
      },
      {
        title: "Preservar rastreabilidade",
        explanation:
          "Corrigir uma decisão deve alterar o estado atual sem apagar seu histórico.",
        problemAddressed: "Perda do contexto de auditoria após reversões",
        influence: "Eventos de auditoria preservam ação, autor, momento, motivo e decisões anteriores",
      },
      {
        title: "Fechamento é a espinha dorsal",
        explanation:
          "Os números finais precisam permanecer conectados às evidências e dependências que os sustentam.",
        problemAddressed: "Fechamento como estado final desconectado",
        influence: "Detalhamento da DRE, checklist de fechamento, bloqueio de período e reabertura controlada",
      },
    ],
  },
  informationArchitecture: {
    heading: "Dos fluxos testados a um sistema completo de operações contábeis",
    introduction:
      "A arquitetura final conecta gestão de portfólio, processamento diário, dependências, comunicação, relatórios, governança e fechamento dentro de um contexto persistente de empresa e competência.",
    previousStructure: [
      "Transações e dados bancários tratados como tarefas isoladas de processamento",
      "Documentos desconectados dos valores que sustentam",
      "Obrigações priorizadas principalmente por data",
      "Relatórios consumidos principalmente como saídas finais",
      "Fechamento tratado como etapa administrativa final",
    ],
    proposedStructure: [
      "Visão geral e Empresas para contexto de portfólio e entidade",
      "Importações e Exceções para processamento e correção em lote",
      "Conciliação para revisão baseada em evidências e decisões reversíveis",
      "Fiscal e Obrigações para dependências e prazos",
      "Pendências e Comunicações para acompanhamento operacional entre módulos",
      "Automação para regras, prévia e monitoramento",
      "Relatórios para DRE, composição, lançamentos e evidências de origem",
      "Fechamento para verificações críticas, bloqueio e reabertura",
      "Configurações e Auditoria para papéis, políticas e rastreabilidade",
    ],
    mainFlow: [
      "Coletar",
      "Validar",
      "Importar",
      "Mapear",
      "Conciliar",
      "Resolver exceções",
      "Revisar",
      "Fechar",
      "Bloquear",
      "Reportar",
      "Rastrear",
    ],
    decisions: [
      {
        title: "Não impor uma prioridade universal de exceções",
        description:
          "Cinco participantes começaram pelas inconsistências e três pelos problemas de mapeamento. Em vez de transformar a maioria em uma ordem fixa de fila, o produto final expõe filtros, volume, impacto, dependência, valor e consequência para que profissionais possam priorizar a partir do contexto.",
      },
      {
        title: "Separar visibilidade de autoridade",
        description:
          "O participante menos experiente frequentemente compreendeu a ação correta, mas considerou ativação final, transmissão ou bloqueio de período fora de sua autoridade. Por isso, o produto explora Preparar → Revisar → Aprovar como modelo de permissão, em vez de esconder o fluxo de papéis menos autorizados.",
      },
    ],
  },
  redesignedExperience: {
    heading: "Cinco momentos de alto risco sustentam um sistema de produto mais amplo",
    introduction:
      "O protótipo final agora cobre a operação contábil mais ampla, mas a narrativa do produto continua centrada nas decisões em que clareza e segurança são mais importantes.",
    solutions: [
      {
        title: "01 · Contexto antes da ação",
        problem:
          "Trocas frequentes entre empresas e filiais podem gerar erros silenciosos de contexto.",
        response:
          "Manter empresa, filial, CNPJ, código interno e competência visíveis antes e depois da troca de contexto e carregar esse contexto por toda a estrutura do produto.",
        intendedEffect:
          "Apoiar um hábito explícito de verificação antes de importações, conciliação, trabalho fiscal, relatórios e fechamento.",
      },
      {
        title: "02 · Exceções antes do volume",
        problem:
          "Poucos registros problemáticos podem criar retrabalho desnecessário quando o processamento em lote é tratado como tudo ou nada.",
        response:
          "Preservar registros processados com sucesso, explicar o processamento em segundo plano, isolar itens que exigem atenção e apoiar resolução repetitiva com fluxo de salvar e avançar.",
        intendedEffect:
          "Manter o trabalho válido avançando enquanto direciona o esforço humano para as exceções.",
      },
      {
        title: "03 · Evidência antes da confiança",
        problem:
          "Um alto score de confiança da IA pode parecer definitivo mesmo quando um identificador crítico está em conflito.",
        response:
          "Mostrar o movimento bancário e o documento sugerido lado a lado e direcionar conflitos críticos de identidade para um estado de revisão obrigatória, em vez de um caminho normal de aprovação.",
        intendedEffect:
          "Tornar a confiança útil para triagem sem permitir que ela substitua a evidência contábil.",
      },
      {
        title: "04 · Prever e governar a automação",
        problem:
          "Regras amplas podem automatizar ao mesmo tempo um padrão textual válido e um significado contábil inválido.",
        response:
          "Exibir o impacto histórico antes da ativação, exigir ajuste quando um falso positivo já estiver visível e continuar a governança com monitoramento, substituições, pausa e estados de revisão.",
        intendedEffect:
          "Tornar a automação mais segura antes e depois da ativação.",
      },
      {
        title: "05 · Rastrear antes de fechar",
        problem:
          "Um relatório consolidado pode parecer completo enquanto um lançamento subjacente continua sem suporte.",
        response:
          "Conectar DRE, composição, lançamento, evidência, bloqueadores de fechamento, estado pronto, bloqueio do período, histórico de auditoria e reabertura controlada.",
        intendedEffect:
          "Transformar o fechamento em uma decisão rastreável sustentada por evidências, em vez de um simples clique final.",
      },
    ],
    prototypeCoverage: [
      "Visão geral do portfólio, empresas, filiais e contexto persistente de competência",
      "Importações, processamento, resultados parciais, filas de exceção e escopo DE-PARA",
      "Sugestões de conciliação, revisão, gate de segurança, reversão e histórico de auditoria",
      "Regras de automação, prévia de impacto, gate de ajuste, monitoramento de ativação e controles",
      "Visão fiscal, obrigações, cadeias de dependência, pendências e comunicações",
      "DRE, composição, detalhe do lançamento contábil, evidências de suporte, fechamento, bloqueio e reabertura",
      "36 estados desktop mais 19 rotas mobile conectadas nos fluxos do protótipo no Figma",
      "Design system reutilizável, padrões responsivos e especificação dedicada de acessibilidade",
    ],
  },
  visualEvidence: {
    heading: "O case final reflete o sistema de produto construído depois da pesquisa",
    introduction:
      "A interface do produto permanece em português porque LedgerFlow foi projetado para o contexto de um escritório contábil brasileiro. As evidências visuais priorizam desktop porque os fluxos operacionais críticos do piloto são desktop-first. As 19 rotas mobile complementares continuam disponíveis no protótipo clicável do Figma e são documentadas como cobertura de design, não como validação de pesquisa. Os achados da pesquisa são apresentados separadamente para que gates de segurança e trabalho de productização posteriores aos testes não sejam retroativamente apresentados como comportamento validado.",
    groups: [
      {
        title: "O contexto multiempresa permanece visível antes de o trabalho começar",
        description:
          "A visão de portfólio torna visíveis em todo o escritório o progresso de fechamento, prazos, bloqueadores, responsáveis, risco e contexto da empresa ativa. A troca de contexto então expõe empresa, filial, CNPJ, código interno e competência antes que o usuário altere onde está trabalhando.",
        images: [
          {
            alt: "Visão geral do portfólio LedgerFlow em português mostrando múltiplas empresas, progresso de fechamento, prazos, bloqueadores, responsáveis, níveis de risco e o contexto da empresa ativa.",
            caption: "A visão de portfólio transforma o fechamento multiempresa em uma fila operacional, desktop.",
          },
          {
            alt: "Seletor de empresa do LedgerFlow em português listando empresas e filiais com CNPJ, códigos internos e competência ativa.",
            caption: "A troca de contexto expõe os detalhes da entidade que importam antes de mudar de empresa, desktop.",
          },
        ],
      },
      {
        title: "O sucesso parcial mantém o trabalho válido avançando",
        description:
          "O processamento de importação separa progresso de conclusão e torna visível o estado de cada fonte. Quando o lote termina, registros bem-sucedidos permanecem disponíveis enquanto apenas as exceções seguem para revisão. O mapeamento repetitivo torna explícito o escopo da correção, em vez de transformar silenciosamente uma classificação em uma regra futura.",
        images: [
          {
            alt: "Tela de processamento de importação do LedgerFlow em português mostrando um lote de 300 registros, 74 por cento de progresso, registros processados, estados individuais das fontes e ação para continuar trabalhando.",
            caption: "O processamento em segundo plano comunica o progresso e permite continuar trabalhando, desktop.",
          },
          {
            alt: "Resultado parcial de importação do LedgerFlow em português mostrando 288 registros processados com sucesso, 12 exigindo atenção, zero falhas totais, exceções categorizadas e histórico de importação.",
            caption: "O sucesso parcial preserva 288 registros válidos e direciona 12 exceções para revisão, desktop.",
          },
          {
            alt: "Tela de mapeamento DE-PARA do LedgerFlow em português para VIVO S.A., mostrando contexto de suporte, conta contábil sugerida e escolhas explícitas de escopo para um item, itens semelhantes do lote ou transações futuras.",
            caption: "Classificação e escopo da correção são decisões separadas, desktop.",
          },
        ],
      },
      {
        title: "A evidência é mais forte do que um score de confiança",
        description:
          "A revisão de conciliação coloca o movimento bancário e o documento sugerido lado a lado. Neste exemplo de alta confiança, valor e data coincidem, mas os CNPJs não. O fluxo final no Figma mantém essa evidência visível e adiciona um gate pós-teste de revisão obrigatória quando há conflito crítico de identidade.",
        images: [
          {
            alt: "Revisão de conciliação do LedgerFlow em português mostrando sugestão com 99 por cento de confiança, valor e data coincidentes e CNPJs diferentes destacados entre o movimento bancário e o documento sugerido.",
            caption: "Uma sugestão de 99% continua revisável porque a divergência de CNPJ permanece visível, desktop.",
          },
        ],
      },
      {
        title: "A automação mostra as consequências antes da ativação",
        description:
          "A prévia de uma regra reúne condição, escopo, correspondências esperadas e uma correspondência não intencional de manutenção de equipamento na mesma superfície de decisão. O protótipo final direciona um falso positivo conhecido de volta para ajuste, em vez de tratar a ativação como o próximo passo normal.",
        images: [
          {
            alt: "Prévia de impacto da automação do LedgerFlow em português mostrando correspondências recorrentes de tarifas bancárias e um estado de atenção para uma transação de manutenção de equipamento de R$ 1.850 que seria capturada pela regra ampla.",
            caption: "A prévia de impacto torna a correspondência não intencional visível antes que a regra entre em operação, desktop.",
          },
        ],
      },
      {
        title: "As dependências mudam o que merece atenção em seguida",
        description:
          "As obrigações são apresentadas como uma cadeia de dependências, e não como uma lista isolada de prazos. Quando a EFD-Reinf é concluída, a DCTFWeb fica disponível para revisão e a próxima ação muda sem perder o contexto fiscal e de fechamento ao redor.",
        images: [
          {
            alt: "Tela de obrigações e dependências do LedgerFlow em português mostrando eSocial e EFD-Reinf concluídos, DCTFWeb liberada para revisão, fechamento ainda pendente, prazos, impactos, dependências e responsáveis.",
            caption: "Estado da dependência e consequência aparecem ao lado de prazos e responsáveis, desktop.",
          },
        ],
      },
      {
        title: "O fechamento permanece conectado às evidências por trás dos números",
        description:
          "O detalhamento do relatório expõe os lançamentos individuais que compõem uma linha da DRE e marca claramente o ajuste AJ-0717-204 sem suporte. Depois que as evidências obrigatórias e outras validações são concluídas, o estado de fechamento explica o que significa bloquear o período e mantém visíveis a auditoria e a governança de reabertura.",
        images: [
          {
            alt: "Tela de composição da DRE do LedgerFlow em português mostrando quatro lançamentos que compõem Serviços de terceiros e destacando AJ-0717-204 como sem documento de suporte.",
            caption: "A composição da DRE rastreia um valor consolidado até o lançamento contábil sem suporte, desktop.",
          },
          {
            alt: "Tela de fechamento do LedgerFlow em português mostrando todas as validações obrigatórias concluídas, período pronto para bloqueio, informações de governança e ação Fechar e bloquear.",
            caption: "O estado pronto para fechamento torna explícitas a decisão de bloqueio e sua governança, desktop.",
          },
        ],
      },
    ],
  },
  designSystemAccessibility: {
    heading: "Acessibilidade faz parte do sistema de produto, não de uma auditoria final",
    introduction:
      "Depois de expandir o LedgerFlow além dos estímulos da pesquisa, formalizei a linguagem visual em fundamentos e componentes reutilizáveis e conduzi uma revisão dedicada de acessibilidade no produto desktop e mobile. A acessibilidade é tratada como um contrato de lançamento que acompanha o produto até a engenharia, e não como uma verificação visual no fim.",
    foundations: [
      {
        title: "Tokens semânticos de design",
        description:
          "Duas coleções de variáveis separam primitivos de papéis semânticos de cor, espaçamento, raio, dimensionamento, ação, status, texto, borda e navegação para que a implementação preserve significado, em vez de copiar valores isolados.",
      },
      {
        title: "Hierarquia legível",
        description:
          "Fundamentos de tipografia, espaçamento, raio e elevação sustentam informações financeiras densas sem tornar metadados indistinguíveis de ações, bloqueadores ou evidências.",
      },
      {
        title: "Estrutura responsiva de produto",
        description:
          "O mesmo modelo operacional é expresso em 36 estados desktop e 19 rotas mobile, com o mobile focado em triagem, revisão, aprovação e acompanhamento, em vez de reduzir tabelas desktop para caber em um telefone.",
      },
    ],
    components: [
      "Botão e Botão de ícone",
      "Input, Busca e Select",
      "Tag de status e Chip de filtro",
      "Item de navegação",
      "Card e Painel",
      "Cabeçalho e linha de tabela",
      "Alerta e Progresso",
      "Item de checklist",
      "Evento de auditoria",
      "Estado vazio",
      "Paginação",
      "Modal e Drawer",
    ],
    accessibility: [
      {
        title: "O significado nunca depende apenas da cor",
        description:
          "Estados de risco, sucesso, atenção, bloqueio e conclusão combinam cor com rótulos explícitos e texto contextual. Estados críticos de fechamento e conciliação explicam o motivo, não apenas a severidade visual.",
      },
      {
        title: "Estados de foco pertencem à API do componente",
        description:
          "Botões, botões de ícone, itens de navegação, chips, paginação, inputs, busca e selects incluem variantes explícitas de foco para que a visibilidade por teclado seja projetada antes da implementação.",
      },
      {
        title: "Tamanho de alvo e tipografia foram corrigidos no nível do sistema",
        description:
          "A revisão de acessibilidade não deixou texto de produto abaixo da referência interna de 12 px e ampliou 450 alvos do protótipo desktop e 92 do mobile para as áreas mínimas internas: 32 px no desktop e 44 px no mobile.",
      },
      {
        title: "O handoff inclui comportamento não visual",
        description:
          "A especificação de acessibilidade documenta ordem lógica por teclado, gerenciamento de foco em diálogos, nomes para leitores de tela, tabelas financeiras semânticas, anúncios de status assíncrono, zoom e reflow, redução de movimento e a regra de nome acessível para o logo LedgerFlow.",
      },
    ],
    limitation:
      "O Figma pode verificar contraste visual, tamanho de alvo, design de estados de foco, hierarquia e comportamento esperado, mas não consegue comprovar HTML semântico, ordem real de Tab, contenção de foco, saída de live regions, comportamento de leitores de tela, zoom/reflow do navegador ou aplicação de permissões. Esses continuam sendo gates obrigatórios de implementação e QA antes que o piloto possa ser considerado acessível.",
  },
  usabilityValidation: {
    heading: "Evidências da pesquisa e o que mudou depois",
    introduction:
      "O estudo ofereceu forte suporte qualitativo ao modelo de decisão. O produto final então incorporou sinais recorrentes de usabilidade e gates adicionais de segurança, mantendo essas mudanças pós-teste separadas das afirmações originais da pesquisa.",
    studyMetrics: [
      { label: "Participantes", detail: "Duas rodadas moderadas" },
      { label: "Avaliações de tarefas", detail: "Oito fluxos cada" },
      { label: "SEQ médio", detail: "Facilidade percebida" },
      { label: "Assistências críticas do moderador", detail: "Em todo o estudo" },
    ],
    iteration: [
      {
        title: "Iteração final no Figma: salvar e continuar em exceções repetitivas",
        description:
          "Uma expectativa recorrente era salvar uma classificação e seguir diretamente para o próximo item não resolvido. O produto final adiciona um padrão mais rápido para trabalho repetitivo sem alterar o modelo de decisão.",
      },
      {
        title: "Iteração final no Figma: continuidade de importação e retorno assíncrono mais claros",
        description:
          "Os estados finais de importação esclarecem lotes anteriores, risco de duplicidade, processamento em segundo plano e onde o resultado concluído continuará disponível depois que o usuário seguir trabalhando.",
      },
      {
        title: "Iteração final no Figma: gates de revisão mais fortes",
        description:
          "Uma divergência de CNPJ agora direciona para revisão obrigatória, enquanto uma prévia de automação com falso positivo conhecido retorna para ajuste, em vez de seguir para ativação normal.",
      },
      {
        title: "Iteração final no Figma: auditoria e governança após ativação",
        description:
          "O produto agora inclui histórico de auditoria com motivo, monitoramento de regras, conceitos de pausar/editar, estado de período bloqueado e fluxos de reabertura controlada.",
      },
      {
        title: "Iteração final no Figma: revisão de acessibilidade",
        description:
          "Estados de foco, tamanhos de alvo, referências de texto operacional, verificações de contraste, comunicação de status sem depender de cor e um contrato de QA de acessibilidade para produção foram formalizados depois que o sistema central de produto foi montado.",
      },
    ],
    routeResults: [
      {
        route: "T1 · Priorizar fechamento",
        startingPoint: "Dashboard de fechamento",
        directSuccess: "Validado com iteração",
        averageTime: "Não medido",
      },
      {
        route: "T2 · Trocar empresa e filial",
        startingPoint: "Entidade ativa",
        directSuccess: "Validado",
        averageTime: "Não medido",
      },
      {
        route: "T3 · Importação em lote e sucesso parcial",
        startingPoint: "Nova importação",
        directSuccess: "Validado com iteração",
        averageTime: "Não medido",
      },
      {
        route: "T4 · Resolver exceções e escopo de correção",
        startingPoint: "Fila DE-PARA",
        directSuccess: "Validado",
        averageTime: "Não medido",
      },
      {
        route: "T5 · Revisar conciliação com IA",
        startingPoint: "Fila de sugestões",
        sessions: "8 no total, 7 comparáveis no T5B corrigido",
        directSuccess: "Validado com ressalva sobre o estímulo",
        averageTime: "Não medido",
      },
      {
        route: "T6 · Criar uma regra de automação",
        startingPoint: "Regras de automação",
        directSuccess: "Validado",
        averageTime: "Não medido",
      },
      {
        route: "T7 · Gerenciar obrigações e dependências",
        startingPoint: "Obrigações",
        directSuccess: "Validado",
        averageTime: "Não medido",
      },
      {
        route: "T8 · Rastrear um valor da DRE e fechar o período",
        startingPoint: "DRE Jul/2026",
        directSuccess: "Validado",
        averageTime: "Não medido",
      },
    ],
    conclusion:
      "O estudo sustentou fortemente o modelo de decisão do produto: participantes usaram contexto, evidências, exceções, dependências e estados visíveis de fechamento para determinar o que exigia atenção. O produto final no Figma agora expressa esse modelo em um sistema operacional mais amplo, mas velocidade em produção, aplicação técnica, comportamento assíncrono e taxas reais de erro continuam não medidos.",
    governance:
      "Comparações críticas são apresentadas de forma conservadora. P01 é excluída da comparação corrigida de conciliação de 99% porque recebeu um estímulo anterior ambíguo. Alertas explícitos e estados desabilitados são tratados como evidência de compreensão. Gates de segurança pós-teste e telas ampliadas do produto são apresentados como iterações de design, não como comportamento retroativamente validado.",
  },
  validationNextSteps: {
    heading: "O que o piloto no escritório precisa comprovar em seguida",
    introduction:
      "O protótipo clicável no Figma resolve a estrutura do produto, mas as próximas perguntas de pesquisa dependem de uma aplicação funcional e de condições operacionais reais.",
    completedReviews: [
      {
        title: "Compreensão do contexto da entidade",
        description:
          "Os participantes verificaram de forma consistente empresa, filial, CNPJ e período antes de continuar.",
      },
      {
        title: "Conciliação baseada em evidências",
        description:
          "P02 a P08 rejeitaram a sugestão perigosa corrigida de 99% quando as evidências de CNPJ entraram em conflito.",
      },
      {
        title: "Compreensão da prévia de automação",
        description:
          "Todos os participantes recusaram ou recomendaram não ativar depois que a prévia expôs explicitamente uma correspondência não intencional.",
      },
      {
        title: "Compreensão do gate de fechamento",
        description:
          "Nenhum participante pretendeu fechar enquanto o lançamento crítico sem suporte permaneceu visivelmente sem solução.",
      },
    ],
    pendingValidation: [
      {
        title: "Preparar, revisar e aprovar com base em papéis",
        description:
          "Validar o modelo de permissão proposto com o escritório piloto e testar se ampla visibilidade pode coexistir com execução restrita de alto impacto sem desacelerar a colaboração.",
      },
      {
        title: "Eficiência em trabalho repetitivo",
        description:
          "Medir tempo real de tratamento, correções e fadiga nos fluxos de salvar e avançar e por teclado em filas maiores de exceções.",
      },
      {
        title: "Comportamento do processamento assíncrono",
        description:
          "Validar jobs reais de importação, notificações, caminhos de retorno, liberação parcial, recuperação de erros e persistência de estado depois que usuários saem do fluxo.",
      },
      {
        title: "Qualidade da automação após ativação",
        description:
          "Medir falsos positivos, substituições, degradação de regras, comportamento de monitoramento e decisões seguras de pausa ou edição depois que a automação estiver ativa.",
      },
      {
        title: "Acessibilidade no produto funcional",
        description:
          "Executar QA somente por teclado, com leitor de tela, zoom/reflow do navegador, gerenciamento de foco e anúncios dinâmicos, seguido de testes com pessoas que utilizam tecnologias assistivas.",
      },
    ],
    proposedSignals: [
      {
        label: "Ações no contexto errado",
        description:
          "Medir erros reais de entidade sob verificações de contexto no servidor, e não apenas decisões pretendidas.",
      },
      {
        label: "Vazão de exceções",
        description:
          "Medir tempo, etapas, correções e fadiga no tratamento repetitivo de exceções.",
      },
      {
        label: "Aceitação de automação insegura",
        description:
          "Medir falsos positivos ocultos e correções pós-ativação, e não apenas reações a avisos explícitos na prévia.",
      },
      {
        label: "Recuperação do fechamento",
        description:
          "Testar bloqueio real, reabertura, permissões, justificativa, histórico de auditoria e recuperação posterior.",
      },
    ],
  },
  outcomesCurrentStatus: {
    heading: "Um sistema de produto sustentado por pesquisa e pronto para implementação",
    introduction:
      "LedgerFlow avançou além de um conjunto de telas de teste de usabilidade. O design atual inclui uma estrutura operacional completa, fluxos conectados de protótipo, design system reutilizável, requisitos de acessibilidade e regras preparadas para engenharia na próxima fase de implementação.",
    deliverables: [
      {
        title: "Arquitetura operacional completa",
        description:
          "Portfólio, empresas, importações, exceções, conciliação, trabalho fiscal, obrigações, pendências, comunicações, automação, relatórios, fechamento, configurações, permissões e histórico de auditoria estão conectados por um único contexto ativo de empresa e competência.",
      },
      {
        title: "Protótipo clicável e responsivo",
        description:
          "36 estados de produto desktop e 19 rotas mobile estão conectados no Figma, incluindo overlays de revisão, confirmação de fechamento, reabertura e gates de segurança pós-teste.",
      },
      {
        title: "Design system e contrato de acessibilidade",
        description:
          "Tokens reutilizáveis, componentes, estados de foco, referências de tamanho de alvo, convenções de status, regras responsivas e um gate de QA de acessibilidade sustentam um handoff consistente para código.",
      },
      {
        title: "Evidências de usabilidade moderada",
        description:
          "Oito participantes reais, 64 avaliações de tarefas, SEQ por tarefa, achados de risco crítico, ressalvas metodológicas e separação explícita entre comportamento testado e iterações posteriores do produto.",
      },
    ],
    currentStatus: [
      {
        label: "Design de produto",
        description: "Concluído para o protótipo atual do piloto e design system documentado.",
      },
      {
        label: "Pesquisa",
        description: "Modelo central de decisão avaliado de P01 a P08; adições pós-teste permanecem como iterações de design até serem revalidadas.",
      },
      {
        label: "Acessibilidade",
        description: "Revisão de acessibilidade em nível de design concluída; validação semântica e com tecnologias assistivas segue para o QA de implementação.",
      },
      {
        label: "Engenharia",
        description: "Arquitetura, modelo de dados, regras de negócio, permissões, contrato de acessibilidade e backlog do MVP estão preparados; o código da aplicação é o próximo passo.",
      },
      {
        label: "Piloto",
        description: "Planejado para um ambiente controlado de escritório contábil após implementação e QA.",
      },
    ],
    evidenceNote:
      "Não são declarados ROI, economia de tempo, redução de erros em produção, desempenho de notificações, comportamento de integrações reais, conformidade de acessibilidade ou métricas de aplicação técnica. Os resultados quantitativos de usabilidade vêm do estudo moderado, enquanto as contagens de cobertura do produto descrevem o design system e o protótipo atuais no Figma.",
  },
  learningsNextSteps: {
    heading: "Projetando para julgamento, não apenas para automação",
    introduction:
      "LedgerFlow começou como um problema de organização das operações contábeis. O processo de pesquisa e productização o reformulou como um problema de tomar decisões seguras em meio à complexidade e, então, transportar essas decisões de forma consistente por um sistema completo.",
    learnings: [
      {
        title: "Mais automação não era a principal resposta",
        description:
          "Os participantes precisaram repetidamente de melhores evidências, consequências mais claras e rastreabilidade antes de ações de alto impacto. A automação se tornou valiosa quando seu escopo e impacto permaneceram inspecionáveis.",
      },
      {
        title: "Um estado atual correto não é suficiente",
        description:
          "Fluxos contábeis precisam de histórico. Usuários devem conseguir reconstruir quem decidiu, o que mudou, por que uma reversão aconteceu e como um período bloqueado foi reaberto.",
      },
      {
        title: "Limites de papel não eliminam a necessidade de visibilidade",
        description:
          "Um participante júnior conseguiu entender e preparar trabalho crítico mesmo quando a autorização final pertencia a alguém mais experiente. Isso levou ao modelo Preparar → Revisar → Aprovar, que ainda precisa ser validado no escritório.",
      },
      {
        title: "A acessibilidade precisa viver no sistema",
        description:
          "Quando o produto se expandiu além das telas isoladas de teste, acessibilidade deixou de poder ser tratada como uma verificação visual. Foco, tamanho de alvo, handoff semântico, anúncios assíncronos, zoom e comportamento com tecnologias assistivas se tornaram requisitos de lançamento.",
      },
    ],
    nextIteration: [
      {
        title: "Construir o piloto funcional",
        description:
          "Implementar autenticação, contexto do tenant, importações, exceções, conciliação, automação, dependências, relatórios, fechamento, auditoria e aplicação de permissões sem perder o modelo do produto orientado por evidências.",
      },
      {
        title: "Revalidar em condições operacionais reais",
        description:
          "Medir vazão, erros de contexto, qualidade da automação, recuperação de fechamento, acessibilidade e colaboração por papéis em um escritório real antes de fazer afirmações de impacto em produção.",
      },
    ],
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
      { label: "Participantes", detail: "Contextos reais de contabilidade e BPO" },
      { label: "Avaliações de tarefas", detail: "Oito fluxos por participante" },
      { label: "SEQ médio", detail: "Facilidade percebida" },
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
};
