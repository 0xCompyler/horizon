import type { NextPage } from "next";
import {
	useSpring,
	animated,
	useTransition,
	useSpringRef,
} from "@react-spring/web";
import { useEffect, useState } from "react";
import Image from "next/image";
import RocketEmoji from "static/images/rocket_emoji.png";
import WavingHandEmoji from "static/images/waving_hand_emoji.png";

const config = {
	tension: 300,
};

const Slide1: React.FC = () => {
	const props = useSpring({
		from: { scale: 1 },
		to: [{ scale: 0.75 }, { scale: 1 }],
		config: config,
		delay: 1000,
	});
	return (
		<div className="w-48 space-y-2">
			<div className="w-48 h-48 rounded-md bg-accent-700" />
			<div className="w-48 h-6 mt-4 rounded-md bg-accent-800" />
			<div className="h-6 rounded-md w-36 bg-accent-800 " />
			<div className="flex items-center justify-between mt-8">
				<div className="grid items-center w-16 h-6 grid-cols-3 text-sm font-bold text-center rounded-md bg-accent-800 text-accent-500">
					<div className="cursor-pointer">-</div>
					<div className="flex items-center justify-center border-x border-accent-600">
						<div className="w-2 h-2 rounded-full bg-accent-500" />
					</div>
					<div className="cursor-pointer">+</div>
				</div>
				<animated.div
					style={props}
					className="grid h-6 px-2 text-xs rounded-md shadow-md cursor-pointer text-zinc-300 place-items-center bg-accent-500"
				>
					Checkout
				</animated.div>
			</div>
		</div>
	);
};

const BadSlide2: React.FC = () => {
	const props = useSpring({
		from: { scale: 1 },
		to: [{ scale: 0.9 }, { scale: 1 }],
		config: config,
		delay: 750,
	});

	const { x, y } = useSpring({
		from: { x: 0, y: 0 },
		to: { x: 1, y: 1 },
		loop: true,
	});

	const shakeXStart = -0.5;
	const shakeYStart = -0.5;
	const shakeXEnd = 1.5;
	const shakeYEnd = 1.5;

	const xInterpolate = x.to(
		[0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
		[
			shakeXStart,
			shakeXEnd,
			shakeXStart,
			shakeXEnd,
			shakeXStart,
			shakeXEnd,
			shakeXStart,
			shakeXEnd,
		]
	);

	const yInterpolate = y.to(
		[0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
		[
			shakeYStart,
			shakeYEnd,
			shakeYStart,
			shakeYEnd,
			shakeYStart,
			shakeYEnd,
			shakeYStart,
			shakeYEnd,
		]
	);

	return (
		<div className="w-48 space-y-2 text-xs text-accent-500">
			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center flex-1 h-6 pl-2 mt-4 rounded-md bg-accent-800">
					First Name
				</div>
				<div className="flex items-center flex-1 h-6 pl-2 mt-4 rounded-md bg-accent-800">
					Last Name
				</div>
			</div>
			<div className="flex items-center w-48 h-6 pl-2 rounded-md bg-accent-800">
				Address
			</div>
			<div className="flex items-center w-48 h-6 pl-2 rounded-md bg-accent-800">
				Additional Address
			</div>
			<div className="flex items-center w-48 h-6 pl-2 rounded-md bg-accent-800">
				More Address
			</div>
			<div className="flex items-center w-48 h-6 pl-2 rounded-md bg-accent-800">
				How about a landmark?
			</div>
			<div className="flex items-center justify-between gap-2">
				<div className="flex items-center flex-1 h-6 pl-2 rounded-md bg-accent-800">
					City?
				</div>
				<div className="flex items-center flex-1 h-6 pl-2 font-medium rounded-md bg-accent-800">
					State??
				</div>
			</div>
			<div className="grid items-center justify-between grid-cols-7 gap-2">
				<div className="flex items-center h-6 col-span-4 pl-2 font-semibold rounded-md bg-accent-800">
					Country???
				</div>
				<div className="flex items-center h-6 col-span-3 pl-2 font-bold rounded-md bg-accent-800">
					ZIP CODE !!
				</div>
			</div>
			<div className="flex items-center w-48 h-6 pl-2 font-extrabold rounded-md bg-accent-800">
				PHONE NUMBER !!?!
			</div>
			<animated.div
				style={{ ...props, x: xInterpolate, y: yInterpolate }}
				className="flex items-center justify-center h-6 gap-1 px-2 text-xs font-semibold rounded-md shadow-md cursor-pointer text-zinc-300 bg-accent-500"
			>
				CHECKOUT PLEASE?
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
					<circle cx="10.5" cy="19.5" r="1.5"></circle>
					<circle cx="17.5" cy="19.5" r="1.5"></circle>
				</svg>
			</animated.div>
		</div>
	);
};

const BadSlide3: React.FC = () => {
	const props = useSpring({
		from: { scale: 1 },
		to: [{ scale: 0.9 }, { scale: 1 }],
		config: config,
		delay: 500,
	});

	const [toggle, set] = useState(false);
	const transitions = useTransition(toggle, {
		from: { position: "absolute", opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		delay: 250,
		config: config,
		onRest: () => set(true),
	});

	const { x, y } = useSpring({
		from: { x: 0, y: 0 },
		to: { x: 1, y: 1 },
		loop: true,
	});

	const shakeXStart = -1.5;
	const shakeYStart = -0.5;
	const shakeXEnd = 1.5;
	const shakeYEnd = 2.5;

	const xInterpolate = x.to(
		[0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
		[
			shakeXStart,
			shakeXEnd,
			shakeXStart,
			shakeXEnd,
			shakeXStart,
			shakeXEnd,
			shakeXStart,
			shakeXEnd,
		]
	);

	const yInterpolate = y.to(
		[0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
		[
			shakeYStart,
			shakeYEnd,
			shakeYStart,
			shakeYEnd,
			shakeYStart,
			shakeYEnd,
			shakeYStart,
			shakeYEnd,
		]
	);

	return (
		<div className="w-48 space-y-2 text-xs text-accent-500">
			<div className="flex items-center w-48 h-6 pl-2 rounded-md bg-accent-800">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<circle cx="15.5" cy="13.5" r="2.5"></circle>
					<path d="M12 13.5c0-.815.396-1.532 1-1.988A2.47 2.47 0 0 0 11.5 11a2.5 2.5 0 1 0 0 5 2.47 2.47 0 0 0 1.5-.512 2.486 2.486 0 0 1-1-1.988z"></path>
					<path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.002 12H4z"></path>
				</svg>
			</div>
			<div className="flex items-center w-48 h-6 pl-2 rounded-md bg-accent-800">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path>
					<path d="M6 14h6v2H6z"></path>
				</svg>
			</div>
			<div className="flex items-center w-48 h-6 pl-2 rounded-md bg-accent-800">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 18V6h16l.001 12H4z"></path>
					<path d="M6.5 11h3a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5zM6 14h6v2.001H6zm7 0h5v2.001h-5z"></path>
				</svg>
			</div>

			<div className="flex items-center w-48 h-6 pl-2 rounded-md bg-accent-800">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"></path>
					<path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
				</svg>
			</div>

			<div className="flex items-center w-48 h-6 pl-2 rounded-md bg-accent-800">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M16 12h2v4h-2z"></path>
					<path d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path>
				</svg>
			</div>

			<div className="flex items-center w-48 h-6 pl-2 rounded-md bg-accent-600 text-accent-400">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="currentColor"
					className="mr-1"
				>
					<path d="M20 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h15c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19c-.552 0-1-.449-1-1V6c0-.551.448-1 1-1h15v3h-6c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h6.001v3H5zm15-9v4h-6v-4h6z"></path>
				</svg>
				xxxx xxxx xxxx xxxx
			</div>
			<div className="relative grid h-12 text-red-600 bg-red-200 rounded-md place-items-center">
				{transitions(({ opacity }, item) =>
					!item ? (
						<animated.div
							style={{
								position: "absolute",
								opacity: opacity.to({
									range: [0.0, 1.0],
									output: [0, 1],
								}),
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								width="18"
								height="18"
								viewBox="0 0 100 100"
								preserveAspectRatio="xMidYMid"
							>
								<circle
									cx="50"
									cy="50"
									fill="none"
									stroke="currentColor"
									className="text-amber-600"
									strokeWidth="10"
									r="35"
									strokeDasharray="164.93361431346415 56.97787143782138"
								>
									<animateTransform
										attributeName="transform"
										type="rotate"
										repeatCount="indefinite"
										dur="1s"
										values="0 50 50;360 50 50"
										keyTimes="0;1"
									></animateTransform>
								</circle>
							</svg>
						</animated.div>
					) : (
						<animated.p
							style={{
								position: "absolute",
								opacity: opacity.to({
									range: [1.0, 0.0],
									output: [1, 0],
								}),
							}}
							className="p-2"
						>
							Sorry this payment method is not available!
						</animated.p>
					)
				)}
			</div>

			<div className="flex items-center w-48 h-6 pl-2 rounded-md bg-accent-800">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
					<path d="M12 11c-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3z"></path>
				</svg>
			</div>

			<animated.div
				style={{ ...props, x: xInterpolate, y: yInterpolate }}
				className="flex items-center justify-center h-6 gap-1 px-2 text-xs font-semibold rounded-md shadow-md cursor-pointer text-zinc-300 bg-accent-500"
			>
				JUST. LET. ME. CHECK. OUT.
			</animated.div>
		</div>
	);
};

const GoodSlide2: React.FC = () => {
	const [isLoading, set] = useState(false);
	const props = useSpring({
		from: { scale: 1 },
		to: [{ scale: 0.9 }, { scale: 1 }],
		config: config,
		delay: 1000,
		onRest: () => set(true),
	});
	return (
		<div className="grid space-y-2 text-sm text-zinc-300 place-items-center">
			<animated.p
				style={props}
				className="flex justify-center px-3 py-2 rounded-md shadow-md w-52 bg-accent-600"
			>
				{isLoading ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						width="18"
						height="18"
						viewBox="0 0 100 100"
						preserveAspectRatio="xMidYMid"
					>
						<circle
							cx="50"
							cy="50"
							fill="none"
							stroke="currentColor"
							className="currentColor"
							strokeWidth="10"
							r="35"
							strokeDasharray="164.93361431346415 56.97787143782138"
						>
							<animateTransform
								attributeName="transform"
								type="rotate"
								repeatCount="indefinite"
								dur="1s"
								values="0 50 50;360 50 50"
								keyTimes="0;1"
							></animateTransform>
						</circle>
					</svg>
				) : (
					<>
						Fast Checkout with <b className="ml-1">HORIZON</b>
					</>
				)}
			</animated.p>
		</div>
	);
};

const GoodSlide3: React.FC = () => {
	const [isComplete, set] = useState(false);

	const props = useSpring({
		from: { scale: 1 },
		to: [{ scale: 0.9 }, { scale: 1 }],
		config: config,
		delay: 500,
		pause: isComplete,
		onRest: () => set(true),
	});

	const transitions = useTransition([0, 1], {
		config: config,
		keys: null,
		from: { opacity: 0, transform: "translate3d(100%,0,0)" },
		enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
		leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
		trail: 250,
	});

	const subTransitions = useTransition([0, 1, 2], {
		config: config,
		keys: null,
		from: { opacity: 0, transform: "translate3d(100%,0,0)" },
		enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
		leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
		trail: 75,
	});

	const subItems = [
		<p key={0} className="w-full pb-2 space-x-2 text-xs text-accent-400">
			Evening John Doe!{" "}
			<Image
				src={WavingHandEmoji}
				alt="Waving Hand Emoji"
				height={12}
				width={12}
			/>
		</p>,
		<p
			key={1}
			className="flex items-center justify-between w-full gap-1 p-2 rounded-md bg-accent-600"
		>
			Auto Selected Address{" "}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="12"
				className="inline-block text-green-500 fill-current"
				viewBox="0 0 24 24"
			>
				<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path>
			</svg>
		</p>,
		<p
			key={2}
			className="flex items-center justify-between w-full gap-1 p-2 rounded-md bg-accent-600"
		>
			Preferred Payment{" "}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="currentColor"
				className="mr-1"
			>
				<path d="M20 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h15c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19c-.552 0-1-.449-1-1V6c0-.551.448-1 1-1h15v3h-6c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h6.001v3H5zm15-9v4h-6v-4h6z"></path>
			</svg>{" "}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="12"
				className="inline-block text-green-500 fill-current"
				viewBox="0 0 24 24"
			>
				<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"></path>
			</svg>
		</p>,
	];

	const items = [
		<div key={0} className="space-y-2">
			{subTransitions((p, item) => (
				<animated.div style={p}>{subItems[item]}</animated.div>
			))}
		</div>,
		<div key={1} className="flex flex-col items-center gap-2">
			<div className="flex items-center gap-2">
				<div className="grid w-8 h-8 rounded-md bg-accent-600 place-items-center text-accent-400">
					•
				</div>
				<div className="grid w-8 h-8 rounded-md bg-accent-600 place-items-center text-accent-400">
					•
				</div>
				<div className="grid w-8 h-8 rounded-md bg-accent-600 place-items-center text-accent-400">
					•
				</div>
				<div className="grid w-8 h-8 rounded-md bg-accent-600 place-items-center text-accent-400">
					•
				</div>
			</div>
			<p className="text-xs text-center text-green-600">
				Pin Verified. You&apos;re good to go!
			</p>
		</div>,
	];

	return (
		<div className="grid text-sm place-items-center text-zinc-300">
			<div className="w-[14rem] h-[20rem] rounded-md bg-accent-700 shadow-md flex flex-col items-center justify-between p-6 gap-2 overflow-hidden">
				{transitions((p, item) => (
					<animated.div style={p}>{items[item]}</animated.div>
				))}
				<animated.p
					key={2}
					style={props}
					className="flex items-center justify-center w-full px-3 py-2 rounded-md bg-accent-500 text-zinc-100"
				>
					{isComplete ? (
						<span className="text-green-300">
							Order Confirmed!{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								className="inline-block fill-current"
							>
								<path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"></path>
							</svg>
						</span>
					) : (
						<>
							<span className="mr-2">Complete Checkout</span>
							<Image
								src={RocketEmoji}
								height={12}
								width={12}
								alt="rocket-emoji"
							/>
						</>
					)}
				</animated.p>
			</div>
		</div>
	);
};

const BadCheckoutSlides: React.FC = () => {
	const items = [
		<Slide1 key={0} />,
		<BadSlide2 key={1} />,
		<BadSlide3 key={2} />,
	];

	const transRef = useSpringRef();

	const [index, setIndex] = useState(0);

	const handleRest = () => {
		setTimeout(() => {
			setIndex((index + 1) % items.length);
		}, 3000);
	};

	const transitions = useTransition(index, {
		ref: transRef,
		config: config,
		keys: null,
		from: { opacity: 0, transform: "translate3d(100%,0,0)" },
		enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
		leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
		onRest: handleRest,
		exitBeforeEnter: true,
	});

	useEffect(() => {
		transRef.start();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index]);

	return (
		<>
			<div className="grid h-full scale-50 place-items-center lg:scale-100">
				{transitions((props, item) => (
					<animated.div style={props}>{items[item]}</animated.div>
				))}
				{/* <Slide1 /> */}
			</div>
		</>
	);
};

const GoodCheckoutSlides: React.FC = () => {
	const items = [
		<Slide1 key={0} />,
		<GoodSlide2 key={1} />,
		<GoodSlide3 key={2} />,
	];

	const transRef = useSpringRef();

	const [index, setIndex] = useState(0);

	const handleRest = () => {
		setTimeout(() => {
			setIndex((index + 1) % items.length);
		}, 3000);
	};

	const transitions = useTransition(index, {
		ref: transRef,
		config: config,
		keys: null,
		from: { opacity: 0, transform: "translate3d(100%,0,0)" },
		enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
		leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
		onRest: handleRest,
		exitBeforeEnter: true,
	});

	useEffect(() => {
		transRef.start();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index]);

	return (
		<>
			<div className="relative grid h-full scale-50 place-items-center lg:scale-100">
				{transitions((props, item) => (
					<animated.div style={props}>{items[item]}</animated.div>
				))}
				{/* <GoodSlide3 /> */}
			</div>
		</>
	);
};

const Demonstration: NextPage = () => {
	return (
		<div className="relative border-2 border-accent-600 lg:w-[48rem] lg:h-[36rem] w-[24rem] h-[16rem] shadow-md rounded-lg bg-accent-900 grid grid-cols-2 divide-x-2 divide-accent-600">
			<div className="h-full pt-0 overflow-hidden lg:pt-6">
				<div className="absolute top-0 left-0 flex items-center justify-end w-full h-6 gap-1 px-2 border-b-2 shadow-md rounded-t-md bg-accent-800 border-accent-600">
					<div className="w-2 h-2 bg-red-500 rounded-full" />
					<div className="w-2 h-2 bg-yellow-500 rounded-full" />
					<div className="w-2 h-2 bg-green-500 rounded-full" />
				</div>
				<BadCheckoutSlides />
			</div>
			<div className="h-full pt-0 overflow-hidden lg:pt-6">
				<GoodCheckoutSlides />
				<div className="absolute bottom-0 left-0 flex items-center justify-around w-full pt-4 translate-y-full lg:pt-0 lg:translate-y-1/2">
					<p className="flex items-center justify-center w-full px-4 py-1 mx-4 overflow-hidden text-xs text-center text-red-100 border-2 border-red-400 rounded-md shadow-md lg:rounded-full lg:py-2 2xl:mx-8 lg:text-base bg-accent-900 hero-bg bg-opacity-80">
						Traditional checkout experience
					</p>
					<p className="flex items-center justify-center w-full px-4 py-1 mx-4 overflow-hidden text-xs text-center text-green-100 border-2 border-green-500 rounded-md shadow-md lg:rounded-full lg:py-2 2xl:mx-8 lg:text-base bg-accent-900 hero-bg bg-opacity-80">
						HORIZON makes it ridiculously simple
					</p>
				</div>
			</div>
		</div>
	);
};

export default Demonstration;
