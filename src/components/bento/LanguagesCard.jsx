import { Card } from "../Card";
import profile from "../../config/profile.json";
import { Languages } from "lucide-react";

export const LanguagesCard = () => {
  if (!profile.languages) return null;

  return (
    <Card className="col-span-12 md:col-span-4 row-span-1">
      <div className="flex items-center gap-3 mb-6">
        <div className="theme-icon-surface rounded-lg p-2 text-[var(--success)]">
          <Languages size={20} />
        </div>
        <h3 className="theme-title text-xl font-bold">Languages</h3>
      </div>

      <div className="space-y-3">
        {profile.languages.map((lang, index) => (
          <div
            key={index}
            className="theme-surface flex items-center justify-between rounded-lg p-3"
          >
            <span className="theme-title font-medium">{lang.name}</span>
            <span className="theme-muted text-xs">{lang.level}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
