import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
	Sidenav,
	DashboardNavbar
} from "../admin/layout";
import routes from "../admin/routes";
import { useMaterialTailwindController } from "../../context";

const PrivateRoute = ({ component: Component, ...props }) => {
	const [controller, dispatch] = useMaterialTailwindController();
	const { sidenavType } = controller;
	const { user } = useSelector((state) => state.auth);
	return (
		<>
			{
				user
				// !user
					? <Navigate to={{ pathname: '/admin-login', state: { from: props.location } }} replace />
					: <div className="min-h-screen bg-blue-gray-50/50">
					<Sidenav
						routes={routes}
						brandImg={
							sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
						}
						brandName="LuckyFrolic"
					/>
					<div className="p-4 xl:ml-80">
						<DashboardNavbar />
						<Component {...props} />
					</div>
				  </div>
			}
		</>
	);
};

export { PrivateRoute };
