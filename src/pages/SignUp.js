import { useState } from "react";


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    

    const onSignUp = () => {
        console.log(`Welcome new user`);
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
                <input type="text"
                required
                value={ password }
                placeholder = 'Password'
                onChange = { (e) => setPassword(e.target.value) }
                />
                {!isPending && <button>Sign Up</button>}
                {isPending && <button>Signing up...</button>}
            </form>

        </div>
    );
}
 
export default SignUp;