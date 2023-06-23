import Contact from "../Contact/Contact";
import Reviews from "../Reviews/Reviews";
import Carousel from "../Trends/Carousel";
import AddReview from "../AddReview/AddReview";
import Sites from "../Sites/Sites";
import Studios from "../Studios/Studios";
import Training from "../Training/Training";

const Home = () => {
  return (
    <>
      <Carousel />
       <Sites   />
       <Studios />
       <Training />
      <Reviews />
      <AddReview />
      <Contact />
    </>
  );
};

export default Home;
