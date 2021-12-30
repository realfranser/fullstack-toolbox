import { Navbar, Announcement, Slider } from '../components';

const Home = () => {
  return (
    <div className="container">
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
