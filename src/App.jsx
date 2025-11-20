import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import Value from './components/Value'
import CTA from './components/CTA'
import Footer from './components/Footer'
import DemoDialog from './components/DemoDialog'

function App() {
  const [open, setOpen] = useState(false)

  const openDemo = () => setOpen(true)

  // Smooth scroll behavior
  React.useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) return
    // Fallback not needed in most modern browsers
  }, [])

  return (
    <div className="font-sans scroll-smooth">
      <Navbar onOpenDemo={openDemo} />
      <main>
        <Hero onPrimary={openDemo} onSecondary={() => {
          const el = document.getElementById('features');
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }} />
        <Stats />
        <Features />
        <Value />
        <CTA onClick={openDemo} />
        <Footer />
      </main>
      <DemoDialog open={open} onOpenChange={setOpen} />
    </div>
  )
}

export default App
