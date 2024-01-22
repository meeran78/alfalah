import Link from "next/link";
import NavLink from "./navLink/navLink";
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Prayer",
    path: "/prayer",
  },
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
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "Admin",
    path: "/admin",
  },
];

const Links = () => {
  return (
    <div>
      {links.map((link => (
        // <Link href={link.path} key={link.title}>{link.title}</Link>
        <NavLink item={link} />
      )))}
    </div>
  );
};

export default Links;
