import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationLinks.css';
import Dropdown from '../../../Dropdown/Dropdown';

const NavigationLinks = () => {


  return (

    <><ul className="navigation-links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
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
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <Dropdown />
      </li>
    </ul></>
  )

};


export default NavigationLinks;