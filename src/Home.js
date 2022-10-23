import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Emmanuel');
    const [age, setAge] = useState('22');

    const handleClick = () => {
        setName('Damilola');
        setAge('23');
    }

    return(
        <div className="home">
            <h2>Homepage</h2>
            <p>My name is {name} and I am {age} years old!</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;

