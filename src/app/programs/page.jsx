import Card from '@/components/card/Card';
import { getPrograms } from '@/lib/data';

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
	const progs = await getPrograms();

	return (
		<div className='container m-auto'>
			<div className='relative -z-10 flex flex-wrap gap-20 mt-20'>
				{progs.map((prog) => (
					<div className='' key={prog.id}>
						{/* <Card program={prog} /> */}
            Program & Events
					</div>
				))}
			</div>
		</div>
	);
};

export default Programs;
