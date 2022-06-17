import { MarketingText } from "./marketing-text";
import { TopActions } from "./top-actions";

export const Topbar = () => {
	return (
		<div className="drop-shadow-lg border-b border-solid border-secondary-content bg-secondary text-sm text-secondary-content">
			<div className="max-w-wrapper flex gap-8 justify-between py-2">
				<MarketingText />
				<TopActions />
			</div>
		</div>
	);
};
