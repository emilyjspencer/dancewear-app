import React  from 'react';

import PropTypes from 'prop-types';
import NavigationLinksAdmin from '../MainNavigation/NavigationLinks/NavigationLinksAdmin';


const MainNavigationAdmin = () => {

 
  return ( 
      
          <div className="container-fluid">
         
              <div className='linksContainer'>
             
                 <NavigationLinksAdmin className="navbar-brand" to="/"></NavigationLinksAdmin>
                
                 
              </div>
          </div>
            
    )
  
  
  
};
MainNavigationAdmin.defaultProps = {
  brand: ""
}

MainNavigationAdmin.propTypes = {
  brand: PropTypes.string.isRequired
}
export default MainNavigationAdmin;