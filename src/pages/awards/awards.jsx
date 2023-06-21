import { Feedback } from '../../components/feedback';
import { Award } from '../../components/award';

const Awards = () => {
	return (
		<>
			<div className="section-awards-home py-[6rem]">
				<div className="container mx-auto">
					<div className="section-header">
						<div className="hero-content_wrapper"><h1 className="hero-h1 text-primary-blue text-center">AWARDS OF FAIR DEAL MARKETING</h1></div>
					</div>
					<Award />
				</div>
			</div>
			<Feedback />
		</>
	);
};
export { Awards };
