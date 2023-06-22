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

   const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/users/login", {
            email: email,
            password: password,
            }).then((res) => 
            {
             console.log(res.data);
             
             if (res.data.message === "Email does not exist") 
             {
               alert("Email does not exist");
             } 
             else if(res.data.message === "User has successfully been logged in")
             { 
                
                navigate('/');
             } 
              else 
             { 
                alert("Email and Password do not match");
             }
          }, fail => {
           console.error(fail); 
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }

    return (
        <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
            <div className="email">
            <label htmlFor="email   ">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Please enter your email" id="email" name="email" />
            </div>
            <div className="password">
            <label htmlFor="password">password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            </div>
            <button onClick={loginUser} className="login-button" type="submit">Log In</button>
        </form>
        
        <button className="login-button">Don't have an account? Register here.</button>
    </div>
    )
}

export default Login;