import ServiceCard from './ServiceCard';
import { services } from '@/data/service.json';

export default function ServiceSection() {
	return (
		<div className='bg-bg-secondary/10'>
			<div id='layanan' className='container mx-auto px-4 py-24'>
				<div className='flex flex-wrap justify-center gap-y-4'>
					<div className='basis-full text-center mb-20'>
						<h3 className='text-[50px] font-semibold'>Layanan yang Kami Tawarkan</h3>
					</div>
					<div className='lg:basis-1/3 px-2'>
						<ServiceCard service={services[0]} />
					</div>
					<div className='lg:basis-1/3 px-2'>
						<ServiceCard service={services[1]} bg='secondary-blue' />
					</div>
					<div className='lg:basis-1/3 px-2'>
						<ServiceCard service={services[2]} />
					</div>
				</div>
			</div>
		</div>
	);
}
