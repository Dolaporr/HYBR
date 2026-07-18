import Link from "next/link";
import { Footer, Header } from "../../../_components/marketing";
import { innovationSweetSpotArticle } from "@/content/insights";
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
      <figcaption>Evidence beats enthusiasm when teams are testing problem-solution fit.</figcaption>
    </figure>
  );
}

function WriterProfile() {
  return (
    <section className="news-detail-writer" aria-labelledby="article-writer-profile-title">
      <h2 id="article-writer-profile-title">WRITER PROFILE</h2>
      <article className="news-detail-writer-card">
        <img alt="" className="news-detail-writer-bg" src={figmaAssets.figmaBusinessPartners} />
        <span className="news-detail-writer-ring">
          <img alt="" src={figmaAssets.figmaTeamPortrait} />
        </span>
        <span className="news-detail-writer-copy">
          <strong>{innovationSweetSpotArticle.author}</strong>
          <span>Writer, HYBR Insights</span>
          <span>Charles writes about practical innovation strategy, problem validation, and evidence-led product development.</span>
        </span>
      </article>
    </section>
  );
}

function MoreArticleCard({ className = "" }: { className?: string }) {
  return (
    <Link className={`news-detail-card article-detail-card figma-motion-card ${className}`} href="/insights/articles/specific-article">
      <img alt="" src={figmaAssets.figmaBuilding} />
      <span className="news-detail-card-copy">
        <span>ARTICLE</span>
        <span>{innovationSweetSpotArticle.cardTitle}</span>
      </span>
      <span className="news-detail-card-button">Read More</span>
    </Link>
  );
}

function MoreArticles() {
  return (
    <section className="news-detail-more article-detail-more" aria-labelledby="more-articles-title">
      <div className="news-detail-more-copy">
        <p id="more-articles-title">MORE ARTICLES</p>
        <h2>Enjoyed this article? Check out more insights like this.</h2>
        <span>Explore ideas and perspectives designed to help organisations understand what&apos;s changing and what it means for the decisions they make next.</span>
      </div>
      <div className="news-detail-more-grid article-detail-more-grid">
        <MoreArticleCard className="article-detail-card--a" />
        <MoreArticleCard className="article-detail-card--b" />
        <MoreArticleCard className="article-detail-card--c" />
      </div>
      <Link className="news-detail-outline-button news-detail-all-news" href="/insights/articles">
        All Articles
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

export default function ArticleTemplatePage() {
  return (
    <main className="news-detail-page article-detail-page">
      <section className="news-detail-hero">
        <Header active="insights" tone="dark" />
        <div className="news-detail-hero-image">
          <img alt="" src={figmaAssets.figmaBusinessPartners} />
        </div>
        <div className="news-detail-hero-copy">
          <h1>{innovationSweetSpotArticle.title}</h1>
          <p className="news-detail-summary news-detail-summary--desktop">
            {innovationSweetSpotArticle.subtitle}
          </p>
          <p className="news-detail-summary news-detail-summary--tablet-horizontal">
            {innovationSweetSpotArticle.summary}
          </p>
          <p className="news-detail-summary news-detail-summary--tablet-vertical">
            {innovationSweetSpotArticle.summary}
          </p>
          <p className="news-detail-author">{innovationSweetSpotArticle.author} &bull; {innovationSweetSpotArticle.date}</p>
          <div className="news-detail-topics">
            <p>Topics</p>
            <span>{innovationSweetSpotArticle.topics}</span>
          </div>
        </div>
      </section>

      <section className="news-detail-body">
        <div className="figma-container news-detail-shell">
          <ArticleSection
            heading={innovationSweetSpotArticle.subtitle}
            kicker="Start with the problem before you scale the solution."
            paragraphs={innovationSweetSpotArticle.intro}
          />
          <FeatureImage />
          {innovationSweetSpotArticle.sections.map((section) => (
            <ArticleSection
              className="news-detail-article-section--main"
              heading={section.heading}
              key={section.heading}
              kicker={section.kicker}
              paragraphs={section.paragraphs}
            />
          ))}
          <ArticleSection
            className="news-detail-article-section--main"
            heading="The Bottom Line"
            kicker="Problem-solution fit is evidence."
            paragraphs={innovationSweetSpotArticle.bottomLine}
          />
          <p className="news-detail-disclaimer">
            Over to you: what is the riskiest assumption your team has not tested yet?
          </p>
          <WriterProfile />
          <MoreArticles />
          <ServicesCta />
        </div>
      </section>

      <Footer />
    </main>
  );
}
