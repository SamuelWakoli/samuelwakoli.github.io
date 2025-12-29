import { Card } from "../Card";
import profile from "../../config/profile.json";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export const EducationCard = () => {
  return (
    <Card className="col-span-12 md:col-span-12 row-span-1 group/edu">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover/edu:scale-110 transition-transform">
          <GraduationCap size={20} />
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-wider">
          Education
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {profile.education.map((edu, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            className="relative pl-6 border-l-2 border-slate-800 hover:border-blue-500 transition-colors"
          >
            <div className="absolute -left-[6px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500/50 group-hover/edu:bg-blue-500 transition-colors"></div>
            <h4 className="text-white font-bold text-lg">{edu.school}</h4>
            <p className="text-blue-300 font-medium mb-1">{edu.degree}</p>
            <span className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.2em] bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800/50 mb-3 inline-block">
              {edu.year}
            </span>
            {edu.description && (
              <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line glass p-5 rounded-2xl mt-2 border border-white/5 hover:border-white/10 shadow-inner">
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
    <Card className="col-span-12 md:col-span-6 row-span-1 group/cert">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 group-hover/cert:scale-110 transition-transform">
          <Award size={20} />
        </div>
        <h3 className="text-xl font-bold text-white uppercase tracking-wider">
          Certifications
        </h3>
      </div>

      <div className="space-y-4">
        {profile.certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            whileHover={{ scale: 1.02, y: -2 }}
            className="block group relative p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 hover:border-purple-500/50 hover:bg-slate-800/40 transition-all overflow-hidden shadow-sm hover:shadow-purple-500/10"
          >
            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex justify-between items-start relative z-10">
              <div className="flex-1">
                <h4 className="text-slate-200 font-bold group-hover:text-purple-300 transition-colors text-base flex items-center gap-2">
                  {cert.name}
                  <ExternalLink
                    size={14}
                    className="opacity-0 group-hover/cert:opacity-100 transition-opacity text-purple-400"
                  />
                </h4>
              </div>
            </div>
            {cert.description && (
              <p className="text-slate-400 text-[11px] mt-3 leading-relaxed relative z-10 border-t border-white/5 pt-3 group-hover:text-slate-300 transition-colors">
                {cert.description}
              </p>
            )}
          </motion.a>
        ))}
      </div>
    </Card>
  );
};
