"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Mobile Developer",
    company: "Hey Teknoloji",
    type: "Tam zamanlı",
    period: "Tem 2023 — Günümüz",
    duration: "2 yıl 11 ay+",
    location: "İstanbul, Türkiye",
    current: true,
    color: "blue",
    logo: "HEY",
    description:
      "React Native kullanarak iOS ve Android platformlarında kullanıcıya yönelik mobil uygulamalar geliştiriyorum. Performans optimizasyonu, animasyon geliştirme ve uygulama mimarisi konularında aktif rol alıyorum.",
    highlights: [
      "React Native ile cross-platform mobil uygulama geliştirme",
      "Performans optimizasyonu ve animasyon implementasyonu (Reanimated)",
      "CI/CD pipeline yönetimi ve otomatik dağıtım süreçleri",
      "Code review süreçlerine aktif katılım ve junior geliştirici mentörlüğü",
      "TypeScript ile type-safe uygulama mimarisi tasarımı",
    ],
    tech: ["React Native", "TypeScript", "Redux", "Firebase", "Expo", "Reanimated"],
  },
  {
    role: "Native Android Development Intern",
    company: "BeeSystem",
    type: "Staj",
    period: "Tem 2022 — Eyl 2022",
    duration: "3 ay",
    location: "Türkiye",
    current: false,
    color: "amber",
    logo: "BEE",
    description:
      "Android uygulama geliştirme stajı kapsamında native Android teknolojileriyle çalıştım. Java ve Kotlin kullanarak uygulama bileşenleri geliştirdim ve mevcut projelere katkıda bulundum.",
    highlights: [
      "Native Android uygulama geliştirme (Java / Kotlin)",
      "MVVM mimarisi ve Android Jetpack bileşenleri",
      "RESTful API entegrasyonu ve Retrofit kullanımı",
      "Android lifecycle ve fragment yönetimi",
    ],
    tech: ["Java", "Kotlin", "Android SDK", "Retrofit", "MVVM"],
  },
];

const colorMap: Record<string, { border: string; badge: string; dot: string; tag: string }> = {
  blue: {
    border: "border-blue-500/30",
    badge: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    dot: "bg-blue-500",
    tag: "bg-blue-500/10 text-blue-300",
  },
  amber: {
    border: "border-amber-500/20",
    badge: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    dot: "bg-amber-500",
    tag: "bg-amber-500/10 text-amber-300",
  },
};

export default function Experience() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Kariyer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Deneyimlerim
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Profesyonel kariyer yolculuğum ve edindiğim deneyimler.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-white/5 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const colors = colorMap[exp.color];
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative sm:pl-0 ${i % 2 === 0 ? "sm:pr-[calc(50%+2rem)]" : "sm:pl-[calc(50%+2rem)]"}`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute hidden sm:flex left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full ${colors.dot} ring-4 ring-[#080b14] z-10`}
                  >
                    {exp.current && (
                      <span
                        className={`absolute inset-0 rounded-full ${colors.dot} animate-ping opacity-50`}
                      />
                    )}
                  </div>

                  <div
                    className={`glass-card rounded-2xl p-6 sm:p-7 border ${colors.border} hover:bg-white/[0.04] transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 ${colors.badge}`}
                      >
                        {exp.logo}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <div>
                            <h3 className="text-white font-bold text-lg leading-tight">
                              {exp.role}
                            </h3>
                            <p className="text-slate-300 font-medium mt-0.5">
                              {exp.company}
                            </p>
                          </div>
                          {exp.current && (
                            <span className="flex-shrink-0 px-2.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                              Devam ediyor
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-4 text-slate-500 text-xs mt-2">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {exp.period} · {exp.duration}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={12} />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase size={12} />
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 text-xs font-medium rounded-lg ${colors.tag}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
