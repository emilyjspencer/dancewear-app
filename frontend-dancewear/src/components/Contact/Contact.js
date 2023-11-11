

import React from 'react';
import NavbarLogic from '../../utilities/navbarlogic';




const Contact = () => {

    return (
        <>
        <NavbarLogic />
       <h1>Connect with Us</h1>
      
    
       <h2>Sign up to receive our latest news and offers</h2>
       <input type="text"   placeholder="Enter your email address"/>
       <button type="submit">Submit</button>
       </>
    )

}
   
   
export default Contact;
   