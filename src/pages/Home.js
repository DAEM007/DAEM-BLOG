import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";


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



