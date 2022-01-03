import {
  Announcement,
  Categories,
  Footer,
  Navbar,
  Newsletter,
  Products,
  Slider,
} from '../../components';

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
