"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";
import { siteConfig, whatsappUrl } from "@/lib/config";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    color: "blue",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: siteConfig.social.github.replace("https://", ""),
    href: siteConfig.social.github,
    color: "slate",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: siteConfig.social.linkedin.replace("https://", ""),
    href: siteConfig.social.linkedin,
    color: "blue",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20",
  slate: "bg-white/8 text-slate-300 group-hover:bg-white/15",
};

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            İletişim
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Selamlaşalım
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Bir proje fikriniz mi var, iş birliği mi istiyorsunuz ya da sadece merhaba mı demek istiyorsunuz? En hızlı yanıt için WhatsApp üzerinden ulaşın.
          </p>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative max-w-2xl mx-auto mb-10"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/40 via-green-500/40 to-emerald-500/40 rounded-3xl blur-xl opacity-60 animate-pulse-glow" />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block bg-gradient-to-br from-[#0d1f1a] to-[#0a1410] border border-emerald-500/30 rounded-3xl p-7 sm:p-8 hover:border-emerald-500/60 transition-all duration-300 group"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
              <div className="w-16 h-16 sm:w-14 sm:h-14 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <WhatsappIcon size={32} className="text-white" />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                    Genellikle birkaç saat içinde yanıtlıyorum
                  </span>
                </div>
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-1.5">
                  WhatsApp&apos;tan Mesaj Gönder
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Sohbeti hemen başlatmak için en hızlı ve doğrudan yol.
                </p>
              </div>

              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300">
                <ArrowUpRight
                  size={20}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Other contacts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-6"
        >
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            ya da diğer kanallardan
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {links.map(({ icon: Icon, label, value, href, color }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
              className="glass-card rounded-2xl p-5 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300 ${colorMap[color]}`}
              >
                <Icon size={20} />
              </div>
              <p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">
                {label}
              </p>
              <p className="text-white font-medium text-sm break-all">
                {value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-2 mt-12 text-slate-500 text-sm"
        >
          <MapPin size={14} />
          <span>{siteConfig.location}</span>
        </motion.div>
      </div>
    </section>
  );
}
