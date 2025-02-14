'use client';

import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useContactForm } from '@/hooks/useContactForm';
import Image from 'next/image';

export default function StructuralInspection() {
	const { isOpen, openModal, closeModal } = useContactForm();

	return (
		<main className="min-h-screen">
			<Header />
			<ContactForm isOpen={isOpen} closeModal={closeModal} />

			{/* Hero Section */}
			<section className="pt-32 pb-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
								STRUCTURAL INSPECTION
							</span>
							<h1 className="text-4xl md:text-5xl font-bold text-gray-900">
								Professional Structural Inspection Services
							</h1>
							<p className="text-xl text-gray-600">
								Expert structural inspections by certified engineers. We provide
								detailed reports and recommendations for your property&apos;s
								safety and insurance claims.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<button
									onClick={openModal}
									className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
								>
									Schedule Inspection
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
						<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
							<Image
								src="/structural-inspection/hero.webp"
								alt="Structural Inspection Service"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</section>
			{/* Stats Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<h3 className="text-center text-gray-600 mb-12">Our Track Record</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{[
							{
								number: '2000+',
								label: 'Projects',
								icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
							},
							{
								number: '1000+',
								label: 'Clients',
								icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
							},
							{
								number: '20+',
								label: 'Years of experience',
								icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
							},
							{
								number: '20+',
								label: 'Team Members',
								icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
							},
						].map((stat, index) => (
							<div key={index} className="text-center">
								<div className="flex justify-center mb-4">
									<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
										<svg
											className="w-6 h-6 text-blue-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d={stat.icon}
											/>
										</svg>
									</div>
								</div>
								<div className="text-3xl font-bold text-gray-900 mb-2">
									{stat.number}
								</div>
								<div className="text-gray-600">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
						Why Post-Fire Structural Inspection is Critical
					</h2>
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
							<Image
								src="/structural-inspection/fired-house.webp"
								alt="Fire Damage Structural Inspection"
								fill
								className="object-cover"
							/>
						</div>
						<div className="space-y-8">
							{[
								{
									title: 'Hidden Structural Damage',
									description:
										"Fire can severely compromise your building's structural integrity without visible signs. High temperatures can weaken steel reinforcements, crack concrete foundations, and deteriorate load-bearing elements.",
								},
								{
									title: 'Immediate Safety Concerns',
									description:
										'Unstable structures pose immediate risks of collapse. Our comprehensive assessment identifies potential hazards from compromised support beams, weakened floor joists, and damaged wall systems.',
								},
								{
									title: 'Insurance & Reconstruction Support',
									description:
										'Our detailed structural assessment reports are essential for insurance claims and reconstruction planning. Professional documentation helps expedite claims and ensures rebuilding meets safety standards.',
								},
							].map((item, index) => (
								<div key={index} className="space-y-3">
									<h3 className="text-xl font-bold text-gray-900">
										{item.title}
									</h3>
									<p className="text-gray-600">{item.description}</p>
								</div>
							))}
							<button
								onClick={openModal}
								className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
							>
								Get Free Consultation
							</button>
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
							Comprehensive Inspection Services
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							We provide thorough structural inspections for various needs,
							ensuring the safety and integrity of your property.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								title: 'Post-Fire Inspection',
								description:
									'Detailed assessment of structural damage after fire incidents.',
							},
							{
								title: 'Foundation Inspection',
								description:
									'Comprehensive evaluation of foundation integrity and stability.',
							},
							{
								title: 'Insurance Documentation',
								description:
									'Professional reports and documentation for insurance claims.',
							},
							{
								title: 'Safety Assessment',
								description:
									'Evaluation of structural safety and occupancy readiness.',
							},
							{
								title: 'Repair Consultation',
								description:
									'Expert recommendations for necessary structural repairs.',
							},
							{
								title: 'Code Compliance',
								description:
									'Verification of structural compliance with building codes.',
							},
						].map((service, index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
							>
								<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
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
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{service.title}
								</h3>
								<p className="text-gray-600">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="relative aspect-video rounded-2xl overflow-hidden">
							<Image
								src="/structural-inspection/teams.webp"
								alt="Our Engineering Team"
								fill
								className="object-cover"
							/>
						</div>
						<div className="grid sm:grid-cols-2 gap-8">
							{[
								{
									icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
									title: 'Licensed Engineers',
									description:
										'Our team of certified structural engineers brings decades of combined experience in California construction.',
								},
								{
									icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
									title: 'Advanced Technology',
									description:
										'State-of-the-art structural analysis tools and thermal imaging technology for precise assessments.',
								},
								{
									icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
									title: 'Insurance Reports',
									description:
										'Professional assessment reports designed to maximize your insurance claims, backed by certified engineers.',
								},
								{
									icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
									title: 'Free Consultation',
									description:
										'Free on-site inspection and consultation, followed by a comprehensive professional report for your property.',
								},
							].map((feature, index) => (
								<div key={index} className="space-y-4">
									<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
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
												d={feature.icon}
											/>
										</svg>
									</div>
									<h3 className="text-xl font-bold text-gray-900">
										{feature.title}
									</h3>
									<p className="text-gray-600">{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
							OUR PROCESS
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Our Restoration Process
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							We follow a comprehensive, step-by-step approach to ensure
							thorough restoration of your property.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
						{[
							{
								title: 'Free Online Consultation',
								description:
									'Schedule a free consultation to discuss your needs and requirements.',
							},
							{
								title: 'On-site Measurement',
								description:
									'Conduct on-site measurements and preliminary planning for your project.',
							},
							{
								title: 'Design & Restoration',
								description:
									'Execute design and restoration work while maintaining constant communication with clients.',
							},
							{
								title: 'Permit Application',
								description:
									'Assist clients with permit application process and documentation.',
							},
							{
								title: 'Project Handover',
								description:
									'Obtain permits and coordinate with client&apos;s contractor for smooth project transition.',
							},
						].map((step, index) => (
							<div
								key={index}
								className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
							>
								<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
									<span className="text-xl font-bold text-blue-600">
										{index + 1}
									</span>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{step.title}
								</h3>
								<p className="text-gray-600">{step.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
						What Our Clients Say
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								content:
									"After the recent fire damage to our commercial property, Cecilia Home's structural inspection team provided invaluable insights. Their detailed report helped us secure our insurance claim and plan the reconstruction effectively.",
								author: 'Michael Chen',
								role: 'Property Manager, Bay Area',
							},
							{
								content:
									'The thermal imaging technology they used revealed hidden structural issues we would have never found otherwise. Their thorough assessment potentially saved us from major future problems. Highly professional team!',
								author: 'Sarah Johnson',
								role: 'Homeowner, Concord',
							},
							{
								content:
									"As a real estate developer, I've worked with many inspection services, but Cecilia Home stands out. Their engineers are not only certified but also incredibly knowledgeable about California building codes and seismic requirements.",
								author: 'David Martinez',
								role: 'Real Estate Developer',
							},
							{
								content:
									'The post-earthquake inspection service was thorough and professional. They identified critical structural issues that needed immediate attention and provided clear recommendations for repairs.',
								author: 'Jennifer Wu',
								role: 'Building Owner, San Francisco',
							},
							{
								content:
									'Their expertise in seismic retrofitting assessment was exceptional. The team provided detailed documentation that helped us understand the necessary improvements to meet current safety standards.',
								author: 'Robert Taylor',
								role: 'Commercial Property Manager',
							},
							{
								content:
									"We needed urgent structural assessment after water damage. Their quick response and comprehensive report were crucial for our insurance claim. The team's professionalism exceeded our expectations.",
								author: 'Lisa Anderson',
								role: 'Restaurant Owner, Concord',
							},
						].map((testimonial, index) => (
							<div
								key={index}
								className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 ${
									index >= 3 ? 'hidden lg:block' : ''
								}`}
							>
								<div className="space-y-4">
									<svg
										className="w-8 h-8 text-blue-600"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
									</svg>
									<p className="text-gray-600 leading-relaxed">
										{testimonial.content}
									</p>
									<div className="pt-4 border-t border-gray-100">
										<p className="font-semibold text-gray-900">
											{testimonial.author}
										</p>
										<p className="text-sm text-gray-500">{testimonial.role}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Need a Professional Inspection?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Our certified engineers are ready to help ensure your
							property&apos;s structural integrity. Schedule an inspection
							today.
						</p>
						<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
							<button
								onClick={openModal}
								className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
							>
								Schedule Inspection
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
