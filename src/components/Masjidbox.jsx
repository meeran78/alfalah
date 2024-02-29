"use client";

import React, { useEffect, useState } from 'react';

const MasjidBox = () => {    
  const {state, setState} = useState(true);
  useEffect(() => {
    // Load the MasjidBox widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.src = 'https://masjidbox.com/widgets/loader.js';
    
    // Find the first script tag in the document and insert the new script before it
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    //Cleanup script on component unmount
    return () => {
      document.head.appendChild(script);
    };
  }, [state]);

  return (
    <a
      data-masjidbox-widget="7Pgu0OMrq8a25qA5oDRs8"
      data-masjidbox-ifr
      href="https://masjidbox.com/prayer-times/ichva"
    >
      Salah Times Islamic Center Of Henrico
    </a>
  );
};

export default MasjidBox;
