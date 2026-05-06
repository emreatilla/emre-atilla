"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";
import { siteConfig, whatsappUrl } from "@/lib/config";

const links = [
  { label: "Hakkımda", href: "#about" },
  { label: "Yetenekler", href: "#skills" },
  { label: "Deneyim", href: "#experience" },
  { label: "Projeler", href: "#projects" },
  { label: "İletişim", href: "#contact" },
];

const socials = [
  { icon: WhatsappIcon, href: whatsappUrl, label: "WhatsApp" },
  { icon: GithubIcon, href: siteConfig.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.contact.email}`, label: "Email" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#0d1120]/40">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="text-xl font-semibold tracking-tight inline-block"
            >
              <span className="text-white">emre</span>
              <span className="gradient-text-blue">atilla</span>
              <span className="text-blue-500">.</span>
            </a>
            <p className="text-slate-500 text-sm mt-1">Mobile Developer · React Native</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="p-2 text-slate-600 hover:text-white hover:bg-white/8 rounded-lg transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
          <p>© {new Date().getFullYear()} Emre Atilla. Tüm hakları saklıdır.</p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-1.5"
          >
            Next.js ile yapıldı <Heart size={12} className="text-red-500 fill-red-500" />
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
