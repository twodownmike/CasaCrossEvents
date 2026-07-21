import { IMG } from "@/lib/images";
import { AnimatedHeading } from "./animated-heading";
import { ParallaxImage } from "./parallax-image";
import { Reveal } from "./reveal";

const ITEMS = [
  {
    num: "01",
    title: "Photographer Seats",
    img: IMG.svc1,
    desc: "Photographers reserve a spot in a fully styled shoot designed to create refined, portfolio-ready imagery.",
  },
  {
    num: "02",
    title: "Vendor Curation",
    img: IMG.svc2,
    desc: "We coordinate venues, florals, beauty, wardrobe, rentals, and details with local collaborators, often through TFP.",
  },
  {
    num: "03",
    title: "Styled Scenarios",
    img: IMG.svc3,
    desc: "Wedding-inspired, bachelorette, editorial, and seasonal scenes give photographers variety without client-day pressure.",
  },
  {
    num: "04",
    title: "Shared Galleries",
    img: IMG.svc4,
    desc: "Participating vendors and models receive image access so the whole creative team can market the work.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "clamp(80px, 14vh, 180px) 32px",
        background: "var(--c-surface)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          className="services-header"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "end",
            marginBottom: 80,
          }}
        >
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
                ── What We Coordinate
              </div>
            </Reveal>
            <AnimatedHeading
              as="h2"
              text="Styled shoots for photographers"
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
          <Reveal delay={300}>
            <p
              style={{
                fontFamily: "var(--ff-body)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--c-muted)",
                maxWidth: 480,
                textWrap: "pretty",
              }}
            >
              We are not a wedding or private event planning company. Casa Cross
              creates styled photoshoot experiences so photographers can build
              their portfolios alongside a thoughtfully gathered creative team.
            </p>
          </Reveal>
        </div>
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 64,
          }}
        >
          {ITEMS.map((it, i) => (
            <Reveal key={it.num} delay={i * 120}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <ParallaxImage
                    src={it.img}
                    alt={it.title}
                    ratio="5/4"
                    strength={40}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      fontFamily: "var(--ff-display)",
                      fontStyle: "italic",
                      fontSize: 18,
                      color: "#fff",
                      mixBlendMode: "difference",
                    }}
                  >
                    {it.num}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--ff-display)",
                      fontSize: "clamp(1.8rem, 2.6vw, 2.6rem)",
                      fontWeight: "var(--fw-display)" as unknown as number,
                      color: "var(--c-ink)",
                      margin: 0,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {it.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--ff-script)",
                      fontSize: 26,
                      color: "var(--c-accent)",
                    }}
                  >
                    —
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--ff-body)",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--c-muted)",
                    margin: 0,
                    maxWidth: 460,
                    textWrap: "pretty",
                  }}
                >
                  {it.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
