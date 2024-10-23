import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookMark, handleReadTime}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 w-full p-2">
            {
                blogs.map(blog => 
                    <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blog>
                ) 
            }
        </div>
    );
};
Blogs.propTypes = {
    handleBookMark: PropTypes.func,
    handleReadTime: PropTypes.number
  }
export default Blogs;