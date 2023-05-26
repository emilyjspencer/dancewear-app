import logo from './logo.svg';
import './App.css';
import  User from './User';
import UsersPage from './components/UsersPage/UsersPage';
import Footer from './components/HeaderFooter/Footer';
import Header from './components/HeaderFooter/Header';
import Products from './components/Products/Products'
import Decor from './components/Decor';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Test from './Test';




function App() {
  return (
    <div className="App">
      <Header />
      <UsersPage />
      <Products />
      <Decor />
      <Test />
      <Contact />
     <Footer />
    </div>
  );
}

export default App;
