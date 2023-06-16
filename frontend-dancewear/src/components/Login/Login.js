import './Login.css';
import { useState} from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        //prevent page refresh - default behaviour
        e.preventDefault();
        console.log(email);
   }

    return (
        <div className="login-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="email">
            <label htmlFor="email   ">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Please enter your email" id="email" name="email" />
            </div>
            <div className="password">
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            </div>
            <button className="login-button" type="submit">Log In</button>
        </form>
        
        <button className="login-button">Don't have an account? Register here.</button>
    </div>
    )
}

export default Login;