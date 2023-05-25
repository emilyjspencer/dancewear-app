import logo from './logo.svg';
import './App.css';
import  User from './User';
import UsersPage from './components/UsersPage/UsersPage';
import Footer from './components/HeaderFooter/Footer';
import Header from './components/HeaderFooter/Header';
import Products from './components/Products/Products'


function App() {
  return (
    <div className="App">
      <Header />
      <UsersPage />
      <Products />
     <Footer />
    </div>
  );
}

export default App;
