export default function ReferencesStructuredData() {
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
            'name': 'References',
            'item': 'https://gamelayer.io/references'
          }
        ]
      },
      {
        '@type': 'CollectionPage',
        'name': 'GameLayer Customer Success Stories',
        'description': 'Real-world GameLayer success stories from leading businesses',
        'url': 'https://gamelayer.io/references',
        'mainEntity': {
          '@type': 'ItemList',
          'name': 'Customer Success Stories',
          'description': 'Case studies and success stories from GameLayer customers',
          'numberOfItems': 8,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'item': {
                '@type': 'CaseStudy',
                'name': 'Baaz - Mobile App Engagement',
                'description': 'Increased user engagement by 45% with gamification features',
                'about': {
                  '@type': 'Organization',
                  'name': 'Baaz'
                },
                'result': '45% increase in user engagement'
              }
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'item': {
                '@type': 'CaseStudy',
                'name': 'Checkpoints - Learning Platform',
                'description': 'Improved course completion rates by 60%',
                'about': {
                  '@type': 'Organization',
                  'name': 'Checkpoints'
                },
                'result': '60% improvement in course completion'
              }
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'item': {
                '@type': 'CaseStudy',
                'name': 'Dubbz - Social Platform',
                'description': 'Boosted daily active users by 35%',
                'about': {
                  '@type': 'Organization',
                  'name': 'Dubbz'
                },
                'result': '35% increase in daily active users'
              }
            },
            {
              '@type': 'ListItem',
              'position': 4,
              'item': {
                '@type': 'CaseStudy',
                'name': 'Finnair - Customer Loyalty',
                'description': 'Enhanced customer retention with loyalty program',
                'about': {
                  '@type': 'Organization',
                  'name': 'Finnair'
                },
                'result': 'Improved customer retention'
              }
            },
            {
              '@type': 'ListItem',
              'position': 5,
              'item': {
                '@type': 'CaseStudy',
                'name': 'Points - Rewards System',
                'description': 'Streamlined rewards and points management',
                'about': {
                  '@type': 'Organization',
                  'name': 'Points'
                },
                'result': 'Streamlined rewards system'
              }
            },
            {
              '@type': 'ListItem',
              'position': 6,
              'item': {
                '@type': 'CaseStudy',
                'name': 'Reima Group - Employee Engagement',
                'description': 'Increased employee motivation and productivity',
                'about': {
                  '@type': 'Organization',
                  'name': 'Reima Group'
                },
                'result': 'Increased employee motivation'
              }
            },
            {
              '@type': 'ListItem',
              'position': 7,
              'item': {
                '@type': 'CaseStudy',
                'name': 'SalesPoints - Sales Performance',
                'description': 'Improved sales team performance and motivation',
                'about': {
                  '@type': 'Organization',
                  'name': 'SalesPoints'
                },
                'result': 'Improved sales performance'
              }
            },
            {
              '@type': 'ListItem',
              'position': 8,
              'item': {
                '@type': 'CaseStudy',
                'name': 'Symbaloo - User Engagement',
                'description': 'Enhanced user engagement and platform interaction',
                'about': {
                  '@type': 'Organization',
                  'name': 'Symbaloo'
                },
                'result': 'Enhanced user engagement'
              }
            }
          ]
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What results can I expect from GameLayer?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Based on our customer success stories, you can expect to see 25-60% increases in user engagement, 25-40% improvements in customer retention, and significant boosts in user activity and platform interaction.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How quickly do customers see results?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Most customers see initial results within the first week of implementation, with significant improvements typically visible within 30-60 days of deployment.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Do you have case studies for my industry?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'GameLayer works across all industries including mobile apps, e-learning, social platforms, airlines, retail, and enterprise software. Contact us to discuss your specific use case.'
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
