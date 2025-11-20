import React from 'react'
import { Check, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Value() {
  const bullets = [
    'API-first Architecture für maximale Flexibilität',
    'Cloud-native & skalierbar von Tag 1',
    'White-Label-Ready für Agenturen',
    '99,9% Uptime SLA',
  ]

  return (
    <section id="value" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Wir sind mehr als eine Agentur</h2>
          <p className="mt-6 text-gray-600">TIAEX ist das intelligente Nervensystem für wachsende Unternehmen. Wir vereinen jahrelange E-Commerce-Expertise mit modernster KI-Technologie.</p>
          <p className="mt-4 text-gray-600">Das Ergebnis: Eine Plattform, die nicht nur implementiert wird, sondern mitdenkt, lernt und sich kontinuierlich verbessert.</p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-gray-700">
                <div className="mt-1 w-6 h-6 rounded-md flex items-center justify-center text-white" style={{ backgroundColor: '#00B2CA' }}>
                  <Check className="w-4 h-4" />
                </div>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="rounded-2xl p-12 text-center shadow-xl" style={{ backgroundImage: 'linear-gradient(135deg,#00B2CA,#0097B3)', boxShadow: '0 20px 40px rgba(0,178,202,0.3)' }}>
            <div className="mx-auto w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-white mb-6">
              <Zap className="w-12 h-12" />
            </div>
            <div className="text-white text-6xl">⚡</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
