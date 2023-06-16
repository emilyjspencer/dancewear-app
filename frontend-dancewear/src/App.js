
import './App.css';

import Products from './components/Products/Products'

import Quiz from './components/Quiz/Quiz';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Reviews from './components/Reviews/Reviews';
import Gymnastics from './components/Gymnastics/Gymnastics';
import Brands from './components/Brands/Brands';
import DanceShoes from './components/Shoes/DanceShoes'
import Contact from './components/Contact/Contact';
import UsersPage from './components/UsersPage/UsersPage';
import Home from './components/Home/Home';
import Footer from './components/HeaderFooter/Footer';
import Delivery from './components/Delivery/Delivery';
import Cookies from './components/Cookies/Cookies';
import Privacy from './components/Privacy/Privacy';
import Returns from './components/Returns/Returns';
import TermsConditions from './components/TermsConditions/TermsConditions';
import NotFound from './components/NotFound/NotFound';
import Careers from './components/Careers/Careers';
import Blog from './components/Blog/Blog';
import Sale from './components/Sale/Sale';
import MyAccount from './components/MyAccount/MyAccount';
import Basket from './components/Basket/Basket';
import MainNavigation from './components/Navigation/MainNavigation';
import TestUserList from './components/Test/TestUserList';
import CookieConsent from "react-cookie-consent";
import Logout from './components/Logout/Logout';
import Login from './components/Login/Login';


const App = () => {

  return (
    <>

     <Router>
     <MainNavigation brand =" FDM Portal" />
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
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/checkout" element={<Basket />} />
          <Route path="/test" element={<TestUserList/>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/login" element={<Login />} />
          </Routes>
          </Router>
      

        <Footer />
          </>
  );
}

export default App;
