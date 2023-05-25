import logo from './logo.svg';
import './App.css';
import  User from './User';
import UsersPage from './components/UsersPage/UsersPage';
import Footer from './components/HeaderFooter/Footer';
import Header from './components/HeaderFooter/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <UsersPage />
     <Footer />
    </div>
  );
}

export default App;
