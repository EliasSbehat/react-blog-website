import { useParams } from 'react-router-dom';

const SubEvent = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<>
			<div className="flex bg-white pb-[6rem]">
				<div className="section-projects mx-auto">
					<div className="container mx-auto">
						<div className="project-main-image wf-section">
							<img
								src="https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63c4f33a1c21785ad1d5a77b_322706468_709012050604789_8321354528725175344_n.jpg"
								loading="lazy"
								alt="Mayfair Villas"
								className="image-100"
							/>
						</div>
						<div className="section-content pt-[2rem] sm:w-full w-10/12 mx-auto">
							<h1 className="hero-h3 text-primary-blue text-left">Fair Deal Marketing Successfully Hosts Groundbreaking Ceremony of ‘Overseas Commercial Block.</h1>
							<p className="py-6">Fair Deal Marketing hosts the groundbreaking ceremony of ‘Overseas Commercial Block’ in Park View City Islamabad. Chief Guests Abdul Rehman Khan and Abdul Rafay Khan, Director Park View City, and Guest of Honour, Inaya Fareed graced the event. The event puts another prestigious commercial addition to the map of Park View City featuring world-class amenities at the most ideal location.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export { SubEvent };
