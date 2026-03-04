export interface Tool {
  id: string
  title: string
  slug: string
  description?: string
}

export const tools: Tool[] = [
  { id: '1', title: 'Waves AI', slug: 'wavesai' },
  { id: '2', title: 'Pico 8 (Retro Game Engine)', slug: 'pico' },
  { id: '3', title: 'Simple Calculator', slug: 'simplecalculator' },
]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug)
}
