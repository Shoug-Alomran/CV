import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { Section } from "./components/Section";
import { SystemOrbit } from "./components/SystemOrbit";
import { domains, footerLinks, heroBadges, leadership, philosophy, projects } from "./data/site";
import { fadeUp, stagger } from "./lib/motion";

export default function App() {
  return (
    <div className="min-h-screen text-white antialiased">
      <div className="starfield" aria-hidden="true" />
      <Navbar />

      <main id="top">
        <section className="relative isolate min-h-screen overflow-hidden pt-28 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_28%,rgba(34,211,238,0.10),transparent_40%),radial-gradient(circle_at_70%_65%,rgba(74,222,128,0.08),transparent_42%)]" />
          <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1700px] items-center px-5 pb-16 sm:px-6 lg:px-8">
            <motion.div variants={stagger} initial="hidden" animate="show" className="hero-content">
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {heroBadges.map((badge) => (
                  <span key={badge} className="badge-pill">
                    {badge}
                  </span>
                ))}
              </motion.div>
              <motion.h1 variants={fadeUp} className="hero-title mt-7">
                Building systems from <span className="text-gradient">idea to deployment.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="hero-text mt-7">
                I&apos;m Shoug Fawaz Alomran, a Software Engineer pursuing a bachelor&apos;s degree in Software Engineering with a minor in Cybersecurity at Prince Sultan University. I build secure, maintainable software—from backend systems and full-stack applications to well-documented digital products delivered from concept to deployment.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9">
                <a href="#projects" className="gradient-button">
                  View Systems &amp; Architecture
                </a>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.35 }} className="hero-visual">
              <SystemOrbit />
            </motion.div>
          </div>
        </section>

        <Section id="projects" title="Deployed Systems">
          <motion.div variants={stagger} className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={project.title} className={index % 3 === 0 ? "lg:col-span-2" : "lg:col-span-1"}>
                <ProjectCard project={project} index={index} featured={index === 0} />
              </div>
            ))}
          </motion.div>
        </Section>

        <Section id="capabilities" title="Technical Domains">
          <motion.div variants={stagger} className="grid gap-5 md:grid-cols-3">
            {domains.map((domain) => (
              <motion.article key={domain.title} variants={fadeUp} className="surface p-6">
                <h3 className="flex items-center gap-2.5 text-base font-semibold text-white">
                  <span className="glow-dot" aria-hidden="true" />
                  {domain.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{domain.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </Section>

        <Section id="leadership" title="Leadership & Execution">
          <motion.div variants={stagger} className="divide-y divide-white/[0.08]">
            {leadership.map((item) => (
              <motion.article key={item.title} variants={fadeUp} className="grid gap-2 py-8 first:pt-0 last:pb-0 lg:grid-cols-[1fr_2fr] lg:gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-cyan">{item.subtitle}</p>
                </div>
                <div>
                  <p className="text-base leading-8 text-slate-400">{item.text}</p>
                  {item.href && (
                    <a href={item.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold text-accent-cyan hover:text-white">
                      {item.linkLabel} ↗
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Section>

        <Section id="philosophy">
          <motion.div variants={stagger} className="grid gap-5 md:grid-cols-2">
            {philosophy.map((item) => (
              <motion.article key={item.title} variants={fadeUp} className="surface p-7">
                <h3 className={`text-lg font-bold ${item.color === "cyan" ? "text-accent-cyan" : "text-accent-green"}`}>{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-400">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </Section>

        <Section id="contact" className="text-center">
          <motion.div variants={stagger} className="mx-auto max-w-2xl">
            <motion.h2 variants={fadeUp} className="section-title">
              Initialize Connection.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-400">
              Let&apos;s connect around software engineering, secure systems, digital products, teaching, or meaningful problems worth solving with technology.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="/cv/Shoug-Alomran-CV.pdf" className="gradient-button" download>
                Download Resume <Download className="size-4" aria-hidden="true" />
              </a>
              <a href="/cv/index.html" target="_blank" rel="noreferrer" className="secondary-button">
                View Interactive CV
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 text-sm text-slate-400">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
                  {link.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </Section>
      </main>
    </div>
  );
}
