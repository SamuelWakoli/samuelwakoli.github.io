import { Card } from "../Card";
import profile from "../../config/profile.json";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const EducationCard = () => {
  return (
    <Card className="col-span-12 md:col-span-12 row-span-1 group/edu">
      <div className="flex items-center gap-3 mb-8">
        <div className="theme-icon-surface rounded-lg p-2 group-hover/edu:scale-110 transition-transform">
          <GraduationCap size={20} />
        </div>
        <h3 className="theme-title text-xl font-bold uppercase tracking-wider">
          Education
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {profile.education.map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            className="relative border-l-2 border-[color:var(--timeline)] pl-6 transition-colors hover:border-[var(--accent)]"
          >
            <div className="absolute -left-[6px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--accent-soft-strong)] transition-colors group-hover/edu:bg-[var(--accent)]"></div>
            <h4 className="theme-title text-lg font-bold">{edu.school}</h4>
            <p className="theme-accent mb-1 font-medium">{edu.degree}</p>
            <span className="theme-surface theme-muted mb-3 inline-block rounded px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em]">
              {edu.year}
            </span>
            {edu.description && (
              <div className="theme-muted glass mt-2 rounded-2xl p-5 text-sm leading-relaxed whitespace-pre-line">
                {edu.description}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export const CertificationCard = () => {
  return (
    <Card className="col-span-12 md:col-span-12 row-span-1 group/cert">
      <div className="flex items-center gap-3 mb-6">
        <div className="theme-icon-surface rounded-lg p-2 group-hover/cert:scale-110 transition-transform">
          <Award size={20} />
        </div>
        <h3 className="theme-title text-xl font-bold uppercase tracking-wider">
          Certifications
        </h3>
      </div>

      <div className="space-y-4">
        {profile.certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            className="theme-surface theme-surface-hover block group relative overflow-hidden rounded-xl p-4 shadow-sm"
          >
            <div className="absolute inset-0 bg-[rgba(124,58,237,0.08)] opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="flex-1">
                <h4 className="theme-title flex items-center gap-2 text-base font-bold transition-colors group-hover:text-[var(--accent-secondary)]">
                  {cert.name}
                  <ExternalLink
                    size={14}
                    className="theme-accent opacity-0 transition-opacity group-hover/cert:opacity-100"
                  />
                </h4>
              </div>
            </div>
            {cert.description && (
              <p className="theme-muted theme-divider relative z-10 mt-3 border-t pt-3 text-[11px] leading-relaxed transition-colors group-hover:text-[var(--text-secondary)]">
                {cert.description}
              </p>
            )}
          </motion.a>
        ))}
      </div>
    </Card>
  );
};
