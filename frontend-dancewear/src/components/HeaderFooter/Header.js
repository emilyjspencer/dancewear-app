import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="">
    
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/products" className="nav-link">Search Products</Link>
        </li>
        <li className="nav-item">
        <Link to="/dancewear" className="nav-link">Dancewear</Link>
        </li>
        <li className="nav-item">
        <Link to="/danceshoes" className="nav-link">Dance shoes</Link>
        </li>
        <li className="nav-item">
        <Link to="/costumes" className="nav-link">Costumes</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/accessories">Accessories</a>
        </li>
        <li className="nav-item">
        <Link to="/gymnastics" className="nav-link">Gymnastics</Link>
        </li>
        <li className="nav-item">
        <Link to="/sale" className="nav-link">Clearance</Link>
        </li>
        <li className="nav-item">
        <Link to="/quiz" className="nav-link">Quiz</Link>
        </li>
        <li className="nav-item">
        <Link to="/login" className="nav-link">Sign In</Link>
        </li>
        <li className="nav-item">
        <Link to="/register" className="nav-link">Sign Up</Link>
        </li>
        <li className="nav-item">
        <Link to="/users" className="nav-link">Users</Link>
        </li>
      </ul>
    </nav>
        
    )
}

export default Header;