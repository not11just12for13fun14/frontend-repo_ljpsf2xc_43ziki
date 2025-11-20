import React from 'react'
import Spline from '@splinetool/react-spline'
import { ChevronDown } from 'lucide-react'

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section id="top" className="relative min-h-[90vh] md:min-h-[95vh] flex items-center" style={{ background: 'radial-gradient(circle at 30% 20%, #F5F5FA, #FFFFFF 60%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(0,178,202,0.15), transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid md:grid-cols-5 gap-8 w-full items-center">
        <div className="md:col-span-3">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Die <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg,#00B2CA,#0097B3)' }}>KI-Revolution</span> für Ihr Business
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl">
            TIAEX macht fortschrittliche Künstliche Intelligenz für wachsende Unternehmen nutzbar. Automatisieren Sie Prozesse, treffen Sie bessere Entscheidungen und skalieren Sie intelligent – ohne proportional mehr Mitarbeiter zu brauchen.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button onClick={onPrimary} className="px-5 py-3 rounded-lg text-white shadow-lg transition transform hover:scale-105" style={{ backgroundColor: '#00B2CA' }}>
              Demo anfragen
            </button>
            <button onClick={onSecondary} className="px-5 py-3 rounded-lg border transition text-gray-800" style={{ borderColor: '#00B2CA', color: '#00B2CA' }}>
              Mehr erfahren
            </button>
          </div>
        </div>
        <div className="md:col-span-2 h-[360px] md:h-[480px] rounded-xl overflow-hidden">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
        <ChevronDown />
      </div>
    </section>
  )
}
