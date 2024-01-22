import Image from "next/image";
import Video from "next-video";
import styles from "./page.module.css";

import img1 from "./../../public/masjidfront1.jpg";
import img2 from "./../../public/masjidfront2.jpg";
import img3 from "./../../public/masjidfrontnight.jpg";
//Homepage
export default function Home() {
  return (
    // <div><Video src="./videos/bg2.mp4" loop autoPlay muted/></div>
    <>      
      <div className={styles.sliderContainer}>
        <Image src={img1} alt="" />
      </div>
    </>
  );
}
