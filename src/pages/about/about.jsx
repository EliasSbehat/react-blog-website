import { Feedback } from '../../components/feedback';

const About = () => {
	return (
		<>
			<div className="bg-white py-[6rem]">
				<div className="section-about mx-auto">
					<div className="container mx-auto">
						<div className="section-header">
							<div className="hero-content_wrapper">
								<h2 className="hero-h1 text-primary-blue text-center">
									<span className="font-normal">CHAIR MAIN OF</span> FAIR DEAL MARKETING
								</h2>
							</div>
						</div>
						<div className="section-content pt-[5rem] px-[1rem] sm:px-[5rem]">
							<div className="lg:grid grid-cols-2 sm:gap-4">
								<div>
									<div className="about-us-image_wrapper">
										<img
											src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/614c60fb7eb71e0078c4e815_Mask%20Group%2031-p-800.png"
											loading="lazy"
											sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 42vw, (max-width: 1279px) 34vw, (max-width: 1919px) 28vw, 532.796875px"
											alt=""
											className="w-12/12 mx-auto object-cover"
										/>
									</div>
								</div>
								<div
									className="about-us-right-col"
								>
									<div className="hero-h3 font-light text-primary-blue pb-[30px] py-[2rem] px-3 sm:text-left text-center">
									CHAUDHRY ABDUL RAUF
									</div>
									<p className="text-gray-500 px-3 sm:text-left text-center">
									For over 20 years, Fair Group of Companies has
									been delivering Real Estate excellence in Pakistan.
									Our Chairman Chaudhry Abdul Rauf is a visionary,
									His aspiration is to transform the Real Estate sector of Pakistan
									while expanding Nationally as well as Globally.
									An Enterprising leader builds a team of professionals to make a positive
									contribution in order to cater investors and
									consumers. Among other achievements Chaudhry
									Abdul Rauf holds the
									credit for brand’s prominence in Development,
									Real Estate, Commodities and Service Industries which is the result
									oftransparent follow-through on commitments,
									innovations and customer satisfaction.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section-award mx-auto py-[6rem]">
					<div className="container mx-auto">
						<div className="section-header">
							<h2 className="hero-h1 text-primary-blue text-center">
								<span className="font-normal">COMPANIES OF</span> FAIR DEAL MARKETING
							</h2>
						</div>
						<div className="section-content pt-[5rem] px-[1rem] sm:px-[5rem]">
							{
								[{ name: 'Fair Deal Marketing', description: 'A passionate organization committed to correspondence, and completetransparency with clients at all levels. Delivering values based onintegrity, self-commitment, and client satisfaction to real estateconsumers.' }, { name: 'Fair Deal Marketing', description: 'A passionate organization committed to correspondence, and completetransparency with clients at all levels. Delivering values based onintegrity, self-commitment, and client satisfaction to real estateconsumers.' }, { name: 'Fair Deal Marketing', description: 'A passionate organization committed to correspondence, and completetransparency with clients at all levels. Delivering values based onintegrity, self-commitment, and client satisfaction to real estateconsumers.' }].map((item, index) => (
									<div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
										{
											<>
												<div className="companies-image">
													<img
														src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/62442e11c19eb82f9bcfc52f_Fair%20Deal.png"
														loading="lazy"
														sizes="(max-width: 767px) 95vw, (max-width: 991px) 46vw, (max-width: 1279px) 37vw, (max-width: 1919px) 31vw, 592px"
														alt=""
														className="w-12/12 mx-auto object-cover w-full"
													/>
												</div>
												<div className="companies-content px-6 text-white bg-primary-strong-blue">
													<div className="companies-heading_wrapper">
														<div className="hero-h3 font-light pb-[30px] py-[2rem] text-left">{item.name}</div>
													</div>
													<div className="w-[8rem] bg-primary-normal-yellow h-[0.3rem]"></div>
													<div className="text-left py-6">
														{item.description}
													</div>
												</div>
											</>
										}
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
export { About };
