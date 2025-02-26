'use client';

import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useContactForm } from '@/hooks/useContactForm';
import Image from 'next/image';
export default function KitchenRemodel() {
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
								KITCHEN REMODEL
							</span>
							<h1 className="text-4xl md:text-5xl font-bold text-gray-900">
								Transform Your Kitchen With Our Expert Remodeling
							</h1>
							<p className="text-xl text-gray-600">
								Modern, functional kitchen design and renovation services. We
								create beautiful, efficient spaces tailored to your lifestyle
								and preferences.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<button
									onClick={openModal}
									className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
								>
									Request Free Quote
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
								src="/kitchen-remodel/hero.jpg"
								alt="Kitchen Remodel"
								fill
								className="object-cover"
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
								number: '500+',
								label: 'Kitchens Remodeled',
								icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
							},
							{
								number: '1000+',
								label: 'Happy Homeowners',
								icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
							},
							{
								number: '20+',
								label: 'Years of Experience',
								icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
							},
							{
								number: '15+',
								label: 'Design Awards',
								icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
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
						Why Choose Our Kitchen Remodeling Services
					</h2>
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
							<Image
								src="/kitchen-remodel/why-choose-us.png"
								alt="Kitchen Remodel"
								fill
								className="object-cover"
							/>
						</div>
						<div className="space-y-8">
							{[
								{
									title: 'Custom Design Solutions',
									description:
										'Our designers work closely with you to create a kitchen that perfectly matches your style, needs, and budget. Every aspect is carefully planned to maximize functionality and aesthetic appeal.',
								},
								{
									title: 'Quality Craftsmanship',
									description:
										'We use only premium materials and employ skilled craftsmen to ensure that your kitchen remodel is built to last. Our attention to detail sets us apart from other remodeling companies.',
								},
								{
									title: 'End-to-End Project Management',
									description:
										'From initial design to final walkthrough, our team handles all aspects of your kitchen remodel. We coordinate permits, inspections, and all subcontractors to ensure a smooth process.',
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
								Get Free Design Consultation
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
							Comprehensive Kitchen Remodeling Services
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							We offer a full range of kitchen renovation services to transform
							your space into the kitchen of your dreams.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								title: 'Full Kitchen Renovation',
								description:
									'Complete kitchen overhaul including layout changes, cabinets, countertops, flooring, and appliances.',
							},
							{
								title: 'Cabinet Replacement',
								description:
									'Update your kitchen with new custom cabinets or cabinet refacing for a fresh look.',
							},
							{
								title: 'Countertop Installation',
								description:
									'Premium countertop materials including granite, quartz, marble, and eco-friendly options.',
							},
							{
								title: 'Kitchen Island Design',
								description:
									'Custom kitchen islands to add functionality, storage, and a focal point to your kitchen.',
							},
							{
								title: 'Lighting Solutions',
								description:
									'Modern lighting design including recessed, pendant, under-cabinet, and ambient lighting options.',
							},
							{
								title: 'Appliance Installation',
								description:
									'Expert installation of all kitchen appliances with proper ventilation and connections.',
							},
						].map((service, index) => (
							<div
								key={index}
								className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
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
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									{service.title}
								</h3>
								<p className="text-gray-600">{service.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
							OUR PROCESS
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							How We Transform Your Kitchen
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Our streamlined process ensures a smooth kitchen renovation
							experience from start to finish.
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<div className="space-y-12">
							{[
								{
									number: '01',
									title: 'Initial Consultation',
									description:
										'We meet to discuss your vision, needs, and budget. Our designers will take measurements and assess your current kitchen.',
								},
								{
									number: '02',
									title: 'Design Development',
									description:
										'Our team creates detailed 3D renderings and plans for your kitchen remodel, incorporating your feedback along the way.',
								},
								{
									number: '03',
									title: 'Material Selection',
									description:
										'We help you select the perfect cabinets, countertops, flooring, fixtures, and appliances for your new kitchen.',
								},
								{
									number: '04',
									title: 'Construction Phase',
									description:
										'Our skilled craftsmen execute the remodel according to plan, with regular updates and minimal disruption to your home.',
								},
								{
									number: '05',
									title: 'Final Walkthrough',
									description:
										'We review the completed kitchen together, ensuring every detail meets our high standards and your expectations.',
								},
							].map((step, index) => (
								<div key={index} className="flex gap-6">
									<div className="flex-shrink-0">
										<div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
											{step.number}
										</div>
									</div>
									<div className="space-y-2">
										<h3 className="text-xl font-bold text-gray-900">
											{step.title}
										</h3>
										<p className="text-gray-600">{step.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
							GALLERY
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Our Kitchen Transformations
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Browse our portfolio of beautiful kitchen remodeling projects
							we&apos;ve completed.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{Array.from({ length: 6 }).map((_, index) => (
							<div
								key={index}
								className="relative aspect-[4/3] rounded-xl overflow-hidden"
							>
								<Image
									src={`/kitchen-remodel/gallery${index + 1}.jpg`}
									alt="Kitchen Remodel"
									fill
									className="object-cover"
								/>
								<span className="text-white text-lg font-medium">
									Kitchen Image {index + 3}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-16">
						<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
							TESTIMONIALS
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							What Our Clients Say
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Read what our satisfied clients have to say about their kitchen
							remodeling experience.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								content:
									'Cecilia Home transformed our outdated kitchen into a modern, functional space that has become the heart of our home. Their attention to detail and craftsmanship exceeded our expectations.',
								author: 'Jennifer Davis',
								role: 'Homeowner, Concord',
							},
							{
								content:
									'Working with the design team was a breeze. They listened to our needs and created a kitchen that works perfectly for our family. The project was completed on time and on budget.',
								author: 'Michael Chen',
								role: 'Property Owner, Walnut Creek',
							},
							{
								content:
									'The quality of workmanship is outstanding. Every detail was carefully executed, and the team was professional and courteous throughout the entire process.',
								author: 'Amanda Rodriguez',
								role: 'Homeowner, Pleasant Hill',
							},
							{
								content:
									'We appreciated how transparent the team was about costs and timeline. There were no surprises, and the final result is a kitchen that looks even better than we imagined.',
								author: 'David Thompson',
								role: 'Real Estate Investor, Concord',
							},
							{
								content:
									'The custom cabinets and island designed for our space make our kitchen both beautiful and incredibly functional. We receive compliments from everyone who visits.',
								author: 'Elizabeth Warren',
								role: 'Homeowner, Lafayette',
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
							Ready to Transform Your Kitchen?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Contact us today to schedule a free design consultation and
							estimate for your kitchen remodeling project.
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
