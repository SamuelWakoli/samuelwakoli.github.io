import { Card } from "../Card";
import profile from "../../config/profile.json";
import { ExternalLink, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

const getStageClasses = (stage) => {
  const normalizedStage = stage.toLowerCase();

  if (normalizedStage.includes("stable")) {
    return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
  }

  if (normalizedStage.includes("release")) {
    return "border-amber-500/30 bg-amber-500/10 text-amber-300";
  }

  if (normalizedStage.includes("alpha")) {
    return "border-sky-500/30 bg-sky-500/10 text-sky-300";
  }

  return "border-slate-700/60 bg-slate-900/70 text-slate-300";
};

export const ProjectsCard = () => {
  if (!profile.projects || profile.projects.length === 0) return null;

  return (
    <Card className="col-span-12 row-span-1 group/projects">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover/projects:scale-110 transition-transform">
          <FolderKanban size={20} />
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-wider">
          Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {profile.projects.map((project, index) => (
          <motion.article
            key={project.name}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6 shadow-lg shadow-slate-950/30"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover/projects:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="mt-2 text-xl font-bold text-white">
                    {project.name}
                  </h4>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] ${getStageClasses(project.stage)}`}
                >
                  {project.stage}
                </span>
              </div>

              <p className="flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-between gap-3 rounded-xl border border-slate-800/80 bg-slate-950/70 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500/40 hover:text-blue-300"
              >
                <span className="truncate">{project.url}</span>
                <ExternalLink size={16} className="shrink-0" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Card>
  );
};
