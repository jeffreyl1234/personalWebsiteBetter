export default function Hero() {
  return (
    <section style={sectionStyle}>
      <div className="container" style={innerStyle}>
        <div style={badgeStyle}>
          <span style={dotStyle} />
          <span style={badgeTextStyle}>Open to opportunities</span>
        </div>

        <h1 style={headingStyle}>
          Jeffrey Liu
        </h1>

        <p style={subtitleStyle}>
          Student & Developer
        </p>

        <p style={descStyle}>
          CS student at UCLA building projects at the intersection of systems,
          finance, and the web. Interested in high-performance computing,
          product, and anything that ships.
        </p>

        <div style={ctaStyle}>
          <a
            href="https://github.com/jeffreyliu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            GitHub
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </a>
          <a href="#projects" className="btn">
            View work
          </a>
        </div>
      </div>

      <div style={gridOverlayStyle} aria-hidden="true" />
    </section>
  );
}

const sectionStyle = {
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
};

const innerStyle = {
  position: "relative",
  zIndex: 1,
  paddingTop: 80,
  paddingBottom: 80,
};

const badgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 7,
  fontSize: 12,
  color: "#666",
  border: "1px solid #1f1f1f",
  borderRadius: 20,
  padding: "4px 12px",
  marginBottom: 32,
  fontFamily: "var(--font-geist-mono)",
};

const dotStyle = {
  width: 6,
  height: 6,
  borderRadius: "50%",
  background: "#3ddc84",
  boxShadow: "0 0 6px #3ddc8466",
};

const badgeTextStyle = {
  letterSpacing: "0.04em",
};

const headingStyle = {
  fontSize: "clamp(44px, 7vw, 76px)",
  fontWeight: 700,
  letterSpacing: "-0.03em",
  lineHeight: 1.05,
  color: "#f0f0f0",
  marginBottom: 16,
};

const subtitleStyle = {
  fontSize: "clamp(18px, 3vw, 24px)",
  fontWeight: 400,
  color: "#555",
  marginBottom: 24,
  letterSpacing: "-0.01em",
};

const descStyle = {
  fontSize: 16,
  color: "#777",
  maxWidth: 520,
  lineHeight: 1.75,
  marginBottom: 40,
};

const ctaStyle = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
};

const gridOverlayStyle = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
  backgroundSize: "60px 60px",
  maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 20%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 20%, transparent 100%)",
  pointerEvents: "none",
};
