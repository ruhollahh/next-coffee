import { Navbar } from '@next-coffee/shop-navbar';
import { Topbar } from '@next-coffee/shop-topbar';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="max-w-wrapper">hi</div>
    </div>
  );
};

export default Home;
