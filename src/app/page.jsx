import React, { Suspense } from "react";
import Image from "next/image";
import Video from "next-video";
import styles from "./home.module.css";
import Carousel from "./carousel";

import MasjidBox from "@/components/masjidbox/Masjidbox";
//const MasjidBox = React.lazy(() => import("@/components/masjidbox/Masjidbox"));
import pillarsImg from "./../../public/5pillars.jpg";
const images = [
  "https://picture2photo.files.wordpress.com/2011/09/islamic-wallpaper-wallpapers_14881_1440x900.jpg",
  "https://img.wallmur.net/@wmp/_826ax660/i/s/islamic-wallpaper-kaaba-wall-murals-muslim-wall-print-livingroom_h1zkzgdmagh4zqn4_1.jpg",
  "https://wallpaperswide.com/download/islamic_architecture-wallpaper-1600x900.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTsZaRBvhgUZFilBfcdFXoX1B2RogVlxXwBJkLv2SArDPbGcYD-GrBTQHI3BbWdE5QM4&usqp=CAU",
  "https://images.unsplash.com/photo-1578895151671-7d2e2e89dcf7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw4NTc4MTMzfHxlbnwwfHx8fHw%3D",
];

const carouselImages = [
  {
    imageURL:
      "https://img.wallmur.net/@wmp/_826ax660/i/s/islamic-wallpaper-kaaba-wall-murals-muslim-wall-print-livingroom_h1zkzgdmagh4zqn4_1.jpg",
    title: "About Masjid",
    description: "Description about masjid",
  },
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
        <div className={styles.pillarsContent}>
          <span>01 | Shahadah</span>
          <p className={styles.pillarText}>
            Every Muslim is supposed to believe that there is only one God and
            His messenger was Prophet Muhammad.
          </p>
        </div>
        <div className={styles.pillarsContent}>
          <span>02 | Salah</span>
          <p className={styles.pillarText}>
            It is the ritual of praying to Allah five times a day facing Makkah.
            A Muslim must perform the ritual after dark, noon, sunset,
            mid-afternoon and at dawn.
          </p>
        </div>
        <div className={styles.pillarsContent}>
          <span>03 | Sawm</span>
          <p className={styles.pillarText}>
            Sawm or fasting helps Muslims to develop a sense of self-discipline
            and allows them to identify with the poor and the needy.
          </p>
        </div>
        <div className={styles.pillarsContent}>
          <span>04 | Zakah</span>
          <p className={styles.pillarText}>
            This is an obligatory giving of alms, to the less fortunate in your
            community of believers
          </p>
        </div>
        <div className={styles.pillarsContent}>
          <span>05 | Hajj</span>
          <p className={styles.pillarText}>
            It is a pilgrimage to Makkah and is the fifth pillar of Islam. It
            strips away all that relates to societal standards, wealth, and
            pride.
          </p>
        </div>
      </div>
    </div>
  );
}
