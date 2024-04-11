import React from 'react';
import { useParams } from 'react-router-dom';
import articles from './articles';

function Article() {
  let { id } = useParams();
  const article = articles[id];

  return (
    <article>
      {article ? (
        <article.component />
      ) : (
        <p>Article not found.</p>
      )}
    </article>
  );
}

export default Article;