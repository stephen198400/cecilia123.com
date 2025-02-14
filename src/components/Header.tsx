'use client';

import { useContactForm } from '@/hooks/useContactForm';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

interface HeaderProps {
	enableTransparency?: boolean;
}

export default function Header({ enableTransparency = false }: HeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { isOpen, openModal, closeModal } = useContactForm();

	useEffect(() => {
		if (!enableTransparency) {
			setIsScrolled(true);
			return;
		}

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [enableTransparency]);

	const navItems = [
		{ name: 'Fire Restoration', href: '/fire-restoration' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'About', href: '/about' },
	];

	return (
		<>
			<ContactForm isOpen={isOpen} closeModal={closeModal} />
			<header
				className={`fixed w-full z-50 transition-all duration-300 ${
					isScrolled
						? 'bg-white/90 backdrop-blur-sm shadow-sm'
						: 'bg-transparent'
				}`}
			>
				<div className="container mx-auto px-4">
					<div className="flex justify-between items-center h-20">
						{/* Logo */}
						<Link href="/" className="flex-shrink-0">
							<Image
								src={isScrolled ? '/logo.png' : '/logo-white.png'}
								alt="Cecilia Design Logo"
								width={48}
								height={48}
								className="w-12 h-12 object-contain"
								priority
							/>
						</Link>

						{/* Desktop Navigation and Contact Button */}
						<div className="hidden md:flex items-center space-x-8">
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={`px-3 py-2 text-sm font-medium transition-colors ${
										isScrolled
											? 'text-gray-700 hover:text-gray-900'
											: 'text-white hover:text-gray-200'
									}`}
								>
									{item.name}
								</Link>
							))}
							<button
								onClick={openModal}
								className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
									isScrolled
										? 'border border-blue-600 text-blue-600 hover:bg-blue-50'
										: 'border border-white text-white hover:bg-white/10'
								}`}
							>
								Contact Us
							</button>
						</div>

						{/* Mobile menu button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className={`md:hidden rounded-md p-2 inline-flex items-center justify-center transition-colors ${
								isScrolled
									? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
									: 'text-white hover:text-gray-200 hover:bg-white/10'
							}`}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								)}
							</svg>
						</button>
					</div>

					{/* Mobile menu */}
					{isMenuOpen && (
						<div className="md:hidden bg-white rounded-lg shadow-lg mt-2">
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navItems.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
										onClick={() => setIsMenuOpen(false)}
									>
										{item.name}
									</Link>
								))}
								<button
									onClick={() => {
										setIsMenuOpen(false);
										openModal();
									}}
									className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
								>
									Contact Us
								</button>
							</div>
						</div>
					)}
				</div>
			</header>
		</>
	);
}
