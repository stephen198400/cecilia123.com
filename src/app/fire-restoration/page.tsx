'use client';

import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhyChooseUs from '@/components/WhyChooseUs';
import { useContactForm } from '@/hooks/useContactForm';
import Image from 'next/image';
import Link from 'next/link';

export default function FireRestoration() {
	const { isOpen, openModal, closeModal } = useContactForm();

	return (
		<main className="min-h-screen">
			<Header />
			<ContactForm isOpen={isOpen} closeModal={closeModal} />

			{/* Hero Section */}
			<section className="pt-32 pb-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Column - Content */}
						<div className="space-y-6">
							<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
								REBUILD STRONGER
							</span>
							<h1 className="text-4xl md:text-5xl font-bold text-gray-900">
								Comprehensive Fire Damage Restoration & Rebuilding
							</h1>
							<p className="text-xl text-gray-600">
								From initial damage assessment to complete restoration and
								rebuilding, we provide end-to-end solutions for your
								fire-damaged property. Our expert team ensures your property is
								restored to its pre-loss condition or better.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<button
									onClick={openModal}
									className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
								>
									Get Free Consultation
								</button>
								<a
									href="tel:(510)909-1933"
									className="px-8 py-4 border border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
									(510) 909-1933
								</a>
							</div>
						</div>

						{/* Right Column - Image */}
						<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
							<Image
								src="/fire-restoration/hero.jpg"
								alt="Fire Restoration Services"
								fill
								className="object-cover"
								priority
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent" />
						</div>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Image Column - Now First */}
						<div className="relative aspect-square">
							<Image
								src="/fire-restoration/teams.webp"
								alt="Fire Restoration Expert Team"
								fill
								className="object-cover rounded-xl"
							/>
						</div>

						{/* Content Column - Now Second */}
						<div className="space-y-6">
							<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
								OUR EXPERIENCE
							</span>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
								15+ Years of Fire Restoration Expertise
							</h2>
							<p className="text-lg text-gray-600">
								With over 15 years of experience in fire damage restoration and
								structural engineering, we&apos;ve successfully helped hundreds
								of California homeowners rebuild after wildfires. Our team of
								certified engineers and restoration experts ensures your
								property is restored to its pre-loss condition or better.
							</p>
							<div className="grid grid-cols-2 gap-6">
								<div className="p-6 bg-gray-50 rounded-xl">
									<div className="text-3xl font-bold text-blue-600 mb-2">
										500+
									</div>
									<div className="text-gray-600">Fire Restoration Projects</div>
								</div>
								<div className="p-6 bg-gray-50 rounded-xl">
									<div className="text-3xl font-bold text-blue-600 mb-2">
										95%
									</div>
									<div className="text-gray-600">
										Insurance Claim Success Rate
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
							OUR SERVICES
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Comprehensive Fire Restoration Services
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							From initial inspection to complete restoration, we provide
							end-to-end services to help you recover from fire damage.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
							<Link href="/services/fire-damage-restoration" className="block">
								<div className="relative h-64 rounded-t-xl overflow-hidden">
									<Image
										src="/fire-restoration/fired-house.webp"
										alt="Fire Damage Restoration"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
							</Link>
							<div className="p-8">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg
											className="w-6 h-6 text-blue-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-bold text-gray-900">
										Fire Damage Restoration
									</h3>
								</div>
								<p className="text-gray-600 mb-6">
									Complete restoration services including structural repairs,
									smoke damage cleanup, and reconstruction of damaged areas.
								</p>
								<Link
									href="/services/fire-damage-restoration"
									className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
								>
									Learn More
									<svg
										className="w-4 h-4 ml-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</Link>
							</div>
						</div>

						<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
							<Link href="/services/structural-inspection" className="block">
								<div className="relative h-64 rounded-t-xl overflow-hidden">
									<Image
										src="/fire-restoration/inspection.jpg"
										alt="Structural Inspection"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
							</Link>
							<div className="p-8">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg
											className="w-6 h-6 text-blue-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-bold text-gray-900">
										Structural Inspection
									</h3>
								</div>
								<p className="text-gray-600 mb-6">
									Thorough foundation and structural inspections by certified
									engineers, with detailed reports for insurance claims.
								</p>
								<Link
									href="/services/structural-inspection"
									className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
								>
									Learn More
									<svg
										className="w-4 h-4 ml-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</Link>
							</div>
						</div>

						<div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all group">
							<Link href="/services/tesla-fire-protection" className="block">
								<div className="relative h-64 rounded-t-xl overflow-hidden">
									<Image
										src="/fire-restoration/tesla.jpg"
										alt="Tesla Fire Protection"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
								</div>
							</Link>
							<div className="p-8">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
										<svg
											className="w-6 h-6 text-blue-600"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M13 10V3L4 14h7v7l9-11h-7z"
											/>
										</svg>
									</div>
									<h3 className="text-xl font-bold text-gray-900">
										Tesla Fire Protection
									</h3>
								</div>
								<p className="text-gray-600 mb-6">
									Specialized in-car fire extinguishing systems for Tesla
									vehicles, providing added safety and peace of mind.
								</p>
								<Link
									href="/services/tesla-fire-protection"
									className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
								>
									Learn More
									<svg
										className="w-4 h-4 ml-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<WhyChooseUs />

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Ready to Restore Your Property?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Get a professional assessment and detailed restoration plan.
							Contact us for a free consultation today.
						</p>
						<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
							<button
								onClick={openModal}
								className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
							>
								Schedule Free Inspection
							</button>
							<a
								href="tel:(510)909-1933"
								className="w-full sm:w-auto px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-400 transition-colors flex items-center justify-center gap-2"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								(510) 909-1933
							</a>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
