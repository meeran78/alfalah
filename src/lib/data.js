import { Programs } from "./models"
import { connectToDb } from "./utils"
import { unstable_noStore as noStore } from "next/cache"
const imageSlide = [
    {
        url: 'nature1.jpg',
        title: "About Masjid",
        body: '​​Abdullah ibn &apos;Amr The Messenger of Allah صلى الله عليه وسلم said: "Whoever would love to be delivered from Hellfire and admitted into Paradise, let him meet his end with faith in Allah and the Last Day, and let him treat people as he would love to be treated."    (Muslim)'
    },
    {
        url: 'nature2.jpg',
        title: "About Masjid",
        body: '​​Abdullah ibn &apos;Amr The Messenger of Allah صلى الله عليه وسلم said: "Whoever would love to be delivered from Hellfire and admitted into Paradise, let him meet his end with faith in Allah and the Last Day, and let him treat people as he would love to be treated."    (Muslim)'
    },
    {
        url: 'nature3.jpg',
        title: "About Masjid",
        body: '​​Abdullah ibn &apos;Amr The Messenger of Allah صلى الله عليه وسلم said: "Whoever would love to be delivered from Hellfire and admitted into Paradise, let him meet his end with faith in Allah and the Last Day, and let him treat people as he would love to be treated."    (Muslim)'
    },
    {
        url: 'nature4.jpg',
        title: "About Masjid",
        body: '​​Abdullah ibn &apos;Amr The Messenger of Allah صلى الله عليه وسلم said: "Whoever would love to be delivered from Hellfire and admitted into Paradise, let him meet his end with faith in Allah and the Last Day, and let him treat people as he would love to be treated."    (Muslim)'
    },
    {
        url: 'nature5.jpg',
        title: "About Masjid",
        body: '​​Abdullah ibn &apos;Amr The Messenger of Allah صلى الله عليه وسلم said: "Whoever would love to be delivered from Hellfire and admitted into Paradise, let him meet his end with faith in Allah and the Last Day, and let him treat people as he would love to be treated."    (Muslim)'
    },
]

const programData = [
    {
      id: 1,
      title: 'Common Mistakes',
      date: '02/02/2024',
      desc: 'Clarifying common mistakes widespread among the Muslisms.',
      image: '/nature1.jpg'
    },
    {
      id: 2,
      title: 'Doubts & Desires',
      date: '02/06/2024',
      desc: 'Join us next Saturday for an evening of faith, uplifting your iman and cleansing your heart from doubts.',
      image: '/nature2.jpg'
    },
    {
      id: 3,
      title: 'Light Upon Light',
      date: '04/02/2024',
      desc: 'Alfalah presents Revival night with Light Upon Light.',
      image: '/nature3.jpg'
    },
    {
      id: 4,
      title: 'Quran and Arabic Class',
      date: '07/02/2024',
      desc: 'All levels Quran classes with Tajweed and Foundatino Arabic lanugages classes [Saturday & Sunday].',
      image: '/nature4.jpg'
    }
  ]

  export const getPrograms = async () => {
    //return programData;
    try{
      connectToDb()
      const programs = await Programs.find();
      return programs
    }
    catch(err){
      console.log(err + 'Failed to fetch programs')
      throw new Error("Failed to fetch programs")
    }
  }

  export const getProgram = async (id) => {
    noStore();
    // console.log(id)
   // return programData.find((prog) => prog.id === parseInt(id));
   try{
    connectToDb()
    const program = await Programs.findById(id);    
    return program
  }
  catch(err){
    console.log(err + 'Failed to fetch program')
    throw new Error("Failed to fetch program")
  }
  }

  