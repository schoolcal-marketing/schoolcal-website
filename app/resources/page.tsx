import { Metadata } from 'next'
import sanityClient from '@/lib/sanity';

export const metadata: Metadata = {
  title: 'Calendar Resources | SchoolCal',
  description: 'Educational articles, guides, and insights to help you make the most of your school calendars.',
  openGraph: {
    title: 'Resources - Educational Articles & Guides | SchoolCal',
    description: 'Educational articles, guides, and insights to help you make the most of SchoolCal.',
    type: 'website',
    url: 'https://schoolcal.com/resources',
  },
  alternates: {
    canonical: 'https://schoolcal.com/resources',
  },
}

// TypeScript interface for Article
interface Article {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
}

// Fetch articles from Sanity
async function getArticles(): Promise<Article[]> {
  try {
    const articles = await sanityClient.fetch(`
      *[_type == "article"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        mainImage {
          asset-> {
            url
          }
        }
      }
    `);
    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export default async function ResourcesPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-4">
              Resources
            </h1>
            <p className="body-large text-text-dark-blue max-w-2xl mx-auto">
              Educational articles, guides, and insights to help you make the most of SchoolCal.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article._id}
                  className="bg-white rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  {article.mainImage && (
                    <div className="aspect-video bg-gray-200">
                      <img
                        src={article.mainImage.asset.url}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="heading-3 text-text-black mb-2">
                      {article.title}
                    </h2>
                    {article.excerpt && (
                      <p className="body-medium text-text-dark-blue mb-4">
                        {article.excerpt}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <time className="body-small text-text-dark-blue">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </time>
                      <a
                        href={`/resources/${article.slug.current}`}
                        className="text-primary hover:text-primary-dark transition-colors body-medium font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h2 className="heading-2 text-text-black mb-4">
                No Articles Found
              </h2>
              <p className="body-large text-text-dark-blue">
                Check back soon for educational content and resources.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
