import {
	Input,
} from '@material-tailwind/react';

const ContactUs = () => {
	return (
		<>
			<section className="wf-section py-[6rem]">
				<div className="container mx-auto">
					<div className="section-header">
						<div className="hero-content_wrapper">
							<h2 className="hero-h1 text-primary-blue text-center">
								<span className="font-normal">Don't wait,</span> just get in touch
							</h2>
						</div>
					</div>
					<div className="section-content py-[5rem] px-6">
						<div>
							<div className=" w-form">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
									<div>
										<Input variant="standard" label="FULL NAME" />
									</div>
									<div>
										<Input variant="standard" label="EMAIL ADDRESS" />
									</div>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-[2rem] sm:py-[5rem]">
									<div>
										<Input variant="standard" label="YOUR NUMBER" />
									</div>
									<div>
										<Input variant="standard" label="ANYTHING YOU WOULD LIKE TO SAY?" />
									</div>
								</div>
								<button className="mx-auto primaryButton flex items-center text-black">
									REQUEST A CALL BACK
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	);
};
export { ContactUs };
