import { Card } from "../Card";
import profile from "../../config/profile.json";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const SocialCard = () => {
  // Helper for WhatsApp link
  const whatsappLink = `https://wa.me/${profile.social.phone.replace("+", "")}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Card
      className="col-span-12 md:col-span-12 row-span-1 group/social"
      noPadding
    >
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800/50">
        {/* 1. Contact Section */}
        <div className="p-6 md:p-8 space-y-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
            Contact Details
            <span className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent"></span>
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                href: `mailto:${profile.social.email}`,
                icon: Mail,
                label: "Email",
                value: profile.social.email,
                color: "blue",
              },
              {
                href: `tel:${profile.social.phone}`,
                icon: Phone,
                label: "Phone",
                value: profile.social.phone,
                color: "green",
              },
              {
                href: whatsappLink,
                icon: MessageCircle,
                label: "WhatsApp",
                value: "Chat on WhatsApp",
                color: "emerald",
                target: "_blank",
              },
            ].map((contact, idx) => (
              <motion.a
                key={idx}
                variants={itemVariants}
                href={contact.href}
                target={contact.target}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group/item"
              >
                <div
                  className={`p-3 bg-${contact.color}-500/10 rounded-lg text-${contact.color}-400 group-hover/item:bg-${contact.color}-500 group-hover/item:text-white transition-all duration-300`}
                >
                  <contact.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    {contact.label}
                  </p>
                  <p className="text-slate-200 font-medium group-hover/item:text-white transition-colors">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* 2. Social Section */}
        <div className="p-6 md:p-8 bg-slate-900/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover/social:opacity-100 transition-opacity"></div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
            Social Profiles
            <span className="h-px flex-1 bg-gradient-to-r from-slate-800 to-transparent"></span>
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10"
          >
            {[
              {
                href: profile.social.linkedin,
                icon: "linkedin",
                label: "LinkedIn",
                color: "blue",
              },
              {
                href: profile.social.github,
                icon: "github",
                label: "GitHub",
                color: "slate",
              },
              {
                href: profile.social.google_play,
                icon: "https://www.innovados.com/wp-content/uploads/google-play-logo-nuevo.png",
                label: "Play Store",
                isImg: true,
                color: "green",
              },
              {
                href: profile.social.google_dev,
                icon: "https://static.vecteezy.com/system/resources/previews/072/678/272/non_2x/google-developers-logo-icon-free-png.png",
                label: "Developers",
                isImg: true,
                isDev: true,
                color: "blue",
              },
            ].map(
              (social, idx) =>
                social.href && (
                  <motion.a
                    key={idx}
                    variants={itemVariants}
                    href={social.href}
                    target="_blank"
                    whileHover={{ y: -5, scale: 1.05 }}
                    className={`flex flex-col items-center justify-center p-4 bg-slate-800/40 rounded-xl hover:bg-${social.color}-900/20 hover:border-${social.color}-500/50 border border-slate-800/50 transition-all group/icon gap-3`}
                  >
                    {social.isImg ? (
                      <div
                        className={`${social.isDev ? "w-8 h-8 background-white rounded-full p-1 overflow-hidden" : "h-8"} flex items-center justify-center`}
                      >
                        <img
                          src={social.icon}
                          alt={social.label}
                          className={`${social.isDev ? "w-full h-full object-contain" : "h-full object-contain"} group-hover/icon:scale-110 transition-transform`}
                        />
                      </div>
                    ) : (
                      <img
                        src={`https://skillicons.dev/icons?i=${social.icon}`}
                        alt={social.label}
                        className="w-8 h-8 group-hover/icon:scale-110 transition-transform"
                      />
                    )}
                    <span className="text-[10px] text-slate-500 group-hover/icon:text-slate-200 uppercase tracking-widest transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ),
            )}
          </motion.div>
        </div>
      </div>
    </Card>
  );
};
