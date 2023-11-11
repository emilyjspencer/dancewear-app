import { NavLink } from "react-router-dom";
import AuthenticationService from '../../services/AuthenticationService';

const Logout = () => {

    const logout = () => {
     console.log('logout was called')
     AuthenticationService.logout();
    }

    return (
        <><h1>Are you sure that you want to log out?</h1>
        <button onClick={logout} className="logout">
            <NavLink to="/">Logout</NavLink>
        </button></>
    )

}

export default Logout;