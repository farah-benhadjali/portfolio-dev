import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'


import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

/* ================= BACK TO TOP ================= */
function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center text-[#0A0A0F] font-bold"
          style={{
            background: 'linear-gradient(135deg, #00F5FF, #7C3AED)',
            boxShadow: '0 0 20px rgba(0,245,255,0.4)',
          }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ================= LOADING ================= */
function LoadingScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2000)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: '#020617' }}
    >
      <div className="flex flex-col items-center gap-6">

        {/* Logo */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-[#020617] font-bold font-mono text-2xl"
          style={{
            background: 'linear-gradient(135deg, #22D3EE, #6366F1)',
            boxShadow: '0 0 25px rgba(34,211,238,0.25)',
          }}
        >
          FB
        </motion.div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            style={{
              background: 'linear-gradient(90deg, #22D3EE, #6366F1)',
              boxShadow: '0 0 10px rgba(34,211,238,0.4)',
            }}
          />
        </div>

        {/* Text */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="font-mono text-xs text-[#A5B4FC] tracking-widest"
        >
          BIENVENU ...
        </motion.p>

      </div>
    </motion.div>
  )
}

/* ================= HOME PAGE ================= */
function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}

/* ================= APP ================= */
export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#0A0A0F]">

        {/* Background effects */}
        <div className="ascii-grid" />
        <div className="scan-lines" />
        <div className="scan-line-moving" />
        <div className="orb-cyan" />
        <div className="orb-violet" />

        {/* Loading */}
        <AnimatePresence>
          {loading && <LoadingScreen onDone={() => setLoading(false)} />}
        </AnimatePresence>

        {/* Routes */}
        {!loading && (
          <>
            <CustomCursor />
            <ScrollProgress />

            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </>
        )}

      </div>
    </BrowserRouter>
  )
}