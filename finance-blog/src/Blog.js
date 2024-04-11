import './css/Blog.css';
import React from 'react';
import { Link } from 'react-router-dom';
import articles from './articles';

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      {Object.entries(articles).map(([id, article]) => (
        <div key={id} className="article-preview">
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
          <Link to={`/article/${id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;