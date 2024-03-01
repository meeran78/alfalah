import React from 'react';
import { latestNewsData } from '@/lib/data';
import Image from 'next/image';

const LatestNews = ({ params }) => {
	const { id } = params;
	const newsData = latestNewsData.filter((data) => data.id === parseInt(id));
	// console.log(newsData);
	return (
		<div className='container m-auto'>
			<div className='mt-5 p-6 shadow-2xl'>
				{newsData.map((data) => (
					<div key={data.id} className='flex flex-col sm:flex-row sm:gap-2'>
						<div className='overflow-hidden rounded-2xl mb-2'>
							{/* <img src={data.image} alt='' w /> */}
              <img src={data.image} alt='' className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' />
						</div>
            <div className='mt-5 flex flex-col gap-3'>
            <div><span className='text-xl font-medium'>Date: </span>{new Date(data.date).toDateString()}</div>           
						<div className='text-3xl font-medium'>{data.title}</div>
						<div>{data.desc}</div>
            </div>
					
					</div>
				))}
			</div>
		</div>
	);
};

export default LatestNews;
