import {
  ArrowUpRight,
  BookOpenText,
  Boxes,
  Braces,
  Building2,
  Cloud,
  Code2,
  Database,
  FileSearch,
  Github,
  GraduationCap,
  Download,
  Eye,
  Layers3,
  Linkedin,
  LockKeyhole,
  Mail,
  Network,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UsersRound,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const contactLinks = [
  { label: "Email", value: "hello@shoug-tech.com", href: "mailto:hello@shoug-tech.com", icon: Mail },
  { label: "GitHub", value: "Shoug-Alomran", href: "https://github.com/Shoug-Alomran", icon: Github },
  { label: "LinkedIn", value: "Shoug Alomran", href: "https://www.linkedin.com/in/shoug-alomran/", icon: Linkedin },
  { label: "Blueprint Studio", value: "blueprint.shoug-tech.com", href: "https://blueprint.shoug-tech.com", icon: Building2 },
];

export const timeline = [
  {
    organization: "MDD",
    role: "Cybersecurity Trainee",
    marker: "Security Training",
    icon: ShieldCheck,
    points: [
      "Conducted supervised penetration testing activities in cybersecurity training environments.",
      "Practiced web application security assessment and vulnerability identification.",
      "Worked with security testing workflows, technical reporting, and remediation analysis.",
      "Gained exposure to Linux environments, GitHub workflows, and web security tooling.",
    ],
  },
  {
    organization: "ACM Student Chapter",
    role: "Vice President",
    marker: "Leadership",
    icon: UsersRound,
    points: [
      "Promoted from Liaison Officer to Vice President, supporting technical initiatives and student engagement.",
      "Assists in planning events, technical workshops, and Capture The Flag initiatives.",
      "Coordinates cybersecurity activities, communications, recruitment, outreach, and event promotion.",
    ],
  },
  {
    organization: "Qimah",
    role: "Course Instructor",
    marker: "Education Systems",
    icon: GraduationCap,
    points: [
      "Created structured educational systems for Psychology 101 students.",
      "Designed summaries, study systems, quizzes, mock exams, and revision materials.",
      "Developed organized educational workflows and student-centered learning resources.",
    ],
  },
  {
    organization: "Prince Sultan University Writing & Tutoring Center",
    role: "Peer Tutor",
    marker: "Academic Support",
    icon: BookOpenText,
    points: [
      "Provided academic tutoring and study support.",
      "Assisted students with understanding concepts, study organization, and academic preparation.",
    ],
  },
];

export const projects = [
  {
    title: "Blueprint Studio",
    href: "https://blueprint.shoug-tech.com",
    repo: "https://github.com/Shoug-Alomran",
    type: "Digital Systems Studio",
    icon: Layers3,
    summary:
      "Structured digital presence studio focused on documentation-oriented websites and scalable information systems.",
    architecture:
      "Built around multilingual content models, navigable documentation trees, searchable pages, theme systems, and polished responsive information hierarchy.",
    stack: ["MkDocs Material", "TailwindCSS", "Search", "Dark/Light Systems", "GitHub Pages"],
    highlights: ["Multilingual support", "Documentation architecture", "Structured navigation", "Professional information hierarchy"],
  },
  {
    title: "Sillah Health Management System",
    href: "https://sillah-app.shoug-tech.com",
    repo: "https://github.com/Shoug-Alomran",
    type: "Healthcare Workflow Platform",
    icon: Database,
    summary:
      "Family health management platform focused on healthcare workflows and structured digital management systems.",
    architecture:
      "React interface connected to Supabase-backed data flows, authentication logic, and responsive operational screens for family health coordination.",
    stack: ["React", "Supabase", "Authentication", "SQL", "Responsive Workflows"],
    highlights: ["Database-backed systems", "Secure workflow thinking", "Role-aware experience", "Production-oriented UI"],
  },
  {
    title: "Technical Database Platform",
    href: "https://database.shoug-tech.com",
    repo: "https://github.com/Shoug-Alomran",
    type: "Knowledge Infrastructure",
    icon: FileSearch,
    summary: "Technical documentation and structured knowledge management platform.",
    architecture:
      "A searchable information system designed around durable technical organization, content discovery, and clean documentation engineering.",
    stack: ["Documentation Engineering", "Search", "Information Architecture", "MkDocs", "GitHub"],
    highlights: ["Searchable systems", "Technical organization", "Knowledge modeling", "Long-term maintainability"],
  },
  {
    title: "ACM CTF Platform",
    href: "https://shoug-alomran.github.io/acm-ctf2-web/",
    repo: "https://github.com/Shoug-Alomran/acm-ctf2-web",
    type: "Cybersecurity Event System",
    icon: TerminalSquare,
    summary:
      "Cybersecurity competition and event platform designed for technical engagement and participant experience.",
    architecture:
      "A focused event interface that balances cybersecurity branding, participant clarity, responsive structure, and modern technical presentation.",
    stack: ["React", "Cybersecurity UI", "GitHub Pages", "Responsive Design", "Event Systems"],
    highlights: ["Cybersecurity branding", "Event organization", "Participant experience", "Modern UI"],
  },
];

export const capabilities = [
  {
    title: "Frontend Systems",
    icon: Code2,
    description: "Component-led interfaces with strong hierarchy, responsive behavior, accessible patterns, and production polish.",
    tools: ["React", "Vite", "TailwindCSS", "Framer Motion", "Design Systems"],
  },
  {
    title: "Backend & APIs",
    icon: Braces,
    description: "Structured server logic, database-backed workflows, authentication patterns, and clean API boundaries.",
    tools: ["Node.js", "Express", "Supabase", "SQL", "Authentication Systems"],
  },
  {
    title: "Infrastructure & Deployment",
    icon: Cloud,
    description: "Deployment-aware development across modern hosting, documentation platforms, and edge-oriented environments.",
    tools: ["Vercel", "Cloudflare Workers", "GitHub Pages", "Linux", "GitHub"],
  },
  {
    title: "Documentation Systems",
    icon: Boxes,
    description: "Information architecture for technical knowledge bases, bilingual systems, navigable content, and search-first structures.",
    tools: ["MkDocs Material", "Search", "Structured Navigation", "Content Systems", "Bilingual UX"],
  },
  {
    title: "Security & Architecture",
    icon: LockKeyhole,
    description: "Security-aware engineering shaped by assessment workflows, remediation thinking, and maintainable system design.",
    tools: ["Web Security", "Penetration Testing", "Linux", "Technical Reporting", "Architecture Reviews"],
  },
];

export const leadership = [
  {
    title: "ACM Vice President",
    icon: Network,
    text: "Supports technical initiatives, cybersecurity activities, workshops, student engagement, and organizational planning.",
  },
  {
    title: "Cybersecurity Initiatives",
    icon: ShieldCheck,
    text: "Contributes to Capture The Flag programming, event structure, and technical community experiences.",
  },
  {
    title: "Educational Leadership",
    icon: GraduationCap,
    text: "Creates study systems, quizzes, revision resources, and tutoring workflows that make complex material easier to navigate.",
  },
];

export const approach = [
  {
    title: "Clarity Before Complexity",
    text: "A system should reveal its structure before it asks users to trust it.",
  },
  {
    title: "Architecture Over Ornament",
    text: "Interfaces become premium when hierarchy, flow, and behavior are designed with discipline.",
  },
  {
    title: "Security-Aware By Default",
    text: "Good engineering considers trust, access, reporting, and operational risk from the beginning.",
  },
  {
    title: "Documentation As Infrastructure",
    text: "Clear documentation turns a project from a one-time delivery into a system that can grow.",
  },
];

export const commandItems = [
  { label: "View Projects", href: "#projects", icon: ArrowUpRight },
  { label: "View CV", href: "/cv/", icon: Eye },
  { label: "Download CV", href: "/cv/?download=1", icon: Download },
  { label: "Open Blueprint Studio", href: "https://blueprint.shoug-tech.com", icon: Sparkles },
  { label: "Contact Shoug", href: "#contact", icon: Mail },
  { label: "Explore Capabilities", href: "#capabilities", icon: Boxes },
];
