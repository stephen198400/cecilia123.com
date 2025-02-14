import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title:
		'Cecilia Home - Professional Architectural Design & Engineering Services',
	description:
		'Leading architectural design and structural engineering firm in California. Specializing in fire restoration, structural engineering, and permit services. 20+ years of experience.',
	keywords: [
		'architectural design',
		'structural engineering',
		'fire restoration',
		'permit services',
		'California architect',
		'building design',
		'home renovation',
		'construction permits',
		'Bay Area architect',
		'Concord CA architect',
	],
	openGraph: {
		title:
			'Cecilia Home - Professional Architectural Design & Engineering Services',
		description:
			'Leading architectural design and structural engineering firm in California. Specializing in fire restoration, structural engineering, and permit services.',
		url: 'https://www.cecilia123.com',
		siteName: 'Cecilia Home',
		images: [
			{
				url: 'https://www.cecilia123.com/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Cecilia Home - Professional Architectural Design Services',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title:
			'Cecilia Home - Professional Architectural Design & Engineering Services',
		description:
			'Leading architectural design and structural engineering firm in California. Specializing in fire restoration, structural engineering, and permit services.',
		images: ['https://www.cecilia123.com/og-image.jpg'],
	},
	alternates: {
		canonical: 'https://www.cecilia123.com',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code', // 需要替换为实际的 Google 验证码
	},
};

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header enableTransparency={true} />
			<Hero />
			<Features />
			<Projects />
			<Team />
			<WhyChooseUs />
			<Testimonials />
			<FAQ />
			<CTA />
			<Footer />
		</main>
	);
}
