'use client';

import Image from 'next/image';
import { useState } from 'react';

function TestimonyContent() {
	const [isOpen, setIsOpen] = useState(false);
	let text = 'Harga yang ditawarkan cukup relatif murah, dengan harga segitu sudah mendapatkan pelayanan yang berkualitas plus juga sudah dapat akupresure.';
	return (
		<>
			<div className='text-justify'>
				<p className='text-white text-xl'>{isOpen ? text : text.slice(0, 100) + '...'}</p>
			</div>
			<span className='flex gap-2 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
				<p className='font-bold text-normal text-text-white'>{isOpen ? 'Tutup' : 'Selengkapnya'}</p>
				<Image className={isOpen ? 'rotate-180' : ''} src='/LandingPage/drop-logo.svg' width={17} height={17} alt='drop logo' />
			</span>
		</>
	);
}

export default function TestimonyCard() {
	return (
		<div className='flex justify-center mt-[50px]'>
			<div className='relative'>
				<div className='absolute left-1/2 -translate-y-1/2 -translate-x-1/2'>
					<div className='w-[100px] h-[100px] rounded-full border-4 border-primary-blue overflow-hidden'>
						<Image src='/LandingPage/orang1.png' width={100} height={100} alt='logo default user' />
					</div>
				</div>
				<div className='max-w-[450px] min-h-[350px] bg-primary-blue rounded-[4px] px-8 py-12'>
					<div className='flex flex-wrap gap-2 justify-center'>
						<div className='basis-full text-xl text-center'>
							<p className='text-xl text-text-white font-bold'>Steven Belva</p>
							<p className='text-xl text-text-white font-medium'>Denpasar</p>
						</div>
						<div>
							<Image src='/LandingPage/quote.svg' width={55} height={55} alt='quote logo' />
						</div>
						<TestimonyContent />
					</div>
				</div>
			</div>
		</div>
	);
}
