import { Card } from "../Card";
import profile from "../../config/profile.json";
import { Trophy, ExternalLink } from "lucide-react";

export const AwardsCard = () => {
  if (!profile.awards || profile.awards.length === 0) return null;

  return (
    <Card className="col-span-12 md:col-span-12 row-span-1">
      <div className="flex items-center gap-3 mb-6">
        <div className="theme-icon-surface rounded-lg p-2 text-[var(--warning)]">
          <Trophy size={20} />
        </div>
        <h3 className="theme-title text-xl font-bold">Awards</h3>
      </div>

      <div className="space-y-6">
        {profile.awards.map((award, index) => (
          <div key={index} className="group">
            <h4 className="theme-title text-lg font-medium transition-colors group-hover:text-[var(--warning)]">
              {award.name}
            </h4>
            <div className="flex justify-between items-center mt-1 mb-2">
              <span className="theme-muted text-xs">{award.issuer}</span>
              <span className="theme-subtle text-xs font-mono">
                {award.year}
              </span>
            </div>
            <p className="theme-muted text-sm leading-relaxed">
              {award.description}
            </p>
            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs text-[var(--warning)] transition-colors hover:opacity-80"
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
