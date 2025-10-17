import { Metadata } from 'next'
import sanityClient from '@/lib/sanity';
import Link from 'next/link';
import YouTubeEmbed from '@/app/components/YouTubeEmbed';

export const metadata: Metadata = {
  title: 'Customer Stories | SchoolCal',
  description: 'Discover how schools are transforming their calendar management with SchoolCal. Read real success stories from our customers.',
  openGraph: {
    title: 'Customer Stories - School Success Stories | SchoolCal',
    description: 'Discover how schools are transforming their calendar management with SchoolCal. Read real success stories from our customers.',
    type: 'website',
    url: 'https://schoolcal.com/stories',
  },
  alternates: {
    canonical: 'https://schoolcal.com/stories',
  },
}

// TypeScript interface for Customer Story
interface CustomerStory {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  metaTitle?: string;
  metaDescription?: string;
  excerpt?: string;
  publishedAt: string;
  video?: string;
  thumbnailImage?: {
    asset: {
      url: string;
    };
  };
}

// Fetch customer stories from Sanity
async function getCustomerStories(): Promise<CustomerStory[]> {
  try {
    const stories = await sanityClient.fetch(`
      *[_type == "customerStory"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        metaTitle,
        metaDescription,
        excerpt,
        publishedAt,
        video,
        thumbnailImage {
          asset-> {
            url
          }
        }
      }
    `);
    return stories;
  } catch (error) {
    console.error('Error fetching customer stories:', error);
    return [];
  }
}

// Helper function to extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string | null {
  // Handle youtu.be URLs (like https://youtu.be/9F6VvnPtot0?si=...)
  const youtuBeMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (youtuBeMatch) {
    return youtuBeMatch[1];
  }
  
  // Handle youtube.com URLs (like https://www.youtube.com/watch?v=9F6VvnPtot0&si=...)
  const youtubeMatch = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (youtubeMatch) {
    return youtubeMatch[1];
  }
  
  // Handle embed URLs
  const embedMatch = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) {
    return embedMatch[1];
  }
  
  return null;
}

// Helper function to get YouTube thumbnail
function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export default async function StoriesPage() {
  const stories = await getCustomerStories();

  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-4">
              Customer Stories
            </h1>
            <p className="body-large text-text-dark-blue max-w-2xl mx-auto mb-8">
              Discover how schools are transforming their calendar management with SchoolCal. 
              Read real success stories from our customers and see the impact we're making.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {stories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stories.map((story) => {
                const videoId = story.video ? getYouTubeVideoId(story.video) : null;
                const thumbnailUrl = videoId ? getYouTubeThumbnail(videoId) : null;
                
                return (
                  <article
                    key={story._id}
                    className="bg-white rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Video Thumbnail */}
                    <div className="aspect-video bg-gray-200 relative">
                      {thumbnailUrl ? (
                        <img
                          src={thumbnailUrl}
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                      ) : story.thumbnailImage ? (
                        <img
                          src={story.thumbnailImage.asset.url}
                          alt={story.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      
                      {/* Play Button Overlay */}
                      {videoId && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black bg-opacity-50 rounded-full p-4">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h2 className="heading-3 text-text-black mb-2">
                        {story.title}
                      </h2>
                      {story.excerpt && (
                        <p className="body-medium text-text-dark-blue mb-4">
                          {story.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        <time className="body-small text-text-dark-blue">
                          {new Date(story.publishedAt).toLocaleDateString()}
                        </time>
                        <Link
                          href={`/stories/${story.slug.current}`}
                          className="text-primary hover:text-primary-dark transition-colors body-medium font-medium"
                        >
                          Read Story →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="heading-2 text-text-black mb-4">
                No Stories Found
              </h2>
              <p className="body-large text-text-dark-blue">
                Check back soon for customer success stories.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
