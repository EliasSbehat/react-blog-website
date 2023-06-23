import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { gbConfig } from '../../config';


const SubProject = () => {
	const { id } = useParams();
	const API_URL = gbConfig.API_URL;
	const [project, setProject] = useState(null);
	useEffect(() => {
		handleGetProjects();
	}, []);
	const handleGetProjects = async () => {
		await fetch(`${API_URL}/project/getById`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({id: id}) }).then((response)=>{
			return response.json();
		}).then((data)=>{
			setProject(data[0]);
		}).catch((error)=>{
			console.error('There was a problem with the fetch operation:', error);
		});
	}
	return (
		<>
			<div className="flex bg-white pb-[6rem]">
				<div className="section-projects mx-auto">
					<div className="container mx-auto">
						<div className="project-main-image wf-section">
							<img
								src={`${API_URL}/projects/images/${project?.project_image}`}
								loading="lazy"
								alt="Mayfair Villas"
								className="object-cover mx-auto"
							/>
						</div>
						<div className="section-header pt-4">
							<div className="hero-content_wrapper">
								<h1 className="hero-h1 text-primary-blue text-center">{project?.project_name}</h1>
								<h1 className="hero-h4 text-primary-blue text-center">{project?.project_author}</h1>
							</div>
						</div>
						<div className="section-content pt-[2rem] sm:w-full w-10/12 mx-auto">
							<h1 className="hero-h3 text-primary-blue text-left">PROJECT INTRODUCTION</h1>
							<p className="py-6">{project?.project_introduction}</p>
							<h1 className="hero-h3 text-primary-blue text-left">ABOUT DEVELOPERS</h1>
							<p className="py-6">{project?.about_developers}</p>
						</div>
						<video className="h-auto w-8/12 rounded-lg mx-auto" controls>
							<source src={project?.project_video} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
						<div className="project-downlaods grid grid-cols-1 sm:grid-cols-2 w-full pt-[3rem] items-center">
							<a
								href={`${API_URL}/projects/pdf/${project?.project_pdf}`}
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
								href={project?.project_location}
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
