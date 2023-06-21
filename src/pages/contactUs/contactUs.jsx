import {
	Input,
} from '@material-tailwind/react';

const ContactUs = () => {
	return (
		<>
			<section className="section-contact-us wf-section">
				<div className="container">
					<div className="section-header">
						<h2 className="hero-h1 text-primary-blue text-center">
							<span className="font-normal">Don't wait,</span> just get in touch
						</h2>
					</div>
					<div className="section-content py-[5rem]">
						<div className="contact-us-content_wrapper">
							<div className="contact-us-form w-form">
								<div className="grid grid-cols-2 gap-8">
									<div className="contact-us-form-input_wrapper">
										<Input variant="standard" label="FULL NAME" />
									</div>
									<div className="contact-us-form-input_wrapper">
										<Input variant="standard" label="EMAIL ADDRESS" />
									</div>
								</div>
								<div className="grid grid-cols-2 gap-8 py-[5rem]">
									<div className="contact-us-form-input_wrapper">
										<Input variant="standard" label="YOUR NUMBER" />
									</div>
									<div className="contact-us-form-input_wrapper">
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
