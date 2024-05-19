import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { DOCS_LINK, SUPPORT_LINK } from '@/constants'

const faqs = [
  [
    {
      question: 'Do I need 2 hosting and 2 domains to host my website?',
      answer: (
        <div>
          <p>
            Certainly, in the context of a Next.js website with a headless
            WordPress setup, you will typically need two separate hosting
            environments and two domain names to host your website effectively:
          </p>
          <ol>
            <li>
              <p>
                <strong>Front-end Next.js</strong>: This is the user interface
                portion of your website, built using Next.js. The front-end will
                be hosted on one server (hosting environment) and may use a
                dedicated domain name.
              </p>
            </li>
            <li>
              <p>
                <strong>Back-end WordPress</strong>: WordPress serves as a
                content management system (CMS) and provides the API for your
                website&apos;s data. WordPress will be hosted on a different
                server (hosting environment) and may use a separate domain name.
              </p>
            </li>
          </ol>
          <p>So, you will need:</p>
          <ul>
            <li>
              <p>
                <strong>Hosting for the Front-end Next.js</strong>: This is
                where you will store the source code and files for your Next.js
                website. You can use a hosting service or a virtual server to
                deploy Next.js. You will configure your own domain name for the
                front-end.
              </p>
            </li>
            <li>
              <p>
                <strong>Hosting for the Back-end WordPress</strong>: WordPress
                will be hosted on a separate server. This could be the same
                server with your WordPress installation or a dedicated server
                for your WordPress project. You will also configure your domain
                name for the back-end.
              </p>
            </li>
          </ul>

          <p>
            You can use a subdomain for the front-end and the main domain for
            the back-end. For example: <code>app.example.com</code> and{' '}
            <code>example.com</code>.
          </p>
          <br />
          <p>
            🔥 If you feel it is complicated, you should consider{' '}
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Vercel
            </a>
            . Now you only need WordPress and{' '}
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Vercel
            </a>
            . Vercel will provide you with hosting and a free domain included.
            You can deploy your Next.js website with Vercel in a few clicks.
          </p>
        </div>
      ),
    },
  ],
  [
    {
      question: 'Documentation and support?',
      answer: (
        <div>
          Please check out our{' '}
          <a
            className="font-medium underline"
            href="${DOCS_LINK}"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation
          </a>{' '}
          and if you still have questions, please email us or open a{' '}
          <a
            className="font-medium underline"
            href="${SUPPORT_LINK}"
            target="_blank"
            rel="noopener noreferrer"
          >
            ticket
          </a>{' '}
          and we will get back to you.
        </div>
      ),
    },
    {
      question: 'Do I need to know about Next.js to use the theme?',
      answer: (
        <div>
          It would be great if you were a Next.js/React developer, which will
          help you to customize the theme to your liking. However, if you are an
          end-user and you just want to use it as a normal theme, you do not
          need to have knowledge of Nextjs or Javascript. You just need to
          administrate your website on the WordPress admin page.
        </div>
      ),
    },
    {
      question: 'How do I manage my website?',
      answer: (
        <div>
          You still administer your site on your WordPress admin page. No need
          to learn anything else and everything is as familiar and easy as
          before.
        </div>
      ),
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-24"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, please{' '}
            <a
              className="font-medium underline"
              href="mailto:nghiaxchis@gmail.com"
            >
              email us
            </a>{' '}
            and we will get back to you as soon as possible.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <div className="prose mt-4 text-sm text-slate-700">
                      {faq.answer}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
