"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";
import { siteConfig, whatsappUrl } from "@/lib/config";

const socialLinks = [
  {
    icon: GithubIcon,
    href: siteConfig.social.github,
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: `mailto:${siteConfig.contact.email}`,
    label: "Email",
  },
];

const techBadges = ["React Native", "TypeScript", "iOS", "Android", "Expo"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(59,130,246,0.5) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Hey Teknoloji'de Mobile Developer
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-white">Merhaba, ben</span>
              <br />
              <span className="gradient-text">Emre Atilla</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              React Native ile iOS ve Android platformlarında{" "}
              <span className="text-slate-200 font-medium">
                kullanıcı odaklı, yüksek performanslı
              </span>{" "}
              mobil uygulamalar geliştiriyorum. +3 yıl profesyonel deneyim.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10"
            >
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 text-xs font-medium text-slate-400 bg-white/5 border border-white/10 rounded-lg"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95"
              >
                <WhatsappIcon size={18} />
                WhatsApp&apos;tan Yaz
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3 text-slate-300 hover:text-white font-semibold rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-200 active:scale-95"
              >
                Projelerimi Gör
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4 mt-10 justify-center lg:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 text-slate-500 hover:text-white hover:bg-white/8 rounded-lg transition-all duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
              {/* Gradient ring */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 p-[2px]">
                <div className="relative w-full h-full rounded-[calc(2rem-2px)] bg-[#080b14] overflow-hidden">
                  <Image
                    src="/personal-image.png"
                    alt="Emre Atilla"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
              </div>

              {/* Floating card - Experience */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-2 sm:-right-4 lg:-right-10 top-6 rounded-2xl px-5 py-3.5 glow-blue whitespace-nowrap z-10 bg-[#0a0e1c]/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/50"
              >
                <p className="text-[11px] uppercase tracking-wider text-slate-300 mb-0.5 font-medium">Deneyim</p>
                <p className="text-lg font-bold text-white leading-tight">3+ Yıl</p>
                <p className="text-xs text-blue-300 mt-0.5 font-medium">React Native</p>
              </motion.div>

              {/* Floating card - Projects */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-2 sm:-left-4 lg:-left-10 bottom-10 rounded-2xl px-5 py-3.5 glow-violet whitespace-nowrap z-10 bg-[#0a0e1c]/85 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/50"
              >
                <p className="text-[11px] uppercase tracking-wider text-slate-300 mb-0.5 font-medium">Platform</p>
                <p className="text-lg font-bold text-white leading-tight">iOS &amp; Android</p>
                <p className="text-xs text-violet-300 mt-0.5 font-medium">Cross-platform</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors cursor-pointer group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Keşfet
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ArrowDown size={18} className="group-hover:text-blue-400 transition-colors" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
