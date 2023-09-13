import QuestionAccordion from './QuestionAccordion';
import { faqs } from '@/data/faq.json';

export default function QuestionSection() {
	return (
		<div className='container mx-auto px-4 pt-24'>
			<div className='flex flex-wrap gap-y-4'>
				{faqs.map((faq) => (
					<div key={faq.id} className='basis-full lg:basis-1/2 px-4'>
						<QuestionAccordion faq={faq} />
					</div>
				))}
			</div>
		</div>
	);
}
