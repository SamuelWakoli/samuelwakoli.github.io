import { Card } from "../Card";
import profile from "../../config/profile.json";
import { ExternalLink, FolderKanban } from "lucide-react";
import { motion } from "framer-motion";

const getStageClasses = (stage) => {
  const normalizedStage = stage.toLowerCase();

  if (normalizedStage.includes("stable")) {
    return "theme-chip-success";
  }

  if (normalizedStage.includes("release")) {
    return "theme-chip-warning";
  }

  if (normalizedStage.includes("alpha")) {
    return "theme-icon-surface theme-accent";
  }

  return "theme-surface theme-muted";
};

export const ProjectsCard = () => {
  if (!profile.projects || profile.projects.length === 0) return null;

  return (
    <Card className="col-span-12 row-span-1 group/projects">
      <div className="flex items-center gap-3 mb-8">
        <div className="theme-icon-surface rounded-lg p-2 text-[var(--accent)] transition-transform group-hover/projects:scale-110">
          <FolderKanban size={20} />
        </div>
        <h3 className="theme-title text-xl font-bold uppercase tracking-wider">
          Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {profile.projects.map((project, index) => (
          <motion.article
            key={project.name}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="theme-surface relative flex h-full flex-col overflow-hidden rounded-2xl p-6 shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] via-transparent to-[rgba(124,58,237,0.08)] opacity-0 transition-opacity duration-300 group-hover/projects:opacity-100" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className="theme-muted text-[10px] font-mono uppercase tracking-[0.22em]">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 className="theme-title mt-2 text-xl font-bold">
                    {project.name}
                  </h4>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] ${getStageClasses(project.stage)}`}
                >
                  {project.stage}
                </span>
              </div>

              <p className="theme-muted flex-1 text-sm leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="theme-surface theme-surface-hover theme-body mt-6 inline-flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-medium"
              >
                <span className="truncate">{project.url}</span>
                <ExternalLink size={16} className="theme-accent shrink-0" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Card>
  );
};
