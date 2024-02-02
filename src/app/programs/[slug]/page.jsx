import Image from "next/image";
import styles from "./program.module.css";
import { getProgram } from "@/lib/data";

// Fetch data from API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };
 export const generateMetadata = async ({params}) => {
  const {slug} = params
  const program = await getProgram(slug)
   return {
    title: program.title,
    description: program.desc
   }
 }

const ProgramPage = async ({params, searchParams}) => {
  // console.log(params)
  // console.log(searchParams)
  
  const {slug} = params

  // const post = await getData(slug)
  // console.log(typeof(slug))
  
  //Fetch data from data.js (Local lib file)
  console.log(slug)
  const program = await getProgram(slug)
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={program.image}
          alt=""
          className={styles.img}
          width={400}
          height={600}
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{program.title}</h1>
        <div className={styles.detail}>
          {/* <Image
            className={styles.avatar}
            src="/nature1.jpg"
            alt=""
            width={60}
            height={60}
          /> */}
          {/* <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>lore</span>
          </div> */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Event Date</span>
            <span className={styles.detailValue}>{program.date.toDateString()}</span>
          </div>
        </div>
        <div  className={styles.content}>
          <p>
          {program.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramPage;
