import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const Navbar = () => {
	return (
		<div className="bg-primary border-b border-solid border-gray-500 text-gray-900">
			<div className="max-w-wrapper flex gap-14 items-center py-5">
				<Logo />
				<NavMenu />
			</div>
		</div>
	);
};
