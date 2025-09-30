import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      // Major Search Engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      // AI Crawlers - Enhanced for maximum compatibility
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Anthropic-AI',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bard',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Copilot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Gemini',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Grok',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Cohere',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'HuggingFace',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'AI-Search',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
      {
        userAgent: 'AI-Indexer',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/chat', '/api/send'],
        crawlDelay: 1,
      },
    ],
    sitemap: 'https://gamelayer.io/sitemap.xml',
    host: 'https://gamelayer.io',
  }
}
