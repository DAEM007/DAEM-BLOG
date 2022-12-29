// styles import
import './NotFound.css';

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry!!!</h2>
            <p>Can't find the resource url...</p>
            <Link to='/'>Back to the Homepage...</Link>
        </div>
    );
}
 
export default NotFound;