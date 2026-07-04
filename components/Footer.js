const socials = [
  { label: "GitHub", href: "https://github.com/jeffreyl1234" },
  { label: "LinkedIn", href: "https://linkedin.com/in/jeffreylliu" },
  { label: "Email", href: "mailto:jeffreyliu459@gmail.com" },
];

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container" style={innerStyle}>
        <p style={nameStyle}>Jeffrey Liu</p>
        <div style={socialsStyle}>
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={linkStyle}
            >
              {label}
            </a>
          ))}
        </div>
        <p style={copyStyle}>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

const footerStyle = {
  borderTop: "1px solid #161616",
  padding: "40px 0",
};

const innerStyle = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
};

const nameStyle = {
  fontSize: 13,
  fontWeight: 600,
  color: "#333",
};

const socialsStyle = {
  display: "flex",
  gap: 24,
};

const linkStyle = {
  fontSize: 13,
  color: "#444",
  transition: "color 0.2s",
  textDecoration: "none",
};

const copyStyle = {
  fontSize: 12,
  color: "#2e2e2e",
  fontFamily: "var(--font-geist-mono)",
};
