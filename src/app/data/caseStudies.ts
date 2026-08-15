export type CaseStudyMetric = {
  label: string;
  value: string;
  detail: string;
};

export type CaseStudy = {
  id: number;
  slug: string;
  title: string;
  company: string;
  role: string;
  duration?: string;
  year: string;
  category: string;
  projectNature?: string;
  brandLogo?: string;
  brandLogoAlt?: string;
  prototypeUrl?: string;
  dates?: string;
  team?: string;
  tools?: string[];
  scope?: string;
  stakeholderReview?: string;
  status?: string;
  executiveSummary?: {
    heading: string;
    summary: string;
    metrics: {
      label: string;
      value: string;
      detail: string;
    }[];
    gate: {
      usability: string;
      release: string;
      explanation: string;
    };
    iteration: {
      step: string;
      description: string;
    }[];
    participantEvidence: string;
  };
  existingExperience?: {
    heading: string;
    introduction: string;
    platforms: {
      name: string;
      role: string;
    }[];
    issues: {
      title: string;
      description: string;
    }[];
  };
  researchDiscovery?: {
    heading: string;
    introduction: string;
    methods: {
      title: string;
      description: string;
      output: string;
    }[];
    limitations: string[];
  };
  keyFindings?: {
    heading: string;
    introduction: string;
    findings: {
      title: string;
      evidence: string;
      consequence: string;
      implication: string;
    }[];
  };
  designStrategy?: {
    heading: string;
    introduction: string;
    principles: {
      title: string;
      explanation: string;
      problemAddressed: string;
      influence: string;
    }[];
  };
  informationArchitecture?: {
    heading: string;
    introduction: string;
    previousStructure: string[];
    proposedStructure: string[];
    mainFlow: string[];
    decisions: {
      title: string;
      description: string;
    }[];
  };
  redesignedExperience?: {
    heading: string;
    introduction: string;
    solutions: {
      title: string;
      problem: string;
      response: string;
      intendedEffect: string;
      tradeoff?: string;
    }[];
    prototypeCoverage: string[];
  };
  visualEvidence?: {
    heading: string;
    introduction: string;
    initialGroups?: number;
    expandLabel?: string;
    groups: {
      title: string;
      description: string;
      images: {
        src: string;
        alt: string;
        caption: string;
        presentation?: "desktop" | "mobile";
      }[];
    }[];
  };
  designSystemAccessibility?: {
    heading: string;
    introduction: string;
    foundations: {
      title: string;
      description: string;
    }[];
    components: string[];
    accessibility: {
      title: string;
      description: string;
    }[];
    limitation: string;
  };
  usabilityValidation?: {
    heading: string;
    introduction: string;
    studyMetrics: CaseStudyMetric[];
    iteration: {
      title: string;
      description: string;
    }[];
    routeResults: {
      route: string;
      startingPoint: string;
      sessions: string;
      directSuccess: string;
      averageTime: string;
      averageSeq: string;
    }[];
    conclusion: string;
    governance: string;
  };
  validationNextSteps?: {
    heading: string;
    introduction: string;
    completedReviews: {
      title: string;
      description: string;
    }[];
    pendingValidation: {
      title: string;
      description: string;
    }[];
    proposedSignals: {
      label: string;
      description: string;
    }[];
  };
  outcomesCurrentStatus?: {
    heading: string;
    introduction: string;
    deliverables: {
      title: string;
      description: string;
    }[];
    currentStatus: {
      label: string;
      description: string;
    }[];
    evidenceNote: string;
  };
  learningsNextSteps?: {
    heading: string;
    introduction: string;
    learnings: {
      title: string;
      description: string;
    }[];
    nextIteration: {
      title: string;
      description: string;
    }[];
  };
  overview: string;
  challenge: string;
  context: {
    businessGoal: string;
    constraints: string[];
    users: string;
  };
  process: {
    research: string[];
    insights: string[];
    solutions: string[];
    validation: string[];
  };
  impact: {
    metrics: CaseStudyMetric[];
    business: string;
  };
  learnings: string[];
};

const caseStudiesInSourceOrder: CaseStudy[] = [
  {
    id: 1,
    slug: "unifatecie-student-onboarding",
    title: "Redesigning a fragmented student journey",
    company: "UniFatecie · Higher education ecosystem",
    role: "Independent Product Designer",
    duration: "6-week design phase",
    year: "2026",
    dates: "May to July 2026",
    category: "Product Design · UX Research",
    projectNature: "Independent redesign study",
    prototypeUrl: "unifatecie-prototype.html",
    team: "Independent study · Sole designer",
    tools: [
      "Figma",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Notion",
    ],
    scope:
      "An ecosystem audit, analysis of 80 public complaints, moderated usability testing, a task-based information architecture, responsive end-to-end flows, a high-fidelity prototype, and targeted revalidation after iteration.",
    stakeholderReview:
      "Service rules and prototype states were reviewed with Student Services, Academic Secretariat, Finance, Pole Coordination, and IT.",
    status:
      "Usability gate approved. Institutional release gate remains NO-GO.",
    executiveSummary: {
      heading: "Usable did not mean ready to ship",
      summary:
        "Students relied on five disconnected environments to complete essential academic tasks. I audited the ecosystem, analyzed 80 public complaints, and tested a task-based redesign with eight students. The prototype reached 95.8% direct task success and a SUS score of 81.9, but institutional review exposed the project’s most important decision: approve the interaction model while keeping release blocked until operational, security, and data-governance risks are resolved.",
      metrics: [
        {
          label: "Research evidence",
          value: "80",
          detail: "public complaints reviewed and 77 classified",
        },
        {
          label: "Moderated study",
          value: "8",
          detail: "students completing 48 task attempts",
        },
        {
          label: "Direct success",
          value: "95.8%",
          detail: "46 of 48 attempts without moderator help",
        },
        {
          label: "System usability",
          value: "81.9",
          detail: "average SUS, above the target of 75",
        },
      ],
      gate: {
        usability: "GO",
        release: "NO-GO",
        explanation:
          "The tested interaction model met its usability criteria. Publication still depends on institutional rules, role-based access control (RBAC), Brazil’s data-protection law (LGPD), retention, implementation, accessibility validation, and production QA.",
      },
      iteration: [
        {
          step: "Evidence",
          description:
            "P02 looked under Requests, opened “New request,” and could not find Student Card in 15 seconds. SEQ: 2/7.",
        },
        {
          step: "Decision",
          description:
            "I treated the detour as architecture evidence, exposed Student Card as a service, and added the “Photo required” state and action.",
        },
        {
          step: "Revalidation",
          description:
            "Home and Requests were tested as separate entry points. All 11 final sessions were direct, averaging 6.2 seconds and SEQ 6.8/7.",
        },
      ],
      participantEvidence:
        "Participant behavior, paraphrased: “I looked in Requests because the Student Card felt like a service I needed to request.”",
    },
    existingExperience: {
      heading:
        "Mapping a student experience distributed across five environments",
      introduction:
        "The student journey crossed five environments with different navigation models, terminology, visual patterns, and authentication behaviors.",
      platforms: [
        {
          name: "Institutional website",
          role: "Public course information and student portal entry points organized by modality.",
        },
        {
          name: "Student Portal",
          role: "Dashboard, current subjects, financial information, services, communication, and shortcuts to external platforms.",
        },
        {
          name: "Moodle / AVA",
          role: "Classes, learning materials, activities, progress, and activity grades.",
        },
        {
          name: "AlunoNet / WAEWeb",
          role: "Official grades, attendance, academic records, requests, documents, and administrative services.",
        },
        {
          name: "Inova Carreira",
          role: "Career development, complementary courses, and employability-related services.",
        },
      ],
      issues: [
        {
          title: "Platform-first navigation",
          description:
            "Students had to identify which system owned a task before they could complete it.",
        },
        {
          title: "Disconnected transitions",
          description:
            "Tasks moved across different domains, tabs, interfaces, and authentication states without consistent orientation.",
        },
        {
          title: "Multiple sources of academic information",
          description:
            "Activity grades appeared in Moodle, while official grades and attendance were available through AlunoNet without a clear explanation of the difference.",
        },
        {
          title: "Institutional terminology",
          description:
            "Labels such as DIC, N1, Protocolo, AlunoNet, and WAEWeb required students to understand internal structures before understanding the service.",
        },
        {
          title: "Inconsistent system feedback",
          description:
            "Empty, unavailable, loading, and error states followed different patterns across the ecosystem.",
        },
        {
          title: "Unclear support routing",
          description:
            "Students had to choose between academic support, technical assistance, WhatsApp, tutors, and formal requests without clear guidance.",
        },
      ],
    },
    researchDiscovery: {
      heading:
        "Combining ecosystem evidence with observed student behavior",
      introduction:
        "Discovery combined ecosystem mapping, complaint analysis, moderated testing, and institutional review to connect recurring service problems to specific design decisions.",
      methods: [
        {
          title: "Public and authenticated journey audit",
          description:
            "I reviewed the institutional entry journey and one recorded authenticated EAD Pedagogy walkthrough, documenting every visible platform, transition, task path, system state, and external destination.",
          output:
            "A current-state ecosystem map connecting the institutional website, Student Portal, Moodle / AVA, AlunoNet / WAEWeb, and Inova Carreira.",
        },
        {
          title: "Public complaint analysis",
          description:
            "I reviewed 80 Reclame Aqui complaints published between July 2022 and July 2026. Seventy-seven were classified across six recurring themes and three were excluded.",
          output:
            "A quantified view of recurring problems involving grades and attendance, modality and course offering, finance, documents, platform access, and support.",
        },
        {
          title: "Moderated usability study",
          description:
            "Eight EAD and semipresential Pedagogy students completed six task-based scenarios across mobile, desktop, and alternating-device contexts. I captured direct success, time, SEQ, errors, recovery behavior, and SUS.",
          output:
            "Forty-eight task attempts, a 95.8% direct-success rate, an average SEQ of 6.4, and an average SUS score of 81.9.",
        },
        {
          title: "Heuristic, content, and accessibility review",
          description:
            "I evaluated navigation, terminology, hierarchy, system feedback, error prevention, responsive behavior, visible accessibility risks, and recovery patterns across the existing experience and prototype.",
          output:
            "A prioritized issue backlog, terminology audit, component inventory, and accessibility recommendations.",
        },
        {
          title: "Journey and information-architecture mapping",
          description:
            "I connected public entry, authentication, classes, grades, financial tasks, documents, requests, and support, then reorganized navigation around student goals instead of platform names.",
          output:
            "Current-state and proposed journeys, a task-based service model, and priority flows for prototyping.",
        },
        {
          title: "Institutional rule review",
          description:
            "Prototype rules and service states were reviewed with Student Services, Academic Secretariat, Finance, Pole Coordination, and IT, including official-grade timing, financial states, requests, and student-card requirements.",
          output:
            "Validated operational rules for the prototype and an explicit list of security, permissions, LGPD, retention, and implementation blockers.",
        },
      ],
      limitations: [
        "The moderated sample focused on EAD and semipresential Pedagogy students and should not be generalized to every modality or course",
        "Public complaints reveal recurring service problems but do not represent the full student population",
        "No production analytics, retention data, or internal support-ticket data were available",
        "The authenticated audit began from one EAD Pedagogy account",
        "Accessibility checks did not include a formal WCAG audit or assistive-technology testing",
        "Security, RBAC, LGPD, retention, integration, and production feasibility remain institutional responsibilities",
      ],
    },
    keyFindings: {
      heading:
        "The experience required students to understand the institution’s systems before completing their goals",
      introduction:
        "The highest-priority risks appeared across platform boundaries: fragmented ownership, inconsistent terminology, unclear transitions, and no shared orientation layer.",
      findings: [
        {
          title:
            "Academic records concentrated the largest share of public complaints",
          evidence:
            "Thirty-one of the 77 classified complaints, 40.3%, involved subjects, assessments, grades, attendance, or internships.",
          consequence:
            "Unclear ownership and synchronization rules in high-stakes academic information can increase uncertainty, repeat checking, and support dependency.",
          implication:
            "Prioritize one clear academic entry point, distinguish provisional from official data, and make synchronization timing visible.",
        },
        {
          title:
            "The platform architecture was exposed to students",
          evidence:
            "Public and authenticated journeys required students to choose between the Student Portal, Moodle, AlunoNet, WAEWeb, and other services.",
          consequence:
            "Students had to identify which internal system owned a task before they could complete it.",
          implication:
            "Primary navigation should be organized around goals such as Classes, Grades, Finance, Requests, Documents, and Help.",
        },
        {
          title:
            "Academic information had multiple destinations",
          evidence:
            "Activity grades appeared in Moodle, while official grades and attendance were accessed through AlunoNet.",
          consequence:
            "The interface did not clearly explain which information was provisional, activity-based, or officially recorded.",
          implication:
            "Create one Grades entry point that explains the distinction and routes students to the correct source.",
        },
        {
          title:
            "Cross-platform transitions interrupted continuity",
          evidence:
            "Tasks moved between domains, tabs, visual systems, and authentication states, including a return to a login screen during an authenticated journey.",
          consequence:
            "Students could lose context and become uncertain about whether another credential or action was required.",
          implication:
            "Introduce explicit transition messages, external-link indicators, return paths, and session-recovery guidance.",
        },
        {
          title:
            "Different routes communicated contradictory states",
          evidence:
            "Subjects were accessible through one route while another Moodle-related route indicated that they were unavailable or disabled.",
          consequence:
            "The same academic service could appear active and unavailable within the same broader journey.",
          implication:
            "Define one authoritative access path and standardize availability messages.",
        },
        {
          title:
            "Institutional terminology increased cognitive load",
          evidence:
            "Labels such as DIC, N1, Protocolo, AlunoNet, and WAEWeb reflected internal structures rather than student intentions.",
          consequence:
            "Students needed to interpret acronyms and department language before understanding a service.",
          implication:
            "Use plain-language task labels, preserving official terminology only as secondary supporting information.",
        },
        {
          title: "Feedback states lacked a shared model",
          evidence:
            "Unavailable or empty content appeared as blank screens, generic messages, disabled cards, PDFs, or inconsistent notices.",
          consequence:
            "Students could not consistently distinguish between an empty service, an unavailable feature, a loading state, or an error.",
          implication:
            "Create shared loading, empty, unavailable, warning, error, success, and recovery patterns.",
        },
      ],
    },
    designStrategy: {
      heading:
        "Designing an orchestration layer for a fragmented academic ecosystem",
      introduction:
        "I chose an orientation layer that organizes tasks around student goals and clarifies system boundaries without pretending the legacy platforms had been consolidated.",
      principles: [
        {
          title: "Orchestrate before attempting to replace",
          explanation:
            "The proposal improves orientation and continuity while treating the existing platforms, ownership boundaries, and integrations as constraints.",
          problemAddressed:
            "A full platform consolidation could not be responsibly designed or scoped without technical, operational, and governance access.",
          influence:
            "The solution adds task-based navigation, transition guidance, and shared feedback patterns without claiming to replace the underlying systems.",
        },
        {
          title: "Organize the experience around student goals",
          explanation:
            "Primary navigation should represent what students want to accomplish rather than the name of the system responsible for the task.",
          problemAddressed:
            "Students had to choose between internal platforms before understanding which one supported their goal.",
          influence:
            "The proposed navigation uses Classes, Grades, Finance, Requests, Documents, Help, and All services.",
        },
        {
          title:
            "Activate through outcomes, not a product tour",
          explanation:
            "New students should complete a small number of meaningful academic tasks instead of being introduced to every feature at once.",
          problemAddressed:
            "The existing experience exposed many services without clearly prioritizing what students should do first.",
          influence:
            "The onboarding checklist focuses on confirming enrollment, reviewing dates, accessing the first subject, checking financial status, and understanding support channels.",
        },
        {
          title: "Reveal complexity progressively",
          explanation:
            "Services should become prominent according to the student’s current academic stage and immediate needs.",
          problemAddressed:
            "Academic, financial, career, promotional, and administrative services competed at the same hierarchy level.",
          influence:
            "The first-week experience prioritizes classes, dates, finance, and help while secondary services remain available through the complete service directory.",
        },
        {
          title:
            "Use plain language before institutional terminology",
          explanation:
            "The interface should communicate the user benefit first and introduce official acronyms only when required.",
          problemAddressed:
            "Labels such as DIC, N1, Protocolo, AlunoNet, and WAEWeb reflected internal structures.",
          influence:
            "Services receive task-based labels, while official terminology appears as supporting information.",
        },
        {
          title: "Make cross-platform transitions explicit",
          explanation:
            "When a task opens Moodle, AlunoNet, or another external environment, the interface should explain where the student is going and why.",
          problemAddressed:
            "Unexpected tab changes, new domains, and authentication interruptions broke continuity.",
          influence:
            "The redesigned flow introduces transition messages, external-link indicators, return guidance, and session-recovery support.",
        },
        {
          title: "Build a shared feedback language",
          explanation:
            "Loading, empty, unavailable, error, warning, and success states should follow the same semantic and visual logic.",
          problemAddressed:
            "System feedback varied significantly across products and often failed to explain the next action.",
          influence:
            "The proposal defines shared feedback patterns and reusable component states across the ecosystem.",
        },
      ],
    },
    informationArchitecture: {
      heading:
        "Moving from a platform-based structure to a task-based student journey",
      introduction:
        "The proposal reverses the existing model: students choose a goal first, while the interface routes them to the relevant internal or external service.",
      previousStructure: [
        "Institutional website",
        "Student Portal EAD",
        "Student Portal Postgraduate",
        "Student Portal In-Person",
        "Moodle / AVA",
        "AlunoNet / WAEWeb",
        "Inova Carreira",
        "Libraries and external services",
      ],
      proposedStructure: [
        "Home",
        "Classes",
        "Grades",
        "Finance",
        "Requests",
        "Documents",
        "Help",
        "All services",
      ],
      mainFlow: [
        "Enrollment confirmed",
        "Pre-onboarding communication",
        "Account activation",
        "Welcome Screen",
        "Freshman Checklist",
        "Confirm enrollment and academic period",
        "Review important dates",
        "Access the first subject",
        "Check financial status",
        "Understand support channels",
        "Complete onboarding",
        "Continue to the first class",
      ],
      decisions: [
        {
          title: "Task-based primary navigation",
          description:
            "Platform names are replaced by goals that students can recognize without prior knowledge of the ecosystem.",
        },
        {
          title: "One entry point for grades",
          description:
            "The Grades destination explains the difference between activity results in Moodle and official academic records in AlunoNet.",
        },
        {
          title: "Direct path to the first subject",
          description:
            "The onboarding flow proposes a direct route to the student’s first available subject. Its feasibility depends on authentication, enrollment data, and deep-link support in the learning platform.",
        },
        {
          title: "Support organized by intention",
          description:
            "Academic questions, access problems, and formal requests are separated according to what the student needs to accomplish.",
        },
        {
          title: "Explicit external handoffs",
          description:
            "Cross-platform transitions communicate the destination, purpose, expected browser behavior, and available return path. Session continuity remains subject to technical validation.",
        },
        {
          title: "Progressive service visibility",
          description:
            "Services are prioritized according to the academic lifecycle while remaining accessible through a complete directory.",
        },
      ],
    },
    redesignedExperience: {
      heading:
        "Turning fragmented services into a guided student journey",
      introduction:
        "The redesign acts as an orientation layer that clarifies priorities and transitions while keeping the existing academic systems visible where they still matter.",
      solutions: [
        {
          title: "Welcome and academic orientation",
          problem:
            "The existing experience did not provide a clear starting point or explain what newly enrolled students should do first.",
          response:
            "A welcome experience introduces the academic period, confirms the student’s current status, and presents the most important first actions.",
          intendedEffect:
            "Help students understand where they are, what is already active, and what requires attention.",
          tradeoff:
            "Adds an orientation step before the dashboard, so its value depends on keeping the content brief, contextual, and dismissible for returning users.",
        },
        {
          title: "Freshman checklist",
          problem:
            "Essential tasks competed with secondary services and were not presented in a clear sequence.",
          response:
            "A progressive checklist organizes enrollment confirmation, important dates, first-class access, financial status, and support orientation.",
          intendedEffect:
            "Reduce uncertainty by transforming onboarding into a small set of visible and actionable steps.",
          tradeoff:
            "A checklist can become administrative overhead if completion states are not connected to reliable academic and financial data.",
        },
        {
          title: "Task-based navigation",
          problem:
            "Students had to recognize platform names before knowing where to complete an academic task.",
          response:
            "Navigation is organized around goals such as Classes, Grades, Finance, Requests, Documents, and Help.",
          intendedEffect:
            "Allow students to begin with their intention while the product handles the underlying system routing.",
          tradeoff:
            "Task-based labels improve comprehension but require ongoing content ownership when institutional services or destinations change.",
        },
        {
          title: "Guided access to the first class",
          problem:
            "Accessing learning content required students to discover the correct platform and navigation path.",
          response:
            "The onboarding journey provides a direct route to the first available subject with contextual guidance before the external transition.",
          intendedEffect:
            "Shorten the path from account activation to meaningful academic participation.",
          tradeoff:
            "The shorter path depends on enrollment data, authentication continuity, and deep-link support that were not available to validate in this study.",
        },
        {
          title: "Explicit cross-platform transitions",
          problem:
            "New domains, tabs, authentication states, and interface changes appeared without enough explanation.",
          response:
            "A transition modal identifies the destination, explains why the external system is required, and provides return and recovery guidance.",
          intendedEffect:
            "Preserve context and reduce uncertainty when students move between platforms.",
          tradeoff:
            "An additional transition step introduces friction, but makes system changes and recovery expectations explicit.",
        },
        {
          title: "Contextual feedback and empty states",
          problem:
            "Blank screens, generic notices, and disabled services did not consistently explain what had happened or what the student could do next.",
          response:
            "Contextual empty, unavailable, and recovery states explain the current condition and provide an appropriate next action.",
          intendedEffect:
            "Help students distinguish between missing content, unavailable services, incomplete requirements, and system errors.",
          tradeoff:
            "More specific feedback requires reliable state definitions and clear ownership for maintaining messages across systems.",
        },
        {
          title: "Support organized by intention",
          problem:
            "Students had to choose between departments, tutors, technical support, WhatsApp, and formal requests without clear routing.",
          response:
            "Help options are grouped according to academic questions, access problems, administrative requests, and urgent assistance.",
          intendedEffect:
            "Direct students toward the correct support channel with less institutional knowledge.",
          tradeoff:
            "Intent-based routing simplifies the choice for students but depends on institutional agreement about categories, ownership, and escalation paths.",
        },
      ],
      prototypeCoverage: [
        "Three primary end-to-end student flows",
        "Responsive high-fidelity screens across onboarding and essential services",
        "Controlled mobile variants for route-specific revalidation",
        "One cross-platform transition modal",
        "Three contextual empty-state variations",
        "Responsive interaction patterns",
        "Coded interactive prototype",
      ],
    },
    visualEvidence: {
      heading:
        "Responsive product screens from the validated student portal",
      introduction:
        "Twelve product states were designed for desktop and 390 px mobile layouts; all screens use fictional student data.",
      groups: [
        {
          title: "Academic overview and finance",
          description:
            "Desktop and mobile versions preserve course context, official-grade guidance, payment status, and the same task-based information hierarchy.",
          images: [
            {
              src: "/assets/cases/unifatecie/final-desktop/01-dashboard.png",
              alt: "UniFatecie desktop dashboard.",
              caption: "Prioritize the next student action without exposing platform ownership, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/01-dashboard.png",
              alt: "UniFatecie mobile dashboard.",
              caption: "Prioritize the next student action without exposing platform ownership, mobile.",
              presentation: "mobile",
            },
            {
              src: "/assets/cases/unifatecie/final-desktop/02-grades-and-attendance.png",
              alt: "UniFatecie desktop grades and attendance screen.",
              caption: "Separate provisional activity results from official academic records, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/02-grades-and-attendance.png",
              alt: "UniFatecie mobile grades and attendance screen.",
              caption: "Separate provisional activity results from official academic records, mobile.",
              presentation: "mobile",
            },
            {
              src: "/assets/cases/unifatecie/final-desktop/03-finance.png",
              alt: "UniFatecie desktop finance screen.",
              caption: "Make payment status, due dates, and recovery actions visible at a glance, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/03-finance.png",
              alt: "UniFatecie mobile finance screen.",
              caption: "Make payment status, due dates, and recovery actions visible at a glance, mobile.",
              presentation: "mobile",
            },
          ],
        },
        {
          title: "Requests and service completion",
          description:
            "The request journey remains consistent across breakpoints, from service discovery to form completion and protocol confirmation.",
          images: [
            {
              src: "/assets/cases/unifatecie/final-desktop/04-requests.png",
              alt: "UniFatecie desktop requests screen.",
              caption: "Expose services directly instead of requiring students to know request categories, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/04-requests.png",
              alt: "UniFatecie mobile requests screen.",
              caption: "Expose services directly instead of requiring students to know request categories, mobile.",
              presentation: "mobile",
            },
            {
              src: "/assets/cases/unifatecie/final-desktop/05-new-request.png",
              alt: "UniFatecie desktop new request form.",
              caption: "Reduce form ambiguity with plain-language requirements and predictable fields, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/05-new-request.png",
              alt: "UniFatecie mobile new request form.",
              caption: "Reduce form ambiguity with plain-language requirements and predictable fields, mobile.",
              presentation: "mobile",
            },
            {
              src: "/assets/cases/unifatecie/final-desktop/06-request-submitted.png",
              alt: "UniFatecie desktop request confirmation screen.",
              caption: "Close the loop with protocol, status, and an explicit next step, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/06-request-submitted.png",
              alt: "UniFatecie mobile request confirmation screen.",
              caption: "Close the loop with protocol, status, and an explicit next step, mobile.",
              presentation: "mobile",
            },
          ],
        },
        {
          title: "Payment negotiation",
          description:
            "Payment feedback and negotiation options adapt without changing the meaning, status hierarchy, or next action.",
          images: [
            {
              src: "/assets/cases/unifatecie/final-desktop/07-finance-pix-copied.png",
              alt: "UniFatecie desktop Pix copied state.",
              caption: "Confirm the Pix action immediately without interrupting the payment context, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/07-finance-pix-copied.png",
              alt: "UniFatecie mobile Pix copied state.",
              caption: "Confirm the Pix action immediately without interrupting the payment context, mobile.",
              presentation: "mobile",
            },
            {
              src: "/assets/cases/unifatecie/final-desktop/08-installment-negotiation.png",
              alt: "UniFatecie desktop installment negotiation screen.",
              caption: "Compare negotiation options through total cost, installments, and due dates, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/08-installment-negotiation.png",
              alt: "UniFatecie mobile installment negotiation screen.",
              caption: "Compare negotiation options through total cost, installments, and due dates, mobile.",
              presentation: "mobile",
            },
            {
              src: "/assets/cases/unifatecie/final-desktop/09-negotiation-option-selected.png",
              alt: "UniFatecie desktop selected negotiation option.",
              caption: "Keep the selected agreement and its financial consequence visible before confirmation, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/09-negotiation-option-selected.png",
              alt: "UniFatecie mobile selected negotiation option.",
              caption: "Keep the selected agreement and its financial consequence visible before confirmation, mobile.",
              presentation: "mobile",
            },
          ],
        },
        {
          title: "Student services",
          description:
            "Student Card, debt settlement, and exam scheduling use explicit requirements, service status, and recovery guidance on both screen sizes.",
          images: [
            {
              src: "/assets/cases/unifatecie/final-desktop/10-student-card-photo-required.png",
              alt: "UniFatecie desktop Student Card photo requirement.",
              caption: "Turn the P02 failure into a visible service with requirement, status, and action, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/10-student-card-photo-required.png",
              alt: "UniFatecie mobile Student Card photo requirement.",
              caption: "Turn the P02 failure into a visible service with requirement, status, and action, mobile.",
              presentation: "mobile",
            },
            {
              src: "/assets/cases/unifatecie/final-desktop/11-debt-settlement.png",
              alt: "UniFatecie desktop debt settlement screen.",
              caption: "Explain what must be settled before the student can proceed, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/11-debt-settlement.png",
              alt: "UniFatecie mobile debt settlement screen.",
              caption: "Explain what must be settled before the student can proceed, mobile.",
              presentation: "mobile",
            },
            {
              src: "/assets/cases/unifatecie/final-desktop/12-exam-scheduling.png",
              alt: "UniFatecie desktop exam scheduling screen.",
              caption: "Prevent scheduling errors by surfacing eligibility, location, and available dates together, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/unifatecie/final-mobile/12-exam-scheduling.png",
              alt: "UniFatecie mobile exam scheduling screen.",
              caption: "Prevent scheduling errors by surfacing eligibility, location, and available dates together, mobile.",
              presentation: "mobile",
            },
          ],
        },
      ],
    },
    designSystemAccessibility: {
      heading:
        "Applying shared system foundations inside the prototype",
      introduction:
        "The prototype defines reusable foundations, components, content patterns, and feedback states for the proposed onboarding layer, not an institutional production design system.",
      foundations: [
        {
          title: "Semantic hierarchy",
          description:
            "Page titles, section headings, supporting text, labels, and status information follow a consistent hierarchy so students can scan dense academic content and identify the next action.",
        },
        {
          title: "Spacing and layout",
          description:
            "A consistent spacing system, responsive grid, and predictable content widths create clearer grouping across onboarding, dashboard, service, and support contexts.",
        },
        {
          title: "Color and status semantics",
          description:
            "Accent, neutral, success, warning, error, and informational treatments are assigned by meaning rather than decoration, with text and icons supporting color-dependent states.",
        },
        {
          title: "Interaction states",
          description:
            "Buttons, links, cards, fields, and navigation items include defined default, hover, focus, active, disabled, loading, and error behaviors.",
        },
        {
          title: "Content patterns",
          description:
            "Task-based labels, short explanations, status messages, and recovery instructions use plain language before institutional terminology.",
        },
        {
          title: "Responsive behavior",
          description:
            "Navigation, cards, checklists, forms, and contextual messages adapt across viewport sizes while preserving hierarchy and task priority.",
        },
      ],
      components: [
        "Primary and secondary navigation",
        "Onboarding progress and checklist items",
        "Status badges and academic-state indicators",
        "Service and subject cards",
        "Buttons, links, and external-destination actions",
        "Form fields, labels, validation, and helper text",
        "Transition modal for external platforms",
        "Loading, empty, unavailable, warning, error, and success states",
        "Support-routing cards and contextual guidance",
        "Responsive tables and structured academic information",
      ],
      accessibility: [
        {
          title: "Readable hierarchy and text sizing",
          description:
            "The proposal avoids relying on very small text for essential information and uses clear heading relationships, line length, spacing, and contrast to improve scanning and comprehension.",
        },
        {
          title:
            "Keyboard focus and visible interaction states",
          description:
            "Interactive elements require visible focus treatment and logical navigation order so actions are not communicated only through hover or pointer interaction.",
        },
        {
          title: "Explicit labels and action names",
          description:
            "Icons are paired with accessible names or visible text, while buttons and links describe the action or destination rather than using ambiguous labels.",
        },
        {
          title: "Feedback beyond color",
          description:
            "Status, validation, warning, and error messages combine text, semantic structure, and supporting icons so meaning does not depend on color alone.",
        },
        {
          title: "Form guidance and recovery",
          description:
            "Fields include persistent labels, contextual instructions, specific validation messages, and guidance for correcting incomplete or invalid information.",
        },
        {
          title: "Dense data and table usability",
          description:
            "Academic and financial information should preserve row and column relationships, provide meaningful headings, support smaller screens, and avoid icon-only actions without context.",
        },
        {
          title: "Motion and transition awareness",
          description:
            "Animations are used to support orientation rather than delay tasks, and the interface should respect reduced-motion preferences.",
        },
        {
          title: "External destination clarity",
          description:
            "Links that open another platform or tab communicate the destination and expected behavior before the transition occurs.",
        },
      ],
      limitation:
        "Accessibility considerations were based on a designer-led visual and interaction review of the available interfaces and prototype. The study did not include a formal WCAG conformance audit, code-level accessibility testing, assistive-technology testing, or validation with disabled students.",
    },
    usabilityValidation: {
      heading:
        "From a failed route to two validated entry points",
      introduction:
        "A targeted mobile test exposed a Student Card findability problem, so I isolated the route, changed the information architecture, and revalidated each entry point separately.",
      studyMetrics: [
        {
          label: "Moderated participants",
          value: "8",
          detail:
            "EAD and semipresential students across mobile and desktop contexts.",
        },
        {
          label: "Direct task success",
          value: "95.8%",
          detail:
            "Forty-six of 48 attempts were completed without moderator help.",
        },
        {
          label: "Average SUS",
          value: "81.9",
          detail:
            "The six-task prototype study exceeded the target of 75.",
        },
        {
          label: "Tasks approved",
          value: "6/6",
          detail:
            "All defined usability tasks met the final gate after iteration.",
        },
      ],
      iteration: [
        {
          title: "Observed failure",
          description:
            "P02 entered Requests, opened “New request,” and could not find the Student Card in 15 seconds. The session ended with SEQ 2.",
        },
        {
          title: "Design response",
          description:
            "I exposed Student Card as a visible service in Requests, added the “Photo required” state and “Upload photo” action, and preserved a prominent Home entry point.",
        },
        {
          title: "Controlled revalidation",
          description:
            "The Home and Requests routes were tested separately. A neutral Home variant prevented the Student Card shortcut from revealing the answer before the secondary path was evaluated.",
        },
      ],
      routeResults: [
        {
          route: "Path A · Home",
          startingPoint: "Dashboard with Student Card entry",
          sessions: "6",
          directSuccess: "6/6 · 100%",
          averageTime: "6.0 s",
          averageSeq: "7.0 / 7",
        },
        {
          route: "Path B · Requests",
          startingPoint: "Neutral Home, no Student Card shortcut",
          sessions: "5",
          directSuccess: "5/5 · 100%",
          averageTime: "6.4 s",
          averageSeq: "6.6 / 7",
        },
      ],
      conclusion:
        "Across the final version, all 11 sessions reached the Student Card directly, with a combined average time of 6.2 seconds and an average SEQ of 6.8. Every participant identified the required photo and understood the automatic-cancellation rule. No additional usability test is required for this task.",
      governance:
        "GO for design and usability. Publication remains NO-GO until institutional rules, security, RBAC, LGPD, retention, implementation, and production QA are resolved.",
    },
    validationNextSteps: {
      heading:
        "Closing the design gate while keeping implementation risk visible",
      introduction:
        "The interaction model was ready for handoff; publication was not. Remaining work sat with security, legal, accessibility, engineering, and operations.",
      completedReviews: [
        {
          title: "Six-task moderated usability study",
          description:
            "Eight students completed 48 task attempts across mobile, desktop, and alternating-device contexts. All six tasks met the final gate, with 95.8% direct success and an average SUS score of 81.9.",
        },
        {
          title: "Critical-flow revalidation",
          description:
            "Five participants revalidated official grades, the next monthly payment, and an overdue installment after iteration. All 15 attempts were direct, with an average SEQ of 6.9.",
        },
        {
          title: "Student Card route revalidation",
          description:
            "The Home and Requests entry points were tested separately. All 11 final sessions were direct, and every participant understood the photo requirement and automatic-cancellation rule.",
        },
        {
          title: "Institutional rule review",
          description:
            "Student Services, Academic Secretariat, Finance, Pole Coordination, and IT challenged the prototype with real operating rules. I revised grade synchronization windows, overdue-payment states, and the Student Card photo and cancellation flow, while keeping unresolved access, security, and ownership questions outside the release gate.",
        },
      ],
      pendingValidation: [
        {
          title: "Security and data-governance review",
          description:
            "Define RBAC, data exposure, consent, retention, audit trails, privacy responsibilities, and LGPD safeguards for each institutional flow.",
        },
        {
          title: "Technical feasibility review",
          description:
            "Review authentication, deep links, session behavior, platform ownership, data availability, and integration constraints with engineering and system administrators.",
        },
        {
          title: "Production rule and SLA confirmation",
          description:
            "Convert the reviewed prototype rules into approved production requirements, owners, exception handling, synchronization SLAs, and support procedures.",
        },
        {
          title: "Formal accessibility and production QA",
          description:
            "Test keyboard navigation, screen readers, semantic structure, zoom, responsive tables, form errors, reduced motion, browsers, devices, and production data states.",
        },
        {
          title: "Pilot and instrumentation",
          description:
            "Define a limited rollout, analytics events, support monitoring, feedback collection, and comparison criteria before broader implementation.",
        },
      ],
      proposedSignals: [
        {
          label: "First-class access completion",
          description:
            "Percentage of newly enrolled students who successfully reach their first available subject through the onboarding journey.",
        },
        {
          label: "Time to first subject",
          description:
            "Time between account activation and successful access to the student’s first class.",
        },
        {
          label: "Onboarding completion",
          description:
            "Percentage of students who complete the essential checklist steps.",
        },
        {
          label: "Cross-platform transition success",
          description:
            "Percentage of external transitions completed without authentication, navigation, or recovery failure.",
        },
        {
          label: "Support dependency",
          description:
            "Volume of onboarding-related contacts involving access, grades, finance, platform selection, and service routing.",
        },
        {
          label: "Task comprehension",
          description:
            "Ability to identify where to complete essential academic tasks without prior knowledge of internal platform names.",
        },
      ],
    },
    outcomesCurrentStatus: {
      heading:
        "Documenting validated design outcomes without implying production impact",
      introduction:
        "The outcomes below report prototype evidence only; production impact remains unmeasured until implementation.",
      deliverables: [
        {
          title: "Cross-platform ecosystem and journey map",
          description:
            "A documented view of the public and authenticated experience across the institutional website, Student Portal, Moodle / AVA, AlunoNet / WAEWeb, and Inova Carreira.",
        },
        {
          title: "Task-based information architecture",
          description:
            "A proposed structure organized around Classes, Grades, Finance, Requests, Documents, Help, and All services rather than internal platform names.",
        },
        {
          title: "End-to-end onboarding direction",
          description:
            "A primary journey connecting enrollment confirmation, account activation, first-week guidance, essential services, and access to the first class.",
        },
        {
          title: "High-fidelity product experience",
          description:
            "Responsive high-fidelity flows covering onboarding, grades and attendance, finance, requests, Student Card, support, transitions, and contextual states.",
        },
        {
          title: "Coded interactive prototype",
          description:
            "A responsive prototype built with React, TypeScript, Tailwind CSS, and Vite to demonstrate the proposed flows and interaction behavior.",
        },
        {
          title: "Shared interaction and feedback foundation",
          description:
            "Reusable navigation, checklist, form, transition, support, empty-state, loading, warning, error, and success patterns for greater consistency.",
        },
        {
          title: "Accessibility recommendations",
          description:
            "Documented recommendations covering hierarchy, text sizing, visible focus, explicit labels, feedback beyond color, forms, dense data, motion, and external destinations.",
        },
        {
          title: "Research and validation repository",
          description:
            "A consolidated record of moderated sessions, task metrics, SUS and SEQ, issue severity, iterations, final gates, and institutional blockers.",
        },
      ],
      currentStatus: [
        {
          label: "Design direction",
          description:
            "Completed and documented across the case study, architecture, flows, interface patterns, and prototype.",
        },
        {
          label: "Prototype",
          description:
            "High-fidelity coded prototype completed within the defined portfolio project scope.",
        },
        {
          label: "Stakeholder review",
          description:
            "Service rules and prototype states were reviewed with the relevant academic, financial, student-service, pole, and IT teams, without a claim of formal release approval.",
        },
        {
          label: "Student validation",
          description:
            "Approved for the defined prototype flows after moderated testing and revalidation. This result does not replace a production pilot.",
        },
        {
          label: "Technical review",
          description:
            "Pending. Authentication, integrations, data availability, ownership, and implementation constraints still require engineering review.",
        },
        {
          label: "Accessibility validation",
          description:
            "Pending. The project has not undergone a formal WCAG conformance audit or assistive-technology testing.",
        },
        {
          label: "Implementation",
          description:
            "Not implemented in UniFatecie’s production environment.",
        },
        {
          label: "Production outcomes",
          description:
            "Not measured because the proposal has not been implemented or released to students.",
        },
      ],
      evidenceNote:
        "The usability figures are measured outcomes from the prototype sessions. They should not be interpreted as institutional approval, technical feasibility confirmation, production adoption, retention impact, support reduction, or business performance.",
    },
    learningsNextSteps: {
      heading:
        "Turning user evidence into safer product decisions",
      introduction:
        "The next iteration is about institutional and technical readiness: the interaction model has already been tested within the defined scenarios.",
      learnings: [
        {
          title:
            "Orientation is part of the product experience",
          description:
            "Participants completed orientation and essential-service tasks more successfully when academic context, data ownership, and the next action were visible at the point of need.",
        },
        {
          title:
            "One successful route does not validate every route",
          description:
            "The Student Card test showed that strong Home findability could not be used as evidence for Requests. Testing the two entry points separately produced a defensible result.",
        },
        {
          title:
            "A participant’s detour is interface evidence",
          description:
            "P02’s choice to open “New request” was coherent with the service model. Treating it as a design failure led to a visible Student Card service instead of blaming user behavior.",
        },
        {
          title: "Terminology is an architectural decision",
          description:
            "Plain-language labels and explicit states such as “Photo required” made complex academic rules easier to find and explain without removing the official service context.",
        },
        {
          title:
            "Operational rules belong in the interaction",
          description:
            "Synchronization timing, overdue-payment values, photo requirements, and cancellation conditions changed user decisions. They cannot be treated as secondary copy.",
        },
        {
          title:
            "Release criteria need owners beyond design",
          description:
            "The final handoff separates interaction evidence from decisions owned by security, legal, operations, and engineering so unresolved risk cannot disappear inside a positive usability result.",
        },
      ],
      nextIteration: [
        {
          title: "Resolve security and LGPD blockers",
          description:
            "Define data exposure, consent, RBAC, retention, auditability, and privacy responsibilities for every institutional flow before release.",
        },
        {
          title: "Convert rules into production requirements",
          description:
            "Document approved owners, states, exceptions, expected update windows, escalation paths, and content-maintenance responsibilities.",
        },
        {
          title: "Review feasibility with engineering",
          description:
            "Confirm deep-link behavior, authentication, session persistence, data availability, integration boundaries, external destinations, and ownership constraints.",
        },
        {
          title: "Conduct formal accessibility QA",
          description:
            "Test semantic structure, keyboard navigation, screen-reader announcements, zoom, responsive tables, form errors, focus management, reduced motion, and external-link behavior.",
        },
        {
          title: "Prepare a limited pilot",
          description:
            "Define a small rollout, instrumentation plan, feedback channels, support monitoring, success criteria, and comparison period before broader implementation.",
        },
      ],
    },
    overview:
      "I redesigned essential student journeys across five disconnected environments, validated the interaction model with eight students, and separated a successful usability gate from an institutional NO-GO for release.",
    challenge:
      "To complete basic academic and administrative tasks, students move between the Student Portal, Moodle/AVA, AlunoNet/WAEWeb, and Inova Carreira. Each environment uses different navigation, terminology, interface patterns, and task groupings. The resulting problem is not the absence of functionality. It is the lack of orientation and continuity between systems.",
    context: {
      businessGoal:
        "Explore a clearer onboarding and orientation layer that could help students identify their next actions, understand where tasks take place, and move between essential academic services with less uncertainty.",
      constraints: [
        "The study did not include production analytics, internal support-ticket data, or access to the institution’s technical architecture",
        "The moderated sample focused on EAD and semipresential Pedagogy students",
        "The proposal assumes the existing platforms and their operational ownership remain in place rather than being replaced",
        "Academic, administrative, learning, and career tasks follow different structures, terminology, and ownership models",
        "The prototype is not connected to production data, authentication, or integrations, and reviewed business rules still require formal production approval",
      ],
      users:
        "The primary audience is newly enrolled students learning how to navigate the institution’s digital ecosystem. Returning students are a secondary audience for recurring academic, administrative, and support tasks.",
    },
    process: {
      research: [
        "End-to-end review of the authenticated student journey across the Student Portal, Moodle/AVA, AlunoNet/WAEWeb, and Inova Carreira",
        "Analysis of 80 public complaints, with 77 classified across six recurring service themes",
        "Moderated usability study with eight students completing six scenarios across mobile and desktop contexts",
        "Heuristic evaluation focused on navigation, hierarchy, feedback, consistency, accessibility, and error prevention",
        "Screen-by-screen inventory and documentation of the existing experience",
        "Institutional review of service rules, synchronization timing, financial states, requests, and Student Card requirements",
      ],
      insights: [
        "Students need to understand the role of each platform before being asked to navigate between them",
        "Inconsistent labels make similar tasks appear unrelated or more complex than they are",
        "The experience exposes internal system boundaries instead of presenting a coherent student journey",
        "Important next steps are often available but are not clearly prioritized",
        "Limited contextual feedback increases uncertainty during first-time use",
      ],
      solutions: [
        "A progressive onboarding experience organized around student goals rather than internal systems",
        "A unified orientation layer explaining what each platform is for and when it should be used",
        "Clear next-step guidance for essential academic and administrative tasks",
        "Consistent terminology and navigation patterns across the redesigned journey",
        "Contextual help, status feedback, and recovery guidance at critical moments",
        "A shared design-system foundation to support consistency across future improvements",
      ],
      validation: [
        "Six of six tasks approved after moderated testing with eight students",
        "Critical grades and financial flows revalidated with five participants at 100% direct success",
        "Student Card iterated after the P02 failure and revalidated through two separate entry points",
        "Eleven of eleven final Student Card sessions completed directly, with average SEQ 6.8",
        "Responsive and visible-accessibility review completed, with formal assistive-technology QA still pending",
      ],
    },
    impact: {
      metrics: [
        {
          label: "Systems mapped",
          value: "4",
          detail: "Core student platforms",
        },
        {
          label: "Journey coverage",
          value: "End to end",
          detail: "From access to essential student tasks",
        },
        {
          label: "Design foundation",
          value: "Cross-platform",
          detail: "Shared experience principles",
        },
        {
          label: "Validation status",
          value: "Approved",
          detail: "Defined design and usability gate",
        },
      ],
      business:
        "The project established and validated a redesign direction for the defined prototype flows, creating a reusable foundation for greater cross-platform consistency. Production outcomes have not been measured because the proposal has not been implemented or released.",
    },
    learnings: [
      "Onboarding in a complex ecosystem is as much about orientation as it is about task completion",
      "Students should not need to understand an institution’s internal structure to use its digital services",
      "Consistent terminology is foundational to trust, comprehension, and wayfinding",
      "Progressive guidance can reduce cognitive load without oversimplifying academic processes",
      "Design-system work becomes more valuable when connected to real cross-platform journey problems",
    ],
  },
  {
    id: 4,
    slug: "insightflow-research-intelligence",
    title: "Designing evidence-grounded AI for research synthesis",
    company: "InsightFlow · AI research intelligence",
    role: "Independent Product Designer",
    year: "2026",
    dates: "August 2026",
    category: "Product Design · AI · Research Intelligence",
    projectNature: "Independent product exploration",
    prototypeUrl:
      "prototypes/insightflow/index.html",
    team: "Independent study · Sole designer",
    tools: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Express",
      "Gemini API",
    ],
    scope:
      "An end-to-end research intelligence workflow covering interview analysis, evidence extraction, insight synthesis, thematic clustering, opportunity framing, source linking, AI-assisted querying, report generation, accessibility, and responsive behavior.",
    status:
      "Functional coded prototype with a synthetic demo dataset and live Gemini integration tested locally. The current release is positioned as an implementation-ready exploration, with practitioner validation defined as the next milestone rather than implied as completed.",
    executiveSummary: {
      heading:
        "A trustworthy AI workflow needs inspectable evidence, explicit system state, and human review.",
      summary:
        "InsightFlow is a coded product exploration that turns qualitative interviews into evidence, insights, themes, opportunities, and reports while keeping the source path inspectable. The work focused on separating supporting from contradicting signals and making live-model behavior distinct from demo fallback. The result is a functional prototype ready for practitioner testing, not a claim of validated product impact.",
      metrics: [
        {
          label: "Synthetic interviews",
          value: "10",
          detail: "Demo records used to exercise the workflow",
        },
        {
          label: "Evidence items",
          value: "40",
          detail: "Traceable excerpts linked across the synthesis model",
        },
        {
          label: "Approved insights",
          value: "6",
          detail: "Human-reviewed demo findings",
        },
        {
          label: "Validation status",
          value: "Pending",
          detail: "Practitioner usability study still required",
        },
      ],
      gate: {
        usability: "Ready for researcher testing",
        release: "Not production-ready",
        explanation:
          "The prototype demonstrates the intended interaction model, AI-state guardrails, responsive behavior, and accessibility implementation. It does not yet demonstrate trust, adoption, or workflow value with real research practitioners or production data.",
      },
      iteration: [
        {
          step: "Model source links first",
          description:
            "The workflow was structured around linked evidence, insight, theme, opportunity, and report relationships before visual design decisions were finalized.",
        },
        {
          step: "Make AI state explicit",
          description:
            "Live AI, demo synthesis, and review checkpoints were separated so fallback behavior would not masquerade as a successful model response.",
        },
        {
          step: "Adapt dense synthesis for mobile",
          description:
            "The Themes experience was reworked from a compressed Canvas into a task-preserving List interaction for narrow screens.",
        },
      ],
      participantEvidence:
        "The participant counts, excerpts, and findings shown in the prototype belong to a synthetic dataset created to test source linking, contradiction handling, and AI-state disclosure. They are product artifacts, not user-research validation.",
    },
    overview:
      "InsightFlow is a functional AI-assisted research intelligence product that connects qualitative interviews to evidence, insights, themes, opportunities, and reports while keeping source material, contradictory signals, and human review visible.",
    challenge:
      "AI can accelerate qualitative research synthesis, but speed creates a trust problem when generated conclusions become detached from the material that supports them. The design challenge was not simply to generate insights faster. It was to make AI-assisted synthesis inspectable enough that researchers could verify why an insight exists, see what challenges it, and understand when a live model was or was not involved.",
    context: {
      businessGoal:
        "Explore a research workflow that reduces the distance between raw qualitative material and decision-ready synthesis without treating AI output as unquestionable evidence.",
      constraints: [
        "The portfolio dataset is synthetic and cannot be presented as user-research validation",
        "Every generated conclusion needed a traceable path back to source evidence",
        "Supporting and contradicting evidence had to remain distinguishable after synthesis",
        "Live AI availability could change with model access, quota, or configuration",
        "Dense research interactions needed a usable narrow-screen behavior rather than a compressed desktop layout",
      ],
      users:
        "UX researchers, product researchers, and product teams working with qualitative interviews who need to synthesize findings without losing access to the underlying evidence.",
    },
    existingExperience: {
      heading:
        "Where AI-assisted synthesis can break the evidence chain",
      introduction:
        "AI can make qualitative synthesis easier to consume while making the path back to source material harder to inspect.",
      platforms: [
        {
          name: "Source material",
          role:
            "Interview transcripts, audio, files, timestamps, and participant excerpts that contain the original research evidence.",
        },
        {
          name: "Synthesis layer",
          role:
            "Evidence extraction, candidate insights, themes, clustering, and summaries that transform raw material into patterns.",
        },
        {
          name: "Decision layer",
          role:
            "Opportunities, reports, and product direction that depend on the quality and source visibility of the synthesis below them.",
        },
      ],
      issues: [
        {
          title: "Traceability can disappear after synthesis",
          description:
            "A concise AI-generated statement is useful only if a researcher can still inspect the excerpts, participants, and context that support it.",
        },
        {
          title: "Contradictions can be flattened into a dominant pattern",
          description:
            "Summarization can make findings look more unanimous than the underlying material, especially when contradictory evidence is not modeled explicitly.",
        },
        {
          title: "AI state can be ambiguous",
          description:
            "When a model request fails or is unavailable, a fallback should not look indistinguishable from a live model response.",
        },
        {
          title: "Dense desktop interactions do not automatically become mobile interactions",
          description:
            "Spatial clustering, evidence drawers, and multi-column analysis require behavioral adaptation on narrow screens, not only smaller dimensions.",
        },
      ],
    },
    researchDiscovery: {
      heading:
        "Framing AI synthesis as a trust and source-linking problem",
      introduction:
        "This independent exploration used synthetic data to exercise product logic, interaction states, and AI guardrails without presenting fictional participants as research validation.",
      methods: [
        {
          title: "Workflow and data-model mapping",
          description:
            "I mapped the relationship between source excerpts, insights, themes, opportunities, and reports before designing the interface, treating source links as part of the product architecture.",
          output:
            "A traceable Evidence → Insight → Theme → Opportunity → Report model with linked IDs and participant references.",
        },
        {
          title: "AI failure-state design",
          description:
            "I treated model unavailability as a normal product state and designed a transparent fallback instead of allowing demo synthesis to impersonate a successful live AI response.",
          output:
            "Explicit Live AI and Demo synthesis states across Ask AI, interview analysis, and report generation.",
        },
        {
          title: "Synthetic scenario dataset",
          description:
            "A controlled demo dataset was created to exercise conflicting signals, varying SaaS familiarity, evidence-backed findings, theme organization, and opportunity framing without presenting fictional participants as real research.",
          output:
            "10 synthetic interviews, 40 evidence items, 6 approved insights, 5 themes, and 5 opportunities.",
        },
        {
          title: "Technical and interaction QA",
          description:
            "The coded prototype was reviewed through production builds, AI readiness checks, narrow-screen QA, interaction-state review, and an accessibility pass across the primary workflows.",
          output:
            "A portfolio-ready React prototype with responsive behavior, keyboard support, explicit AI states, and a configurable server-side Gemini integration.",
        },
      ],
      limitations: [
        "All participants, interviews, quotes, and findings in the demo dataset are synthetic",
        "No usability study with UX researchers or product researchers has been completed",
        "No production baseline exists for synthesis time, trust, adoption, or decision quality",
        "Accessibility was implemented and manually reviewed, but not independently audited with assistive-technology users",
      ],
    },
    keyFindings: {
      heading:
        "What the prototype exposed about trustworthy AI research workflows",
      introduction:
        "These findings come from product modeling, implementation, and QA, not behavioral research with real users.",
      findings: [
        {
          title: "Provenance has to remain visible after synthesis",
          evidence:
            "Insights in the prototype retain linked evidence IDs, participant counts, timestamps, evidence strength, and direct navigation back to source excerpts.",
          consequence:
            "A synthesized statement can be challenged without forcing the researcher to reconstruct how it was produced.",
          implication:
            "Traceability became a primary interaction path rather than secondary metadata.",
        },
        {
          title: "Contradictory evidence must survive the summary layer",
          evidence:
            "Supporting and contradicting excerpts are modeled as separate evidence types and remain visible inside the evidence drawer and insight summaries.",
          consequence:
            "The interface avoids presenting a dominant pattern as if every participant agreed with it.",
          implication:
            "Evidence semantics use distinct labels, counts, and visual states throughout the product.",
        },
        {
          title: "AI availability is part of the user experience",
          evidence:
            "Ask AI, interview analysis, and report generation distinguish a real Gemini response from a precomputed demo fallback.",
          consequence:
            "A failed model request does not silently become a fake successful AI interaction.",
          implication:
            "Live AI and Demo synthesis are explicit product states with different disclosure language.",
        },
        {
          title: "Responsive behavior sometimes requires a different interaction model",
          evidence:
            "QA at 375 px showed that the affinity Canvas became compressed and difficult to use when treated as a scaled-down desktop interaction.",
          consequence:
            "Keeping the same interaction across breakpoints would preserve visual consistency at the expense of usability.",
          implication:
            "Themes defaults to a linear List view on narrow screens while the spatial Canvas remains a desktop interaction.",
        },
      ],
    },
    designStrategy: {
      heading:
        "Designing trust into the workflow instead of adding it as a disclaimer",
      introduction:
        "Four product principles kept speed, source visibility, uncertainty, and human judgment connected across the experience.",
      principles: [
        {
          title: "No evidence, no insight",
          explanation:
            "AI-assisted synthesis must remain connected to the participant excerpts that justify it.",
          problemAddressed:
            "Generated conclusions can look authoritative after their source context disappears.",
          influence:
            "Insights expose source counts and evidence links, and higher-level outputs remain connected to the research trail below them.",
        },
        {
          title: "Contradictions stay visible",
          explanation:
            "Evidence that weakens or qualifies a pattern is preserved instead of being smoothed away during synthesis.",
          problemAddressed:
            "Summary interfaces can create false unanimity by emphasizing only the dominant signal.",
          influence:
            "Supporting and contradicting evidence use separate semantic treatments and can be reviewed independently.",
        },
        {
          title: "AI state is explicit",
          explanation:
            "The interface should communicate whether a response came from the configured live model or a transparent demo fallback.",
          problemAddressed:
            "A fallback can mislead users if it looks identical to a successful model response.",
          influence:
            "Live AI and Demo synthesis labels remain visible at the point where generated content is consumed.",
        },
        {
          title: "Human judgment remains in the loop",
          explanation:
            "AI can accelerate interpretation, but consequential synthesis steps should remain inspectable and reviewable.",
          problemAddressed:
            "Automation can collapse suggestion, evidence, and decision into one opaque step.",
          influence:
            "Candidate insights, clustering suggestions, evidence inspection, and grouping changes preserve explicit review states.",
        },
      ],
    },
    redesignedExperience: {
      heading:
        "Turning research synthesis into an inspectable decision trail",
      introduction:
        "Each layer adds synthesis while keeping the underlying source material reachable.",
      solutions: [
        {
          title: "Evidence-backed interview analysis",
          problem:
            "A transcript can contain dozens of signals, but automated extraction is risky when the generated interpretation cannot be checked against the original material.",
          response:
            "Transcript segments, timestamps, evidence classification, and candidate insights are connected in one review environment. Evidence-linked moments remain selectable from the transcript.",
          intendedEffect:
            "Reduce the effort required to inspect AI-assisted extraction without separating interpretation from source context.",
        },
        {
          title: "Inspectable insight evidence",
          problem:
            "A synthesized insight can hide how much evidence supports it and whether meaningful counterexamples exist.",
          response:
            "Each insight exposes participant counts, evidence strength, supporting excerpts, contradicting excerpts, and direct transcript navigation.",
          intendedEffect:
            "Help researchers assess the strength and nuance of a finding before using it in product decisions.",
        },
        {
          title: "Research Q&A with source grounding",
          problem:
            "Natural-language querying can make AI answers feel detached from the repository that produced them.",
          response:
            "Ask AI returns a concise synthesis with linked insights, evidence-source counts, and an explicit Live AI or Demo synthesis state.",
          intendedEffect:
            "Make repository-wide querying faster while keeping enough source context to verify the answer.",
        },
        {
          title: "Theme organization that changes with context",
          problem:
            "Spatial affinity mapping works well on larger screens but becomes difficult to read and manipulate on narrow viewports.",
          response:
            "Desktop supports a draggable Canvas and a List view. Mobile defaults to a linear List with keyboard-accessible theme selectors and no compressed Canvas interaction.",
          intendedEffect:
            "Preserve the research task across devices without forcing identical interaction mechanics at every breakpoint.",
        },
        {
          title: "Opportunity source trail",
          problem:
            "Product opportunities can become disconnected from the research evidence that originally justified them.",
          response:
            "The Research Trail links opportunity direction back through insights, evidence, and participants, keeping the rationale inspectable.",
          intendedEffect:
            "Make it easier to challenge or revisit product direction when new evidence appears.",
        },
        {
          title: "Report generation with visible AI state",
          problem:
            "Executive summaries can amplify overconfidence when generated content hides both its sources and the state of the AI system.",
          response:
            "Report generation uses selected sections, approved findings, linked opportunity IDs, and explicit live or fallback labeling.",
          intendedEffect:
            "Support faster communication without presenting generated synthesis as stronger evidence than the repository contains.",
        },
      ],
      prototypeCoverage: [
        "Portfolio demo entry and onboarding preview",
        "Research repository home dashboard",
        "Interview list and interview analysis",
        "Evidence-backed insight review",
        "Ask AI research querying",
        "Themes Canvas and List organization",
        "Opportunity framing and Research Trail",
        "Research report generation",
      ],
    },
    visualEvidence: {
      heading:
        "Product screens that make source links, AI state, and responsive behavior visible",
      introduction:
        "The screens below document the implemented prototype, including the interaction changes introduced during narrow-screen QA.",
      initialGroups: 6,
      expandLabel: "View the complete product gallery",
      groups: [
        ...[
          ["Home", "Summarize research activity, evidence volume, insights, themes, and opportunities in one workspace."],
          ["Interview", "Keep transcript moments, evidence classification, and AI-assisted analysis in the same context."],
          ["Insights", "Expose approval state, impact, evidence strength, and participant coverage before deeper inspection."],
          ["Themes", "Support synthesis through visible groupings that connect related insights."],
          ["Opportunity", "Preserve the research trail from an opportunity back to themes, insights, evidence, and participants."],
          ["Reports", "Turn approved findings into shareable research outputs while keeping synthesis traceable."],
          ["Login", "Set a focused entry point before researchers access the repository."],
          ["Onboarding", "Explain the evidence-first workflow and establish product expectations before the first project."],
          ["Projects", "Make project status, study volume, and recent activity easy to compare across the repository."],
          ["Project", "Bring project progress, research assets, and the synthesis pipeline into a single overview."],
          ["Studies", "Organize research initiatives by method, status, participants, and progress."],
          ["Interviews", "Help researchers scan participant sessions and move quickly into transcript analysis."],
          ["Opportunities", "Translate research patterns into prioritized product directions without losing their evidence basis."],
          ["Library", "Centralize reusable evidence and research assets so knowledge remains discoverable across projects."],
          ["System", "Make workspace configuration, AI behavior, and repository settings explicit and manageable."],
        ].map(([screen, decision]) => ({
          title: `${screen}: responsive product evidence`,
          description: decision,
          images: [
            {
              src: `/assets/cases/insightflow/screens/desktop/${screen.toLowerCase()}.png`,
              alt: `InsightFlow ${screen} screen on desktop.`,
              caption: `${decision} Desktop.`,
              presentation: "desktop" as const,
            },
            {
              src: `/assets/cases/insightflow/screens/mobile/${screen.toLowerCase()}.png`,
              alt: `InsightFlow ${screen} screen on mobile.`,
              caption: `${decision} Mobile.`,
              presentation: "mobile" as const,
            },
          ],
        })),
      ],
    },
    designSystemAccessibility: {
      heading:
        "Using the design system to make research state legible",
      introduction:
        "A restrained semantic system keeps evidence type, AI mode, interaction state, and hierarchy legible across dense research screens.",
      foundations: [
        {
          title: "Evidence semantics",
          description:
            "Supporting and contradicting evidence use separate semantic colors, labels, counts, and border treatments so meaning is not encoded by color alone.",
        },
        {
          title: "Restrained visual hierarchy",
          description:
            "A neutral surface system and restrained indigo accent keep attention on research content rather than using a generic high-saturation AI aesthetic.",
        },
        {
          title: "AI-state hierarchy",
          description:
            "Live AI, demo fallback, AI suggestions, reviewed insights, and evidence strength use consistent language and status treatments.",
        },
        {
          title: "Task-aware responsiveness",
          description:
            "Dense two-column analysis stacks on narrow screens, mobile navigation keeps core destinations accessible, and Themes switches from spatial Canvas behavior to List behavior.",
        },
      ],
      components: [
        "Desktop sidebar and mobile bottom navigation",
        "Global search and Ask AI dialog",
        "Interview transcript and evidence markers",
        "Insight cards and evidence drawer",
        "Theme Canvas, List, and reassignment controls",
        "Opportunity and Research Trail nodes",
        "AI labels, status badges, and disclosure states",
        "Report-generation controls and feedback states",
      ],
      accessibility: [
        {
          title: "Keyboard and focus behavior",
          description:
            "Dialogs and drawers support Escape-to-close, focus restoration, focus trapping where needed, and keyboard-operable evidence and research-trail interactions.",
        },
        {
          title: "Semantic controls and state",
          description:
            "Icon-only controls expose accessible names, forms use labels, and interactive states use attributes such as aria-selected, aria-pressed, aria-current, aria-expanded, and progress semantics where relevant.",
        },
        {
          title: "Reduced motion",
          description:
            "The interface respects prefers-reduced-motion so non-essential animation and transitions do not become a barrier.",
        },
        {
          title: "Alternative mobile interaction",
          description:
            "The affinity Canvas is not forced onto narrow screens. Mobile uses a linear List with native selectors to preserve readability and operability.",
        },
      ],
      limitation:
        "The prototype received an implementation-focused accessibility pass, but it has not yet been evaluated through an independent WCAG audit or usability sessions with assistive-technology users.",
    },
    validationNextSteps: {
      heading:
        "Separating technical readiness from product validation",
      introduction:
        "Build, AI-readiness, responsive, and interaction checks confirm prototype behavior, not researcher trust or workflow value.",
      completedReviews: [
        {
          title: "Production build integrity",
          description:
            "The portfolio-ready package completed a production build without TypeScript or bundle errors in the local environment.",
        },
        {
          title: "Live AI readiness",
          description:
            "A server-side readiness check confirmed the configured Gemini model could return a valid response before the local demo was exercised.",
        },
        {
          title: "Responsive QA",
          description:
            "Desktop and 375 px layouts were reviewed across the entry experience, insight evidence, interview analysis, and Themes. The Themes mobile interaction was changed after the initial compressed Canvas behavior failed visually.",
        },
        {
          title: "Accessibility implementation pass",
          description:
            "Primary workflows were reviewed for keyboard access, accessible naming, dialog behavior, focus management, state semantics, and reduced-motion support.",
        },
      ],
      pendingValidation: [
        {
          title: "Researcher usability study",
          description:
            "Test whether researchers can move from a generated insight back to evidence, identify contradictory signals, and understand the difference between live and fallback AI states.",
        },
        {
          title: "Trust calibration",
          description:
            "Evaluate whether evidence strength, source counts, and AI labels create appropriate confidence rather than either over-trust or unnecessary skepticism.",
        },
        {
          title: "Production privacy and security review",
          description:
            "Define retention, access, consent, data-processing, and model-governance requirements before real research material is uploaded.",
        },
        {
          title: "Scale and performance testing",
          description:
            "Evaluate larger repositories, long transcripts, cross-study retrieval, clustering density, and report-generation behavior with production-like datasets.",
        },
      ],
      proposedSignals: [
        {
          label: "Evidence inspection rate",
          description:
            "How often researchers open linked evidence before approving or reusing a generated finding.",
        },
        {
          label: "AI suggestion correction rate",
          description:
            "How often researchers edit, reject, or regroup AI-assisted synthesis before accepting it.",
        },
        {
          label: "Time to validated insight",
          description:
            "Elapsed time from source material entering the repository to a human-reviewed insight ready for downstream use.",
        },
        {
          label: "Contradiction review rate",
          description:
            "Whether contradictory evidence is inspected when it materially qualifies an insight or opportunity.",
        },
      ],
    },
    outcomesCurrentStatus: {
      heading:
        "A functional prototype, not a claim of product impact",
      introduction:
        "The current outcome is a functional implementation direction with explicit AI guardrails, not measured user or business impact.",
      deliverables: [
        {
          title: "Evidence-first product architecture",
          description:
            "A connected model from source evidence through insight, theme, opportunity, and report, with source links preserved across layers.",
        },
        {
          title: "Functional coded workflow",
          description:
            "A React and TypeScript prototype covering repository navigation, interview analysis, evidence review, Ask AI, clustering, opportunities, and report generation.",
        },
        {
          title: "AI trust guardrails",
          description:
            "Server-side Gemini integration, source grounding, explicit Live AI versus Demo synthesis states, and human-review checkpoints.",
        },
        {
          title: "Responsive and accessible interaction patterns",
          description:
            "Narrow-screen behavior, keyboard-operable controls, focus management, semantic states, and reduced-motion support across the main workflows.",
        },
      ],
      currentStatus: [
        {
          label: "Prototype",
          description: "Functional and build-tested locally.",
        },
        {
          label: "Research data",
          description: "Synthetic demo dataset only.",
        },
        {
          label: "AI integration",
          description: "Live Gemini connection verified locally, with transparent fallback behavior.",
        },
        {
          label: "User validation",
          description: "Pending with real research practitioners.",
        },
      ],
      evidenceNote:
        "No production adoption, productivity improvement, trust score, time savings, or business outcome is claimed. The numeric counts below describe the synthetic demo dataset and prototype coverage only.",
    },
    learningsNextSteps: {
      heading:
        "What this exploration changed in my approach to AI product design",
      introduction:
        "The clearest lessons came from three concrete decisions: keep source paths visible, label fallback behavior honestly, and change the mobile Themes interaction instead of shrinking the desktop Canvas.",
      learnings: [
        {
          title: "Trust has to be designed into the evidence model",
          description:
            "If source relationships are missing from the underlying structure, the interface cannot reliably reconstruct them later. Evidence links need to exist before visual explanations are designed.",
        },
        {
          title: "Fallback behavior is part of product honesty",
          description:
            "A graceful fallback is not enough if it impersonates a live model. System state has to remain legible when the AI layer fails or is intentionally unavailable.",
        },
        {
          title: "Contradictions are product information",
          description:
            "Counterevidence should not be treated as noise to be removed during synthesis. Preserving it changes how insight strength and decision confidence are communicated.",
        },
        {
          title: "Responsive design can require changing the interaction",
          description:
            "The mobile Themes iteration showed that preserving the task can be more important than preserving the desktop mechanic.",
        },
      ],
      nextIteration: [
        {
          title: "Test with research practitioners",
          description:
            "Run moderated sessions around source inspection, contradiction review, AI-state comprehension, insight approval, and theme reassignment.",
        },
        {
          title: "Capture human corrections",
          description:
            "Make edits, rejections, and regrouping changes persistent so the system can distinguish model suggestions from researcher decisions over time.",
        },
        {
          title: "Add production data governance",
          description:
            "Define authentication, workspace permissions, retention, audit history, consent, and model-processing controls before accepting real research material.",
        },
        {
          title: "Deploy the portfolio demo with server-side AI",
          description:
            "Host the current accessible version with secrets protected server-side so the public demo can use Live AI without exposing an API key in the browser.",
        },
      ],
    },
    process: {
      research: [
        "Mapped the end-to-end qualitative synthesis workflow and the points where source context could be lost",
        "Defined a synthetic demo dataset to exercise evidence, contradictions, themes, opportunities, and AI states without presenting fictional research as real validation",
        "Modeled the relationships between evidence IDs, insights, themes, opportunities, participants, and reports",
        "Reviewed AI failure states, source-grounding requirements, responsive behavior, and accessibility needs before final QA",
      ],
      insights: [
        "Evidence links had to remain a visible interaction path rather than hidden metadata",
        "Contradictory evidence needed its own persistent state throughout synthesis",
        "A live model response and a fallback synthesis could not share the same trust signal",
        "Human review was necessary at consequential synthesis points",
        "The spatial affinity Canvas needed a different mobile behavior rather than simple scaling",
      ],
      solutions: [
        "Evidence-linked transcript analysis and insight review",
        "Supporting and contradicting evidence drawers with direct source navigation",
        "Explicit Live AI and Demo synthesis states",
        "AI-assisted querying, clustering suggestions, opportunity framing, and report generation with reviewable outputs",
        "Desktop affinity Canvas with mobile-first List behavior",
        "Accessible dialogs, keyboard interaction, semantic state attributes, and reduced-motion support",
      ],
      validation: [
        "Production build and TypeScript checks",
        "Gemini readiness check with the configured model",
        "Desktop and 375 px visual QA across primary workflows",
        "Accessibility-focused implementation review",
        "Real-user validation remains a defined next step rather than a completed outcome",
      ],
    },
    impact: {
      metrics: [
        {
          label: "Synthetic interviews",
          value: "10",
          detail: "Demo research records",
        },
        {
          label: "Evidence items",
          value: "40",
          detail: "Traceable synthetic excerpts",
        },
        {
          label: "Approved insights",
          value: "6",
          detail: "Evidence-backed demo findings",
        },
        {
          label: "Opportunities",
          value: "5",
          detail: "Linked product directions",
        },
      ],
      business:
        "The project produced a functional direction for evidence-grounded AI research synthesis, including the data model, interaction architecture, responsive behavior, accessibility patterns, and live/fallback AI states. User and business impact have not been measured because the product has not been validated with real research teams or released in production.",
    },
    learnings: [
      "Trustworthy AI UX starts in the data model, not in explanatory copy",
      "Contradictory evidence should remain visible when synthesis becomes more concise",
      "AI failure states need honest product language rather than invisible fallback behavior",
      "Human review is most valuable at the points where synthesis becomes decision-making",
      "Responsive product design may require changing the interaction model while preserving the task",
    ],
  },
  {
    id: 3,
    slug: "ledgerflow-accounting-platform",
    title: "Designing safer multi-company accounting operations",
    company: "LedgerFlow · Brazilian B2B Accounting SaaS",
    role: "Product Designer",
    year: "2026",
    category: "Product Design · Fintech · B2B SaaS",
    projectNature: "Independent product initiative · Pre-pilot accounting-office study",
    prototypeUrl:
      "https://www.figma.com/proto/79LeQIZXXjuWcoDleD5Pf2/LedgerFlow?node-id=317-2&starting-point-node-id=317%3A2&scaling=scale-down&content-scaling=fixed&page-id=287%3A10",
    team: "Independent project · Sole product designer",
    tools: ["Figma"],
    scope:
      "End-to-end product definition for a Brazilian accounting-office pilot, including eight moderated usability sessions with real professionals, a reusable design system, 36 desktop product states, 19 mobile routes, clickable prototype flows, a dedicated accessibility pass, and engineering-ready product rules.",
    status:
      "Clickable product prototype, reusable design system, and accessibility specification complete. Engineering implementation and the controlled office pilot are next.",
    executiveSummary: {
      heading: "Turning accounting complexity into a safer operating model",
      summary:
        "LedgerFlow organizes multi-company accounting work around the moments that require judgment: confirming context, preserving successful batch work, reviewing evidence behind automated suggestions, exposing dependencies, and deciding when a period is truly ready to close. I first tested that decision model with eight real accounting and BPO professionals, then expanded the validated flows into a complete desktop-first product system with a complementary mobile experience, explicit safety gates, auditability, and accessibility requirements built into the design system.",
      metrics: [
        {
          label: "Participants",
          value: "8",
          detail: "Real accounting and BPO contexts",
        },
        {
          label: "Task evaluations",
          value: "64",
          detail: "Eight critical workflows per participant",
        },
        {
          label: "Mean SEQ",
          value: "6.94 / 7",
          detail: "Perceived ease across the study",
        },
        {
          label: "Conflict detection",
          value: "7 / 7",
          detail: "Comparable participants rejected the unsafe 99% match",
        },
      ],
      gate: {
        usability: "SUPPORTED",
        release: "PENDING",
        explanation:
          "The moderated study supported the core decision model on static high-fidelity screens. The final Figma product now includes the post-test iterations and clickable flows, but real permissions, background processing, notifications, integrations, period locking, keyboard behavior, and assistive-technology output still require implementation and production QA before the office pilot.",
      },
      iteration: [
        {
          step: "Validate the decision model",
          description:
            "Test context switching, partial imports, reconciliation evidence, automation risk, dependency chains, and closing gates with eight real professionals.",
        },
        {
          step: "Productize the workflows",
          description:
            "Expand the tested states into a complete application architecture with portfolio views, companies, fiscal work, pending items, communications, settings, audit history, responsive routes, and connected prototype flows.",
        },
        {
          step: "Strengthen safety and accessibility",
          description:
            "Add mandatory review for conflicting CNPJ evidence, an adjustment gate for unsafe automation previews, clearer import continuity, save-and-next handling, role-aware authorization concepts, explicit focus states, larger hit areas, and an accessibility release contract.",
        },
      ],
      participantEvidence:
        "A less-experienced participant repeatedly identified the safe next step while recognizing that activation, transmission, or period lock should belong to a more authorized role. That distinction became a product question about preparing work without hiding critical context.",
    },
    overview:
      "LedgerFlow is a desktop-first B2B accounting operations platform for Brazilian accounting offices. It connects multi-company context, imports, exceptions, reconciliation, fiscal dependencies, automation, reporting, closing, and auditability in one operating model, while keeping the evidence and recovery paths behind critical decisions visible.",
    challenge:
      "Accounting work becomes risky when financial data, source documents, deadlines, exceptions, and responsibilities are fragmented across systems and teams. The challenge was not simply to automate more work. It was to design an operating model where the active context, supporting evidence, downstream consequence, ownership, and recovery path are visible before someone takes a high-impact action.",
    context: {
      businessGoal:
        "Create a scalable operating layer for a Brazilian accounting office that keeps routine work moving while directing human attention to the exceptions, dependencies, and decisions that can delay or compromise closing.",
      constraints: [
        "Multi-company and multi-branch work creates wrong-context risk",
        "Batch imports must preserve successful records when only a subset requires attention",
        "AI and automation need inspectable evidence and consequences before approval",
        "Different roles may understand the same workflow while having different authority to execute critical actions",
        "Month-end closing must remain connected to the evidence behind reported values",
        "Accessibility needs to remain a release requirement across dense financial workflows",
        "The research used static screens, so production behavior still needs functional validation",
      ],
      users:
        "The initial product is designed for professionals working inside Brazilian accounting offices, from interns and assistants to analysts, fiscal teams, coordinators, and administrators. The moderated research round focused on real accounting and BPO professionals; client-facing business-owner workflows remain outside this validation round.",
    },
    researchDiscovery: {
      heading: "Testing the risky decisions before expanding the product",
      introduction:
        "Before turning the flows into a complete product system, I ran two rounds of moderated usability sessions with eight real participants. The study focused on whether the interface communicated critical states clearly and whether participants could make safe intended decisions across the accounting cycle.",
      methods: [
        {
          title: "Participant profile",
          description:
            "The sample included one accounting intern, one accounting assistant, three accounting professionals at analyst or self-declared senior level, two coordination and BPO/control professionals, and one participant with Tax Advisory and Audit experience.",
          output:
            "8 employees across entry, operational, analytical, coordination, control, technology, and audit contexts",
        },
        {
          title: "Internal recruitment and study structure",
          description:
            "Participants were recruited internally from the accounting office for which the product is intended. The exact internal selection mechanism was not recorded. The study ran as two sequential rounds of four participants, with approximately 50 to 60 minutes per session. The rounds were not an A/B test.",
          output:
            "2 rounds · 4 participants per round · approximately 50–60 minutes per session",
        },
        {
          title: "Moderated usability sessions",
          description:
            "Participants reviewed high-fidelity static screens while narrating what they would do, what evidence they would verify, and when they would escalate a decision.",
          output: "8 completed sessions across 8 critical workflows",
        },
        {
          title: "Critical-risk scenarios",
          description:
            "Tasks intentionally included wrong-entity risk, partial batch outcomes, a dangerous 99% reconciliation suggestion, an over-broad automation rule, dependency blockers, and a closing gate with unsupported evidence.",
          output: "Observed decision patterns around safety, evidence, and escalation",
        },
        {
          title: "Post-task SEQ",
          description:
            "Participants rated perceived task ease from 1 to 7 after each workflow. SEQ was used as a descriptive usability signal, not as evidence of production speed or operational efficiency.",
          output: "6.94 / 7 mean SEQ across 64 task evaluations",
        },
      ],
      limitations: [
        "Static screens validated comprehension and intended actions, not functional interaction behavior.",
        "Keyboard shortcuts, notification delivery, background processing, automatic state changes, role enforcement, and period locking were not technically tested in the study.",
        "Explicit warnings and disabled states validate comprehension of visible safeguards, not independent discovery of hidden risks.",
        "P01 received an earlier ambiguous T5B stimulus, so the corrected dangerous-reconciliation comparison uses P02 through P08 only.",
        "The final product system includes post-test iterations that were not part of the original research stimulus and therefore are not reported as research-validated behavior.",
      ],
    },
    keyFindings: {
      heading: "The research shaped the product around evidence, not automation volume",
      introduction:
        "The strongest pattern was not a request for more automation. Participants consistently relied on context, evidence, visible consequences, and traceability before high-impact decisions. Those behaviors became the backbone of the final product system.",
      findings: [
        {
          title: "Context is part of accounting safety",
          evidence:
            "Participants repeatedly verified company, branch, CNPJ, and reporting period before continuing. No participant intended a critical action in the wrong entity during the tested switching flow.",
          consequence:
            "Entity context cannot be treated as secondary navigation metadata in multi-company work.",
          implication:
            "The final product keeps company, branch, CNPJ, internal code, and competence visible around critical workflows and provides dedicated context-switching states.",
        },
        {
          title: "Partial success should remain useful",
          evidence:
            "Participants understood the 288-of-300 import result and consistently avoided reprocessing the full batch because 12 records required attention.",
          consequence:
            "A small exception set should not invalidate already-successful work.",
          implication:
            "The product preserves successful records, exposes processing progress, separates attention items, and routes users directly into exception handling.",
        },
        {
          title: "Evidence must outrank AI confidence",
          evidence:
            "With the corrected stimulus, 7/7 comparable participants, P02 through P08, rejected a 99% reconciliation suggestion after noticing that the bank movement and document had different CNPJs.",
          consequence:
            "Confidence can prioritize review, but it should never substitute for inspectable evidence.",
          implication:
            "The final product keeps side-by-side evidence and adds a post-test mandatory-review gate when critical identity evidence conflicts.",
        },
        {
          title: "Automation needs a preview of consequences",
          evidence:
            "All eight participants refused or recommended against activation when the preview explicitly showed that a broad rule would also capture a R$ 1,850 equipment-maintenance transaction.",
          consequence:
            "A rule can match the text pattern while still being wrong in accounting meaning.",
          implication:
            "The final flow exposes conditions, scope, impact, unintended matches, and a post-test adjustment gate before activation, plus monitoring after rules become active.",
        },
        {
          title: "Priority changes when dependencies change",
          evidence:
            "Participants combined deadline, consequence, blocker, dependency, and current state. They reprioritized work when a dependency moved from blocked to actionable.",
          consequence:
            "Operational priority is dynamic and cannot be reduced to due date alone.",
          implication:
            "Obligations, pending items, owners, dependencies, and current states remain visible across the operational shell instead of living in isolated screens.",
        },
        {
          title: "Closing is a control layer, not a final button",
          evidence:
            "Participants traced a DRE value into its composition and unsupported manual entry, then declined to close while the critical issue remained visibly unresolved.",
          consequence:
            "Closing is where evidence, exceptions, obligations, and accountability converge.",
          implication:
            "The final product includes report drill-down, critical closing states, a ready-to-lock state, a locked-period state, and explicit reopening governance.",
        },
      ],
    },
    designStrategy: {
      heading: "A product model built around professional judgment",
      introduction:
        "I reframed the experience from processing every item equally to helping professionals identify what is routine, uncertain, blocked, or consequential, while keeping automation challengeable and recovery paths visible.",
      principles: [
        {
          title: "Context before action",
          explanation:
            "Users should know exactly which entity, branch, and period a decision affects before they act.",
          problemAddressed: "Wrong-company and wrong-period risk",
          influence: "Persistent entity context and explicit context switching",
        },
        {
          title: "Exceptions before volume",
          explanation:
            "Successful work should keep moving while exceptions are isolated for review.",
          problemAddressed: "All-or-nothing batch handling",
          influence: "Partial success states, filters, queues, and save-and-next handling",
        },
        {
          title: "Evidence before confidence",
          explanation:
            "Automated recommendations must remain challengeable through inspectable evidence.",
          problemAddressed: "Over-reliance on AI confidence scores",
          influence: "Side-by-side evidence and mandatory review for critical identity conflicts",
        },
        {
          title: "Automate certainty",
          explanation:
            "Recurring actions should become automatic only after users can inspect scope and likely impact.",
          problemAddressed: "False positives from broad automation rules",
          influence: "Impact preview, adjustment gate, and post-activation monitoring",
        },
        {
          title: "Keep humans in control",
          explanation:
            "High-impact decisions need clear review, authorization, escalation, and recovery paths.",
          problemAddressed: "Opaque or irreversible system actions",
          influence: "Review gates, permission concepts, confirmations, reversals, and reopening flows",
        },
        {
          title: "Preserve traceability",
          explanation:
            "Correcting a decision should change the current state without erasing its history.",
          problemAddressed: "Loss of audit context after reversals",
          influence: "Audit events preserve action, actor, time, reason, and previous decisions",
        },
        {
          title: "Closing is the backbone",
          explanation:
            "Final numbers should remain connected to the evidence and dependencies that support them.",
          problemAddressed: "Closing as a disconnected end-state",
          influence: "DRE drill-down, closing checklist, period lock, and controlled reopening",
        },
      ],
    },
    informationArchitecture: {
      heading: "From tested task flows to a complete accounting operations system",
      introduction:
        "The final architecture connects portfolio management, daily processing, dependencies, communication, reporting, governance, and closing inside one persistent company and competence context.",
      previousStructure: [
        "Transactions and bank data handled as isolated processing tasks",
        "Documents disconnected from the values they support",
        "Obligations prioritized mainly by date",
        "Reports consumed primarily as end outputs",
        "Closing treated as a final administrative step",
      ],
      proposedStructure: [
        "Visão geral and Empresas for portfolio and entity context",
        "Importações and Exceções for batch processing and correction",
        "Conciliação for evidence-based review and reversible decisions",
        "Fiscal and Obrigações for dependencies and deadlines",
        "Pendências and Comunicações for cross-module operational follow-up",
        "Automação for rules, preview, and monitoring",
        "Relatórios for DRE, composition, entries, and source evidence",
        "Fechamento for critical checks, lock, and reopening",
        "Configurações and Auditoria for roles, policies, and traceability",
      ],
      mainFlow: [
        "Collect",
        "Validate",
        "Import",
        "Map",
        "Reconcile",
        "Resolve exceptions",
        "Review",
        "Close",
        "Lock",
        "Report",
        "Trace",
      ],
      decisions: [
        {
          title: "Do not force one universal exception priority",
          description:
            "Five participants started with inconsistencies and three with mapping issues. Instead of turning the majority into a fixed queue order, the final product exposes filters, volume, impact, dependency, value, and consequence so professionals can prioritize from context.",
        },
        {
          title: "Separate visibility from authority",
          description:
            "The least-experienced participant often understood the correct action but considered final activation, transmission, or period lock outside his authority. The product therefore explores Prepare → Review → Approve as a permission model rather than hiding the workflow from less-authorized roles.",
        },
      ],
    },
    redesignedExperience: {
      heading: "Five high-risk moments anchor a broader product system",
      introduction:
        "The final prototype now covers the wider accounting operation, but the product narrative stays centered on the decisions where clarity and safety matter most.",
      solutions: [
        {
          title: "01 · Context before action",
          problem:
            "Frequent switching between companies and branches can create silent wrong-context errors.",
          response:
            "Keep company, branch, CNPJ, internal code, and reporting period visible before and after context switching, then carry that context across the product shell.",
          intendedEffect:
            "Support an explicit verification habit before imports, reconciliation, fiscal work, reporting, and closing.",
        },
        {
          title: "02 · Exceptions before volume",
          problem:
            "A few problematic records can create unnecessary rework when batch processing is treated as all-or-nothing.",
          response:
            "Preserve successfully processed records, explain background processing, isolate attention items, and support repetitive resolution with save-and-next handling.",
          intendedEffect:
            "Keep valid work moving while directing human effort to exceptions.",
        },
        {
          title: "03 · Evidence before confidence",
          problem:
            "A high AI confidence score can look authoritative even when a critical identifier conflicts.",
          response:
            "Show the bank movement and suggested document side by side, then route critical identity conflicts into a mandatory review state instead of a normal approval path.",
          intendedEffect:
            "Make confidence useful for triage without allowing it to replace accounting evidence.",
        },
        {
          title: "04 · Preview and govern automation",
          problem:
            "Broad rules can automate a valid text pattern and an invalid accounting meaning at the same time.",
          response:
            "Preview historical impact before activation, require adjustment when a false positive is already visible, and continue governance through monitoring, overrides, pause, and review states.",
          intendedEffect:
            "Make automation safer both before and after activation.",
        },
        {
          title: "05 · Trace before closing",
          problem:
            "A consolidated report can look complete while an underlying entry is still unsupported.",
          response:
            "Connect DRE, composition, entry, evidence, closing blockers, ready state, period lock, audit history, and controlled reopening.",
          intendedEffect:
            "Make closing a traceable decision supported by evidence instead of a final button press.",
        },
      ],
      prototypeCoverage: [
        "Portfolio overview, companies, branches, and persistent competence context",
        "Imports, processing, partial results, exception queues, and DE-PARA scope",
        "Reconciliation suggestions, review, safety gate, reversal, and audit history",
        "Automation rules, impact preview, adjustment gate, activation monitoring, and controls",
        "Fiscal overview, obligations, dependency chains, pending items, and communications",
        "DRE, composition, accounting entry detail, supporting evidence, closing, lock, and reopening",
        "36 desktop states plus 19 mobile routes connected in Figma prototype flows",
        "Reusable design system, responsive patterns, and a dedicated accessibility specification",
      ],
    },
    visualEvidence: {
      heading: "The final case mirrors the product system built after research",
      introduction:
        "The product UI remains in Portuguese because LedgerFlow is designed for a Brazilian accounting-office context, while the case narrative stays in English. The visual evidence focuses on desktop because the pilot's critical operational workflows are desktop-first. The 19 complementary mobile routes remain available in the clickable Figma prototype and are documented as design coverage, not research validation. Research findings are reported separately so post-test safety gates and productization work are not retroactively presented as validated behavior.",
      groups: [
        {
          title: "Multi-company context stays visible before the work starts",
          description:
            "The portfolio view makes closing progress, deadlines, blockers, ownership, risk, and active company context visible across the office. Switching context then exposes company, branch, CNPJ, internal code, and competence before the user changes where they are working.",
          images: [
            {
              src: "/assets/cases/ledgerflow/final/01-portfolio-overview.png",
              alt: "LedgerFlow portfolio overview in Portuguese showing multiple companies, closing progress, deadlines, blockers, owners, risk levels, and the active company context.",
              caption: "Portfolio overview turns multi-company closing into an operational queue, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/ledgerflow/final/02-company-context-switch.png",
              alt: "LedgerFlow company switcher in Portuguese listing company and branch options with CNPJ, internal codes, and the active competence.",
              caption: "Context switching exposes the entity details that matter before changing company, desktop.",
              presentation: "desktop",
            },
          ],
        },
        {
          title: "Partial success keeps valid work moving",
          description:
            "Import processing separates progress from completion and makes each source state visible. When the batch finishes, successful records remain available while only the exceptions move into review. Repetitive mapping then makes correction scope explicit instead of silently turning one classification into a future rule.",
          images: [
            {
              src: "/assets/cases/ledgerflow/final/03-import-processing.png",
              alt: "LedgerFlow import processing screen in Portuguese showing a 300-record batch, 74 percent progress, processed records, individual source states, and a continue-working action.",
              caption: "Background processing communicates progress and lets users continue working, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/ledgerflow/final/04-import-partial-result.png",
              alt: "LedgerFlow partial import result in Portuguese showing 288 processed successfully, 12 requiring attention, zero total failures, categorized exceptions, and import history.",
              caption: "Partial success preserves 288 valid records while routing 12 exceptions for review, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/ledgerflow/final/05-mapping-scope.png",
              alt: "LedgerFlow DE-PARA mapping screen in Portuguese for VIVO S.A. showing supporting context, a suggested accounting account, and explicit scope choices for one item, similar batch items, or future transactions.",
              caption: "Classification and correction scope are separate decisions, desktop.",
              presentation: "desktop",
            },
          ],
        },
        {
          title: "Evidence is stronger than a confidence score",
          description:
            "The reconciliation review puts the bank movement and suggested document side by side. In this high-confidence example, amount and date agree while the CNPJs do not. The final Figma flow keeps that evidence visible and adds a post-test mandatory-review gate when a critical identity conflict is present.",
          images: [
            {
              src: "/assets/cases/ledgerflow/final/06-reconciliation-evidence.png",
              alt: "LedgerFlow reconciliation review in Portuguese showing a 99 percent confidence suggestion, matching amount and date, and different CNPJs highlighted between the bank movement and suggested document.",
              caption: "A 99% suggestion remains reviewable because conflicting CNPJ evidence stays visible, desktop.",
              presentation: "desktop",
            },
          ],
        },
        {
          title: "Automation shows consequences before activation",
          description:
            "A rule preview combines condition, scope, expected matches, and an unintended equipment-maintenance match in the same decision surface. The final prototype routes a known false positive back to adjustment rather than treating activation as a normal next step.",
          images: [
            {
              src: "/assets/cases/ledgerflow/final/07-automation-impact-preview.png",
              alt: "LedgerFlow automation impact preview in Portuguese showing recurring bank-fee matches and an attention state for a R$ 1,850 equipment-maintenance transaction that would be captured by the broad rule.",
              caption: "Impact preview makes the unintended match visible before the rule becomes operational, desktop.",
              presentation: "desktop",
            },
          ],
        },
        {
          title: "Dependencies change what deserves attention next",
          description:
            "Obligations are shown as a dependency chain rather than an isolated deadline list. Once EFD-Reinf is completed, DCTFWeb becomes available for review and the next action changes without losing the surrounding fiscal and closing context.",
          images: [
            {
              src: "/assets/cases/ledgerflow/final/10-obligations-dependencies.png",
              alt: "LedgerFlow obligations and dependencies screen in Portuguese showing eSocial and EFD-Reinf completed, DCTFWeb released for review, closing still pending, deadlines, impacts, dependencies, and owners.",
              caption: "Dependency state and consequence sit alongside deadlines and ownership, desktop.",
              presentation: "desktop",
            },
          ],
        },
        {
          title: "Closing stays connected to the evidence behind the numbers",
          description:
            "The report drill-down exposes the individual entries that compose a DRE line and clearly marks the unsupported AJ-0717-204 adjustment. Once required evidence and other validations are complete, the closing state explains what period locking means and keeps audit and reopening governance visible.",
          images: [
            {
              src: "/assets/cases/ledgerflow/final/08-dre-composition.png",
              alt: "LedgerFlow DRE composition screen in Portuguese showing four entries that compose Services of third parties and highlighting AJ-0717-204 as having no supporting document.",
              caption: "DRE composition traces a consolidated value back to the unsupported accounting entry, desktop.",
              presentation: "desktop",
            },
            {
              src: "/assets/cases/ledgerflow/final/09-closing-ready.png",
              alt: "LedgerFlow closing screen in Portuguese showing all required validations completed, period ready to lock, governance information, and the Fechar e bloquear action.",
              caption: "Closing-ready state makes the lock decision and its governance explicit, desktop.",
              presentation: "desktop",
            },
          ],
        },
      ],
    },
    designSystemAccessibility: {
      heading: "Accessibility is part of the product system, not a final audit",
      introduction:
        "After expanding LedgerFlow beyond the research stimuli, I formalized the visual language into reusable foundations and components, then ran a dedicated accessibility pass across the desktop and mobile product. Accessibility is treated as a release contract that follows the product into engineering, not as a final visual audit.",
      foundations: [
        {
          title: "Semantic design tokens",
          description:
            "Two variable collections separate primitives from semantic color, spacing, radius, sizing, action, status, text, border, and navigation roles so implementation can preserve meaning instead of copying isolated values.",
        },
        {
          title: "Readable hierarchy",
          description:
            "Typography, spacing, radius, and elevation foundations support dense financial information without making metadata indistinguishable from actions, blockers, or evidence.",
        },
        {
          title: "Responsive product structure",
          description:
            "The same operational model is expressed across 36 desktop states and 19 mobile routes, with mobile focused on triage, review, approval, and follow-up rather than shrinking desktop tables into a phone.",
        },
      ],
      components: [
        "Button and Icon Button",
        "Input, Search, and Select",
        "Status Tag and Filter Chip",
        "Navigation Item",
        "Card and Panel",
        "Table Header and Row",
        "Alert and Progress",
        "Checklist Item",
        "Audit Event",
        "Empty State",
        "Pagination",
        "Modal and Drawer",
      ],
      accessibility: [
        {
          title: "Meaning never depends on color alone",
          description:
            "Risk, success, attention, blocked, and completed states pair color with explicit labels and contextual text. Critical closing and reconciliation states explain the reason, not only the visual severity.",
        },
        {
          title: "Focus states belong to the component API",
          description:
            "Buttons, icon buttons, navigation items, chips, pagination, inputs, search, and selects include explicit focus variants so keyboard visibility is designed before implementation.",
        },
        {
          title: "Target size and typography were corrected at system level",
          description:
            "The accessibility pass left no product text below the 12 px internal baseline and expanded 450 desktop prototype targets plus 92 mobile targets to the internal minimum hit areas: 32 px on desktop and 44 px on mobile.",
        },
        {
          title: "The handoff includes non-visual behavior",
          description:
            "The accessibility specification documents logical keyboard order, dialog focus management, screen-reader naming, semantic financial tables, async status announcements, zoom and reflow, reduced motion, and the accessible naming rule for the LedgerFlow logo.",
        },
      ],
      limitation:
        "Figma can verify visual contrast, target size, focus-state design, hierarchy, and expected behavior, but it cannot prove semantic HTML, real Tab order, focus trapping, live-region output, screen-reader behavior, browser zoom/reflow, or permission enforcement. Those remain mandatory implementation and QA gates before the pilot can be called accessible.",
    },
    usabilityValidation: {
      heading: "Research evidence and what changed afterwards",
      introduction:
        "The study produced strong qualitative support for the decision model. The final product then incorporated the recurring usability signals and additional safety gates, while keeping those post-test changes separate from the original research claims.",
      studyMetrics: [
        {
          label: "Participants",
          value: "8",
          detail: "Two moderated rounds",
        },
        {
          label: "Task evaluations",
          value: "64",
          detail: "Eight workflows each",
        },
        {
          label: "Mean SEQ",
          value: "6.94 / 7",
          detail: "Perceived ease",
        },
        {
          label: "Critical moderator assists",
          value: "0",
          detail: "Across the full study",
        },
      ],
      iteration: [
        {
          title: "Final Figma iteration: save and continue for repetitive exceptions",
          description:
            "A recurring expectation was to save a classification and move directly to the next unresolved item. The final product adds a faster repetitive-handling pattern without changing the decision model.",
        },
        {
          title: "Final Figma iteration: clearer import continuity and async return path",
          description:
            "The final import states clarify previous batches, duplicate risk, background processing, and where the completed result will remain available after the user continues working.",
        },
        {
          title: "Final Figma iteration: stronger review gates",
          description:
            "A conflicting CNPJ now routes into mandatory review, while an automation preview with a known false positive routes back to adjustment rather than normal activation.",
        },
        {
          title: "Final Figma iteration: audit and post-activation governance",
          description:
            "The product now includes reason-aware audit history, rule monitoring, pause/edit concepts, a locked-period state, and controlled reopening flows.",
        },
        {
          title: "Final Figma iteration: accessibility pass",
          description:
            "Focus states, target sizes, operational text baselines, contrast checks, non-color status communication, and a production accessibility QA contract were formalized after the core product system was assembled.",
        },
      ],
      routeResults: [
        {
          route: "T1 · Prioritize closing",
          startingPoint: "Closing dashboard",
          sessions: "8",
          directSuccess: "Validated with iteration",
          averageTime: "Not measured",
          averageSeq: "6.75 / 7",
        },
        {
          route: "T2 · Switch company and branch",
          startingPoint: "Active entity",
          sessions: "8",
          directSuccess: "Validated",
          averageTime: "Not measured",
          averageSeq: "6.88 / 7",
        },
        {
          route: "T3 · Batch import and partial success",
          startingPoint: "New import",
          sessions: "8",
          directSuccess: "Validated with iteration",
          averageTime: "Not measured",
          averageSeq: "6.88 / 7",
        },
        {
          route: "T4 · Resolve exceptions and correction scope",
          startingPoint: "DE-PARA queue",
          sessions: "8",
          directSuccess: "Validated",
          averageTime: "Not measured",
          averageSeq: "7.00 / 7",
        },
        {
          route: "T5 · Review AI reconciliation",
          startingPoint: "Suggestion queue",
          sessions: "8 total, 7 comparable on corrected T5B",
          directSuccess: "Validated with stimulus caveat",
          averageTime: "Not measured",
          averageSeq: "7.00 / 7",
        },
        {
          route: "T6 · Create an automation rule",
          startingPoint: "Automation rules",
          sessions: "8",
          directSuccess: "Validated",
          averageTime: "Not measured",
          averageSeq: "7.00 / 7",
        },
        {
          route: "T7 · Manage obligations and dependencies",
          startingPoint: "Obligations",
          sessions: "8",
          directSuccess: "Validated",
          averageTime: "Not measured",
          averageSeq: "7.00 / 7",
        },
        {
          route: "T8 · Trace a DRE value and close the period",
          startingPoint: "DRE Jul/2026",
          sessions: "8",
          directSuccess: "Validated",
          averageTime: "Not measured",
          averageSeq: "7.00 / 7",
        },
      ],
      conclusion:
        "The study strongly supported the product's decision model: participants used context, evidence, exceptions, dependencies, and visible closing states to determine what required attention. The final Figma product now expresses that model across a broader operational system, but production speed, technical enforcement, async behavior, and live error rates remain unmeasured.",
      governance:
        "Critical comparisons are reported conservatively. P01 is excluded from the corrected 99% reconciliation comparison because she received an earlier ambiguous stimulus. Explicit alerts and disabled states are treated as comprehension evidence. Post-test safety gates and expanded product screens are presented as design iterations, not retroactively claimed as tested behavior.",
    },
    validationNextSteps: {
      heading: "What the office pilot needs to prove next",
      introduction:
        "The clickable Figma prototype resolves the product structure, but the next research questions depend on a working application and real operational conditions.",
      completedReviews: [
        {
          title: "Entity-context comprehension",
          description:
            "Participants consistently verified company, branch, CNPJ, and period before continuing.",
        },
        {
          title: "Evidence-based reconciliation",
          description:
            "P02 through P08 rejected the corrected dangerous 99% suggestion when CNPJ evidence conflicted.",
        },
        {
          title: "Automation preview comprehension",
          description:
            "All participants declined or recommended against activation after the preview explicitly exposed an unintended match.",
        },
        {
          title: "Closing-gate comprehension",
          description:
            "No participant intended to close while the critical unsupported entry remained visibly unresolved.",
        },
      ],
      pendingValidation: [
        {
          title: "Role-based prepare, review, and approve",
          description:
            "Validate the proposed permission model with the pilot office and test whether broad visibility can coexist with restricted high-impact execution without slowing collaboration.",
        },
        {
          title: "Repetitive-work efficiency",
          description:
            "Measure real handling time, corrections, and fatigue for save-and-next and keyboard workflows across larger exception queues.",
        },
        {
          title: "Asynchronous processing behavior",
          description:
            "Validate actual import jobs, notifications, return paths, partial release, error recovery, and state persistence after users leave the flow.",
        },
        {
          title: "Post-activation automation quality",
          description:
            "Measure false positives, overrides, rule degradation, monitoring behavior, and safe pause or edit decisions after automation is live.",
        },
        {
          title: "Accessibility in the working product",
          description:
            "Run keyboard-only, screen-reader, browser zoom/reflow, focus-management, and dynamic-announcement QA, followed by testing with people who use assistive technologies.",
        },
      ],
      proposedSignals: [
        {
          label: "Wrong-context actions",
          description:
            "Measure actual entity mistakes under real server-side context checks, not only intended decisions.",
        },
        {
          label: "Exception throughput",
          description:
            "Measure time, steps, corrections, and fatigue across repetitive exception handling.",
        },
        {
          label: "Unsafe automation acceptance",
          description:
            "Measure hidden false positives and post-activation corrections rather than only reactions to explicit preview warnings.",
        },
        {
          label: "Closing recovery",
          description:
            "Test real lock, reopen, permissions, justification, audit history, and downstream recovery behavior.",
        },
      ],
    },
    outcomesCurrentStatus: {
      heading: "A research-backed product system ready for implementation",
      introduction:
        "LedgerFlow has moved beyond a set of usability-test screens. The current design includes a complete operational shell, connected prototype flows, a reusable design system, accessibility requirements, and engineering-ready rules for the next implementation phase.",
      deliverables: [
        {
          title: "Complete operational architecture",
          description:
            "Portfolio, companies, imports, exceptions, reconciliation, fiscal work, obligations, pending items, communications, automation, reports, closing, settings, permissions, and audit history are connected through one active company and competence context.",
        },
        {
          title: "Responsive clickable prototype",
          description:
            "36 desktop product states and 19 mobile routes are connected in Figma, including review overlays, closing confirmation, reopening, and post-test safety gates.",
        },
        {
          title: "Design system and accessibility contract",
          description:
            "Reusable tokens, components, focus states, target-size baselines, status conventions, responsive rules, and an accessibility QA gate support a consistent handoff into code.",
        },
        {
          title: "Moderated usability evidence",
          description:
            "Eight real participants, 64 task evaluations, task-level SEQ, critical-risk findings, methodological caveats, and explicit separation between tested behavior and later product iterations.",
        },
      ],
      currentStatus: [
        {
          label: "Product design",
          description: "Complete for the current pilot prototype and documented design system.",
        },
        {
          label: "Research",
          description: "Core decision model evaluated across P01 through P08; post-test additions remain design iterations until revalidated.",
        },
        {
          label: "Accessibility",
          description: "Design-level accessibility pass complete; semantic and assistive-technology validation moves to implementation QA.",
        },
        {
          label: "Engineering",
          description: "Architecture, data model, business rules, permissions, accessibility contract, and MVP backlog are prepared; application code is next.",
        },
        {
          label: "Pilot",
          description: "Planned for a controlled accounting-office environment after implementation and QA.",
        },
      ],
      evidenceNote:
        "No ROI, time savings, production error reduction, notification performance, live integration behavior, accessibility compliance, or technical enforcement metrics are claimed. Quantitative usability results come from the moderated study, while product-coverage counts describe the current Figma design system and prototype.",
    },
    learningsNextSteps: {
      heading: "Designing for judgment, not just automation",
      introduction:
        "LedgerFlow started as a problem of organizing accounting operations. The research and productization process reframed it as a problem of making safe decisions under complexity, then carrying those decisions consistently across a complete system.",
      learnings: [
        {
          title: "More automation was not the main answer",
          description:
            "Participants repeatedly needed better evidence, clearer consequences, and traceability before high-impact actions. Automation became valuable when its scope and impact remained inspectable.",
        },
        {
          title: "A correct current state is not enough",
          description:
            "Accounting workflows need history. Users must be able to reconstruct who decided, what changed, why a reversal happened, and how a locked period was reopened.",
        },
        {
          title: "Role limits do not remove the need for visibility",
          description:
            "A junior participant could understand and prepare critical work even when final authorization belonged to someone more experienced, which led to a Prepare → Review → Approve model to validate in the office.",
        },
        {
          title: "Accessibility has to live in the system",
          description:
            "Once the product expanded beyond isolated test screens, accessibility could no longer be treated as a visual check. Focus, target size, semantic handoff, async announcements, zoom, and assistive-technology behavior became release requirements.",
        },
      ],
      nextIteration: [
        {
          title: "Build the working pilot",
          description:
            "Implement authentication, tenant context, imports, exceptions, reconciliation, automation, dependencies, reports, closing, audit, and permission enforcement without losing the product's evidence-first model.",
        },
        {
          title: "Revalidate in real operating conditions",
          description:
            "Measure throughput, wrong-context errors, automation quality, closing recovery, accessibility, and role-based collaboration with a real office before making production-impact claims.",
        },
      ],
    },
    process: {
      research: [
        "Two moderated usability rounds with eight real participants from accounting and BPO professional contexts",
        "Eight scenario-based workflows covering context, imports, exceptions, AI reconciliation, automation, dependencies, reporting, and closing",
        "Task-level SEQ collection after each workflow",
        "Methodological separation between tested comprehension, post-test design iterations, and still-unimplemented production behavior",
      ],
      insights: [
        "Context is a safety mechanism in multi-company accounting work",
        "Partial success is more useful than restarting valid batch work",
        "Evidence must remain inspectable even when automated confidence is high",
        "Automation governance begins before activation and continues after it",
        "Dependencies change priority dynamically",
        "Closing connects financial outputs back to evidence and accountability",
        "Accessibility needs to be designed into dense operational systems before implementation",
      ],
      solutions: [
        "Persistent active-entity and competence context",
        "Partial batch results, exception routing, and save-and-next handling",
        "Evidence-based reconciliation with a post-test critical mismatch gate",
        "Automation impact preview, adjustment gate, and monitoring",
        "Visible obligation dependencies, pending-item queues, and contextual communication",
        "DRE-to-entry traceability, closing gates, period lock, and controlled reopening",
        "Reusable components with focus states, target-size rules, and accessibility handoff requirements",
      ],
      validation: [
        "0 intended critical actions in the wrong entity during the tested switching flow",
        "7/7 comparable participants, P02 through P08, rejected the corrected dangerous 99% reconciliation suggestion",
        "8/8 refused or recommended against activation after the explicit unsafe automation preview",
        "0 intended closings while the visible critical blocker remained unresolved",
        "0 critical moderator assists across the study",
      ],
    },
    impact: {
      metrics: [
        {
          label: "Participants",
          value: "8",
          detail: "Real accounting and BPO contexts",
        },
        {
          label: "Task evaluations",
          value: "64",
          detail: "Eight workflows each",
        },
        {
          label: "Mean SEQ",
          value: "6.94 / 7",
          detail: "Perceived ease",
        },
        {
          label: "Conflict detection",
          value: "7 / 7",
          detail: "Comparable participants rejected the unsafe 99% match",
        },
      ],
      business:
        "The project now has a research-backed decision model, a complete responsive product architecture, clickable flows, accessibility requirements, and an engineering-ready implementation direction for a controlled accounting-office pilot. Business impact remains deliberately unclaimed until the product is implemented and measured in real operations.",
    },
    learnings: [
      "The goal was not to automate accounting judgment away, but to give that judgment better context, evidence, and recovery paths",
      "Static-screen usability can validate comprehension, but not technical enforcement, accessibility behavior, or production performance",
      "Post-test safety improvements should be shown as iterations, not retroactively reported as validated behavior",
      "Junior users may benefit from full workflow visibility even when final execution is permission-controlled",
      "A complete product system needs accessibility and auditability to be structural, not decorative",
    ],
  },
];

const preferredCaseOrder = [
  "ledgerflow-accounting-platform",
  "insightflow-research-intelligence",
  "unifatecie-student-onboarding",
];

export const caseStudies: CaseStudy[] = [...caseStudiesInSourceOrder].sort(
  (first, second) =>
    preferredCaseOrder.indexOf(first.slug) -
    preferredCaseOrder.indexOf(second.slug),
);
