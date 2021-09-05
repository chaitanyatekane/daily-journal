import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem epsum...', author: 'mario', id: 1 },
        { title: 'Welcome to party', body: 'lorem epsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem epsum...', author: 'mario', id: 3 },
    ]);

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" />
        </div>
     );
}
 
export default Home;