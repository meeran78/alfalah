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

const carouselData = [
	{
		id: 1,
		image: '/nature1.jpg',
		title: 'Welcoming Ramadhan',
		content: 'Ramadhan is the most important holiday of Islam.',
	},
	{
		id: 2,
		image: '/nature2.jpg',
		title: 'Islamic School',
		content: 'islamic school program.',
	},
	{
		id: 3,
		image: '/nature3.jpg',
		title: 'Welcoming Ramadhan',
		content: 'Ramadhan is the most important holiday of Islam.',
	},
	{
		id: 4,
		image: '/nature4.jpg',
		title: 'Welcoming Ramadhan',
		content: 'Ramadhan is the most important holiday of Islam.',
	},
	{
		id: 5,
		image: '/nature5.jpg',
		title: 'Banquet Hall',
		content: 'Banquet Hall.',
	},
];

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
				scrollbar={{ draggable: false }}
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
