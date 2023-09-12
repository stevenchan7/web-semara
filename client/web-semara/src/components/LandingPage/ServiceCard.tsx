export default function ServiceCard({ service, bg }: { service: { title: string; desc: string; price: string }; bg?: string }) {
	return (
		<div className={`flex justify-center ${bg ? 'bg-secondary-blue' : 'bg-primary-blue'} rounded-[4px]`}>
			<div className='max-w-[450px] h-[550px] px-8 py-12'>
				<div className='flex flex-col h-full justify-between'>
					<div className='text-justify'>
						<h3 className='text-[32px] font-bold text-text-white'>{service.title}</h3>
						<br />
						<p className='text-xl text-text-white'>{service.desc}</p>
					</div>
					<div className='text-end'>
						<p className='text-[24px] text-text-white font-bold'>{service.price} / shift</p>
					</div>
				</div>
			</div>
		</div>
	);
}
