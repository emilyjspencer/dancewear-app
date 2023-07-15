
import Dropdown from '../Dropdown/Dropdown';
import NavigationLinks from '../Navigation/NavigationLinks/NavigationLinks';
import '../Navigation/NavigationLinks/NavigationLinks.css';

const Header = () => {
    return (
      <nav>
        <NavigationLinks />
        <Dropdown />
        </nav>
        
    )
}

export default Header;