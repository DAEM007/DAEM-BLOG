import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { isPending, error, data: blogs } = useFetch(` http://localhost:9000/blogs/${id}`);

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blogs && (
                <div>
                    <h2>{ blogs.title }</h2>
                    <p>Written by { blogs.author }</p>
                    <div>{ blogs.body }</div>
                </div>
            )}
        </div>
    );
}
 
export default BlogDetails;