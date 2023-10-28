import React, { Fragment, useState } from 'react';

import PropTypes from 'prop-types';
import NavigationLinksUser from '../MainNavigation/NavigationLinks/NavigationLinksUser';


const MainNavigationUser = () => {

 
  return ( 
      
          <div className="container-fluid">
         
              <div className='linksContainer'>
             
                 <NavigationLinksUser className="navbar-brand" to="/"></NavigationLinksUser>
                
                 
              </div>
          </div>
            
    )
  
  
  
};
MainNavigationUser.defaultProps = {
  brand: ""
}

MainNavigationUser.propTypes = {
  brand: PropTypes.string.isRequired
}
export default MainNavigationUser;