import Link from 'next/link'
import { WrenchIcon } from '@heroicons/react/24/solid'

interface ToolCardProps {
  title: string
  slug: string
}

export default function ToolCard({ title, slug }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${slug}`}
      className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-normal 
                 text-accent-cyan bg-black rounded-full transition-all duration-200 hover:-translate-y-0.5 
                 hover:shadow-lg hover:shadow-accent-cyan/20"
    >
      <WrenchIcon className="w-5 h-5 mr-2" />
      <span>{title}</span>
    </Link>
  )
}
