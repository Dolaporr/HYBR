import { Footer, Header } from "@/app/_components/marketing";
import { alitheiaCaseStudy } from "@/content/caseStudies";

export default function AlitheiaCaseStudyPage() {
  return (
    <main className="case-page">
      <div className="case-frame">
        <Header active="what" />

        <section className="case-hero-card" id="cover" style={{ padding: 40 }}>
          <div
            aria-hidden="true"
            className="case-hero-image"
            style={{ backgroundImage: `url(${alitheiaCaseStudy.image})`, backgroundPosition: alitheiaCaseStudy.imagePosition }}
          />

          <div className="case-hero-copy">
            <h1 id="case-title">{alitheiaCaseStudy.title}</h1>
            <p>{alitheiaCaseStudy.body}</p>
            <p style={{ marginTop: 12 }}>{alitheiaCaseStudy.shortBody}</p>
          </div>

          <div className="case-company">
            <span className="case-company-logo case-company-logo--alitheia" aria-label={alitheiaCaseStudy.company}>
              {alitheiaCaseStudy.company}
            </span>
          </div>

          <p className="case-study-label">CASE STUDY</p>
        </section>

        <section style={{ padding: 24 }}>
          <h2>About this case study</h2>
          <p>{alitheiaCaseStudy.body}</p>
          <a href={alitheiaCaseStudy.href} className="case-download-link">
            Download PDF
          </a>
        </section>

        <Footer />
      </div>
    </main>
  );
}
