import { NavLink } from 'react-router-dom';
import { Feedback } from '../../components/feedback';

const ParkViewCity = () => {
	return (
		<>
			<div className="flex bg-[aliceblue]">
				<div className="w-full h-full">
					<div className="grid grid-cols-1 sm:grid-cols-2">
						<div className="pvc-isl">
							<NavLink
								to="/park-view-city-islamabad"
								className="flex w-full h-[8rem] justify-center content-center items-center bg-primary-strong-blue opacity-80 hover:opacity-100 border-r	border-primary-normal-yellow">
								<h1 className="hero-h2 text-center text-white">Park View City Islamabad</h1>
							</NavLink>
						</div>
						<div className="pvc-lahore">
							<NavLink
								to="/park-view-city-lahore"
								target="_blank"
								className="flex w-full h-[8rem] justify-center content-center items-center bg-primary-strong-blue opacity-80 hover:opacity-100">
								<h2 className="hero-h2 text-center text-white">Park View City Lahore</h2>
							</NavLink>
						</div>
					</div>
				</div>

			</div>
			<Feedback />
		</>
	);
};
export { ParkViewCity };
