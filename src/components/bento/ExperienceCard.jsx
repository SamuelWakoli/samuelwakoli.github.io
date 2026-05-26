import { Card } from "../Card";
import profile from "../../config/profile.json";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export const ExperienceCard = () => {
  const formatDescription = (description) => {
    if (!description) return null;
    return description.split("\n").map((line, i) => {
      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        const label = line.substring(0, colonIndex + 1);
        const rest = line.substring(colonIndex + 1);
        return (
          <div key={i} className="mb-2 last:mb-0">
            <span className="theme-title font-bold">{label}</span>
            {rest}
          </div>
        );
      }
      return (
        <div key={i} className="mb-2 last:mb-0">
          {line}
        </div>
      );
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <Card className="col-span-12 row-span-2 group/exp">
      <div className="flex items-center gap-3 mb-8">
        <div className="theme-icon-surface rounded-lg p-2 group-hover/exp:scale-110 transition-transform">
          <Briefcase size={20} />
        </div>
        <h3 className="theme-title text-xl font-bold uppercase tracking-wider">
          Experience
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative ml-3 space-y-12 border-l border-[color:var(--timeline)]"
      >
        {profile.experience.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative pl-8 group/item"
          >
            <span className="absolute -left-[5.5px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--text-soft)] ring-4 ring-[var(--page-bg)] transition-all group-hover/item:scale-125 group-hover/item:bg-[var(--accent)]"></span>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
              <h4 className="theme-title text-lg font-bold transition-colors group-hover/item:text-[var(--accent)]">
                {exp.role}
              </h4>
              <span className="theme-surface theme-muted rounded px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest">
                {exp.year}
              </span>
            </div>
            <div className="theme-accent mb-4 flex flex-wrap items-center gap-2 text-sm font-medium">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"></span>
              {exp.company}
              {exp.location && (
                <div className="theme-muted text-xs font-medium">
                  <span className="mx-1">—</span>
                  {exp.location}
                </div>
              )}
            </div>
            <div className="theme-muted glass rounded-2xl p-5 text-sm leading-relaxed transition-colors">
              {formatDescription(exp.description)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Card>
  );
};
