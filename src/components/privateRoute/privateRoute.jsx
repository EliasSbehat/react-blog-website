import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
	Sidenav,
	DashboardNavbar
} from "../admin/layout";
import routes from "../admin/routes";
import { verifyUserDetails } from '../../store/auth/authActions';
import { useMaterialTailwindController } from "../../context";
import { errorToast, successToast } from '../../utils';

const PrivateRoute = ({ component: Component, ...props }) => {
	const [controller, dispatch] = useMaterialTailwindController();
	const { sidenavType } = controller;
	const { users } = useSelector((state) => state.auth);
	const reduxDispatch = useDispatch();
	useEffect(() => {
		reduxDispatch(verifyUserDetails({
			token: localStorage.getItem("userAccessTokens")
		}))
			.unwrap()
			.catch((errorData) => {
				errorToast(errorData.error);
			});
	}, []);
	return (
		<>
			{
				// user
				!users
					? <Navigate to={{ pathname: '/admin/login', state: { from: props.location } }} replace />
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
