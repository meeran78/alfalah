'use client';
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
	return (
		<div className='relative -z-10'>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				freeMode={true}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
				className='h-[400px] sm:h-[560px] w-full p-4 '
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}>
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
                                    exit='hidden' className='text-white absolute top-[200px] left-24 w-[420px] sm:w-full '>
									<div 
                                    
                                    className='block text-3xl py-3'>
										{data.title}
									</div>
									<div className='text-2xl'>{data.content}</div>
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
