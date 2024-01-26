import React, { Suspense } from "react";
import Image from "next/image";
import Video from "next-video";
import styles from "./home.module.css";
import Carousel from "./carousel";

import MasjidBox from "@/components/masjidbox/Masjidbox";
//const MasjidBox = React.lazy(() => import("@/components/masjidbox/Masjidbox"));
import pillarsImg from "./../../public/5pillars.jpg";
const images = [
  "https://img.wallmur.net/@wmp/_826ax660/i/s/islamic-wallpaper-kaaba-wall-murals-muslim-wall-print-livingroom_h1zkzgdmagh4zqn4_1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdphhih8OtDTeei3UX8WHuSgKLnCs33MYBQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFNUgWMUx5IEDEwksQY0ZWc4Ikxit9wt0zB0DfxMMsCYeSdbCOajI3KX5QCutPDaQjEA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0wFGzQwozdoOxWgvfANGvFiJB57wDzwIZX7d81OE1ybpve3R0M2_nAVkAJFpr3-msj8&usqp=CAU",
];
//Create image object with title and content and pass to carousel component
//Homepage
export default function Home() {
  return (
    // <div><Video src="./videos/bg2.mp4" loop autoPlay muted/></div>
    <div>
      <div>
        <Carousel images={images} title="Title" content="Content" />
      </div>
      <div className={styles.homeContent}><MasjidBox /></div>
      <div className={styles.pillarsHeader}>5 Pillars of Islam</div>
      <div className={styles.pillarsSubHeader}>
        The Five Pillars (Arkān al-Islām) are the core beliefs and practices of
        Islam which all muslims must adhere to are
      </div>
      <div className={styles.pillarsContainer}>
        {/* <div className={styles.imgContainer}>
          <Image src={pillarsImg} alt="" />
        </div> */}

        <div className={styles.pillarsContent}>
          <div>
            <span>01 | Shahadah</span>
          </div>
          <p  className={styles.pillarText}>
            Every Muslim is supposed to believe that there is only one God and
            His messenger was Prophet Muhammad.
          </p>
        </div>
        <div className={styles.pillarsContent}>
          <div>
            <span>02 | Salah</span>
          </div>
          
          <p className={styles.pillarText}>
            It is the ritual of praying to Allah five times a day facing Makkah.
            A Muslim must perform the ritual after dark, noon, sunset,
            mid-afternoon and at dawn.
          </p>
        </div>
        <div className={styles.pillarsContent}>
          <div>
            <span>03 | Sawm</span>
          </div>
          
          <p  className={styles.pillarText}>
            Sawm or fasting helps Muslims to develop a sense of self-discipline
            and allows them to identify with the poor and the needy.
          </p>
        </div>
        <div className={styles.pillarsContent}>
          <div>
            <span>04 | Zakah</span>
          </div>
         
          <p  className={styles.pillarText}>
            This is an obligatory giving of alms, to the less fortunate in your
            community of believers
          </p>
        </div>
        <div className={styles.pillarsContent}>
          <div>
            <span>05 | Hajj</span>
          </div>
       
          <p  className={styles.pillarText}>
            It is a pilgrimage to Makkah and is the fifth pillar of Islam. It
            strips away all that relates to societal standards, wealth, and
            pride.
          </p>
        </div>
      </div>
    </div>
  );
}
