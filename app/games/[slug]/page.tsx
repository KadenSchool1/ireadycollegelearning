import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import GamePlayer from '@/components/GamePlayer'
import { games, getGameBySlug } from '@/lib/games'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const game = getGameBySlug(params.slug)
  
  if (!game) {
    return {
      title: 'Game Not Found - DotGUI',
    }
  }

  return {
    title: `${game.title} - DotGUI`,
    description: `Play ${game.title} on DotGUI`,
  }
}

export default function GamePage({ params }: Props) {
  const game = getGameBySlug(params.slug)

  if (!game) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        <h1 className="text-3xl font-bold text-center text-accent-cyan py-4">
          {game.title}
        </h1>
        
        <GamePlayer slug={game.slug} />
      </main>
    </div>
  )
}
