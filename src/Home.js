import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem epsum...', author: 'mario', id: 1 },
        { title: 'Welcome to party', body: 'lorem epsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem epsum...', author: 'mario', id: 3 },
    ]);

    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home;