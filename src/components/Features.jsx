import React from 'react'
import { Brain, Zap, BarChart3, Link, Shield, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  { Icon: Brain, title: 'TIAEX Commerce AI', text: 'Predictive Analytics für Ihren E-Commerce. Automatisierte Personalisierung, dynamische Preisoptimierung und Inventory Management, das vorausdenkt.' },
  { Icon: Zap, title: 'TIAEX Process AI', text: 'Automatisierung komplexer Workflows. Von Dokumenten-Intelligence bis zu selbstlernenden Entscheidungssystemen – Ihre Prozesse auf Autopilot.' },
  { Icon: BarChart3, title: 'TIAEX Data AI', text: 'Real-time Analytics und Custom ML Models. Verwandeln Sie Ihre Daten in handelbare Insights – API-first und nahtlos integrierbar.' },
  { Icon: Link, title: 'Nahtlose Integration', text: 'Keine Systemaustausche nötig. TIAEX legt sich als intelligente Schicht über Ihre bestehenden Tools – von Shopware bis Salesforce.' },
  { Icon: Shield, title: 'DSGVO-Native', text: 'Ihre Daten bleiben in Deutschland. Privacy by Design, nicht als Nachgedanke. Volle Kontrolle, transparente AI-Entscheidungen.' },
  { Icon: Rocket, title: 'Schneller Start', text: 'Von Konzept zu Production in 30 Tagen. Keine monatelangen Projekte – wir liefern messbaren Wert vom ersten Tag an.' },
]

export default function Features() {
  const container = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } } }
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

  return (
    <section id="features" className="py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#F5F5FA' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Intelligence. Automated.</h2>
          <p className="mt-4 text-gray-600">Von E-Commerce-Pionieren entwickelt. Für Unternehmen, die wachsen wollen.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ Icon, title, text }) => (
            <motion.div key={title} variants={item} className="bg-white rounded-xl p-8 shadow-md transition transform hover:-translate-y-1 hover:shadow-lg">
              <div className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center text-white" style={{ backgroundImage: 'linear-gradient(135deg,#00B2CA,#0097B3)' }}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
              <p className="text-base text-gray-700/90">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
