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

export const ManageEvents = () => {
	const [open, setOpen] = useState(false);
	const [dialogName, setDialogName] = useState("Create New Event");
	const [flag, setFlag] = useState('save');
	const [eventId, setEventId] = useState("");
	const [file, setFile] = useState("");
	const [events, setEvents] = useState(null);
	const [selectedImgFile, setSelectedImgFile] = useState(null);
	const [event_name, setEventName] = useState("");
	const [event_description, setDescription] = useState("");
	const API_URL = gbConfig.API_URL;
	useEffect(() => {
		handleGetAll();
	}, []);
	const handleGetAll = async () => {
		await fetch(`${API_URL}/event/get`).then((response)=>{
			return response.json();
		}).then((data)=>{
			setEvents(data);
		}).catch((error)=>{
			console.error('There was a problem with the fetch operation:', error);
		});
	}
	const handleDelete = async (e) => {
		if (confirm("Do you want to delete this row?")) {
			await fetch(`${API_URL}/event/delete`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({id: e.target.id}) }).then((response)=>{
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
		setDialogName("Create New Event");
	}
	const handleEdit = (e) => {
		let id = e.target.id*1;
		setOpen(true);
		setFlag('edit');
		setDialogName("Edit Event");
		for (let i = 0; i < events.length; i++) {
			if (id === events[i].id) {
				console.log(events[i]);
				setEventName(events[i].event_name);
				setDescription(events[i].event_description);
				setFile(`${API_URL}/events/images/${events[i].event_image}`);
				setEventId(id);
			}
		}
	}
	const handleSave = async () => {
		if (!event_name) {
			alert("Please enter a event name");
			return;
		}
		const formData = new FormData();
    	formData.append("event_image", selectedImgFile);
    	formData.append("event_name", event_name.replace(/(\r\n|\n|\r)/gm, ''));
    	formData.append("event_description", event_description.replace(/(\r\n|\n|\r)/gm, ''));
		formData.append("flag", flag);
		formData.append("event_id", eventId);
		try {
			await fetch(`${API_URL}/event/add`, {
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
					alert("The event name has already exist.");
				}
			}).catch((error)=>{
				console.error('There was a problem with the fetch operation:', error);
			});
		} catch (error) {
			alert("Error while saved: " + error.message);
		}
	}
	const handleFormat = () => {
		setEventName("");
		setDescription("");
		setSelectedImgFile(null);
		setFile("");
		setFlag('save');
		setEventId("");
	}
	const handleOpen = () => setOpen((cur) => !cur);
	const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
		setSelectedImgFile(e.target.files[0]);
    }
	const setInputHandler= (e) => {
		switch (e.target.name) {
			case 'event_name':
				setEventName(e.target.value);
				break;
			case 'event_description':
				setDescription(e.target.value);
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
						Event Manage
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
												<Textarea variant="standard" onChange={setInputHandler} name="event_name" value={event_name} label="Event Name" />
											</div>
											<div>
												<Textarea variant="standard" onChange={setInputHandler} name="event_description" value={event_description} label="Description" />
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
									{["Action","Event name", "description", "image", "created date"].map(
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
								{events && events.map(
								(item, key) => {
									const className = `py-2 px-2 ${
									key === events.length - 1
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
											<Typography className={ellipsisClassName} title={item.event_name}>{item.event_name}</Typography>
										</td>
										<td className={className}>
											<Typography className={ellipsisClassName} title={item.event_description}>{item.event_description}</Typography>
										</td>
										<td className={className}>
											<p className="w-52">
												<a href={`${API_URL}/events/images/${item.event_image}`} target="_blank">
													<img
														className="h-full w-full rounded-sm mt-2"
														src={`${API_URL}/events/images/${item.event_image}`}
														alt="image"
													/>
												</a>
											</p>
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
