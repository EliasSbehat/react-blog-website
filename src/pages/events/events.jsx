import { NavLink } from 'react-router-dom';
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from '@material-tailwind/react';
import { Feedback } from '../../components/feedback';

const Events = () => {
	return (
		<>
			<div className="bg-white py-[6rem]">
				<div className="section-about mx-auto">
					<div className="container mx-auto">
						<div className="section-header">
							<h2 className="hero-h1 text-primary-blue text-center">
								KEEP YOUR SELF UPDATED WITH LATEST EVENTS
							</h2>
						</div>
						<div className="section-content pt-[5rem] px-[1rem] sm:px-[5rem]">
							<div className="pvc-home-content_wrapper opacity-100 sm:opacity-80 hover:opacity-100">
								<NavLink to="/park-view-city" target="_blank" className="pvc-home-link w-inline-block">
									<div className="pb-8">
										<img
											src="https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63c51114273781d6f481f0b9_324022609_720670059573236_4325219174042327251_n.jpg"
											loading="lazy"
											sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1279px) 77vw, (max-width: 1919px) 64vw, 1216px"
											alt=""
											className="w-12/12 object-cover sm:w-full w-10/12 sm:h-full mx-auto"
										/>
									</div>
									<div className="text-primary-blue text-normal hero-h3 text-center">Chairman Fair Group of Companies awarded Sales Partner of the Year 2022 by Park View City</div>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
				<div className="section-events-home py-[6rem]">
					<div className="container mx-auto">
						<div className="section-content pt-[5rem] flex grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8 sm:w-full w-10/12 mx-auto">
							{
								[{ marketEventName: 'Chairman Fair Group of Companies awarded Sales Partner of the Year 2022 by Park View City', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63c4f352ce5aa26a06ea48fa_324263429_3575429622685500_1849132266714367206_n.jpg' }, { marketEventName: 'Chairman Fair Group of Companies awarded Sales Partner of the Year 2022 by Park View City', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63c4f352ce5aa26a06ea48fa_324263429_3575429622685500_1849132266714367206_n.jpg' }, { marketEventName: 'Chairman Fair Group of Companies awarded Sales Partner of the Year 2022 by Park View City', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63c4f352ce5aa26a06ea48fa_324263429_3575429622685500_1849132266714367206_n.jpg' }, { marketEventName: 'Fair Deal Marketing Team Pindi Boys Titled as ‘Champions’ for Mega Stars League ‘22. ', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63c4f352ce5aa26a06ea48fa_324263429_3575429622685500_1849132266714367206_n.jpg' }, { marketEventName: 'Fair Deal Marketing Successfully Hosts Groundbreaking Ceremony of ‘Overseas Commercial Block. ', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63c4f352ce5aa26a06ea48fa_324263429_3575429622685500_1849132266714367206_n.jpg' }].map((item, index) => (
									<NavLink to="/">
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
			</div>
			<Feedback />
		</>
	);
};
export { Events };
