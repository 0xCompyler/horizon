import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import {
	CheckCircleIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import "../../assets/styles/tailwind.css";
import "../../assets/styles/styles.scss";
import ReactCodeInput from "react-code-input";
import { theme } from "../../../tailwind.config.js";

const addresses = [
	{ place: "Manipal University Jaipur, Rajasthan" },
	{ place: "Garia Station Road" },
	{ place: "Karolbagh, New Delhi" },
	{ place: "Tollygunge, Kolkata" },
];

const payment = [
	{ method: "paytm_ewallet" },
	{ method: "upi_bank" },
	{ method: "googlepay_upi_bank" },
	{ method: "pnbcorp_bank" },
];

const PinSection = ({ enteredPin, setEnteredPin }) => {
	const props = {
		inputStyle: {
			fontFamily: "monospace",
			margin: "0.5rem",
			MozAppearance: "textfield",
			width: "2rem",
			height: "2rem",
			borderRadius: "0.25rem",
			fontSize: "1rem",
			backgroundColor: theme.extend.colors.accent[600],
			color: "white",
			userSelect: "none",
			textAlign: "center",
		},
	};

	const [status, setStatus] = useState({
		isLoading: null,
		isError: false,
	});
	useEffect(() => {
		if (enteredPin.length === 4) {
			// dummy post request to check pin
			setStatus({
				...status,
				isLoading: true,
			});
			if (enteredPin !== "1234") {
				setTimeout(() => {
					setStatus({
						...status,
						isLoading: false,
						isError: true,
					});
				}, 1000);
			} else {
				setTimeout(() => {
					setStatus({
						...status,
						isLoading: false,
						isError: false,
					});
				}, 1000);
			}
		}
		if (enteredPin.length === 0) {
			setStatus({
				isLoading: null,
				isError: false,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [enteredPin]);

	return (
		<>
			<div className="grid place-items-center">
				<span className="text-sm text-zinc-400">
					Enter your 4 digit pin
				</span>
				<ReactCodeInput
					type="password"
					fields={4}
					className="pin-input"
					value={enteredPin}
					onChange={(value) => setEnteredPin(value)}
					{...props}
				/>
				<div className="mt-1">
					{status.isLoading !== null ? (
						status.isLoading ? (
							<span className="text-xs text-zinc-400">
								<svg
									class="animate-spin mr-1 h-3 w-3 inline"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										class="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										class="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Loading...
							</span>
						) : status.isError ? (
							<span className="text-xs text-red-400">
								<ExclamationCircleIcon className="inline w-4 h-4 mr-1" />
								Oops! Are you sure that's the right pin?
							</span>
						) : (
							<span className="text-xs text-green-400">
								<CheckCircleIcon className="inline w-4 h-4 mr-1" />
								You're good to go!
							</span>
						)
					) : (
						<span className="invisible text-xs">Status Text</span>
					)}
				</div>
			</div>
		</>
	);
};

const Payment = ({ selected, setSelected, ...props }) => {
	return (
		<Listbox value={selected} onChange={setSelected} {...props}>
			<div className="relative my-2">
				<Listbox.Button className="relative w-full px-4 py-2 text-sm font-medium text-left rounded-lg cursor-default bg-accent-600 text-zinc-50 hover:bg-accent-700 focus:outline-none focus-visible:ring focus-visible:ring-accent-500 focus-visible:ring-opacity-75">
					<span className="block truncate max-w-[20ch]">
						{selected.method}
					</span>
					<span
						className="absolute inset-y-0 right-0 flex items-center pr-2 "
						title="Verified!"
					>
						<CheckCircleIcon className="w-4 h-4 ml-2 text-green-300 align-middle" />
						<SelectorIcon
							className="w-5 h-5 text-gray-400"
							aria-hidden="true"
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={React.Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-sm rounded-md shadow-lg max-h-60 bg-accent-700 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{payment.map((pay, personIdx) => (
							<Listbox.Option
								key={personIdx}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-10 pr-4 ${
										active
											? "bg-accent-600 text-zinc-50"
											: "text-zinc-300"
									}`
								}
								value={pay}
							>
								{({ selected }) => (
									<>
										<span
											title={pay.method}
											className={`block truncate ${
												selected
													? "font-medium"
													: "font-normal"
											}`}
										>
											{pay.method}
										</span>
										{selected ? (
											<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-400">
												<CheckIcon
													className="w-5 h-5"
													aria-hidden="true"
												/>
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};

const Address = ({ selected, setSelected, ...props }) => {
	return (
		<Listbox value={selected} onChange={setSelected} {...props}>
			<div className="relative my-2">
				<Listbox.Button className="relative w-full px-4 py-2 text-sm font-medium text-left rounded-lg cursor-default bg-accent-600 text-zinc-50 hover:bg-accent-700 focus:outline-none focus-visible:ring focus-visible:ring-accent-500 focus-visible:ring-opacity-75">
					<span className="block truncate max-w-[20ch]">
						{selected.place}
					</span>
					<span
						className="absolute inset-y-0 right-0 flex items-center pr-2 "
						title="Verified!"
					>
						<CheckCircleIcon className="w-4 h-4 ml-2 text-green-300 align-middle" />
						<SelectorIcon
							className="w-5 h-5 text-gray-400"
							aria-hidden="true"
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={React.Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-sm rounded-md shadow-lg max-h-60 bg-accent-700 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{addresses.map((place, personIdx) => (
							<Listbox.Option
								key={personIdx}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-10 pr-4 ${
										active
											? "bg-accent-600 text-zinc-50"
											: "text-zinc-300"
									}`
								}
								value={place}
							>
								{({ selected }) => (
									<>
										<span
											title={place.place}
											className={`block truncate ${
												selected
													? "font-medium"
													: "font-normal"
											}`}
										>
											{place.place}
										</span>
										{selected ? (
											<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-400">
												<CheckIcon
													className="w-5 h-5"
													aria-hidden="true"
												/>
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
};

const Popup = () => {
	const [addressSelected, setAddressSelected] = useState(addresses[0]);
	const [paymentSelected, setPaymentSelected] = useState(payment[0]);
	const [enteredPin, setEnteredPin] = useState("");
	return (
		<div className="flex flex-col w-full h-full px-4 py-12 bg-accent-900">
			<div className="pb-8">
				<h1 className="text-3xl text-center text-white leading-1">
					Checkout
				</h1>
				<h3 className="mt-0 text-xs font-light text-center text-zinc-400">
					powered by <b className="text-zinc-300">Horizon</b>
				</h3>
			</div>
			<div className="flex flex-col justify-between w-full max-w-md p-2 pt-0 mx-auto space-y-6 rounded-2xl">
				<div className="">
					<span className="mb-4 text-sm font-light text-zinc-400">
						Greetings, Kartik Goel!
					</span>
					<Address
						selected={addressSelected}
						setSelected={setAddressSelected}
					/>
					<Payment
						selected={paymentSelected}
						setSelected={setPaymentSelected}
					/>
				</div>

				<PinSection
					enteredPin={enteredPin}
					setEnteredPin={setEnteredPin}
				/>

				<a href="http://demo-ecommerceapp.vercel.app/orderplaced">
					<button type="button" className="checkout-btn">Checkout with Horizon</button>
				</a>
			</div>
		</div>
	);
};

export default Popup;
