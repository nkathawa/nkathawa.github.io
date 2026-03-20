import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Article.css";

const context = require.context('../blog', false, /\.md$/);

const parseFrontmatter = (text) => {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, content: text };

  const frontmatter = match[1];
  const content = text.replace(match[0], '').trim();
  const data = {};

  frontmatter.split(/\r?\n/).forEach(line => {
    const [key, ...rest] = line.split(':');
    if (!key) return;
    data[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '').trim();
  });

  return { data, content };
};

const Article = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const key = context.keys().find(k =>
      k.replace('./', '').replace('.md', '') === id
    );

    if (!key) return;

    const file = context(key);
    const fileRef = file.default || file;

    if (typeof fileRef === "string" && fileRef.startsWith("/static")) {
      fetch(fileRef)
        .then(res => res.text())
        .then(text => {
          const { data, content } = parseFrontmatter(text);
          setPost({ ...data, content });
        });
    } else {
      const { data, content } = parseFrontmatter(fileRef);
      setPost({ ...data, content });
    }
  }, [id]);

  if (!post) {
    return (
      <div className="article-loading">
        <div className="article-spinner" />
      </div>
    );
  }

  return (
    <div className="article-wrapper">
      <Link to="/" className="article-back">← Back to Blog</Link>

      <article className="article">
        <header className="article-header">
          <div className="article-top-row">
            {post.category && (
              <span className="article-category">{post.category}</span>
            )}
            {post.readTime && (
              <span className="article-read-time">{post.readTime}</span>
            )}
          </div>

          <h1 className="article-title">{post.title}</h1>

          {post.date && (
            <time className="article-date">
                {(() => {
                const parts = post.date.includes('/')
                    ? post.date.split('/')
                    : null;

                const dateObj = parts
                    ? new Date(parts[2], parts[0] - 1, parts[1]) // MM/DD/YYYY
                    : new Date(post.date + "T00:00:00");          // YYYY-MM-DD fallback

                return dateObj.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                });
                })()}
            </time>
            )}
        </header>

        <div className="article-body">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>

      <div className="article-bottom">
        <Link to="/" className="article-back">← Browse more articles</Link>
      </div>
    </div>
  );
};

export default Article;