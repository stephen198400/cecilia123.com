'use client';

import Image from 'next/image';
import Link from 'next/link';

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
}

export default function Footer() {
	const navigation = {
		services: [
			{ name: 'Fire Restoration', href: '/fire-restoration' },
			{ name: 'Structural Engineering', href: '/structural-engineering' },
			{ name: 'Foundation Design', href: '/foundation-design' },
			{ name: 'Permit Services', href: '/permit-services' },
		],
		company: [
			{ name: 'About Us', href: '/about' },
			{ name: 'Projects', href: '/projects' },
			{ name: 'Contact', href: '/contact' },
			{ name: 'Testimonials', href: '/#testimonials' },
			{ name: 'FAQ', href: '/#faq' },
		],
		social: [
			{
				name: 'Houzz',
				href: '#',
				icon: (props: IconProps) => (
					<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
						<path d="M12.93 5.92v8.7h-2.61v-8.7h2.61zm0-3.43v2.48h-2.61V2.49h2.61zm-2.61 13.14h2.61v6.88h-2.61v-6.88z" />
					</svg>
				),
			},
			{
				name: 'Yelp',
				href: '#',
				icon: (props: IconProps) => (
					<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
						<path d="M20.16 12.73c-.12.67-.44 1.33-1.11 1.62l-3.42 1.65c-.66.31-1.32.19-1.93-.11-.63-.31-1.07-.89-1.07-1.67V6.33c0-.78.44-1.36 1.07-1.67.61-.3 1.27-.42 1.93-.11l3.42 1.65c.67.29.99.95 1.11 1.62.12.67.12 4.24 0 4.91zm-8.77 7.1c-.12.67-.44 1.33-1.11 1.62l-3.42 1.65c-.66.31-1.32.19-1.93-.11-.63-.31-1.07-.89-1.07-1.67V6.33c0-.78.44-1.36 1.07-1.67.61-.3 1.27-.42 1.93-.11l3.42 1.65c.67.29.99.95 1.11 1.62.12.67.12 4.24 0 4.91z" />
					</svg>
				),
			},
			{
				name: 'HomeAdvisor',
				href: '#',
				icon: (props: IconProps) => (
					<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
						<path d="M12 2L1 21h22L12 2zm0 3.99L20.53 19H3.47L12 5.99zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" />
					</svg>
				),
			},
		],
	};

	return (
		<footer
			className="bg-white border-t border-gray-100"
			aria-labelledby="footer-heading"
		>
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="container mx-auto px-4 pt-16 pb-8">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-8">
						<Image
							src="/logo.png"
							alt="Cecilia Design Logo"
							width={48}
							height={48}
							className="w-12 h-12"
						/>
						<p className="text-sm leading-6 text-gray-600">
							Professional architectural design and structural engineering
							services in California. Bringing your vision to life with
							expertise and precision.
						</p>
						<div className="flex space-x-6">
							{navigation.social.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="text-gray-500 hover:text-blue-600"
								>
									<span className="sr-only">{item.name}</span>
									<item.icon className="h-6 w-6" aria-hidden="true" />
								</a>
							))}
						</div>
					</div>
					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div>
							<h3 className="text-sm font-semibold leading-6 text-gray-900">
								Services
							</h3>
							<ul role="list" className="mt-6 space-y-4">
								{navigation.services.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="text-sm leading-6 text-gray-600 hover:text-blue-600"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-semibold leading-6 text-gray-900">
								Company
							</h3>
							<ul role="list" className="mt-6 space-y-4">
								{navigation.company.map((item) => (
									<li key={item.name}>
										<Link
											href={item.href}
											className="text-sm leading-6 text-gray-600 hover:text-blue-600"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-16 border-t border-gray-100 pt-8 sm:mt-20 lg:mt-24">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex flex-col md:flex-row items-center gap-4 text-gray-500">
							<p className="text-sm">1816 Enclave Place Concord CA 94519</p>
							<span className="hidden md:inline">•</span>
							<p className="text-sm">(510) 909-1933</p>
							<span className="hidden md:inline">•</span>
							<a
								href="mailto:contact@ceciliahome.net"
								className="text-sm hover:text-blue-600"
							>
								contact@ceciliahome.net
							</a>
						</div>
						<p className="text-xs text-gray-500">
							&copy; {new Date().getFullYear()} Cecilia Home. All rights
							reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
