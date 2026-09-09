import type { CaseStudy } from "../../data/caseStudies";
import type { DeepPartial } from "../localizedCaseStudies";

export const unifateciePtBR: DeepPartial<CaseStudy> = {
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
  executiveSummary: {
    heading: "Ser usável não significava estar pronto para lançamento",
    summary:
      "Estudantes dependiam de cinco ambientes desconectados para concluir tarefas acadêmicas essenciais. Auditei o ecossistema, analisei 80 reclamações públicas e testei um redesign baseado em tarefas com oito estudantes. O protótipo alcançou 95,8% de sucesso direto nas tarefas e SUS de 81,9, mas a revisão institucional revelou a decisão mais importante do projeto: aprovar o modelo de interação mantendo o lançamento bloqueado até que riscos operacionais, de segurança e de governança de dados sejam resolvidos.",
    metrics: [
      {
        label: "Evidências de pesquisa",
        detail: "reclamações públicas revisadas e 77 classificadas",
      },
      {
        label: "Estudo moderado",
        detail: "estudantes completando 48 tentativas de tarefas",
      },
      {
        label: "Sucesso direto",
        detail: "46 de 48 tentativas sem ajuda do moderador",
      },
      {
        label: "Usabilidade do sistema",
        detail: "SUS médio, acima da meta de 75",
      },
    ],
    gate: {
      usability: "GO",
      release: "NO-GO",
      explanation:
        "O modelo de interação testado atingiu seus critérios de usabilidade. A publicação ainda depende de regras institucionais, controle de acesso baseado em papéis (RBAC), Lei Geral de Proteção de Dados (LGPD), retenção, implementação, validação de acessibilidade e QA em produção.",
    },
    iteration: [
      {
        step: "Evidência",
        description:
          "P02 procurou em Solicitações, abriu Nova solicitação e não encontrou a Carteirinha do Estudante em 15 segundos. SEQ: 2/7.",
      },
      {
        step: "Decisão",
        description:
          "Tratei o desvio como evidência de arquitetura, expus a Carteirinha do Estudante como serviço e adicionei o estado Foto obrigatória e sua ação.",
      },
      {
        step: "Revalidação",
        description:
          "Home e Solicitações foram testadas como pontos de entrada separados. As 11 sessões finais foram diretas, com média de 6,2 segundos e SEQ 6,8/7.",
      },
    ],
    participantEvidence:
      "Comportamento do participante, parafraseado: procurei em Solicitações porque a Carteirinha do Estudante parecia um serviço que eu precisava solicitar.",
  },
  existingExperience: {
    heading: "Mapeando uma experiência estudantil distribuída em cinco ambientes",
    introduction:
      "A jornada do estudante atravessava cinco ambientes com modelos de navegação, terminologia, padrões visuais e comportamentos de autenticação diferentes.",
    platforms: [
      {
        name: "Site institucional",
        role:
          "Informações públicas sobre cursos e pontos de entrada para o portal do aluno organizados por modalidade.",
      },
      {
        name: "Portal do Aluno",
        role:
          "Dashboard, disciplinas atuais, informações financeiras, serviços, comunicação e atalhos para plataformas externas.",
      },
      {
        name: "Moodle / AVA",
        role:
          "Aulas, materiais de aprendizagem, atividades, progresso e notas de atividades.",
      },
      {
        name: "AlunoNet / WAEWeb",
        role:
          "Notas oficiais, frequência, registros acadêmicos, solicitações, documentos e serviços administrativos.",
      },
      {
        name: "Inova Carreira",
        role:
          "Desenvolvimento de carreira, cursos complementares e serviços relacionados à empregabilidade.",
      },
    ],
    issues: [
      {
        title: "Navegação orientada pela plataforma",
        description:
          "Estudantes precisavam identificar qual sistema era responsável por uma tarefa antes de conseguir concluí-la.",
      },
      {
        title: "Transições desconectadas",
        description:
          "Tarefas passavam por domínios, abas, interfaces e estados de autenticação diferentes sem orientação consistente.",
      },
      {
        title: "Múltiplas fontes de informação acadêmica",
        description:
          "Notas de atividades apareciam no Moodle, enquanto notas oficiais e frequência estavam no AlunoNet sem uma explicação clara da diferença.",
      },
      {
        title: "Terminologia institucional",
        description:
          "Rótulos como DIC, N1, Protocolo, AlunoNet e WAEWeb exigiam que estudantes entendessem estruturas internas antes de compreender o serviço.",
      },
      {
        title: "Feedback inconsistente do sistema",
        description:
          "Estados vazios, indisponíveis, de carregamento e de erro seguiam padrões diferentes pelo ecossistema.",
      },
      {
        title: "Roteamento de suporte pouco claro",
        description:
          "Estudantes precisavam escolher entre suporte acadêmico, assistência técnica, WhatsApp, tutores e solicitações formais sem orientação clara.",
      },
    ],
  },
  researchDiscovery: {
    heading: "Combinando evidências do ecossistema com comportamento observado dos estudantes",
    introduction:
      "A descoberta combinou mapeamento do ecossistema, análise de reclamações, testes moderados e revisão institucional para conectar problemas recorrentes de serviço a decisões específicas de design.",
    methods: [
      {
        title: "Auditoria da jornada pública e autenticada",
        description:
          "Revisei a jornada de entrada institucional e uma gravação da experiência autenticada de uma estudante de Pedagogia EAD, documentando cada plataforma visível, transição, caminho de tarefa, estado do sistema e destino externo.",
        output:
          "Um mapa do ecossistema atual conectando site institucional, Portal do Aluno, Moodle / AVA, AlunoNet / WAEWeb e Inova Carreira.",
      },
      {
        title: "Análise de reclamações públicas",
        description:
          "Revisei 80 reclamações no Reclame Aqui publicadas entre julho de 2022 e julho de 2026. Setenta e sete foram classificadas em seis temas recorrentes e três foram excluídas.",
        output:
          "Uma visão quantificada de problemas recorrentes envolvendo notas e frequência, modalidade e oferta de cursos, financeiro, documentos, acesso a plataformas e suporte.",
      },
      {
        title: "Estudo moderado de usabilidade",
        description:
          "Oito estudantes de Pedagogia EAD e semipresencial completaram seis cenários baseados em tarefas em contextos mobile, desktop e de alternância entre dispositivos. Registrei sucesso direto, tempo, SEQ, erros, comportamento de recuperação e SUS.",
        output:
          "Quarenta e oito tentativas de tarefas, 95,8% de sucesso direto, SEQ médio 6,4 e SUS médio 81,9.",
      },
      {
        title: "Revisão heurística, de conteúdo e acessibilidade",
        description:
          "Avaliei navegação, terminologia, hierarquia, feedback do sistema, prevenção de erros, comportamento responsivo, riscos visíveis de acessibilidade e padrões de recuperação na experiência existente e no protótipo.",
        output:
          "Backlog priorizado de problemas, auditoria de terminologia, inventário de componentes e recomendações de acessibilidade.",
      },
      {
        title: "Mapeamento da jornada e arquitetura da informação",
        description:
          "Conectei entrada pública, autenticação, aulas, notas, tarefas financeiras, documentos, solicitações e suporte, depois reorganizei a navegação em torno dos objetivos dos estudantes em vez dos nomes das plataformas.",
        output:
          "Jornadas atuais e propostas, modelo de serviços baseado em tarefas e fluxos prioritários para prototipação.",
      },
      {
        title: "Revisão de regras institucionais",
        description:
          "Regras do protótipo e estados de serviço foram revisados com Atendimento ao Aluno, Secretaria Acadêmica, Financeiro, Coordenação de Polo e TI, incluindo tempo de notas oficiais, estados financeiros, solicitações e requisitos da Carteirinha do Estudante.",
        output:
          "Regras operacionais validadas para o protótipo e uma lista explícita de bloqueadores de segurança, permissões, LGPD, retenção e implementação.",
      },
    ],
    limitations: [
      "A amostra moderada focou estudantes de Pedagogia EAD e semipresencial e não deve ser generalizada para todas as modalidades ou cursos",
      "Reclamações públicas revelam problemas recorrentes de serviço, mas não representam toda a população estudantil",
      "Não estavam disponíveis analytics de produção, dados de retenção ou dados internos de chamados de suporte",
      "A auditoria autenticada começou a partir de uma conta de Pedagogia EAD",
      "As verificações de acessibilidade não incluíram auditoria formal WCAG nem testes com tecnologias assistivas",
      "Segurança, RBAC, LGPD, retenção, integração e viabilidade em produção permanecem responsabilidades institucionais",
    ],
  },
  keyFindings: {
    heading:
      "A experiência exigia que estudantes entendessem os sistemas da instituição antes de concluir seus objetivos",
    introduction:
      "Os riscos de maior prioridade apareceram nas fronteiras entre plataformas: responsabilidade fragmentada, terminologia inconsistente, transições pouco claras e ausência de uma camada compartilhada de orientação.",
    findings: [
      {
        title: "Registros acadêmicos concentraram a maior parcela das reclamações públicas",
        evidence:
          "Trinta e uma das 77 reclamações classificadas, 40,3%, envolviam disciplinas, avaliações, notas, frequência ou estágios.",
        consequence:
          "Responsabilidade e regras de sincronização pouco claras em informações acadêmicas de alto impacto podem aumentar incerteza, verificações repetidas e dependência do suporte.",
        implication:
          "Priorizar um ponto de entrada acadêmico claro, diferenciar dados provisórios de oficiais e tornar visível o tempo de sincronização.",
      },
      {
        title: "A arquitetura das plataformas estava exposta aos estudantes",
        evidence:
          "Jornadas públicas e autenticadas exigiam que estudantes escolhessem entre Portal do Aluno, Moodle, AlunoNet, WAEWeb e outros serviços.",
        consequence:
          "Estudantes precisavam identificar qual sistema interno era responsável por uma tarefa antes de poder concluí-la.",
        implication:
          "A navegação principal deveria ser organizada por objetivos como Aulas, Notas, Financeiro, Solicitações, Documentos e Ajuda.",
      },
      {
        title: "Informações acadêmicas tinham múltiplos destinos",
        evidence:
          "Notas de atividades apareciam no Moodle, enquanto notas oficiais e frequência eram acessadas pelo AlunoNet.",
        consequence:
          "A interface não explicava claramente quais informações eram provisórias, de atividades ou oficialmente registradas.",
        implication:
          "Criar um único ponto de entrada para Notas que explique a diferença e direcione o estudante para a fonte correta.",
      },
      {
        title: "Transições entre plataformas interrompiam a continuidade",
        evidence:
          "Tarefas passavam entre domínios, abas, sistemas visuais e estados de autenticação, incluindo retorno a uma tela de login durante uma jornada autenticada.",
        consequence:
          "Estudantes podiam perder contexto e ficar inseguros sobre a necessidade de outra credencial ou ação.",
        implication:
          "Introduzir mensagens explícitas de transição, indicadores de link externo, caminhos de retorno e orientação de recuperação de sessão.",
      },
      {
        title: "Rotas diferentes comunicavam estados contraditórios",
        evidence:
          "Disciplinas eram acessíveis por uma rota enquanto outra rota relacionada ao Moodle indicava que estavam indisponíveis ou desabilitadas.",
        consequence:
          "O mesmo serviço acadêmico podia parecer ativo e indisponível dentro da mesma jornada mais ampla.",
        implication:
          "Definir um caminho autoritativo de acesso e padronizar mensagens de disponibilidade.",
      },
      {
        title: "Terminologia institucional aumentava a carga cognitiva",
        evidence:
          "Rótulos como DIC, N1, Protocolo, AlunoNet e WAEWeb refletiam estruturas internas, não intenções dos estudantes.",
        consequence:
          "Estudantes precisavam interpretar siglas e linguagem departamental antes de compreender um serviço.",
        implication:
          "Usar rótulos de tarefas em linguagem simples, preservando a terminologia oficial apenas como informação secundária de apoio.",
      },
      {
        title: "Estados de feedback não tinham um modelo compartilhado",
        evidence:
          "Conteúdo indisponível ou vazio aparecia como telas em branco, mensagens genéricas, cards desabilitados, PDFs ou avisos inconsistentes.",
        consequence:
          "Estudantes não conseguiam distinguir consistentemente entre serviço vazio, recurso indisponível, carregamento ou erro.",
        implication:
          "Criar padrões compartilhados para carregamento, vazio, indisponível, aviso, erro, sucesso e recuperação.",
      },
    ],
  },
  designStrategy: {
    heading: "Projetando uma camada de orquestração para um ecossistema acadêmico fragmentado",
    introduction:
      "Escolhi uma camada de orientação que organiza tarefas em torno dos objetivos dos estudantes e esclarece os limites dos sistemas sem fingir que as plataformas legadas foram consolidadas.",
    principles: [
      {
        title: "Orquestrar antes de tentar substituir",
        explanation:
          "A proposta melhora orientação e continuidade tratando plataformas existentes, limites de responsabilidade e integrações como restrições.",
        problemAddressed:
          "Uma consolidação completa das plataformas não poderia ser projetada ou dimensionada de forma responsável sem acesso técnico, operacional e de governança.",
        influence:
          "A solução adiciona navegação baseada em tarefas, orientação nas transições e padrões compartilhados de feedback sem afirmar que substitui os sistemas subjacentes.",
      },
      {
        title: "Organizar a experiência em torno dos objetivos dos estudantes",
        explanation:
          "A navegação principal deve representar o que estudantes querem realizar, e não o nome do sistema responsável pela tarefa.",
        problemAddressed:
          "Estudantes precisavam escolher entre plataformas internas antes de entender qual apoiava seu objetivo.",
        influence:
          "A navegação proposta usa Aulas, Notas, Financeiro, Solicitações, Documentos, Ajuda e Todos os serviços.",
      },
      {
        title: "Ativar por resultados, não por um tour do produto",
        explanation:
          "Novos estudantes devem concluir um pequeno número de tarefas acadêmicas significativas em vez de serem apresentados a todos os recursos de uma só vez.",
        problemAddressed:
          "A experiência existente expunha muitos serviços sem priorizar claramente o que estudantes deveriam fazer primeiro.",
        influence:
          "O checklist de onboarding foca confirmação de matrícula, revisão de datas, acesso à primeira disciplina, situação financeira e canais de suporte.",
      },
      {
        title: "Revelar complexidade progressivamente",
        explanation:
          "Serviços devem ganhar destaque conforme a etapa acadêmica atual e as necessidades imediatas do estudante.",
        problemAddressed:
          "Serviços acadêmicos, financeiros, de carreira, promocionais e administrativos competiam no mesmo nível de hierarquia.",
        influence:
          "A experiência da primeira semana prioriza aulas, datas, financeiro e ajuda, enquanto serviços secundários continuam disponíveis no diretório completo.",
      },
      {
        title: "Usar linguagem simples antes da terminologia institucional",
        explanation:
          "A interface deve comunicar primeiro o benefício para o usuário e introduzir siglas oficiais apenas quando necessário.",
        problemAddressed:
          "Rótulos como DIC, N1, Protocolo, AlunoNet e WAEWeb refletiam estruturas internas.",
        influence:
          "Os serviços recebem rótulos baseados em tarefas, enquanto a terminologia oficial aparece como informação de apoio.",
      },
      {
        title: "Tornar explícitas as transições entre plataformas",
        explanation:
          "Quando uma tarefa abre Moodle, AlunoNet ou outro ambiente externo, a interface deve explicar para onde o estudante está indo e por quê.",
        problemAddressed:
          "Mudanças inesperadas de aba, novos domínios e interrupções de autenticação quebravam a continuidade.",
        influence:
          "O fluxo redesenhado introduz mensagens de transição, indicadores de link externo, orientação de retorno e suporte à recuperação de sessão.",
      },
      {
        title: "Construir uma linguagem compartilhada de feedback",
        explanation:
          "Estados de carregamento, vazio, indisponível, erro, aviso e sucesso devem seguir a mesma lógica semântica e visual.",
        problemAddressed:
          "O feedback do sistema variava significativamente entre produtos e frequentemente não explicava a próxima ação.",
        influence:
          "A proposta define padrões compartilhados de feedback e estados reutilizáveis de componentes em todo o ecossistema.",
      },
    ],
  },
  informationArchitecture: {
    heading: "Passando de uma estrutura baseada em plataformas para uma jornada baseada em tarefas",
    introduction:
      "A proposta inverte o modelo existente: estudantes escolhem primeiro um objetivo e a interface os direciona para o serviço interno ou externo relevante.",
    previousStructure: [
      "Site institucional",
      "Portal do Aluno EAD",
      "Portal do Aluno Pós-graduação",
      "Portal do Aluno Presencial",
      "Moodle / AVA",
      "AlunoNet / WAEWeb",
      "Inova Carreira",
      "Bibliotecas e serviços externos",
    ],
    proposedStructure: [
      "Início",
      "Aulas",
      "Notas",
      "Financeiro",
      "Solicitações",
      "Documentos",
      "Ajuda",
      "Todos os serviços",
    ],
    mainFlow: [
      "Matrícula confirmada",
      "Comunicação pré-onboarding",
      "Ativação da conta",
      "Tela de boas-vindas",
      "Checklist de calouros",
      "Confirmar matrícula e período acadêmico",
      "Revisar datas importantes",
      "Acessar a primeira disciplina",
      "Verificar situação financeira",
      "Entender canais de suporte",
      "Concluir onboarding",
      "Continuar para a primeira aula",
    ],
    decisions: [
      {
        title: "Navegação principal baseada em tarefas",
        description:
          "Nomes de plataformas são substituídos por objetivos que estudantes reconhecem sem conhecimento prévio do ecossistema.",
      },
      {
        title: "Um ponto de entrada para notas",
        description:
          "O destino Notas explica a diferença entre resultados de atividades no Moodle e registros acadêmicos oficiais no AlunoNet.",
      },
      {
        title: "Caminho direto para a primeira disciplina",
        description:
          "O fluxo de onboarding propõe uma rota direta para a primeira disciplina disponível do estudante. A viabilidade depende de autenticação, dados de matrícula e suporte a deep links na plataforma de aprendizagem.",
      },
      {
        title: "Suporte organizado por intenção",
        description:
          "Dúvidas acadêmicas, problemas de acesso e solicitações formais são separados conforme o que o estudante precisa realizar.",
      },
      {
        title: "Transições externas explícitas",
        description:
          "Transições entre plataformas comunicam destino, propósito, comportamento esperado do navegador e caminho de retorno disponível. A continuidade da sessão permanece sujeita a validação técnica.",
      },
      {
        title: "Visibilidade progressiva dos serviços",
        description:
          "Serviços são priorizados conforme o ciclo acadêmico, mantendo acesso por um diretório completo.",
      },
    ],
  },
  redesignedExperience: {
    heading: "Transformando serviços fragmentados em uma jornada estudantil guiada",
    introduction:
      "O redesign funciona como uma camada de orientação que esclarece prioridades e transições, mantendo visíveis os sistemas acadêmicos existentes onde eles ainda importam.",
    solutions: [
      {
        title: "Boas-vindas e orientação acadêmica",
        problem:
          "A experiência existente não oferecia um ponto de partida claro nem explicava o que estudantes recém-matriculados deveriam fazer primeiro.",
        response:
          "Uma experiência de boas-vindas apresenta o período acadêmico, confirma o status atual do estudante e mostra as primeiras ações mais importantes.",
        intendedEffect:
          "Ajudar estudantes a entender onde estão, o que já está ativo e o que exige atenção.",
        tradeoff:
          "Adiciona uma etapa de orientação antes do dashboard, portanto seu valor depende de conteúdo breve, contextual e dispensável para usuários recorrentes.",
      },
      {
        title: "Checklist de calouros",
        problem:
          "Tarefas essenciais competiam com serviços secundários e não eram apresentadas em uma sequência clara.",
        response:
          "Um checklist progressivo organiza confirmação da matrícula, datas importantes, acesso à primeira aula, situação financeira e orientação de suporte.",
        intendedEffect:
          "Reduzir incerteza transformando onboarding em um pequeno conjunto de etapas visíveis e acionáveis.",
        tradeoff:
          "Um checklist pode virar sobrecarga administrativa se os estados de conclusão não estiverem conectados a dados acadêmicos e financeiros confiáveis.",
      },
      {
        title: "Navegação baseada em tarefas",
        problem:
          "Estudantes precisavam reconhecer nomes de plataformas antes de saber onde concluir uma tarefa acadêmica.",
        response:
          "A navegação é organizada por objetivos como Aulas, Notas, Financeiro, Solicitações, Documentos e Ajuda.",
        intendedEffect:
          "Permitir que estudantes comecem pela intenção enquanto o produto cuida do direcionamento ao sistema subjacente.",
        tradeoff:
          "Rótulos baseados em tarefas melhoram compreensão, mas exigem manutenção contínua de conteúdo quando serviços institucionais ou destinos mudam.",
      },
      {
        title: "Acesso guiado à primeira aula",
        problem:
          "Acessar conteúdo de aprendizagem exigia descobrir a plataforma e o caminho de navegação corretos.",
        response:
          "A jornada de onboarding oferece rota direta para a primeira disciplina disponível com orientação contextual antes da transição externa.",
        intendedEffect:
          "Encurtar o caminho entre ativação da conta e participação acadêmica significativa.",
        tradeoff:
          "O caminho mais curto depende de dados de matrícula, continuidade de autenticação e suporte a deep links que não estavam disponíveis para validação neste estudo.",
      },
      {
        title: "Transições explícitas entre plataformas",
        problem:
          "Novos domínios, abas, estados de autenticação e mudanças de interface apareciam sem explicação suficiente.",
        response:
          "Um modal de transição identifica o destino, explica por que o sistema externo é necessário e oferece orientação de retorno e recuperação.",
        intendedEffect:
          "Preservar contexto e reduzir incerteza quando estudantes mudam de plataforma.",
        tradeoff:
          "Uma etapa adicional de transição introduz fricção, mas torna explícitas as mudanças de sistema e expectativas de recuperação.",
      },
      {
        title: "Feedback contextual e estados vazios",
        problem:
          "Telas em branco, avisos genéricos e serviços desabilitados não explicavam consistentemente o que aconteceu ou o que o estudante poderia fazer em seguida.",
        response:
          "Estados contextuais vazios, indisponíveis e de recuperação explicam a condição atual e oferecem uma próxima ação apropriada.",
        intendedEffect:
          "Ajudar estudantes a distinguir entre conteúdo ausente, serviços indisponíveis, requisitos incompletos e erros do sistema.",
        tradeoff:
          "Feedback mais específico exige definições confiáveis de estado e responsabilidade clara pela manutenção das mensagens entre sistemas.",
      },
      {
        title: "Suporte organizado por intenção",
        problem:
          "Estudantes precisavam escolher entre departamentos, tutores, suporte técnico, WhatsApp e solicitações formais sem roteamento claro.",
        response:
          "As opções de ajuda são agrupadas por dúvidas acadêmicas, problemas de acesso, solicitações administrativas e assistência urgente.",
        intendedEffect:
          "Direcionar estudantes ao canal correto de suporte com menos conhecimento institucional.",
        tradeoff:
          "Roteamento por intenção simplifica a escolha, mas depende de acordo institucional sobre categorias, responsáveis e caminhos de escalonamento.",
      },
    ],
    prototypeCoverage: [
      "Três fluxos principais ponta a ponta do estudante",
      "Telas responsivas de alta fidelidade em onboarding e serviços essenciais",
      "Variantes mobile controladas para revalidação específica de rotas",
      "Um modal de transição entre plataformas",
      "Três variações contextuais de estado vazio",
      "Padrões responsivos de interação",
      "Protótipo interativo codificado",
    ],
  },
  visualEvidence: {
    heading: "Telas responsivas do portal do aluno validado",
    introduction:
      "Doze estados de produto foram projetados para desktop e mobile de 390 px; todas as telas usam dados fictícios de estudantes.",
    groups: [
      {
        title: "Visão acadêmica e financeiro",
        description:
          "Versões desktop e mobile preservam contexto do curso, orientação sobre notas oficiais, status de pagamento e a mesma hierarquia de informação baseada em tarefas.",
        images: [
          { alt: "Dashboard desktop da UniFatecie.", caption: "Priorizar a próxima ação do estudante sem expor a responsabilidade da plataforma, desktop." },
          { alt: "Dashboard mobile da UniFatecie.", caption: "Priorizar a próxima ação do estudante sem expor a responsabilidade da plataforma, mobile." },
          { alt: "Tela desktop de notas e frequência da UniFatecie.", caption: "Separar resultados provisórios de atividades dos registros acadêmicos oficiais, desktop." },
          { alt: "Tela mobile de notas e frequência da UniFatecie.", caption: "Separar resultados provisórios de atividades dos registros acadêmicos oficiais, mobile." },
          { alt: "Tela desktop do financeiro da UniFatecie.", caption: "Tornar status de pagamento, vencimentos e ações de recuperação visíveis rapidamente, desktop." },
          { alt: "Tela mobile do financeiro da UniFatecie.", caption: "Tornar status de pagamento, vencimentos e ações de recuperação visíveis rapidamente, mobile." },
        ],
      },
      {
        title: "Solicitações e conclusão do serviço",
        description:
          "A jornada de solicitações permanece consistente entre breakpoints, da descoberta do serviço ao preenchimento do formulário e confirmação do protocolo.",
        images: [
          { alt: "Tela desktop de solicitações da UniFatecie.", caption: "Expor serviços diretamente em vez de exigir que estudantes conheçam categorias de solicitação, desktop." },
          { alt: "Tela mobile de solicitações da UniFatecie.", caption: "Expor serviços diretamente em vez de exigir que estudantes conheçam categorias de solicitação, mobile." },
          { alt: "Formulário desktop de nova solicitação da UniFatecie.", caption: "Reduzir ambiguidade do formulário com requisitos em linguagem simples e campos previsíveis, desktop." },
          { alt: "Formulário mobile de nova solicitação da UniFatecie.", caption: "Reduzir ambiguidade do formulário com requisitos em linguagem simples e campos previsíveis, mobile." },
          { alt: "Tela desktop de confirmação de solicitação da UniFatecie.", caption: "Fechar o ciclo com protocolo, status e próximo passo explícito, desktop." },
          { alt: "Tela mobile de confirmação de solicitação da UniFatecie.", caption: "Fechar o ciclo com protocolo, status e próximo passo explícito, mobile." },
        ],
      },
      {
        title: "Negociação de pagamento",
        description:
          "Feedback de pagamento e opções de negociação se adaptam sem mudar significado, hierarquia de status ou próxima ação.",
        images: [
          { alt: "Estado desktop de Pix copiado da UniFatecie.", caption: "Confirmar a ação do Pix imediatamente sem interromper o contexto de pagamento, desktop." },
          { alt: "Estado mobile de Pix copiado da UniFatecie.", caption: "Confirmar a ação do Pix imediatamente sem interromper o contexto de pagamento, mobile." },
          { alt: "Tela desktop de negociação parcelada da UniFatecie.", caption: "Comparar opções de negociação por custo total, parcelas e vencimentos, desktop." },
          { alt: "Tela mobile de negociação parcelada da UniFatecie.", caption: "Comparar opções de negociação por custo total, parcelas e vencimentos, mobile." },
          { alt: "Opção de negociação selecionada no desktop da UniFatecie.", caption: "Manter o acordo selecionado e sua consequência financeira visíveis antes da confirmação, desktop." },
          { alt: "Opção de negociação selecionada no mobile da UniFatecie.", caption: "Manter o acordo selecionado e sua consequência financeira visíveis antes da confirmação, mobile." },
        ],
      },
      {
        title: "Serviços estudantis",
        description:
          "Carteirinha do Estudante, negociação de débitos e agendamento de provas usam requisitos explícitos, status do serviço e orientação de recuperação nos dois tamanhos de tela.",
        images: [
          { alt: "Requisito de foto da Carteirinha do Estudante no desktop da UniFatecie.", caption: "Transformar a falha de P02 em um serviço visível com requisito, status e ação, desktop." },
          { alt: "Requisito de foto da Carteirinha do Estudante no mobile da UniFatecie.", caption: "Transformar a falha de P02 em um serviço visível com requisito, status e ação, mobile." },
          { alt: "Tela desktop de negociação de débitos da UniFatecie.", caption: "Explicar o que precisa ser regularizado antes que o estudante possa continuar, desktop." },
          { alt: "Tela mobile de negociação de débitos da UniFatecie.", caption: "Explicar o que precisa ser regularizado antes que o estudante possa continuar, mobile." },
          { alt: "Tela desktop de agendamento de prova da UniFatecie.", caption: "Prevenir erros de agendamento mostrando elegibilidade, local e datas disponíveis em conjunto, desktop." },
          { alt: "Tela mobile de agendamento de prova da UniFatecie.", caption: "Prevenir erros de agendamento mostrando elegibilidade, local e datas disponíveis em conjunto, mobile." },
        ],
      },
    ],
  },
  designSystemAccessibility: {
    heading: "Aplicando fundamentos compartilhados de sistema dentro do protótipo",
    introduction:
      "O protótipo define fundamentos, componentes, padrões de conteúdo e estados de feedback reutilizáveis para a camada proposta de onboarding, não um design system institucional em produção.",
    foundations: [
      {
        title: "Hierarquia semântica",
        description:
          "Títulos de página, headings de seção, textos de apoio, labels e informações de status seguem uma hierarquia consistente para que estudantes possam percorrer conteúdo acadêmico denso e identificar a próxima ação.",
      },
      {
        title: "Espaçamento e layout",
        description:
          "Um sistema consistente de espaçamento, grid responsivo e larguras previsíveis de conteúdo criam agrupamentos mais claros em onboarding, dashboard, serviços e suporte.",
      },
      {
        title: "Cor e semântica de status",
        description:
          "Tratamentos de destaque, neutro, sucesso, aviso, erro e informação são atribuídos por significado, não decoração, com texto e ícones apoiando estados que usam cor.",
      },
      {
        title: "Estados de interação",
        description:
          "Botões, links, cards, campos e itens de navegação incluem comportamentos definidos de padrão, hover, foco, ativo, desabilitado, carregamento e erro.",
      },
      {
        title: "Padrões de conteúdo",
        description:
          "Rótulos baseados em tarefas, explicações curtas, mensagens de status e instruções de recuperação usam linguagem simples antes da terminologia institucional.",
      },
      {
        title: "Comportamento responsivo",
        description:
          "Navegação, cards, checklists, formulários e mensagens contextuais se adaptam a diferentes viewports preservando hierarquia e prioridade das tarefas.",
      },
    ],
    components: [
      "Navegação primária e secundária",
      "Progresso de onboarding e itens de checklist",
      "Badges de status e indicadores de estado acadêmico",
      "Cards de serviços e disciplinas",
      "Botões, links e ações para destinos externos",
      "Campos de formulário, labels, validação e textos auxiliares",
      "Modal de transição para plataformas externas",
      "Estados de carregamento, vazio, indisponível, aviso, erro e sucesso",
      "Cards de roteamento de suporte e orientação contextual",
      "Tabelas responsivas e informação acadêmica estruturada",
    ],
    accessibility: [
      {
        title: "Hierarquia legível e tamanho de texto",
        description:
          "A proposta evita depender de texto muito pequeno para informações essenciais e usa relações claras de headings, comprimento de linha, espaçamento e contraste para melhorar leitura e compreensão.",
      },
      {
        title: "Foco por teclado e estados visíveis de interação",
        description:
          "Elementos interativos exigem tratamento de foco visível e ordem lógica de navegação para que ações não sejam comunicadas apenas por hover ou ponteiro.",
      },
      {
        title: "Labels explícitos e nomes de ações",
        description:
          "Ícones são combinados com nomes acessíveis ou texto visível, enquanto botões e links descrevem a ação ou destino em vez de usar rótulos ambíguos.",
      },
      {
        title: "Feedback além da cor",
        description:
          "Mensagens de status, validação, aviso e erro combinam texto, estrutura semântica e ícones de apoio para que o significado não dependa apenas da cor.",
      },
      {
        title: "Orientação de formulários e recuperação",
        description:
          "Campos incluem labels persistentes, instruções contextuais, mensagens específicas de validação e orientação para corrigir informações incompletas ou inválidas.",
      },
      {
        title: "Usabilidade de dados densos e tabelas",
        description:
          "Informações acadêmicas e financeiras devem preservar relações entre linhas e colunas, oferecer headings significativos, suportar telas menores e evitar ações apenas por ícone sem contexto.",
      },
      {
        title: "Consciência sobre movimento e transições",
        description:
          "Animações são usadas para apoiar orientação, não para atrasar tarefas, e a interface deve respeitar preferências de movimento reduzido.",
      },
      {
        title: "Clareza de destinos externos",
        description:
          "Links que abrem outra plataforma ou aba comunicam destino e comportamento esperado antes da transição.",
      },
    ],
    limitation:
      "As considerações de acessibilidade foram baseadas em uma revisão visual e de interação conduzida pela designer nas interfaces e no protótipo disponíveis. O estudo não incluiu auditoria formal de conformidade WCAG, teste de acessibilidade em nível de código, testes com tecnologias assistivas ou validação com estudantes com deficiência.",
  },
  usabilityValidation: {
    heading: "De uma rota com falha a dois pontos de entrada validados",
    introduction:
      "Um teste mobile direcionado expôs um problema de encontrabilidade da Carteirinha do Estudante. Isolei a rota, alterei a arquitetura da informação e revalidei cada ponto de entrada separadamente.",
    studyMetrics: [
      {
        label: "Participantes moderados",
        detail: "Estudantes EAD e semipresenciais em contextos mobile e desktop.",
      },
      {
        label: "Sucesso direto nas tarefas",
        detail: "Quarenta e seis de 48 tentativas foram concluídas sem ajuda do moderador.",
      },
      {
        label: "SUS médio",
        detail: "O estudo de seis tarefas do protótipo superou a meta de 75.",
      },
      {
        label: "Tarefas aprovadas",
        detail: "Todas as tarefas de usabilidade definidas atingiram o gate final após iteração.",
      },
    ],
    iteration: [
      {
        title: "Falha observada",
        description:
          "P02 entrou em Solicitações, abriu Nova solicitação e não encontrou a Carteirinha do Estudante em 15 segundos. A sessão terminou com SEQ 2.",
      },
      {
        title: "Resposta de design",
        description:
          "Expus a Carteirinha do Estudante como serviço visível em Solicitações, adicionei o estado Foto obrigatória e a ação Enviar foto e preservei um ponto de entrada proeminente na Home.",
      },
      {
        title: "Revalidação controlada",
        description:
          "As rotas Home e Solicitações foram testadas separadamente. Uma variante neutra da Home impediu que o atalho da Carteirinha revelasse a resposta antes que o caminho secundário fosse avaliado.",
      },
    ],
    routeResults: [
      {
        route: "Caminho A · Home",
        startingPoint: "Dashboard com entrada para Carteirinha do Estudante",
      },
      {
        route: "Caminho B · Solicitações",
        startingPoint: "Home neutra, sem atalho para Carteirinha do Estudante",
      },
    ],
    conclusion:
      "Na versão final, todas as 11 sessões chegaram diretamente à Carteirinha do Estudante, com tempo médio combinado de 6,2 segundos e SEQ médio 6,8. Todos os participantes identificaram a foto obrigatória e compreenderam a regra de cancelamento automático. Nenhum teste adicional de usabilidade é necessário para esta tarefa.",
    governance:
      "GO para design e usabilidade. A publicação permanece NO-GO até que regras institucionais, segurança, RBAC, LGPD, retenção, implementação e QA em produção sejam resolvidos.",
  },
  validationNextSteps: {
    heading: "Fechando o gate de design sem esconder o risco de implementação",
    introduction:
      "O modelo de interação estava pronto para handoff; a publicação não. O trabalho restante pertence a segurança, jurídico, acessibilidade, engenharia e operações.",
    completedReviews: [
      {
        title: "Estudo moderado de usabilidade com seis tarefas",
        description:
          "Oito estudantes concluíram 48 tentativas de tarefas em contextos mobile, desktop e alternando dispositivos. As seis tarefas atingiram o gate final, com 95,8% de sucesso direto e SUS médio 81,9.",
      },
      {
        title: "Revalidação de fluxos críticos",
        description:
          "Cinco participantes revalidaram notas oficiais, próximo pagamento mensal e parcela vencida após a iteração. As 15 tentativas foram diretas, com SEQ médio 6,9.",
      },
      {
        title: "Revalidação da rota da Carteirinha do Estudante",
        description:
          "Os pontos de entrada Home e Solicitações foram testados separadamente. As 11 sessões finais foram diretas e todos compreenderam a exigência da foto e a regra de cancelamento automático.",
      },
      {
        title: "Revisão de regras institucionais",
        description:
          "Atendimento ao Aluno, Secretaria Acadêmica, Financeiro, Coordenação de Polo e TI desafiaram o protótipo com regras operacionais reais. Revisei janelas de sincronização de notas, estados de pagamento vencido e fluxo de foto e cancelamento da Carteirinha, mantendo questões não resolvidas de acesso, segurança e responsabilidade fora do gate de lançamento.",
      },
    ],
    pendingValidation: [
      {
        title: "Revisão de segurança e governança de dados",
        description:
          "Definir RBAC, exposição de dados, consentimento, retenção, trilhas de auditoria, responsabilidades de privacidade e salvaguardas de LGPD para cada fluxo institucional.",
      },
      {
        title: "Revisão de viabilidade técnica",
        description:
          "Revisar autenticação, deep links, comportamento da sessão, responsabilidade pelas plataformas, disponibilidade de dados e restrições de integração com engenharia e administradores dos sistemas.",
      },
      {
        title: "Confirmação de regras de produção e SLAs",
        description:
          "Converter regras revisadas do protótipo em requisitos aprovados de produção, responsáveis, tratamento de exceções, SLAs de sincronização e procedimentos de suporte.",
      },
      {
        title: "Acessibilidade formal e QA em produção",
        description:
          "Testar navegação por teclado, leitores de tela, estrutura semântica, zoom, tabelas responsivas, erros de formulário, movimento reduzido, navegadores, dispositivos e estados de dados em produção.",
      },
      {
        title: "Piloto e instrumentação",
        description:
          "Definir rollout limitado, eventos de analytics, monitoramento do suporte, coleta de feedback e critérios de comparação antes de uma implementação mais ampla.",
      },
    ],
    proposedSignals: [
      {
        label: "Conclusão do acesso à primeira aula",
        description:
          "Percentual de estudantes recém-matriculados que chegam com sucesso à primeira disciplina disponível pela jornada de onboarding.",
      },
      {
        label: "Tempo até a primeira disciplina",
        description:
          "Tempo entre ativação da conta e acesso bem-sucedido à primeira aula do estudante.",
      },
      {
        label: "Conclusão do onboarding",
        description:
          "Percentual de estudantes que concluem as etapas essenciais do checklist.",
      },
      {
        label: "Sucesso nas transições entre plataformas",
        description:
          "Percentual de transições externas concluídas sem falha de autenticação, navegação ou recuperação.",
      },
      {
        label: "Dependência do suporte",
        description:
          "Volume de contatos relacionados ao onboarding envolvendo acesso, notas, financeiro, escolha de plataforma e roteamento de serviços.",
      },
      {
        label: "Compreensão das tarefas",
        description:
          "Capacidade de identificar onde concluir tarefas acadêmicas essenciais sem conhecimento prévio dos nomes das plataformas internas.",
      },
    ],
  },
  outcomesCurrentStatus: {
    heading: "Documentando resultados validados de design sem sugerir impacto em produção",
    introduction:
      "Os resultados abaixo descrevem apenas evidências do protótipo; o impacto em produção permanece não medido até a implementação.",
    deliverables: [
      {
        title: "Mapa do ecossistema e jornada entre plataformas",
        description:
          "Visão documentada da experiência pública e autenticada entre site institucional, Portal do Aluno, Moodle / AVA, AlunoNet / WAEWeb e Inova Carreira.",
      },
      {
        title: "Arquitetura da informação baseada em tarefas",
        description:
          "Estrutura proposta organizada em torno de Aulas, Notas, Financeiro, Solicitações, Documentos, Ajuda e Todos os serviços, em vez de nomes internos de plataformas.",
      },
      {
        title: "Direção ponta a ponta de onboarding",
        description:
          "Jornada principal conectando confirmação de matrícula, ativação da conta, orientação da primeira semana, serviços essenciais e acesso à primeira aula.",
      },
      {
        title: "Experiência de produto em alta fidelidade",
        description:
          "Fluxos responsivos de alta fidelidade cobrindo onboarding, notas e frequência, financeiro, solicitações, Carteirinha do Estudante, suporte, transições e estados contextuais.",
      },
      {
        title: "Protótipo interativo codificado",
        description:
          "Protótipo responsivo construído com React, TypeScript, Tailwind CSS e Vite para demonstrar os fluxos propostos e o comportamento de interação.",
      },
      {
        title: "Base compartilhada de interação e feedback",
        description:
          "Padrões reutilizáveis de navegação, checklist, formulário, transição, suporte, estado vazio, carregamento, aviso, erro e sucesso para maior consistência.",
      },
      {
        title: "Recomendações de acessibilidade",
        description:
          "Recomendações documentadas cobrindo hierarquia, tamanho de texto, foco visível, labels explícitos, feedback além da cor, formulários, dados densos, movimento e destinos externos.",
      },
      {
        title: "Repositório de pesquisa e validação",
        description:
          "Registro consolidado de sessões moderadas, métricas de tarefas, SUS e SEQ, severidade de problemas, iterações, gates finais e bloqueadores institucionais.",
      },
    ],
    currentStatus: [
      {
        label: "Direção de design",
        description:
          "Concluída e documentada no case, arquitetura, fluxos, padrões de interface e protótipo.",
      },
      {
        label: "Protótipo",
        description:
          "Protótipo codificado de alta fidelidade concluído dentro do escopo definido do projeto de portfólio.",
      },
      {
        label: "Revisão com stakeholders",
        description:
          "Regras de serviço e estados do protótipo foram revisados com equipes acadêmicas, financeiras, de atendimento ao aluno, polo e TI, sem afirmar aprovação formal de lançamento.",
      },
      {
        label: "Validação com estudantes",
        description:
          "Aprovada para os fluxos definidos do protótipo após testes moderados e revalidação. Este resultado não substitui um piloto em produção.",
      },
      {
        label: "Revisão técnica",
        description:
          "Pendente. Autenticação, integrações, disponibilidade de dados, responsabilidade e restrições de implementação ainda exigem revisão de engenharia.",
      },
      {
        label: "Validação de acessibilidade",
        description:
          "Pendente. O projeto não passou por auditoria formal de conformidade WCAG nem testes com tecnologias assistivas.",
      },
      {
        label: "Implementação",
        description:
          "Não implementada no ambiente de produção da UniFatecie.",
      },
      {
        label: "Resultados em produção",
        description:
          "Não medidos porque a proposta não foi implementada nem lançada para estudantes.",
      },
    ],
    evidenceNote:
      "Os números de usabilidade são resultados medidos nas sessões do protótipo. Eles não devem ser interpretados como aprovação institucional, confirmação de viabilidade técnica, adoção em produção, impacto em retenção, redução de suporte ou desempenho de negócio.",
  },
  learningsNextSteps: {
    heading: "Transformando evidências de usuários em decisões de produto mais seguras",
    introduction:
      "A próxima iteração é sobre prontidão institucional e técnica: o modelo de interação já foi testado dentro dos cenários definidos.",
    learnings: [
      {
        title: "Orientação faz parte da experiência do produto",
        description:
          "Participantes concluíram tarefas de orientação e serviços essenciais com mais sucesso quando contexto acadêmico, responsabilidade pelos dados e próxima ação estavam visíveis no ponto de necessidade.",
      },
      {
        title: "Uma rota bem-sucedida não valida todas as rotas",
        description:
          "O teste da Carteirinha mostrou que boa encontrabilidade pela Home não poderia ser usada como evidência para Solicitações. Testar os dois pontos de entrada separadamente produziu um resultado defensável.",
      },
      {
        title: "O desvio de um participante é evidência da interface",
        description:
          "A escolha de P02 por Nova solicitação era coerente com o modelo de serviço. Tratar isso como uma falha de design levou a um serviço visível de Carteirinha em vez de culpar o comportamento do usuário.",
      },
      {
        title: "Terminologia é uma decisão de arquitetura",
        description:
          "Rótulos em linguagem simples e estados explícitos como Foto obrigatória tornaram regras acadêmicas complexas mais fáceis de encontrar e explicar sem remover o contexto oficial do serviço.",
      },
      {
        title: "Regras operacionais pertencem à interação",
        description:
          "Tempo de sincronização, valores vencidos, exigências de foto e condições de cancelamento mudaram decisões dos usuários. Não podem ser tratados como texto secundário.",
      },
      {
        title: "Critérios de lançamento precisam de responsáveis além do design",
        description:
          "O handoff final separa evidências de interação de decisões pertencentes a segurança, jurídico, operações e engenharia para que riscos não resolvidos não desapareçam dentro de um resultado positivo de usabilidade.",
      },
    ],
    nextIteration: [
      {
        title: "Resolver bloqueadores de segurança e LGPD",
        description:
          "Definir exposição de dados, consentimento, RBAC, retenção, auditabilidade e responsabilidades de privacidade para cada fluxo institucional antes do lançamento.",
      },
      {
        title: "Converter regras em requisitos de produção",
        description:
          "Documentar responsáveis aprovados, estados, exceções, janelas esperadas de atualização, caminhos de escalonamento e responsabilidades pela manutenção do conteúdo.",
      },
      {
        title: "Revisar viabilidade com engenharia",
        description:
          "Confirmar deep links, autenticação, persistência de sessão, disponibilidade de dados, limites de integração, destinos externos e restrições de responsabilidade.",
      },
      {
        title: "Conduzir QA formal de acessibilidade",
        description:
          "Testar estrutura semântica, navegação por teclado, anúncios de leitor de tela, zoom, tabelas responsivas, erros de formulário, gerenciamento de foco, movimento reduzido e comportamento de links externos.",
      },
      {
        title: "Preparar um piloto limitado",
        description:
          "Definir rollout pequeno, plano de instrumentação, canais de feedback, monitoramento de suporte, critérios de sucesso e período de comparação antes de implementação mais ampla.",
      },
    ],
  },
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
      { label: "Sistemas mapeados", detail: "Plataformas centrais do estudante" },
      { label: "Cobertura da jornada", value: "Ponta a ponta", detail: "Do acesso às tarefas essenciais do estudante" },
      { label: "Base de design", value: "Entre plataformas", detail: "Princípios compartilhados de experiência" },
      { label: "Status da validação", value: "Aprovado", detail: "Gate definido de design e usabilidade" },
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
};
