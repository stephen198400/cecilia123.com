import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Team from '@/components/Team';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function About() {
	return (
		<main className="min-h-screen">
			<Header />
			<div className="pt-20">
				<section className="py-16 bg-white">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
								ABOUT US
							</span>
							<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Our Story & Mission
							</h1>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">
								Learn about our journey, our team, and our commitment to
								delivering excellence in architectural design and engineering
								services.
							</p>
						</div>

						{/* Team section */}
						<Team />

						{/* Why Choose Us section */}
						<WhyChooseUs />
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
