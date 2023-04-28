// styles import
import './Login.css';
// all react imports
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
// all firebase imports
import { auth } from '../firebase/Firebase';
import { signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        setIsPending(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                console.log(cred.user);
                setIsPending(false);
                navigate('/');
            })
            .catch((err) => {
                // console.log(err.message);
                setError(err.message);
                setIsPending(false);
            })

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
                <input type="password"
                required
                value={ password }
                placeholder = 'Password'
                onChange = { (e) => setPassword(e.target.value) }
                />
                {!isPending && <button>Login</button>}
                {isPending && <button>Logging in...</button>}
                {error && <p>{ error }</p>}
           </form>

           <p>
                No account yet?
                <Link to='/SignUp'>Sign up</Link>
           </p>
        </div>
    );
}
 
export default Login;