import Link from "next/link";

const Navbar: React.FC = () => {
	return (
		<div className="absolute top-0 left-0 z-10 flex items-center justify-between w-full h-20 px-6">
			<div>{/* Insert logo and link here later */}</div>
			<div className="flex items-center gap-8 transition-colors duration-100 text-zinc-300 hover:text-zinc-50 ">
				<Link href={`/about`}>About</Link>
				<span className="px-3 py-2 transition-colors duration-200 rounded-md cursor-pointer bg-accent-200 text-zinc-50 hover:bg-accent-300 ">
					{/* <Link href={`/connect`}>Connect</Link> */}
					<button
						onClick={() => {
							let id = "ldfceamgefbimhknjmmffacccemedibb";
							chrome.runtime.sendMessage(id, {
								yes: false,
							});
						}}
					>
						Connect
					</button>
				</span>
			</div>
		</div>
	);
};

export default Navbar;
