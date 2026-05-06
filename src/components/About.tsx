"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Zap, Users, Code2 } from "lucide-react";

const stats = [
  { value: "3+", label: "Yıl Deneyim" },
  { value: "2+", label: "Şirket" },
  { value: "iOS & Android", label: "Platform" },
  { value: "React Native", label: "Uzmanlık" },
];

const values = [
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "Her uygulamayı önce mobil düşünerek, platforma özgü deneyimler göz önünde bulundurarak tasarlıyorum.",
  },
  {
    icon: Zap,
    title: "Yüksek Performans",
    desc: "60fps animasyonlar, optimize render döngüleri ve akıcı kullanıcı deneyimi önceliğim.",
  },
  {
    icon: Code2,
    title: "Temiz Kod",
    desc: "Okunabilir, sürdürülebilir ve ölçeklenebilir kod yazmak her projede temel ilkem.",
  },
  {
    icon: Users,
    title: "Kullanıcı Odaklı",
    desc: "Teknik mükemmelliği kullanıcı ihtiyaçlarıyla birleştirerek gerçek değer yaratan uygulamalar geliştiriyorum.",
  },
];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-blue-500/30" />

      <div className="max-w-6xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Hakkımda
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Kim miyim?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            React Native ekosisteminde uzmanlaşmış, kullanıcı deneyimine tutkuyla bağlı bir mobil geliştirici.
          </p>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.15} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center gradient-border"
            >
              <p className="text-2xl sm:text-3xl font-bold gradient-text-blue mb-1">
                {stat.value}
              </p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </FadeIn>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeIn delay={0.2}>
            <div className="space-y-6 text-slate-400 text-base leading-relaxed">
              <p>
                Yazılım geliştirme yolculuğuma{" "}
                <span className="text-slate-200 font-medium">
                  BeeSystem'de Native Android geliştirici stajyeri
                </span>{" "}
                olarak başladım. Bu deneyim bana mobil uygulama geliştirmenin temellerini ve platform mimarisini öğretti.
              </p>
              <p>
                Şu anda{" "}
                <span className="text-slate-200 font-medium">Hey Teknoloji</span>
                &apos;de Mobile Developer olarak çalışıyorum.{" "}
                <span className="text-blue-400 font-medium">React Native</span>{" "}
                teknolojisini kullanarak iOS ve Android platformlarında çalışan, milyonlarca kullanıcıya ulaşan uygulamalar geliştiriyorum.
              </p>
              <p>
                Cross-platform geliştirmenin güzelliği, hem iOS hem Android için tek bir kod tabanıyla{" "}
                <span className="text-slate-200 font-medium">
                  native deneyim
                </span>{" "}
                sunabilmekte. Performans optimizasyonu, smooth animasyonlar ve platform-spesifik UX pattern&apos;leri konusunda derinlemesine deneyim kazandım.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass-card rounded-2xl p-5 hover:bg-white/5 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
