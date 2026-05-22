import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Download, Eye, Mail, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { CommandPalette } from "./components/CommandPalette";
import { HeroSystem } from "./components/HeroSystem";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { approach, capabilities, contactLinks, leadership, navItems, projects, timeline } from "./data/site";
import { fadeUp, sectionViewport, stagger } from "./lib/motion";

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const activeDark = theme === "dark" || (theme === "system" && systemDark);
    root.classList.toggle("dark", activeDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
}

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("top");
  const sectionIds = useMemo(() => ["top", ...navItems.map((item) => item.href.slice(1))], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -60% 0px", threshold: [0.08, 0.24, 0.42] },
    );
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

export default function App() {
  const [theme, setTheme] = useTheme();
  const activeSection = useActiveSection();
  const [commandOpen, setCommandOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    function onKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 antialiased dark:bg-ink-950 dark:text-white">
      <motion.div className="fixed left-0 top-0 z-[80] h-0.5 bg-accent-cyan" style={{ width: progress }} />
      <Navbar activeSection={activeSection} theme={theme} setTheme={setTheme} onCommand={() => setCommandOpen(true)} />
      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />

      <main id="top">
        <section className="relative isolate min-h-screen overflow-hidden pt-28 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(114,216,239,0.10),transparent_32%),radial-gradient(circle_at_78%_16%,rgba(134,168,255,0.12),transparent_30%)] dark:bg-[linear-gradient(180deg,rgba(114,216,239,0.08),transparent_34%),radial-gradient(circle_at_78%_16%,rgba(134,168,255,0.14),transparent_32%)]" />
          <motion.div
            className="absolute inset-x-0 top-16 -z-10 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent"
            animate={{ opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
              <motion.p variants={fadeUp} className="eyebrow">
                Software Engineering · Cybersecurity · Blueprint Studio
              </motion.p>
              <motion.h1 variants={fadeUp} className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-0 text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
                Shoug Alomran
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-5 text-xl font-medium text-slate-800 dark:text-slate-200 sm:text-2xl">
                Software Engineer & Cybersecurity Specialist
              </motion.p>
              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                Building structured digital systems, modern web platforms, and documentation-driven experiences with a security-aware engineering mindset.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="primary-button">
                  View Projects <ArrowDown className="size-4" aria-hidden="true" />
                </a>
                <a href="/cv/" className="secondary-button">
                  View CV <Eye className="size-4" aria-hidden="true" />
                </a>
                <a href="/cv/?download=1" className="secondary-button">
                  Download CV <Download className="size-4" aria-hidden="true" />
                </a>
                <a href="#contact" className="secondary-button">
                  Contact <Mail className="size-4" aria-hidden="true" />
                </a>
                <a href="https://blueprint.shoug-tech.com" target="_blank" rel="noreferrer" className="secondary-button">
                  Visit Blueprint Studio <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>
            <HeroSystem />
          </div>
        </section>

        <Section
          id="about"
          eyebrow="Profile"
          title="A structured engineering identity for systems that need clarity."
          intro="Shoug works at the intersection of software engineering, cybersecurity awareness, documentation architecture, and professional digital experience design."
        >
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div variants={fadeUp} className="surface p-7 sm:p-9">
              <p className="text-lg leading-9 text-slate-700 dark:text-slate-300">
                Her work style is architecture-focused and detail-heavy: defining information structure, organizing technical decisions, and turning complex requirements into interfaces that feel calm, navigable, and maintainable. The emphasis is not on decoration, but on building digital systems that communicate trust through structure.
              </p>
              <p className="mt-6 text-lg leading-9 text-slate-700 dark:text-slate-300">
                That perspective carries into Blueprint Studio, a digital systems studio for documentation-oriented websites, bilingual platforms, and scalable web experiences that are designed to be used, searched, maintained, and trusted.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid gap-5">
              {["Systems thinking", "Documentation-first workflows", "Security-aware development", "Bilingual digital systems"].map((item) => (
                <motion.div key={item} variants={fadeUp} className="surface flex items-center gap-4 p-5">
                  <span className="grid size-10 place-items-center rounded-xl bg-slate-950 text-white dark:bg-white dark:text-ink-950">
                    <ShieldCheck className="size-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium text-slate-900 dark:text-white">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Work shaped by security practice, technical leadership, and teaching systems.">
          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-accent-cyan via-slate-300 to-transparent dark:via-white/20 sm:block" />
            <div className="grid gap-5">
              {timeline.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article key={`${item.organization}-${item.role}`} variants={fadeUp} className="relative surface p-6 sm:ml-14 sm:p-7">
                    <span className="absolute -left-[3.4rem] top-7 hidden size-10 place-items-center rounded-xl border border-accent-cyan/35 bg-white text-accent-cyan shadow-line dark:bg-ink-900 sm:grid">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <p className="eyebrow">{item.marker}</p>
                    <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.organization}</h3>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.role}</p>
                    </div>
                    <ul className="mt-5 grid gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent-cyan" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Featured Systems"
          title="Project work presented as product architecture, not portfolio decoration."
          intro="Each project is treated as a system with a purpose, structure, interface model, deployment context, and audience."
        >
          <motion.div variants={stagger} className="grid gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </Section>

        <Section id="capabilities" eyebrow="Capabilities" title="Technical range organized around system outcomes.">
          <motion.div variants={stagger} className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              return (
                <motion.article key={capability.title} variants={fadeUp} className="surface p-5 xl:min-h-[360px]">
                  <span className="grid size-11 place-items-center rounded-xl bg-slate-950 text-white dark:bg-white dark:text-ink-950">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">{capability.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{capability.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {capability.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-black/10 px-2.5 py-1 font-mono text-[0.66rem] text-slate-600 dark:border-white/10 dark:text-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </Section>

        <Section id="leadership" eyebrow="Leadership" title="Technical community work with structure and responsibility.">
          <motion.div variants={stagger} className="grid gap-5 md:grid-cols-3">
            {leadership.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} variants={fadeUp} className="surface p-6">
                  <Icon className="size-5 text-accent-cyan" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </Section>

        <Section id="approach" eyebrow="Approach" title="How I build: calm systems, clear decisions, durable structure.">
          <motion.div variants={stagger} className="grid gap-4 md:grid-cols-2">
            {approach.map((item, index) => (
              <motion.article key={item.title} variants={fadeUp} className="surface flex gap-5 p-6">
                <span className="font-mono text-sm text-accent-cyan">0{index + 1}</span>
                <div>
                  <h3 className="font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something structured." intro="For technical collaboration, cybersecurity-focused initiatives, academic work, or Blueprint Studio projects.">
          <motion.div variants={stagger} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a key={link.label} variants={fadeUp} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="surface group p-5">
                  <div className="flex items-center justify-between gap-3">
                    <Icon className="size-5 text-accent-cyan" aria-hidden="true" />
                    <ArrowUpRight className="size-4 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-950 dark:group-hover:text-white" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-sm font-medium text-slate-500 dark:text-slate-400">{link.label}</p>
                  <p className="mt-1 break-words text-base font-semibold text-slate-950 dark:text-white">{link.value}</p>
                </motion.a>
              );
            })}
          </motion.div>
        </Section>
      </main>

      <footer className="border-t border-black/10 py-8 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Shoug Alomran. Structured digital systems.</p>
          <button type="button" onClick={() => setCommandOpen(true)} className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
            <BriefcaseBusiness className="size-4" aria-hidden="true" />
            Command palette
          </button>
        </div>
      </footer>
    </div>
  );
}
