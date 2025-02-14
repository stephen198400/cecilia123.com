'use client';

export default function WhyChooseUs() {
	const reasons = [
		{
			title: 'Professional Team',
			description:
				'Our licensed engineers and designers bring decades of combined experience to every project.',
			icon: (
				<svg
					className="w-6 h-6 text-blue-600"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			),
		},
		{
			title: 'Proven Track Record',
			description:
				'2000+ successful projects completed across California, with a 95% first-time permit approval rate.',
			icon: (
				<svg
					className="w-6 h-6 text-blue-600"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
					/>
				</svg>
			),
		},
		{
			title: 'Comprehensive Service',
			description:
				'From design to permits, we handle everything in-house, ensuring a seamless experience.',
			icon: (
				<svg
					className="w-6 h-6 text-blue-600"
					xmlns="http://www.w3.org/2000/svg"
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
			),
		},
		{
			title: 'Local Expertise',
			description:
				'Deep understanding of California building codes and regulations, ensuring smooth project execution.',
			icon: (
				<svg
					className="w-6 h-6 text-blue-600"
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
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100/80 rounded-full">
						WHY CHOOSE US
					</span>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Experience the Cecilia Home Difference
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						We combine technical expertise with personalized service to deliver
						exceptional results for every project.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{reasons.map((reason, index) => (
						<div
							key={index}
							className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-blue-500 transition-all duration-300"
						>
							<div className="mb-6 p-4 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 transition-colors duration-300">
								{reason.icon}
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								{reason.title}
							</h3>
							<p className="text-gray-600">{reason.description}</p>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<div className="grid md:grid-cols-4 gap-8">
						<div className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
							<div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
								2000+
							</div>
							<div className="text-gray-600">Projects Completed</div>
						</div>
						<div className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
							<div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
								95%
							</div>
							<div className="text-gray-600">Permit Approval Rate</div>
						</div>
						<div className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
							<div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
								10+
							</div>
							<div className="text-gray-600">Years Experience</div>
						</div>
						<div className="group p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
							<div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
								100%
							</div>
							<div className="text-gray-600">Client Satisfaction</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
