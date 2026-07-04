const projects = [
  {
    title: "BTWN",
    description:
      "UCLA small-business directory. Full-stack Next.js + Supabase app with auth, owner-linked listings, image uploads, and review system.",
    tags: ["Next.js", "Supabase", "PostgreSQL"],
    href: "https://github.com/jeffreyl1234/BTWN",
    year: "2025",
  },
  {
    title: "Limit Order Book & Matching Engine",
    description:
      "Single-threaded limit order book with a price-time-priority matching engine, a NASDAQ TotalView-ITCH 5.0 replay parser, and a nanosecond-scale benchmark harness. C++20, CI-tested, zero external dependencies.",
    tags: ["C++20", "CMake", "Systems"],
    href: "https://github.com/jeffreyl1234/orderBook",
    year: "2026",
  },
  {
    title: "Speculative Decoding Inference Engine",
    description:
      "From-scratch PyTorch implementation of speculative decoding (Leviathan, Kalman & Matias, 2023) — GPT-2-small drafting for GPT-2-XL, with custom rejection sampling and KV-cache rollback.",
    tags: ["Python", "PyTorch"],
    href: "https://github.com/jeffreyl1234/speculativeDecoding",
    year: "2026",
  },
  {
    title: "Delta Hedging Simulator & Optimization",
    description:
      "High-performance Monte Carlo simulation for GBM/Black-Scholes delta hedging. C++/CUDA backend hits 50K+ parallel paths with a 15× speedup over NumPy and 10⁻⁶ error tolerance.",
    tags: ["C++", "CUDA", "Python", "OpenMP"],
    href: "https://github.com/jeffreyl1234/Delta-Hedging-SImulator",
    year: "2025",
  },
  {
    title: "TablePal",
    description:
      "LLM-powered restaurant chatbot serving 1,000+ monthly users — OpenAI RAG with vector search, Redis rate limiting, and 15+ API endpoints. (Private repository)",
    tags: ["React", "Next.js", "Node.js", "OpenAI API"],
    href: "#",
    year: "",
  },
  {
    title: "Music Discovery Platform",
    description:
      "Spotify login, mood-based playlist generation via OpenAI, artist discovery, and save-to-Spotify history. React/TypeScript frontend, Node/Express backend, MongoDB.",
    tags: ["React", "TypeScript", "Node.js", "OpenAI API"],
    href: "https://github.com/jeffreyl1234/musicApp",
    year: "2026",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label reveal">Projects</p>

        <div style={gridStyle}>
          {projects.map((p, i) => {
            const hasLink = p.href && p.href !== "#";
            const Tag = hasLink ? "a" : "div";
            return (
              <Tag
                key={p.title}
                {...(hasLink ? { href: p.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`card reveal reveal-delay-${(i % 4) + 1}`}
                style={cardLinkStyle}
              >
                <div style={cardHeaderStyle}>
                  <span style={yearStyle}>{p.year}</span>
                  {hasLink && (
                    <svg style={arrowStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>

                <h3 style={titleStyle}>{p.title}</h3>
                <p style={descStyle}>{p.description}</p>

                <div style={tagsStyle}>
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 16,
};

const cardLinkStyle = {
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
  cursor: "pointer",
};

const cardHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
};

const yearStyle = {
  fontSize: 11,
  color: "#444",
  fontFamily: "var(--font-geist-mono)",
  letterSpacing: "0.08em",
};

const arrowStyle = {
  width: 15,
  height: 15,
  color: "#333",
};

const titleStyle = {
  fontSize: 16,
  fontWeight: 600,
  color: "#e8e8e8",
  marginBottom: 10,
  letterSpacing: "-0.01em",
};

const descStyle = {
  fontSize: 13.5,
  color: "#666",
  lineHeight: 1.7,
  flexGrow: 1,
  marginBottom: 20,
};

const tagsStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 5,
  marginTop: "auto",
};
