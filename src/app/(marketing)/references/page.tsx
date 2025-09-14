import type { Metadata } from 'next'
import { References } from '@/components/References'

export const metadata: Metadata = {
  title: 'GameLayer References - Customer Success Stories & Case Studies',
  description: 'Explore how businesses use GameLayer to increase user engagement and customer loyalty. Real-world gamification success stories and implementation examples.',
  openGraph: {
    title: 'GameLayer Customer Success Stories',
    description: 'See how businesses achieve success with GameLayer gamification',
  },
}

export default function ReferencesPage() {
  return <References />
}
