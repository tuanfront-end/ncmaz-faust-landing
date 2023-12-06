import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { BUY_LINK, DEMO_PAGE_LINK, PRICE } from '@/constants'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-28"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {`It’s time to improve your website. Buy the Ncmaz theme so you can feel
            like you’re doing something productive.`}
          </p>

          <div className="mt-10 flex justify-center gap-x-6">
            <Button
              color="white"
              variant="solid"
              target="_blank"
              href={BUY_LINK}
            >
              <span>
                Buy now
                <span className="hidden sm:inline"> for {PRICE}</span>
              </span>
            </Button>
            <Button
              color="slate"
              href={DEMO_PAGE_LINK}
              variant="solid"
              target="_blank"
            >
              <svg
                aria-hidden="true"
                className="h-3 w-3 flex-none fill-blue-50 group-active:fill-current"
              >
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
              </svg>
              <span className="ml-3">
                <span className="hidden sm:inline">Live preview</span> demo
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
