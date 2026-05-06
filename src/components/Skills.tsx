"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Mobile",
    color: "blue",
    skills: [
      { name: "React Native", level: 95 },
      { name: "Expo", level: 90 },
      { name: "Native Android (Java/Kotlin)", level: 70 },
      { name: "React Navigation", level: 92 },
    ],
  },
  {
    category: "Dil & Framework",
    color: "violet",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES2022+)", level: 95 },
      { name: "React", level: 88 },
      { name: "Node.js (temel)", level: 60 },
    ],
  },
  {
    category: "State & Data",
    color: "cyan",
    skills: [
      { name: "Redux / Redux Toolkit", level: 88 },
      { name: "Zustand", level: 85 },
      { name: "React Query", level: 82 },
      { name: "AsyncStorage / MMKV", level: 90 },
    ],
  },
  {
    category: "Araçlar & Platform",
    color: "emerald",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Firebase", level: 78 },
      { name: "Fastlane / CI-CD", level: 70 },
      { name: "Figma", level: 65 },
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: "from-blue-500 to-blue-400",
  violet: "from-violet-500 to-violet-400",
  cyan: "from-cyan-500 to-cyan-400",
  emerald: "from-emerald-500 to-emerald-400",
};

const bgColorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  violet: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-500 text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${colorMap[color]}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 relative bg-[#0d1120]/50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Teknolojiler
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Yeteneklerim
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            React Native ekosisteminden araçlar, diller ve platformlar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:bg-white/[0.04] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-lg border ${bgColorMap[group.color]}`}
                >
                  {group.category}
                </span>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          {[
            "React Native",
            "TypeScript",
            "Expo",
            "Redux Toolkit",
            "React Query",
            "Firebase",
            "Reanimated",
            "Gesture Handler",
            "Axios",
            "React Navigation",
            "Zustand",
            "MMKV",
            "Fastlane",
            "Android Studio",
            "Xcode",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 text-xs font-medium text-slate-400 glass-card rounded-xl hover:text-white hover:border-white/20 transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
