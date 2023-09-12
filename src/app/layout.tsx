import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: {
    template: '%s - Ncmaz - Next.js Headless CMS WordPress Blog Magazine',
    default: 'Ncmaz - Next.js Headless CMS WordPress Blog Magazine',
  },
  description:
    'Ncmaz - Next.js Headless CMS WordPress Blog Magazine. Ncmaz is a Next.js Headless CMS WordPress Blog Magazine. It is a high-quality, modern, and complete starter theme to quickly build a next.js headless CMS WordPress blog or magazine. It is super fast, light-weight, and SEO friendly. It is built with Next.js, TypeScript, Tailwind CSS, and integrates WordPress as a headless CMS.',
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
      <body className="flex h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
