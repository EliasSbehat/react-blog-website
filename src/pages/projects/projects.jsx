import { NavLink } from 'react-router-dom';
import { Feedback } from '../../components/feedback';

const Projects = () => {
	return (
		<>
			<div className="flex bg-white py-[6rem]">
				<div className="section-projects mx-auto">
					<div className="container mx-auto">
						<div className="section-header">
							<div className="hero-content_wrapper"><h1 className="hero-h1 text-primary-blue text-center">WE HAVE MARKETED & DELIVERED A PORTFOLIO WORTH RS 3BN+</h1></div>
						</div>
						<div className="section-content pt-[5rem] flex grid grid-cols-1 sm:grid-cols-2 gap-8 sm:w-full w-10/12 mx-auto">
							{
								[{ projectName: 'Fair Square', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/609263b62ca8731fb6ad60aa_fs.png' }, { projectName: 'Mayfair Villas', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/6081ee9729ea98bef6fb16cb_6.jpg' }, { projectName: 'Mayfair Heights', img: '	https://uploads-ssl.webflow.com/60675406d40011636a539dc3/6081eac9ad2018452831e0a7_18.jpg' }].map((item, index) => (
									<div key={index} className="pvc-home-content_wrapper opacity-100 sm:opacity-80 hover:opacity-100">
										<NavLink to="/park-view-city" target="_blank" className="pvc-home-link w-inline-block">
											<div className="">
												<img
													src={item.img}
													loading="lazy"
													sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1279px) 77vw, (max-width: 1919px) 64vw, 1216px"
													alt=""
													className="object-cover w-full sm:h-full mx-auto"
												/>
											</div>
											<div className="text-primary-blue text-normal hero-h3 text-center">
												{item.projectName}
											</div>
										</NavLink>
									</div>
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
export { Projects };
