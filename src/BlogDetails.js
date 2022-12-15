import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { isPending, error, data: blog } = useFetch(` http://localhost:9000/blogs/${id}`);
    const history = useHistory();

    const handleDelete = () =>  {
        fetch(`http://localhost:9000/blogs/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
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