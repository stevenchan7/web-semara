'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import Link from './NavLink';

export default function Navbar() {
	const checkToggle = useRef<HTMLInputElement>(null);
	const [isHamburger, setIsHamburger] = useState(true);

	// Handle check from other element
	function handleCheckToggle() {
		if (checkToggle.current != null) {
			let curr_value: boolean = checkToggle.current.checked;
			checkToggle.current.checked = !curr_value;
			setIsHamburger(!isHamburger);
		}
	}

	return (
		<>
			{/* Contact to wa button  */}
			<div className='fixed bottom-4 right-4'>
				<div className='relative'>
					{/* div for radiate animation effect  */}
					<div className='absolute w-full h-full bg-primary-blue rounded-full z-[-1] animate-[radiate_1s_infinite]'></div>
					<a href='https://wa.me/6281339683882'>
						<Image className='active:scale-90' src='/Layout/logo-wa.png' width={70} height={70} alt='kontak wa' />
					</a>
				</div>
			</div>
			<div className='sticky top-0 bg-bg-white z-10'>
				<nav className='container mx-auto px-4 my-2 flex lg:items-center flex-col lg:flex-row relative'>
					<p className='text-primary-blue text-[40px] font-semibold'>Semara</p>
					{/* Hidden checkbox to toggle navbar collapsible menu */}
					<input className='peer hidden' type='checkbox' ref={checkToggle} />
					{/* Hamburger and close icon  */}
					<span className='absolute top-5 right-4 cursor-pointer lg:hidden' onClick={handleCheckToggle}>
						<div className={`flex flex-col gap-2 relative ${isHamburger ? '' : 'w-[24px] h-[24px]'}`}>
							<div className={`w-8 h-0.5 bg-primary-black ${isHamburger ? '' : 'rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 transition-transform'}`}></div>
							<div className={`w-8 h-0.5 bg-primary-black ${isHamburger ? '' : 'hidden'}`}></div>
							<div className={`w-8 h-0.5 bg-primary-black ${isHamburger ? '' : '-rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 transition-transform'}`}></div>
						</div>
					</span>
					<div className='w-full ms-4 h-0 peer-checked:h-56 lg:peer-checked:h-auto lg:h-auto overflow-hidden transition-[height] duration-500'>
						{' '}
						{/*hidden disini bos */}
						<ul className='lg:h-8 flex justify-end flex-col lg:flex-row lg:items-center gap-8 lg:gap-20 text-xl font-bold'>
							{/* Looping link menu  */}
							{[
								['/', 'Beranda'],
								['#layanan', 'Layanan'],
								['#testimoni', 'Testimoni'],
								['/faq', 'FAQ'],
							].map(([url, title]) => (
								<Link key={title} url={url}>
									{title}
								</Link>
							))}
						</ul>
					</div>
				</nav>
			</div>
		</>
	);
}
