import { Card } from "../Card";
import profile from "../../config/profile.json";
import {
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

const contactItems = (whatsappLink) => [
  {
    href: `mailto:${profile.social.email}`,
    icon: Mail,
    label: "Email",
    value: profile.social.email,
  },
  {
    href: `tel:${profile.social.phone}`,
    icon: Phone,
    label: "Phone",
    value: profile.social.phone,
  },
  {
    href: whatsappLink,
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    target: "_blank",
  },
];

const socialItems = [
  {
    href: profile.social.github,
    icon: "https://skillicons.dev/icons?i=github",
    label: "GitHub",
  },
  {
    href: profile.social.linkedin,
    icon: "https://skillicons.dev/icons?i=linkedin",
    label: "LinkedIn",
  },
  {
    href: profile.social.twitter,
    icon: "/x-logo.svg",
    label: "X",
  },
].filter((item) => item.href);

export const SocialCard = () => {
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
      <div className="theme-divider grid divide-y md:grid-cols-2 md:divide-x md:divide-y-0">
        <div className="p-6 md:p-8 space-y-6">
          <h3 className="theme-title mb-4 flex items-center gap-3 text-xl font-bold">
            Contact Details
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--divider)] to-transparent"></span>
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactItems(whatsappLink).map((contact, idx) => (
              <motion.a
                key={idx}
                variants={itemVariants}
                href={contact.href}
                target={contact.target}
                rel={contact.target ? "noreferrer" : undefined}
                whileHover={{ x: 5 }}
                className="group/item flex items-center gap-4"
              >
                <div className="theme-icon-surface flex h-11 w-11 items-center justify-center rounded-xl">
                  <contact.icon size={20} className="theme-accent" />
                </div>
                <div>
                  <p className="theme-muted text-xs uppercase tracking-wider">
                    {contact.label}
                  </p>
                  <p className="theme-title font-medium transition-colors group-hover/item:text-[var(--accent)]">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="relative overflow-hidden p-4 md:p-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] to-[rgba(124,58,237,0.08)] opacity-0 transition-opacity group-hover/social:opacity-100"></div>
          <h3 className="theme-title relative z-10 mb-4 flex items-center gap-3 text-lg font-bold md:text-xl">
            Social Profiles
            <span className="h-px flex-1 bg-gradient-to-r from-[var(--divider)] to-transparent"></span>
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3"
          >
            {socialItems.map((social, idx) => (
              <motion.a
                key={idx}
                variants={itemVariants}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                className="theme-surface theme-surface-hover group/icon flex min-h-[104px] flex-col items-center justify-center gap-2.5 rounded-2xl p-4 text-center transition-all"
              >
                <div className="theme-icon-surface flex h-11 w-11 items-center justify-center rounded-xl">
                  <img
                    src={social.icon}
                    alt={social.label}
                    className="h-6 w-6 transition-transform duration-300 group-hover/icon:scale-110"
                  />
                </div>

                <div className="min-w-0">
                  <p className="theme-title text-xs font-semibold uppercase tracking-[0.14em]">
                    {social.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </Card>
  );
};
