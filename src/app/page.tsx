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
