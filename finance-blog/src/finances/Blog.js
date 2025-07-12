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
          <i>{article.date}</i>
          <p>{article.excerpt}</p>
          <Link to={`/finances/article/${id}`}>Read More</Link>
        </div>
      ))}
      <p>More posts coming soon!</p>
    </div>
  );
}

export default Blog;