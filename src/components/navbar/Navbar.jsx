import Link from 'next/link'
import Links from './links/Links'
import Image from 'next/image'
import styles from './navbar.module.css'
import logo from './../../../public/alfalahlogo.png'
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div >
          <Image src={logo} alt="" className={styles.logo}/>
          </div>
        <div>
           <Links />
        </div>
    </div>
  )
}

export default Navbar