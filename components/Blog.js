const posts = [
  {
    title: "How I built a 15× faster Monte Carlo simulator",
    date: "Jan 2026",
    readTime: "8 min read",
    excerpt:
      "Walking through the journey from naive Python loops to multi-threaded C++ with pybind11 bindings — and what I learned about performance profiling along the way.",
    slug: "#",
  },
  {
    title: "Building a full-stack app with Next.js and Supabase",
    date: "Dec 2025",
    readTime: "6 min read",
    excerpt:
      "A practical guide to auth, row-level security, and storage in Supabase — with real patterns I used in production for the BTWN project.",
    slug: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <p className="section-label reveal">Writing</p>

        <div style={listStyle}>
          {posts.map((post, i) => (
            <a
              key={post.title}
              href={post.slug}
              className={`reveal reveal-delay-${i + 1}`}
              style={rowStyle}
            >
              <div style={rowLeftStyle}>
                <h3 style={titleStyle}>{post.title}</h3>
                <p style={excerptStyle}>{post.excerpt}</p>
              </div>
              <div style={rowRightStyle}>
                <span style={dateStyle}>{post.date}</span>
                <span style={metaStyle}>{post.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const listStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 0,
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 40,
  padding: "28px 0",
  borderBottom: "1px solid #161616",
  textDecoration: "none",
  cursor: "pointer",
  transition: "opacity 0.2s",
};

const rowLeftStyle = {
  flex: 1,
};

const titleStyle = {
  fontSize: 15.5,
  fontWeight: 500,
  color: "#ddd",
  marginBottom: 8,
  letterSpacing: "-0.01em",
  transition: "color 0.2s",
};

const excerptStyle = {
  fontSize: 13.5,
  color: "#555",
  lineHeight: 1.7,
  maxWidth: 560,
};

const rowRightStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 4,
  flexShrink: 0,
  paddingTop: 2,
};

const dateStyle = {
  fontSize: 12,
  color: "#444",
  fontFamily: "var(--font-geist-mono)",
  whiteSpace: "nowrap",
};

const metaStyle = {
  fontSize: 11.5,
  color: "#333",
  fontFamily: "var(--font-geist-mono)",
};
