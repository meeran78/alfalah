import Card from "@/components/card/Card"
import styles from "./programs.module.css";
import { getPrograms } from "@/lib/data";

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
    <div className={styles.container}>     
      {progs.map((prog) => (
        <div className={styles.program} key={prog.id}>
          <Card  program={prog}/>
        </div>
      ))}     
    </div>
  );
};

export default Programs;
