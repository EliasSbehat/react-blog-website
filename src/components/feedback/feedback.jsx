import {
	Input,
} from '@material-tailwind/react';

const Feedback = () => {
	return (
		<div className="section-feedback-home py-[3rem] bg-primary-normal-yellow">
			<div className="container mx-auto">
				<div className="section-header">
					<div className="hero-content_wrapper max-w-5xl mx-auto">
						<h1 className="hero-h1 text-center text-gray-800">GET IN TOUCH, TO GET THE BEST</h1>
						<h1 className="hero-h4 text-center text-gray-800">Begin your journey of real estate excellence with the market leaders. Explore remote programs, full-time and part-time openings at Fair Deal Marketing.</h1>
					</div>
				</div>
				<div className="section-content pt-[2rem]">
					<h1 className="hero-h3 text-center pb-8 text-gray-800">GIVE US YOUR FEEDBACK</h1>
					<div className="w-8/12 bg-white flex grid grid-cols-1 sm:grid-cols-10 mx-auto">
						<div className="sm:col-span-4">
							<Input
								type="text"
								placeholder="Your Name"
								className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
								labelProps={{ className: 'hidden' }}
								containerProps={{ className: 'min-w-[100px]' }}
							/>
						</div>
						<div className="sm:col-span-4">
							<Input
								type="text"
								placeholder="Your Feedback"
								className="focus:!border-t-blue-500 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20 !border !border-blue-gray-50 bg-white shadow-lg shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500"
								labelProps={{ className: 'hidden' }}
								containerProps={{ className: 'min-w-[100px]' }}
							/>
						</div>
						<div className="sm:col-span-2">
							<button className="primaryButton text-black w-full">SUBMIT</button>
						</div>
					</div>
					<div className="awards-btn_wrapper flex pt-[2rem]">
						<button className="mx-auto">
							<a href="tel:+9251111050106" className="primaryButton flex items-center text-black">
								CALL NOW
							</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Feedback };
