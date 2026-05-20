import { MonitorCog, Moon, Sun } from "lucide-react";

export function ThemeToggle({ theme, setTheme }) {
  const options = [
    { value: "dark", label: "Dark", icon: Moon },
    { value: "light", label: "Light", icon: Sun },
    { value: "system", label: "System", icon: MonitorCog },
  ];

  return (
    <div className="grid grid-cols-3 rounded-full border border-black/10 bg-white/70 p-1 shadow-line backdrop-blur dark:border-white/10 dark:bg-white/[0.04]">
      {options.map((option) => {
        const Icon = option.icon;
        const active = theme === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-label={`Use ${option.label} theme`}
            onClick={() => setTheme(option.value)}
            className={`group relative grid size-8 place-items-center rounded-full transition ${
              active
                ? "bg-ink-900 text-white dark:bg-white dark:text-ink-950"
                : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            <Icon className="size-4" aria-hidden="true" />
            <span className="tooltip">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
