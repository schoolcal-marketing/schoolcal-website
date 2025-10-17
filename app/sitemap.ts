import { MetadataRoute } from 'next'
import sanityClient from '@/lib/sanity'
import { getStaticPages, sanityContentTypes } from '@/lib/sitemap-config'

// Fetch articles from Sanity
async function getArticles() {
  try {
    const articles = await sanityClient.fetch(`
      *[_type == "article"] | order(publishedAt desc) {
        _id,
        slug,
        publishedAt,
        _updatedAt
      }
    `)
    return articles
  } catch (error) {
    console.error('Error fetching articles for sitemap:', error)
    return []
  }
}

// Fetch customer stories from Sanity
async function getCustomerStories() {
  try {
    const stories = await sanityClient.fetch(`
      *[_type == "customerStory"] | order(publishedAt desc) {
        _id,
        slug,
        publishedAt,
        _updatedAt
      }
    `)
    return stories
  } catch (error) {
    console.error('Error fetching customer stories for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://schoolcal.com'
  
  // Get static pages
  const staticPages = getStaticPages()
  
  // Get dynamic content from Sanity
  const articles = await getArticles()
  const customerStories = await getCustomerStories()
  
  // Generate sitemap entries for articles
  const articleEntries = articles.map((article: any) => ({
    url: `${baseUrl}${sanityContentTypes.article.baseUrl}/${article.slug.current}`,
    lastModified: new Date(article._updatedAt || article.publishedAt),
    changeFrequency: sanityContentTypes.article.changeFrequency,
    priority: sanityContentTypes.article.priority,
  }))

  // Generate sitemap entries for customer stories
  const storyEntries = customerStories.map((story: any) => ({
    url: `${baseUrl}${sanityContentTypes.customerStory.baseUrl}/${story.slug.current}`,
    lastModified: new Date(story._updatedAt || story.publishedAt),
    changeFrequency: sanityContentTypes.customerStory.changeFrequency,
    priority: sanityContentTypes.customerStory.priority,
  }))

  // Combine static and dynamic entries
  const allEntries = [
    ...staticPages.map(page => ({
      ...page,
      url: `${baseUrl}${page.url}`,
    })),
    ...articleEntries,
    ...storyEntries,
  ]

  return allEntries
}
