import { Card } from "../Card";
import profile from "../../config/profile.json";
import { Trophy, ExternalLink } from "lucide-react";

export const AwardsCard = () => {
  if (!profile.awards || profile.awards.length === 0) return null;

  return (
    <Card className="col-span-12 md:col-span-6 row-span-1 bg-gradient-to-br from-yellow-900/10 to-transparent">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
          <Trophy size={20} />
        </div>
        <h3 className="text-xl font-bold text-white">Awards</h3>
      </div>

      <div className="space-y-6">
        {profile.awards.map((award, index) => (
          <div key={index} className="group">
            <h4 className="text-lg font-medium text-white group-hover:text-yellow-400 transition-colors">
              {award.name}
            </h4>
            <div className="flex justify-between items-center mt-1 mb-2">
              <span className="text-slate-500 text-xs">{award.issuer}</span>
              <span className="text-slate-600 text-xs font-mono">
                {award.year}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {award.description}
            </p>
            {award.link && (
              <a
                href={award.link}
                target="_blank"
                className="inline-flex items-center gap-1 text-yellow-500/80 text-xs mt-3 hover:text-yellow-400 transition-colors"
              >
                View Details <ExternalLink size={10} />
              </a>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
