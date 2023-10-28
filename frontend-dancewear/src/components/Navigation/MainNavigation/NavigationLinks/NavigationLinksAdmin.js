import AuthenticationService from '../../../../services/AuthenticationService';

import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationLinksAdmin.css";


const NavigationLinksAdmin = () => {


  const CURRENT_USER_TYPE = AuthenticationService.getCurrentUser().user.authorities[0].authority
  return (
    <ul className="nav-links">
      
      
      <li>
        <NavLink to="/user-profile">My Account</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
      <div>You are logged in as: {CURRENT_USER_TYPE} </div>
    </ul>
  );
};

export default NavigationLinksAdmin;