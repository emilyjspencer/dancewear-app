import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationLinks.css';

const NavigationLinks = () => {
  return <ul className="nav-links">
      <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/brands">Brands</NavLink>
    </li>
    <li>
      <NavLink to="/sale">Clearance</NavLink>
    </li>
    <li>
      <NavLink to="/accessories">Accessories</NavLink>
    </li>
    <li>
      <NavLink to="/products">Products</NavLink>
    </li>
    <li>
      <NavLink to="/quiz">Quiz</NavLink>
    </li>
    <li>
      <NavLink to="/register">Sign up</NavLink>
    </li>
    <li>
      <NavLink to="/login">Log in</NavLink>
    </li>
    <li>
      <NavLink to="/logout">Logout</NavLink>
    </li>
    {/* temp  */}
    <li>
      <NavLink to="/users">Users</NavLink>
    </li>
    <li>
      <NavLink to="/myaccount">My Account</NavLink>
    </li>
  </ul>

};


export default NavigationLinks;