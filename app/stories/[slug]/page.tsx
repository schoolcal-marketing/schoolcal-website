import { Metadata } from 'next'
import sanityClient from '@/lib/sanity';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import YouTubeEmbed from '@/app/components/YouTubeEmbed';

// TypeScript interface for Customer Story
interface CustomerStory {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  metaTitle?: string;
  metaDescription?: string;
  body?: any; // Rich text content from Sanity
  publishedAt: string;
  video?: string; // Changed from youtubeVideoUrl to video
  thumbnailImage?: {
    asset: {
      url: string;
    };
  };
}

// Fetch a single customer story by slug
async function getCustomerStory(slug: string): Promise<CustomerStory | null> {
  try {
    const story = await sanityClient.fetch(`
      *[_type == "customerStory" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        metaTitle,
        metaDescription,
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
        video,
        thumbnailImage {
          asset-> {
            url
          }
        }
      }
    `, { slug });
    
    return story;
  } catch (error) {
    console.error('Error fetching customer story:', error);
    return null;
  }
}

// Generate static params for all customer stories
export async function generateStaticParams() {
  try {
    const stories = await sanityClient.fetch(`
      *[_type == "customerStory"] {
        slug
      }
    `);
    
    return stories.map((story: { slug: { current: string } }) => ({
      slug: story.slug.current,
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
    const story = await sanityClient.fetch(`
      *[_type == "customerStory" && slug.current == $slug][0] {
        title,
        metaTitle,
        metaDescription,
        video,
        thumbnailImage {
          asset-> {
            url
          }
        }
      }
    `, { slug })

    if (!story) {
      return {
        title: 'Customer Story Not Found | SchoolCal',
        description: 'The requested customer story could not be found.',
      }
    }

    const title = story.metaTitle || story.title;
    const description = story.metaDescription || `Read about ${story.title} and how they're using SchoolCal.`;

    return {
      title: `${title} | SchoolCal Customer Stories`,
      description: description,
      openGraph: {
        title: title,
        description: description,
        images: story.thumbnailImage ? [story.thumbnailImage.asset.url] : [],
        type: 'article',
      },
      alternates: {
        canonical: `https://schoolcal.com/stories/${slug}`,
      },
    }
  } catch (error) {
    return {
      title: 'Customer Stories | SchoolCal',
      description: 'Customer success stories from SchoolCal.',
    }
  }
}

// Custom components for Portable Text
const components = {
  types: {
    image: ({ value }: any) => {
      let imageUrl = null;
      
      if (value.asset?.url) {
        imageUrl = value.asset.url;
      } else if (value.asset?._ref) {
        imageUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`;
      } else if (value.url) {
        imageUrl = value.url;
      } else if (value.src) {
        imageUrl = value.src;
      }
      
      const alt = value.alt || 'Story image';
      const caption = value.caption;
      
      if (!imageUrl) {
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

export default async function CustomerStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await getCustomerStory(slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-4">
              {story.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-text-dark-blue body-medium">
              <time>
                {new Date(story.publishedAt).toLocaleDateString()}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* YouTube Video */}
          {story.video ? (
            <div className="mb-12">
              <YouTubeEmbed 
                videoUrl={story.video} 
                title={`${story.title} - Customer Story Video`}
              />
            </div>
          ) : (
            <div className="mb-12 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800">
                <strong>Debug:</strong> No video URL found. 
                Expected field: <code>video</code>
              </p>
            </div>
          )}
          
          {/* Story Body */}
          <div className="prose prose-lg max-w-none">
            {story.body ? (
              <div className="body-large text-text-dark-blue leading-relaxed">
                <PortableText value={story.body} components={components} />
              </div>
            ) : (
              <p className="body-large text-text-dark-blue">
                Story content will be displayed here.
              </p>
            )}
          </div>
          
          {/* Back to Stories */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/stories"
              className="text-primary hover:text-primary-dark transition-colors body-medium font-medium"
            >
              ← Back to Customer Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
