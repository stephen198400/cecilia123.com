import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Projects from '@/components/Projects';

export default function ProjectsPage() {
	return (
		<main className="min-h-screen">
			<Header />
			<div className="pt-10">
				<section className="py-10 bg-white">
					<div className="container mx-auto px-4">
						{/* Projects grid */}
						<Projects />
					</div>
				</section>
			</div>
			<Footer />
		</main>
	);
}
