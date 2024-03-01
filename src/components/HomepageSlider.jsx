'use client';
import { useRef } from 'react';
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import Image from 'next/image';

//Framer Motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variant';
import { carouselData } from '@/lib/data';
    

const HomepageSlider = () => {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
	  progressCircle.current.style.setProperty('--progress', 1 - progress);
	  progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};
	return (
		<div className='relative -z-10'>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				// navigation		
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
				className='h-[400px] sm:h-[560px] w-full p-8'
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
				>
				{carouselData.map((data, index) => {
					return (
						<SwiperSlide key={index}>
							< div >
								<div>
									<Image src={data.image} alt='' fill />
								</div>
								<motion.div  variants={fadeIn('down', 0.1)}
                                    initial='hidden'
                                    animate='show'
                                    exit='hidden' className='text-white absolute top-[150px] left-24 w-[420px] sm:w-full  '>
									<div                                    
                                    className='text-[25px] sm:text-[30px] '>
										{data.title}
									</div>
									<div className='text-[17px] sm:text-[20px]'>{data.content}</div>
								</motion.div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			
		</div>
	);
};

export default HomepageSlider;
