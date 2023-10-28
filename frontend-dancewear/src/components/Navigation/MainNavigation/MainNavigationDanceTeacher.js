import React, { Fragment, useState } from 'react';

import PropTypes from 'prop-types';
import NavigationLinksDanceTeacher from '../MainNavigation/MainNavigationDanceTeacher';


const MainNavigationDanceTeacher = () => {
  
  return ( 
      
          <div className="container-fluid">
         
              <div className='linksContainer'>
             
                 <NavigationLinksDanceTeacher className="navbar-brand" to="/"></NavigationLinksDanceTeacher>
                
                 
              </div>
          </div>
            
    )
  
  
  
};
MainNavigationDanceTeacher.defaultProps = {
  brand: ""
}

MainNavigationDanceTeacher.propTypes = {
  brand: PropTypes.string.isRequired
}
export default MainNavigationDanceTeacher;