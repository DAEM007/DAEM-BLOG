// styles import
import './Login.css';

import { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = () => {
        console.log('New user Logged in');
    }

    return (
        <div className='login'>
            <h2>Login here...</h2>
           <form onSubmit={onLogin}>
            <label>Email</label>
            <input type="text"
            required
            value={ email }
            placeholder = 'Email address'
            onChange = { (e) => setEmail(e.target.value) }
            />

            <label>Password</label>
            <input type="text"
            required
            value={ password }
            placeholder = 'Password'
            onChange = { (e) => setPassword(e.target.value) }
            />
           </form>

           <p>
            No account yet?
            <Link to='/SignUp'>Sign up</Link>
           </p>
        </div>
    );
}
 
export default Login;