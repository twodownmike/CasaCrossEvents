import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { MODELS } from "@/lib/models";

export const metadata: Metadata = {
  title: "Models | Casa Cross Events",
  description:
    "Browse models featured in Casa Cross styled photoshoots, including galleries, profile details, and social links.",
};

export default function ModelsPage() {
  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: "100vh",
          background: "var(--c-bg)",
          padding: "160px 32px 96px",
        }}
      >
        <section style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ maxWidth: 780, marginBottom: 64 }}>
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
              -- Model Directory
            </div>
            <h1
              style={{
                fontFamily: "var(--ff-display)",
                fontWeight: "var(--fw-display)" as unknown as number,
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                lineHeight: 1,
                color: "var(--c-ink)",
                margin: 0,
              }}
            >
              Featured styled-shoot models
            </h1>
            <p
              style={{
                marginTop: 28,
                maxWidth: 620,
                fontFamily: "var(--ff-body)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--c-muted)",
              }}
            >
              A growing directory of models who have collaborated with Casa
              Cross styled photoshoots. Each profile can hold galleries, shoot
              notes, details, and social links as we collect them.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 28,
            }}
          >
            {MODELS.map((model) => (
              <Link
                key={model.slug}
                href={`/models/${model.slug}`}
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <article>
                  <div
                    style={{
                      aspectRatio: "4 / 5",
                      overflow: "hidden",
                      background: "var(--c-line)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={model.cover}
                      alt={`${model.name} model portfolio portrait`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{ paddingTop: 18 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 16,
                        alignItems: "baseline",
                      }}
                    >
                      <h2
                        style={{
                          fontFamily: "var(--ff-display)",
                          fontSize: 34,
                          fontWeight: "var(--fw-display)" as unknown as number,
                          margin: 0,
                          color: "var(--c-ink)",
                        }}
                      >
                        {model.name}
                      </h2>
                      <span
                        style={{
                          fontFamily: "var(--ff-body)",
                          fontSize: 11,
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--c-accent)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        View
                      </span>
                    </div>
                    <p
                      style={{
                        margin: "4px 0 0",
                        fontFamily: "var(--ff-body)",
                        fontSize: 13,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--c-muted)",
                      }}
                    >
                      {model.role} · {model.location}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
