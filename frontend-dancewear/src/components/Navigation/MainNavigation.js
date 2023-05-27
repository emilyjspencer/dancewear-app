import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import NavigationLinks from './NavigationLinks/NavigationLinks';


import './MainNavigation.css';

const MainNavigation = () => {

 
  return ( 
      <>
        <nav>
            <NavigationLinks />
          </nav>
  
  </>
  );
};

export default MainNavigation;