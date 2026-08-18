"use client";

import { useScrollY } from "@/lib/hooks";

const LINKS: Array<[string, string]> = [
  ["About", "/#philosophy"],
  ["Shoots", "/#services"],
  ["Gallery", "/#gallery"],
  ["Models", "/models"],
  ["Process", "/#process"],
  ["Contact", "/#contact"],
];

export function Nav() {
  const y = useScrollY();
  const scrolled = y > 60;
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "14px 32px" : "24px 32px",
        background: scrolled ? "rgba(246,240,230,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px) saturate(140%)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--c-line)"
          : "1px solid transparent",
        transition: "all 400ms ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a
        href="/#top"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/casa-cross-logo-transparent.png"
          alt="Casa Cross Events"
          style={{
            height: scrolled ? 38 : 54,
            width: "auto",
            opacity: scrolled ? 0.88 : 0.96,
            transition: "height 400ms ease, opacity 400ms ease",
            display: "block",
          }}
        />
      </a>
      <div
        className="nav-links"
        style={{ display: "flex", alignItems: "center", gap: 36 }}
      >
        {LINKS.map(([label, href]) => (
          <a
            key={href}
            href={href}
            style={{
              fontFamily: "var(--ff-body)",
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--c-ink)",
              textDecoration: "none",
              opacity: 0.78,
              transition: "opacity 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.78")}
          >
            {label}
          </a>
        ))}
        <a
          href="https://portal.casacross.org/login"
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--c-muted)",
            textDecoration: "none",
            paddingLeft: 24,
            borderLeft: "1px solid var(--c-line)",
          }}
        >
          Portal
        </a>
      </div>
    </nav>
  );
}
