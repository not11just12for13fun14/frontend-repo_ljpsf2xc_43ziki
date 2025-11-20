import React from 'react'

export default function CTA({ onClick }) {
  return (
    <section className="py-20 md:py-32" style={{ backgroundImage: 'linear-gradient(90deg,#00B2CA,#0097B3)' }}>
      <div className="max-w-3xl mx-auto text-center px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Bereit für die Zukunft?</h2>
        <p className="mt-4 text-white/90">Starten Sie mit einem kostenlosen 30-Tage-Pilotprojekt und erleben Sie, was AI für Ihr Business tun kann.</p>
        <button onClick={onClick} className="mt-8 px-6 py-3 rounded-lg bg-white text-center font-medium shadow-xl transition transform hover:scale-105" style={{ color: '#00B2CA' }}>
          Jetzt Demo anfragen
        </button>
      </div>
    </section>
  )
}
