import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(89);

    const handleClick = () => {
        setName("Hello");
        setAge(100);
    };

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } { age }</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;