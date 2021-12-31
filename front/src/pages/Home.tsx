import { Navbar, Announcement, Slider } from '../components';
import { Categories } from '../components/categories/Categories';

const Home = () => {
  return (
    <div className="container">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
