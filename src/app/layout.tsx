import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  metadataBase: new URL('https://ncmaz-faust-landing.vercel.app/'),
  title: {
    template: '%s - Ncmaz - Next.js Headless CMS WordPress Blog Magazine',
    default: 'Ncmaz - Next.js Headless CMS WordPress Blog Magazine',
  },
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'WordPress',
    'Headless CMS',
    'Blog',
    'Magazine',
    'Tailwind CSS',
    'SEO',
    'PWA',
    'JAMstack',
    'Vercel',
    'Ncmaz',
    'Ncmaz - Next.js Headless CMS WordPress Blog Magazine',
  ],
  creator: 'ChisNghiax',
  authors: [
    {
      name: 'ChisNghiax',
      url: 'https://themeforest.net/user/chisnghiax/portfolio',
    },
  ],
  description:
    'Ncmaz - Next.js Headless CMS WordPress Blog Magazine. Ncmaz is a Next.js Headless CMS WordPress Blog Magazine. It is a high-quality, modern, and complete starter theme to quickly build a next.js headless CMS WordPress blog or magazine. It is super fast, light-weight, and SEO friendly. It is built with Next.js, TypeScript, Tailwind CSS, and integrates WordPress as a headless CMS.',
  openGraph: {
    title: 'Ncmaz - Next.js Headless CMS WordPress Blog Magazine',
    description:
      'Ncmaz - Next.js Headless CMS WordPress Blog Magazine. Ncmaz is a Next.js Headless CMS WordPress Blog Magazine. It is a high-quality, modern, and complete starter theme to quickly build a next.js headless CMS WordPress blog or magazine. It is super fast, light-weight, and SEO friendly. It is built with Next.js, TypeScript, Tailwind CSS, and integrates WordPress as a headless CMS.',
    type: 'website',
    url: 'https://ncmaz-faust-landing.vercel.app/',
    images: '/images/screenshots/home3-audio.png',
    siteName: 'Ncmaz - Next.js Headless CMS WordPress Blog Magazine',
  },
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    site: '@chisnghiax',
    title: 'Ncmaz - Next.js Headless CMS WordPress Blog Magazine',
    description: 'Ncmaz - Next.js Headless CMS WordPress Blog Magazine ',
    images: '/images/screenshots/home3-audio.png',
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="__adAnalytics flex h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
