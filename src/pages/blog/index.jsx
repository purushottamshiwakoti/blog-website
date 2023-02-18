import React from "react";
import BlogItem from "./BlogItem";
import "./style.css";

const Blog = ({ blogs }) => {
  return (
    <div className="blog-wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Blog;
