import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import { tools, getToolBySlug } from '@/lib/tools'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = getToolBySlug(params.slug)
  
  if (!tool) {
    return {
      title: 'Tool Not Found - DotGUI',
    }
  }

  return {
    title: `${tool.title} - DotGUI`,
    description: `Use ${tool.title} on DotGUI`,
  }
}

export default function ToolPage({ params }: Props) {
  const tool = getToolBySlug(params.slug)

  if (!tool) {
    notFound()
  }

  const toolEmbedPath = `/tool-embeds/${tool.slug}.html`

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col">
        <h1 className="text-3xl font-bold text-center text-accent-cyan py-4">
          {tool.title}
        </h1>
        
        {/* Tool Embed */}
        <div className="flex-1 relative bg-[#111]">
          <iframe
            src={toolEmbedPath}
            className="absolute inset-0 w-full h-full border-none"
            title="Tool"
            allow="fullscreen"
          />
        </div>
      </main>
    </div>
  )
}
