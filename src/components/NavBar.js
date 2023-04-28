// styles import
import './NavBar.css'
// all react imports
import { Link } from "react-router-dom";
// all firebase imports
import { auth } from "../firebase/Firebase";
import { signOut } from "firebase/auth";


const NavBar = () => {

    const onLogOut = (e) => {
        e.preventDefault();

        signOut(auth)
            .then(() => {
                console.log('user signed out');
            })
            .catch((err) => {
                console.log(err.message);
            })

    }

    return(
        <nav className="navbar">
            <h1>DAEM's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Login">Login</Link>
                <button onClick={onLogOut}>Log out</button>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}

export default NavBar;

