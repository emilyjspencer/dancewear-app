
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Products from './components/Products/Products'

import AddProduct from './components/Products/AddProduct/AddProduct'
import EditDeleteProduct from './components/Products/EditDeleteProduct/EditDeleteProduct';
import Quiz from './components/Quiz/Quiz';
import Reviews from './components/Reviews/Reviews';
import Gymnastics from './components/Gymnastics/Gymnastics';
import Brands from './components/Brands/Brands';
import AddBrand from './components/Brands/AddBrand/AddBrand';
import EditDeleteBrand from './components/Brands/EditDeleteBrand/EditDeleteBrand';
import DanceShoes from './components/Shoes/DanceShoes'
import Contact from './components/Contact/Contact';
import UsersPage from './components/UsersPage/UsersPage';
import EditDeleteUser from './components/UsersPage/EditDeleteUser/EditDeleteUser';
import AddUser from './components/UsersPage/AddUser/AddUser';
import Home from './components/Home/Home';
import Footer from './components/HeaderFooter/Footer';
import Delivery from './components/Delivery/Delivery';
import Cookies from './components/Cookies/Cookies';
import Privacy from './components/Privacy/Privacy';
import Returns from './components/Returns/Returns';
import AddReview from './components/Reviews/AddReview/AddReview';
import EditDeleteReview from './components/Reviews/EditDeleteReview/EditDeleteReview';
import TermsConditions from './components/TermsConditions/TermsConditions';
import NotFound from './components/NotFound/NotFound';
import Careers from './components/Careers/Careers';
import EditDeleteBlog from './components/Blog/EditDeleteBlog/EditDeleteBlog';
import Blog from './components/Blog/Blog';
import AddBlogPost from './components/Blog/AddBlogPost/AddBlogPost';
import Sale from './components/Sale/Sale';
import MyAccount from './components/MyAccount/MyAccount';
import Basket from './components/Basket/Basket';
import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import TestUserList from './components/Test/TestUserList';
import Logout from './components/Logout/Logout';
import ChatBot from 'react-simple-chatbot';
import Accessories from './components/Accessories/Accessories';
import AuthenticationService from './services/AuthenticationService';
import Error from '../src/components/Error/Error';
import Registration from '../src/components/Authentication/Registration/Registration';
import DanceTeacherList from '../src/components/DanceTeacher/DanceTeacherList.js';
import UserList from '../src/components/User/UserList';
import About from '../src/components/About/About';
import Login from './components/Authentication/Login/Login';
import UserProfile from './components/UserProfile/UserProfile';
import { ThemeProvider } from 'styled-components';

 
const steps = [
    {
        id: '0',
        message: 'Hi there!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'How may I help',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
           
            { value: 1, label: 'View products' },
            { value: 2, label: 'Contact us' },
            { value: 3, label: 'Ask a question' },
 
        ],
        end: true
    }
];
 

const theme = {
    background: '#121825',
    headerBgColor: 'gray',
    headerFontSize: '20px',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
 
const configuration = {
    logo: "logo.png",
    floating: true,
};
 

const App = () => {

    function DanceTeacherGuard() {
        const currentUser = AuthenticationService.getCurrentUser();
        if (!currentUser) {
          return <div>You do not have access to this page!</div>;
        } else {
          return <DanceTeacherList />;
        }
      }
      function UserGuard() {
        const currentUser = AuthenticationService.getCurrentUser();
        if (!currentUser) {
          return <div>You do not have access to this page!</div>;
        } else {
          return <UserList />;
        }
      }

      function ReviewGuard() {
        const currentUser = AuthenticationService.getCurrentUser();
        if (!currentUser) {
          return <div>You do not have access to this page!</div>;
        } else {
          return <Reviews />;
        }
      }

  return (
    <>

     <Router>
  
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/reviews" element={<Reviews />} />
     <Route path="/reviews/add" element={<AddReview />} />
     <Route path="/reviews/:id" element={<EditDeleteReview />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/add" element={<AddBrand />} />
          <Route path="/brands/:id" element={<EditDeleteBrand />} />
          <Route path="/shoes" element={<DanceShoes />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/basket/:id" element={<Basket />} />
          <Route path="/gymnastics" element={<Gymnastics />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<EditDeleteProduct />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<EditDeleteUser />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/termsconditions" element={<TermsConditions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<EditDeleteBlog />} />
          <Route path="/blog/add" element={<AddBlogPost />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/checkout" element={<Basket />} />
          <Route path="/test" element={<TestUserList/>} />
          <Route path="/logout" element={<Logout />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/*" element={<Error />} />
        <Route path="/dance-teachers" element={<DanceTeacherList />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-profile" element={<UserProfile />} />
          </Routes>
          </Router>
      
          <ThemeProvider theme={theme}>
                <ChatBot
 
                    headerTitle="Dancewear"
                    steps={steps}
                    {...configuration}
 
                />
            </ThemeProvider>

          </>
  );
}

export default App;
