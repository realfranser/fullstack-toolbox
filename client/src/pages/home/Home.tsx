import {
  Announcement,
  Categories,
  Footer,
  Navbar,
  Newsletter,
  Products,
  Slider,
} from '../../components';
import { HOMEPAGE_CATEGORY, HOMEPAGE_PRODUCT_LIST_PROPS } from './data';

export const Home = () => {
  return (
    <div className="container">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products
        props={HOMEPAGE_PRODUCT_LIST_PROPS}
        category={HOMEPAGE_CATEGORY}
      />
      <Newsletter />
      <Footer />
    </div>
  );
};
