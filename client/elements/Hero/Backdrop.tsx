import type { NextPage } from "next";
import { HTMLAttributes } from "react";

const Backdrop: NextPage<HTMLAttributes<HTMLOrSVGElement>> = props => {
	return (
		<svg
			viewBox="0 0 960 540"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
			{...props}
		>
			<defs>
				<filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
					<feFlood
						floodOpacity="0"
						result="BackgroundImageFix"
					></feFlood>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					></feBlend>
					<feGaussianBlur
						stdDeviation="163"
						result="effect1_foregroundBlur"
					></feGaussianBlur>
				</filter>
			</defs>
			<rect width="960" height="540" fill="#18181b"></rect>
			<g filter="url(#blur1)">
				<circle cx="857" cy="309" fill="#2c2a5d" r="363"></circle>
				<circle cx="363" cy="85" fill="#18181b" r="363"></circle>
				<circle cx="477" cy="538" fill="#2c2a5d" r="363"></circle>
				<circle cx="725" cy="23" fill="#2c2a5d" r="363"></circle>
				<circle cx="674" cy="309" fill="#18181b" r="363"></circle>
				<circle cx="308" cy="464" fill="#2c2a5d" r="363"></circle>
			</g>
		</svg>
	);
};

export default Backdrop;
