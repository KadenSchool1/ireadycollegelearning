'use client'

import { ArrowLeftIcon, ArrowPathIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

interface GamePlayerProps {
  slug: string
}

export default function GamePlayer({ slug }: GamePlayerProps) {
  const router = useRouter()
  const gameEmbedPath = `/game-embeds/${slug}.html`

  const handleRestart = () => {
    router.refresh()
  }

  const handleFullscreen = () => {
    window.open(gameEmbedPath, '_blank')
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Game Embed */}
      <div className="flex-1 relative bg-[#111]">
        <iframe
          src={gameEmbedPath}
          className="absolute inset-0 w-full h-full border-none"
          title="Game"
          allow="fullscreen"
        />
      </div>

      {/* Taskbar */}
      <div className="flex items-center justify-end gap-4 px-6 py-3 bg-[#141414]/98 border-t border-gray-700">
        <button
          onClick={() => router.push('/games')}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#222] text-white rounded-lg 
                     transition-colors duration-200 hover:bg-[#444]"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span>Back</span>
        </button>
        
        <button
          onClick={handleRestart}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#222] text-white rounded-lg 
                     transition-colors duration-200 hover:bg-[#444]"
        >
          <ArrowPathIcon className="w-5 h-5" />
          <span>Restart</span>
        </button>
        
        <button
          onClick={handleFullscreen}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#222] text-white rounded-lg 
                     transition-colors duration-200 hover:bg-[#444]"
        >
          <ArrowsPointingOutIcon className="w-5 h-5" />
          <span>Full Screen</span>
        </button>
      </div>
    </div>
  )
}
