import Link from "next/link";
import { Footer, Header } from "../../../_components/marketing";
import { spctaNewsFeature } from "@/content/insights";
import { figmaAssets } from "@/content/site";

function ArticleSection({
  className = "",
  heading,
  kicker,
  paragraphs,
}: {
  className?: string;
  heading: string;
  kicker: string;
  paragraphs: string[];
}) {
  return (
    <section className={`news-detail-article-section ${className}`}>
      <h2>{heading}</h2>
      <p className="news-detail-kicker">{kicker}</p>
      <div className="news-detail-copy">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function FeatureImage() {
  return (
    <figure className="news-detail-feature">
      <div className="news-detail-feature-img">
        <img alt="" src={figmaAssets.figmaBusinessPartners} />
      </div>
      <figcaption>SPCTA is building the infrastructure layer between recovered material and industrial demand.</figcaption>
    </figure>
  );
}

function WriterProfile() {
  return (
    <section className="news-detail-writer" aria-labelledby="news-writer-profile-title">
      <h2 id="news-writer-profile-title">WRITER PROFILE</h2>
      <article className="news-detail-writer-card">
        <img alt="" className="news-detail-writer-bg" src={figmaAssets.figmaBusinessPartners} />
        <span className="news-detail-writer-ring">
          <img alt="" src={figmaAssets.figmaTeamPortrait} />
        </span>
        <span className="news-detail-writer-copy">
          <strong>{spctaNewsFeature.author}</strong>
          <span>Feature desk, HYBR Insights</span>
          <span>HYBR Editorial shares venture-building stories, systems insights and field-tested lessons from the work behind HYBR Labs.</span>
        </span>
      </article>
    </section>
  );
}

function MoreNewsCard({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link className={`news-detail-card figma-motion-card ${className}`} href="/insights/news/specific-news">
      <img alt="" src={figmaAssets.figmaBuilding} />
      <span className="news-detail-card-copy">
        <span>{spctaNewsFeature.kind}</span>
        <span>{compact ? spctaNewsFeature.shortTitle : spctaNewsFeature.title}</span>
        <span>{compact ? spctaNewsFeature.compactSummary : spctaNewsFeature.summary}</span>
      </span>
      <span className="news-detail-card-button">Read More</span>
    </Link>
  );
}

function MoreNews() {
  return (
    <section className="news-detail-more" aria-labelledby="more-news-title">
      <div className="news-detail-more-copy">
        <p id="more-news-title">MORE NEWS</p>
        <h2>Enjoyed this update? Check out more insights like this.</h2>
        <span>Discover insights built to replace guesswork with clearer thinking and smarter innovation.</span>
      </div>
      <div className="news-detail-more-grid">
        <MoreNewsCard className="news-detail-card--small" compact />
        <MoreNewsCard className="news-detail-card--large" />
      </div>
      <Link className="news-detail-outline-button news-detail-all-news" href="/insights/news">
        All News
      </Link>
    </section>
  );
}

function ServicesCta() {
  return (
    <section className="news-detail-services" aria-label="Services">
      <h2>Built to attain your goals - find the service that fits your next step.</h2>
      <Link className="news-detail-outline-button" href="/what-we-do/services">
        Our Services
      </Link>
    </section>
  );
}

export default function NewsTemplatePage() {
  return (
    <main className="news-detail-page news-detail-page--spcta">
      <section className="news-detail-hero">
        <Header active="insights" tone="dark" />
        <div className="news-detail-hero-image">
          <img alt="" src={figmaAssets.figmaBusinessPartners} />
        </div>
        <div className="news-detail-hero-copy">
          <h1>{spctaNewsFeature.title}</h1>
          <p className="news-detail-summary news-detail-summary--desktop">{spctaNewsFeature.summary}</p>
          <p className="news-detail-summary news-detail-summary--tablet-horizontal">{spctaNewsFeature.summary}</p>
          <p className="news-detail-summary news-detail-summary--tablet-vertical">{spctaNewsFeature.summary}</p>
          <p className="news-detail-author">
            {spctaNewsFeature.author} &bull; {spctaNewsFeature.date}
          </p>
          <div className="news-detail-topics">
            <p>Topics</p>
            <span>{spctaNewsFeature.topics}</span>
          </div>
        </div>
      </section>

      <section className="news-detail-body">
        <div className="figma-container news-detail-shell">
          <ArticleSection
            heading="From HYBR Labs to Public View"
            kicker="A venture built around a broken material supply chain."
            paragraphs={spctaNewsFeature.intro}
          />
          <FeatureImage />
          {spctaNewsFeature.sections.map((section) => (
            <ArticleSection
              className="news-detail-article-section--main"
              heading={section.heading}
              key={section.heading}
              kicker={section.kicker}
              paragraphs={section.paragraphs}
            />
          ))}
          <p className="news-detail-disclaimer">{spctaNewsFeature.pullQuotes[2]}</p>
          <WriterProfile />
          <MoreNews />
          <ServicesCta />
        </div>
      </section>

      <Footer />
    </main>
  );
}
