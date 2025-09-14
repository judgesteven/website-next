export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://gamelayer.io/#website',
        'url': 'https://gamelayer.io',
        'name': 'GameLayer',
        'description': 'Leading Gamification Platform & API for Business',
        'publisher': {
          '@id': 'https://gamelayer.io/#organization'
        },
        'potentialAction': [
          {
            '@type': 'SearchAction',
            'target': 'https://gamelayer.io/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        ],
        'inLanguage': 'en'
      },
      {
        '@type': 'Organization',
        '@id': 'https://gamelayer.io/#organization',
        'name': 'GameLayer',
        'url': 'https://gamelayer.io',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://gamelayer.io/gamelayer-logo.png',
          'contentUrl': 'https://gamelayer.io/gamelayer-logo.png',
          'width': 512,
          'height': 512,
          '@id': 'https://gamelayer.io/#logo'
        },
        'sameAs': [
          'https://twitter.com/gamelayer',
          'https://www.linkedin.com/company/gamelayer',
          'https://www.instagram.com/gamelayer'
        ],
        'foundingDate': '2012',
        'founders': [
          {
            '@type': 'Person',
            'name': 'GameLayer Team'
          }
        ],
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'FI'
        }
      },
      {
        '@type': 'SoftwareApplication',
        'name': 'GameLayer',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'All',
        'offers': {
          '@type': 'Offer',
          'price': '100',
          'priceCurrency': 'EUR'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.8',
          'ratingCount': '150'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is gamification and how does it work?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Gamification is the application of game mechanics to non-game contexts to increase user engagement, motivation, and participation. It works by using elements like points, badges, leaderboards, and rewards that create a sense of achievement and progress. Our gamification platform makes it easy to implement these mechanics through our API and dashboard.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How much does GameLayer cost?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'GameLayer offers flexible pricing starting at €100/month for the Starter plan (up to 1,000 users), €1,000/month for Growth (up to 25,000 users), €2,500/month for Scale (up to 100,000 users), and custom Enterprise pricing for unlimited users. All plans include our full gamification platform and API access.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What types of businesses can benefit from gamification?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Any business looking to increase user engagement, customer retention, or employee motivation can benefit from gamification. This includes SaaS companies, e-learning platforms, mobile apps, retail businesses, healthcare organizations, fitness apps, HR departments, and marketing teams. GameLayer works across all industries and use cases.'
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
