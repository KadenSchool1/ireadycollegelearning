'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import GameCard from '@/components/GameCard'
import { games } from '@/lib/games'
import { MagnifyingGlassIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Games - DotGUI',
  description: 'Browse our collection of unblocked games',
}

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 p-4">
        <h1 className="text-4xl font-bold text-center text-accent-cyan mb-8">
          Games
        </h1>
        
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-medium" />
            <input
              type="text"
              placeholder="Look for a game you want..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-lg bg-[#022c3a] text-accent-cyan rounded-xl 
                         outline-none transition-shadow duration-200 placeholder:text-accent-medium/50
                         focus:shadow-[0_4px_24px_rgba(0,128,128,0.33)]"
            />
          </div>
        </div>

        {/* Game Request Button */}
        <div className="text-center mb-8">
          <a
            href="https://forms.gle/d8hBcyNGbLXk7cEk9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-red-500 rounded-full 
                       transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <ExclamationCircleIcon className="w-5 h-5" />
            <span>Game Request Form</span>
          </a>
        </div>

        {/* No Results Message */}
        {filteredGames.length === 0 && (
          <div className="text-center py-8 text-accent-cyan text-xl">
            <p className="mb-4">No results found.</p>
            <a 
              href="https://forms.gle/d8hBcyNGbLXk7cEk9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan underline hover:text-accent-cyan/80"
            >
              Game request form
            </a>{' '}
            is right here brodie.
          </div>
        )}

        {/* Game Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {filteredGames.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              slug={game.slug}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
