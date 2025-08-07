# Sitemap Management

This document explains how the automatic sitemap system works and how to maintain it.

## Overview

The sitemap automatically updates when:
1. New static pages are added to the website
2. New content is published in Sanity CMS

## Files

- `app/sitemap.ts` - Main sitemap generator
- `app/robots.ts` - Robots.txt configuration
- `lib/sitemap-config.ts` - Configuration for static pages and content types

## Adding New Static Pages

When you add a new static page to your website:

1. **Update the configuration** in `lib/sitemap-config.ts`:
   ```typescript
   export const staticPages: SitemapPage[] = [
     // ... existing pages
     {
       url: '/new-page',
       changeFrequency: 'monthly',
       priority: 0.8,
     },
   ]
   ```

2. **Or use the helper function**:
   ```typescript
   import { addStaticPage } from '@/lib/sitemap-config'
   
   addStaticPage({
     url: '/new-page',
     changeFrequency: 'monthly',
     priority: 0.8,
   })
   ```

## Adding New Sanity Content Types

When you add new content types in Sanity:

1. **Update the configuration** in `lib/sitemap-config.ts`:
   ```typescript
   export const sanityContentTypes = {
     article: {
       baseUrl: '/resources',
       changeFrequency: 'monthly' as const,
       priority: 0.6,
     },
     newContentType: {
       baseUrl: '/new-content',
       changeFrequency: 'weekly' as const,
       priority: 0.7,
     },
   }
   ```

2. **Update the sitemap generator** in `app/sitemap.ts`:
   ```typescript
   // Add fetch function for new content type
   async function getNewContent() {
     const content = await sanityClient.fetch(`
       *[_type == "newContentType"] | order(publishedAt desc) {
         _id,
         slug,
         publishedAt,
         _updatedAt
       }
     `)
     return content
   }
   
   // Add to sitemap generation
   const newContent = await getNewContent()
   const newContentEntries = newContent.map((item: any) => ({
     url: `${baseUrl}${sanityContentTypes.newContentType.baseUrl}/${item.slug.current}`,
     lastModified: new Date(item._updatedAt || item.publishedAt),
     changeFrequency: sanityContentTypes.newContentType.changeFrequency,
     priority: sanityContentTypes.newContentType.priority,
   }))
   ```

## SEO Best Practices

### Priority Levels
- **1.0** - Homepage
- **0.9** - Key pages (Product, Pricing, Demo)
- **0.8** - Important pages (Benefits, Resources)
- **0.7** - Secondary pages (About)
- **0.6** - Content pages (Articles)

### Change Frequency
- **weekly** - Frequently updated pages (Homepage, Resources)
- **monthly** - Standard pages (Product, Pricing, About)
- **yearly** - Static pages that rarely change

## Environment Variables

Set `NEXT_PUBLIC_BASE_URL` in your environment:
```env
NEXT_PUBLIC_BASE_URL=https://schoolcal.com
```

## Testing

The sitemap is available at:
- `/sitemap.xml` - XML sitemap
- `/robots.txt` - Robots file

## Automatic Updates

The sitemap automatically regenerates:
- On every build
- When new Sanity content is published
- When the site is deployed

No manual intervention required!
