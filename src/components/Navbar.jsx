import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "../data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar({ activeSection, theme, setTheme, onCommand }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/74 backdrop-blur-2xl dark:border-white/10 dark:bg-ink-950/68">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#top" className="group flex items-center gap-3" aria-label="Shoug Alomran home">
          <span className="grid size-9 place-items-center rounded-lg border border-black/10 bg-slate-950 text-[0.68rem] font-semibold text-white shadow-line dark:border-white/10 dark:bg-white dark:text-ink-950">
            SA
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-slate-950 dark:text-white">Shoug Alomran</span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">Digital systems engineer</span>
          </span>
        </a>

        <div className="hidden items-center rounded-full border border-black/10 bg-white/60 p-1 dark:border-white/10 dark:bg-white/[0.04] lg:flex">
          {navItems.map((item) => {
            const active = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-2 text-sm transition ${
                  active ? "text-slate-950 dark:text-white" : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {active && <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-slate-950/[0.06] dark:bg-white/[0.08]" />}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="icon-button group hidden sm:grid" onClick={onCommand} aria-label="Open command palette">
            <Search className="size-4" aria-hidden="true" />
            <span className="tooltip">Search</span>
          </button>
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button type="button" className="icon-button lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="size-4" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/92 backdrop-blur-2xl dark:bg-ink-950/94 lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="text-sm font-semibold text-slate-950 dark:text-white">Navigation</span>
              <button type="button" className="icon-button" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <div className="grid gap-2 px-5 py-7">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-black/10 bg-slate-950/[0.03] px-4 py-4 text-lg font-medium text-slate-900 dark:border-white/10 dark:bg-white/[0.04] dark:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
