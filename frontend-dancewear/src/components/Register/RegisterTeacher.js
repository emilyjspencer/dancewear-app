import './RegisterTeacher.css';

import {useState} from 'react';

const RegisterTeacher = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        //prevent page refresh - default behaviour
        e.preventDefault();
        console.log(email);
   }

    return (
        <div className="register-container">
        <h2>Sign up for an account</h2>
        <h3>As a qualified dance teacher, you are eligible for various discounts on our site</h3>
        <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="name">
            <label htmlFor="name">name</label>
            <input value={name} onChange={(e) => setName(e.target.value)}type="name" 
            placeholder="Please enter your name" id="name" name="name" />
            </div>
            <div className="email">
            <label htmlFor="email   ">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Please enter your email" id="email" name="email" />
            </div>
            <div className="password">
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            </div>
            <button className="sign-up-button" type="submit">Sign up</button>
        </form>
    </div>
    )
}


export default RegisterTeacher;