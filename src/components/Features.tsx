'use client';

export default function Features() {
	const features = [
		{
			title: 'Licensed Professional Engineers',
			description:
				'Our team of California licensed Professional Engineers (PE) brings over 15 years of expertise in structural and architectural design. Every project is overseen by a licensed PE to ensure safety and compliance.',
			icon: (
				<svg
					className="w-8 h-8 text-blue-600"
					xmlns="http://www.w3.org/2000/svg"
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
			),
		},
		{
			title: 'Rapid Response',
			description:
				'24-48 hour response time guaranteed. We understand urgency, especially in fire restoration projects. Our streamlined process ensures quick turnaround without compromising quality.',
			icon: (
				<svg
					className="w-8 h-8 text-blue-600"
					xmlns="http://www.w3.org/2000/svg"
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
			),
		},
		{
			title: 'End-to-End Service',
			description:
				'From concept to completion, we handle everything: architectural design, structural engineering, permit applications, and coordination with contractors. One team, one point of contact, zero hassle.',
			icon: (
				<svg
					className="w-8 h-8 text-blue-600"
					xmlns="http://www.w3.org/2000/svg"
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
			),
		},
		{
			title: 'Permit Expertise',
			description:
				'95% first-time permit approval rate. Our deep understanding of California building codes and relationships with local authorities ensures smooth permit processes for both residential and commercial projects.',
			icon: (
				<svg
					className="w-8 h-8 text-blue-600"
					xmlns="http://www.w3.org/2000/svg"
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
			),
		},
		{
			title: 'Comprehensive Design Solutions',
			description:
				'Full-service design capabilities including architectural, structural, and landscape design. We specialize in modern California aesthetics while prioritizing functionality and sustainability.',
			icon: (
				<svg
					className="w-8 h-8 text-blue-600"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
					/>
				</svg>
			),
		},
		{
			title: 'Local Experience',
			description:
				"Based in California, we've successfully completed 2000+ projects across the state. Our local expertise ensures designs that not only meet codes but also suit California's unique environmental and seismic requirements.",
			icon: (
				<svg
					className="w-8 h-8 text-blue-600"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
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
			),
		},
	];

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
						CORE COMPETENCIES
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Professional Excellence in
						<span className="block mt-2">
							Architectural Design & Engineering
						</span>
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						With over 15 years of experience in California&apos;s architectural
						landscape, we combine technical expertise with innovative design
						solutions. Our comprehensive approach ensures your project&apos;s
						success from concept to completion.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
						>
							<div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
								{feature.icon}
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								{feature.title}
							</h3>
							<p className="text-gray-600 leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
