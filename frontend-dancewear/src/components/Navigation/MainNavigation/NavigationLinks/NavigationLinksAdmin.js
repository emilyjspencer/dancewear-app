import AuthenticationService from '../../../../services/AuthenticationService';

import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationLinksAdmin.css";


const NavigationLinksAdmin = () => {


  const CURRENT_USER_TYPE = AuthenticationService.getCurrentUser().user.authorities[0].authority
  return (
    <ul className="nav-links">
    <li>
        <NavLink to="/brands">Brands</NavLink>
      </li>
      <li>
        <NavLink to="/sale">Clearance</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/quiz">Quiz</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/user-profile">My Account</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/basket">Basket</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
      <div>You are logged in as: {CURRENT_USER_TYPE} </div>
    </ul>
  );
};

export default NavigationLinksAdmin;