'use client';

import { useState } from 'react';

interface FAQItem {
	question: string;
	answer: string;
}

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const faqs: FAQItem[] = [
		{
			question: 'How long does the permit application process typically take?',
			answer:
				'The permit application process typically takes 2-4 weeks for residential projects and 4-8 weeks for commercial projects. However, this timeline can vary depending on the project complexity, location, and local jurisdiction requirements. Our team has established relationships with local authorities and a deep understanding of the process, which helps streamline the application and achieve our 95% first-time approval rate.',
		},
		{
			question: 'How many ADUs can I build on my property?',
			answer:
				'In California, you can typically build one ADU and one Junior ADU (JADU) on a single-family property. For multi-family properties, you may be able to build multiple ADUs depending on the lot size and local zoning regulations. Our team can assess your specific property and provide detailed guidance on your ADU options while ensuring compliance with local building codes and regulations.',
		},
		{
			question:
				'How do you determine if a foundation needs repair or reinforcement?',
			answer:
				'We conduct a comprehensive foundation assessment that includes visual inspection, structural analysis, and when necessary, soil testing. Our engineers look for signs such as cracks, settling, drainage issues, and seismic vulnerability. Based on these findings, we develop a detailed report with recommendations for repairs or reinforcement methods that ensure long-term stability and safety.',
		},
		{
			question:
				'What are the typical costs for structural engineering services?',
			answer:
				'Structural engineering costs vary based on project scope, complexity, and location. Basic consultations start at $500, while complete design services for residential projects typically range from $2,000 to $5,000. Commercial projects and complex structural modifications may range higher. We provide detailed cost estimates after initial consultation to ensure transparency and help you plan your budget effectively.',
		},
		{
			question: 'Do you provide construction oversight services?',
			answer:
				'Yes, we offer comprehensive construction oversight services to ensure your project is built according to specifications. This includes regular site visits, contractor coordination, quality control inspections, and documentation. Our oversight services help prevent costly mistakes, maintain project timeline, and ensure compliance with approved plans and building codes.',
		},
	];

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-12 gap-12">
					{/* Left Column - Title and Description */}
					<div className="lg:col-span-4 space-y-6">
						<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
							FAQ
						</span>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							Frequently Asked Questions
						</h2>
						<p className="text-lg text-gray-600">
							Find answers to common questions about our services, processes,
							and expertise.
						</p>
						<div className="pt-8">
							<p className="text-gray-600">
								Still have questions?{' '}
								<a
									href="/contact"
									className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
								>
									Contact us
								</a>{' '}
								for more information.
							</p>
						</div>
					</div>

					{/* Right Column - FAQ Items */}
					<div className="lg:col-span-8">
						<div className="space-y-4">
							{faqs.map((faq, index) => (
								<div key={index} className="bg-white rounded-xl shadow-sm">
									<button
										onClick={() =>
											setOpenIndex(openIndex === index ? null : index)
										}
										className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200 rounded-xl"
									>
										<span className="text-lg font-semibold text-gray-900 pr-8">
											{faq.question}
										</span>
										<span className="flex-shrink-0">
											<svg
												className={`w-6 h-6 text-blue-600 transform transition-transform duration-200 ${
													openIndex === index ? 'rotate-180' : ''
												}`}
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 9l-7 7-7-7"
												/>
											</svg>
										</span>
									</button>
									{openIndex === index && (
										<div className="px-6 py-4 border-t">
											<p className="text-gray-600 leading-relaxed">
												{faq.answer}
											</p>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
