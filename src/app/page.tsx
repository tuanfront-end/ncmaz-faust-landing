import { Button } from '@/components/Button'
import { CallToAction } from '@/components/CallToAction'
import { Container } from '@/components/Container'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ListFeatures } from '@/components/ListFeatures'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import imagesAAAA from '@/images/wp4-light.avif'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <ListFeatures />
        <Faqs />
        <CallToAction />
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <Container className="relative">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                Conclusion
              </h2>

              <p className="mt-4 text-lg tracking-tight text-slate-700">
                Your new headless architecture built on WordPress and Vercel is
                now more flexible, resilient, and faster. Incremental Static
                Regeneration will keep your pages in sync with your WordPress
                content, which Vercel ensures your site is both reliable and
                fast.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl text-center">
              <Image src={imagesAAAA} alt="WordPress and Vercel" />
              <figcaption className="my-5 text-sm">
                Next.js ISR replicates and caches page content at the Edge for
                improved page load times.
              </figcaption>
            </div>

            <div className="mx-auto mt-10 max-w-3xl">
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border px-5 py-2.5">
                <h3>{`Couldn't find the guide you need?`}</h3>
                <Button variant="solid" href={'mailto:nghiaxchis@gmail.com'}>
                  View Help
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
