import { SearchBar } from "@/components/common/search-bar";
import { ShoppingCart } from "@/components/common/shopping-cart";
import { SupportButton } from "@/components/common/support-button";

export const TopActions = () => {
	return (
		<div className="flex gap-6">
			<SupportButton />
			<SearchBar />
			<ShoppingCart />
		</div>
	);
};
