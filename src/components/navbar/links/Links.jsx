"use client";

import { useState } from "react";
import NavLink from "./navLink/navLink";
import styles from "./Links.module.css";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  // {
  //   title: "Prayer",
  //   path: "/prayer",
  // },
  {
    title: "Programs",
    path: "/programs",
  },
  {
    title: "Events",
    path: "/events",
  },
  {
    title: "Services",
    path: "/services",
  },
  // {
  //   title: "Contact Us",
  //   path: "/contact",
  // },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  //Temp
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          // <Link href={link.path} key={link.title}>{link.title}</Link>
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          session?.user?.isAdmin ? <NavLink item={{ title: "Login", path: "/login" }} /> : ""
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/darkMenuIcon.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
