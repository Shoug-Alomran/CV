export const heroBadges = [
  "Software Engineering",
  "Cybersecurity Minor",
  "Founder, Blueprint Studio",
];

export const footerLinks = [
  { label: "SHOUG.TECH", href: "https://shoug-tech.com" },
  { label: "GitHub", href: "https://github.com/Shoug-Alomran" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shoug-alomran/" },
  { label: "Blueprint Studio", href: "https://blueprint.shoug-tech.com" },
];

export const projects = [
  {
    title: "Fursah — AI Workforce Readiness",
    href: "https://fursah.org",
    repo: "https://github.com/Shoug-Alomran/AI-Powered-Workforce-Readiness-Ecosystem",
    live: true,
    image: "/projects/fursah.png",
    summary:
      "Built for the AI Readiness Hackathon: a platform connecting students, employers, and universities through verified skill evidence, explainable candidate-role matching, and workforce-readiness insights. AI is kept to bounded, role-scoped tasks, with human review of evidence and a documented DPIA.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "Cloudflare Workers AI",
      "Vercel",
    ],
  },
  {
    title: "SHOUG.TECH Platform",
    href: "https://shoug-tech.com",
    repo: "https://github.com/Shoug-Alomran/shoug-tech",
    live: true,
    image: "/projects/shoug-tech.png",
    summary:
      "A comprehensive personal technical platform and digital garden documenting projects, cybersecurity workshops, research, and technical resources. Firebase powers the user login experience, learning-progress tracking, and community features.",
    stack: ["React", "MkDocs", "Firebase", "Cloudflare"],
  },
  {
    title: "Sillah Health Management System",
    href: "https://sillah-app.shoug-tech.com",
    repo: "https://github.com/Shoug-Alomran/Sillah_V2",
    live: true,
    image: "/projects/sillah.png",
    summary:
      "A preventive family-health system that started as an SE201 prototype and was rebuilt from the ground up: a relational database, REST endpoints, and serverless deployment, with requirements engineering applied in SE311 and the data layer built out in CS340.",
    stack: ["JavaScript", "REST API", "SQL", "Vercel"],
  },
  {
    title: "Mini CTF Security Lab",
    href: "https://ctf-lab.shoug-tech.com",
    repo: "https://github.com/Shoug-Alomran/CYS401-Mini-CTF-Security-Lab",
    live: true,
    image: "/projects/ctf-lab.png",
    summary:
      "An educational capture-the-flag lab with workshops and challenges across web security, cryptography, security awareness, and ethics, including flag validation, hints, progress tracking, and a scoreboard. CYS401 semester project, graded 15/15.",
    stack: ["JavaScript", "Web Security", "Cryptography"],
  },
  {
    title: "Blueprint Studio",
    href: "https://blueprint.shoug-tech.com",
    repo: "https://github.com/Shoug-Alomran/Blueprint",
    live: true,
    image: "/projects/blueprint.png",
    summary:
      "A digital studio creating professional portfolio websites and thoughtful digital solutions for students, researchers, and professionals—from early concept and architecture through deployment and documentation.",
    stack: ["Modern Web", "UI/UX", "JavaScript"],
  },
  {
    title: "ACM Chapter Web Platforms",
    href: "https://acmchapter-psu.github.io/acm-psu-website/",
    repo: "https://github.com/acmchapter-psu",
    live: true,
    image: "/projects/acm-psu.png",
    summary:
      "Designed, built, and deployed four websites now hosted on the chapter's official GitHub: the ACM PSU platform (membership applications, event roles, project case studies, events archive), the CTF 2.0 and ACM/CyberTech CTF 3.0 competition sites, and the WebForge 2026 AI-assisted web development event site.",
    stack: [
      "TypeScript",
      "React",
      "HTML/CSS",
      "GitHub Actions",
      "GitHub Pages",
    ],
  },
];

export const domains = [
  {
    title: "Full-Stack Development",
    text: "TypeScript, JavaScript, React, Next.js, Tailwind CSS, HTML5, and CSS3, plus Java, Python, and C from coursework, for end-to-end web application development.",
  },
  {
    title: "Backend & Data",
    text: "REST APIs, Node.js/Express, SQL, PostgreSQL, Prisma, Supabase, Firebase, relational database design, authentication, and secure application workflows.",
  },
  {
    title: "Architecture & Delivery",
    text: "System design, software architecture (4+1 views, design patterns), project management, Git, GitHub Actions, Vercel, and Cloudflare (Workers AI, R2).",
  },
  {
    title: "Security & Documentation",
    text: "Secure software development, penetration testing, web security, cryptography, networking (Wireshark, Packet Tracer), requirements engineering, UML, and technical documentation.",
  },
];

export const leadership = [
  {
    title: "ACM Student Chapter Vice President",
    subtitle: "Prince Sultan University",
    text: "Lead strategic initiatives, coordinate chapter officers, support technical events and workshops, and help strengthen student engagement across the computing community.",
    href: "https://psu.edu.sa/en/CCIS/PSU-ACM",
    linkLabel: "View the PSU ACM Chapter",
  },
  {
    title: "Course Instructor & Peer Tutor",
    subtitle: "Academic Leadership",
    text: "Mentor students through workshops, tutoring, and structured learning resources. I create course platforms, practice material, and technical documentation that make complex engineering concepts easier to understand and apply.",
  },
  {
    title: "Second Place — PSU CTF",
    subtitle: "Applied Cybersecurity",
    text: "Earned second place in Prince Sultan University's Capture The Flag competition, applying practical cybersecurity knowledge, analytical thinking, and collaborative problem-solving under pressure.",
  },
  {
    title: "Hands-On Technical Training",
    subtitle: "Security, AI & Robotics",
    text: "Completed offensive security training through the ASCL Cybersecurity Crash Course and participated in the AI in Robotics Bootcamp, building practical experience with Arduino and AI-driven robotics.",
  },
  {
    title: "Concept to Completion",
    subtitle: "Project Execution",
    text: "Design, develop, deploy, and document software projects as complete systems. I often evolve academic ideas beyond their original requirements into useful, public-facing products built for real users.",
  },
];

export const philosophy = [
  {
    title: "Security Focus",
    color: "cyan",
    text: "I combine software engineering principles with cybersecurity practices to build reliable, resilient systems. Understanding attacker methodology informs better architecture, safer workflows, and security decisions made from the beginning—not added as a patch.",
  },
  {
    title: "Engineering Philosophy",
    color: "green",
    text: "I value clean architecture, readable code, thoughtful documentation, and long-term maintainability over unnecessary complexity. Effective engineering also depends on clear communication, collaboration, and sharing knowledge so others can confidently extend the work.",
  },
];
