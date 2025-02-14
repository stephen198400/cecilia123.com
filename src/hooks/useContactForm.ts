'use client';

import { useState } from 'react';

export function useContactForm() {
	const [isOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return {
		isOpen,
		openModal,
		closeModal,
	};
}
