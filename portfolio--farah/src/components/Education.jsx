import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const educationData = [
  {
    degree: "Diplôme national d’ingénieur en informatique ",
    institution: "International Multidisciplinary School Sousse (EPI)",
    period: "2022 – 2025",
    field: "Informatique",
    emoji: "🎓",
    color: "#7C3AED",
    highlights: [
      "Architecture logicielle moderne",
      "Développement full-stack",
      "Projets industriels & académiques"
    ]
  },
  {
    degree: "Licence Appliquée en Technologie de l’Informatique",
    institution: "Institut Supérieur des Études Technologiques Kélibia",
    period: "2019 – 2022",
    field: "Développement systeme d'information (DSI)",
    emoji: "📘",
    color: "#06B6D4",
    highlights: [
      "Bases en développement logiciel",
      "Réseaux & systèmes",
      "Projets pratiques"
    ]
  }
];

const certificationsData = [
  {
    title: "AWS Academy – Microservices & CI/CD",
    year: "2024",
    emoji: "☁️"
  },
  {
    title: "TOEIC English Certification",
    year: "2025",
    emoji: "🗣️"
  }
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="formation" className="py-28 bg-[#020617] text-white">
      <div className="max-w-5xl mx-auto px-6">

       {/* HEADER */}
<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 10 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  className="text-center mb-14"
>
  <h2 className="text-5xl font-semibold text-[#E0E7FF] tracking-tight">
    Parcours Académique
  </h2>

  <p className="text-sm text-[#94A3B8] mt-3">
    Formation universitaire et certifications professionnelles
  </p>
</motion.div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 pl-10 space-y-10">

          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >

              {/* DOT */}
              <div
                className="absolute -left-[38px] top-2 w-4 h-4 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${edu.color}, #1f2937)`
                }}
              />

              {/* CARD */}
              <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/[0.07] transition">

                {/* TOP */}
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-medium">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-[#94A3B8]">
                      {edu.institution}
                    </p>
                  </div>

                  <span className="text-xs text-[#94A3B8]">
                    {edu.period}
                  </span>
                </div>

                {/* TAG */}
                <div className="mt-2 text-xs text-[#38BDF8]">
                  {edu.field}
                </div>

                {/* HIGHLIGHTS */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.highlights.map((h, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#CBD5E1]"
                    >
                      {h}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* CERTIFICATIONS STRIP */}
        <div className="mt-14">
          <h3 className="text-sm text-[#94A3B8] mb-4">
            Certifications
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {certificationsData.map((cert, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <span>{cert.emoji}</span>
                  <span className="text-sm">{cert.title}</span>
                </div>

                <span className="text-xs text-[#94A3B8]">
                  {cert.year}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}