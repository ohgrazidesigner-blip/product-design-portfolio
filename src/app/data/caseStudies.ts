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
  dates?: string;
  team?: string;
  tools?: string[];
  scope?: string;
  stakeholderReview?: string;
  status?: string;
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
    groups: {
      title: string;
      description: string;
      images: {
        src: string;
        alt: string;
        caption: string;
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

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "unifatecie-student-onboarding",
    title: "Redesigning a fragmented student journey",
    company: "UniFatecie · Higher education ecosystem",
    role: "Independent Product Designer",
    duration: "6 weeks",
    year: "2026",
    dates: "May to June 2026",
    category: "Product Design · UX Research",
    projectNature: "Independent redesign study",
    team: "Independent study · Sole designer",
    tools: [
      "Figma",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
    scope:
      "An audit of the existing ecosystem, a proposed information architecture, three primary end-to-end flows, six high-fidelity screens, cross-platform transitions, and contextual empty states.",
    stakeholderReview:
      "This independent study was not commissioned by or developed in partnership with UniFatecie. The proposal was presented to Student Services Coordination for feedback.",
    status:
      "High-fidelity coded prototype. Not shipped; user validation, technical review, and implementation remain pending.",
    existingExperience: {
      heading:
        "Mapping a student experience distributed across five environments",
      introduction:
        "The existing journey was not contained within a single product. The institutional website provided public information and multiple portal entry points, while the authenticated experience redirected students across platforms with different navigation models, terminology, visual patterns, and authentication behaviors.",
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
        "Building evidence through an ecosystem audit",
      introduction:
        "This was expert-led discovery, not generative user research. I reviewed the public entry journey, analyzed one recorded authenticated walkthrough, mapped cross-platform task paths, and audited interface, content, accessibility, and system inconsistencies. The resulting findings are evidence-based design hypotheses that still require validation with students and institutional teams.",
      methods: [
        {
          title: "Public journey audit",
          description:
            "I navigated the institutional website without assuming prior knowledge of UniFatecie’s platform structure, focusing on how students locate portals, courses, services, and academic information.",
          output:
            "Public entry-point analysis and an initial map of the platform ecosystem.",
        },
        {
          title: "Recorded authenticated walkthrough",
          description:
            "I analyzed one recorded walkthrough of an authenticated EAD Pedagogy account, reviewing each visible screen, transition, system state, and external destination.",
          output:
            "Authenticated screen inventory and documentation of cross-platform task paths.",
        },
        {
          title: "Heuristic evaluation",
          description:
            "I evaluated navigation, hierarchy, terminology, consistency, system feedback, error prevention, and recovery patterns across the experience.",
          output:
            "A prioritized set of usability risks and hypotheses for validation.",
        },
        {
          title: "Interface and content audit",
          description:
            "I catalogued interface patterns, labels, acronyms, component states, empty states, tables, forms, and support categories across the ecosystem.",
          output:
            "A terminology audit, component inventory, and content-design recommendations.",
        },
        {
          title: "Journey mapping",
          description:
            "I connected public entry points, authentication, dashboard navigation, learning activities, grades, financial information, documents, and support services.",
          output:
            "A current-state journey showing system transitions, uncertainty, and task interruptions.",
        },
        {
          title: "Design-system and accessibility review",
          description:
            "I compared visual foundations and reusable patterns while identifying visible accessibility risks such as small text, dense tables, icon-only actions, and inconsistent feedback.",
          output:
            "An as-built system audit and a list of visible accessibility risks to investigate further.",
        },
      ],
      limitations: [
        "No student interviews or moderated usability tests were conducted",
        "No production analytics, retention data, or support-ticket data were available",
        "The authenticated analysis represented one EAD Pedagogy account",
        "Accessibility findings were based on expert visual review, not formal assistive-technology testing",
        "Technical feasibility and implementation constraints were not reviewed with engineering",
      ],
    },
    keyFindings: {
      heading:
        "The experience required students to understand the institution’s systems before completing their goals",
      introduction:
        "The audit indicated that the highest-priority risks were not isolated interface defects. They emerged across platform boundaries through fragmented ownership, inconsistent terminology, unclear transitions, and the absence of a shared orientation layer.",
      findings: [
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
        "Three directions were considered. Consolidating every service into one platform offered the strongest continuity but required organizational and technical access outside the study. A visual reskin was more feasible but would leave the fragmented architecture intact. I chose a third direction: a consistent orientation layer that organizes tasks around student goals, explains system boundaries, and preserves the existing platforms behind the journey.",
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
        "The existing architecture required students to choose a platform before understanding whether it could complete their task. The proposal reverses that relationship: students select a goal first, while the orientation layer directs them to the appropriate internal or external service. Routing and deep-link behavior remain technical hypotheses to validate.",
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
        "The redesigned experience works as an orientation and orchestration layer across the existing academic ecosystem. Instead of hiding the legacy platforms, it gives students clearer priorities, explains transitions, and connects essential tasks through a more consistent interaction model.",
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
        "Six high-fidelity product screens",
        "One cross-platform transition modal",
        "Three contextual empty-state variations",
        "Responsive interaction patterns",
        "Coded interactive prototype",
      ],
    },
    visualEvidence: {
      heading:
        "Visual evidence from the proposed onboarding experience",
      introduction:
        "The visuals below document the high-fidelity coded prototype created for this study. They illustrate how the proposed orientation layer would support first access, academic context, service routing, cross-platform transitions, and recovery states. No personal or production student data is shown.",
      groups: [
        {
          title: "Onboarding flow",
          description:
            "The first screens establish orientation, confirm the student’s academic context, and turn onboarding into a sequence of visible first-week actions.",
          images: [
            {
              src: "/assets/cases/unifatecie/01-welcome.png",
              alt: "Welcome screen from the UniFatecie student onboarding prototype with academic status, first actions, and orientation cards.",
              caption:
                "Decision: establish academic context and next actions before exposing the full service ecosystem.",
            },
            {
              src: "/assets/cases/unifatecie/02-freshman-checklist.png",
              alt: "Freshman checklist screen showing onboarding tasks such as enrollment confirmation, important dates, first subject access, financial status, and support channels.",
              caption:
                "Decision: limit initial onboarding to five meaningful tasks instead of presenting every available service.",
            },
            {
              src: "/assets/cases/unifatecie/03-student-dashboard.png",
              alt: "Student dashboard screen with task-based navigation, academic cards, service shortcuts, and contextual student guidance.",
              caption:
                "Decision: replace platform-first navigation with recognizable goals such as Classes, Grades, Finance, and Help.",
            },
          ],
        },
        {
          title: "Academic services",
          description:
            "These screens show how the redesign clarifies academic information and makes external platform transitions explicit before students leave the onboarding layer.",
          images: [
            {
              src: "/assets/cases/unifatecie/04-grades-and-attendance.png",
              alt: "Grades and attendance screen explaining activity results, official academic records, attendance, and the difference between Moodle and AlunoNet information.",
              caption:
                "Decision: create one Grades entry point that explains where activity results and official records come from.",
            },
            {
              src: "/assets/cases/unifatecie/05-cross-platform-transition.png",
              alt: "Cross-platform transition modal explaining that the student is leaving the portal to access another academic system, with destination, purpose, and recovery guidance.",
              caption:
                "Decision: accept a brief interruption to explain the destination, purpose, and recovery path before a system change.",
            },
          ],
        },
        {
          title: "Support and recovery",
          description:
            "The support and empty-state screens demonstrate how guidance, routing, and recovery states reduce ambiguity when a service is unavailable, empty, or requires another action.",
          images: [
            {
              src: "/assets/cases/unifatecie/06-help-center.png",
              alt: "Help center screen with support options grouped by student intention, including academic questions, access problems, administrative requests, and urgent assistance.",
              caption:
                "Decision: route support by student intention instead of requiring knowledge of departments and internal channels.",
            },
            {
              src: "/assets/cases/unifatecie/07-empty-states.png",
              alt: "Empty-state examples from the UniFatecie prototype showing unavailable grades, documents, and requests with contextual explanations and next actions.",
              caption:
                "Decision: distinguish empty, unavailable, and error conditions while providing a relevant next action.",
            },
          ],
        },
      ],
    },
    designSystemAccessibility: {
      heading:
        "Applying shared system foundations inside the prototype",
      introduction:
        "Within the prototype, I defined reusable foundations, component behaviors, content patterns, and feedback states for the proposed onboarding layer. This work demonstrates a system direction for the study. It is not an institutional Design System, a production component library, or evidence that the legacy platforms have been unified.",
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
    validationNextSteps: {
      heading:
        "Separating completed expert reviews from the validation still required",
      introduction:
        "The current prototype has been reviewed against the problems identified during the audit and presented to the UniFatecie Student Services Coordination. However, the project has not yet been tested with students, reviewed for technical feasibility, or implemented in production.",
      completedReviews: [
        {
          title: "Designer-led problem-to-solution review",
          description:
            "The proposed flows were checked against the usability, navigation, terminology, feedback, and cross-platform issues documented during the existing-experience audit.",
        },
        {
          title: "Designer-led cross-flow consistency review",
          description:
            "Navigation labels, component behaviors, status messages, transitions, and recovery patterns were compared across the three primary prototype flows.",
        },
        {
          title: "Designer-led visual accessibility review",
          description:
            "The prototype was reviewed for visible hierarchy, text sizing, contrast, focus requirements, labels, interaction states, and feedback that does not depend on color alone.",
        },
        {
          title: "Stakeholder presentation",
          description:
            "The project direction and prototype were presented to the UniFatecie Student Services Coordination. This presentation should not be interpreted as formal approval, implementation commitment, or user validation.",
        },
      ],
      pendingValidation: [
        {
          title: "Student usability testing",
          description:
            "Test the onboarding journey with new and returning students, focusing on orientation, first-class access, grades, financial information, support routing, and cross-platform transitions.",
        },
        {
          title: "Technical feasibility review",
          description:
            "Review authentication, deep links, session behavior, platform ownership, data availability, and integration constraints with engineering and system administrators.",
        },
        {
          title: "Operational and content validation",
          description:
            "Confirm terminology, service ownership, academic rules, support categories, financial states, and recovery guidance with the responsible institutional teams.",
        },
        {
          title: "Accessibility validation",
          description:
            "Evaluate keyboard navigation, screen-reader behavior, semantic structure, zoom, responsive tables, form errors, reduced motion, and external-link announcements.",
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
        "Documenting what the project delivered without implying production impact",
      introduction:
        "The project established a documented redesign direction for the student onboarding journey, supported by a task-based architecture, reusable interaction patterns, and a coded high-fidelity prototype. The outcomes below describe completed design work and the project’s current status, not measured production performance.",
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
            "Six high-fidelity product screens covering the core onboarding experience and the main student actions represented in the project scope.",
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
          title: "Stakeholder presentation",
          description:
            "The design direction and prototype were presented to the UniFatecie Student Services Coordination for review and discussion.",
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
            "Presented to the UniFatecie Student Services Coordination, without a claim of formal approval or implementation commitment.",
        },
        {
          label: "Student validation",
          description:
            "Pending. No student interviews, moderated usability tests, or live pilot have been completed.",
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
        "These outcomes describe artifacts produced, reviews completed, and the current state of the project. They should not be interpreted as institutional approval, technical feasibility confirmation, production adoption, or measured user and business impact.",
    },
    learningsNextSteps: {
      heading:
        "Turning audit insights into testable design hypotheses",
      introduction:
        "The study produced a set of design hypotheses about orientation, terminology, transitions, and feedback across a fragmented ecosystem. They should guide the next iteration, but they are not validated conclusions about student behavior. Student research, technical review, accessibility testing, and operational alignment remain necessary.",
      learnings: [
        {
          title:
            "Orientation is part of the product experience",
          description:
            "The audit suggests that onboarding should address orientation as well as account activation by explaining academic context, service purpose, and next actions.",
        },
        {
          title:
            "Task-based navigation reduces institutional knowledge",
          description:
            "The proposed architecture tests whether labels such as Classes, Grades, Finance, Requests, Documents, and Help are easier to understand than internal platform names.",
        },
        {
          title:
            "Cross-platform transitions need designed continuity",
          description:
            "The prototype tests whether destination, authentication, return, and recovery guidance can reduce uncertainty when a journey moves between systems.",
        },
        {
          title: "Terminology is an architectural decision",
          description:
            "The study treats labels as part of information architecture and proposes plain-language task names with official terminology used as supporting context.",
        },
        {
          title:
            "Feedback states are part of the service model",
          description:
            "The audit indicates a need to test shared rules for empty, unavailable, loading, warning, error, and success states across the journey.",
        },
        {
          title:
            "Design systems should respond to journey problems",
          description:
            "The prototype explores reusable patterns as responses to documented cross-platform inconsistencies, not as a standalone visual library.",
        },
      ],
      nextIteration: [
        {
          title: "Test task comprehension with students",
          description:
            "Evaluate whether new and returning students can identify where to access classes, grades, finance, documents, requests, and support without prior knowledge of platform names.",
        },
        {
          title: "Validate the first-class journey",
          description:
            "Test the sequence from account activation to the first available subject, including checklist comprehension, external transitions, authentication interruptions, and recovery.",
        },
        {
          title: "Review feasibility with engineering",
          description:
            "Confirm deep-link behavior, authentication, session persistence, data availability, integration boundaries, external destinations, and ownership constraints.",
        },
        {
          title: "Confirm operational ownership",
          description:
            "Review terminology, support categories, financial states, academic rules, escalation paths, and content maintenance responsibilities with the relevant institutional teams.",
        },
        {
          title: "Conduct accessibility validation",
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
      "An independent redesign study exploring how UniFatecie could orient newly enrolled students across a fragmented digital ecosystem. The proposal focuses on helping students understand their academic status, reach their first class, and find essential services without first learning which internal platform owns each task.",
    challenge:
      "To complete basic academic and administrative tasks, students move between the Student Portal, Moodle/AVA, AlunoNet/WAEWeb, and Inova Carreira. Each environment uses different navigation, terminology, interface patterns, and task groupings. The resulting problem is not the absence of functionality. It is the lack of orientation and continuity between systems.",
    context: {
      businessGoal:
        "Explore a clearer onboarding and orientation layer that could help students identify their next actions, understand where tasks take place, and move between essential academic services with less uncertainty.",
      constraints: [
        "The study was based on an experience audit and did not include access to production analytics, user participants, or internal technical architecture",
        "The proposal assumes the existing platforms and their operational ownership remain in place rather than being replaced",
        "Academic, administrative, learning, and career tasks follow different structures, terminology, and ownership models",
        "The prototype is not connected to production data, authentication, integrations, or institutional business rules",
      ],
      users:
        "The primary audience is newly enrolled students learning how to navigate the institution’s digital ecosystem. Returning students are a secondary audience for recurring academic, administrative, and support tasks.",
    },
    process: {
      research: [
        "End-to-end review of the authenticated student journey across the Student Portal, Moodle/AVA, AlunoNet/WAEWeb, and Inova Carreira",
        "Heuristic evaluation focused on navigation, hierarchy, feedback, consistency, accessibility, and error prevention",
        "Screen-by-screen inventory and documentation of the existing experience",
        "Mapping of duplicated labels, inconsistent terminology, and unclear transitions between systems",
        "Analysis of onboarding moments where students need additional guidance, context, and reassurance",
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
        "Review of proposed flows against the issues identified during the heuristic evaluation",
        "Consistency checks across the different systems and redesigned interaction patterns",
        "Accessibility review covering hierarchy, contrast, focus, labels, and interaction states",
        "Usability testing planned for the next iteration before implementation",
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
          value: "Planned",
          detail: "Usability testing before implementation",
        },
      ],
      business:
        "The project established a documented redesign direction for the onboarding journey and a reusable foundation for greater cross-platform consistency. Production outcomes have not yet been measured because implementation and usability testing are still pending.",
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
    id: 2,
    slug: "optima-operational-intelligence",
    title: "Designing AI-powered operational intelligence",
    company: "Optima · Supply Chain B2B SaaS",
    role: "Independent Product Designer",
    duration: "14 weeks",
    year: "2026",
    category: "Product Design · AI · B2B SaaS",
    projectNature: "Independent product concept",
    team: "Independent study · Sole designer",
    scope:
      "A decision-support concept covering exception monitoring, investigation, explainable recommendations, and responsive web-to-mobile follow-up.",
    status:
      "Concept-stage product study. Not implemented or validated with supply-chain operators.",
    overview:
      "The design of an AI-powered operational intelligence platform that helps global supply chain teams identify critical shipment exceptions, understand their causes, and take action before operational issues escalate.",
    challenge:
      "Supply chain teams relied on multiple disconnected tools to monitor shipments, investigate disruptions, and coordinate decisions. Information was fragmented across systems, alerts lacked prioritization, and users had limited visibility into why an exception occurred or what action should be taken next.",
    context: {
      businessGoal:
        "Create a unified decision-support experience that reduces operational fragmentation and helps teams identify, understand, and resolve high-risk shipment exceptions more efficiently.",
      constraints: [
        "Operational data originated from multiple systems with different structures and levels of reliability",
        "AI recommendations needed to remain understandable and reviewable by human operators",
        "The platform had to support dense operational information without overwhelming users",
        "The experience needed to work across web and mobile contexts",
      ],
      users:
        "Supply chain managers, logistics coordinators, and operational teams responsible for monitoring shipments, managing exceptions, and reducing delivery risk.",
    },
    process: {
      research: [
        "Mapping of the end-to-end shipment exception management workflow",
        "Analysis of how operational teams move between monitoring, investigation, and resolution",
        "Identification of information gaps across disconnected tools",
        "Review of critical decision points where prioritization and context were missing",
        "Definition of AI opportunities based on operational needs rather than feature novelty",
      ],
      insights: [
        "Teams needed help distinguishing urgent exceptions from routine operational noise",
        "Alerts were less useful when they did not explain risk, cause, and recommended action",
        "Users needed visibility into the reasoning behind AI-generated recommendations",
        "Operational decisions required both a high-level overview and access to detailed shipment context",
        "A unified workflow could reduce repeated investigation across multiple systems",
      ],
      solutions: [
        "A centralized operational dashboard focused on exception severity and business risk",
        "AI-assisted prioritization of at-risk shipments and emerging bottlenecks",
        "Explainable recommendations showing contributing factors and suggested next actions",
        "Shipment-level investigation views combining timeline, status, risk, and supporting evidence",
        "Responsive workflows designed for both desktop monitoring and mobile follow-up",
        "A scalable design-system foundation for dense B2B interfaces",
      ],
      validation: [
        "Evaluation of information hierarchy across dashboard and investigation workflows",
        "Scenario-based usability reviews focused on exception identification and resolution",
        "Consistency checks across web and mobile interaction patterns",
        "Iterations based on clarity, explainability, and decision-support criteria",
      ],
    },
    impact: {
      metrics: [
        {
          label: "Platforms designed",
          value: "2",
          detail: "Web and mobile",
        },
        {
          label: "Core workflow",
          value: "End to end",
          detail: "From detection to resolution",
        },
        {
          label: "AI approach",
          value: "Explainable",
          detail: "Recommendations with context",
        },
        {
          label: "Project duration",
          value: "14 weeks",
          detail: "Product design cycle",
        },
      ],
      business:
        "The project produced a complete product direction for an AI-assisted operational intelligence platform, including the core workflow, interaction model, responsive experience, and scalable design foundation. Production metrics are not available because this is a portfolio product design project.",
    },
    learnings: [
      "AI creates more value when it supports decisions rather than replacing professional judgment",
      "Explainability is essential in high-stakes operational workflows",
      "Prioritization must reflect business impact, not only technical severity",
      "Dense enterprise products require progressive detail and strong information hierarchy",
      "Design systems help maintain clarity as complex operational products grow",
    ],
  },
  {
    id: 3,
    slug: "ledgerflow-accounting-platform",
    title:
      "Designing a scalable accounting management platform",
    company: "LedgerFlow · B2B Accounting SaaS",
    role: "Independent Product Designer",
    year: "2026",
    category: "Product Design · Fintech · B2B SaaS",
    projectNature: "Independent product concept",
    team: "Independent study · Sole designer",
    scope:
      "A modular accounting concept covering transaction review, OCR-assisted document capture, reporting, reconciliation, and role-based collaboration.",
    status:
      "Concept-stage product study. Not implemented or validated with business owners or accountants.",
    overview:
      "The design of a modular accounting management platform that helps small and medium-sized businesses and their accountants organize financial operations, review transactions, generate reports, and collaborate within a shared workspace.",
    challenge:
      "Financial information was distributed across transactions, invoices, reports, bank accounts, and external documents. Business owners needed a simpler view of their financial position, while accountants required more control, traceability, and access to detailed operational information.",
    context: {
      businessGoal:
        "Create a scalable accounting experience that improves financial visibility, supports collaboration between businesses and accountants, and reduces repetitive manual work.",
      constraints: [
        "Different user roles required distinct permissions and levels of financial access",
        "Complex accounting information needed to remain understandable to non-specialist users",
        "The platform needed to support both daily operational tasks and formal financial reporting",
        "Automated and AI-assisted actions required clear review and confirmation states",
      ],
      users:
        "Small and medium-sized business owners, financial administrators, and accountants collaborating on financial management and reporting.",
    },
    process: {
      research: [
        "Mapping of the financial management workflow across business and accountant roles",
        "Analysis of recurring tasks involving transactions, invoices, categorization, and reporting",
        "Definition of role-based access and collaboration requirements",
        "Review of information hierarchy across dashboards and accounting reports",
        "Identification of opportunities for automation and AI-assisted reconciliation",
      ],
      insights: [
        "Business owners needed summaries and clear financial signals rather than accounting terminology alone",
        "Accountants required traceability, supporting documents, and control over automated decisions",
        "Transactions, invoices, and reports needed to remain connected within the same workflow",
        "Permission structures were essential for secure collaboration",
        "Automation needed visible confidence, review, and correction mechanisms",
      ],
      solutions: [
        "A role-based dashboard presenting relevant financial information for each user type",
        "Transaction management with categorization, review, and reconciliation workflows",
        "Invoice capture and document processing using OCR-assisted input",
        "Financial reports covering income statements, cash flow, and expense analysis",
        "Chart-of-accounts management and configurable accounting structures",
        "User, permission, and collaboration controls for businesses and accountants",
        "AI-assisted reconciliation suggestions and contextual financial alerts",
      ],
      validation: [
        "Workflow reviews across business-owner and accountant scenarios",
        "Consistency evaluation across transactions, reports, and document-management patterns",
        "Accessibility review of forms, tables, statuses, and financial data presentation",
        "Iterations focused on clarity, control, and reduction of repetitive tasks",
      ],
    },
    impact: {
      metrics: [
        {
          label: "Primary roles",
          value: "2",
          detail: "Business and accountant",
        },
        {
          label: "Core modules",
          value: "6",
          detail: "Connected financial workflows",
        },
        {
          label: "Platform model",
          value: "RBAC",
          detail: "Role-based access control",
        },
        {
          label: "Experience",
          value: "Responsive",
          detail: "Scalable interface system",
        },
      ],
      business:
        "The project established a complete product architecture for a collaborative accounting platform, including the main financial workflows, permissions model, automation opportunities, and reusable interface patterns. Production metrics are not available because this is a portfolio product design project.",
    },
    learnings: [
      "Financial products must balance simplicity for business users with depth for specialists",
      "Automation requires transparency, confirmation, and recovery mechanisms",
      "Role-based access affects navigation, content, and interaction design",
      "Connected workflows reduce the need to repeatedly interpret fragmented financial information",
      "Modular design supports both product scalability and interface consistency",
    ],
  },
];
