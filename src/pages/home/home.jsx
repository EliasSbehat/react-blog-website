import {
	Button
} from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<div className="hero bg-[aliceblue] h-[300px]" style={{
				backgroundImage: 'url(https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/62024520658b7cdb5d349e5f_Hero%20Image.webp)',
				backgroundPosition: '50% 50%',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
			}}>
				<div class="hero-content_wrapper"><h1 class="hero-h1 text-primary-blue text-center"><span class="font-normal">WeLCOME TO</span> FAIR DEAL MARKETING</h1></div>
			</div>
			<div className="section-company marquee">
				<div class="marquee-content">
					<div className="company-content">
						{
							[0, 1].map((item) => (
								<div key={item} className="company-content_wrapper" style={{ transform: 'translate3d(-11.5%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', willChange: 'transform' }}>
									<div className="company-logo">
										<div className="company-logo_wrapper">
											<img src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64070199c344656688f93129_FDM.webp" loading="lazy" alt="" className="w-9/12 xl:w-11/12" />
										</div>
									</div>
									<div className="company-logo">
										<div className="company-logo_wrapper">
											<img
												src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/640701994c391dcec89679b8_FDD.webp"
												loading="lazy"
												alt=""
												className="w-9/12 xl:w-11/12 object-cover"
											/>
										</div>
									</div>
									<div className="company-logo">
										<div className="company-logo_wrapper">
											<img
												src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64070199f3b8808244c874f9_FDC.webp"
												loading="lazy"
												alt=""
												className="w-9/12 xl:w-11/12 object-cover"
											/>
										</div>
									</div>
									<div className="company-logo">
										<div className="company-logo_wrapper bird">
											<img
												src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/6407019b722f32e991169525_FT.webp"
												loading="lazy"
												alt=""
												className="w-9/12 xl:w-11/12 object-cover"
											/>
										</div>
									</div>
									<div className="company-logo">
										<div className="company-logo_wrapper bird">
											<img
												src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/640701991905457220c08908_AAA%20FD.webp"
												loading="lazy"
												alt=""
												className="w-9/12 xl:w-11/12 object-cover"
											/>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>
			<div className="section-about">
				<div className="container mx-auto">
					<div className="section-header">
						<h2 className="hero-h1 text-primary-blue text-center">
							<span className="font-normal">ABOUT</span> FAIR DEAL MARKETING
						</h2>
					</div>
					<div className="section-content pt-[5rem]">
						<div className="sm:grid grid-cols-2 sm: gap-4">
							<div>
								<div className="about-us-image_wrapper">
									<img
										src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64072ec90a0b1f1dbd861948_Reception.webp"
										loading="lazy"
										sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 42vw, (max-width: 1279px) 34vw, (max-width: 1919px) 28vw, 532.796875px"
										srcset="
										https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64072ec90a0b1f1dbd861948_Reception-p-500.webp   500w,
										https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64072ec90a0b1f1dbd861948_Reception-p-800.webp   800w,
										https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64072ec90a0b1f1dbd861948_Reception-p-1080.webp 1080w
										"
										alt=""
										className="w-10/12 mx-auto object-cover"
									/>
								</div>
							</div>
							<div
								className="about-us-right-col"
							>
								<div className="hero-h3 font-light text-primary-blue pb-[30px] py-[2rem] px-3 sm:text-left text-center">
								WELCOME TO FAIR DEAL MARKETING, THE ONE-STOP DEVELOPMENT ENTERPRISE TO
								TRANSFORM YOUR LIFESTYLE
								</div>
								<div className="text-gray-500 px-3 sm:text-left text-center">
								We offer leading, realty-based investment opportunities, unrivalled
								family homes that provide an incredible lifestyle experience. Our
								brokers provide unmatched property services throughout the region.
								Team Fair Deal comprises experienced team of real estate professionals
								who stand ready to assist you with any real estate requirement. In our
								services, you will find the region’s most comprehensive selection of
								property currently available.
								</div>
								<div className="btn_wrapper pt-[20px] flex">
									<Button className="mx-auto sm:mx-3">
										<NavLink to="/about-us" className="primaryButton flex items-center text-black">
										LEARN MORE
										</NavLink>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-pvc-home">
				<div className="container mx-auto">
					<div className="section-header">
						<div class="hero-content_wrapper"><h1 class="hero-h1 text-primary-blue text-center"><span class="font-normal">FEATURED</span> PROJECT</h1></div>
					</div>
					<div className="section-content pt-[5rem]">
						<div className="pvc-home-content_wrapper opacity-100 sm:opacity-80 hover:opacity-100">
							<NavLink to="/park-view-city" target="_blank" className="pvc-home-link w-inline-block">
								<div className="pvc-home-image_wrapper pb-8">
									<img
										src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64070fcc174e612369a6adaf_MAP-min.webp"
										loading="lazy"
										sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1279px) 77vw, (max-width: 1919px) 64vw, 1216px"
										srcset="
										https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64070fcc174e612369a6adaf_MAP-min-p-500.webp   500w,
										https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64070fcc174e612369a6adaf_MAP-min-p-800.webp   800w,
										https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64070fcc174e612369a6adaf_MAP-min-p-1080.webp 1080w,
										https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64070fcc174e612369a6adaf_MAP-min-p-1600.webp 1600w,
										https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/64070fcc174e612369a6adaf_MAP-min.webp        1920w
										"
										alt=""
										className="w-12/12 object-cover sm:w-full w-10/12 sm:h-full mx-auto"
									/>
								</div>
								<div className="text-primary-blue text-normal hero-h3 text-center">
								PARKVIEW CITY
								</div>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export { Home };
