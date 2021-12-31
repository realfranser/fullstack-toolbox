import {
  Announcement,
  Categories,
  Navbar,
  Newsletter,
  Products,
  Slider,
  Footer,
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
      <Footer />
    </div>
  );
};

export default Home;
