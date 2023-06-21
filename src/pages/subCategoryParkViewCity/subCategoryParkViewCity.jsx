import { useParams } from 'react-router-dom';
import { Feedback } from '../../components/feedback';

const SubCategoryParkViewCity = () => {
	const { id, subId } = useParams();
	const goBack = () => {
		window.history.back();
	};
	console.log(id, subId);
	return (
		<>
			<section className="section-contact wf-section py-[6rem]">
				<div className="container mx-auto">
					<div className="section-header">
						<h2 className="hero-h1 text-primary-blue text-center">
							OVERSEAS BLOCK
						</h2>
					</div>
					<div className="section-content px-[1rem] sm:px-[5rem] pt-6">
						<div className="lg:grid grid-cols-2 sm:gap-4">
							<div className="about-us-right-col">
								<div className="hero-h3 font-light text-primary-blue pb-[30px] py-[2rem] px-3 sm:text-left text-center">
									BLOCK DETAIL
								</div>
								<div className="px-3 sm:text-left text-center">Overseas Block is our flagship block with exclusive and highest quality amenities including a commercial area, an indoor golf facility, and much more. The Overseas Block is developed by keeping in mind the lifestyle of our residents that have lived or are living outside the country.</div>
								<div className="hero-h3 font-light text-primary-blue pb-[30px] py-[2rem] px-3 sm:text-left text-center">
									PAYMENT PLAN
								</div>
								<div className="px-12 sm:text-left text-center">
									<ol>
										<li className="list-disc">05 Marla</li>
										<li className="list-disc">10 Marla</li>
										<li className="list-disc">01 Kanal</li>
									</ol>
								</div>
								<div className="hero-h3 font-light text-primary-blue pb-[30px] py-[2rem] px-3 sm:text-left text-center">
									PAYMENT PLAN
								</div>
								<div className="px-4 sm:text-left text-center flex gap-4">
									<button><a href="https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63e49b48c7786c42f1879cc2_Overseas%20Block%201.png" target="_blank" rel="noreferrer" className="flex items-center text-black primaryButton">Click to download</a></button>
									<button className="flex items-center text-black primaryButton" onClick={goBack}>Go Back</button>
								</div>
							</div>
							<div>
								<div className="about-us pt-6">
									<img
										src="https://uploads-ssl.webflow.com/60675406d40011636a539dc3/63e49b448b5a9cfd924a008b_7-10-MARLA-OVERSEAS-BOCK-1%201-p-800.png"
										loading="lazy"
										sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 42vw, (max-width: 1279px) 34vw, (max-width: 1919px) 28vw, 532.796875px"
										alt=""
										className="w-12/12 mx-auto object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Feedback />
		</>
	);
};
export { SubCategoryParkViewCity };
