const Award = () => {
	return (
		<div className="section-content pt-[5rem] flex grid grid-cols-1 sm:grid-cols-2 gap-8 sm:w-full w-10/12 mx-auto">
			{
				[{ awardName: 'CHAMBER OF COMMERCE', awardDescription: 'Presented by Atif Ikram Sheikh President', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/6406df05874936cf1b7fc815_6156c12f13ad81c7f4a18832_2019-p-500.jpeg' }, { awardName: 'TARJUMAN', awardDescription: '5th Tarjumaan International Awards', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/6406dee7d4b9da41f8b87400_6156bfe220e2bfe559b8768e_2020-p-500.webp' }, { awardName: 'GUEST OF HONOUR', awardDescription: 'Capital Mall & Residency Opening Ceremony', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/6406df206fe5f33aec0d41c0_6156c28456aae0bd50857833_2018-p-500.jpeg' }, { awardName: 'SHIELD OF HONOR', awardDescription: '4TH National Tchoukball Championship 2017 For Men & Women', img: 'https://uploads-ssl.webflow.com/60675406d40011636a539dc3/6406df33c072450609b71384_6156c28413033e55e1f9d462_2017-p-500.jpeg' }].map((item, index) => (
					<div key={index} className="pvc-home-content_wrapper">
						<div className="">
							<img
								src={item.img}
								loading="lazy"
								sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1279px) 77vw, (max-width: 1919px) 64vw, 1216px"
								alt=""
								className="object-cover w-full sm:h-full mx-auto"
							/>
						</div>
						<div className="text-primary-blue text-normal hero-h3 text-center">
							{item.awardName}
						</div>
						<div className="text-center">
							{item.awardDescription}
						</div>
					</div>
				))
			}
		</div>
	);
};

export { Award };
