import React from 'react';
import { Link } from 'react-router-dom';

function ArticlePreview({ article }) {
  return (
    <article>
      <h2><Link to={`/article/${article.id}`}>{article.title}</Link></h2>
      <p>{article.excerpt}</p>
    </article>
  );
}

export default ArticlePreview;