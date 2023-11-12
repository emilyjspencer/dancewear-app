import React  from 'react';

import './MainNavigation.css';
import PropTypes from 'prop-types';

import AuthenticationService from '../../../services/AuthenticationService';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import NavigationLinksAdmin from './NavigationLinks/NavigationLinksAdmin'
import NavigationLinksDanceTeacher from './NavigationLinks/NavigationLinksDanceTeacher';
import NavigationLinksUser from './NavigationLinks/NavigationLinksUser';


const MainNavigation = () => {


const currentUser = AuthenticationService.getCurrentUser();
console.log(currentUser)

if(!currentUser) {
  return <NavigationLinks />
}

else if(
  currentUser.user.authorities[0].authority === 'DANCE_TEACHER') {
   return <NavigationLinksDanceTeacher />
}

else if(currentUser.user.authorities[0].authority === 'USER' ) {
  return <NavigationLinksUser />
}

else if (currentUser.user.authorities[0].authority === 'ADMIN') {
     return <NavigationLinksAdmin />
} 

  return ( 
    <div className="container-fluid">
  

    
          
    {/*<NavigationLinks className="navbar-brand" to="/"></NavigationLinks> */}

  </div>
            
    )
  
  
  
};
MainNavigation.defaultProps = {
  brand: ""
}

MainNavigation.propTypes = {
  brand: PropTypes.string.isRequired
}
export default MainNavigation;