import { useState } from "react";
import BlogList from "./BlogList";

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
           <BlogList blogs={blogs} title="All Blogs"/>
        </div>
    );
}

export default Home;

