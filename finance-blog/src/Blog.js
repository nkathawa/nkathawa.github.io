import './css/Blog.css';
import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  { id: 1, title: 'First Article', excerpt: 'This is the first articles excerpt...' },
  // ... add more articles as needed
];

function Blog() {
  return (
    <div>
      <h1>Blog Articles</h1>
      {articles.map((article) => (
        <div key={article.id} className='article-preview'>
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
          <Link to={`/article/${article.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;