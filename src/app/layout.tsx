import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'GameLayer - Leading Gamification Platform & API',
  description: 'Enterprise gamification platform and API for building engaging user experiences',
  metadataBase: new URL('https://gamelayer.io'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    title: 'GameLayer - Leading Gamification Platform & API',
    description: 'Enterprise gamification platform and API for building engaging user experiences',
    url: 'https://gamelayer.io',
    siteName: 'GameLayer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        {/* Preload critical resources */}
        <link rel="preload" href="/gamelayer-logo.png" as="image" type="image/png" />
        <link rel="preload" href="/GameLayer_Logo_White.png" as="image" type="image/png" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-4T24BJP830'}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-4T24BJP830'}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}