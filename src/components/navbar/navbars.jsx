import { useState, useEffect } from 'react';
import {
	Navbar,
	MobileNav,
	Typography,
	IconButton
} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const Navbars = () => {
	const [openNav, setOpenNav] = useState(false);
	const [navActive, setNavActive] = useState('');
	useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);
	const navbarStyles = {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		background: 'white',
		zIndex: 50, // Adjust this value based on your project's z-index requirements
	};
	const navActiveLinkStyles = 'flex items-center text-black hover:text-[#f3b817] nav-active';
	const navLinkStyles = 'flex items-center text-black hover:text-[#f3b817]';
	let parkLinkStyle;
	let projectStyle;
	let aboutStyle;
	let eventStyle;
	let awardStyle;
	let contactStyle;
	if (navActive === 'nav-parkview') {
		parkLinkStyle = navActiveLinkStyles;
	} else {
		parkLinkStyle = navLinkStyles;
	}
	if (navActive === 'nav-projects') {
		projectStyle = navActiveLinkStyles;
	} else {
		projectStyle = navLinkStyles;
	}
	if (navActive === 'nav-about') {
		aboutStyle = navActiveLinkStyles;
	} else {
		aboutStyle = navLinkStyles;
	}
	if (navActive === 'nav-events') {
		eventStyle = navActiveLinkStyles;
	} else {
		eventStyle = navLinkStyles;
	}
	if (navActive === 'nav-awards') {
		awardStyle = navActiveLinkStyles;
	} else {
		awardStyle = navLinkStyles;
	}
	if (navActive === 'nav-contact') {
		contactStyle = navActiveLinkStyles;
	} else {
		contactStyle = navLinkStyles;
	}
	const navList = (
		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/park-view-city" className={parkLinkStyle} onClick={ () => setNavActive('nav-parkview')}>PARKVIEW CITY</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/projects" className={projectStyle} onClick={ () => setNavActive('nav-projects')}>OUR PROJECTS</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/about-us" className={aboutStyle} onClick={ () => setNavActive('nav-about')}>ABOUT US</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/events" className={eventStyle} onClick={ () => setNavActive('nav-events')}>EVENTS</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/" className={awardStyle} onClick={ () => setNavActive('nav-awards')}>AWARDS</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/" className={contactStyle} onClick={ () => setNavActive('nav-contact')}>CONTACT US</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<button><a href="tel:+9251111050106" className="flex items-center text-black primaryButton">ENQUIRE?</a></button>
			</Typography>
		</ul>
	);
	return (
		<header>
			<div style={navbarStyles} className="drop-shadow-xl">
				<Navbar className="mx-auto max-w-screen-xl py-2 px-2 lg:px-8 lg:py-1 shadow-none">
					<div className="container mx-auto flex items-center justify-between text-blue-gray-900">
						<Typography
							className="mr-4 cursor-pointer py-1.5 font-medium"
						>
							<NavLink to="/" onClick={ () => setNavActive('nav-logo')}>
								<img src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64070199c344656688f93129_FDM.webp" loading="lazy" alt="" className="w-9/12 xl:w-11/12" />
							</NavLink>
						</Typography>
						<div className="hidden lg:block">{navList}</div>
						<IconButton
							variant="text"
							className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className="h-6 w-6"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</IconButton>
					</div>
					<MobileNav open={openNav}>
						<div className="container mx-auto">
							{navList}
						</div>
					</MobileNav>
				</Navbar>
			</div>
		</header>
	);
};

export { Navbars };
