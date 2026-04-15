import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { experienceData } from "../data/experience";
import { projectsData } from "../data/projects";
import { skillsData } from "../data/skills";

function CountUp({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic

      setCount(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// 🎨 Couleur dynamique
const getColor = (value) => {
  if (value >= 20) return "#22D3EE";
  if (value >= 10) return "#6366F1";
  if (value >= 5) return "#A78BFA";
  return "#94A3B8";
};

// 📊 Stats dynamiques
const stats = [
  {
    target: projectsData.length,
    suffix: "+",
    label: "Projets",
    detail: "Applications web & mobile",
  },
  {
    target: new Set(projectsData.flatMap((p) => p.stack)).size,
    suffix: "+",
    label: "Technologies",
    detail: "Stack moderne utilisée",
  },
  {
    target: experienceData.length,
    suffix: "+",
    label: "Expériences",
    detail: "Stages & missions",
  },
  {
    target: experienceData.length + projectsData.length,
    suffix: "+",
    label: "Open Source",
    detail: "Repos GitHub publics",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-20 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="flex flex-col items-center gap-10">
            {/* Avatar */}
            <div className="relative">
              <div className="w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/photo.png"
                  alt="Farah"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -inset-6 bg-[#6366F1]/20 blur-3xl rounded-2xl -z-10" />
            </div>

            {/* 🔥 STATS PREMIUM */}
            {/* 🔥 STATS ULTRA PREMIUM */}
            <div
              ref={ref}
              className="grid grid-cols-2 sm:grid-cols-4 gap-5 w-full"
            >
              {stats.map((stat, i) => {
                const color = getColor(stat.target);

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group relative"
                  >
                    <div
                      className="
            relative p-5 rounded-2xl
            bg-white/5 border border-white/10
            backdrop-blur-xl
            overflow-hidden
            transition-all duration-300
            hover:border-white/20
          "
                    >
                      {/* 🌈 Glow animé */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 0%, ${color}25, transparent 70%)`,
                        }}
                      />

                      {/* ✨ Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                        <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent" />
                      </div>

                      {/* 🔢 VALUE */}
                      <h3
                        className="text-3xl font-bold relative z-10"
                        style={{
                          color,
                          textShadow: `0 0 25px ${color}60`,
                        }}
                      >
                        {inView && (
                          <CountUp target={stat.target} suffix={stat.suffix} />
                        )}
                      </h3>

                      {/* 🏷 LABEL */}
                      <p className="text-xs text-[#A5B4FC] mt-1 relative z-10">
                        {stat.label}
                      </p>

                      {/* 📊 PROGRESS BAR */}
                      <div className="mt-3 h-[3px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={
                            inView
                              ? { width: `${Math.min(stat.target * 10, 100)}%` }
                              : {}
                          }
                          transition={{ duration: 1.5, delay: i * 0.2 }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${color}, transparent)`,
                          }}
                        />
                      </div>

                      {/* 💡 DETAIL (hover) */}
                      <div
                        className="
            absolute bottom-2 left-1/2 -translate-x-1/2
            text-[10px] text-white/60
            opacity-0 group-hover:opacity-100
            transition duration-300
          "
                      >
                        {stat.detail}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-8 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-center text-[#E0E7FF]">
              Qui suis-je ?
            </h2>

            <p className="text-[#A5B4FC] text-lg leading-relaxed text-center">
              Consultante technique spécialisée en{" "}
              <span className="text-[#22D3EE] font-medium">
                Microsoft Dynamics 365
              </span>{" "}
              et{" "}
              <span className="text-[#6366F1] font-medium">Power Platform</span>
              .
            </p>

            <p className="text-[#A5B4FC]/80 text-sm leading-relaxed text-center">
              Développement d’applications web modernes, intégration CRM et
              architectures REST sécurisées avec JavaScript, Node.js et Angular.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Dynamics 365",
                "Power Platform",
                "JavaScript",
                "Node.js",
                "Angular",
                "REST APIs",
              ].map((tag) => (
                <span
                  key={tag}
                  className="
                    px-4 py-1.5 text-xs rounded-full
                    bg-white/5 border border-white/10
                    text-[#A5B4FC]
                    hover:bg-[#6366F1]/10 hover:border-[#6366F1]/40
                    hover:text-white transition
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CONTACT */}
            <div className="flex flex-col items-center gap-2 text-sm">
              <a
                href="mailto:farah.bhadjali@gmail.com"
                className="text-[#22D3EE] hover:underline"
              >
                📧 farah.bhadjali@gmail.com
              </a>

              <a
                href="tel:+21627664099"
                className="text-[#A5B4FC] hover:text-white"
              >
                📞 +216 27 664 099
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
