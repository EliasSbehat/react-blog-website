const Footer = () => {
	return (
		<footer className="footer-suban pt-[4rem] px-6 pb-2 wf-section bg-primary-strong-blue flex">
			<div className="container mx-auto">
				<div className="section-content">
					<div className="footer-content flex grid grid-cols-1 sm:grid-cols-3">
						<div className="footer-links">
							<div className="footer-heading text-primary-yellow">ISLAMABAD OFFICE</div>
							<div className="footer-link">
								MEZZANINE FLOOR, RAZAI SHAREEF PLAZA, G 7/3 BLUE AREA, ISLAMABAD
							</div>
							<a href="tel:+9251111050106" className="footer-link">051 111 050 106</a>
							<a href="mailto:info@fairdealmarketing.com" className="footer-link">info@fairdealmarketing.com</a>
						</div>
						<div className="footer-links">
							<div className="footer-heading text-primary-yellow">LAHORE OFFICE</div>
							<a href="/" className="footer-link">PLOT NO. 225 MAIN <br />BOULEVARD, PARKVIEW CITY, LAHORE</a>
							<a href="tel:+42111050106" className="footer-link">042 111 050 106</a>
							<a href="mailto:info@fairdealmarketing.com" className="footer-link">info@fairdealmarketing.com</a>
						</div>
						<div className="footer-links">
							<div className="footer-heading text-primary-yellow">UAE OFFICE</div>
							<a href="/" className="footer-link">1602, MUSA TOWER 1, SHEIKH ZAYED ROAD, <br />DUBAI - UAE</a>
							<a href="tel:+600532390" className="footer-link">600 532 390</a>
							<a href="mailto:ceo@aaafairdeal.ae" className="footer-link">ceo@aaafairdeal.ae</a>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div>2023 all rights reserved</div>
					<div className="footer-icons">
						<a
							href="#https://www.instagram.com/fairdealmarketing/?hl=en"
							target="_blank"
							className="w-inline-block"
						>
							<div className="footer-icon_wrapper">
								<img
									src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/63c79be7749c0de244788bda_Vector-2.svg"
									loading="lazy"
									alt=""
									className="image-100"
								/>
							</div>
						</a>
						<a
							href="#https://twitter.com/DealsPvt?s=20"
							target="_blank"
							className="w-inline-block"
						>
							<div className="footer-icon_wrapper">
								<img
									src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/63c79be71500087019225544_Vector-1.svg"
									loading="lazy"
									alt=""
									className="image-100"
								/>
							</div>
						</a>
						<a
							href="#https://www.youtube.com/c/FairDealMarketing"
							target="_blank"
							className="w-inline-block"
						>
							<div className="footer-icon_wrapper">
								<img
									src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/63c79be7fa41265d14f94e81_Vector.svg"
									loading="lazy"
									alt=""
									className="image-100"
								/>
							</div>
						</a>
						<a
							href="#https://www.facebook.com/fairdealisb/"
							target="_blank"
							className="w-inline-block"
						>
							<div className="footer-icon_wrapper">
								<img
									src="https://uploads-ssl.webflow.com/605380ce976c93769ead7db0/63c79be7e1e717825f62505b_Vector-3.svg"
									loading="lazy"
									alt=""
									className="image-100"
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
