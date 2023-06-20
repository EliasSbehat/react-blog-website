import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { verifyUserDetails } from '../../store/auth/authActions';

const Navbar = () => {
	const dispatch = useDispatch();
	const { accessToken } = useSelector((state) => state.auth);

	useEffect(() => {
		if (accessToken) {
			dispatch(verifyUserDetails());
		}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<header>
			<nav className="bg-black">
				<ul>
					<li><NavLink to='/'>Home</NavLink></li>
				</ul>
			</nav>
		</header>
	);
};

export { Navbar };
