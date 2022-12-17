import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const { documents: blogs, isPending } = useFetch('blogs');

    return(
        <div className="home">
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;



