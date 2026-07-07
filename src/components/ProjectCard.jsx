import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "../lib/motion";

const imageThemes = [
  "from-cyan-500/25 via-slate-900 to-black",
  "from-emerald-500/20 via-slate-900 to-black",
  "from-indigo-500/20 via-slate-900 to-black",
  "from-fuchsia-500/15 via-slate-900 to-black",
];

export function ProjectCard({ project, index, featured = false }) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      variants={fadeUp}
      className={`group block rounded-2xl p-4 transition duration-300 hover:-translate-y-1 ${featured ? "surface-featured" : "surface"}`}
    >
      <div className={`relative overflow-hidden rounded-xl ${project.image ? "" : `bg-gradient-to-br ${imageThemes[index % imageThemes.length]}`}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-44 w-full object-cover object-top sm:h-56"
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:26px_26px]" />
            <div className="flex h-44 items-center justify-center sm:h-56">
              <span className="text-4xl font-bold tracking-tight text-white/15 sm:text-6xl">
                {project.title
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            </div>
          </>
        )}
        {project.live && (
          <span className="badge-pill absolute right-3 top-3">Live</span>
        )}
      </div>

      <div className="px-2 pb-2 pt-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <ArrowUpRight
            className="size-5 shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
            aria-hidden="true"
          />
        </div>
        <p className="mt-3 text-sm leading-7 text-slate-400">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
