import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from '@material-tailwind/react';
import { Feedback } from '../../components/feedback';
import { gbConfig } from '../../config';

const Events = () => {
	const API_URL = gbConfig.API_URL;
	const [events, setEvents] = useState(null);
	useEffect(() => {
		handleGetEvents();
	}, []);
	const handleGetEvents = async () => {
		await fetch(`${API_URL}/event/get`).then((response)=>{
			return response.json();
		}).then((data)=>{
			setEvents(data);
		}).catch((error)=>{
			console.error('There was a problem with the fetch operation:', error);
		});
	}
	return (
		<>
			<div className="bg-white py-[6rem]">
				<div className="section-about mx-auto">
					<div className="container mx-auto">
						<div className="section-header">
							<div className="hero-content_wrapper">
								<h2 className="hero-h1 text-primary-blue text-center">
									KEEP YOUR SELF UPDATED WITH LATEST EVENTS
								</h2>
							</div>
						</div>
						<div className="section-content pt-[5rem] px-[1rem] sm:px-[5rem]">
							<div className="pvc-home-content_wrapper opacity-100 sm:opacity-80 hover:opacity-100">
								<NavLink to={`/events/${events && events[events.length-1]?.id}`} className="pvc-home-link w-inline-block">
									<div className="pb-8">
										<img
											src={`${API_URL}/events/images/${events && events[events.length-1]?.event_image}`}
											loading="lazy"
											sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1279px) 77vw, (max-width: 1919px) 64vw, 1216px"
											alt=""
											className="w-12/12 object-cover sm:w-full w-10/12 sm:h-full mx-auto"
										/>
									</div>
									<div className="text-primary-blue text-normal hero-h3 text-center">{events && events[events.length-1]?.event_name}</div>
								</NavLink>
							</div>
						</div>
					</div>
				</div>
				<div className="section-events-home py-[6rem]">
					<div className="container mx-auto">
						<div className="section-content pt-[5rem] flex grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8 sm:w-full w-10/12 mx-auto">
							{
								events && events.map((item, index) => (
									<NavLink to={`/events/${item.id}`}>
										<Card key={index} className="mt-6 mx-auto">
											<CardHeader color="blue-gray" className="relative h-56">
												<img
													src={`${API_URL}/events/images/${item.event_image}`}
													loading="lazy"
													sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1279px) 77vw, (max-width: 1919px) 64vw, 1216px"
													alt=""
													className="object-cover w-full sm:h-full mx-auto opacity-80 hover:opacity-100"
												/>
											</CardHeader>
											<CardBody>
												<Typography variant="h5" color="text-black hero-h4" className="mb-2">
													{item.event_name}
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
