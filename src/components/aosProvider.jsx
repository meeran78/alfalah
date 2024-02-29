'use client'
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

 const AOSProvider = () => {
    React.useEffect(() => {
        AOS.init({
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
          offset: 100,
        });
        AOS.refresh();
      }, []);

  return (
    <></>
  )
}

export default AOSProvider