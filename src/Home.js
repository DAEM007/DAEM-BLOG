import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: 'Productivity and study tips', author: 'Emmanuel', body: 'Lorem impsum ...', id: 1
        },

        {
            title: 'Demystifying the web', author: 'Damilola', body: 'Lorem impsum ...', id: 2
        },

        {
            title: 'Acing Data structures and Algorithms', author: 'Chidera', body: 'Lorem impsum ...', id: 3
        }
    ]);

    return(
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>Blog written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;

