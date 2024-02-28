import React, { Suspense } from 'react';
import Image from 'next/image';
import Video from 'next-video';
import MasjidBox from '@/components/masjidbox/Masjidbox';
import pillarsImg from './../../public/5pillars.jpg';
import LatestNewsFeatures from '@/components/latestNewsFeatures/LatestNewsFeatures';
import HomepageSlider from '@/components/HomepageSlider';
import FivePillars from '@/components/fivepillars';
import Donate from '@/components/Donate';

//Create image object with title and content and pass to carousel component

//Homepage
export default function Home() {
	return (
		// <div><Video src="./videos/bg2.mp4" loop autoPlay muted/></div>
		<div className='container m-auto'>
      
			<div className=''>
				<MasjidBox />
			</div>
			<div>
				<h2>Download Monthly Prayer Calendar</h2>
				<button>Download</button>
			</div>
			<LatestNewsFeatures />

			<FivePillars />
		</div>
	);
}
