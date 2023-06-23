import { Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import { Home } from '../../pages/home';
import { ParkViewCity } from '../../pages/parkViewCity';
import { SubParkViewCity } from '../../pages/subParkViewCity';
import { SubCategoryParkViewCity } from '../../pages/subCategoryParkViewCity';
import { Projects } from '../../pages/projects';
import { SubProject } from '../../pages/subProject';
import { About } from '../../pages/about';
import { Events } from '../../pages/events';
import { SubEvent } from '../../pages/subEvent';
import { Awards } from '../../pages/awards';
import { ContactUs } from '../../pages/contactUs';
import { Login } from '../../pages/login';
import { Register } from '../../pages/register';
import { PrivateRoute } from '../privateRoute';
import { PublicRoute } from '../publicRoute';
import { ScrollTop } from '../scrollTop';
//admin panel
import { ManageProjects } from '../../pages/admin/manageProjects';
import { ManageEvents } from '../../pages/admin/manageEvents';
import { ManageAwards } from '../../pages/admin/manageAwards';
import Styles from './app.module.scss';

function App() {
	return (
		<div>
			<Layout>
				<Toaster />
				<ScrollTop />
				<Routes>
					<Route path="/" element={<PublicRoute component={Home} />} />
					<Route path="/park-view-city" element={<PublicRoute component={ParkViewCity} />} />
					<Route path="/park-view-city/:id" element={<PublicRoute component={SubParkViewCity} />} />
					<Route path="/park-view-city/:id/:subId" element={<PublicRoute component={SubCategoryParkViewCity} />} />
					<Route path="/projects" element={<PublicRoute component={Projects} />} />
					<Route path="/projects/:id" element={<PublicRoute component={SubProject} />} />
					<Route path="/about-us" element={<PublicRoute component={About} />} />
					<Route path="/events" element={<PublicRoute component={Events} />} />
					<Route path="/events/:id" element={<PublicRoute component={SubEvent} />} />
					<Route path="/awards" element={<PublicRoute component={Awards} />} />
					<Route path="/contact-us" element={<PublicRoute component={ContactUs} />} />
					<Route path='/admin/login' element={<PublicRoute restricted={true} component={Login} />} />
					<Route path='/admin' element={<PrivateRoute restricted={true} component={ManageProjects} />} />
					<Route path='/admin/projects' element={<PrivateRoute restricted={true} component={ManageProjects} />} />
					<Route path='/admin/events' element={<PrivateRoute restricted={true} component={ManageEvents} />} />
					<Route path='/admin/awards' element={<PrivateRoute restricted={true} component={ManageAwards} />} />
					<Route path='/register' element={<PrivateRoute restricted={true} component={Register} />} />
				</Routes>
			</Layout>
		</div>
	);
}

const Layout = ({ children }) => (
	<div className={Styles.mainContainer}>
		<div className={Styles.contentContainer}>
			{children}
		</div>
	</div>
);

export { App };
