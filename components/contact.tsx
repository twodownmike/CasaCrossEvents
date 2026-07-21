import { IMG } from "@/lib/images";
import { AnimatedHeading } from "./animated-heading";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "clamp(120px, 18vh, 220px) 32px",
        background: "var(--c-ink)",
        color: "var(--c-bg)",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: 0, opacity: 0.18 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMG.cta}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          position: "relative",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <Reveal>
          <div
            style={{
              fontFamily: "var(--ff-body)",
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              opacity: 0.6,
              marginBottom: 28,
            }}
          >
            ── Join a Future Shoot
          </div>
        </Reveal>
        <AnimatedHeading
          as="h2"
          text="Ready to build your portfolio?"
          italicWords={[3]}
          scriptWords={[4]}
          style={{
            fontFamily: "var(--ff-display)",
            fontWeight: "var(--fw-display)" as unknown as number,
            fontSize: "clamp(3rem, 6.5vw, 6rem)",
            letterSpacing: "-0.02em",
            margin: 0,
            lineHeight: 1.05,
          }}
        />
        <Reveal delay={500}>
          <p
            style={{
              marginTop: 36,
              fontFamily: "var(--ff-body)",
              fontSize: 18,
              lineHeight: 1.65,
              opacity: 0.78,
              maxWidth: 540,
              marginInline: "auto",
            }}
          >
            Photographers can ask about upcoming paid spots. Vendors and models
            can reach out about future TFP collaborations and portfolio-building
            opportunities as Casa Cross grows each styled shoot concept.
          </p>
        </Reveal>
        <Reveal
          delay={700}
          style={{
            marginTop: 56,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            alignItems: "center",
          }}
        >
          <a
            href="mailto:events@casacross.org"
            style={{
              fontFamily: "var(--ff-display)",
              fontStyle: "italic",
              fontSize: "clamp(1.6rem, 2.6vw, 2.4rem)",
              color: "var(--c-bg)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(251,247,240,0.4)",
              paddingBottom: 6,
            }}
          >
            events@casacross.org
          </a>
          <div
            style={{
              display: "flex",
              gap: 32,
              fontFamily: "var(--ff-body)",
              fontSize: 13,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.7,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span>West Jordan, UT</span>
            <span>·</span>
            <a
              href="https://instagram.com/casacrossevents.ut"
              style={{
                color: "inherit",
                textDecoration: "none",
                borderBottom: "1px solid rgba(251,247,240,0.3)",
                paddingBottom: 2,
              }}
            >
              @casacrossevents.ut
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
