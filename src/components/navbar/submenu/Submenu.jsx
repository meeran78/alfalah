import React from 'react'
import styles from './submenu.module.css'

const Submenu = ({ mainmenu }) => {
  return (
    <> 
        <div className={styles.submenu}>
           
            <div><a href="#">What is Islam?</a></div>
            <div><a href="#">Core Values</a></div>
            <div><a href="#">Polcies</a></div>
        </div>
        
    </>      
  )
}

export default Submenu