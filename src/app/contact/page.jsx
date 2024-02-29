
import dynamic from "next/dynamic"
import Image from "next/image"

export const metadata = {
  title: "Contact",
  description: "Created by Al Falah IT Team",
};


const Contact = () => {
//   const [isClient, setIsClient] = useState(false)

//   const a = Math.random()
//   console.log(a)
//   useEffect(() => {
// setIsClient(true)
//   }, [])
  const HydrationTestNoSSR = dynamic(() =>import("@/components/hydrationTest"), {ssr:false})

  return (
    // <div>
    //   <h1>Contact Us details coming soon....</h1>
    // </div>
    <div className='container m-auto relative -z-10' >
      <div>
        <span>Active Hours: 9:00 AM - 5:00 PM</span>

        <div className="flex mt-6">
          <h1>Contact Emails:</h1>
          <div>
            <h1>Masjid Adminitration</h1>
            <span>q1X8B@example.com</span>
          </div>
          <div>
            <h1>Contact Phone</h1>
            <span>+966 123456789</span>
          </div>
        </div>

      </div>
  </div>
  )
}

export default Contact