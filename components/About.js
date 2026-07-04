const interests = ["Systems", "Finance", "Web Dev", "HPC", "Open Source", "Product"];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label reveal">About</p>

        <div style={gridStyle}>
          <div>
            <p className="reveal" style={paraStyle}>
              I&apos;m a computer science student at UCLA with a focus on
              systems and applied computing. I build things that are fast,
              purposeful, and well-designed.
            </p>
            <p className="reveal reveal-delay-1" style={{ ...paraStyle, marginTop: 20 }}>
              Outside of coursework I spend time on side projects — from
              high-performance Monte Carlo simulations to full-stack web apps.
              I care about writing clean code and shipping things that actually
              work.
            </p>
            <p className="reveal reveal-delay-2" style={{ ...paraStyle, marginTop: 20 }}>
              Currently looking for internships and research opportunities for
              Summer 2026.
            </p>
          </div>

          <div>
            <p style={subheadStyle} className="reveal">Interests</p>
            <div style={tagsStyle} className="reveal reveal-delay-1">
              {interests.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <p style={{ ...subheadStyle, marginTop: 32 }} className="reveal reveal-delay-2">Education</p>
            <div className="reveal reveal-delay-3">
              <p style={eduPrimaryStyle}>University of California, Los Angeles</p>
              <p style={eduSecStyle}>B.S. Computer Science · 2023 – 2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "48px 64px",
};

const paraStyle = {
  fontSize: 15.5,
  color: "#888",
  lineHeight: 1.8,
};

const subheadStyle = {
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#444",
  fontFamily: "var(--font-geist-mono)",
  marginBottom: 14,
};

const tagsStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
};

const eduPrimaryStyle = {
  fontSize: 14.5,
  fontWeight: 500,
  color: "#ccc",
  marginBottom: 4,
};

const eduSecStyle = {
  fontSize: 13,
  color: "#555",
};
