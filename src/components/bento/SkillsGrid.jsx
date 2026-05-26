import { Card } from "../Card";
import profile from "../../config/profile.json";
import { motion } from "framer-motion";

export const SkillsGrid = () => {
  const skillGroups = profile.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <Card className="col-span-12 md:col-span-12 row-span-1 group" noPadding>
      <div className="space-y-4 p-4 md:p-5">
        <h3 className="theme-title flex items-center gap-2 text-lg font-bold md:text-xl">
          Technical Skills
          <span className="h-1 w-12 rounded-full bg-gradient-to-r from-[var(--accent)] to-transparent opacity-50"></span>
        </h3>

        <div className="grid gap-3 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="theme-surface rounded-2xl p-3.5"
            >
              <h4 className="theme-accent mb-2.5 text-[10px] font-semibold uppercase tracking-[0.18em]">
                {group.category}
              </h4>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-[repeat(auto-fit,minmax(74px,1fr))] gap-2.5"
              >
                {group.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                      boxShadow: "0 10px 30px -12px rgba(56, 189, 248, 0.3)",
                    }}
                    className="theme-surface theme-surface-hover group/skill relative flex h-[76px] flex-col items-center justify-center overflow-hidden rounded-xl px-2"
                  >
                    <div className="absolute inset-0 bg-[var(--accent-soft)] opacity-0 transition-opacity group-hover/skill:opacity-100"></div>

                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="z-10 mb-1.5 h-7 w-7 opacity-80 transition-transform duration-300 group-hover/skill:scale-110 group-hover/skill:opacity-100"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.classList.add(
                          "text-sm",
                          "font-bold",
                          "theme-accent",
                        );
                      }}
                    />
                    <span className="theme-muted z-10 text-center text-[10px] font-medium leading-3.5 transition-colors group-hover/skill:text-[var(--text-primary)]">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
