import React, { Fragment, useState } from 'react';
import NavigationLinks from '../Navigation/NavigationLinks/NavigationLinks';
import './MainNavigation.css';
import PropTypes from 'prop-types';
import logo from '../../components/logo.jpg';
const MainNavigation = (props) => {
  const { brand } = props
 
  return ( 
      
          <div className="container-fluid">
            <img src={logo} alt="Logo" id="logo-image"></img>
              <div className='linksContainer'>
                <NavigationLinks className="navbar-brand" to="/">{brand}</NavigationLinks>
              </div>
          </div>
            
    )
  
  
  
};
MainNavigation.defaultProps = {
  brand: "FDM Portal"
}

MainNavigation.propTypes = {
  brand: PropTypes.string.isRequired
}
export default MainNavigation;