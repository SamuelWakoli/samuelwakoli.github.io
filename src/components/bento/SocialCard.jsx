import { Card } from "../Card";
import profile from "../../config/profile.json";
import { Mail, Phone, MessageCircle } from "lucide-react";

export const SocialCard = () => {
  // Helper for WhatsApp link
  const whatsappLink = `https://wa.me/${profile.social.phone.replace("+", "")}`;

  return (
    <Card className="col-span-12 md:col-span-12 row-span-1" noPadding>
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
        {/* 1. Contact Section */}
        <div className="p-6 md:p-8 space-y-6">
          <h3 className="text-xl font-bold text-white mb-4">Contact Details</h3>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.social.email}`}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="text-slate-200 font-medium">
                  {profile.social.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${profile.social.phone}`}
              className="flex items-center gap-4 group"
            >
              <div className="p-3 bg-green-500/10 rounded-lg text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <p className="text-slate-200 font-medium">
                  {profile.social.phone}
                </p>
              </div>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              className="flex items-center gap-4 group"
            >
              <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-500">WhatsApp</p>
                <p className="text-slate-200 font-medium">Chat on WhatsApp</p>
              </div>
            </a>
          </div>
        </div>

        {/* 2. Social Section */}
        <div className="p-6 md:p-8 bg-slate-900/30">
          <h3 className="text-xl font-bold text-white mb-6">Social Profiles</h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a
              href={profile.social.linkedin}
              target="_blank"
              className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl hover:bg-blue-900/20 hover:border-blue-500/50 border border-transparent transition-all group gap-3"
            >
              <img
                src="https://skillicons.dev/icons?i=linkedin"
                alt="LinkedIn"
                className="w-8 h-8 group-hover:scale-110 transition-transform"
              />
              <span className="text-xs text-slate-400">LinkedIn</span>
            </a>

            <a
              href={profile.social.github}
              target="_blank"
              className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 hover:border-slate-500/50 border border-transparent transition-all group gap-3"
            >
              <img
                src="https://skillicons.dev/icons?i=github"
                alt="GitHub"
                className="w-8 h-8 group-hover:scale-110 transition-transform"
              />
              <span className="text-xs text-slate-400">GitHub</span>
            </a>

            {profile.social.google_play && (
              <a
                href={profile.social.google_play}
                target="_blank"
                className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl hover:bg-green-900/20 hover:border-green-500/50 border border-transparent transition-all group gap-3"
              >
                <img
                  src="https://www.innovados.com/wp-content/uploads/google-play-logo-nuevo.png"
                  alt="Google Play"
                  className="h-8 object-contain group-hover:scale-110 transition-transform"
                />
                <span className="text-xs text-slate-400">Play Store</span>
              </a>
            )}

            {profile.social.google_dev && (
              <a
                href={profile.social.google_dev}
                target="_blank"
                className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl hover:bg-blue-900/20 hover:border-blue-500/50 border border-transparent transition-all group gap-3"
              >
                <div className="w-8 h-8 bg-white rounded-full p-1 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/072/678/272/non_2x/google-developers-logo-icon-free-png.png"
                    alt="Google Developers"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs text-slate-400">Developers</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
