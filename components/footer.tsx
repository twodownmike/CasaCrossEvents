export function Footer() {
  return (
    <footer
      style={{
        background: "var(--c-bg)",
        padding: "60px 32px 40px",
        borderTop: "1px solid var(--c-line)",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/casa-cross-logo.png"
          alt="Casa Cross Events"
          style={{ height: 56 }}
        />
        <div
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--c-muted)",
          }}
        >
          © Casa Cross Events {new Date().getFullYear()} · West Jordan, UT
        </div>
        <a
          href="https://portal.casacross.org/login"
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: 12,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--c-muted)",
            textDecoration: "none",
            borderBottom: "1px solid var(--c-line)",
            paddingBottom: 4,
          }}
        >
          Shoot Portal →
        </a>
      </div>
    </footer>
  );
}
