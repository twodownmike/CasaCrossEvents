import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { getModel, MODELS } from "@/lib/models";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return MODELS.map((model) => ({ slug: model.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);

  if (!model) {
    return {
      title: "Model Not Found | Casa Cross Events",
    };
  }

  return {
    title: `${model.name} | Casa Cross Events Models`,
    description: model.summary,
  };
}

export default async function ModelDetailPage({ params }: Props) {
  const { slug } = await params;
  const model = getModel(slug);

  if (!model) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: "100vh",
          background: "var(--c-bg)",
          padding: "150px 32px 96px",
        }}
      >
        <section
          className="model-detail-grid"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(280px, 0.9fr) minmax(320px, 1.1fr)",
            gap: "clamp(40px, 7vw, 96px)",
            alignItems: "start",
          }}
        >
          <div>
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
          </div>

          <div>
            <Link
              href="/models"
              style={{
                display: "inline-block",
                marginBottom: 28,
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
              Back to models
            </Link>
            <div
              style={{
                fontFamily: "var(--ff-body)",
                fontSize: 11,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "var(--c-accent)",
                marginBottom: 20,
              }}
            >
              -- Featured Model
            </div>
            <h1
              style={{
                fontFamily: "var(--ff-display)",
                fontWeight: "var(--fw-display)" as unknown as number,
                fontSize: "clamp(3.6rem, 8vw, 7rem)",
                lineHeight: 0.95,
                color: "var(--c-ink)",
                margin: 0,
              }}
            >
              {model.name}
            </h1>
            <p
              style={{
                margin: "20px 0 0",
                fontFamily: "var(--ff-body)",
                fontSize: 13,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--c-muted)",
              }}
            >
              {model.role} · {model.location}
            </p>
            <p
              style={{
                marginTop: 34,
                maxWidth: 620,
                fontFamily: "var(--ff-body)",
                fontSize: 18,
                lineHeight: 1.75,
                color: "var(--c-muted)",
              }}
            >
              {model.summary}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 34,
              }}
            >
              {model.details.map((detail) => (
                <span
                  key={detail}
                  style={{
                    border: "1px solid var(--c-line)",
                    padding: "9px 12px",
                    fontFamily: "var(--ff-body)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--c-muted)",
                  }}
                >
                  {detail}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 42 }}>
              <h2
                style={{
                  fontFamily: "var(--ff-display)",
                  fontSize: 32,
                  fontWeight: "var(--fw-display)" as unknown as number,
                  margin: "0 0 14px",
                  color: "var(--c-ink)",
                }}
              >
                Socials
              </h2>
              {model.socials.length > 0 ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
                  {model.socials.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
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
                      {social.label}
                    </a>
                  ))}
                </div>
              ) : (
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--ff-body)",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--c-muted)",
                  }}
                >
                  Social links can be added here once each model&apos;s preferred
                  handles are confirmed.
                </p>
              )}
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 1280, margin: "88px auto 0" }}>
          <h2
            style={{
              fontFamily: "var(--ff-display)",
              fontSize: "clamp(2.2rem, 4vw, 4rem)",
              fontWeight: "var(--fw-display)" as unknown as number,
              margin: "0 0 28px",
              color: "var(--c-ink)",
            }}
          >
            More from {model.name}
          </h2>
          <div
            className="model-gallery-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {model.images.map((image, index) => (
              <div
                key={image}
                style={{
                  aspectRatio: index % 3 === 0 ? "4 / 5" : "1 / 1",
                  overflow: "hidden",
                  background: "var(--c-line)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`${model.name} portfolio image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
