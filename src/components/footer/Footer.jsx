import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      {new Date().getFullYear()} &copy; All Rights Reserved. Designed & Developed by AlFalah IT Team
    </div>
  )
}

export default Footer