import Navbar from "elements/default/Navbar";
import Backdrop from "elements/Hero/Backdrop";
import Demonstration from "elements/Hero/Demonstration";
import type { NextPage } from "next";
import Image from "next/image";
import RocketEmoji from "static/images/rocket_emoji.png";

const Section1: React.FC = () => {
	return (
		<div className="relative grid h-screen border-b shadow-xl place-items-center border-zinc-800">
			<div className="absolute z-0 w-full h-full hero-bg" />
			<main className="absolute flex flex-col items-center justify-between w-full gap-4 px-8 mx-auto -translate-y-8 lg:translate-y-0 2xl:w-3/4 lg:flex-row 2xl:px-0">
				<div className="mb-8 lg:mb-0">
					<h1 className="text-6xl font-medium text-center lg:text-left lg:text-8xl text-zinc-50">
						Horizon
					</h1>
					<h3 className="text-lg leading-none text-center lg:text-left lg:text-2xl gradient-text ">
						Blazing fast checkout made easy
						<span className="inline-block ml-2 align-middle shake">
							<Image
								src={RocketEmoji}
								height={20}
								width={20}
								alt="rocket-emoji"
							/>
						</span>
					</h3>
				</div>
				<Demonstration />
			</main>
		</div>
	);
};

const Section2: React.FC = () => {
	return (
		<div className="relative grid h-screen bg-zinc-900 place-items-center">
			<div className="relative border-2 border-accent-600 lg:w-[48rem] lg:h-[36rem] w-[24rem] h-[16rem] shadow-md rounded-lg bg-accent-900 text-center">
				<div className="h-full pt-0 overflow-hidden lg:pt-6">
					<div className="absolute top-0 left-0 flex items-center justify-end w-full h-6 gap-1 px-2 border-b-2 shadow-md rounded-t-md bg-accent-800 border-accent-600">
						<div className="w-2 h-2 bg-red-500 rounded-full" />
						<div className="w-2 h-2 bg-yellow-500 rounded-full" />
						<div className="w-2 h-2 bg-green-500 rounded-full" />
					</div>
					<div className="flex flex-col justify-center h-full p-4 space-y-4 font-medium text-zinc-100">
						<h1 className="text-6xl gradient-text">
							Lorem ipsum dolor,
						</h1>
						<p className="w-3/4 mx-auto text-xl font-normal text-justify text-zinc-300">
							sit amet consectetur adipisicing elit.Ut delectus
							omnis iste dignissimos exercitationem, temporibus
							consequatur quam architecto? Unde magni enim
							doloribus blanditiis, ipsa eius numquam soluta
							recusandae rem minima. Lorem ipsum dolor sit amet,
							consectetur adipisicing elit. Sapiente, quis!
							Laborum optio commodi facere non. Ratione dolores
							est, veniam obcaecati magni quae sequi, doloremque
							illo eum assumenda repellat. Maiores, quia!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
const Hero: NextPage = () => {
	return (
		<>
			<Navbar />
			<Section1 />
			<Section2 />
		</>
	);
};

export default Hero;
