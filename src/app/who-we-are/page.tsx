import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../_components/marketing";

const primaryImage = figmaAssets.figmaBusinessPartners;

const contentLinks = [
  { label: "Our History", href: "#history" },
  { label: "Early Days", href: "#early-days" },
  { label: "About Us", href: "#about-us" },
  { label: "Our Team", href: "#our-team" },
  { label: "Careers", href: "#careers" },
];

const timeline = [
  {
    year: "2016",
    text: "HYBR conceptualised to help ventures scale their impact in Africa.",
    icon: "hybr",
    desktop: { x: 0, y: 171, w: 490, h: 164, side: "top" },
    mobile: { x: 130, y: 0, w: 212, h: 160 },
  },
  {
    year: "2017",
    text: "Launched maiden edition of the Young Enterprise (YES) Bootcamp in Lagos in partnership with Samsung, Google, Deloitte, and Sage.",
    icon: "shoe",
    desktop: { x: 366, y: 527, w: 490, h: 220, side: "bottom" },
    mobile: { x: 130, y: 279, w: 212, h: 217 },
  },
  {
    year: "2018",
    text: "YES expands to reach ventures in Lagos, Johannesburg, and Nairobi. HYBR opens office in Cape Town.",
    icon: "arrows",
    desktop: { x: 732, y: 143, w: 490, h: 192, side: "top" },
    mobile: { x: 130, y: 615, w: 212, h: 179 },
  },
  {
    year: "2019",
    text: "Implements the Merck-Make-IT-Africa Joint program to impact healthcare ventures across Africa.",
    icon: "health",
    desktop: { x: 1098, y: 527, w: 490, h: 192, side: "bottom" },
    mobile: { x: 130, y: 932, w: 212, h: 198 },
  },
  {
    year: "2019",
    text: "Implements the Entrepreneurs Plastics Innovation Challenge (EPIC) powered by Coca-Cola.",
    icon: "bottle",
    desktop: { x: 1464, y: 143, w: 490, h: 192, side: "top" },
    mobile: { x: 130, y: 1249, w: 212, h: 198 },
  },
  {
    year: "2020",
    text: "Supports ventures globally, through the Growing through Uncertainty program during COVID-19.",
    icon: "handshake",
    desktop: { x: 1830, y: 527, w: 490, h: 192, side: "bottom" },
    mobile: { x: 130, y: 1547, w: 212, h: 179 },
  },
  {
    year: "2020",
    text: "Ecosystem study - Innovating in the New Normal post COVID-19. Opens operations in London, UK.",
    icon: "pin",
    desktop: { x: 2196, y: 143, w: 490, h: 192, side: "top" },
    mobile: { x: 130, y: 1864, w: 212, h: 198 },
  },
  {
    year: "2021",
    text: "Partnership with ABSA for continent-wide innovation intelligence.",
    icon: "robot",
    desktop: { x: 2562, y: 527, w: 490, h: 164, side: "bottom" },
    mobile: { x: 130, y: 2162, w: 212, h: 160 },
  },
  {
    year: "2022",
    text: "Strategic reorganization, new purpose, and missions.",
    icon: "compass",
    desktop: { x: 2928, y: 171, w: 490, h: 164, side: "top" },
    mobile: { x: 130, y: 2441, w: 212, h: 160 },
  },
  {
    year: "2024",
    text: "Transition into a full-service innovation agency.",
    icon: "sparkle",
    desktop: { x: 3294, y: 527, w: 490, h: 164, side: "bottom" },
    mobile: { x: 130, y: 2701, w: 212, h: 141 },
  },
];

type TimelineIconKind = (typeof timeline)[number]["icon"];

function TimelineIcon({ kind }: { kind: TimelineIconKind }) {
  if (kind === "hybr") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="27" r="7" stroke="currentColor" strokeWidth="3" />
        <circle cx="20" cy="22" r="13" stroke="currentColor" strokeWidth="3" />
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }

  if (kind === "arrows") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <path d="M20 6v28M6 20h28M20 6l-5 5M20 6l5 5M20 34l-5-5M20 34l5-5M6 20l5-5M6 20l5 5M34 20l-5-5M34 20l-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      </svg>
    );
  }

  if (kind === "shoe") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <path d="M9 25c6.5 4.7 14.2 6 22.4 3.5M12.5 18.5l9 8.2M17.5 14.5l10.8 10.2M10 28.5h23.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      </svg>
    );
  }

  if (kind === "health") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <path d="M20 7v26M14 13h12M12 20h16M15 33h10" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
        <path d="M13 13c0-4 3-7 7-7s7 3 7 7c0 5-7 7-7 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      </svg>
    );
  }

  if (kind === "bottle") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <path d="M17 5h6v7l4 5v16a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V17l4-5V5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="M17 12h6M13 23h14" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
      </svg>
    );
  }

  if (kind === "handshake") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <path d="M6 22l7-8 7 6 7-6 7 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        <path d="M12 23l5 5c2 2 4 2 6 0l5-5M16 16l-4 4M24 16l4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      </svg>
    );
  }

  if (kind === "pin") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <path d="M20 35s11-10 11-20a11 11 0 0 0-22 0c0 10 11 20 11 20Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.4" />
        <circle cx="20" cy="15" r="4" stroke="currentColor" strokeWidth="2.4" />
      </svg>
    );
  }

  if (kind === "robot") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <rect height="20" rx="5" stroke="currentColor" strokeWidth="2.4" width="24" x="8" y="13" />
        <path d="M20 13V7M14 7h12M5 23h3M32 23h3" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
        <path d="M15 22h.1M25 22h.1M16 28h8" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
      </svg>
    );
  }

  if (kind === "compass") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2.4" />
        <path d="M25 15l-3 9-7 3 3-9 7-3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.4" />
      </svg>
    );
  }

  if (kind === "sparkle") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
        <path d="M20 5l4 11 11 4-11 4-4 11-4-11-11-4 11-4 4-11ZM31 5l1.8 5.2L38 12l-5.2 1.8L31 19l-1.8-5.2L24 12l5.2-1.8L31 5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 40 40">
      <path d="M9 26c7 5 15 5 22 0M13 15l9 9M16 12l12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
    </svg>
  );
}

function timelineStyle(item: (typeof timeline)[number]) {
  return {
    "--history-x": `${item.desktop.x}px`,
    "--history-y": `${item.desktop.y}px`,
    "--history-w": `${item.desktop.w}px`,
    "--history-h": `${item.desktop.h}px`,
    "--history-mobile-x": `${item.mobile.x}px`,
    "--history-mobile-y": `${item.mobile.y}px`,
    "--history-mobile-w": `${item.mobile.w}px`,
    "--history-mobile-h": `${item.mobile.h}px`,
  } as CSSProperties;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="who-section-label">{children}</p>;
}

function FigmaButton({
  children,
  href,
  light = false,
}: {
  children: ReactNode;
  href: string;
  light?: boolean;
}) {
  return (
    <Link className={light ? "who-button who-button--light" : "who-button"} href={href}>
      {children}
    </Link>
  );
}

function ImageSurface({
  className = "",
  src = primaryImage,
  overlay,
  children,
}: {
  className?: string;
  src?: string;
  overlay?: string;
  children?: ReactNode;
}) {
  const image = overlay ? `${overlay}, url(${src})` : `url(${src})`;

  return (
    <div
      className={`who-image-surface ${className}`}
      style={{
        backgroundImage: image,
      }}
    >
      {children}
    </div>
  );
}

function EarlyDaysCard() {
  return (
    <section className="who-early" id="early-days" aria-labelledby="who-early-title">
      <div className="who-early-image">
        <span
          aria-hidden="true"
          className="who-early-media"
          style={{ backgroundImage: `url(${primaryImage})` }}
        />
        <div>
          <h2 id="who-early-title">Early Days</h2>
          <p>A captivating statement about what this section represents.</p>
        </div>
      </div>
    </section>
  );
}

function AboutImageCard() {
  return (
    <div className="who-about-image" aria-hidden="true">
      <span
        className="who-about-media"
        style={{ backgroundImage: `url(${primaryImage})` }}
      />
    </div>
  );
}

function ContentDrop() {
  return (
    <aside className="who-content-drop" aria-label="Page contents">
      <span
        aria-hidden="true"
        className="who-content-drop-media"
        style={{ backgroundImage: `url(${primaryImage})` }}
      />
      <p>CONTENT</p>
      <nav>
        {contentLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function Timeline() {
  return (
    <div className="who-timeline-shell">
      <div className="who-timeline-track">
        <div className="who-timeline-rail" aria-hidden="true" />
        <span className="who-timeline-range-year who-timeline-range-start" aria-hidden="true">
          2016
        </span>
        <span className="who-timeline-range-year who-timeline-range-end" aria-hidden="true">
          2025
        </span>
        {timeline.map((item, index) => (
          <article
            className={`who-timeline-card ${index === 0 ? "is-featured" : ""} is-${item.desktop.side}`}
            key={`${item.year}-${index}`}
            style={timelineStyle(item)}
          >
            <span className="who-timeline-pin" aria-hidden="true">
              <TimelineIcon kind={item.icon} />
            </span>
            <p>{item.text}</p>
            <strong>{item.year}</strong>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function WhoWeArePage() {
  return (
    <main className="who-page">
      <div className="who-frame">
        <Header active="who" />

        <section className="who-hero" aria-labelledby="who-title">
          <h1 id="who-title">Who We Are</h1>
          <p>A Tribe of Dynamic Doers &mdash; Building What&apos;s Next.</p>
        </section>

        <ContentDrop />

        <section className="who-history" id="history" aria-labelledby="who-history-title">
          <div className="who-history-head">
            <SectionLabel>Our History</SectionLabel>
          </div>
          <a className="who-journey-button" href="#careers">
            <span>See The Whole Journey</span>
            <svg aria-hidden="true" className="who-journey-icon" fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2" />
              <path d="M10 14L16 20L22 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
            </svg>
          </a>
          <h2 id="who-history-title" className="sr-only">
            Our History
          </h2>
          <Timeline />
        </section>

        <EarlyDaysCard />

        <span className="who-about-orbit" aria-hidden="true" />

        <section className="who-about-copy" id="about-us" aria-labelledby="who-about-title">
          <SectionLabel>About Us</SectionLabel>
          <h2 id="who-about-title">
            We help innovators turn untapped potential into world-shaping solutions.
          </h2>
          <div className="who-copy-stack">
            <p>
              At HYBR, we don&rsquo;t just innovate&mdash;we reimagine the very blueprint of
              how innovation is discovered, nurtured, and scaled in underserved markets.
            </p>
            <p>
              We transform ideas, products, services, and organizations into innovation
              leaders. We are a purpose-driven innovation agency&mdash;unearthing
              breakthrough ideas, empowering brilliant innovation leaders, and igniting
              solutions with global impact. From Lagos to London, Cape Town to
              California, HYBR is where big ideas meet bold execution.
            </p>
          </div>
          <FigmaButton href="/who-we-are/about-us">Learn More</FigmaButton>
        </section>

        <AboutImageCard />

        <section className="who-team" id="our-team" aria-labelledby="who-team-title">
          <div className="who-team-head">
            <div>
              <SectionLabel>Our Team</SectionLabel>
              <h2 id="who-team-title">
                The people powering <span>HYBR</span>: innovators obsessed with building
                what&apos;s next.
              </h2>
            </div>
            <p>
              Our team brings together decades of experience across innovation strategy,
              venture building, AI, and enterprise transformation. From designing
              market-shifting business models to launching scalable technologies in
              frontier markets, we combine analytic rigor, creative problem-solving, and
              deep sector expertise to help organizations unlock what&apos;s possible.
            </p>
          </div>
          <ImageSurface className="who-team-image">
            <FigmaButton href="/who-we-are/our-team" light>
              Learn More
            </FigmaButton>
          </ImageSurface>
        </section>

        <ImageSurface className="who-careers-image" />

        <section className="who-careers-copy" id="careers" aria-labelledby="who-careers-title">
          <SectionLabel>Careers</SectionLabel>
          <h2 id="who-careers-title">
            Join us and build the future&mdash;turning tough challenges into breakthrough
            solutions.
          </h2>
          <p>
            If you&rsquo;re driven by curiosity, obsessed with solving complex problems,
            and excited to shape the future of global underserved markets, you&rsquo;ll
            feel right at home here. Explore careers at HYBR and build what&rsquo;s next
            with us.
          </p>
          <FigmaButton href="/who-we-are/careers">Learn More</FigmaButton>
        </section>
      </div>

      <Footer />
    </main>
  );
}
