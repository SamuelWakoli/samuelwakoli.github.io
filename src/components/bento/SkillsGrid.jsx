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
      <div className="space-y-6 p-5 md:p-6">
        <h3 className="mb-1 flex items-center gap-2 text-lg font-bold text-white md:text-xl">
          Technical Skills
          <span className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-50"></span>
        </h3>

        <div className="grid gap-4 xl:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="rounded-2xl border border-slate-800/60 bg-slate-900/25 p-4"
            >
              <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-400/80">
                {group.category}
              </h4>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
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
                    className="group/skill relative flex h-[88px] flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/40 transition-colors hover:border-blue-500/50 hover:bg-slate-800/40"
                  >
                    <div className="absolute inset-0 bg-blue-500/5 opacity-0 transition-opacity group-hover/skill:opacity-100"></div>

                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="z-10 mb-2 h-8 w-8 opacity-80 transition-transform duration-300 group-hover/skill:scale-110 group-hover/skill:opacity-100"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.classList.add(
                          "text-sm",
                          "font-bold",
                          "text-blue-200",
                        );
                      }}
                    />
                    <span className="z-10 px-2 text-center text-[11px] font-medium leading-4 text-slate-400 transition-colors group-hover/skill:text-white">
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
