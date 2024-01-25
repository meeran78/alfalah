"use client";

import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
import Submenu from "../../submenu/Submenu";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <>
      {/* <Link
        href={item.path}
        className={`${styles.container} ${
          pathName === item.path && styles.active
        }`}
      >
        {item.title}
      </Link> */}
       <a
        href={item.path}
        className={`${styles.container} ${
          pathName === item.path && styles.active
        }`}
      >
        {item.title}
      </a>
      {/* <div className={styles.submenuContainer}>
        <Submenu mainmenu={item.path} />  
      </div> */}
      
    </>
  );
};

export default NavLink;
