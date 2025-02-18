import React from "react";
import { Card } from "antd";
import "./BlogPage.css";

const blogPosts = [
  {
    title: "How to Choose the Best Trucking Service",
    description: "Learn key factors in selecting a reliable logistics partner.",
    link: "#",
  },
  {
    title: "The Future of Logistics in 2025",
    description: "Discover upcoming trends in the transportation industry.",
    link: "#",
  },
  {
    title: "5 Tips for Safe Cargo Transportation",
    description: "Ensure your goods are transported securely with these tips.",
    link: "#",
  },
];

const BlogPage = () => {
  return (
    <div className="blog-container">
      <h2>Latest Blogs</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <Card key={index} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <a href={post.link} className="read-more">Read More</a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
