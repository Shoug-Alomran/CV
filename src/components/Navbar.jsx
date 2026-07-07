import { useEffect, useMemo, useRef, useState } from "react";
import { Github, Linkedin, MoonStar, Search, Sun, X } from "lucide-react";
import { projects } from "../data/site";

const sections = [
  { title: "Deployed Systems", description: "Projects built from concept to deployment", href: "#projects" },
  { title: "Technical Domains", description: "Full-stack, backend, architecture, security, and documentation", href: "#capabilities" },
  { title: "Leadership & Execution", description: "Teaching, cybersecurity achievements, training, and project delivery", href: "#leadership" },
  { title: "Engineering Philosophy", description: "Security, maintainability, clean architecture, and collaboration", href: "#philosophy" },
  { title: "Contact", description: "Connect and download my resume", href: "#contact" },
];

export function Navbar() {
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem("site-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("site-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!searchOpen) return undefined;
    inputRef.current?.focus();
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [searchOpen]);

  const results = useMemo(() => {
    const searchable = [
      ...sections,
      ...projects.map((project) => ({
        title: project.title,
        description: `${project.summary} ${project.stack.join(" ")}`,
        href: project.href,
        external: true,
      })),
    ];
    const term = query.trim().toLowerCase();
    if (!term) return searchable;
    return searchable.filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(term));
  }, [query]);

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-[1700px] items-center px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-3" aria-label="Shoug Fawaz Alomran home">
            <span className="glow-dot" aria-hidden="true" />
            <span className="font-mono text-sm font-bold tracking-[0.16em] text-white sm:text-base">S.ALOMRAN</span>
          </a>

          <div className="ml-10 hidden items-center gap-7 sm:flex lg:ml-20 lg:gap-10">
            <a href="https://github.com/Shoug-Alomran" target="_blank" rel="noreferrer" className="header-icon" aria-label="GitHub"><Github aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/shoug-alomran/" target="_blank" rel="noreferrer" className="header-icon" aria-label="LinkedIn"><Linkedin aria-hidden="true" /></a>
            <button type="button" className="header-icon" onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
              {theme === "dark" ? <Sun aria-hidden="true" /> : <MoonStar aria-hidden="true" />}
            </button>
            <a href="#contact" className="header-contact">Contact</a>
          </div>

          <div className="ml-auto flex items-center gap-1 sm:hidden">
            <button type="button" className="header-icon" onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
              {theme === "dark" ? <Sun aria-hidden="true" /> : <MoonStar aria-hidden="true" />}
            </button>
            <a href="#contact" className="mobile-header-contact">Contact</a>
            <button type="button" onClick={() => setSearchOpen(true)} className="header-icon" aria-label="Search site">
              <Search aria-hidden="true" />
            </button>
          </div>

          <button type="button" onClick={() => setSearchOpen(true)} className="ml-auto hidden items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white sm:flex sm:text-base" aria-label="Search site">
            <Search className="size-5 text-white" aria-hidden="true" />
            <span>Search</span>
          </button>
        </nav>
      </header>

      {searchOpen && (
        <div className="search-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeSearch(); }}>
          <section className="search-dialog" role="dialog" aria-modal="true" aria-label="Search site">
            <div className="search-field">
              <Search aria-hidden="true" />
              <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, skills, or experience…" aria-label="Search query" />
              <button type="button" onClick={closeSearch} aria-label="Close search"><X aria-hidden="true" /></button>
            </div>
            <div className="search-results" aria-live="polite">
              {results.length ? results.map((item) => (
                <a key={`${item.title}-${item.href}`} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} onClick={closeSearch} className="search-result">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </a>
              )) : <p className="search-empty">No matching results.</p>}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
