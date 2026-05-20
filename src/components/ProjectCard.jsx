import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Plus } from "lucide-react";
import { useState } from "react";
import { fadeUp } from "../lib/motion";

export function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(index === 0);
  const Icon = project.icon;

  return (
    <motion.article variants={fadeUp} className="group rounded-2xl border border-black/10 bg-white/72 p-5 shadow-line transition duration-300 hover:-translate-y-1 hover:border-accent-cyan/35 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.045]">
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-black/10 bg-slate-950 text-white dark:border-white/10 dark:bg-white dark:text-ink-950">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{project.type}</p>
              <h3 className="mt-1 text-xl font-semibold tracking-0 text-slate-950 dark:text-white">{project.title}</h3>
            </div>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">{project.summary}</p>
        </div>
        <button type="button" className="icon-button group/btn shrink-0" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} aria-label={`Toggle ${project.title} case study`}>
          <Plus className={`size-4 transition ${expanded ? "rotate-45" : ""}`} aria-hidden="true" />
          <span className="tooltip">Details</span>
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-black/10 px-3 py-1.5 font-mono text-[0.7rem] text-slate-600 dark:border-white/10 dark:text-slate-300">
            {item}
          </span>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 grid gap-5 border-t border-black/10 pt-6 dark:border-white/10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="eyebrow mb-3">Architecture summary</p>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{project.architecture}</p>
              </div>
              <div>
                <p className="eyebrow mb-3">System highlights</p>
                <div className="grid gap-2">
                  {project.highlights.map((item) => (
                    <div key={item} className="rounded-xl bg-slate-950/[0.04] px-3 py-2 text-sm text-slate-700 dark:bg-white/[0.045] dark:text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href={project.href} target="_blank" rel="noreferrer" className="text-button">
          Live system <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <a href={project.repo} target="_blank" rel="noreferrer" className="text-button secondary">
          GitHub <Github className="size-4" aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}
