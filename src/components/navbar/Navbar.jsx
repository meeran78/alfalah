import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";
import styles from "./navbar.module.css";
import logo from "./../../../public/alfalahlogo.png";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
  console.log(session)
  return (
    <div className={styles.container}>
      <div>
        <Image src={logo} alt="" className={styles.logo} />
      </div>
      <div>
        <div className={styles.headerText}>Islamic Center of Henrico - Masjid Al Falah</div>
      </div>
      <div>
        <Links session={session}/>
      </div>
    </div>
  );
};

export default Navbar;
