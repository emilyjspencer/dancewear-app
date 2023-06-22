import './Register.css';

import { useState } from 'react';
import axios from 'axios';

const Register = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

   const saveUser = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/users/save", {
          name: name,
          email: email,
          password: password,
          });
          alert("User was successfully registered");
        } catch (err) {
          alert(err);
        }
      }

    //const handleSubmit = (e) => {
        //prevent page refresh - default behaviour
      //  e.preventDefault();
        //console.log(email);
   //}

    return (
        <div className="register-container">
        <h2>Sign up for an account</h2>
        <form className="sign-up-form">
        <div className="name">
            <label htmlFor="name">name</label>
            <input value={name} onChange={(e) => setName(e.target.value)}type="name" 
            placeholder="Please enter your name" id="name" name="name" />
            </div>
            <div className="email">
            <label htmlFor="email   ">email</label>
            
            <input value={email} 
          
            onChange={(e) => setEmail(e.target.value)} 
            type="email" placeholder="Please enter your email" 
            id="email" name="email" />
            </div>
            <div className="password">
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            </div>
            <button type="submit" className="submit" onClick={saveUser} >Save</button>
        </form>
    </div>
    )
}


export default Register;