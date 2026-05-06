"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Smartphone, Lock } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "Hey Mobile App",
    category: "Mobile Application",
    description:
      "Hey Teknoloji bünyesinde React Native ile geliştirilen, iOS ve Android platformlarında yayında olan kurumsal mobil uygulama. Performans optimizasyonu, anlık bildirimler ve gerçek zamanlı veri senkronizasyonu gibi gelişmiş özellikler içeriyor.",
    tech: ["React Native", "TypeScript", "Redux Toolkit", "Firebase", "Reanimated"],
    status: "Canlıda",
    private: true,
    gradient: "from-blue-600/20 to-cyan-600/20",
    border: "border-blue-500/20",
    badge: "bg-blue-500/10 text-blue-400",
    icon: "📱",
  },
  {
    title: "Cross-Platform UI Kit",
    category: "UI Library",
    description:
      "React Native projeleri için geliştirilen yeniden kullanılabilir bileşen kütüphanesi. Tema desteği, dark mode, animasyonlu bileşenler ve platform-spesifik stillerle tam özelleştirilebilir bir tasarım sistemi.",
    tech: ["React Native", "TypeScript", "Reanimated", "Storybook", "Expo"],
    status: "Geliştiriliyor",
    private: false,
    gradient: "from-violet-600/20 to-purple-600/20",
    border: "border-violet-500/20",
    badge: "bg-violet-500/10 text-violet-400",
    icon: "🎨",
  },
  {
    title: "BeeSystem Android",
    category: "Android Application",
    description:
      "BeeSystem stajı kapsamında native Android (Java/Kotlin) ile geliştirilen kurumsal uygulama modülleri. MVVM mimarisi, Room database ve Retrofit ile REST API entegrasyonu içeriyor.",
    tech: ["Java", "Kotlin", "Android SDK", "MVVM", "Room", "Retrofit"],
    status: "Tamamlandı",
    private: true,
    gradient: "from-amber-600/20 to-orange-600/20",
    border: "border-amber-500/20",
    badge: "bg-amber-500/10 text-amber-400",
    icon: "🤖",
  },
  {
    title: "RN Performance Monitor",
    category: "Developer Tool",
    description:
      "React Native uygulamaları için geliştirilen performans izleme aracı. FPS takibi, JS thread usage, bellek kullanımı ve render döngüsü analizi gibi özellikleri tek bir dashboard'da sunar.",
    tech: ["React Native", "TypeScript", "Hermes", "Flipper", "Metro"],
    status: "Geliştiriliyor",
    private: false,
    gradient: "from-emerald-600/20 to-teal-600/20",
    border: "border-emerald-500/20",
    badge: "bg-emerald-500/10 text-emerald-400",
    icon: "⚡",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 relative bg-[#0d1120]/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Projelerim
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Geliştirdiğim uygulamalar ve ürettiğim çözümlerden seçmeler.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative glass-card rounded-2xl overflow-hidden border ${project.border} group hover:bg-white/[0.05] transition-all duration-300`}
            >
              {/* Gradient top */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient.replace("/20", "")}`}
                style={{ opacity: 0.6 }}
              />

              <div
                className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${project.gradient} opacity-50`}
              />

              <div className="relative p-6 sm:p-7">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.icon}</span>
                    <div>
                      <span
                        className={`text-xs font-medium px-2.5 py-1 rounded-lg ${project.badge}`}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.private ? (
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Lock size={12} />
                        Gizli
                      </span>
                    ) : (
                      <a
                        href="#"
                        className="p-2 text-slate-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="GitHub"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    <button className="p-2 text-slate-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

                <h3 className="text-white font-bold text-xl mt-2 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-3 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium text-slate-400 bg-white/5 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <Smartphone size={13} className="text-slate-600" />
                  <span
                    className={`text-xs font-medium ${
                      project.status === "Canlıda"
                        ? "text-emerald-400"
                        : project.status === "Geliştiriliyor"
                        ? "text-blue-400"
                        : "text-slate-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            Daha fazla proje için{" "}
            <a
              href="https://github.com/emreatilla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              GitHub profilimi
            </a>{" "}
            ziyaret edebilirsiniz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
