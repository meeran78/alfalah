import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Al Falah | Islamic Center Of Henrico",
    template: "%s | Masjid Al Falah",
  },
  description: "Created by Al Falah IT Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bgImage"></div>
        <div className="container">
        <Navbar />
        <div className="componentContainer">
          {children}
        </div>        
        {/* <Footer /> */}
        </div>       
      </body>
      
    </html>
  );
}
