import Image from 'next/image';

export default function Hero() {
	return (
		<div className='bg-primary-blue/70'>
			<div className='container mx-auto px-4 py-12'>
				<div className='flex flex-wrap justify-center items-center'>
					<div className='basis-full lg:basis-3/5 order-last lg:order-first text-center lg:text-start'>
						<h2 className='text-text-white text-[50px] font-semibold'>
							Frequently Asked <span className='font-black'>Questions</span>
						</h2>
						<p className='text-text-white text-lg'>Punya pertanyaan tentang Semara? Kamu beruntung! Karena kamu bisa mendapat jawaban atas pertanyaanmu disini</p>
					</div>
					<div className='basis-full lg:basis-2/5 flex justify-center items-center order-first lg:order-last'>
						<Image src='/FAQ/faq-icon.svg' width={500} height={500} alt='faq icon' />
					</div>
				</div>
			</div>
		</div>
	);
}
