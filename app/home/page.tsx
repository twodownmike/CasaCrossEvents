import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Casa Cross | Create. Connect. Grow.",
  description: "Welcome to Casa Cross. Discover styled photoshoots, access the Casa Cross Portal, and meet Creative Corner, our next chapter.",
  alternates: { canonical: "https://casacross.org" },
  openGraph: {
    title: "Casa Cross | Create. Connect. Grow.",
    description: "A place for creative people and new possibilities.",
    url: "https://casacross.org",
    images: [{ url: "https://casacross.org/portfolio/cta-reception-room.jpg" }],
  },
};

export default function CasaCrossHome() {
  return (
    <div className={styles.home}>
      <a className={styles.skip} href="#destinations">Skip to destinations</a>
      <header className={styles.header}>
        <a className={styles.wordmark} href="/home" aria-label="Casa Cross home">
          <Image src="/casa-cross-logo-transparent.png" alt="Casa Cross Events" width={840} height={373} priority className={styles.logo} />
        </a>
        <nav aria-label="Main navigation">
          <a href="https://events.casacross.org">Events</a>
          <a href="https://portal.casacross.org">Portal</a>
          <a href="#creative-corner">Creative Corner</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="home-title">
          <Image src="/portfolio/cta-reception-room.jpg" alt="Sunlight filling the Magnolia styled photoshoot venue, with flowers, draped fabric, and rows of chairs" fill priority sizes="100vw" className={styles.heroImage} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>WELCOME TO OUR WORLD</p>
            <h1 id="home-title">Casa Cross</h1>
            <p className={styles.tagline}>A little connection.<br />A world of possibility.</p>
            <a className={styles.heroLink} href="#destinations">Find your place <span aria-hidden="true">↓</span></a>
          </div>
          <span className={styles.photoNote}>A MOMENT FROM OUR MAGNOLIA STYLED SHOOT</span>
        </section>

        <section id="destinations" className={styles.destinations} aria-labelledby="destinations-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>THE CASA CROSS FAMILY</p>
            <h2 id="destinations-title">Good things start<br />with <em>connection.</em></h2>
            <p>Come create with us, pick up where you left off, or discover what&apos;s next.</p>
          </div>
          <div className={styles.links}>
            <a className={styles.destination} href="https://events.casacross.org">
              <span className={styles.number}>01</span>
              <div><p className={styles.label}>CREATE TOGETHER</p><h3>Events</h3><p>Thoughtfully styled photoshoots that bring photographers, models, and vendors together to create beautiful portfolio imagery.</p><span className={styles.action}>Explore styled shoots <span aria-hidden="true">↗</span></span></div>
              <div className={styles.thumbnail}><Image src="/portfolio/gallery-fruit-florals.jpg" alt="Flowers and fruit arranged for a Casa Cross styled photoshoot" fill sizes="(max-width: 600px) 90px, 150px" /></div>
            </a>
            <a className={styles.destination} href="https://portal.casacross.org">
              <span className={styles.number}>02</span>
              <div><p className={styles.label}>YOUR WORKSPACE</p><h3>Portal</h3><p>Already part of Casa Cross? Sign in to your workspace and continue where you left off.</p><span className={styles.action}>Go to Portal <span aria-hidden="true">↗</span></span></div>
              <span className={styles.crmMark} aria-hidden="true">CC</span>
            </a>
            <a className={styles.destination} href="#creative-corner">
              <span className={styles.number}>03</span>
              <div><p className={styles.label}>OUR NEXT CHAPTER</p><h3>Creative Corner</h3><p>Something new is taking shape in the Casa Cross family. We can&apos;t wait to share it with you.</p><span className={styles.action}>A first look <span aria-hidden="true">↓</span></span></div>
              <span className={styles.cornerMark} aria-hidden="true">c<span>c</span></span>
            </a>
          </div>
        </section>

        <section id="creative-corner" className={styles.corner} aria-labelledby="corner-title">
          <p className={styles.eyebrow}>SOMETHING NEW, SOMETHING US</p>
          <h2 id="corner-title">Creative <em>Corner</em></h2>
          <p>A new addition to the Casa Cross family.<br />More to share soon.</p>
          <span className={styles.soon}>COMING SOON</span>
        </section>
      </main>
      <footer className={styles.footer}>
        <a className={styles.wordmark} href="/home" aria-label="Casa Cross home">
          <Image src="/casa-cross-logo-transparent.png" alt="Casa Cross Events" width={840} height={373} className={styles.logo} />
        </a>
        <p>Create. Connect. Grow.</p>
        <span>&copy; {new Date().getFullYear()} Casa Cross</span>
      </footer>
    </div>
  );
}
