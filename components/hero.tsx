"use client";

import { useScrollY } from "@/lib/hooks";
import { IMG } from "@/lib/images";
import { AnimatedHeading } from "./animated-heading";
import { ParallaxImage } from "./parallax-image";
import { Reveal } from "./reveal";

export function Hero() {
  const y = useScrollY();
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: 140,
        paddingBottom: 80,
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div>
          <Reveal delay={200}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 32,
                color: "var(--c-muted)",
                fontFamily: "var(--ff-body)",
                fontSize: 12,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: 40,
                  height: 1,
                  background: "var(--c-muted)",
                }}
              />
              Portfolio-building styled photoshoots · Utah
            </div>
          </Reveal>
          <AnimatedHeading
            as="h1"
            text="Portfolio scenes made beautiful"
            italicWords={[1, 2]}
            scriptWords={[3]}
            delay={400}
            style={{
              fontFamily: "var(--ff-display)",
              fontWeight: "var(--fw-display)" as unknown as number,
              fontSize: "clamp(3.2rem, 7.2vw, 7rem)",
              letterSpacing: "-0.02em",
              color: "var(--c-ink)",
              margin: 0,
            }}
          />
          <Reveal delay={1200}>
            <p
              style={{
                maxWidth: 460,
                marginTop: 36,
                fontFamily: "var(--ff-body)",
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--c-muted)",
                textWrap: "pretty",
              }}
            >
              Casa Cross coordinates styled photoshoot experiences where
              photographers, models, and vendors step into a fully styled scene
              and leave with intentional content for their portfolios.
            </p>
          </Reveal>
          <Reveal
            delay={1400}
            style={{
              marginTop: 48,
              display: "flex",
              gap: 20,
              alignItems: "center",
            }}
          >
            <a
              href="#contact"
              style={{
                padding: "16px 32px",
                background: "var(--c-ink)",
                color: "var(--c-bg)",
                fontFamily: "var(--ff-body)",
                fontSize: 13,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: 999,
              }}
            >
              Join a shoot
            </a>
            <a
              href="#gallery"
              style={{
                fontFamily: "var(--ff-body)",
                fontSize: 13,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--c-ink)",
                textDecoration: "none",
                borderBottom: "1px solid var(--c-ink)",
                paddingBottom: 4,
              }}
            >
              See past shoots
            </a>
          </Reveal>
        </div>
        <div
          className="hero-images"
          style={{ position: "relative", height: "min(78vh, 720px)" }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              right: "12%",
              width: "62%",
              height: "62%",
              transform: `translateY(${y * -0.05}px)`,
            }}
          >
            <ParallaxImage src={IMG.hero1} ratio="3/4" strength={40} />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "55%",
              height: "50%",
              transform: `translateY(${y * -0.12}px)`,
            }}
          >
            <ParallaxImage src={IMG.hero2} ratio="4/3" strength={30} />
          </div>
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "8%",
              width: "38%",
              height: "30%",
              transform: `translateY(${y * -0.18}px)`,
            }}
          >
            <ParallaxImage src={IMG.hero3} ratio="1/1" strength={20} />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "var(--ff-body)",
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--c-muted)",
          }}
        >
          Scroll
        </span>
        <span
          style={{
            width: 1,
            height: 40,
            background: "var(--c-muted)",
            animation: "scrollHint 2.5s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
