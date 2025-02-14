'use client';

interface Testimonial {
	id: number;
	name: string;
	city: string;
	content: string;
	rating: number;
	date: string;
}

export default function Testimonials() {
	const testimonials: Testimonial[] = [
		{
			id: 1,
			name: 'Michael Chen',
			city: 'San Francisco',
			content:
				'Mason helped us design and get permits for our ADU in just 3 weeks. His expertise with the local building department really showed - we got approved on our first submission. The whole process was smooth and professional.',
			rating: 5,
			date: 'March 2024',
		},
		{
			id: 2,
			name: 'Sarah Rodriguez',
			city: 'San Jose',
			content:
				'After the 2023 storms damaged our foundation, we were really worried about the structural integrity of our home. Cecilia Home did a thorough assessment and provided clear solutions. Their engineering team was knowledgeable and efficient.',
			rating: 5,
			date: 'February 2024',
		},
		{
			id: 3,
			name: 'David Thompson',
			city: 'Sacramento',
			content:
				'We needed to remove a load-bearing wall to create an open concept living space. The team provided detailed structural calculations and even helped coordinate with our contractor. The result is exactly what we envisioned.',
			rating: 5,
			date: 'January 2024',
		},
		{
			id: 4,
			name: 'Jennifer Wu',
			city: 'Oakland',
			content:
				'Working with Mason on our hillside home renovation was a great experience. His attention to detail with the retaining wall design and foundation reinforcement gave us peace of mind. The project came in on budget and passed inspection easily.',
			rating: 5,
			date: 'December 2023',
		},
		{
			id: 5,
			name: 'Robert Martinez',
			city: 'Los Angeles',
			content:
				'Our commercial building needed seismic retrofitting, and Cecilia Home made the process straightforward. They handled all the engineering calculations and permit documentation. Their expertise in California building codes was invaluable.',
			rating: 5,
			date: 'November 2023',
		},
		{
			id: 6,
			name: 'Emily Parker',
			city: 'San Diego',
			content:
				'We had a complex ADU project with lots of site constraints. Mason came up with creative solutions that maximized our space while meeting all code requirements. His responsiveness and clear communication made the whole process much less stressful.',
			rating: 5,
			date: 'October 2023',
		},
	];

	return (
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
						Read about real experiences from our satisfied clients across
						California.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow duration-300"
						>
							<div className="flex items-center space-x-1 mb-4">
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

							<p className="text-gray-600 mb-6 line-clamp-4">
								{testimonial.content}
							</p>

							<div className="flex justify-between items-center">
								<div>
									<p className="font-semibold text-gray-900">
										{testimonial.name}
									</p>
									<p className="text-sm text-gray-500">{testimonial.city}</p>
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
	);
}
