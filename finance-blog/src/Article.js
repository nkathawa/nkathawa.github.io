import './css/Article.css';
import React from 'react';
import { useParams } from 'react-router-dom';

function Article() {
  let { id } = useParams();
  
  // In a real app, you might fetch article data from an API based on the ID.
  // Here's a static article for the example.
  const article = {
    id: id,
    title: `Article ${id}`,
    content: `This is the content of article ${id}.`
  };
  
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}

export default Article;