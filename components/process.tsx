import { AnimatedHeading } from "./animated-heading";
import { Reveal } from "./reveal";

const STEPS = [
  {
    n: "I",
    t: "Announce",
    d: "We release a styled shoot concept with the date, location, visual direction, and available creative spots.",
  },
  {
    n: "II",
    t: "Reserve",
    d: "Photographers can reserve paid spots, while vendors and models connect with us about TFP collaboration.",
  },
  {
    n: "III",
    t: "Coordinate",
    d: "Casa Cross handles the venue, vendor team, models, styling, timeline, and shoot flow before the day begins.",
  },
  {
    n: "IV",
    t: "Share",
    d: "Final images become portfolio and marketing content for the photographers, vendors, models, and creatives involved.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      style={{
        padding: "clamp(80px, 14vh, 180px) 32px",
        background: "var(--c-surface)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 96 }}>
          <Reveal>
            <div
              style={{
                fontFamily: "var(--ff-body)",
                fontSize: 11,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--c-accent)",
                marginBottom: 24,
              }}
            >
              ── The Process
            </div>
          </Reveal>
          <AnimatedHeading
            as="h2"
            text="From concept to gallery"
            italicWords={[1]}
            scriptWords={[3]}
            style={{
              fontFamily: "var(--ff-display)",
              fontWeight: "var(--fw-display)" as unknown as number,
              fontSize: "clamp(2.4rem, 4.5vw, 4.4rem)",
              letterSpacing: "-0.015em",
              color: "var(--c-ink)",
              margin: 0,
            }}
          />
        </div>
        <div
          className="process-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 32,
              left: "10%",
              right: "10%",
              height: 1,
              background: "var(--c-line)",
            }}
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 150}>
              <div style={{ position: "relative", paddingTop: 0 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "var(--c-bg)",
                    border: "1px solid var(--c-line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 32px",
                    position: "relative",
                    zIndex: 1,
                    fontFamily: "var(--ff-display)",
                    fontStyle: "italic",
                    fontSize: 22,
                    color: "var(--c-accent)",
                  }}
                >
                  {s.n}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--ff-display)",
                    fontSize: 28,
                    fontWeight: "var(--fw-display)" as unknown as number,
                    color: "var(--c-ink)",
                    margin: "0 0 12px",
                    textAlign: "center",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.t}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--ff-body)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "var(--c-muted)",
                    margin: 0,
                    textAlign: "center",
                    textWrap: "pretty",
                  }}
                >
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
