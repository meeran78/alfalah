import { Programs } from './models';
import { connectToDb } from './utils';
import { unstable_noStore as noStore } from 'next/cache';
const imageSlide = [
	{
		url: 'nature1.jpg',
		title: 'About Masjid',
		body: '​​Abdullah ibn &apos;Amr The Messenger of Allah صلى الله عليه وسلم said: "Whoever would love to be delivered from Hellfire and admitted into Paradise, let him meet his end with faith in Allah and the Last Day, and let him treat people as he would love to be treated."    (Muslim)',
	},
	{
		url: 'nature2.jpg',
		title: 'About Masjid',
		body: '​​Abdullah ibn &apos;Amr The Messenger of Allah صلى الله عليه وسلم said: "Whoever would love to be delivered from Hellfire and admitted into Paradise, let him meet his end with faith in Allah and the Last Day, and let him treat people as he would love to be treated."    (Muslim)',
	},
	{
		url: 'nature3.jpg',
		title: 'About Masjid',
		body: '​​Abdullah ibn &apos;Amr The Messenger of Allah صلى الله عليه وسلم said: "Whoever would love to be delivered from Hellfire and admitted into Paradise, let him meet his end with faith in Allah and the Last Day, and let him treat people as he would love to be treated."    (Muslim)',
	},
	{
		url: 'nature4.jpg',
		title: 'About Masjid',
		body: '​​Abdullah ibn &apos;Amr The Messenger of Allah صلى الله عليه وسلم said: "Whoever would love to be delivered from Hellfire and admitted into Paradise, let him meet his end with faith in Allah and the Last Day, and let him treat people as he would love to be treated."    (Muslim)',
	},
	{
		url: 'nature5.jpg',
		title: 'About Masjid',
		body: '​​Abdullah ibn &apos;Amr The Messenger of Allah صلى الله عليه وسلم said: "Whoever would love to be delivered from Hellfire and admitted into Paradise, let him meet his end with faith in Allah and the Last Day, and let him treat people as he would love to be treated."    (Muslim)',
	},
];

const programData = [
	{
		id: 1,
		title: 'Common Mistakes',
		date: '02/02/2024',
		desc: 'Clarifying common mistakes widespread among the Muslisms.',
		image: '/nature1.jpg',
	},
	{
		id: 2,
		title: 'Doubts & Desires',
		date: '02/06/2024',
		desc: 'Join us next Saturday for an evening of faith, uplifting your iman and cleansing your heart from doubts.',
		image: '/nature2.jpg',
	},
	{
		id: 3,
		title: 'Light Upon Light',
		date: '04/02/2024',
		desc: 'Alfalah presents Revival night with Light Upon Light.',
		image: '/nature3.jpg',
	},
	{
		id: 4,
		title: 'Quran and Arabic Class',
		date: '07/02/2024',
		desc: 'All levels Quran classes with Tajweed and Foundatino Arabic lanugages classes [Saturday & Sunday].',
		image: '/nature4.jpg',
	},
];

//Five Pillars Data
export const fivePillars = [
	{
		id: 1,
		title: 'Shahadah',
		desc: 'Every Muslim is supposed to believe that there is only one God and His messenger was Prophet Muhammad.',
	},
	{
		id: 2,
		title: 'Salah',
		desc: 'It is the ritual of praying to Allah five times a day facing Makkah. A muslim must perform the ritual after dark, noon, sunset, mid-afternoon and at dawn.',
	},
	{
		id: 3,
		title: 'Sawm',
		desc: 'Sawm or fasting helps muslims to develop a sense of self-discipline and allows them to identify with the poor and the needy.',
	},
	{
		id: 4,
		title: 'Zakat',
		desc: 'Zakat is the obligatory giving of alms, to the less fortunate and distributed according to the needs of the needy.',
	},
	{
		id: 5,
		title: 'Hajj',
		desc: 'Hajj is the pligrimage to Makkah and is the fifth pillar of Islam. It is the religious journey of the prophet Muhammad and his Messenger. It is the most important religious journey of Islam and is the most important religious journey of the entire human race.',
	},
];

export const LatestNewsFeaturesData = [
	{
		id: 1,
		title: 'Common Mistakes',
		date: '02/02/2024',
		desc: 'Clarifying common mistakes widespread among the Muslisms.',
		image: '/nature1.jpg',
	},
	{
		id: 2,
		title: 'Doubts & Desires',
		date: '02/06/2024',
		desc: 'Join us next Saturday for an evening of faith, uplifting your iman and cleansing your heart from doubts.',
		image: '/nature2.jpg',
	},
	{
		id: 3,
		title: 'Light Upon Light',
		date: '04/02/2024',
		desc: 'Alfalah presents Revival night with Light Upon Light.',
		image: '/nature3.jpg',
	},
	
	
];

export const carouselData = [
	{
		id: 1,
		image: '/nature1.jpg',
		title: 'Welcoming Ramadhan',
		content: 'Ramadhan is the most important holiday of Islam.',
	},
	{
		id: 2,
		image: '/nature2.jpg',
		title: 'Islamic School',
		content: 'islamic school program.',
	},
	{
		id: 3,
		image: '/nature3.jpg',
		title: 'Welcoming Ramadhan',
		content: 'Ramadhan is the most important holiday of Islam.',
	},
	{
		id: 4,
		image: '/nature4.jpg',
		title: 'Welcoming Ramadhan',
		content: 'Ramadhan is the most important holiday of Islam.',
	},
	{
		id: 5,
		image: '/nature5.jpg',
		title: 'Banquet Hall',
		content: 'Banquet Hall.',
	},
];

export const getPrograms = async () => {
	//return programData;
	try {
		connectToDb();
		const programs = await Programs.find();
		return programs;
	} catch (err) {
		console.log(err + 'Failed to fetch programs');
		throw new Error('Failed to fetch programs');
	}
};

export const getProgram = async (id) => {
	noStore();
	// console.log(id)
	// return programData.find((prog) => prog.id === parseInt(id));
	try {
		connectToDb();
		const program = await Programs.findById(id);
		return program;
	} catch (err) {
		console.log(err + 'Failed to fetch program');
		throw new Error('Failed to fetch program');
	}
};
