import { fivePillars } from '@/lib/data';

const FivePillars = () => {
	return (
		<div className='container m-auto'>
			<div className='text-[15px] font-semibold sm:text-[25px]'>
				The Five Pillars (Arkān al-Islām) are the core beliefs and practices of
				Islam which all muslims must adhere to are
			</div>
			<div className='flex flex-col mt-10 gap-3 sm:flex-row mb-10 '>
				{fivePillars.map((pillars) => (
					<div key={pillars.id} className='text-center py-2 shadow-lg w-full'>
                        <div className='mb-4 tracking-wide ' >0{pillars.id}  <span className='border-l-4 px-2 border-gray-600 uppercase text-2xl' >{pillars.title}</span></div>                        
                        <div className='tracking-wider leading-6 '>{pillars.desc}</div>
                    </div>
				))}
			</div>
		</div>
	);
};

export default FivePillars;
