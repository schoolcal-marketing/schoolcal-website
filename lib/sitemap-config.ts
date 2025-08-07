import { readdirSync, statSync } from 'fs'
import { join } from 'path'

export interface SitemapPage {
  url: string
  lastModified?: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

// Function to automatically discover pages from the app directory
function discoverPages(): SitemapPage[] {
  const pages: SitemapPage[] = []
  const appDir = join(process.cwd(), 'app')
  
  function scanDirectory(dir: string, baseUrl: string = '') {
    try {
      const items = readdirSync(dir)
      
      for (const item of items) {
        const fullPath = join(dir, item)
        const stat = statSync(fullPath)
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (['components', 'ui', '__pycache__', '.next', 'node_modules'].includes(item)) {
            continue
          }
          
          // Check if directory has a page.tsx file
          const pageFile = join(fullPath, 'page.tsx')
          try {
            statSync(pageFile)
            // Convert directory path to URL
            const url = baseUrl + '/' + item
            pages.push({
              url: url === '/page' ? '/' : url, // Handle root page
              changeFrequency: 'monthly',
              priority: 0.7,
            })
          } catch {
            // No page.tsx, continue scanning subdirectories
            scanDirectory(fullPath, baseUrl + '/' + item)
          }
        }
      }
    } catch (error) {
      console.warn('Error scanning directory:', error)
    }
  }
  
  scanDirectory(appDir)
  return pages
}

// Static pages configuration - for pages that need custom settings
export const staticPages: SitemapPage[] = [
  {
    url: '/',
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    url: '/product',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: '/benefits',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: '/pricing',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  {
    url: '/about',
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: '/resources',
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: '/demo',
    changeFrequency: 'monthly',
    priority: 0.9,
  },
  // Legal pages
  {
    url: '/legal',
    changeFrequency: 'monthly',
    priority: 0.6,
  },
  {
    url: '/legal/data-processing-agreement',
    changeFrequency: 'yearly',
    priority: 0.4,
  },
  {
    url: '/legal/privacy-policy',
    changeFrequency: 'yearly',
    priority: 0.4,
  },
  {
    url: '/legal/service-agreement',
    changeFrequency: 'yearly',
    priority: 0.4,
  },
  {
    url: '/legal/acceptable-use-policy',
    changeFrequency: 'yearly',
    priority: 0.4,
  },
  {
    url: '/legal/subprocessors',
    changeFrequency: 'yearly',
    priority: 0.4,
  },
]

// Sanity content types configuration
export const sanityContentTypes = {
  article: {
    baseUrl: '/resources',
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  // Add more content types here as needed
  // example: {
  //   baseUrl: '/examples',
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.7,
  // },
}

// Helper function to add new static pages
export function addStaticPage(page: SitemapPage) {
  staticPages.push({
    ...page,
    lastModified: page.lastModified || new Date(),
  })
}

// Helper function to get all static pages with proper dates
export function getStaticPages(): SitemapPage[] {
  // Combine manually configured pages with auto-discovered pages
  const discoveredPages = discoverPages()
  const manualPages = staticPages.map(page => ({
    ...page,
    lastModified: page.lastModified || new Date(),
  }))
  
  // Merge and deduplicate based on URL
  const urlMap = new Map<string, SitemapPage>()
  
  // Add manual pages first (they have custom settings)
  manualPages.forEach(page => urlMap.set(page.url, page))
  
  // Add discovered pages (only if not already in manual list)
  discoveredPages.forEach(page => {
    if (!urlMap.has(page.url)) {
      urlMap.set(page.url, {
        ...page,
        lastModified: page.lastModified || new Date(),
      })
    }
  })
  
  return Array.from(urlMap.values())
}
