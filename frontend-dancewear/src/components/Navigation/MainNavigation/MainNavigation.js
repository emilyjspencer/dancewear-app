import React, { Fragment, useState } from 'react';

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





  return ( 
    
      <>
      <NavigationLinks />
      </>
        
            
    )
  
  
  
};
MainNavigation.defaultProps = {
  brand: ""
}

MainNavigation.propTypes = {
  brand: PropTypes.string.isRequired
}
export default MainNavigation;