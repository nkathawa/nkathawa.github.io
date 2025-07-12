import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Finances.css';

const Finances = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const navigate = useNavigate();

  const articles = [
    {
      id: 'budgeting101',
      title: 'Budgeting 101: The Foundation of Financial Success',
      date: 'April 12, 2024',
      excerpt: 'I firmly believe that a budget is the foundation of good finances. Learn how to create a budget that works for you and your lifestyle.',
      readTime: '5 min read',
      category: 'Budgeting'
    },
    {
      id: 'retirement',
      title: 'Planning for Retirement: Start Early, Retire Comfortably',
      date: 'March 28, 2024',
      excerpt: 'The earlier you start planning for retirement, the better off you\'ll be. Discover strategies to build wealth for your golden years.',
      readTime: '7 min read',
      category: 'Retirement'
    },
    {
      id: 'investing',
      title: 'Investing Basics: Building Wealth Through Smart Investments',
      date: 'March 15, 2024',
      excerpt: 'Understanding the basics of investing can seem overwhelming. Let me break down the fundamentals to help you get started.',
      readTime: '6 min read',
      category: 'Investing'
    }
  ];

  const financialTips = [
    {
      icon: '💰',
      title: 'Emergency Fund',
      description: 'Build an emergency fund covering 3-6 months of expenses'
    },
    {
      icon: '📊',
      title: 'Track Spending',
      description: 'Monitor your expenses to identify areas for improvement'
    },
    {
      icon: '🎯',
      title: 'Set Goals',
      description: 'Define clear financial goals and create a plan to achieve them'
    },
    {
      icon: '💳',
      title: 'Debt Management',
      description: 'Prioritize high-interest debt and create a payoff strategy'
    }
  ];

  const handleReadMore = (articleId) => {
    navigate(`/article/${articleId}`);
  };

  return (
    <div className="finances">
      <div className="container">
        {/* Navigation Tabs */}
        <div className="finance-nav">
          <button 
            className={`nav-btn ${activeSection === 'intro' ? 'active' : ''}`}
            onClick={() => setActiveSection('intro')}
          >
            📖 Introduction
          </button>
          <button 
            className={`nav-btn ${activeSection === 'blog' ? 'active' : ''}`}
            onClick={() => setActiveSection('blog')}
          >
            📝 Blog Posts
          </button>
          <button 
            className={`nav-btn ${activeSection === 'tips' ? 'active' : ''}`}
            onClick={() => setActiveSection('tips')}
          >
            💡 Financial Tips
          </button>
        </div>

        {/* Content Sections */}
        <div className="finance-content">
          {activeSection === 'intro' && (
            <section className="intro-section">
              <div className="intro-header">
                <h1>Personal Finance Blog</h1>
                <p className="intro-subtitle">Empowering you to achieve financial freedom through smart strategies and practical advice</p>
              </div>
              
              <div className="intro-content">
                <div className="intro-text">
                  <h2>Welcome to My Financial Journey</h2>
                  <p>
                    Thank you for visiting my personal finance blog. My name is Navin, and I'm passionate about helping others reach their financial goals. 
                    I firmly believe that financial freedom can be achieved through the implementation of simple principles. It requires work, dedication, and sacrifice, 
                    but is absolutely attainable.
                  </p>
                  <p>
                    In this blog, I walk through various strategies, from budgeting to investing and everything in between. Half the battle is mental – overcoming mental hurdles,
                    gaining new knowledge that can empower you to take control of your finances – these are the building blocks of sound personal finance.
                  </p>
                  <p>
                    I have no formal financial education – I am completely self-taught. I believe in everything that I write here, not just because it makes sense to me, 
                    but because I live it. I implement these strategies in my own life, and it has brought about a degree of financial peace I never thought was possible.
                  </p>
                  <p>
                    Especially in these current times of high inflation and high cost of living, along with wages not keeping up with either of those, 
                    there is no more important time to make every dollar count. We will discuss how to make your life inflation-proof, how to live within 
                    (and below!) your means, and strategies for saving money.
                  </p>
                </div>
                
                <div className="intro-stats">
                  <div className="stat-card">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Self-Taught</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">6+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Articles Written</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === 'blog' && (
            <section className="blog-section">
              <h2>Latest Articles</h2>
              <div className="articles-grid">
                {articles.map((article) => (
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
              </div>
              <div className="blog-footer">
                <p>More posts coming soon! Subscribe to stay updated.</p>
                <button className="btn btn-primary">Subscribe to Newsletter</button>
              </div>
            </section>
          )}

          {activeSection === 'tips' && (
            <section className="tips-section">
              <h2>Essential Financial Tips</h2>
              <div className="tips-grid">
                {financialTips.map((tip, index) => (
                  <div key={index} className="tip-card">
                    <div className="tip-icon">{tip.icon}</div>
                    <h3 className="tip-title">{tip.title}</h3>
                    <p className="tip-description">{tip.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="resources-section">
                <h3>Additional Resources</h3>
                <div className="resources-grid">
                  <div className="resource-card">
                    <h4>📚 Recommended Books</h4>
                    <ul>
                      <li>"The Total Money Makeover" by Dave Ramsey</li>
                      <li>"Rich Dad Poor Dad" by Robert Kiyosaki</li>
                      <li>"The Millionaire Next Door" by Thomas Stanley</li>
                    </ul>
                  </div>
                  <div className="resource-card">
                    <h4>🛠️ Useful Tools</h4>
                    <ul>
                      <li>Mint - Budget Tracking</li>
                      <li>YNAB - You Need A Budget</li>
                      <li>Personal Capital - Investment Tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Finances; 