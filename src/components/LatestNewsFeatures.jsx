import React from 'react';
import { LatestNewsFeaturesData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
const LatestNewsFeatures = () => {
	return (
		<div className='my-6'>
			<div className='grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 gap-4'>
				{LatestNewsFeaturesData.map((data) => (
					<div key={data.title} className='shadow-lg p-4'>
						{/* image section */}
						<div className='overflow-hidden rounded-2xl mb-2'>
							<img
								src={data.image}
								alt=''
								className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'
							/>
						</div>
						{/* content section */}
						<div className='space-y-2'>
							<p className='text-xs text-gray-500'>{data.date}</p>
							<p className='font-bold line-clamp-1'>{data.title}</p>
							<p className='line-clamp-2 text-sm text-gray-600 py-4 sm:py-6'>
								{data.desc}
							</p>
              <div>
                {/* <Link
								href={`/news/${data.id}`}
								className='min-w-4 bg-gray-800 p-2 rounded text-white
                hover:bg-orange-800 sm:hover:bg-orange-800 py-2 bottom-3'>
								Read More
							</Link> */}
              </div>
							
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LatestNewsFeatures;
