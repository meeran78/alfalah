import Image from 'next/image';

export const metadata = {
	title: 'About',
	description: 'Created by Al Falah IT Team',
};

const About = () => {
	return (
		<>
			<div className='container m-auto'>
				<div className='mt-5 text-2xl font-medium'>About Us</div>
				<div className='mt-5 flex flex-col sm:flex-row'>
					<div className='shadow-lg p-5'>
						{/* <Image src={} alt="" width={20} height={20}></Image> */}
						<h3 className='text-xl font-medium'>Our Mission</h3>
						<p className='mt-5'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							veritatis nam fugit a maiores vel nihil. Expedita excepturi
							nesciunt necessitatibus iure odit dignissimos illo veniam adipisci
							omnis consequuntur, voluptatem totam?
						</p>
					</div>
					<div className='shadow-lg p-5'>
						<h3 className='text-xl font-medium'>Our Community</h3>
						<p className='mt-5'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							veritatis nam fugit a maiores vel nihil. Expedita excepturi
							nesciunt necessitatibus iure odit dignissimos illo veniam adipisci
							omnis consequuntur, voluptatem totam?
						</p>
					</div>
					<div className='shadow-lg p-5'>
						<h3 className='text-xl font-medium'>Our Vision</h3>
						<p className='mt-5'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							veritatis nam fugit a maiores vel nihil. Expedita excepturi
							nesciunt necessitatibus iure odit dignissimos illo veniam adipisci
							omnis consequuntur, voluptatem totam?
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
