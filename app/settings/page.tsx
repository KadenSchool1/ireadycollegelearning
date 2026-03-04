'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Settings - DotGUI',
  description: 'Configure your DotGUI settings',
}

type TabCloakOption = 'default' | 'google' | 'vocab'

const tabCloakOptions: { value: TabCloakOption; label: string; favicon: string }[] = [
  { value: 'default', label: 'Default', favicon: '/favicon.ico' },
  { value: 'google', label: 'Google', favicon: 'https://www.google.com/favicon.ico' },
  { value: 'vocab', label: 'Vocabulary.com', favicon: 'https://www.vocabulary.com/favicon.ico' },
]

const titles: Record<TabCloakOption, string> = {
  default: 'DotGUI',
  google: 'Google',
  vocab: 'My Learning | Vocabulary.com',
}

export default function SettingsPage() {
  const [selectedOption, setSelectedOption] = useState<TabCloakOption>('default')

  useEffect(() => {
    const saved = localStorage.getItem('tabCloaker') as TabCloakOption || 'default'
    setSelectedOption(saved)
    applyTabCloak(saved)
  }, [])

  const applyTabCloak = (value: TabCloakOption) => {
    document.title = titles[value]
    const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement || document.createElement('link')
    if (!favicon.href) {
      favicon.rel = 'icon'
      document.head.appendChild(favicon)
    }
    favicon.href = tabCloakOptions.find(o => o.value === value)?.favicon || '/favicon.ico'
  }

  const handleChange = (value: TabCloakOption) => {
    setSelectedOption(value)
    localStorage.setItem('tabCloaker', value)
    applyTabCloak(value)
  }

  const handleAboutBlankLaunch = () => {
    const win = window.open()
    if (!win) return

    win.document.title = 'Wikipedia'

    const link = win.document.createElement('link')
    link.rel = 'icon'
    link.type = 'image/x-icon'
    link.href = 'https://en.wikipedia.org/favicon.ico'
    
    win.document.head.appendChild(link)
    
    const iframe = win.document.createElement('iframe')
    iframe.style.width = "100%"
    iframe.style.height = "100%"
    iframe.style.border = "none"
    iframe.src = '/start'
    win.document.body.appendChild(iframe)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 p-4">
        <h1 className="text-4xl font-bold text-center text-accent-cyan mb-8">
          Settings Options
        </h1>

        <div className="max-w-lg mx-auto">
          {/* Tab Cloaker */}
          <div className="bg-black/30 rounded-lg p-6 mb-6">
            <label htmlFor="tabCloaker" className="text-xl font-bold block mb-4">
              Tab Cloaker
            </label>
            <select
              id="tabCloaker"
              value={selectedOption}
              onChange={(e) => handleChange(e.target.value as TabCloakOption)}
              className="w-full px-4 py-3 text-lg bg-[#022c3a] text-accent-cyan rounded-xl 
                         border border-gray-600 outline-none cursor-pointer
                         focus:ring-2 focus:ring-accent-cyan transition-all"
            >
              {tabCloakOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* About Blank Launch */}
          <div className="bg-black/30 rounded-lg p-6">
            <label className="text-xl font-bold block mb-4">
              Click to launch in about:blank if you aren't already
            </label>
            <button
              onClick={handleAboutBlankLaunch}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-accent-cyan rounded-full 
                         transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-cyan/20"
            >
              <GlobeAltIcon className="w-5 h-5" />
              <span>Tab Cloaker</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
