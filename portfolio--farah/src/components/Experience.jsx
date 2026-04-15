import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experienceData } from "../data/experience";

/* ================= ICONS (no libs) ================= */
const IconGitHub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.2 9.3 7.7 10.8.6.1.8-.2.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2 .8 2 1.6.3 2.7-.8 3.3-1.5-.1-.7.4-1.6.8-2-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.2 1.9-.3 2.8-.3s1.9.1 2.8.3c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.5-2.6 5.5-5.1 5.8.4.4.9 1.2.9 2.4v3.6c0 .4.2.7.8.6C20.3 21.3 23.5 17 23.5 12 23.5 5.7 18.3.5 12 .5z" />
  </svg>
);
const IconImage = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 17l6-6 4 4 8-8" />
  </svg>
);

const typeColors = {
  "CDI / Contrat": "#22D3EE",
  "Stage PFE": "#6366F1",
  "Stage d'été": "#A5B4FC",
};

/* ================= GALLERY ================= */
function PhotoGallery({ exp, onClose }) {
  const [index, setIndex] = useState(0);

  const photos = exp?.photos ?? [];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10 bg-[#0B1220]"
        >
          {/* HEADER */}
          <div className="flex justify-between items-center px-5 py-4 border-b border-white/10">
            <h3 className="text-[#E0E7FF] font-semibold">{exp?.title}</h3>

            <button onClick={onClose} className="text-white hover:opacity-70">
              ✕
            </button>
          </div>

          {/* IMAGE */}
          <div
            className="relative bg-black flex items-center justify-center"
            style={{ maxHeight: "80vh" }}
          >
            {photos?.length > 0 ? (
              <img
                src={photos[index] || photos[0]}
                alt="experience"
                className="max-w-full max-h-[80vh] object-contain"
              />
            ) : (
              <div className="w-full h-[50vh] flex items-center justify-center text-[#A5B4FC] text-sm">
                Aucune image
              </div>
            )}

            {/* NAV */}
            {photos?.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setIndex((i) => (i - 1 + photos.length) % photos.length)
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
                >
                  ‹
                </button>

                <button
                  onClick={() =>
                    setIndex((i) => (i + 1) % photos.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* COUNTER */}
          {photos?.length > 0 && (
            <div className="text-center text-xs text-[#A5B4FC] py-2">
              {index + 1} / {photos.length}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [activeExp, setActiveExp] = useState(null);

  return (
    <section id="experience" className="py-24 bg-[#020617]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#E0E7FF] tracking-tight">
            Parcours Professionnel
          </h2>
          <p className="text-[#A5B4FC] mt-3 text-sm">
            Expériences full-stack & CRM Microsoft
          </p>
        </motion.div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">
          {/* LINE */}
          <div
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-[2px]
            bg-gradient-to-b from-[#6366F1]/40 via-[#22D3EE]/20 to-transparent"
          />

          <div className="flex flex-col gap-14">
            {experienceData?.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                className="relative pl-16 sm:pl-24"
              >
                {/* DOT */}
                <div
                  className="absolute left-[9px] sm:left-[25px] top-6 w-3.5 h-3.5 rounded-full"
                  style={{
                    background: typeColors[exp.type] || "#A5B4FC",
                    boxShadow: `0 0 18px ${typeColors[exp.type] || "#A5B4FC"}80`,
                  }}
                />

                {/* CARD */}
                <div
                  className="
                  relative rounded-2xl p-6 sm:p-7
                  bg-[#0B1220]/80
                  border border-white/10
                  backdrop-blur-xl
                  hover:border-white/20
                  transition
                "
                >
                  {/* TOP */}
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#f072d5]">
                        {exp.role}
                      </h3>
                      <p className="text-[#22D3EE] text-sm">
                        {exp.company}
                        <span
                          className="text-[11px] px-3 py-1 rounded-full border font-medium"
                          style={{
                            color: typeColors[exp.type] || "#FBBF24",
                            background: `${typeColors[exp.type] || "#FBBF24"}10`,
                            borderColor: `${typeColors[exp.type] || "#FBBF24"}30`,
                          }}
                        >
                          {exp.type}
                        </span>
                      </p>
                      <span className="text-xs text-[#A5B4FC] font-mono">
                        {exp.period}
                      </span>
                    </div>

                    {/* BADGE + ICONS */}
                    <div className="flex justify-between items-center mb-4">
                      {/* ACTION ICONS */}
                      <div className="flex items-center gap-2">
                        {/* IMAGE OPEN GALLERY */}
                        <button
                          onClick={() => setActiveExp(exp)}
                          className="w-7 h-7 flex items-center justify-center rounded bg-white/5 border border-white/10"
                        >
                          <IconImage />
                        </button>

                        <a
                          href={exp.github || "#"}
                          target="_blank"
                          className="w-7 h-7 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:text-white text-[#A5B4FC]"
                        >
                          <IconGitHub />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-[#A5B4FC] mb-5 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* HIGHLIGHTS (SAFE MAP FIXED) */}
                  <div className="space-y-2 mb-5">
                    {(exp.highlights ?? []).map((h, j) => (
                      <div
                        key={j}
                        className="flex gap-2 text-sm text-[#A5B4FC]"
                      >
                        <span className="text-[#f072d5]">▸</span>
                        {h}
                      </div>
                    ))}
                  </div>

                  {/* STACK */}
                  {/* STACK */}
        <div className="flex flex-wrap gap-2">
          {exp.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2 py-1 rounded-md border"
              style={{
                color: exp.color,
                background: `${exp.color}10`,
                borderColor: `${exp.color}25`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* MODAL GALLERY */}
        {activeExp && (
          <PhotoGallery exp={activeExp} onClose={() => setActiveExp(null)} />
        )}
      </div>
    </section>
  );
}
