export default function ApiStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://gamelayer.io'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'API Documentation',
            'item': 'https://gamelayer.io/api'
          }
        ]
      },
      {
        '@type': 'TechArticle',
        'headline': 'GameLayer API Documentation',
        'description': 'Complete reference for GameLayer gamification API integration',
        'author': {
          '@type': 'Organization',
          'name': 'GameLayer'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'GameLayer',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://gamelayer.io/gamelayer-logo.png'
          }
        },
        'datePublished': '2025-01-01',
        'dateModified': '2025-01-27',
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://gamelayer.io/api'
        },
        'about': {
          '@type': 'SoftwareApplication',
          'name': 'GameLayer API',
          'description': 'AI-ready gamification API with RESTful endpoints'
        }
      },
      {
        '@type': 'SoftwareApplication',
        'name': 'GameLayer API',
        'applicationCategory': 'DeveloperApplication',
        'operatingSystem': 'All',
        'description': 'AI-ready gamification API, microservice, and API for gamification with RESTful endpoints, comprehensive documentation, and developer-first approach',
        'featureList': [
          'RESTful API endpoints',
          'Comprehensive documentation',
          'SDK support for multiple languages',
          'Webhook support',
          'Rate limiting',
          'Authentication',
          'Structured JSON responses',
          'AI-ready data formats'
        ],
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'EUR',
          'description': 'API access included with all plans'
        },
        'programmingLanguage': ['JavaScript', 'Python', 'PHP', 'Java', 'C#', 'Go', 'Ruby'],
        'softwareVersion': '2.0',
        'releaseNotes': 'AI-ready architecture with enhanced structured data support'
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'How do I get started with the GameLayer API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Start by signing up for a free account, then generate your API key from the dashboard. Use our comprehensive documentation and SDKs to integrate the API into your application.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What programming languages are supported?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'GameLayer API supports all programming languages through RESTful endpoints. We provide official SDKs for JavaScript, Python, PHP, Java, C#, Go, and Ruby.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Is there rate limiting on the API?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, the API includes rate limiting to ensure fair usage. Limits vary by plan: Starter (1,000 requests/hour), Growth (10,000 requests/hour), Scale (50,000 requests/hour), Enterprise (unlimited).'
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
