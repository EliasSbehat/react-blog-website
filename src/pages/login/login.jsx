import { useEffect, useRef, useState } from 'react';
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
import { errorToast, successToast } from '../../utils';

export const Login = () => {
	const { users, loading } = useSelector((state) => state.auth);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (users) {
			navigate('/admin/projects', { successLogin: true });
		}
	}, [navigate, users]);
	const setPasswordHandler = (e) => {
		setPassword(e.target.value);
	}
	const setEmailHandler = (e) => {
		setEmail(e.target.value);
	}
	const signinUser = async (e) => {
		e.preventDefault();

		dispatch(loginUser({
			email: email,
			password: password
		}))
			.unwrap()
			.then((response) => {
				e.target.reset();
				switch (response.msg) {
					case "success":
						successToast("Login Success!");
					break;
					case "wrong-pwd":
						errorToast("Wrong Password");
						break;
					case "wrong-email":
						errorToast("Wrong Email");
						break;
					default:
						errorToast("Error");
						break;
				}
			})
			.catch((errorData) => {
				errorToast(errorData.error);
			});
	};

	return (
		<>
			<img
				src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
				className="absolute inset-0 z-0 h-full w-full object-cover bg-black"
			/>
			<div className="absolute inset-0 z-0 h-full w-full bg-black/50">
				<div className="container mx-auto p-4">
					<Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
						<form onSubmit={signinUser}>
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
								<Input type="email" label="Email" onChange={setEmailHandler}  size="lg" />
								<Input type="password" label="Password" onChange={setPasswordHandler} size="lg" />
								<div className="-ml-2.5">
									<Checkbox label="Remember Me" />
								</div>
							</CardBody>
							<CardFooter className="pt-0">
								<Button variant="gradient" type="submit" fullWidth>
								{loading ? 'Loading...' : 'Sign In'}
								</Button>
							</CardFooter>
						</form>
					</Card>
				</div>
			</div>
		</>
	);
};
