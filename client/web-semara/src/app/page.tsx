import Hero from '@/components/LandingPage/Hero';
import PlusSection from '@/components/LandingPage/PlusSection';
import ServiceSection from '@/components/LandingPage/ServiceSection';
import TestimonySection from '@/components/LandingPage/TestimonySection';

export default function Home() {
	return (
		<main>
			<Hero />
			<PlusSection />
			<ServiceSection />
			<TestimonySection />
		</main>
	);
}
