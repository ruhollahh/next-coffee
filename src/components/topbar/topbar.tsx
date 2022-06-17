import { MarketingText } from "./marketing-text";
import { TopActions } from "./top-actions";

export const Topbar = () => {
	return (
		<div className="flex gap-8 justify-between bg-base-100 py-2 px-8 text-sm text-base-100-content">
			<MarketingText />
			<TopActions />
		</div>
	);
};
