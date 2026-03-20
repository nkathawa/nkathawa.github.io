import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter } from 'lucide-react';
import { loadPosts } from './utils/loadPosts';
import './Blog.css';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await loadPosts();
      setArticles(posts);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  // Build category list dynamically from posts
  const categories = ['All', ...new Set(articles.map(a => a.category).filter(Boolean))];

  const normalize = (str) => (str || '').toLowerCase().trim();

  const filteredArticles = articles
    .filter(a => activeFilter === 'All' || normalize(a.category) === normalize(activeFilter))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="blog">
      <div className="container">

        {/* HEADER */}
        <div className="blog-header">
          <h1>Blog</h1>
          <p className="blog-subtitle">
            Musings on a variety of topics from faith to finances
          </p>
        </div>

        {/* FILTER BAR */}
        <div className="filter-bar">
          <div className="filter-label">
            <Filter size={16} strokeWidth={1.8} />
            <span>Filter</span>
          </div>

          <div className="filter-options">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ARTICLES */}
        <div className="blog-content">
          {loading ? (
            <p className="loading-text">Loading...</p>
          ) : (
            <>
              <p className="results-count">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'post' : 'posts'}
                {activeFilter !== 'All' && ` in ${activeFilter}`}
              </p>

              <div className="articles-grid">
                {filteredArticles.map((article) => (
                  <div key={article.id} className="article-card">
                    <div className="article-header">
                      <span className="article-category">{article.category}</span>
                      <span className="article-read-time">{article.readTime}</span>
                    </div>

                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>

                    <div className="article-footer">
                      <span className="article-date">{article.date}</span>
                      <button
                        className="read-more-btn"
                        onClick={() => handleReadMore(article.id)}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}

                {filteredArticles.length === 0 && (
                  <p className="no-posts">No posts yet.</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;