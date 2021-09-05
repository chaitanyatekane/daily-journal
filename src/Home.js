import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem epsum...', author: 'mario', id: 1 },
        { title: 'Welcome to party', body: 'lorem epsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem epsum...', author: 'mario', id: 3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
        </div>
     );
}
 
export default Home;