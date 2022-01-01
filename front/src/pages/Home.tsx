import {
  Announcement,
  Categories,
  Navbar,
  Newsletter,
  Products,
  Slider,
  Footer,
} from '../components';

export const Home = () => {
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
