'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export default function QuestionAccordion({ faq }: { faq: { id: number; question: string; answer: string } }) {
	return (
		<Disclosure>
			{({ open }) => (
				<>
					<Disclosure.Button className='flex w-full justify-between items-center rounded-lg bg-primary-blue/10 px-4 py-2 text-left text-lg font-medium text-primary-blue hover:bg-primary-blue/20 focus:outline-none focus-visible:ring focus-visible:ring-primary-blue/50 focus-visible:ring-opacity-75'>
						<span>{faq.question}</span>
						<ChevronUpIcon className={`${open ? '' : 'rotate-180'} h-5 w-5 text-primary-blue`} />
					</Disclosure.Button>
					<Disclosure.Panel className='px-4 pt-4 pb-2 text-md text-gray-500'>{faq.answer}</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
