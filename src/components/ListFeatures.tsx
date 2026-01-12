import Image from "next/image";

import { Container } from "@/components/Container";
import seoImage1 from "@/images/features/Elastic-Search.svg";
import rtlImage1 from "@/images/features/rtl.svg";
import HierarchyImage1 from "@/images/features/Hierarchy.svg";
import gutenbergImage1 from "@/images/features/Blocks-Icon.svg";
import cmsImage1 from "@/images/features/CMS.svg";
import wpgraphqlImage2 from "@/images/features/WPGraphQL.svg";
import DevImage from "@/images/features/Dev.svg";
import nextjsfrontendImage from "@/images/features/nextjs-frontend.svg";
import SpeedometerImage from "@/images/features/Speedometer-Icon.svg";

const featuresLists = [
  [
    {
      content:
        "Unlock new opportunities for WordPress. Your frontend is built entirely with Nextjs 15, offering great power, flexibility, and user interaction.",
      author: {
        name: "Next.js 15 frontend",
        role: " Next.js frontend for WordPress.",
        image: nextjsfrontendImage,
      },
    },
    {
      content:
        "Pages built with Next.js's ISR feature will help the site load quickly. Achieve up to 10x performance with global CDN, the fastest WordPress TTFB scores.",
      author: {
        name: "High-performance & Speed",
        role: "Page load speed increased by 10x with Next.js's ISR feature.",
        image: SpeedometerImage,
      },
    },
    {
      content:
        "The website is designed with a modern, beautiful and consistent UI. Meticulously designed and functional pages provide great user interaction.",
      author: {
        name: "The look of 2026",
        role: "The website is designed with a modern, beautiful and consistent UI",
        image: gutenbergImage1,
      },
    },
  ],
  [
    {
      content:
        "SSG generates static HTML files for your pages at build time, which is ideal for SEO as it ensures fast page loads and indexability by search engines. Also, fast page loading and mobile responsive design also help with SEO.",
      author: {
        name: "SEO Friendly",
        role: "SEO friendly, Google loves Next.js",
        image: seoImage1,
      },
    },
    {
      content:
        "The homepages are built entirely of pre-built Gutenberg blocks. Intuitive and easy to customize will make it easier for you to build your homepage.",
      author: {
        name: "Gutenberg blocks",
        role: "Gutenberg ready.",
        image: HierarchyImage1,
      },
    },
    {
      content:
        "An optional, super fast, Next.js-based framework for bringing common WordPress features like previews and page template hierarchy.",
      author: {
        name: "Faust.js framework",
        role: "Faust.js framework.",
        image: DevImage,
      },
    },
  ],
  [
    {
      content:
        "As an admin, you still manage everything on your site with the WordPress admin page. No need to learn anything else, everything is still as familiar as before.",
      author: {
        name: "WordPress CMS",
        role: "WordPress CMS",
        image: cmsImage1,
      },
    },
    {
      content:
        "Graphql and the WPGraphQL Smart Cache plugin will help speed up query optimization. Reduce the pressure on your server.",
      author: {
        name: "GraphQL & Smart Cache",
        role: "WPGraphQL Smart Cache.",
        image: wpgraphqlImage2,
      },
    },

    {
      content:
        "The theme supports Right to Left mode. This will help your users feel more comfortable when experiencing the site.",
      author: {
        name: "RTL Support",
        role: "Right to left language support.",
        image: rtlImage1,
      },
    },
  ],
];

function QuoteIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}

export function ListFeatures() {
  return (
    <section
      id="technologies"
      aria-label="Ncmaz - Nextjs headless WordPress features"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400" />
              <span className="relative">Technology highlights</span>
            </span>{" "}
            make people fascinated 🥰{" "}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {`Ncmaz - Next.js Headless WordPress! Points that make people fall in love. Let's take a look at some highlights of the theme.`}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {featuresLists.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <div className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <div className="relative pb-8">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-14 w-14"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <div className="font-display text-xl font-semibold text-slate-900">
                          {testimonial.author.name}
                        </div>
                        <p className="mt-4 text-base text-slate-800">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function SwirlyDoodle(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      preserveAspectRatio="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  );
}
