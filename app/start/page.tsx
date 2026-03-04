import Link from 'next/link'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { ArrowRightIcon, GlobeAltIcon, CubeIcon, DocumentIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'DotGUI',
  description: 'A collection of unblocked games and tools',
}

const randomTexts = [
  '"Work on DotGUI, or quit and play Roblox until your screentime is over? Hmm..." - DotLYHiyou, probably',
  "No, the name isn't inspired by c00lGUI, and no, the DotLYHiyou isn't a creep cuz he frequently plays Forsaken.",
  "Did you know? DotGUI used to be the Zenithub Rework Update, but then I thought it through and realized throwing a rebrand in would be cool. Yeah, so much for being cool...",
  "If I were to remake DotGUI, I would make sure a search would be available on day one.",
  "One of my biggest regrets to date is not staying on the earliest branding, BlackoutGames. Idk man, smth about OG BlackoutGames hit hard.", 
  "Give the Despotic Ruins theme from Flood Escape 2 a listen. I loop it while I work.",
  "Militant is the best TDS starter tower when you start the game. Change my mind.",
  "Who needs global announcements that very easily get hijacked when you have these?",
  "STOP ASKING FOR ROBLOX!!!! IT ISNT POSSIBLE ANYMORE BRO, MAYBE BUY I VPS OR SMTH IDK",
  "PLEASE stop using the request form for problems. Instead, use the DISCORD SERVER or THE GITHUB.",
  "There is like 5-6 people who prob still check the community server. Please join it.",
  "I am NOT looking for people to help me work on this site. Don't even dream of getting hired. Stop asking.",
  "Before you crashout and say 'wHy DId yOu aDd ADs to ur site???!?!!?', I just need the money. None will be on the games, and they only work on ONE link and ONE link only. Not gonna say which one, join the server for that.",
  "I'm looking into using Emscripten to port more games. Stay tuned!"
]

function getRandomText() {
  return randomTexts[Math.floor(Math.random() * randomTexts.length)]
}

export default function StartPage() {
  const randomText = getRandomText()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl font-bold mb-6 text-accent-cyan drop-shadow-lg">
          DotGUI
        </h1>
        
        <p className="text-xl text-accent-light mb-8 max-w-2xl" style={{ fontSize: '1.2em', margin: '20px 0' }}>
          {randomText}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link
            href="/games"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-accent-cyan rounded-full 
                       transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-cyan/30"
          >
            <CubeIcon className="w-6 h-6" />
            <span>Browse Games</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
          
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-accent-cyan rounded-full 
                       transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-cyan/30"
          >
            <GlobeAltIcon className="w-6 h-6" />
            <span>Tools</span>
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
        
        <p className="text-accent-light/80 text-lg">
          Join our{' '}
          <a 
            href="https://discord.com/invite/U8tT8AazXb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 underline transition-colors"
          >
            community server
          </a>{' '}
          to report problems and get more links. Make sure to star DotGUI on GitHub if you fork it!
        </p>
      </main>
      
      <footer className="py-4 text-center text-accent-light/60 border-t border-gray-700">
        <p>
          Made by{' '}
          <a 
            href="https://dotlyhiyou.carrd.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent-cyan hover:text-accent-cyan/80 underline transition-colors"
          >
            DotLYHiyou
          </a>
          . Visit my carrd for more on me.
        </p>
      </footer>
    </div>
  )
}
