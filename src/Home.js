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
            title: 'Physics of the seventh Dimension', author: 'Damilola', body: 'Lorem impsum ...', id: 3
        },

        {
            title: 'Acing Data structures and Algorithms', author: 'Ayobami', body: 'Lorem impsum ...', id: 4
        }
    ]);

    return(
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs"/>
           <BlogList blogs={blogs.filter((blog) => blog.author === 'Damilola')} title="Damilola's Blog"/>
        </div>
    );
}

export default Home;

