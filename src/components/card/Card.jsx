import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({program}) => {
  console.log(program)
  return (
    <div>
      <div>
        
      </div>
    </div>
    // <div className={styles.contianer}>
    //   <div className={styles.top}>
    //     <div className={styles.imgContainer}>
    //       {/* <Image src={program.image} alt="" className={styles.img} width={200} height={300} /> */}
    //       <Image src={program.image}alt="" className={styles.img} width={200} height={300} />
    //     </div>      
    //   </div>
    //   <div className={styles.bottom}>
    //     <h3 className={styles.title}>{program.title}</h3>
    //      <p className={styles.date}> <b>Date:</b> {program.date.toDateString()}</p>
    //     <p className={styles.desc}>{program.desc}</p>
    //     {/* <p className={styles.desc}>{program._id}</p> */}
    //     <Link href={`/programs/${program._id}`} className={styles.link}>READ MORE</Link>
    //   </div>
    // </div>
  );
};

export default Card;
