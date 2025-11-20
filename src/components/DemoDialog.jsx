import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export default function DemoDialog({ open, onOpenChange }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const valid = email.includes('@') && name.trim().length > 1

  const onSubmit = (e) => {
    e.preventDefault()
    if (!valid) return
    setSent(true)
    const params = new URLSearchParams({
      subject: 'TIAEX Demo-Anfrage',
      body: `Name: ${name}%0D%0AEmail: ${email}%0D%0AFirma: ${company}%0D%0ANachricht: ${message}`,
    })
    window.location.href = `mailto:hello@tiaex.com?${params.toString()}`
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 animate-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] sm:w-[560px] bg-white rounded-xl shadow-2xl p-6">
          <Dialog.Title className="text-xl font-semibold text-gray-900">Demo anfragen</Dialog.Title>
          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Name</label>
              <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Firma</label>
              <input value={company} onChange={(e) => setCompany(e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Nachricht</label>
              <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring" />
            </div>

            {sent && (
              <div className="text-green-600 text-sm">Vielen Dank! Wir melden uns innerhalb von 24 Stunden.</div>
            )}

            <div className="pt-2 flex items-center justify-end gap-3">
              <Dialog.Close className="px-4 py-2 rounded-lg border">Abbrechen</Dialog.Close>
              <button type="submit" disabled={!valid} className={`px-4 py-2 rounded-lg text-white shadow-lg ${valid ? '' : 'opacity-60 cursor-not-allowed'}`} style={{ backgroundColor: '#00B2CA' }}>
                Demo anfragen
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
