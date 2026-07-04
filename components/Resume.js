const education = [
  {
    degree: "B.S. Computer Science",
    org: "University of California, Los Angeles",
    period: "2023 – 2027",
    description: "Relevant coursework: Data Structures, Algorithms, Operating Systems, Computer Architecture, Machine Learning.",
  },
];

const skills = {
  Languages: ["C++", "Python", "JavaScript", "SQL"],
  Frameworks: ["Next.js", "React", "PyTorch", "Node.js"],
  Tools: ["Git", "Supabase", "PostgreSQL", "Linux"],
};

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <div style={topRowStyle}>
          <p className="section-label reveal">Resume</p>
        </div>

        <div style={twoColStyle}>
          <div>
            <p style={groupHeadStyle} className="reveal">Education</p>
            {education.map((e, i) => (
              <TimelineItem key={e.degree} item={{ role: e.degree, ...e }} delay={i + 1} />
            ))}
          </div>

          <div>
            <p style={groupHeadStyle} className="reveal">Skills</p>
            {Object.entries(skills).map(([category, items], i) => (
              <div key={category} className={`reveal reveal-delay-${i + 1}`} style={skillGroupStyle}>
                <p style={skillCategoryStyle}>{category}</p>
                <div style={tagsStyle}>
                  {items.map((s) => <span key={s} className="tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, delay }) {
  return (
    <div className={`reveal reveal-delay-${delay}`} style={itemStyle}>
      <div style={dotRowStyle}>
        <div style={dotStyle} />
        <div style={lineStyle} />
      </div>
      <div style={itemBodyStyle}>
        <div style={itemHeaderStyle}>
          <p style={roleStyle}>{item.role || item.degree}</p>
          <span style={periodStyle}>{item.period}</span>
        </div>
        <p style={orgStyle}>{item.org}</p>
        <p style={descStyle}>{item.description}</p>
      </div>
    </div>
  );
}

const topRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

const twoColStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "0 64px",
};

const groupHeadStyle = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#444",
  fontFamily: "var(--font-geist-mono)",
  marginBottom: 24,
};

const itemStyle = {
  display: "flex",
  gap: 16,
  marginBottom: 32,
};

const dotRowStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 5,
};

const dotStyle = {
  width: 7,
  height: 7,
  borderRadius: "50%",
  border: "1px solid #333",
  background: "transparent",
  flexShrink: 0,
};

const lineStyle = {
  width: 1,
  flexGrow: 1,
  background: "#1a1a1a",
  marginTop: 6,
};

const itemBodyStyle = { flex: 1 };

const itemHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  gap: 12,
  marginBottom: 4,
};

const roleStyle = {
  fontSize: 14.5,
  fontWeight: 600,
  color: "#ddd",
};

const periodStyle = {
  fontSize: 11,
  color: "#444",
  fontFamily: "var(--font-geist-mono)",
  whiteSpace: "nowrap",
};

const orgStyle = {
  fontSize: 13,
  color: "#555",
  marginBottom: 8,
};

const descStyle = {
  fontSize: 13.5,
  color: "#666",
  lineHeight: 1.7,
};

const skillGroupStyle = {
  marginBottom: 28,
};

const skillCategoryStyle = {
  fontSize: 12,
  color: "#555",
  marginBottom: 10,
  fontFamily: "var(--font-geist-mono)",
};

const tagsStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
};
