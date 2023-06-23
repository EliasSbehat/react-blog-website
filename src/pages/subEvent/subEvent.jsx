import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { gbConfig } from '../../config';

const SubEvent = () => {
	const { id } = useParams();
	const API_URL = gbConfig.API_URL;
	const [event, setEvent] = useState(null);
	useEffect(() => {
		handleGetProjects();
	}, []);
	const handleGetProjects = async () => {
		await fetch(`${API_URL}/event/getById`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({id: id}) }).then((response)=>{
			return response.json();
		}).then((data)=>{
			setEvent(data[0]);
		}).catch((error)=>{
			console.error('There was a problem with the fetch operation:', error);
		});
	}
	console.log(event);
	return (
		<>
			<div className="flex bg-white pb-[6rem]">
				<div className="section-events mx-auto">
					<div className="container mx-auto">
						<div className="event-main-image wf-section">
							<img
								src={`${API_URL}/events/images/${event?.event_image}`}
								loading="lazy"
								alt="Mayfair Villas"
								className="mx-auto object-cover"
							/>
						</div>
						<div className="section-content pt-[2rem] sm:w-full w-10/12 mx-auto">
							<h1 className="hero-h3 text-primary-blue text-left">{event?.event_name}</h1>
							<p className="py-6">{event?.event_description}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export { SubEvent };
