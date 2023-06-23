import React, { useEffect, useState } from "react";
import { Feedback } from '../../components/feedback';
import { Award } from '../../components/award';
import { gbConfig } from '../../config';

const Awards = () => {
	const API_URL = gbConfig.API_URL;
	const [awards, setAwards] = useState(null);
	useEffect(() => {
		handleGetEvents();
	}, []);
	const handleGetEvents = async () => {
		await fetch(`${API_URL}/award/get`).then((response)=>{
			return response.json();
		}).then((data)=>{
			setAwards(data);
		}).catch((error)=>{
			console.error('There was a problem with the fetch operation:', error);
		});
	}
	return (
		<>
			<div className="section-awards-home py-[6rem]">
				<div className="container mx-auto">
					<div className="section-header">
						<div className="hero-content_wrapper"><h1 className="hero-h1 text-primary-blue text-center">AWARDS OF FAIR DEAL MARKETING</h1></div>
					</div>
					{
						awards && <Award data={awards} />
					}
				</div>
			</div>
			<Feedback />
		</>
	);
};
export { Awards };
