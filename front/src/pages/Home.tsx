import {
  Announcement,
  Categories,
  Navbar,
  Newsletter,
  Products,
  Slider,
} from '../components';

const Home = () => {
  return (
    <div className="container">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
