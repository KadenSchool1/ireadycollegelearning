'use client'

import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ToolCard from '@/components/ToolCard'
import { tools } from '@/lib/tools'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Tools - DotGUI',
  description: 'Browse our collection of useful tools',
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 p-4">
        <h1 className="text-4xl font-bold text-center text-accent-cyan mb-8">
          Tools
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              title={tool.title}
              slug={tool.slug}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
