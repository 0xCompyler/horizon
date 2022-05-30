import React, { useState } from "react";
import Axios from "axios";
import Link from "next/link";
import { useUser } from "context/UserContext";
import Image from "next/image";

const SignupComponent = () => {
	const [name, setName] = useState("");
	const [username, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [address,setAddress] = useState("");
	const [paymentMethod,setPaymentMethod] = useState("");

	const signup = (e: any) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const { signup } = useUser();

		e.preventDefault();
		signup(name, email, password, phone);
	};

	return (
		<div
			className="flex flex-col items-center justify-center h-screen"
			style={{
				background:
					"radial-gradient(circle, rgba(18,1,38,1) 0%, #090112 100%)",
			}}
		>
			<div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
				<div className="w-full max-w-md space-y-8">
					<div>
						
						<h2 className="mt-6 text-3xl font-extrabold text-center text-gray-200">
							Sign up for an account
						</h2>
					</div>
					<form className="mt-8 space-y-4" action="#" method="POST">
						<input type="hidden" name="remember" value="true" />
						<div className="-space-y-px rounded-md shadow-sm">
							<div>
								<label htmlFor="password" className="sr-only">
									Full Name
								</label>
								<input
									id="password"
									name="password"
									type="text"
									onChange={e => setName(e.target.value)}
									required
									className="relative block w-full px-3 py-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Full Name"
								/>
							</div>

							<div>
								<label
									htmlFor="email-address"
									className="sr-only"
								>
									Email address
								</label>
								<input
									id="email-address"
									name="email"
									type="text"
									onChange={e => setEmail(e.target.value)}
									autoComplete="email"
									required
									className="relative block w-full px-3 py-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Email address"
								/>
							</div>

							<div>
								<label htmlFor="password" className="sr-only">
									Phone No
								</label>
								<input
									id="password"
									name="password"
									type="text"
									onChange={e => setPhone(e.target.value)}
									autoComplete="current-password"
									required
									className="relative block w-full px-3 py-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Phone no"
								/>
							</div>

							<div>
								<label htmlFor="address" className="sr-only">
									Address
								</label>
								<input
									id="address"
									name="address"
									type="text"
									onChange={e => setAddress(e.target.value)}
									autoComplete="current-password"
									required
									className="relative block w-full px-3 py-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Primary Address"
								/>
							</div>

							<div>
								<label htmlFor="password" className="sr-only">
									Payment Method
								</label>
								<input
									id="password"
									name="paymentMethod"
									type="text"
									onChange={e => setPaymentMethod(e.target.value)}
									autoComplete="current-password"
									required
									className="relative block w-full px-3 py-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Primary Payment Method"
								/>
							</div>

							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									onChange={e => setPassword(e.target.value)}
									autoComplete="current-password"
									required
									className="relative block w-full px-3 py-2 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Password"
								/>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember-me"
									name="remember-me"
									type="checkbox"
									className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
								/>
								<label
									htmlFor="remember-me"
									className="block ml-2 text-sm text-gray-200"
								>
									Remember me
								</label>
							</div>
						</div>

						<div>
							<button
								type="submit"
								onClick={e => {
									signup(e);
								}}
								className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								<span className="absolute inset-y-0 left-0 flex items-center pl-3">
									<svg
										className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
											clipRule="evenodd"
										/>
									</svg>
								</span>
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignupComponent;
