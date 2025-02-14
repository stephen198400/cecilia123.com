'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Project {
	id: number;
	title: string;
	description: string;
	category: string;
	location: string;
	year: string;
	image: string;
}

export default function Projects() {
	const projects: Project[] = [
		{
			id: 1,
			title: 'Modern ADU in Bay Area',
			description:
				'A 650 sqft ADU design featuring modern aesthetics and efficient space utilization. Including full kitchen, bathroom, and separate entrance with complete permit approval process.',
			category: 'ADU Design',
			location: 'Concord, CA',
			year: '2024',
			image: '/projects/ADU.jpg',
		},
		{
			id: 2,
			title: 'Residential Foundation Repair',
			description:
				'Comprehensive foundation inspection and repair design for a residential property, including detailed structural analysis and reinforcement solutions.',
			category: 'Foundation Repair',
			location: 'San Francisco, CA',
			year: '2023',
			image: '/projects/foundation.webp',
		},
		{
			id: 3,
			title: 'Open Concept Home Renovation',
			description:
				'Strategic removal of load-bearing walls to create an open floor plan, including structural calculations and temporary support systems design.',
			category: 'Load Bearing Wall',
			location: 'Oakland, CA',
			year: '2023',
			image: '/projects/house remodel.jpg',
		},
		{
			id: 4,
			title: 'Two-Story Home Addition',
			description:
				'Design of a 1,200 sqft two-story addition including master suite, family room, and expanded kitchen. Complete with structural engineering and permit documentation.',
			category: 'House Addition',
			location: 'Walnut Creek, CA',
			year: '2022',
			image: '/projects/house addition.jpg',
		},
		{
			id: 5,
			title: 'Hillside Retaining Wall System',
			description:
				'Engineering design for a complex retaining wall system on a steep hillside property, incorporating proper drainage and aesthetic considerations.',
			category: 'Retaining Wall',
			location: 'Berkeley, CA',
			year: '2022',
			image: '/projects/retaiing wall.jpg',
		},
		{
			id: 6,
			title: 'Custom Home Construction',
			description:
				'Complete architectural and structural design for a new 3,500 sqft modern residence, featuring sustainable design elements and smart home integration.',
			category: 'New Construction',
			location: 'Pleasant Hill, CA',
			year: '2021',
			image: '/projects/new construction.jpg',
		},
	];

	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Our Featured Projects
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Explore our diverse portfolio of successful projects across
						California, showcasing our expertise in ADUs, structural
						engineering, and more.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
						>
							<div className="relative h-64 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-b from-gray-600/20 to-gray-900/50" />
								<Image
									src={project.image}
									alt={project.title}
									width={600}
									height={400}
									className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<div className="p-6">
								<span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
									{project.category}
								</span>
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									{project.title}
								</h3>
								<p className="text-gray-600 mb-4 line-clamp-2">
									{project.description}
								</p>
								<div className="flex justify-between items-center text-sm text-gray-500">
									<span>{project.location}</span>
									<span>{project.year}</span>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<Link
						href="/projects"
						className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
					>
						View All Projects
						<svg
							className="ml-2 w-4 h-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
}
