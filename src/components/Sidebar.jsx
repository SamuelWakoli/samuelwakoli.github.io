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
} from "lucide-react";
import profile from "../config/profile.json";

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

const useScrollSpy = (ids, offset = 100) => {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -50% 0px`, // Trigger when element is near top or takes up significant portion
        threshold: 0.1,
      },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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

const NavigationHeader = ({ showAvatar, onClose }) => {
  return (
    <div className="mb-6 min-h-[52px] shrink-0">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <motion.div
            initial={false}
            animate={{
              width: showAvatar ? 42 : 0,
              opacity: showAvatar ? 1 : 0,
              marginRight: showAvatar ? 0 : -12,
            }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="h-10 shrink-0 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70 shadow-lg shadow-slate-950/40"
          >
            <img
              src={profile.avatar}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="min-w-0">
            <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-xl font-bold leading-none text-transparent">
              {profile.name}
            </h1>
            <p className="mt-1.5 text-[11px] leading-4 text-slate-500">
              {profile.role}
            </p>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="rounded-xl border border-slate-800 bg-slate-900 p-2 text-slate-400 transition-colors hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

export const Sidebar = () => {
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
    <aside className="sticky top-3 ml-3 hidden h-[calc(100vh-24px)] w-[17rem] flex-col overflow-y-auto rounded-[28px] border border-slate-800 bg-slate-950/50 p-5 shadow-2xl backdrop-blur-xl lg:flex xl:w-[18rem]">
      <NavigationHeader showAvatar={!isHomeVisible} />

      <nav className="flex-1 space-y-1.5">
        {navLinks.map((link, index) => {
          const isActive = activeSection === link.id;
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span
                className={`transition-colors ${isActive ? "text-white" : "group-hover:text-blue-400"}`}
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

      <div className="mt-6 border-t border-white/5 pt-5">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-500 hover:shadow-blue-500/35"
        >
          <FileText size={16} /> Download Resume
        </a>
      </div>
    </aside>
  );
};

export const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        className="fixed left-3 top-3 z-50 rounded-full border border-slate-700 bg-slate-900/80 p-2.5 text-white shadow-lg backdrop-blur-md lg:hidden"
      >
        <Menu size={22} />
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
              className="fixed left-3 top-3 z-[70] flex h-fit max-h-[calc(100vh-24px)] w-[78%] max-w-[290px] flex-col rounded-[26px] border border-slate-800 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
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
                        onClick={() => setIsOpen(false)}
                        className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                          isActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                            : "text-slate-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span
                          className={`transition-colors ${isActive ? "text-white" : "group-hover:text-blue-400"}`}
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

                <div className="border-t border-white/5 pb-3 pt-4">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-500 active:scale-95"
                  >
                    <FileText size={16} /> Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
