'use client'

import { useEffect, useState } from 'react'

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

export default function TabCloaker() {
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

  const handleChange = (value:Option) => {
 TabCloak    setSelectedOption(value)
    localStorage.setItem('tabCloaker', value)
    applyTabCloak(value)
  }

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <label htmlFor="tabCloaker" className="text-xl font-bold">
        Tab Cloaker
      </label>
      <select
        id="tabCloak"
        value={selectedOption}
        onChange={(e) => handleChange(e.target.value as TabCloakOption)}
        className="px-4 py-2 text-base bg-[#022c3a] text-accent-cyan rounded-lg border border-gray-600 
                   focus:outline-none focus:ring-2 focus:ring-accent-cyan cursor-pointer"
      >
        {tabCloakOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
