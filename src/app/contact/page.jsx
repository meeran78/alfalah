
import dynamic from "next/dynamic"
import styles from "./contact.module.css"
import Image from "next/image"

export const metadata = {
  title: "Contact",
  description: "Created by Al Falah IT Team",
};


const Contact = () => {
//   const [isClient, setIsClient] = useState(false)

//   const a = Math.random()
//   console.log(a)
//   useEffect(() => {
// setIsClient(true)
//   }, [])
  const HydrationTestNoSSR = dynamic(() =>import("@/components/hydrationTest"), {ssr:false})

  return (
    // <div>
    //   <h1>Contact Us details coming soon....</h1>
    // </div>
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="/nature7.jpg" alt="" width={460} height={500} className={styles.img} />
    </div>
    <div className={styles.formContainer}>
      {/* {isClient && a} */}
      {/* <HydrationTestNoSSR/> */}
      {/* <div suppressHydrationWarning>{a}</div> */}
      <form action="" className={styles.form}>
        <input type="text" placeholder="Name and Surname" />
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Phone Number (Optional)" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  </div>
  )
}

export default Contact