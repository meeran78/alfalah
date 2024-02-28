'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from './../../public/alfalahlogo.png';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
	AiOutlineClose,
	AiOutlineTwitter,
	AiOutlineYoutube,
	AiOutlineFacebook,
} from 'react-icons/ai';

const Navbar = () => {
	const [mobileNav, setMobileNav] = useState(false);

	const handleNav = () => {
		setMobileNav(!mobileNav);
	};

	return (
		<>
			<nav className=' w-full h-24 shadow-xl bg-gray-800/80'>
				<div className='flex justify-between items-center h-full w-full px-x xl:px-16'>
					<Link href='/' alt='logo' className='cursor-pointer'>
						<Image
							src={logo}
							alt='logo'
							width='105'
							height='75'
							className='cursor-pointer rounded-full'
							priority
						/>
					</Link>
					<div className='text-white'>
						<ul className='hidden sm:flex'>
							<Link href='/'>
								<li className='ml-10 uppercase hover:border-b  border-Slate-600 text-xl'>Home</li>
							</Link>
							<Link href='/about'>
								<li className='ml-10 uppercase hover:border-b  border-Slate-600 text-xl'>
									About
								</li>
							</Link>
							<Link href='/programs'>
								<li className='ml-10 uppercase hover:border-b  border-Slate-600 text-xl'>
									Programs & Events
								</li>
							</Link>
							<Link href='/services'>
								<li className='ml-10 uppercase hover:border-b border-Slate-600 text-xl'>
									Services
								</li>
							</Link>
							<Link href='/contact'>
								<li className='ml-10 uppercase hover:border-b  border-Slate-600 text-xl'>
									Contact Us
								</li>
							</Link>
						</ul>
					</div>
					<div
						onClick={() => handleNav()}
						className='cursor-pointer sm:hidden p-3'>
						<GiHamburgerMenu size={25} color='white'/>
					</div>
				</div>
				<div
					className={
						mobileNav
							? 'fixed top-0 left-0 w-[70%] sm:hidden h-screen bg-slate-400 p-10 ease-in duration-500 z-99'
							: 'fixed left-[-100%] top-0 ease-in duration-500 z-50'
					}>
					<div className='flex w-full items-center justify-end'>
						<div onClick={() => handleNav()} className='cursor-pointer'>
							<AiOutlineClose size={25} />
						</div>
					</div>
					<div className='flex-col py-4 z-auto'>
						<ul>
						<Link href='/'>
								<li
									className='py-4 cursor-pointer uppercase hover:border-b border-gray-600'
									onClick={() => setMobileNav(false)}>
									Home
								</li>
							</Link>
							<Link href='/about'>
								<li
									className='py-4 cursor-pointer uppercase hover:border-b border-gray-600'
									onClick={() => setMobileNav(false)}>
									About
								</li>
							</Link>
							<Link href='/programs'>
								<li
									className='py-4 cursor-pointer uppercase hover:border-b border-gray-600'
									onClick={() => setMobileNav(false)}>
									Programs & Events
								</li>
							</Link>
							<Link href='/services'>
								<li
									className='py-4 cursor-pointer uppercase hover:border-b border-gray-600'
									onClick={() => setMobileNav(false)}>
									Services
								</li>
							</Link>
							<Link href='/contact'>
								<li
									className='py-4 cursor-pointer uppercase hover:border-b border-gray-600'
									onClick={() => setMobileNav(false)}>
									Contact Us
								</li>
							</Link>
						</ul>
					</div>
					<div className='flex flex-row justify-around pt-10 items-center'>
						<AiOutlineTwitter size={25} className='mr-4' />
						<AiOutlineYoutube size={25} className='mr-4' />
						<AiOutlineFacebook size={25} />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
