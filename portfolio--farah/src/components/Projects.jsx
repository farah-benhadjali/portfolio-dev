import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projects";

const IconImage = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M8.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M21 15l-4-4-7 7-3-3-3 3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const IconGitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.7.5.7 5.7.7 12.2c0 5.2 3.4 9.6 8.2 11.1.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.5-1.5-1.9-1.5-1.9-1.2-.9.1-.9.1-.9 1.3.1 2 1.4 2 1.4 1.1 2 3 1.4 3.7 1.1.1-.8.5-1.4.9-1.8-2.6-.3-5.4-1.4-5.4-6 0-1.3.5-2.4 1.3-3.3-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.3 1.3a11 11 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.3 0 4.6-2.8 5.7-5.4 6 .5.5 1 1.4 1 2.8v4.1c0 .3.2.7.8.6 4.8-1.5 8.2-5.9 8.2-11.1C23.3 5.7 18.3.5 12 .5Z" />
  </svg>
);

function PhotoGallery({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{
          background: "rgba(2, 6, 23, 0.92)",
          backdropFilter: "blur(12px)",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
          style={{
            background: "rgba(15, 23, 42, 0.95)",
            border: "1px solid rgba(165, 180, 252, 0.15)",
            boxShadow: `0 0 60px ${project.color}20`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* top glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
            }}
          />

          {/* header */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{project.emoji}</span>
              <h3 className="font-grotesk font-bold text-[#E0E7FF] text-lg">
                {project.title}
              </h3>

              <span
                className="text-[11px] font-mono px-2 py-0.5 rounded-md"
                style={{
                  color: project.color,
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}30`,
                }}
              >
                {project.photos?.length || 0} photos
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#A5B4FC] hover:text-white transition-all text-lg"
              style={{
                background: "rgba(165, 180, 252, 0.08)",
                border: "1px solid rgba(165, 180, 252, 0.15)",
              }}
            >
              ✕
            </button>
          </div>

          {/* body */}
          <div className="px-6 pb-4">
            {project.photos && project.photos.length > 0 ? (
              <>
                {/* main image */}
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl overflow-auto mb-4 flex items-center justify-center relative"
                  style={{
                    background: `${project.color}10`,
                    border: `1px solid ${project.color}20`,
                    maxHeight: "80vh",
                  }}
                >
                  <img
                    src={project.photos[activeIndex]}
                    alt={`${project.title} - photo ${activeIndex + 1}`}
                    className="max-w-full max-h-[80vh] object-contain"
                  />

                  {/* navigation buttons */}
                  {project.photos.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setActiveIndex(
                            (i) =>
                              (i - 1 + project.photos.length) %
                              project.photos.length
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-white"
                        style={{
                          background: "rgba(2, 6, 23, 0.7)",
                          border: "1px solid rgba(255,255,255,0.15)",
                        }}
                      >
                        ‹
                      </button>

                      <button
                        onClick={() =>
                          setActiveIndex(
                            (i) => (i + 1) % project.photos.length
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-white"
                        style={{
                          background: "rgba(2, 6, 23, 0.7)",
                          border: "1px solid rgba(255,255,255,0.15)",
                        }}
                      >
                        ›
                      </button>
                    </>
                  )}

                  {/* counter */}
                  <div
                    className="absolute bottom-3 right-3 text-xs font-mono px-2 py-1 rounded-md"
                    style={{
                      background: "rgba(2, 6, 23, 0.75)",
                      color: project.color,
                    }}
                  >
                    {activeIndex + 1} / {project.photos.length}
                  </div>
                </motion.div>

                {/* thumbnails */}
                {project.photos.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {project.photos.map((photo, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className="flex-shrink-0 rounded-lg overflow-hidden transition-all"
                        style={{
                          width: 72,
                          height: 48,
                          border: `2px solid ${
                            i === activeIndex
                              ? project.color
                              : "rgba(165, 180, 252, 0.1)"
                          }`,
                          opacity: i === activeIndex ? 1 : 0.5,
                        }}
                      >
                        <img
                          src={photo}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div
                className="rounded-xl flex flex-col items-center justify-center gap-3 py-16"
                style={{
                  background: `${project.color}08`,
                  border: `1px dashed ${project.color}30`,
                }}
              >
                <span className="text-4xl opacity-30">🖼️</span>
                <p className="text-[#A5B4FC] text-sm">
                  Aucune photo disponible
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
        className="relative rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden group transition-all duration-300"
      >
        {/* Glow background */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
          style={{
            background: `radial-gradient(circle at top, ${project.color}18, transparent 60%)`,
          }}
        />

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
          }}
        />

        {/* HEADER */}
        <div className="relative flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{project.emoji}</span>

            <div>
              <h3 className="text-[#E0E7FF] font-semibold text-lg leading-tight">
                {project.title}
              </h3>

              <p className="text-xs text-[#A5B4FC] mt-1">{project.subtitle}</p>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowGallery(true)}
              className="w-8 h-8 rounded-md bg-white/5 border border-white/10 
               flex items-center justify-center text-[#A5B4FC] 
               hover:text-white hover:border-white/30 transition"
              title="Galerie"
            >
              <IconImage />
            </button>

            {/* GITHUB */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-20 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/30 hover:scale-105 transition cursor-pointer"
              >
                <IconGitHub />
              </a>
            )}
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-[#A5B4FC] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* FEATURES */}
        <ul className="space-y-2 mb-5">
          {project.features.map((f, i) => (
            <li key={i} className="flex gap-2 text-xs text-[#CBD5E1]">
              <span style={{ color: project.color }}>▹</span>
              {f}
            </li>
          ))}
        </ul>

        {/* STACK */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2 py-1 rounded-md border"
              style={{
                color: project.color,
                background: `${project.color}10`,
                borderColor: `${project.color}25`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* FLOAT GLOW DOT */}
        <div
          className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20"
          style={{ background: project.color }}
        />
      </motion.div>

      {showGallery && (
        <PhotoGallery project={project} onClose={() => setShowGallery(false)} />
      )}
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-pad relative bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center">
            <h2 className="section-title text-[#E0E7FF] mx-auto">
              Réalisations
            </h2>
            <p className="text-[#A5B4FC] mt-4 max-w-xl mx-auto text-sm">
              Une sélection de projets qui illustrent mon expertise technique et
              ma créativité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
