import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { commandItems, navItems } from "../data/site";

export function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const items = useMemo(
    () => [
      ...navItems.map((item) => ({ ...item, label: `Go to ${item.label}` })),
      ...commandItems,
    ],
    [],
  );

  const filtered = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        open ? onClose() : null;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[70] grid place-items-start px-4 pt-24 sm:pt-28" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button type="button" className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm" onClick={onClose} aria-label="Close command palette" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            className="relative mx-auto w-full max-w-xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-premium dark:border-white/10 dark:bg-ink-900"
            initial={{ y: 16, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 border-b border-black/10 px-4 dark:border-white/10">
              <Search className="size-4 text-slate-400" aria-hidden="true" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-14 flex-1 bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400 dark:text-white"
                placeholder="Search sections and actions"
              />
              <button type="button" className="icon-button" onClick={onClose} aria-label="Close command palette">
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-700 transition hover:bg-slate-950/[0.05] hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.06] dark:hover:text-white"
                  >
                    <span className="grid size-8 place-items-center rounded-lg border border-black/10 bg-slate-50 dark:border-white/10 dark:bg-white/[0.04]">
                      {Icon ? <Icon className="size-4" aria-hidden="true" /> : <Search className="size-4" aria-hidden="true" />}
                    </span>
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
