import React, { Suspense } from 'react';
import MasjidBox from '@/components/Masjidbox';
import LatestNewsFeatures from '@/components/LatestNewsFeatures';
import Donate from '@/components/Donate';
import FivePillars from '@/components/Fivepillars';
import HomepageSlider from '@/components/HomepageSlider';
import Link from 'next/link';

//Create image object with title and content and pass to carousel component

//Homepage
export default function Home() {
	return (
		// <div><Video src="./videos/bg2.mp4" loop autoPlay muted/></div>
		<>
			<div>
				<HomepageSlider />
			</div>
			<div className='container m-auto'>
				<div>
					<div className='flex flex-row gap-3 justify-between'>
						<div className='mt-6 bg-gray-500 p-3 text-white text-center w-[120px] rounded-[45px]'>
							<Link href='/donate' className=''>
								<h2>Donate</h2>
							</Link>
						</div>
						<div className='mt-6 bg-gray-500 p-3 text-white text-center rounded-[45px]'>
							<Link href='/MarchSalahTime.pdf' target='_blank'>
								<h2>Download Monthly Prayer Calendar</h2>
							</Link>
						</div>
					</div>

					<div className='mt-16'>
						<MasjidBox />
					</div>

					<div>
						<h2 className='mt-6 bg-gray-500 p-3 text-white text-center'>
							Latest News Features
						</h2>
						<LatestNewsFeatures />
					</div>
					<div>
						<div>
							<h2 className='mt-6 bg-gray-500 p-3 text-white text-center mb-5'>
								5 Pillars of Islam
							</h2>
							<FivePillars />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
