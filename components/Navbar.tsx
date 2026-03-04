'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HomeIcon, PuzzlePieceIcon, WrenchScrewdriverIcon, Cog6ToothIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const navItems = [
  { href: '/start', label: 'Home', icon: HomeIcon },
  { href: '/games', label: 'Games', icon: PuzzlePieceIcon },
  { href: '/tools', label: 'Tools', icon: WrenchScrewdriverIcon },
  { href: '/settings', label: 'Settings', icon: Cog6ToothIcon },
  { href: '/disclaimer', label: 'Disclaimer', icon: DocumentTextIcon },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 py-2 px-2 border-b border-gray-600 bg-black">
      {navItems.map((item) => {
        const isActive = pathname === item.href || 
          (item.href !== '/start' && pathname.startsWith(item.href))
        const Icon = item.icon

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              flex items-center gap-2 min-w-[9rem] py-2 px-3 rounded-md border border-gray-500 
              text-center text-decoration-none transition-all duration-200
              ${isActive 
                ? 'bg-accent-medium text-black font-semibold' 
                : 'text-accent-cyan bg-transparent hover:bg-accent-medium/20 hover:scale-105'
              }
            `}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
