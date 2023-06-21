import { NavLink, useParams } from 'react-router-dom';
import {
	Select,
	Option,
	Input,
	Card,
	CardHeader,
	CardBody,
	Typography,
} from '@material-tailwind/react';
import {
	ClubSVG,
	HospitalSVG,
	CommunitySVG,
	SchoolSVG,
	InfrastructureSVG,
	SheddingSVG,
	CommercialSVG,
	ZooSVG,
	CinemaSVG
} from '../../assets/features';
import { Feedback } from '../../components/feedback';

const SubParkViewCity = () => {
	const { id } = useParams();
	const features = [
		{
			name: 'Imax Cinemas',
			description: 'Park View City Location will be an epitome of luxury and entertainment, the Cinemas with 3-D technology will provide the residents with an out of the world cinematic experience.',
			img: CinemaSVG
		},
		{
			name: 'Commercial Zones',
			description: 'Commercial zones including the biggest brands name in the retail will cater to all your needs, while giving you an ultimate enjoyable shopping experience.',
			img: CommercialSVG
		},
		{
			name: 'Zoos & Parks',
			description: 'The zoos, parks and other fun activities are also included in the plan to load the society with amenities to attract every age group at the most convenient locations',
			img: ZooSVG
		},
		{
			name: 'Gated Community',
			description: 'Park View City Islamabad is a secure and a fully gated neighborhood surrounded by a boundary wall covering all the sides of the society. The neighboring societies are not entirely covered, while this society has even barricaded.',
			img: CommunitySVG
		},
		{
			name: 'Load Shedding Free Zone',
			description: 'To make Park View City Location a load shedding free zone the construction work commenced on the water dam will also include an electric power plant in order to ensure the uninterrupted supply of electricity in the society.',
			img: SheddingSVG
		},
		{
			name: 'Modern Infrastructure',
			description: 'Taking advantage of the lush green natural surroundings of Park View City Islamabad, this project promises to be one of the landmarks in the making.',
			img: InfrastructureSVG
		},
		{
			name: 'Club & Community Center',
			description: 'The club and community center in the society gives a chance to the residents to enjoy a variety of indoor and outdoor sports like bowling, snooker, cricket, tennis, hockey and golf.',
			img: ClubSVG
		},
		{
			name: 'Hospital',
			description: 'A huge specially designed hospital will be constructed in the society to facilitate residents with modern day equipment and latest technology.',
			img: HospitalSVG
		},
		{
			name: 'Schools',
			description: 'The incorporation of best Schools and educational institutions will be primarily focused, offering the best curriculum in proximity to the residential blocks so they are easily accessible.',
			img: SchoolSVG
		}
	];
	const ideaLocation = [
		{ time: '15 minutes', location: 'to Gulzar e Quaid' },
		{ time: '30 minutes', location: 'to Bahria Town' },
		{ time: '05 minutes', location: 'to Khana-pul' },
		{ time: '20 minutes', location: 'to Zero Point' },
		{ time: '15 minutes', location: 'to Zero Point' },
	];
	console.log(id);
	return (
		<>
			<div className="flex bg-white pb-[6rem]">
				<div className="section-projects mx-auto">
					<div className="container mx-auto">
						<div className="project-main-image wf-section">
							<img
								src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64070fcc174e612369a6adaf_MAP-min-p-1600.webp"
								loading="lazy"
								alt="Mayfair Villas"
								className="image-100"
							/>
						</div>
						<div className="section-header pt-4">
							<div className="hero-content_wrapper">
								<h1 className="hero-h1 text-primary-blue text-center">PARKVIEW CITY ISLAMABAD</h1>
								<h1 className="hero-h4 text-primary-blue text-center">HOUSING SOCIETY</h1>
							</div>
						</div>
						<div className="section-content pt-[2rem] sm:w-full w-10/12 mx-auto">
							<h1 className="hero-h3 text-primary-blue text-left">PROJECT INTRODUCTION</h1>
							<p className="py-6">Experience convenient living at Fair Deal Marketing’s Mayfair Villas, ready-to-move-in villas constructed with the highest standards at the most ideal location, facilitated with top-notch amenities. 5,10 Marla and 1,2 Kanal ready-to-move homes are available.</p>
							<video className="h-auto w-8/12 rounded-lg mx-auto py-6" controls>
								<source src="https://www.youtube.com/watch?v=qz0aGYrrlhU" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
							<h1 className="hero-h3 text-primary-blue text-left">ABOUT DEVELOPERS</h1>
							<p className="py-6">Founded in 2003 and since its inception, the company has become one of the leading entities in the Construction & Real Estate industry. Established in Dubai, Islamabad and Lahore, Fair Group is Pakistan's most awarded real estate marketing company, showcasing numerous awards and accolades on a national as well as international scale.</p>
						</div>
						<div className="section-park py-[6rem] w-10/12 mx-auto">
							<h1 className="hero-h3 text-primary-blue text-left">VIEW BLOCK DETAILS</h1>
							<div className="container mx-auto">
								<div className="section-content pt-[5rem] flex grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8 sm:w-full w-10/12 mx-auto">
									{
										[{ marketEventName: 'D BLOCK', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63e4976ef470fc00bc748b3a_2-kanal-D-block-1%201-p-500.png' }, { marketEventName: 'D BLOCK', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63e4976ef470fc00bc748b3a_2-kanal-D-block-1%201-p-500.png' }, { marketEventName: 'D BLOCK', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63e4976ef470fc00bc748b3a_2-kanal-D-block-1%201-p-500.png' }, { marketEventName: 'E Block', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63e4976ef470fc00bc748b3a_2-kanal-D-block-1%201-p-500.png' }, { marketEventName: 'E Block', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63e4976ef470fc00bc748b3a_2-kanal-D-block-1%201-p-500.png' }].map((item, index) => (
											<NavLink to={`/park-view-city/${id}/${item.marketEventName}`}>
												<Card key={index} className="mt-6 mx-auto">
													<CardHeader color="blue-gray" className="relative h-56">
														<img
															src={item.img}
															loading="lazy"
															sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1279px) 77vw, (max-width: 1919px) 64vw, 1216px"
															alt=""
															className="object-cover w-full sm:h-full mx-auto opacity-80 hover:opacity-100"
														/>
													</CardHeader>
													<CardBody>
														<Typography variant="h5" color="text-black hero-h4" className="mb-2">
															{item.marketEventName}
														</Typography>
													</CardBody>
												</Card>
											</NavLink>
										))
									}
								</div>
							</div>
						</div>
						<div className="section-features pt-[1rem] w-10/12 mx-auto">
							<div className="container mx-auto">
								<h1 className="hero-h3 text-primary-blue text-left">AMENITIES & FEATURES</h1>
								<div className="section-content pt-[5rem] flex grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8 sm:w-full w-10/12 mx-auto">
									{
										features.map((item, index) => (
											<Card key={index} className="mt-6 mx-auto">
												<CardHeader color="blue-gray" className="relative w-[6rem] h-26 mx-auto p-6 bg-primary-yellow">
													<img
														src={item.img}
														loading="lazy"
														sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1279px) 77vw, (max-width: 1919px) 64vw, 1216px"
														alt=""
														className="object-cover w-[6rem] mx-auto opacity-80 hover:opacity-100"
													/>
												</CardHeader>
												<CardBody>
													<p className="text-black hero-h4 mb-2">
														{item.name}
													</p>
													<p className="text-black mb-2">
														{item.description}
													</p>
												</CardBody>
											</Card>
										))
									}
								</div>
							</div>
						</div>
						<div className="section-location py-[4rem] w-10/12 mx-auto">
							<div className="container mx-auto">
								<h1 className="hero-h3 text-primary-blue text-left">IDEAL LOCATION</h1>
								<div className="section-content pt-[2rem] flex grid grid-cols-1 xl:grid-cols-5 md:grid-cols-3 gap-2 sm:w-full w-10/12 mx-auto">
									{
										ideaLocation.map((item, index) => (
											<Card key={index} className="mt-6 mx-auto w-full">
												<CardBody>
													<p className="text-black hero-h4 text-primary-yellow mb-2">
														{item.time}
													</p>
													<p className="text-black mb-2">
														{item.location}
													</p>
												</CardBody>
											</Card>
										))
									}
								</div>
							</div>
						</div>
						<div className="section-content py-[5rem]">
							<div className="contact-us-content_wrapper">
								<div className="contact-us-form w-form w-6/12 mx-auto">
									<div className="grid grid-cols-1 gap-8">
										<div className="contact-us-form-input_wrapper">
											<Input variant="standard" label="FULL NAME" />
										</div>
										<div className="contact-us-form-input_wrapper">
											<Input variant="standard" label="CONTACT NUMBER" />
										</div>
										<div className="contact-us-form-input_wrapper">
											<Select variant="static" label="Please Select Plot Size">
												<Option>5 Marla</Option>
												<Option>8 Marla</Option>
												<Option>10 Marla</Option>
												<Option>1 Kanal</Option>
												<Option>2 Kanal</Option>
											</Select>
										</div>
									</div>
									<button className="mx-auto my-4 primaryButton flex items-center text-black text-center">
										SUBMIT
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-appointment bg-primary-strong-blue pt-[2rem] pb-[4rem]">
				<div className="container mx-auto">
					<div className="section-content section-content--appointment mx-[2rem] sm:mx-[6rem]">
						<div className="section-content--appointment-2 grid grid-cols-1 sm:grid-cols-2">
							<div className="appointment-image-2 mx-auto"></div>
							<div className="appointment-content flex grid grid-rows-3 mx-auto pt-[3rem]">
								<div className="appointment-content_wrapper">
									<div className="text-primary-yellow hero-4 text-weight">
										Hira Ali Khalid <br />
									</div>
									<div className="text-white">
										Marketing Head - FDM
									</div>
								</div>
								<div className="pt-[2rem]">
									<a
										href="https://calendly.com/hira-s"
										target="_blank"
										rel="noreferrer"
										className="primaryYellowButton"
									>
										BOOK MEETING
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Feedback />
		</>
	);
};
export { SubParkViewCity };
