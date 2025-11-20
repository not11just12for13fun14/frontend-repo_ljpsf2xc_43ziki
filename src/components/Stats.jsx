import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function useCountUp(inView, to, duration = 1200) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const startTime = performance.now()
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const current = Math.floor(progress * to)
      setValue(current)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, to, duration])
  return value
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const s1 = useCountUp(inView, 87)
  const s2 = useCountUp(inView, 90)
  const s3 = useCountUp(inView, 24)
  const s4 = useCountUp(inView, 100)

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ staggerChildren: 0.1 }} className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <motion.div variants={item}>
          <div className="text-5xl font-extrabold" style={{ color: '#00B2CA' }}>{s1}%</div>
          <div className="text-gray-600 mt-2">Schnellere Prozesse</div>
        </motion.div>
        <motion.div variants={item}>
          <div className="text-5xl font-extrabold" style={{ color: '#00B2CA' }}>{s2}</div>
          <div className="text-gray-600 mt-2">Tage bis ROI</div>
        </motion.div>
        <motion.div variants={item}>
          <div className="text-5xl font-extrabold" style={{ color: '#00B2CA' }}>{s3}/7</div>
          <div className="text-gray-600 mt-2">Automatisierung</div>
        </motion.div>
        <motion.div variants={item}>
          <div className="text-5xl font-extrabold" style={{ color: '#00B2CA' }}>{s4}%</div>
          <div className="text-gray-600 mt-2">DSGVO-konform</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
