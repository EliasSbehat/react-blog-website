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
	const navList = (
		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/park-view-city" className="flex items-center text-black hover:text-[#f3b817]">PARKVIEW CITY</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/" className="flex items-center text-black hover:text-[#f3b817]">OUR PROJECTS</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/" className="flex items-center text-black hover:text-[#f3b817]">ABOUT US</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/" className="flex items-center text-black hover:text-[#f3b817]">EVENTS</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/" className="flex items-center text-black hover:text-[#f3b817]">AWARDS</NavLink>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 text-[11px] xl:text-sm"
			>
				<NavLink to="/" className="flex items-center text-black hover:text-[#f3b817]">CONTACT US</NavLink>
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
							as="a"
							href="/"
							className="mr-4 cursor-pointer py-1.5 font-medium"
						>
							<img src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64070199c344656688f93129_FDM.webp" loading="lazy" alt="" className="w-9/12 xl:w-11/12" />
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
