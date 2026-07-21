import { IMG } from "@/lib/images";
import { AnimatedHeading } from "./animated-heading";
import { Marquee } from "./marquee";
import { ParallaxImage } from "./parallax-image";
import { Reveal } from "./reveal";

const TILES: Array<{ src: string; span: "tall" | "wide" | "normal" }> = [
  { src: IMG.gal1, span: "tall" },
  { src: IMG.gal2, span: "wide" },
  { src: IMG.gal3, span: "normal" },
  { src: IMG.gal4, span: "normal" },
  { src: IMG.gal5, span: "tall" },
  { src: IMG.gal6, span: "normal" },
  { src: IMG.gal7, span: "wide" },
  { src: IMG.gal8, span: "normal" },
];

const WORDS = [
  "Photographers",
  "Florals",
  "Models",
  "Venue",
  "Linens",
  "Tabletop",
  "TFP",
  "Portfolio",
  "Community",
];

export function Gallery() {
  return (
    <section
      id="gallery"
      style={{
        padding: "clamp(80px, 14vh, 180px) 32px",
        background: "var(--c-bg)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 80 }}>
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
              ── Past Styled Shoots
            </div>
          </Reveal>
          <AnimatedHeading
            as="h2"
            text="The kind of work you can create"
            italicWords={[3]}
            scriptWords={[6]}
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
        <Marquee words={WORDS} />
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "180px",
            gap: 16,
            marginTop: 64,
          }}
        >
          {TILES.map((t, i) => {
            const span =
              t.span === "tall"
                ? { gridRow: "span 2" }
                : t.span === "wide"
                  ? { gridColumn: "span 2" }
                  : {};
            return (
              <Reveal key={i} delay={i * 80} style={{ ...span, height: "100%" }}>
                <ParallaxImage
                  src={t.src}
                  ratio="auto"
                  strength={30}
                  style={{ height: "100%" }}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
