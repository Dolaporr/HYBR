import Link from "next/link";
import { Footer, Header } from "@/app/_components/marketing";
import { alitheiaCaseStudy, alitheiaEditorial } from "@/content/caseStudies";
import styles from "../absa/page.module.css";

export default function AlitheiaCaseStudyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Header active="what" tone="dark" />
        <img alt="" className={styles.heroImage} src={alitheiaCaseStudy.image} />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <p>CLIENT CASE STUDY / DISCOVER</p>
          <h1>{alitheiaEditorial.title}</h1>
          <span>{alitheiaEditorial.subtitle}</span>
        </div>
      </section>

      <section className={styles.facts} aria-label="Case study details">
        {alitheiaEditorial.facts.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      <article className={styles.article}>
        <p className={styles.intro}>{alitheiaEditorial.intro}</p>
        {alitheiaEditorial.sections.map((section, index) => (
          <section className={styles.section} key={section.title}>
            <span>0{index + 1}</span>
            <div>
              <h2>{section.title}</h2>
              {section.copy.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </article>

      <section className={styles.cta}>
        <p>MAKE BETTER INVESTMENT DECISIONS</p>
        <h2>See what lies beyond the numbers.</h2>
        <span>HYBR helps investors and leaders turn operational evidence into clearer decisions about growth, readiness and scale.</span>
        <Link href="/contact">Book a Discovery Conversation</Link>
      </section>
      <Footer />
    </main>
  );
}
