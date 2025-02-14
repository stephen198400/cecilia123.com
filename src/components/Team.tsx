'use client';

import Image from 'next/image';

export default function Team() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Column - Text Content */}
					<div className="space-y-6">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900">
							Mason Zheng
						</h1>
						<h2 className="text-xl text-blue-600 font-medium border-l-4 border-blue-600 pl-4">
							Your Professional Housing Expert
						</h2>
						<p className="text-lg text-gray-600 leading-relaxed">
							Cecilia Home&apos;s chief engineer and Architecture designer,
							Mason Zheng, started working as a civil engineer in 2000. In 2006,
							he got a Professional Engineer license in California with the
							vision to modify the home should be easy and affordable.
						</p>
						<p className="text-lg text-gray-600 leading-relaxed">
							Over the last 20 years, He has done civil projects, including
							houses, communication lines, roads, bridges, etc., especially in
							property addition design. With all the experiences, He started
							Cecilia Home in 2016 and has made outstanding achievements in the
							housing field of the Bay Area.
						</p>
					</div>

					{/* Right Column - Image */}
					<div className="relative">
						<div className="aspect-[3/4] relative max-w-lg mx-auto">
							<div className="absolute inset-0 border-2 border-blue-600/10 rounded-2xl transform translate-x-6 translate-y-6"></div>
							<div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
								<Image
									src="/mason.jpg"
									alt="Mason Zheng - Chief Engineer"
									width={800}
									height={1067}
									className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
									priority
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Credentials Section */}
			</div>
		</section>
	);
}
