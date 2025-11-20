import React, { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Sheet from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Lösungen', href: '#features' },
  { label: 'Use Cases', href: '#value' },
  { label: 'Über uns', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Impressum', href: '#footer' },
]

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/80 shadow-md' : 'backdrop-blur-sm bg-white/40'} `}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 h-16 flex items-center justify-between">
        <a href="#top" className="font-extrabold text-xl" style={{ color: '#00B2CA' }}>TIAEX</a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition underline-offset-4 hover:underline">
              {item.label}
            </a>
          ))}
        </nav>

        <button onClick={onOpenDemo} className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-lg text-white shadow-lg transition transform hover:scale-105" style={{ backgroundColor: '#00B2CA' }}>
          Demo anfragen
        </button>

        <button className="md:hidden inline-flex p-2 rounded-lg border border-gray-200" onClick={() => setOpen(true)}>
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Sheet using Dialog as simple sheet */}
      <Sheet.Root open={open} onOpenChange={setOpen}>
        <Sheet.Portal>
          <Sheet.Overlay className="fixed inset-0 bg-black/20 animate-in" />
          <Sheet.Content className="fixed top-0 right-0 h-full w-80 max-w-[80%] bg-white shadow-xl p-6 animate-in">
            <div className="flex items-center justify-between mb-6">
              <span className="font-extrabold text-lg" style={{ color: '#00B2CA' }}>TIAEX</span>
              <button onClick={() => setOpen(false)} className="p-2 rounded-lg border">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-base text-gray-700">
                  {item.label}
                </a>
              ))}
              <button onClick={() => { setOpen(false); onOpenDemo(); }} className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg text-white shadow-lg" style={{ backgroundColor: '#00B2CA' }}>
                Demo anfragen
              </button>
            </div>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    </div>
  )
}
