'use client';

import { useContactForm } from '@/hooks/useContactForm';
import Link from 'next/link';
import ContactForm from './ContactForm';

export default function CTA() {
	const { isOpen, openModal, closeModal } = useContactForm();

	return (
		<>
			<ContactForm isOpen={isOpen} closeModal={closeModal} />
			<section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Ready to Transform Your Space?
						</h2>
						<p className="text-xl text-blue-100 mb-8 leading-relaxed">
							From ADUs to structural engineering, we&apos;re here to bring your
							vision to life. Get started with a free consultation today.
						</p>

						<div className="grid md:grid-cols-2 gap-6 mb-12">
							<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
								<h3 className="text-xl font-semibold text-white mb-3">
									Quick Response Time
								</h3>
								<p className="text-blue-100">
									Get a response within 24-48 hours. We understand that your
									time is valuable.
								</p>
							</div>
							<div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
								<h3 className="text-xl font-semibold text-white mb-3">
									95% First-Time Approval
								</h3>
								<p className="text-blue-100">
									Our expertise ensures smooth permit processes and successful
									project outcomes.
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
							<button
								onClick={openModal}
								className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 text-lg"
							>
								Schedule Free Consultation
							</button>
							<Link
								href="tel:(510)909-1933"
								className="w-full sm:w-auto px-8 py-4 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-400 transition-colors duration-300 flex items-center justify-center gap-2 text-lg"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								(510) 909-1933
							</Link>
						</div>

						<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<span>1816 Enclave Place Concord CA 94519</span>
							</div>
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<a
									href="mailto:contact@ceciliahome.net"
									className="hover:text-white transition-colors"
								>
									contact@ceciliahome.net
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
