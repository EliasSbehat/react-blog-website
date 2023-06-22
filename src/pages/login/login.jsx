import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Input,
	Checkbox,
	Button,
	Typography,
} from "@material-tailwind/react";
import { loginUser } from '../../store/auth/authActions';
import { errorToast } from '../../utils';

export const Login = () => {
	const { user, loading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	let email = useRef('');
	let password = useRef('');

	useEffect(() => {
		if (user) {
			navigate('/', { successLogin: true });
		}
	}, [navigate, user]);

	const signinUser = async (e) => {
		e.preventDefault();

		dispatch(loginUser({
			email: email.value,
			password: password.value
		}))
			.unwrap()
			.catch((errorData) => {
				errorToast(errorData.error);
			});
	};

	return (
		<>
			<img
				src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
				className="absolute inset-0 z-0 h-full w-full object-cover"
			/>
			<div className="absolute inset-0 z-0 h-full w-full bg-black/50">
				<div className="container mx-auto p-4">
					<Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
						<CardHeader
							variant="gradient"
							color="blue"
							className="mb-4 grid h-28 place-items-center"
						>
							<Typography variant="h3" color="white">
							Sign In
							</Typography>
						</CardHeader>
						<CardBody className="flex flex-col gap-4">
							<Input type="email" label="Email" size="lg" />
							<Input type="password" label="Password" size="lg" />
							<div className="-ml-2.5">
								<Checkbox label="Remember Me" />
							</div>
						</CardBody>
						<CardFooter className="pt-0">
							<Button variant="gradient" fullWidth>
							Sign In
							</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</>
	);
};
