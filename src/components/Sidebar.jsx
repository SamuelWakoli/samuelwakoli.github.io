import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  User,
  Code,
  Briefcase,
  FolderKanban,
  GraduationCap,
  Award,
  Trophy,
  Mail,
  FileText,
  Palette,
} from "lucide-react";
import profile from "../config/profile.json";
import { ThemeDialog } from "./ThemeDialog";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { icon: User, label: "Profile", href: "#home", id: "home" },
  { icon: Code, label: "Skills", href: "#skills", id: "skills" },
  {
    icon: Briefcase,
    label: "Experience",
    href: "#experience",
    id: "experience",
  },
  {
    icon: GraduationCap,
    label: "Education",
    href: "#education",
    id: "education",
  },
  {
    icon: FolderKanban,
    label: "Projects",
    href: "#projects",
    id: "projects",
  },
  {
    icon: Award,
    label: "Certifications",
    href: "#certifications",
    id: "certifications",
  },
  { icon: Trophy, label: "Awards", href: "#awards", id: "awards" },
  { icon: Mail, label: "Contact", href: "#contact", id: "contact" },
];

const themeLabelMap = {
  system: "Device",
  light: "Light",
  dark: "Dark",
};

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

let scrollAnimationFrame = 0;
let restoreScrollBehavior = () => {};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const stopAnimatedScroll = () => {
  if (scrollAnimationFrame) {
    window.cancelAnimationFrame(scrollAnimationFrame);
    scrollAnimationFrame = 0;
  }

  restoreScrollBehavior();
  restoreScrollBehavior = () => {};
};

const easeInOutCubic = (progress) =>
  progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;

const animatePageScroll = (targetY) => {
  stopAnimatedScroll();

  const root = document.documentElement;
  const maxScrollY = Math.max(0, root.scrollHeight - window.innerHeight);
  const finalY = clamp(targetY, 0, maxScrollY);
  const startY = window.scrollY;
  const distance = finalY - startY;

  if (prefersReducedMotion() || Math.abs(distance) < 6) {
    window.scrollTo({ top: finalY, behavior: "auto" });
    return;
  }

  const previousScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  restoreScrollBehavior = () => {
    root.style.scrollBehavior = previousScrollBehavior;
  };

  const duration = clamp(450 + Math.abs(distance) * 0.45, 650, 2200);
  const startTime = performance.now();

  const step = (time) => {
    const progress = clamp((time - startTime) / duration, 0, 1);
    const easedProgress = easeInOutCubic(progress);
    const nextY = startY + distance * easedProgress;

    window.scrollTo({ top: nextY, behavior: "auto" });

    if (progress < 1) {
      scrollAnimationFrame = window.requestAnimationFrame(step);
      return;
    }

    window.scrollTo({ top: finalY, behavior: "auto" });
    stopAnimatedScroll();
  };

  scrollAnimationFrame = window.requestAnimationFrame(step);
};

const navigateToSection = (event, id, onNavigate) => {
  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return;
  }

  event.preventDefault();
  onNavigate?.();

  const section = document.getElementById(id);
  if (!section) return;

  const targetY = section.getBoundingClientRect().top + window.scrollY - 16;

  window.requestAnimationFrame(() => {
    animatePageScroll(targetY);
  });

  const hash = `#${id}`;
  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }
};

const useScrollSpy = (ids, offset = 120) => {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;

      const threshold = offset;
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .map((section) => {
          const rect = section.getBoundingClientRect();
          return {
            id: section.id,
            top: rect.top,
            bottom: rect.bottom,
          };
        })
        .filter((section) => section.bottom > threshold);

      if (!sections.length) return;

      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      const sectionsAboveThreshold = sections.filter(
        (section) => section.top <= threshold,
      );
      const nextActiveId = isAtPageBottom
        ? sections.at(-1)?.id ?? ids.at(-1) ?? ids[0]
        : sectionsAboveThreshold.at(-1)?.id ?? sections[0]?.id ?? ids[0];

      setActiveId((currentId) =>
        currentId === nextActiveId ? currentId : nextActiveId,
      );
    };

    const scheduleUpdate = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [ids, offset]);

  return activeId;
};

const useSectionVisible = (id, threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [id, threshold]);

  return isVisible;
};

const ThemeSettingsButton = ({ onClick }) => {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Theme: ${themeLabelMap[theme]}`}
      className="theme-surface theme-surface-hover flex h-11 w-full items-center justify-between gap-2 rounded-xl px-2.5 text-left"
    >
      <span className="flex items-center gap-3">
        <span className="theme-icon-surface flex h-8 w-8 items-center justify-center rounded-lg">
          <Palette size={15} className="theme-accent" />
        </span>
        <span className="theme-title text-sm font-medium">Theme</span>
      </span>
      <span className="theme-muted theme-icon-surface rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
        {themeLabelMap[theme]}
      </span>
    </button>
  );
};

const NavigationHeader = ({ showAvatar, onClose }) => {
  return (
    <div className="mb-6 min-h-[52px] shrink-0">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <motion.div
            initial={false}
            animate={{
              width: showAvatar ? 40 : 0,
              opacity: showAvatar ? 1 : 0,
              marginRight: showAvatar ? 0 : -12,
            }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="theme-surface h-10 shrink-0 overflow-hidden rounded-full"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="min-w-0">
            <h1 className="text-gradient text-xl font-bold leading-none">
              {profile.name}
            </h1>
            <p className="theme-muted mt-1.5 text-[11px] leading-4">
              {profile.role}
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="theme-surface theme-surface-hover rounded-xl p-2"
          >
            <X size={18} className="theme-muted" />
          </button>
        )}
      </div>
    </div>
  );
};

export const Sidebar = () => {
  const [isThemeDialogOpen, setThemeDialogOpen] = useState(false);
  const sectionIds = [
    "home",
    "skills",
    "experience",
    "education",
    "projects",
    "certifications",
    "awards",
    "contact",
  ];
  const activeSection = useScrollSpy(sectionIds);
  const isHomeVisible = useSectionVisible("home");

  return (
    <>
      <div
        aria-hidden="true"
        className="hidden shrink-0 lg:block w-[calc(17rem+0.75rem)] xl:w-[calc(18rem+0.75rem)]"
      />
      <aside className="theme-panel fixed left-3 top-3 z-10 hidden h-[calc(100vh-24px)] w-[17rem] flex-col overflow-y-auto rounded-[28px] p-5 lg:flex xl:w-[18rem]">
        <NavigationHeader showAvatar={!isHomeVisible} />

        <nav className="flex-1 space-y-1.5">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.id;
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                onClick={(event) => navigateToSection(event, link.id)}
                className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] transition-all ${
                  isActive
                    ? "theme-sidebar-active"
                    : "theme-body hover:bg-[var(--surface-bg)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span
                  className={`transition-colors ${
                    isActive
                      ? "text-white"
                      : "theme-muted group-hover:text-[var(--accent)]"
                  }`}
                >
                  <Icon size={18} />
                </span>
                <span className="font-medium">{link.label}</span>

                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute right-3.5 h-1.5 w-1.5 rounded-full bg-white"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="theme-divider mt-6 space-y-2.5 border-t pt-4">
          <ThemeSettingsButton onClick={() => setThemeDialogOpen(true)} />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="theme-button-primary flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            <FileText size={16} /> Download Resume
          </a>
        </div>
      </aside>
      <ThemeDialog
        isOpen={isThemeDialogOpen}
        onClose={() => setThemeDialogOpen(false)}
      />
    </>
  );
};

export const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeDialogOpen, setThemeDialogOpen] = useState(false);
  const sectionIds = [
    "home",
    "skills",
    "experience",
    "education",
    "projects",
    "certifications",
    "awards",
    "contact",
  ];
  const activeSection = useScrollSpy(sectionIds);
  const isHomeVisible = useSectionVisible("home");

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="theme-panel fixed left-3 top-3 z-50 rounded-full p-2.5 lg:hidden"
      >
        <Menu size={22} className="theme-title" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="theme-panel fixed left-3 top-3 z-[70] flex h-fit max-h-[calc(100vh-24px)] w-[78%] max-w-[290px] flex-col rounded-[26px] p-4 lg:hidden"
            >
              <NavigationHeader
                showAvatar={!isHomeVisible}
                onClose={() => setIsOpen(false)}
              />

              <div className="scrollbar-none overflow-y-auto pr-1">
                <nav className="mb-6 space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = activeSection === link.id;
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        onClick={(event) =>
                          navigateToSection(event, link.id, () => setIsOpen(false))
                        }
                        className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                          isActive
                            ? "theme-sidebar-active"
                            : "theme-body hover:bg-[var(--surface-bg)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <span
                          className={`transition-colors ${
                            isActive
                              ? "text-white"
                              : "theme-muted group-hover:text-[var(--accent)]"
                          }`}
                        >
                          <Icon size={17} />
                        </span>
                        <span className="font-medium">{link.label}</span>

                        {isActive && (
                          <motion.div
                            layoutId="mobile-active-dot"
                            className="absolute right-3.5 h-1.5 w-1.5 rounded-full bg-white"
                          />
                        )}
                      </a>
                    );
                  })}
                </nav>

                <div className="theme-divider space-y-3 border-t pb-3 pt-4">
                  <ThemeSettingsButton
                    onClick={() => setThemeDialogOpen(true)}
                  />
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="theme-button-primary flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-transform active:scale-95"
                  >
                    <FileText size={16} /> Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <ThemeDialog
        isOpen={isThemeDialogOpen}
        onClose={() => setThemeDialogOpen(false)}
      />
    </>
  );
};
