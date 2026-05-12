import Link from "next/link";
import { Footer, Header } from "../../../_components/marketing";
import { figmaAssets } from "@/content/site";

const shortParagraphs = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel dapibus ipsum, a tristique sem. Ut sed scelerisque sem. Nulla eget gravida quam, eget scelerisque elit.",
  "Suspendisse ullamcorper condimentum molestie. Pellentesque fringilla tristique purus, vitae euismod tortor tempor eu. In posuere libero sed scelerisque rutrum. Aenean sit amet hendrerit lacus. Duis facilisis ac purus a blandit.",
  "Integer porttitor sagittis massa in ultricies. Praesent vitae laoreet sem, ac aliquet metus. Curabitur tincidunt sit amet eros eget placerat.",
];

const mediumParagraphs = [
  ...shortParagraphs,
  "Nam id erat id ipsum faucibus accumsan eget ut enim. Praesent pellentesque auctor eros, non condimentum nisi fringilla eget. Donec accumsan mi nec mi scelerisque placerat. Curabitur vitae lacinia lectus, id varius nisi. Duis rutrum massa vel mollis faucibus. Donec dapibus ligula lectus, et pretium augue congue eu.",
];

const tabletOnlyParagraphs = [
  ...mediumParagraphs,
  "Praesent erat tortor, egestas et tempus a, interdum sit amet augue. Nam in rhoncus sem, vel dignissim orci. Vestibulum a faucibus mi.",
];

function ArticleSection({
  className = "",
  paragraphs,
}: {
  className?: string;
  paragraphs: string[];
}) {
  return (
    <section className={`news-detail-article-section ${className}`}>
      <h2>Header</h2>
      <p className="news-detail-kicker">ONE-LINER FOR SECTION TO GIVE AN OVERVIEW</p>
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
      <figcaption>IMAGE DESCRIPTION, LOCATION, AND MORE - AS REQUIRED</figcaption>
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
          <strong>FirstName LastName</strong>
          <span>Title/Role, Company | Location</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim fringilla feugiat. Praesent sed condimentum nulla.</span>
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
        <span>One Liner For Specific Article</span>
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
          <h1>Header For Specific Article/Write-Up</h1>
          <p className="news-detail-summary news-detail-summary--desktop">
            A short, captivating statement about what this article addresses.
          </p>
          <p className="news-detail-summary news-detail-summary--tablet-horizontal">
            A short, captivating statement about what this article addresses.
          </p>
          <p className="news-detail-summary news-detail-summary--tablet-vertical">
            A captivating statement about what service was offered to the company. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim fringilla feugiat.
          </p>
          <p className="news-detail-author">NAME OF WRITER &bull; 00th Month, Year</p>
          <div className="news-detail-topics">
            <p>Topics</p>
            <span>Industry1, Industry2, Industry3</span>
          </div>
        </div>
      </section>

      <section className="news-detail-body">
        <div className="figma-container news-detail-shell">
          <ArticleSection paragraphs={shortParagraphs} />
          <FeatureImage />
          <div className="news-detail-copy news-detail-copy--standalone">
            {shortParagraphs.map((paragraph) => (
              <p key={`article-standalone-${paragraph}`}>{paragraph}</p>
            ))}
          </div>
          <ArticleSection className="news-detail-article-section--main" paragraphs={mediumParagraphs} />
          <ArticleSection className="news-detail-article-section--tablet" paragraphs={tabletOnlyParagraphs} />
          <p className="news-detail-disclaimer">
            A disclaimer of some sort, if necessary. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
