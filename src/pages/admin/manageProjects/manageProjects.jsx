import React, { useEffect, useState } from "react";
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Avatar,
	Chip,
	Tooltip,
	Progress,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Input,
	Checkbox,
	Textarea
} from "@material-tailwind/react";
import { gbConfig } from '../../../config';

export const ManageProjects = () => {
	const [open, setOpen] = useState(false);
	const [dialogName, setDialogName] = useState("Create New Project");
	const [flag, setFlag] = useState('save');
	const [projectId, setProjectId] = useState("");
	const [file, setFile] = useState("");
	const [projects, setProjects] = useState(null);
	const [selectedImgFile, setSelectedImgFile] = useState(null);
	const [selectedPdfFile, setSelectedPdfFile] = useState(null);
	const [project_name, setName] = useState("");
	const [project_author, setAuthor] = useState("");
	const [project_introduction, setIntroduction] = useState("");
	const [about_developers, setDeveloper] = useState("");
	const [project_video, setVideo] = useState("");
	const [project_location, setLocation] = useState("");
	const API_URL = gbConfig.API_URL;
	useEffect(() => {
		handleGetAll();
	}, []);
	const handleGetAll = async () => {
		await fetch(`${API_URL}/project/get`).then((response)=>{
			return response.json();
		}).then((data)=>{
			setProjects(data);
		}).catch((error)=>{
			console.error('There was a problem with the fetch operation:', error);
		});
	}
	const handleDelete = async (e) => {
		if (confirm("Do you want to delete this row?")) {
			await fetch(`${API_URL}/project/delete`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({id: e.target.id}) }).then((response)=>{
				return response.json();
			}).then((data)=>{
				handleGetAll();
			}).catch((error)=>{
				console.error('There was a problem with the fetch operation:', error);
			});
		}
	}
	const handleCreate = () => {
		setOpen(true);
		handleFormat();
		setDialogName("Create New Project");
	}
	const handleEdit = (e) => {
		let id = e.target.id*1;
		setOpen(true);
		setFlag('edit');
		setDialogName("Edit Project");
		for (let i = 0; i < projects.length; i++) {
			if (id === projects[i].id) {
				console.log(projects[i]);
				setName(projects[i].project_name);
				setAuthor(projects[i].project_author);
				setIntroduction(projects[i].project_introduction.replace(/(\r\n|\n|\r)/gm, ''));
				setDeveloper(projects[i].about_developers.replace(/(\r\n|\n|\r)/gm, ''));
				setVideo(projects[i].project_video);
				setLocation(projects[i].project_location);
				setFile(`${API_URL}/projects/images/${projects[i].project_image}`);
				setProjectId(id);
			}
		}
	}
	const handleSave = async () => {
		if (!project_name) {
			alert("Please enter a project name");
			return;
		}
		const formData = new FormData();
    	formData.append("project_image", selectedImgFile);
    	formData.append("project_pdf", selectedPdfFile);
    	formData.append("project_name", project_name);
    	formData.append("project_author", project_author);
    	formData.append("project_introduction", project_introduction);
    	formData.append("about_developers", about_developers);
    	formData.append("project_video", project_video);
    	formData.append("project_location", project_location);
		formData.append("flag", flag);
		formData.append("project_id", projectId);
		try {
			await fetch(`${API_URL}/project/add`, {
				method: "POST",
				body: formData,
			}).then((response)=>{
				if (response.ok) {
					handleFormat();
					setOpen(false);
					handleGetAll();
				} else {
					alert("failed");
				}
				return response.json();
			}).then((data)=>{
				if (data.msg==="exist") {
					alert("The project name has already exist.");
				}
			}).catch((error)=>{
				console.error('There was a problem with the fetch operation:', error);
			});
		} catch (error) {
			alert("Error while saved: " + error.message);
		}
	}
	const handleFormat = () => {
		setName("");
		setAuthor("");
		setIntroduction("");
		setDeveloper("");
		setVideo("");
		setLocation("");
		setSelectedPdfFile(null);
		setSelectedImgFile(null);
		setFile("");
		setFlag('save');
		setProjectId("");
	}
	const handleOpen = () => setOpen((cur) => !cur);
	const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
		setSelectedImgFile(e.target.files[0]);
    }
	const handlePDFChange = (e) => {
		setSelectedPdfFile(e.target.files[0]);
	}
	const setInputHandler= (e) => {
		switch (e.target.name) {
			case 'project_name':
				setName(e.target.value);
				break;
			case 'project_author':
				setAuthor(e.target.value);
				break;
			case 'project_introduction':
				setIntroduction(e.target.value);
				break;
			case 'about_developers':
				setDeveloper(e.target.value);
				break;
			case 'project_video':
				setVideo(e.target.value);
				break;
			case 'project_location':
				setLocation(e.target.value);
			break;
		
			default:
				break;
		}
	}
	return (
		<>
			<div className="mt-12 mb-8 flex flex-col gap-12">
				<Card>
					<CardHeader variant="gradient" color="blue" className="mb-8 p-6">
						<Typography variant="h6" color="white">
						Projects Manage
						</Typography>
					</CardHeader>
					<CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
						<Button className="mx-6" onClick={handleCreate}>Create</Button>
						<Dialog open={open} handler={handleOpen}>
							<DialogHeader>{dialogName}</DialogHeader>
							<DialogBody divider className="h-[23rem] sm:h-[40rem] overflow-scroll">
								<Typography className="font-normal">
									<div className=" w-form">
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
											<div>
												<Input variant="standard" onChange={setInputHandler} name="project_name" value={project_name} label="Project Name" />
											</div>
											<div>
												<Input variant="standard" onChange={setInputHandler} name="project_author" value={project_author} label="Author" />
											</div>
										</div>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-[1rem] sm:pt-[2rem]">
											<div>
												<Textarea variant="standard" onChange={setInputHandler} name="project_introduction" value={project_introduction} label="Project Introduction" />
											</div>
											<div>
												<Textarea variant="standard" onChange={setInputHandler} name="about_developers" value={about_developers} label="About Developers" />
											</div>
										</div>
										<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-[1rem] sm:pt-[2rem]">
											<div>
												<Input variant="standard" onChange={setInputHandler} name="project_video" value={project_video} label="Youtube Video Link" />
											</div>
											<div>
												<Input variant="standard" onChange={setInputHandler} name="project_location" value={project_location} label="Location: Google map link" />
											</div>
										</div>
										<div className="pt-[2rem]">
											<h5>Add Image:</h5>
											<input type="file" accept="image/*" onChange={handleChange} />
											{
												file&&
													<img
														className="h-full w-full rounded-lg mt-2"
														src={file}
														alt="image"
													/>
											}
										</div>
										<div className="pt-[2rem]">
											<h5>Add Payment plan PDF:</h5>
											<input type="file" accept="application/pdf" onChange={handlePDFChange} />
										</div>
									</div>
								</Typography>
							</DialogBody>
							<DialogFooter className="space-x-2">
								<Button variant="outlined" color="red" onClick={handleOpen}>
									close
								</Button>
								<Button variant="gradient" color="green" onClick={handleSave}>
									Save
								</Button>
							</DialogFooter>
						</Dialog>
						<table className="w-full min-w-[640px] table-auto">
							<thead>
								<tr>
									{["Action","project name", "author", "image", "introduction", "about developers", "video", "payment plan", "location", "created date"].map(
										(el) => (
										<th
											key={el}
											className="border-b border-blue-gray-50 py-3 px-5 text-left"
										>
											<Typography
											variant="small"
											className="text-[11px] font-bold uppercase text-blue-gray-400"
											>
											{el}
											</Typography>
										</th>
										)
									)}
								</tr>
							</thead>
							<tbody>
								{projects && projects.map(
								(item, key) => {
									const className = `py-2 px-2 ${
									key === projects.length - 1
										? ""
										: "border-b border-blue-gray-50"
									}`;
									const ellipsisClassName = 'px-4 py-2 border w-52 overflow-hidden overflow-ellipsis whitespace-nowrap';

									return (
									<tr key={key}>
										<td className={className}>
											<Typography
												as="a"
												href="#"
												className="text-xs font-semibold text-blue-gray-600 underline"
												id={item.id}
												onClick={handleEdit}
											>
												Edit
											</Typography>
											<Typography>-</Typography>
											<Typography
												as="a"
												href="#"
												className="text-xs font-semibold text-blue-gray-600 underline"
												id={item.id}
												onClick={handleDelete}
											>
												Delete
											</Typography>
										</td>
										<td className={className}>
											<Typography className={ellipsisClassName} title={item.project_name}>{item.project_name}</Typography>
										</td>
										<td className={className}>
											<Typography className={ellipsisClassName} title={item.project_author}>{item.project_author}</Typography>
										</td>
										<td className={className}>
											<p className="w-52">
												<a href={`${API_URL}/projects/images/${item.project_image}`} target="_blank">
													<img
														className="h-full w-full rounded-sm mt-2"
														src={`${API_URL}/projects/images/${item.project_image}`}
														alt="image"
													/>
												</a>
											</p>
										</td>
										<td className={className}>
											<Typography className={ellipsisClassName} title={item.project_introduction}>{item.project_introduction}</Typography>
										</td>
										<td className={className}>
											<Typography className={ellipsisClassName} title={item.about_developers}>{item.about_developers}</Typography>
										</td>
										<td className={className}>
											<Typography title={item.project_video}><a href={item.project_video} target="_blank">{item.project_video}</a></Typography>
										</td>
										<td className={className}>
											<Typography className={ellipsisClassName} title={item.project_pdf}><a href={`${API_URL}/projects/pdf/${item.project_pdf}`} target="_blank">{item.project_pdf}</a></Typography>
										</td>
										<td className={className}>
											<Typography className={ellipsisClassName} title={item.project_location}><a href={item.project_location} target="_blank">{item.project_location}</a></Typography>
										</td>
										<td className={className}>
											<Typography title={item.created_date}>{item.created_date}</Typography>
										</td>
									</tr>
									);
								}
								)}
							</tbody>
						</table>
					</CardBody>
				</Card>
			</div>
		</>
	);
};
