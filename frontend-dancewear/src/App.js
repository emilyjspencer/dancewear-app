
import './App.css';

import Products from './components/Products/Products'

import Quiz from './components/Quiz/Quiz';

import { BrowserRouter as Router, Route, Routes, Redirect, Switch} from 'react-router-dom';
import Reviews from './components/Reviews/Reviews';
import Gymnastics from './components/Gymnastics/Gymnastics';
import Brands from './components/Brands/Brands';
import DanceShoes from './components/Shoes/DanceShoes'
import MainNavigation from './components/Navigation/MainNavigation';
import Contact from './components/Contact/Contact';
import Header from './components/HeaderFooter/Header';
import UsersPage from './components/UsersPage/UsersPage';
import Home from './components/Home/Home';


const App = () => {
  return (
    <>
   <MainNavigation />
    <Header />
     
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/reviews" element={<Reviews />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/shoes" element={<DanceShoes />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/gymnastics" element={<Gymnastics />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<UsersPage />} />
          </Routes>
        
          </>
  );
}

export default App;
