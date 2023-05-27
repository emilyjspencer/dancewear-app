
import './App.css';

import Products from './components/Products/Products'

import Quiz from './components/Quiz/Quiz';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Reviews from './components/Reviews/Reviews';
import Gymnastics from './components/Gymnastics/Gymnastics';
import Brands from './components/Brands/Brands';
import DanceShoes from './components/Shoes/DanceShoes'
import MainNavigation from './components/Navigation/MainNavigation';
import Contact from './components/Contact/Contact';
import Header from './components/HeaderFooter/Header';
import UsersPage from './components/UsersPage/UsersPage';
import Home from './components/Home/Home';
import Footer from './components/HeaderFooter/Footer';
import Delivery from './components/Delivery/Delivery';
import Cookies from './components/Cookies/Cookies';
import Privacy from './components/Privacy/Privacy';
import Returns from './components/Returns/Returns';
import TermsConditions from './components/TermsConditions/TermsConditions';
import NotFound from './components/NotFound/NotFound';


const App = () => {

  return (
    <>
     
     <Router>
     <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/brands">Brands</Link>
      <Link to="/products">Products</Link>
      <Link to="/dancewear">Dancewear</Link>
      <Link to="/shoes">Shoes</Link>
      <Link to="/gymnastics">Gymnastics</Link>
      <Link to="/costumes">Costumes</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/register">Sign Up</Link>
      <Link to="/login">Login</Link>
      <Link to="/users">Users</Link>
     </nav>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/reviews" element={<Reviews />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/shoes" element={<DanceShoes />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/gymnastics" element={<Gymnastics />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          </Routes>
          </Router>
      
        <Footer />
          </>
  );
}

export default App;
