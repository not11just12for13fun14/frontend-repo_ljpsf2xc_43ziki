import React from 'react'
import { Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="footer" className="pt-16 md:pt-24 bg-[#5B5C61] text-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-2 sm:grid-cols-4 gap-10">
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-[#00B2CA]">Über uns</a></li>
            <li><a href="#team" className="hover:text-[#00B2CA]">Team</a></li>
            <li><a href="#career" className="hover:text-[#00B2CA]">Karriere</a></li>
            <li><a href="#contact" className="hover:text-[#00B2CA]">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#features" className="hover:text-[#00B2CA]">Commerce AI</a></li>
            <li><a href="#features" className="hover:text-[#00B2CA]">Process AI</a></li>
            <li><a href="#features" className="hover:text-[#00B2CA]">Data AI</a></li>
            <li><a href="#pricing" className="hover:text-[#00B2CA]">Preise</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#blog" className="hover:text-[#00B2CA]">Blog</a></li>
            <li><a href="#cases" className="hover:text-[#00B2CA]">Case Studies</a></li>
            <li><a href="#docs" className="hover:text-[#00B2CA]">Dokumentation</a></li>
            <li><a href="#api" className="hover:text-[#00B2CA]">API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#imprint" className="hover:text-[#00B2CA]">Impressum</a></li>
            <li><a href="#privacy" className="hover:text-[#00B2CA]">Datenschutz</a></li>
            <li><a href="#terms" className="hover:text-[#00B2CA]">AGB</a></li>
            <li><a href="#cookies" className="hover:text-[#00B2CA]">Cookie-Einstellungen</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-between py-6">
          <p className="text-gray-300 text-sm">© 2025 TIAEX - Technology, Information, AI Excellence</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a className="hover:text-[#00B2CA]" href="#" aria-label="LinkedIn"><Linkedin /></a>
            <a className="hover:text-[#00B2CA]" href="#" aria-label="GitHub"><Github /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
