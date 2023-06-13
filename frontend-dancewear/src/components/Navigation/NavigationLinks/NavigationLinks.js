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
      <NavLink to="/products">Products</NavLink>
    </li>
    <li>
      <NavLink to="/shoes">Shoes</NavLink>
    </li>
    <li>
      <NavLink to="/dancewear">DanceWear</NavLink>
    </li>
    <li>
      <NavLink to="/sale">Clearance</NavLink>
    </li>
    <li>
      <NavLink to="/accessories">Accessories</NavLink>
    </li>
    <li>
      <NavLink to="/gymnastics">Gymnastics</NavLink>
    </li>
    <li>
      <NavLink to="/costumes">Costumes</NavLink>
    </li>
    <li>
      <NavLink to="/products">Search products</NavLink>
    </li>
    <li>
      <NavLink to="/quiz">Quiz</NavLink>
    </li>
    <li>
      <NavLink to="/Sign up">Sign up</NavLink>
    </li>
    <li>
      <NavLink to="/Log in">Log in</NavLink>
    </li>
    {/* temp  */}
    <li>
      <NavLink to="/Users">Users</NavLink>
    </li>
  </ul>

};


export default NavigationLinks;