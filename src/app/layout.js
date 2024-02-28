import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import HomepageSlider from '@/components/HomepageSlider';
import Donate from '@/components/Donate';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: {
		default: 'Al Falah | Islamic Center Of Henrico',
		template: '%s | Masjid Al Falah',
	},
	description: 'Created by Al Falah IT Team',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className=''>
					<Navbar />
					<div>
						<HomepageSlider />
					</div>
					{children}
					<div className='hidden fixed text-white bg-gray-800 sm:top-[672px] p-3 '>
						<Link href='/donate'>Donate</Link>
					</div>
					{/* <Footer /> */}
				</div>
			</body>
		</html>
	);
}
