import { Navbar, Announcement, Slider } from '../components';
import { Categories } from '../components/categories/Categories';
import { Products } from '../components/products';

const Home = () => {
  return (
    <div className="container">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
