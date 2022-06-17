import { SearchBar } from './search-bar';
import { ShoppingCart } from './shopping-cart';
import { SupportButton } from './support-button';

export const TopActions = () => {
  return (
    <div className="flex gap-6">
      <SupportButton />
      <SearchBar />
      <ShoppingCart />
    </div>
  );
};
