import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthenticationService from '../../../../services/AuthenticationService';
import './NavigationLinks.css';
import Dropdown from '../../../Dropdown/Dropdown';

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
      <NavLink to="/products">Products</NavLink>
    </li>
    <li>
      <NavLink to="/quiz">Quiz</NavLink>
    </li>
    {/* only visible if not logged in */}
    <li>
      <NavLink to="/register">Sign up</NavLink>
    </li>
    {/* only visible if not logged in */}
    <li>
      <NavLink to="/login">Log in</NavLink>
    </li>
    <li>
      <NavLink to="/logout">Logout</NavLink>
    </li>
    {/* users will only be visible to admins */}
    <li>
      <NavLink to="/users">Users</NavLink>
    </li>
    <li>
      <NavLink to="/myaccount">My Account</NavLink>
    </li>
    <li>
      <NavLink to="/blog">Blog</NavLink>
    </li>
    <li>
      <Dropdown />
    </li>
  </ul>

};


export default NavigationLinks;