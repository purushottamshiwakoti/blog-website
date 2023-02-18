import React from "react";
import Chip from "../../../components/common/Chip";
import { Link } from "react-router-dom";
import "./styles.css";

const BlogItem = ({
  blog: {
    id,
    title,
    description,
    authorName,
    authorAvatar,
    createdAt,
    category,
    cover,
  },
}) => {
  return (
    <div className="blog-item-wrap">
      {" "}
      {/* <h1>Hi</h1> */}
      <img src={cover} alt="cover" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blog-desc">{description}</p>
      <footer>
        <div className="blog-item-author">
          <img src={authorAvatar} alt="authorAvatar" />
          <div className="name">
            {authorName}
            <p>{createdAt}</p>
          </div>
          <Link className="arrow" to={`/blogs/${id}`}>
            {" "}
            →
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BlogItem;
