import { Metadata } from 'next'
import sanityClient from '@/lib/sanity';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';

// TypeScript interface for Article
interface Article {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  body?: any; // Rich text content from Sanity
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
  author?: {
    name: string;
  };
}

// Fetch a single article by slug
async function getArticle(slug: string): Promise<Article | null> {
  try {
    const article = await sanityClient.fetch(`
      *[_type == "article" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        excerpt,
        body[]{
          ...,
          asset->{
            _id,
            _ref,
            url,
            metadata
          }
        },
        publishedAt,
        mainImage {
          asset-> {
            url
          }
        },
        author-> {
          name
        }
      }
    `, { slug });
    
    return article;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

// Generate static params for all articles (optional, for static generation)
export async function generateStaticParams() {
  try {
    const articles = await sanityClient.fetch(`
      *[_type == "article"] {
        slug
      }
    `);
    
    return articles.map((article: { slug: { current: string } }) => ({
      slug: article.slug.current,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Generate metadata for dynamic pages
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const article = await sanityClient.fetch(`
      *[_type == "article" && slug.current == $slug][0] {
        title,
        excerpt,
        mainImage {
          asset-> {
            url
          }
        }
      }
    `, { slug })

    if (!article) {
      return {
        title: 'Article Not Found | SchoolCal',
        description: 'The requested article could not be found.',
      }
    }

    return {
      title: `${article.title} | SchoolCal Resources`,
      description: article.excerpt || `Read ${article.title} on SchoolCal's resource center.`,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: article.mainImage ? [article.mainImage.asset.url] : [],
        type: 'article',
      },
    }
  } catch (error) {
    return {
      title: 'Resources | SchoolCal',
      description: 'Educational articles and resources from SchoolCal.',
    }
  }
}

// Custom components for Portable Text
const components = {
  types: {
    image: ({ value }: any) => {
      // Debug: Log the image value to see the structure
      console.log('Image value:', JSON.stringify(value, null, 2));
      
      // Handle different image structures from Sanity Block Content
      let imageUrl = null;
      
      // Try different possible image URL structures
      if (value.asset?.url) {
        imageUrl = value.asset.url;
      } else if (value.asset?._ref) {
        // If it's a reference, we need to construct the URL
        imageUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`;
      } else if (value.url) {
        imageUrl = value.url;
      } else if (value.src) {
        imageUrl = value.src;
      }
      
      const alt = value.alt || 'Article image';
      const caption = value.caption;
      
      console.log('Extracted image URL:', imageUrl);
      
      if (!imageUrl) {
        console.log('No image URL found, returning null');
        return null;
      }

      return (
        <div className="my-8">
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-auto rounded-lg"
          />
          {caption && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {caption}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="heading-1 text-text-black mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="heading-2 text-text-black mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="heading-3 text-text-black mt-4 mb-2">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="body-medium text-text-dark-blue mb-4 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
  },
  listItem: ({ children }: any) => (
    <li className="body-medium text-text-dark-blue">{children}</li>
  ),
  marks: {
    link: ({ children, value }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-primary hover:text-primary-dark underline"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-4">
              {article.title}
            </h1>
            {article.excerpt && (
              <p className="body-large text-text-dark-blue max-w-2xl mx-auto mb-6">
                {article.excerpt}
              </p>
            )}
            <div className="flex items-center justify-center gap-4 text-text-dark-blue body-medium">
              {article.author && (
                <span>By {article.author.name}</span>
              )}
              <time>
                {new Date(article.publishedAt).toLocaleDateString()}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.mainImage && (
            <div className="mb-8">
              <img
                src={article.mainImage.asset.url}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            {article.body ? (
              <div className="body-large text-text-dark-blue leading-relaxed">
                <PortableText value={article.body} components={components} />
              </div>
            ) : (
              <p className="body-large text-text-dark-blue">
                Article content will be displayed here.
              </p>
            )}
          </div>
          
          {/* Back to Resources */}
          <div className="mt-12 pt-8 border-t border-border">
            <a
              href="/resources"
              className="text-primary hover:text-primary-dark transition-colors body-medium font-medium"
            >
              ← Back to Resources
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
