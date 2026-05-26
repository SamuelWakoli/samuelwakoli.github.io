import { AnimatePresence, motion } from "framer-motion";
import { Check, Monitor, Moon, Sun, X } from "lucide-react";
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const themeOptions = [
  {
    value: "system",
    label: "Device",
    icon: Monitor,
  },
  {
    value: "light",
    label: "Light",
    icon: Sun,
  },
  {
    value: "dark",
    label: "Dark",
    icon: Moon,
  },
];

export const ThemeDialog = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[110] bg-slate-950/70 backdrop-blur-sm"
            aria-label="Close theme dialog"
          />

          <motion.section
            role="dialog"
            aria-modal="true"
            aria-labelledby="theme-dialog-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="theme-panel fixed left-1/2 top-1/2 z-[120] w-[calc(100vw-1.5rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-[24px] p-4 md:p-5"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h2
                  id="theme-dialog-title"
                  className="theme-title text-xl font-bold tracking-tight"
                >
                  Theme
                </h2>
                <p className="theme-muted mt-1 text-xs uppercase tracking-[0.18em]">
                  Device, light, dark
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="theme-surface theme-surface-hover flex h-9 w-9 items-center justify-center rounded-full"
                aria-label="Close theme dialog"
              >
                <X size={16} className="theme-muted" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {themeOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = theme === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setTheme(option.value);
                      onClose();
                    }}
                    className={`theme-surface theme-surface-hover flex min-h-[112px] flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center transition-all ${
                      isSelected ? "theme-surface-selected" : ""
                    }`}
                  >
                    <span className="theme-icon-surface flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl">
                      <Icon size={18} className="theme-accent" />
                    </span>

                    <span className="min-w-0">
                      <span className="theme-title flex items-center justify-center gap-1.5 text-sm font-semibold">
                        {option.label}
                        {isSelected && <Check size={16} className="theme-accent" />}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
};
