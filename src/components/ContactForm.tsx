'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface ContactFormProps {
	isOpen: boolean;
	closeModal: () => void;
}

export default function ContactForm({ isOpen, closeModal }: ContactFormProps) {
	const [state, handleSubmit] = useForm('xbldaqak');

	if (state.succeeded) {
		return (
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
										<Dialog.Title
											as="h3"
											className="mt-4 text-xl font-semibold text-gray-900"
										>
											Thank You!
										</Dialog.Title>
										<p className="mt-2 text-gray-600">
											We&apos;ve received your request and will get back to you
											within 24 hours.
										</p>
										<button
											type="button"
											className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
											onClick={closeModal}
										>
											Close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		);
	}

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								<Dialog.Title
									as="h3"
									className="text-2xl font-bold text-gray-900 text-center mb-6"
								>
									Contact Us
								</Dialog.Title>

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
											<option value="commercial">
												Commercial Architecture
											</option>
											<option value="engineering">
												Structural Engineering
											</option>
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

									<textarea
										id="message"
										name="message"
										placeholder="How can we help you?"
										rows={4}
										required
										className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
									/>
									<ValidationError
										prefix="Message"
										field="message"
										errors={state.errors}
										className="mt-1 text-sm text-red-600"
									/>

									<div className="flex gap-4">
										<button
											type="button"
											className="flex-1 px-4 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
											onClick={closeModal}
										>
											Cancel
										</button>
										<button
											type="submit"
											disabled={state.submitting}
											className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
										>
											{state.submitting ? 'Sending...' : 'Send Message'}
										</button>
									</div>
								</form>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
