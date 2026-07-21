import { IMG } from "@/lib/images";
import { AnimatedHeading } from "./animated-heading";
import { ParallaxImage } from "./parallax-image";
import { Reveal } from "./reveal";

const STATS: Array<[string, string]> = [
  ["25+", "Creative collaborators"],
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{
        padding: "clamp(80px, 14vh, 180px) 32px",
        background: "var(--c-bg)",
      }}
    >
      <div
        className="philosophy-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "clamp(48px, 8vw, 120px)",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <ParallaxImage src={IMG.about1} ratio="3/4" strength={50} />
          <div
            style={{
              position: "absolute",
              bottom: -40,
              right: -40,
              width: "55%",
            }}
          >
            <ParallaxImage
              src={IMG.about2}
              ratio="1/1"
              strength={30}
              style={{ border: "8px solid var(--c-bg)" }}
            />
          </div>
        </div>
        <div>
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
              ── The Idea
            </div>
          </Reveal>
          <AnimatedHeading
            as="h2"
            text="A styled shoot, fully coordinated"
            italicWords={[2]}
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
          <Reveal delay={400}>
            <p
              style={{
                marginTop: 32,
                fontFamily: "var(--ff-body)",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--c-muted)",
                maxWidth: 540,
                textWrap: "pretty",
              }}
            >
              Casa Cross exists to create portfolio-building styled photoshoots
              for photographers, models, and vendors. Our owner coordinates the
              concept, venue, creative team, styling details, and timeline so
              each shoot feels intentional from the first moodboard to the final
              gallery.
            </p>
          </Reveal>
          <Reveal delay={550}>
            <p
              style={{
                marginTop: 20,
                fontFamily: "var(--ff-body)",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--c-muted)",
                maxWidth: 540,
                textWrap: "pretty",
              }}
            >
              Some creatives reserve paid spots, while many vendors and models
              participate through TFP (trade for photos). The goal is the same:
              everyone leaves with fresh imagery and stronger creative
              relationships.
            </p>
          </Reveal>
          <Reveal
            delay={700}
            style={{ marginTop: 48, display: "flex", gap: 48, flexWrap: "wrap" }}
          >
            {STATS.map(([n, l]) => (
              <div key={l}>
                <div
                  style={{
                    fontFamily: "var(--ff-display)",
                    fontSize: 44,
                    fontStyle: "italic",
                    color: "var(--c-accent)",
                    lineHeight: 1,
                  }}
                >
                  {n}
                </div>
                <div
                  style={{
                    fontFamily: "var(--ff-body)",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--c-muted)",
                    marginTop: 8,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
