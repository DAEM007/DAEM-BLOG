// styles import
import './Create.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// All firebase import
import { db } from "../firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // assign the blog object to a variable 'blog'
        const blog = { title, body, author };

        // reference to the database collection
        const colRef = collection(db, 'blogs');

        setIsPending(true);

        addDoc(colRef, blog)
        .then(() => {
            console.log('New blog added');
            setIsPending(false);
            navigate('/');
        })
        
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" 
                required 
                value={ title }
                onChange={ (e) => setTitle(e.target.value) }
                />
                <label>Blog body:</label>
                <textarea
                required
                value={ body }
                onChange={ (e) => setBody(e.target.value) }
                ></textarea>
                <label>Blog author:</label>
                <select
                required
                value={ author }
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Damilola">Damilola</option>
                    <option value="Emmanuel">Emmanuel</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;