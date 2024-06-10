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

export default async function Home() {
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

export interface Root {
	id: number
	name: string
	number_of_sales: number
	author_username: string
	author_url: string
	url: string
	attributes: Attribute[]
	updated_at: string
	wordpress_theme_metadata: WordpressThemeMetadata
	wordpress_plugin_metadata: WordpressPluginMetadata
	description: string
	site: string
	classification: string
	classification_url: string
	price_cents: number
	author_image: string
	thumbnail_url: string
	summary: string
	rating_count: number
	published_at: string
	trending: boolean
	tags: string[]
	previews: Preview[]
}

export interface Attribute {
	name: string
	value: string
	label: string
}

export interface WordpressThemeMetadata {
	theme_name: string
	author: string
	version: string
	description: string
}

export interface WordpressPluginMetadata {
	plugin_name: string
	author: string
	version: string
	description: string
}

export interface Preview {
	type: string
	href: string
	small_url: string
	large_url: string
	large_width: number
	large_height: number
	icon_url: string
	landscape_url: string
	square_url: string
	mp3_url: string
	mp3_id: string
	length: string
	thumbnail_url: string
	thumbnail_width: number
	thumbnail_height: number
	video_url: string
}
