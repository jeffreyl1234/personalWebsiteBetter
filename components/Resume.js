const experience = [
  {
    role: "Software Engineer Intern",
    org: "Databricks",
    period: "Jun 2026 – Present",
    description: "Building backend telemetry services for Databricks Marketplace Apps and distributed systems infra for scalable data-sharing and analytics workflows.",
  },
  {
    role: "Machine Learning Engineer",
    org: "Gale (YC W25)",
    period: "Sep 2025 – Dec 2025",
    description: "Designed Python/SQL ETL pipelines normalizing scraped labor data (+40% coverage) and AWS/Snowflake infrastructure that cut query latency 60%.",
  },
  {
    role: "Software Development Engineer Intern",
    org: "Amazon Web Services (AWS)",
    period: "Jun 2025 – Sep 2025",
    description: "Launched a real-time dashboard for 70+ GlueConnector CI/CD pipelines (95% faster failure detection) and backend microservices with Lambda, CDK, and DynamoDB.",
  },
  {
    role: "Machine Learning Engineer",
    org: "Flawless AI",
    period: "May 2024 – Jan 2025",
    description: "Fine-tuned an EmoAffectNet CNN in PyTorch for emotion detection (+20% accuracy) and built video scraping/metadata-extraction pipelines with Python and OpenCV.",
  },
  {
    role: "Software Engineer Intern",
    org: "Qualcomm",
    period: "Jun 2024 – Sep 2024",
    description: "Architected an internal tool for analyzing EDA-tool data to evaluate SoC design workflows, with YAML-configuration parsing adopted team-wide.",
  },
];

const education = [
  {
    degree: "B.S. Computer Science, B.S. Applied Mathematics",
    org: "University of California, Los Angeles",
    period: "Expected Dec 2026",
    description: "Coursework: Probability & Statistics, Combinatorics, Real Analysis, Optimization, Linear Algebra, Data Structures & Algorithms, Operating Systems.",
  },
];

const honors = [
  "2× AIME Qualifier",
  "Dean's Honors List",
  "Modeling the Future Challenge — 2nd Nationally ($15K award)",
  "Paper published in SOA ARCH 2023.2",
  "QuHacks Finalist",
];

const skills = {
  Languages: ["Python", "C++", "C", "Java", "Go", "SQL", "TypeScript", "Bash"],
  "Systems & Infra": ["Spark", "Kafka", "gRPC", "Protobuf", "OpenMP", "Kubernetes", "Docker", "CI/CD", "Linux"],
  "Cloud & Data": ["AWS Lambda", "DynamoDB", "EventBridge", "PostgreSQL", "Snowflake", "Redis", "MongoDB", "Git"],
  "ML & Tools": ["PyTorch", "CUDA", "Pandas", "NumPy", "React/Next.js", "Node.js", "Claude Code", "Cursor"],
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
            <p style={groupHeadStyle} className="reveal">Experience</p>
            {experience.map((e, i) => (
              <TimelineItem key={e.org} item={e} delay={i + 1} />
            ))}

            <p style={{ ...groupHeadStyle, marginTop: 48 }} className="reveal">Education</p>
            {education.map((e, i) => (
              <TimelineItem key={e.degree} item={{ role: e.degree, ...e }} delay={i + 1} />
            ))}

            <p style={{ ...groupHeadStyle, marginTop: 48 }} className="reveal">Honors</p>
            <ul style={honorsListStyle} className="reveal">
              {honors.map((h) => (
                <li key={h} style={honorItemStyle}>{h}</li>
              ))}
            </ul>
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

const honorsListStyle = {
  listStyle: "disc",
  paddingLeft: 18,
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const honorItemStyle = {
  fontSize: 13.5,
  color: "#888",
  lineHeight: 1.6,
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
