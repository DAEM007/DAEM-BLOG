import { useState, useEffect } from "react";

const useFetch = ((url) => {
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error(`couldn't fetch response from the server!!!`);
                }
                return res.json();
            })
            .then(data => {
                setError(false);
                setBlogs(data);
                setIsPending(false);
            })
            .catch((err) => {
                setIsPending(false);
                setError(err.message);
            })        
        }, 2000);
    
    }, [url]); 

    return {data, isPending, error};

})

export default useFetch;