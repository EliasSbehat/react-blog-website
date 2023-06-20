import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Navbars } from '../navbar';

const PrivateRoute = ({ component: Component, ...props }) => {
	const { user } = useSelector((state) => state.auth);

	return (
		<>
			<Navbars />
			{
				!user
					? <Navigate to={{ pathname: '/login', state: { from: props.location } }} replace />
					: <Component {...props} />
			}
		</>
	);
};

export { PrivateRoute };
