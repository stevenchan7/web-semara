import TestimonyCard from './TestimonyCard';

export default function TestimonySection() {
	return (
		<div id='testimoni' className='bg-bg-secondary/10'>
			<div id='testimony' className='container mx-auto px-4 py-24'>
				<div className='flex flex-wrap justify-center gap-y-4'>
					<div className='basis-full text-center mb-20'>
						<h3 className='text-[50px] font-semibold'>Testimony</h3>
					</div>
					<div className='lg:basis-1/3 px-2'>
						<TestimonyCard />
					</div>
					<div className='lg:basis-1/3 px-2'>
						<TestimonyCard />
					</div>
					<div className='lg:basis-1/3 px-2'>
						<TestimonyCard />
					</div>
				</div>
			</div>
		</div>
	);
}
