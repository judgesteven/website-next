export default function PricingStructuredData() {
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
            'name': 'Pricing',
            'item': 'https://gamelayer.io/pricing'
          }
        ]
      },
      {
        '@type': 'Product',
        'name': 'GameLayer Gamification Platform',
        'description': 'AI-ready gamification platform, API, and microservice with transparent pricing plans',
        'brand': {
          '@type': 'Brand',
          'name': 'GameLayer'
        },
        'category': 'Software',
        'offers': [
          {
            '@type': 'Offer',
            'name': 'Starter Plan',
            'price': '100',
            'priceCurrency': 'EUR',
            'availability': 'https://schema.org/InStock',
            'validFrom': '2025-01-01',
            'description': 'Up to 1,000 users',
            'priceSpecification': {
              '@type': 'UnitPriceSpecification',
              'price': '100',
              'priceCurrency': 'EUR',
              'unitText': 'per month'
            }
          },
          {
            '@type': 'Offer',
            'name': 'Growth Plan',
            'price': '1000',
            'priceCurrency': 'EUR',
            'availability': 'https://schema.org/InStock',
            'validFrom': '2025-01-01',
            'description': 'Up to 25,000 users',
            'priceSpecification': {
              '@type': 'UnitPriceSpecification',
              'price': '1000',
              'priceCurrency': 'EUR',
              'unitText': 'per month'
            }
          },
          {
            '@type': 'Offer',
            'name': 'Scale Plan',
            'price': '2500',
            'priceCurrency': 'EUR',
            'availability': 'https://schema.org/InStock',
            'validFrom': '2025-01-01',
            'description': 'Up to 100,000 users',
            'priceSpecification': {
              '@type': 'UnitPriceSpecification',
              'price': '2500',
              'priceCurrency': 'EUR',
              'unitText': 'per month'
            }
          },
          {
            '@type': 'Offer',
            'name': 'Enterprise Plan',
            'price': '0',
            'priceCurrency': 'EUR',
            'availability': 'https://schema.org/InStock',
            'validFrom': '2025-01-01',
            'description': 'Unlimited users - Contact us for pricing',
            'priceSpecification': {
              '@type': 'UnitPriceSpecification',
              'price': '0',
              'priceCurrency': 'EUR',
              'unitText': 'Contact us'
            }
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is included in the 30-day free trial?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'The 30-day free trial includes access to all GameLayer features, up to 1,000 users, full API access, and email support. No credit card required to start.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can I change plans at any time?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate billing for the current month.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What happens if I exceed my user limit?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'If you exceed your plan limit, we will contact you to discuss upgrading. We never cut off service without notice and work with you to find the right solution.'
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
