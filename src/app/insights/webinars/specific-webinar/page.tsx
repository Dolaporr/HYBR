import Link from "next/link";
import { Button, Footer, Header } from "../../../_components/marketing";
import { figmaAssets } from "@/content/site";

const topics = ["Topic 1", "Topic 2", "Topic 3"];

const latestWebinars = Array.from({ length: 5 }, () => ({
  title: "Title of Specific Webinar",
  speakers: "Speaker1 & Speaker2",
  date: "Date/Period Added",
  duration: "01:40:35",
}));

const speakers = [
  {
    name: "FirstName LastName",
    role: "Title/Role, Company",
    location: "Location",
  },
  {
    name: "FirstName LastName",
    role: "Title/Role, Company",
    location: "Location",
  },
];

function SearchControl() {
  return (
    <div className="figma-search-control" role="search">
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <circle cx="18.5" cy="18.5" r="10.5" stroke="currentColor" strokeWidth="2.5" />
        <path d="M26 26L32 32" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
      <span>Search</span>
    </div>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`webinar-play ${className}`} aria-hidden="true">
      <svg fill="none" viewBox="0 0 104 104">
        <path d="M29 12L82 52L29 92V12Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function WebinarVideo({
  compact = false,
  imageSrc = figmaAssets.figmaBuilding,
}: {
  compact?: boolean;
  imageSrc?: string;
}) {
  return (
    <div className={compact ? "webinar-video webinar-video--compact" : "webinar-video"}>
      <img alt="" src={imageSrc} />
      <PlayIcon />
      <span className="webinar-duration">01:40:35</span>
    </div>
  );
}

function ActionIcon({ type }: { type: "like" | "share" }) {
  if (type === "like") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 48 48">
        <path d="M17 41H12C10.3431 41 9 39.6569 9 38V22C9 20.3431 10.3431 19 12 19H17V41Z" stroke="currentColor" strokeWidth="2.2" />
        <path d="M17 20L25 8C26.1046 8.5 28 10 28 13V19H36C38.7614 19 41 21.2386 41 24L38.5 36C37.9 39 35.5 41 32.5 41H17V20Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 48 48">
      <path d="M41 7L21 28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
      <path d="M41 7L29 41L21 28L7 20L41 7Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  );
}

function DetailAction({ type, label }: { type: "like" | "share"; label: string }) {
  return (
    <button className="webinar-detail-action" type="button">
      <ActionIcon type={type} />
      <span>{label}</span>
    </button>
  );
}

function RelatedWebinarRow({
  webinar,
}: {
  webinar: { title: string; speakers: string; date: string; duration: string };
}) {
  return (
    <Link className="related-webinar-row" href="/insights/webinars/specific-webinar">
      <WebinarVideo compact imageSrc={figmaAssets.figmaBusinessPartners} />
      <div>
        <h3>{webinar.title}</h3>
        <p>{webinar.speakers}</p>
        <p>{webinar.date}</p>
      </div>
    </Link>
  );
}

function SpeakerCard({ speaker }: { speaker: (typeof speakers)[number] }) {
  return (
    <article
      className="webinar-speaker-card"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.58), rgba(0,0,0,.36)), url(${figmaAssets.figmaBusinessPartners})`,
      }}
    >
      <div className="webinar-speaker-person">
        <span className="webinar-speaker-ring">
          <img alt="" src={figmaAssets.figmaTeamPortrait} />
        </span>
        <div>
          <h3>{speaker.name}</h3>
          <p>{speaker.role}</p>
          <p>{speaker.location}</p>
        </div>
      </div>
      <button className="webinar-speaker-more" type="button">
        <span>About Speaker</span>
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
    </article>
  );
}

  export default function SpecificWebinarPage() {
  return (
    <main className="webinar-detail-page bg-white text-black">
      <Header active="insights" />

      <section className="webinar-detail-frame">
        <div className="figma-container">
          <SearchControl />

          <div className="webinar-detail-grid">
            <article className="webinar-detail-main">
              <WebinarVideo />

              <div className="webinar-title-block">
                <h1>Title of Specific Webinar, Long or Short</h1>
                <p>1.5K Views | Jedidiah Akpata &amp; Charles Ojei | 5th November, 2023</p>
              </div>

              <div className="webinar-detail-actions">
                <div className="webinar-detail-actions-left">
                  <DetailAction label="Like" type="like" />
                  <DetailAction label="Share" type="share" />
                </div>
                <Link className="webinar-transcript-link" href="#transcript">
                  Read Transcript
                </Link>
              </div>

              <div className="webinar-body-copy" id="transcript">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
                  dapibus ipsum, a tristique sem. Ut sed scelerisque sem. Nulla eget
                  gravida quam, eget scelerisque elit.
                </p>
                <p>
                  Suspendisse ullamcorper condimentum molestie. Pellentesque fringilla
                  tristique purus, vitae euismod tortor tempor eu. In posuere libero sed
                  scelerisque rutrum. Aenean sit amet hendrerit lacus. Duis facilisis ac
                  purus a blandit.
                </p>
              </div>

              <section className="webinar-speakers">
                <div className="webinar-speakers-head">
                  <h2>About The Speakers</h2>
                  <Button href="/insights/webinars" variant="outline">
                    All Webinars
                  </Button>
                </div>
                <div className="webinar-speaker-list">
                  {speakers.map((speaker) => (
                    <SpeakerCard key={speaker.name + speaker.role} speaker={speaker} />
                  ))}
                </div>
              </section>
            </article>

            <aside className="webinar-detail-sidebar">
              <div
                className="webinar-ad-card"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.44), rgba(0,0,0,.18)), url(${figmaAssets.figmaFieldHero})`,
                }}
              >
                HYBR Ad
              </div>

              <section className="webinar-topics">
                <h2>Related Topics</h2>
                <div>
                  {topics.map((topic) => (
                    <Link href="/insights/articles" key={topic}>
                      {topic}
                    </Link>
                  ))}
                </div>
              </section>

              <section className="webinar-latest">
                <h2>Latest Webinars</h2>
                <div className="webinar-latest-list">
                  {latestWebinars.map((webinar, index) => (
                    <RelatedWebinarRow key={`${webinar.title}-${index}`} webinar={webinar} />
                  ))}
                </div>
                <Button href="/insights/webinars" variant="outline">
                  All Webinars
                </Button>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
