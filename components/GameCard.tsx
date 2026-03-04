import Link from 'next/link'
import { PlayIcon } from '@heroicons/react/24/solid'

interface GameCardProps {
  title: string
  slug: string
}

export default function GameCard({ title, slug }: GameCardProps) {
  return (
    <Link
      href={`/games/${slug}`}
      className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-normal 
                 text-accent-cyan bg-black rounded-full transition-all duration-200 hover:-translate-y-0.5 
                 hover:shadow-lg hover:shadow-accent-cyan/20"
    >
      <PlayIcon className="w-5 h-5 mr-2" />
      <span>{title}</span>
    </Link>
  )
}
