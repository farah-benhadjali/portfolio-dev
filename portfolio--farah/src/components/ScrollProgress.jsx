import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #22D3EE, #6366F1)',
        boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
      }}
    />
  )
}