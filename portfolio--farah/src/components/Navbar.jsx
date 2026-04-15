import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const navLinks = [
  { to: 'about', label: 'À Propos' },
  { to: 'skills', label: 'Compétences' },
  { to: 'experience', label: 'Expérience' },
  { to: 'projects', label: 'Projets' },
  { to: 'education', label: 'Formation' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020617]/90 backdrop-blur-xl border-b border-[#6366F1]/30 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link to="hero" smooth duration={500} className="flex items-center gap-3">
            <motion.div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#020617] font-bold"
              style={{ background: 'linear-gradient(135deg, #6366F1, #22D3EE)' }}
            >
              FB
            </motion.div>

            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-[#E0E7FF] text-sm">
                Farah <span className="text-[#22D3EE]">Ben Hadj Ali</span>
              </span>
              <span className="text-[10px] text-[#A5B4FC]">FULL STACK · MICROSOFT DYNAMICS</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-64}
                className="text-[#A5B4FC] hover:text-[#22D3EE] transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="contact" smooth duration={500}>
              <button className="bg-[#6366F1] text-[#020617] px-4 py-2 rounded hover:opacity-90 transition">
                Me contacter
              </button>
            </Link>
          </div>

          <button
            className="md:hidden text-[#A5B4FC]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#020617]/95 backdrop-blur border-b border-[#6366F1]/30"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  className="text-[#A5B4FC] hover:text-[#22D3EE] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}