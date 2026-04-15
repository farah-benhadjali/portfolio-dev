import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { skillsData } from "../data/skills";

function SkillCard({ skill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.06 }}
      className="
        relative p-5 rounded-2xl
        bg-[#0B1220]/80
        border border-white/10
        backdrop-blur-xl
        overflow-hidden group
        flex flex-col items-center justify-center text-center
        min-h-[160px]
      "
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}25, transparent 70%)`
        }}
      />

      {/* ICON CENTERED */}
      <div className="flex items-center justify-center w-full mb-3">
        <Icon
          icon={skill.icon}
          width={44}
          height={44}
          className="relative z-10 transition-transform group-hover:scale-110"
          style={{ color: skill.color }}
        />
      </div>

      {/* NAME */}
      <p className="text-[#E0E7FF] text-sm font-medium z-10">
        {skill.name}
      </p>

      {/* PROGRESS */}
      <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, #22D3EE)`
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("langages");
  const [search, setSearch] = useState("");

  const activeCategory = skillsData.find(c => c.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-[#020617]">

      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#E0E7FF]">
            Stack Technique
          </h2>

          <input
            type="text"
            placeholder="Rechercher une compétence..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              mt-6 w-full max-w-md px-4 py-2
              rounded-lg bg-white/5
              border border-white/10
              text-[#E0E7FF]
              outline-none
            "
          />
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillsData.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`
                px-4 py-2 rounded-lg text-sm transition
                ${activeTab === cat.id
                  ? "bg-[#6366F1] text-black"
                  : "bg-white/5 text-[#A5B4FC] hover:text-white"
                }
              `}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="
              grid grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              gap-4
            "
          >
            {activeCategory?.skills
              .filter(skill =>
                skill.name.toLowerCase().includes(search.toLowerCase())
              )
              .map(skill => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}