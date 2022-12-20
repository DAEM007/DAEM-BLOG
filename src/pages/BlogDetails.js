import { useEffect, useState } from "react";
import { useHistory, useParams} from "react-router-dom";

// All firebase imports
import { db } from "../firebase/Firebase";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";



const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const [ blog, setBlog ] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const colRef = collection(db, 'blogs')
    const docRef = doc(colRef, id)

    useEffect(() => {
        
        onSnapshot(docRef, (doc) => {
            let data = doc.data();
            console.log(data);
            setBlog(data);
            setIsPending(false);
        })


    }, [docRef])

    const handleDelete = () =>  {
        deleteDoc(docRef)
            .then(() => {
                history.push('/');
                setIsPending(false);
            })
        console.log('Docuent deleted');
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {blog && (
                <div>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            )}
        </div>
    );
}


 
export default BlogDetails;