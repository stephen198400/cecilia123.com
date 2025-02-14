'use client';

import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useContactForm } from '@/hooks/useContactForm';
import Image from 'next/image';

export default function FireDamageRestoration() {
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
								FIRE DAMAGE RESTORATION
							</span>
							<h1 className="text-4xl md:text-5xl font-bold text-gray-900">
								Professional Fire Damage Restoration Services
							</h1>
							<p className="text-xl text-gray-600">
								Comprehensive restoration services to help you recover from fire
								damage. Our expert team ensures thorough cleanup, repair, and
								reconstruction.
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
						<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
							<Image
								src="/fire-damage-restoration/hero.webp"
								alt="Fire Damage Restoration Service"
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
								icon: 'M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2',
							},
							{
								number: '1000+',
								label: 'Clients',
								icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
							},
							{
								number: '20+',
								label: 'Years of experience',
								icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
							},
							{
								number: '20+',
								label: 'Team Members',
								icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
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
						Why Choose Cecilia Home for Fire Damage Restoration?
					</h2>
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
							<Image
								src="/fire-damage-restoration/teams.webp"
								alt="Fire Damage Structural Inspection"
								fill
								className="object-cover"
							/>
						</div>
						<div className="space-y-8">
							{[
								{
									title: 'Professional Architectural Design',
									description:
										'Our team of experienced architects specializes in post-fire reconstruction, combining safety requirements with modern design aesthetics to create a better living space than before.',
								},
								{
									title: 'Comprehensive Project Management',
									description:
										'We handle the entire reconstruction process, from initial assessment to final decoration, ensuring seamless coordination between different construction phases and strict quality control.',
								},
								{
									title: 'Modern Building Technologies',
									description:
										'We incorporate advanced fire-resistant materials and smart home technologies in the reconstruction process, enhancing both safety features and living comfort for your new home.',
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

			{/* Features Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
							<Image
								src="/fire-damage-restoration/features.png"
								alt="Fire Damage Restoration Features"
								fill
								className="object-cover"
							/>
						</div>
						<div className="space-y-8">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
								Our Service Features
							</h2>
							<div className="space-y-6">
								{[
									{
										title: '24/7 Emergency Response',
										description:
											'Available around the clock for immediate assistance when you need it most.',
									},
									{
										title: 'Certified Professionals',
										description:
											'Our team consists of certified restoration specialists with extensive experience.',
									},
									{
										title: 'Advanced Equipment',
										description:
											'Using state-of-the-art equipment and techniques for effective restoration.',
									},
									{
										title: 'Insurance Assistance',
										description:
											'We work directly with insurance companies to streamline the claims process.',
									},
								].map((feature, index) => (
									<div key={index} className="flex gap-4">
										<div className="w-6 h-6 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
											<svg
												className="w-4 h-4 text-blue-600"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M5 13l4 4L19 7"
												/>
											</svg>
										</div>
										<div>
											<h3 className="text-xl font-bold text-gray-900 mb-2">
												{feature.title}
											</h3>
											<p className="text-gray-600">{feature.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
							TESTIMONIALS
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							What Our Clients Say
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Read about real experiences from our satisfied clients across
							California.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								rating: 5,
								content:
									"After a devastating fire damaged our home, Cecilia Home's team provided exceptional restoration services. Their attention to detail and expertise in architectural design helped us rebuild even better than before.",
								author: 'Michael Chen',
								location: 'San Francisco',
								date: 'March 2024',
							},
							{
								rating: 5,
								content:
									"The fire damage to our property was extensive, but Cecilia Home's professional team guided us through every step of the restoration process. Their knowledge of building codes and insurance requirements was invaluable.",
								author: 'Sarah Rodriguez',
								location: 'San Jose',
								date: 'February 2024',
							},
							{
								rating: 5,
								content:
									'Working with Cecilia Home on our fire restoration project was a great decision. They not only restored our property but also implemented modern safety features and design improvements.',
								author: 'David Thompson',
								location: 'Sacramento',
								date: 'January 2024',
							},
							{
								rating: 5,
								content:
									"The team's expertise in handling fire damage restoration was impressive. They helped us navigate the insurance claims process and delivered exceptional results in rebuilding our home.",
								author: 'Jennifer Wu',
								location: 'Oakland',
								date: 'December 2023',
								className: 'hidden lg:block',
							},
							{
								rating: 5,
								content:
									"Cecilia Home's fire damage restoration service exceeded our expectations. Their attention to structural integrity and modern safety features gave us peace of mind throughout the rebuild.",
								author: 'Robert Martinez',
								location: 'Los Angeles',
								date: 'November 2023',
								className: 'hidden lg:block',
							},
							{
								rating: 5,
								content:
									"Professional, efficient, and thorough in their approach to fire damage restoration. The team's expertise in both design and construction made the rebuilding process much smoother.",
								author: 'Emily Parker',
								location: 'San Diego',
								date: 'October 2023',
								className: 'hidden lg:block',
							},
						].map((testimonial, index) => (
							<div
								key={index}
								className={`bg-white p-8 rounded-2xl shadow-sm ${
									testimonial.className || ''
								}`}
							>
								<div className="flex gap-1 mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<svg
											key={i}
											className="w-5 h-5 text-yellow-400"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="text-gray-600 mb-6">{testimonial.content}</p>
								<div className="flex justify-between items-center">
									<div>
										<h4 className="font-semibold text-gray-900">
											{testimonial.author}
										</h4>
										<p className="text-sm text-gray-500">
											{testimonial.location}
										</p>
									</div>
									<span className="text-sm text-gray-400">
										{testimonial.date}
									</span>
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
							Need Fire Damage Restoration?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Don&apos;t wait - the sooner you start the restoration process,
							the better the outcome. Contact us for immediate assistance.
						</p>
						<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
							<button
								onClick={openModal}
								className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
							>
								Get Free Consultation
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
