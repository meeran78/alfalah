import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Who is God?</h1>
          <p className={styles.desc}>
            Who is God? “Say, ‘The truth is that Allah is One. Allah is Besought
            of all, needing none. He neither begets nor is begotten, Nor is
            there to Him an equivalent.’” (Qur’an 112:1-4)
          </p>
          <p className={styles.desc}>
            God is the One, the indivisible. He is Eternal and Absolute, He Who
            created all and was created by none; upon Whom all depend while He
            depends on none. He is the Self-Sufficient, the Provider. He does
            not beget, nor was He begotten, nor does He share a partner in His
            Divine majesty. He Who cannot be known by the eyes, He who is unlike
            anything, nothing is like him, and He is aware of all things.
          </p>
          <p className={styles.desc}>
            God is the Absolute in knowledge: nothing is hidden from Him, and
            yet He is hidden from everything. He beholds all and hears all: from
            the smallest particle in the smallest atom to the supernovas that
            disrupt the heavens – He is aware of all things and in Absolute
            control.
          </p>
          <p className={styles.desc}>
            God is the Absolute in power: nothing transpires except that He
            allows it, and nothing exists except that He creates it. It is He
            Who creates by the word “Be,” and where there was nothing becomes
            something. He Who is unlimited by time or space, transcendent beyond
            limitation – for it is He Who created all limitations.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/allah1.jpeg"
            alt="About Image"
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.desc}>
          God is Allah – the name that He has chosen for Himself. It is the name
          He revealed in His final revelation – the name that denotes all that was
          mentioned above. Allah is the One, the Indivisible. He is the Almighty,
          the All-Knowing. One who believes this about God has believed in Allah.
          Praise be to the One, the Absolute; the Transcendent, the Eternal; the
          First and the Last, the Immense, the Majestic; The Merciful, the
          Compassionate; the All-Knowing, the Just. Praise be to Allah, the
          Creator of all things, and the One Who controls the possibility of all
          things.
          </p>
      </div>
    </>
  );
};

export default About;
