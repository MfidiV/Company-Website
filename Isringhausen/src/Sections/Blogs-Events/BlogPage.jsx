import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // assuming you're using React Router for navigation
import '../../Styles/Blogpage.css';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  useEffect(() => {
    fetch('/Blogs.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching the blog data:', error));
  }, []);

  const handleToggle = (id) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  return (
    <div className="blog-page">

      <h1>Blogs</h1>

      {/* Breadcrumb navigation */}
      <nav className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home </Link> &gt; <span> Blogs</span>
      </nav>

      {blogs.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <ul className="blog-list">
          {blogs.map(blog => (
            <li key={blog.id} className="blog-post">
              <div className="blog-image-container">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-content-title">
                  <h2>{blog.title}</h2>
                  <p className="blog-date"><strong>Date:</strong> {blog.date}</p>
                </div>
              </div>
              <div className="blog-content">
                <p>
                  {expandedBlogId === blog.id ? blog.content : `${blog.content.substring(0, 100)}...`}
                  <a 
                    href="#" 
                    className="see-more" 
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      handleToggle(blog.id);
                    }}
                  >
                    {expandedBlogId === blog.id ? 'See Less' : 'See More'}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogPage;
