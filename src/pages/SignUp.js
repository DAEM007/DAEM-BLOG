import { useState } from "react";
import { useNavigate } from "react-router-dom";
// All firebase imports
import { auth } from "../firebase/Firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    const onSignUp = (e) => {
        e.preventDefault();

        setIsPending(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                console.log('user has been created');
            })
            .catch((err) => {
                // console.log(err.message);
                setError(err.message);
                setIsPending(false);
            })

            onAuthStateChanged(auth, (user) => {
                if(user !== null){
                    updateProfile(user, { displayName: name })
                        .then(() => {
                            console.log('user profile updated');
                            console.log(user);
                            setIsPending(false);
                            navigate('/');
                        })
                        .catch((err) => {
                            console.log(err.message);
                            setIsPending(false);
                        })
                }
            })

        

    }

    return ( 
        <div className="sign-up">
            <h2>Welcome, signUp here...</h2>
            <form onSubmit={onSignUp}>
                <label>Name</label>
                <input type="text"
                required
                value={ name }
                placeholder = 'Name'
                onChange = { (e) => setName(e.target.value) }
                />

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
                {!isPending && <button>Sign Up</button>}
                {isPending && <button>Signing up...</button>}
                {error && <p>{ error }</p>}
            </form>

        </div>
    );
}
 
export default SignUp;