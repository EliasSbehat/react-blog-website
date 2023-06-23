import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { Feedback } from '../../components/feedback';
import { gbConfig } from '../../config';

const Projects = () => {
	const API_URL = gbConfig.API_URL;
	const [projects, setProjects] = useState(null);
	useEffect(() => {
		handleGetProjects();
	}, []);
	const handleGetProjects = async () => {
		await fetch(`${API_URL}/project/get`).then((response)=>{
			return response.json();
		}).then((data)=>{
			setProjects(data);
		}).catch((error)=>{
			console.error('There was a problem with the fetch operation:', error);
		});
	}
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
								projects && projects.map((item, index) => (
									<div key={index} className="pvc-home-content_wrapper opacity-100 sm:opacity-80 hover:opacity-100">
										<NavLink to={`/projects/${item.id}`} className="pvc-home-link w-inline-block">
											<div className="">
												<img
													src={`${API_URL}/projects/images/${item.project_image}`}
													loading="lazy"
													sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1279px) 77vw, (max-width: 1919px) 64vw, 1216px"
													alt=""
													className="object-cover w-full sm:h-full mx-auto"
												/>
											</div>
											<div className="text-primary-blue text-normal hero-h3 text-center">
												{item.project_name}
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
