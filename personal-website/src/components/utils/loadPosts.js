// 🔥 Auto-import all markdown files
const context = require.context('../../blog', false, /\.md$/);

// ✅ Robust frontmatter parser (handles Windows + Unix line endings)
const parseFrontmatter = (text) => {
  if (!text) return { data: {}, content: "" };

  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!match) {
    return { data: {}, content: text };
  }

  const frontmatter = match[1];
  const content = text.replace(match[0], '').trim();

  const data = {};

  frontmatter.split(/\r?\n/).forEach(line => {
    const [key, ...rest] = line.split(':');

    if (!key) return;

    data[key.trim()] = rest
      .join(':')
      .trim()
      .replace(/^"|"$/g, '')
      .trim();
  });

  return { data, content };
};

// 🔥 Main loader
export const loadPosts = async () => {
  const posts = context.keys().map((key) => {
    const file = context(key);
    const fileRef = file.default || file;

    // ✅ Case 1: CRA returns URL → fetch it
    if (typeof fileRef === "string" && fileRef.startsWith("/static")) {
      return fetch(fileRef)
        .then(res => res.text())
        .then(text => {
          const { data, content } = parseFrontmatter(text);

          return {
            ...data,
            content,
            id: key.replace('./', '').replace('.md', ''),
          };
        });
    }

    // ✅ Case 2: raw text already available
    const { data, content } = parseFrontmatter(fileRef);

    return Promise.resolve({
      ...data,
      content,
      id: key.replace('./', '').replace('.md', ''),
    });
  });

  const resolved = await Promise.all(posts);

  // 🔥 Sort newest first
  return resolved.sort((a, b) => new Date(b.date) - new Date(a.date));
};