"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#blog", label: "Blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={navStyle(scrolled)}>
      <div className="container" style={innerStyle}>
        <a href="#" style={logoStyle}>Jeffrey Liu</a>
        <ul style={listStyle}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} style={linkStyle}>{label}</a>
            </li>
          ))}
          <li>
            <a
              href="mailto:jeffreyliu459@gmail.com"
              style={contactStyle}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const navStyle = (scrolled) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  height: 60,
  borderBottom: `1px solid ${scrolled ? "#1a1a1a" : "transparent"}`,
  background: scrolled ? "rgba(10,10,10,0.88)" : "transparent",
  backdropFilter: scrolled ? "blur(12px)" : "none",
  WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
  transition: "background 0.3s ease, border-color 0.3s ease",
});

const innerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
};

const logoStyle = {
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: "0.01em",
  color: "#ebebeb",
};

const listStyle = {
  display: "flex",
  listStyle: "none",
  gap: 28,
  alignItems: "center",
};

const linkStyle = {
  fontSize: 13.5,
  color: "#888",
  transition: "color 0.2s ease",
  cursor: "pointer",
};

const contactStyle = {
  fontSize: 12.5,
  fontWeight: 500,
  color: "#ebebeb",
  border: "1px solid #2a2a2a",
  borderRadius: 4,
  padding: "5px 12px",
  transition: "border-color 0.2s, background 0.2s",
};
