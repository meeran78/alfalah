'use client'
import React, {useState} from 'react';
import { latestNewsData } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';
const LatestNewsFeatures = () => {
	// const [showModal, setShowModal] = useState(false);
	return (
		<div className='my-6'>
			<div className='grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 gap-4'>
				{latestNewsData.map((data) => (
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
						{/* href={`/news/${data.id}`} */}
						<div className='space-y-2'>
							<p className='text-xs text-gray-500'>{data.date}</p>
							<p className='font-bold line-clamp-1'>{data.title}</p>
							<p className='line-clamp-2 text-sm text-gray-600 py-4 sm:py-6'>
								{data.desc}
							</p>
              <Link href={`/latestnews/${data.id}`} className='min-w-4 bg-gray-800 p-2 rounded text-white
                hover:bg-orange-800 sm:hover:bg-orange-800 py-2 bottom-3'>Read More</Link>
							 {/*  use below code for Modal popup
               <div>              
								<button
									onClick={() => setShowModal(true)}
									className='min-w-4 bg-gray-800 p-2 rounded text-white
                hover:bg-orange-800 sm:hover:bg-orange-800 py-2 bottom-3'>
									Read More
								</button>
							</div>
							<Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                {data.title}
                {data.date}
                {data.desc}
              </Modal> */}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LatestNewsFeatures;
