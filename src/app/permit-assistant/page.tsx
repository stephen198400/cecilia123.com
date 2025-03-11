'use client';

import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import WhyChooseUs from '@/components/WhyChooseUs';
import { useContactForm } from '@/hooks/useContactForm';
import Image from 'next/image';

export default function PermitAssistant() {
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
								PERMIT ASSISTANCE
							</span>
							<h1 className="text-4xl md:text-5xl font-bold text-gray-900">
								Professional Building Permit Application Services
							</h1>
							<p className="text-xl text-gray-600">
								Let us handle the complex permit application process while you
								focus on your design. Our expert team manages all city
								communications, documentation, and revisions for a smooth
								approval process.
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
								src="https://images.unsplash.com/photo-1433840496881-cbd845929862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnQlMjBkcmF3aW5nJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwwfHx8fDE3NDE3MjgxNjN8MA&ixlib=rb-4.0.3&q=80&w=1080"
								alt="Architectural Drawings and Plans"
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
								src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MjExNTR8MHwxfHNlYXJjaHwyfHxhcmNoaXRlY3R1cmUlMjBwZXJtaXQlMjBvZmZpY2UlMjBidWlsZGluZyUyMGNpdHklMjBoYWxsJTIwZG9jdW1lbnR8ZW58MHx8fHwxNzQxNzI3NzY5fDA&ixlib=rb-4.0.3&q=80&w=1080"
								alt="Experienced Permit Team"
								fill
								className="object-cover rounded-xl"
							/>
						</div>

						{/* Content Column - Now Second */}
						<div className="space-y-6">
							<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
								OUR EXPERTISE
							</span>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
								Streamlined Permit Application Process
							</h2>
							<p className="text-lg text-gray-600">
								With over 15 years of experience in building permit applications
								and city regulations, we&apos;ve successfully helped hundreds of
								California property owners navigate the complex permit process.
								Our team of experts ensures your applications are properly
								prepared and processed efficiently.
							</p>
							<div className="grid grid-cols-2 gap-6">
								<div className="p-6 bg-gray-50 rounded-xl">
									<div className="text-3xl font-bold text-blue-600 mb-2">
										1000+
									</div>
									<div className="text-gray-600">Permits Approved</div>
								</div>
								<div className="p-6 bg-gray-50 rounded-xl">
									<div className="text-3xl font-bold text-blue-600 mb-2">
										98%
									</div>
									<div className="text-gray-600">Success Rate</div>
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
							Comprehensive Permit Assistance
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							We handle every aspect of the permit application process, ensuring
							a smooth and efficient experience from start to finish.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
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
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Document Preparation
							</h3>
							<p className="text-gray-600">
								We prepare and organize all necessary documentation, including
								plans, calculations, and supporting materials required for
								permit submission.
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
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
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Application Management
							</h3>
							<p className="text-gray-600">
								We handle the entire application process, including submission
								timing, fee payments, and tracking application status through
								city departments.
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
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
										d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								City Communication
							</h3>
							<p className="text-gray-600">
								We act as your representative with city officials, attending
								meetings, responding to questions, and addressing any concerns
								that arise.
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
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
										d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Revision Management
							</h3>
							<p className="text-gray-600">
								We handle any necessary revisions or corrections requested by
								the city, ensuring quick turnaround and maintaining project
								momentum.
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
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
								Compliance Review
							</h3>
							<p className="text-gray-600">
								We ensure all submissions meet current building codes and local
								regulations, reducing the likelihood of rejection or delays.
							</p>
						</div>

						<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
							<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
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
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Timeline Management
							</h3>
							<p className="text-gray-600">
								We actively track and manage permit timelines, ensuring
								efficient processing and minimizing potential delays in your
								project schedule.
							</p>
						</div>
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
							How We Handle Your Permit Application
						</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Our streamlined process ensures efficient handling of your permit
							application from start to finish.
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<div className="space-y-12">
							{[
								{
									number: '01',
									title: 'Initial Review',
									description:
										'We review your project plans and requirements to determine the necessary permits and documentation needed.',
								},
								{
									number: '02',
									title: 'Document Preparation',
									description:
										'Our team prepares all required documentation, ensuring compliance with local building codes and regulations.',
								},
								{
									number: '03',
									title: 'Application Submission',
									description:
										'We submit your permit application and handle all necessary fees and administrative requirements.',
								},
								{
									number: '04',
									title: 'Progress Monitoring',
									description:
										'We actively track your application status and communicate with city officials to address any questions.',
								},
								{
									number: '05',
									title: 'Revision Management',
									description:
										'If revisions are needed, we handle all modifications and resubmissions to ensure quick approval.',
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

			{/* Why Choose Us Section */}
			<WhyChooseUs />

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Ready to Start Your Permit Application?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Let us handle the complex permit process while you focus on your
							project. Contact us for a free consultation today.
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
