'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function Hero() {
	const [state, handleSubmit] = useForm('xbldaqak');

	const services = [
		'✓ Custom Residential Design',
		'✓ Commercial Architecture',
		'✓ Structural Engineering',
		'✓ Landscape Design',
	];

	if (state.succeeded) {
		return (
			<div
				className="relative min-h-screen bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
			>
				<div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/60 to-gray-900/50" />
				<div className="relative container mx-auto px-4 pt-32 pb-16">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						{/* Left Column - Text Content */}
						<div className="space-y-8">
							<div>
								<h2 className="text-lg font-medium text-blue-200 mb-4">
									Your Local Design & Engineering Experts
								</h2>
								<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
									Building Dreams
									<span className="block">From Vision to Reality</span>
								</h1>
								<p className="text-lg text-gray-300 mt-6">
									Your trusted partner in California for architectural design
									and structural engineering. We bring local expertise and
									personalized solutions to every project, big or small.
								</p>
							</div>

							<div className="space-y-3 max-w-md">
								{services.map((service, index) => (
									<div
										key={index}
										className="text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg block max-w-fit"
									>
										{service}
									</div>
								))}
							</div>
						</div>

						{/* Right Column - Success Message */}
						<div className="bg-white rounded-xl shadow-lg p-8">
							<div className="text-center">
								<svg
									className="mx-auto h-12 w-12 text-green-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<h3 className="mt-4 text-xl font-semibold text-gray-900">
									Thank You!
								</h3>
								<p className="mt-2 text-gray-600">
									We&apos;ve received your request and will get back to you
									within 24 hours.
								</p>
								<button
									onClick={() => window.location.reload()}
									className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
								>
									Submit Another Request
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			className="relative min-h-screen bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
		>
			<div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/60 to-gray-900/50" />
			<div className="relative container mx-auto px-4 pt-32 pb-16">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Left Column - Text Content */}
					<div className="space-y-8">
						<div>
							<h2 className="text-lg font-medium text-blue-200 mb-4">
								Your Local Design & Engineering Experts
							</h2>
							<h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
								Building Dreams
								<span className="block">From Vision to Reality</span>
							</h1>
							<p className="text-lg text-gray-300 mt-6">
								Your trusted partner in California for architectural design and
								structural engineering. We bring local expertise and
								personalized solutions to every project, big or small.
							</p>
						</div>

						<div className="space-y-3 max-w-md">
							{services.map((service, index) => (
								<div
									key={index}
									className="text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg block max-w-fit"
								>
									{service}
								</div>
							))}
						</div>
					</div>

					{/* Right Column - Form */}
					<div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8">
						<h3 className="text-2xl font-bold text-gray-900 mb-6">
							Start Your Project
						</h3>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<select
									id="projectType"
									name="projectType"
									required
									className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								>
									<option value="">Select Project Type</option>
									<option value="residential">Residential Design</option>
									<option value="commercial">Commercial Architecture</option>
									<option value="engineering">Structural Engineering</option>
									<option value="landscape">Landscape Design</option>
								</select>
								<ValidationError
									prefix="Project Type"
									field="projectType"
									errors={state.errors}
									className="mt-1 text-sm text-red-600"
								/>
							</div>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Your Name"
								required
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
							<ValidationError
								prefix="Name"
								field="name"
								errors={state.errors}
								className="mt-1 text-sm text-red-600"
							/>
							<input
								type="tel"
								id="phone"
								name="phone"
								placeholder="Phone Number"
								required
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
							<ValidationError
								prefix="Phone"
								field="phone"
								errors={state.errors}
								className="mt-1 text-sm text-red-600"
							/>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email Address"
								required
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
								className="mt-1 text-sm text-red-600"
							/>
							<input
								type="text"
								id="location"
								name="location"
								placeholder="Project Location (e.g. San Francisco, CA)"
								required
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
							<ValidationError
								prefix="Location"
								field="location"
								errors={state.errors}
								className="mt-1 text-sm text-red-600"
							/>
							<textarea
								id="details"
								name="details"
								placeholder="Project Details (e.g. square footage, special requirements)"
								rows={4}
								required
								className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							/>
							<ValidationError
								prefix="Details"
								field="details"
								errors={state.errors}
								className="mt-1 text-sm text-red-600"
							/>
							<button
								type="submit"
								disabled={state.submitting}
								className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{state.submitting ? 'Sending...' : 'Get Free Consultation'}
							</button>
							<p className="text-center text-sm text-gray-500 mt-4">
								We typically respond within 24 hours
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
