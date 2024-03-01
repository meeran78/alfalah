import Card from '@/components/card/Card';
// import { getPrograms } from '@/lib/data';

//Fetch data from API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}});
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const Programs = async () => {
	//Fetch data from API
	// const progs = await getData();
	// console.log(progs)

	//Fetch data from data.js (Local lib file)
	// const progs = await getPrograms();

	return (
		<div className='container m-auto'>
				<div className='mt-5 text-2xl font-medium'>Program & Events</div>
				<div className='mt-5 flex flex-col sm:flex-row'>
					<div className='shadow-lg p-5'>
						{/* <Image src={} alt="" width={20} height={20}></Image> */}
						<h3 className='text-xl font-medium'>Sunday School</h3>
						<p className='mt-5'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							veritatis nam fugit a maiores vel nihil. Expedita excepturi
							nesciunt necessitatibus iure odit dignissimos illo veniam adipisci
							omnis consequuntur, voluptatem totam?
						</p>
					</div>
					<div className='shadow-lg p-5'>
						<h3 className='text-xl font-medium'>Hifz Program</h3>
						<p className='mt-5'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							veritatis nam fugit a maiores vel nihil. Expedita excepturi
							nesciunt necessitatibus iure odit dignissimos illo veniam adipisci
							omnis consequuntur, voluptatem totam?
						</p>
					</div>
					<div className='shadow-lg p-5'>
						<h3 className='text-xl font-medium'>Sisters Program</h3>
						<p className='mt-5'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
							veritatis nam fugit a maiores vel nihil. Expedita excepturi
							nesciunt necessitatibus iure odit dignissimos illo veniam adipisci
							omnis consequuntur, voluptatem totam?
						</p>
					</div>
				</div>
			</div>
	);
};

export default Programs;
