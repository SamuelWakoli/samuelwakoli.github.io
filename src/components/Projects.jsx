import { Section } from "./Section";
import profile from "../config/profile.json";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  return (
    <Section id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img
                  src={
                    project.image ||
                    "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-medium rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-700/50">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  {/* Add Github link field to json if needed, for now assuming project link might serve both or adding placeholder */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
