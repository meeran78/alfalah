import React from 'react'


const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      {new Date().getFullYear()} &copy; All Rights Reserved. Designed & Developed by AlFalah IT Team
    </div>
  )
}

export default Footer