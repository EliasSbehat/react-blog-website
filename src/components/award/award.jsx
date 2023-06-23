import { gbConfig } from '../../config';

const Award = (...props) => {
	const API_URL = gbConfig.API_URL;
	return (
		<div className="section-content pt-[5rem] flex grid grid-cols-1 sm:grid-cols-2 gap-8 sm:w-full w-10/12 mx-auto">
			{
				props[0]?.data && props[0]?.data.map((item, index) => (
					<div key={index} className="pvc-home-content_wrapper">
						<div className="">
							<img
								src={`${API_URL}/awards/images/${item.award_image}`}
								loading="lazy"
								sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1279px) 77vw, (max-width: 1919px) 64vw, 1216px"
								alt=""
								className="object-cover w-full sm:h-full mx-auto"
							/>
						</div>
						<div className="text-primary-blue text-normal hero-h3 text-center">
							{item.award_name}
						</div>
						<div className="text-center">
							{item.award_description}
						</div>
					</div>
				))
			}
		</div>
	);
};

export { Award };
