import { motion } from "framer-motion";
import { Link } from "react-scroll";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366F1]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22D3EE]/20 rounded-full blur-3xl" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 max-w-5xl"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10"
        >
          <span className="w-2 h-2 bg-[#22D3EE] rounded-full animate-pulse" />
          <span className="text-sm text-[#A5B4FC]">
            Disponible pour missions freelance/CDI
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          transition={{ duration: 0.8 }}
          className="font-bold text-[#E0E7FF] mb-4"
          style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
        >
          <span className="bg-gradient-to-r from-[#6366F1] via-[#A78BFA] to-[#22D3EE] bg-clip-text text-transparent">
            BEN HADJ ALI
          </span>{" "}
          FARAH
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[#22D3EE] text-xl md:text-2xl mb-6"
        >
          Ingénieure Full Stack JS
          <br />& Microsoft Dynamics 365
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          transition={{ duration: 0.8 }}
          className="text-[#A5B4FC] max-w-2xl mx-auto mb-10"
        >
          Ingénieure en informatique spécialisée en développement Full Stack
          JavaScript (Angular, Node.js, React.js) et Microsoft Dynamics 365 /
          Power Platform. 3 expériences pratiques en conception d’applications
          web, intégration d’APIs RESTful, gestion de bases de données SQL/NoSQL
          et déploiement CI/CD. Pratique des méthodologies Agile/Scrum.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link to="projects" smooth duration={500} offset={-64}>
            <button className="px-6 py-3 rounded-lg font-semibold bg-[#6366F1] text-[#020617] hover:scale-105 transition">
              🚀 Voir mes projets
            </button>
          </Link>

          <a
            href="/cv-farahbenhadjali.pdf"
            download
            className="px-6 py-3 rounded-lg border border-[#6366F1] text-[#E0E7FF] hover:bg-[#6366F1]/20 transition"
          >
            📄 Télécharger CV
          </a>

          <Link to="contact" smooth duration={500} offset={-64}>
            <button className="px-6 py-3 rounded-lg border border-[#22D3EE] text-[#22D3EE] hover:scale-105 transition">
              ✉️ Me contacter
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
