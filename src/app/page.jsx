import Image from "next/image";
import Video from "next-video";
import styles from "./page.module.css";

import Carousel from "./carousel";

import img1 from "./../../public/masjidfront1.jpg";
import img2 from "./../../public/masjidfront2.jpg";
import img3 from "./../../public/masjidfrontnight.jpg";

const images = [
  "https://via.placeholder.com/800x400/ff5733/fff",
  "https://via.placeholder.com/800x400/33ff57/fff",
  "https://via.placeholder.com/800x400/5733ff/fff",
];

//Homepage
export default function Home() {
  return (
    // <div><Video src="./videos/bg2.mp4" loop autoPlay muted/></div>
    <div>
      <div>
        <Carousel images={images} />
      </div>
      <div className={styles.homeContent}>
        Prayer time and important announcement will display here!!!
      </div>
    </div>
  );
}
