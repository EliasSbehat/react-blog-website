import { useParams } from 'react-router-dom';

const SubProject = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<>
			<div className="flex bg-white pb-[6rem]">
				<div className="section-projects mx-auto">
					<div className="container mx-auto">
						<div className="project-main-image wf-section">
							<img
								src="https://uploads-ssl.webflow.com/60675406d40011636a539dc3/6081ee9729ea98bef6fb16cb_6.jpg"
								loading="lazy"
								alt="Mayfair Villas"
								className="image-100"
							/>
						</div>
						<div className="section-header pt-4">
							<div className="hero-content_wrapper">
								<h1 className="hero-h1 text-primary-blue text-center">MAYFAIR VILLAS</h1>
								<h1 className="hero-h4 text-primary-blue text-center">Pre-Built Villas</h1>
							</div>
						</div>
						<div className="section-content pt-[2rem] sm:w-full w-10/12 mx-auto">
							<h1 className="hero-h3 text-primary-blue text-left">PROJECT INTRODUCTION</h1>
							<p className="py-6">Experience convenient living at Fair Deal Marketing’s Mayfair Villas, ready-to-move-in villas constructed with the highest standards at the most ideal location, facilitated with top-notch amenities. 5,10 Marla and 1,2 Kanal ready-to-move homes are available.</p>
							<h1 className="hero-h3 text-primary-blue text-left">ABOUT DEVELOPERS</h1>
							<p className="py-6">Founded in 2003 and since its inception, the company has become one of the leading entities in the Construction & Real Estate industry. Established in Dubai, Islamabad and Lahore, Fair Group is Pakistan's most awarded real estate marketing company, showcasing numerous awards and accolades on a national as well as international scale.</p>
						</div>
						<video className="h-auto w-8/12 rounded-lg mx-auto" controls>
							<source src="https://www.youtube.com/watch?v=qz0aGYrrlhU" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						<div className="project-downlaods grid grid-cols-1 sm:grid-cols-2 w-full pt-[3rem] items-center">
							<a
								href="https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63e0f810ea7c87f6a016c0b7_VIllas%20brochure_compressed.pdf"
								target="_blank"
								rel="noreferrer"
								className="project-file-link bg-primary-strong-yellow h-[10rem] opacity-90 hover:opacity-100 pt-[5rem] px-[3rem]"
							>
								<div className="project-link-content flex grid grid-rows-1 gap-4">
									<div className="text-sm text-primary-blue">Download</div>
									<div className="hero-h4 text-primary-blue text-weight-bold">
										Payment Plan
									</div>
								</div>
							</a>
							<a
								href="https://goo.gl/maps/zhRoNowgUJWMpWLe9"
								target="_blank"
								rel="noreferrer"
								className="project-file-link bg-primary-strong-blue h-[10rem] opacity-90 hover:opacity-100 pt-[5rem] px-[3rem]"
							>
								<div className="project-link-content flex grid grid-rows-1 gap-4">
									<div className="text-sm text-white">View</div>
									<div className="hero-h4 text-white text-weight-bold">
										Location
									</div>
								</div>
							</a>
						</div>

					</div>
				</div>
			</div>
		</>
	);
};
export { SubProject };
