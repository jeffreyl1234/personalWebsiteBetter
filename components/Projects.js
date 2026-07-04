const projects = [
  {
    title: "BTWN",
    description:
      "UCLA small-business directory. Full-stack Next.js + Supabase app with auth, owner-linked listings, image uploads, and review system.",
    tags: ["Next.js", "Supabase", "PostgreSQL"],
    href: "https://github.com/jeffreyliu",
    year: "2025",
  },
  {
    title: "GBM Delta Hedging Simulator",
    description:
      "High-performance Monte Carlo simulation for European option delta hedging. Multi-backend: C++ OpenMP, PyTorch GPU, NumPy — 15× speedup over naive Python.",
    tags: ["C++", "Python", "PyTorch", "OpenMP"],
    href: "https://github.com/jeffreyliu",
    year: "2025",
  },
  {
    title: "Project Three",
    description:
      "Short description of what this project does and why it is interesting. Replace with your real project.",
    tags: ["React", "Node.js"],
    href: "#",
    year: "2024",
  },
  {
    title: "Project Four",
    description:
      "Short description of what this project does and why it is interesting. Replace with your real project.",
    tags: ["Python", "ML"],
    href: "#",
    year: "2024",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="section-label reveal">Projects</p>

        <div style={gridStyle}>
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card reveal reveal-delay-${(i % 4) + 1}`}
              style={cardLinkStyle}
            >
              <div style={cardHeaderStyle}>
                <span style={yearStyle}>{p.year}</span>
                <svg style={arrowStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M7 7h10v10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <h3 style={titleStyle}>{p.title}</h3>
              <p style={descStyle}>{p.description}</p>

              <div style={tagsStyle}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
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
