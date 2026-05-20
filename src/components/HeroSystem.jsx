import { motion } from "framer-motion";
import { Activity, GitBranch, LockKeyhole, ServerCog, ShieldCheck } from "lucide-react";

const nodes = [
  { label: "Identity", x: "14%", y: "18%" },
  { label: "Content", x: "68%", y: "16%" },
  { label: "Security", x: "18%", y: "68%" },
  { label: "Deploy", x: "72%", y: "70%" },
  { label: "Blueprint", x: "43%", y: "43%" },
];

const checks = [
  ["auth", "verified"],
  ["docs", "indexed"],
  ["risk", "reviewed"],
  ["build", "stable"],
];

export function HeroSystem() {
  return (
    <motion.div
      className="relative min-h-[480px] overflow-hidden rounded-[28px] border border-black/10 bg-white/72 p-4 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]"
      initial={{ opacity: 0, y: 24, rotateX: 6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(114,216,239,0.16),transparent_34%),radial-gradient(circle_at_85%_72%,rgba(134,168,255,0.14),transparent_36%)]" />
      <div className="absolute inset-0 system-grid opacity-60" />

      <div className="relative flex items-center justify-between rounded-2xl border border-black/10 bg-white/76 px-4 py-3 shadow-line dark:border-white/10 dark:bg-ink-900/76">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">system overview</p>
          <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">Shoug OS / digital architecture</p>
        </div>
        <div className="flex items-center gap-2 text-accent-cyan">
          <Activity className="size-4" aria-hidden="true" />
          <span className="font-mono text-xs">online</span>
        </div>
      </div>

      <div className="relative mt-4 grid gap-4 md:grid-cols-[1fr_0.76fr]">
        <div className="relative h-[330px] rounded-2xl border border-black/10 bg-slate-950/[0.025] shadow-line dark:border-white/10 dark:bg-black/18">
          <svg className="absolute inset-0 h-full w-full" role="img" aria-label="Architecture visualization">
            <defs>
              <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#72d8ef" stopOpacity="0.72" />
                <stop offset="1" stopColor="#86a8ff" stopOpacity="0.18" />
              </linearGradient>
            </defs>
            <path d="M86 70 C150 118, 174 120, 226 164 S330 226, 378 252" stroke="url(#line)" strokeWidth="1.5" fill="none" />
            <path d="M350 66 C300 110, 286 126, 226 164 S148 216, 94 248" stroke="url(#line)" strokeWidth="1.5" fill="none" />
            <path d="M226 164 C232 126, 230 96, 350 66" stroke="url(#line)" strokeWidth="1.5" fill="none" />
          </svg>
          {nodes.map((node, index) => (
            <motion.div
              key={node.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: node.x, top: node.y }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className={`rounded-2xl border px-3 py-2 text-xs shadow-line backdrop-blur-xl ${
                node.label === "Blueprint"
                  ? "border-accent-cyan/45 bg-accent-cyan/10 text-slate-950 dark:text-white"
                  : "border-black/10 bg-white/78 text-slate-600 dark:border-white/10 dark:bg-ink-900/78 dark:text-slate-300"
              }`}>
                <span className="block font-mono">{node.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-4">
          <div className="rounded-2xl border border-black/10 bg-white/72 p-4 shadow-line dark:border-white/10 dark:bg-ink-900/72">
            <div className="flex items-center gap-2 text-slate-950 dark:text-white">
              <ShieldCheck className="size-4 text-accent-cyan" aria-hidden="true" />
              <p className="text-sm font-semibold">Security posture</p>
            </div>
            <div className="mt-4 grid gap-2">
              {checks.map(([key, value]) => (
                <div key={key} className="flex items-center justify-between rounded-xl bg-slate-950/[0.04] px-3 py-2 font-mono text-xs dark:bg-white/[0.045]">
                  <span className="text-slate-500 dark:text-slate-400">{key}</span>
                  <span className="text-slate-900 dark:text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white/72 p-4 shadow-line dark:border-white/10 dark:bg-ink-900/72">
            <div className="flex items-center gap-2 text-slate-950 dark:text-white">
              <ServerCog className="size-4 text-accent-blue" aria-hidden="true" />
              <p className="text-sm font-semibold">Build pipeline</p>
            </div>
            <div className="mt-4 space-y-3">
              {["design system", "content model", "responsive QA"].map((item, index) => (
                <div key={item}>
                  <div className="mb-1 flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    <span>{item}</span>
                    <span>{92 + index * 2}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-950/10 dark:bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                      initial={{ width: 0 }}
                      animate={{ width: `${92 + index * 2}%` }}
                      transition={{ duration: 1.2, delay: 0.45 + index * 0.15, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="relative mt-4 flex items-center justify-between rounded-2xl border border-black/10 bg-slate-950 px-4 py-3 text-white shadow-line dark:border-white/10"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2">
          <GitBranch className="size-4 text-accent-cyan" aria-hidden="true" />
          <span className="font-mono text-xs">blueprint/studio-system</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
          <LockKeyhole className="size-3.5 text-accent-cyan" aria-hidden="true" />
          <span>secure by structure</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
