"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../../_components/marketing";
import styles from "./page.module.css";

type ViewMode = "sections" | "report";

const sectionNav = ["Cover", "Section 1", "Section 2", "Section 3", "Section 4"] as const;

const reportSections = [
  {
    id: "section-1",
    title: "Section 1",
    intro: "A short captivating statement about what this section is about.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim fringilla feugiat. Morbi pretium laoreet ultricies. Pellentesque semper libero in neque dignissim, vel ultrices mi egestas.",
      "Aenean volutpat, nisl eget placerat malesuada, purus metus tempus nibh, sit amet commodo arcu justo sit amet ligula.",
    ],
  },
  {
    id: "section-2",
    title: "Section 2",
    intro: "A short captivating statement about what this section is about.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim fringilla feugiat. Morbi pretium laoreet ultricies. Pellentesque semper libero in neque dignissim, vel ultrices mi egestas.",
      "Aenean volutpat, nisl eget placerat malesuada, purus metus tempus nibh, sit amet commodo arcu justo sit amet ligula. Vivamus id posuere tellus, a aliquam odio.",
      "Integer pretium mauris vitae nisi gravida, sed mattis ipsum aliquet.",
    ],
  },
  {
    id: "section-3",
    title: "Section 3",
    intro: "A short captivating statement about what this section is about.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim fringilla feugiat. Morbi pretium laoreet ultricies. Pellentesque semper libero in neque dignissim, vel ultrices mi egestas.",
      "Aenean volutpat, nisl eget placerat malesuada, purus metus tempus nibh, sit amet commodo arcu justo sit amet ligula. Vivamus id posuere tellus, a aliquam odio.",
      "Integer pretium mauris vitae nisi gravida, sed mattis ipsum aliquet. Suspendisse potenti. Sed ullamcorper, purus vitae commodo porttitor, felis mi viverra orci, non aliquam mauris lacus non dolor.",
    ],
  },
  {
    id: "section-4",
    title: "Section 4",
    intro: "A short captivating statement about what this section is about.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim fringilla feugiat. Morbi pretium laoreet ultricies. Pellentesque semper libero in neque dignissim, vel ultrices mi egestas.",
      "Aenean volutpat, nisl eget placerat malesuada, purus metus tempus nibh, sit amet commodo arcu justo sit amet ligula. Vivamus id posuere tellus, a aliquam odio.",
      "Integer pretium mauris vitae nisi gravida, sed mattis ipsum aliquet. Suspendisse potenti. Sed ullamcorper, purus vitae commodo porttitor, felis mi viverra orci, non aliquam mauris lacus non dolor.",
    ],
  },
] as const;

function CaseButton({
  children,
  className = "",
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  if (href) {
    return (
      <Link className={`case-button ${className}`} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`case-button ${className}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}

function HybrMark({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 56 56">
      <circle cx="28" cy="43.2" r="10.28" stroke="#ffffff" strokeWidth="4.54" />
      <circle cx="28" cy="35.1" r="18.33" stroke="#4fc2f0" strokeWidth="4.54" />
      <circle cx="28" cy="27.88" r="25.54" stroke="#8dc540" strokeWidth="4.54" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="case-search-icon" fill="none" viewBox="0 0 40 40">
      <circle cx="18" cy="18" r="9.5" stroke="currentColor" strokeWidth="2.4" />
      <path d="M25.2 25.2L32 32" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
    </svg>
  );
}

function HandSwipeIcon() {
  return (
    <svg aria-hidden="true" className="case-swipe-icon" fill="none" viewBox="0 0 24 24">
      <path d="M7.8 10.2V6.8C7.8 5.9 8.5 5.2 9.4 5.2C10.3 5.2 11 5.9 11 6.8V10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M11 9.1V5.9C11 5 11.7 4.3 12.6 4.3C13.5 4.3 14.2 5 14.2 5.9V10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M14.2 9.4V7C14.2 6.1 14.9 5.4 15.8 5.4C16.7 5.4 17.4 6.1 17.4 7V12.7C17.4 16.1 15.1 18.8 11.9 18.8H10.8C8.4 18.8 6.6 17.8 5.4 15.7L3.7 12.8C3.3 12.1 3.6 11.2 4.3 10.8C5 10.5 5.8 10.7 6.2 11.3L7.8 13.4V10.2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M4.2 3.8L2.4 2M19.8 3.8L21.6 2M20.2 19.8L22 21.6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function SearchControl() {
  return (
    <label className="case-search">
      <span className="sr-only">Search case studies</span>
      <SearchIcon />
      <input placeholder="Search" type="search" />
    </label>
  );
}

function HeroCard({ mode }: { mode: ViewMode }) {
  return (
    <section aria-labelledby="case-title" className="case-hero-card">
      <span
        aria-hidden="true"
        className="case-hero-image"
        style={{ backgroundImage: `url(${figmaAssets.ourWorkCard})` }}
      />

      {mode === "sections" ? (
        <nav aria-label="Case study sections" className="case-cover-nav">
          {sectionNav.map((section) => (
            <a href={`#${section.toLowerCase().replace(" ", "-")}`} key={section}>
              {section}
            </a>
          ))}
        </nav>
      ) : null}

      <div className="case-hero-copy">
        <h1 id="case-title">One Liner For Specific Case Study</h1>
        <p>
          A captivating statement about what service was offered to the company.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="case-company">
        <HybrMark className="case-company-mark" />
        <span>Company Name</span>
      </div>
      <p className="case-study-label">CASE STUDY</p>

      {mode === "sections" ? (
        <button className="case-swipe" type="button">
          <HandSwipeIcon />
          <span>Swipe to Read</span>
        </button>
      ) : null}
    </section>
  );
}

function ReportSections() {
  return (
    <section aria-label="Case study report" className="case-report-sections">
      {reportSections.map((section, index) => (
        <article className={`case-report-section is-section-${index + 1}`} id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          <p className="case-report-intro">{section.intro}</p>
          <div className="case-report-body">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

function RelatedCard({ className = "" }: { className?: string }) {
  return (
    <article className={`case-related-card ${className}`}>
      <span
        aria-hidden="true"
        className="case-related-image"
        style={{ backgroundImage: `url(${figmaAssets.ourWorkCard})` }}
      />
      <p className="case-related-eyebrow">CASE STUDY</p>
      <h3>One Liner For Specific Case Study</h3>
      <p className="case-related-body">
        A captivating statement about what service was offered to the company.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim
        fringilla feugiat.
      </p>
      <p className="case-related-company">COMPANY NAME</p>
      <HybrMark className="case-related-mark" />
      <CaseButton className="is-read-more" href="/case-studies/one-liner">
        Read More
      </CaseButton>
    </article>
  );
}

function RelatedWork() {
  return (
    <section aria-labelledby="related-title" className="case-related" id="related">
      <div className="case-related-intro">
        <p>MORE WORK</p>
        <h2 id="related-title">Related Case Studies</h2>
        <span>Work that reflects how we think, collaborate, and deliver.</span>
      </div>
      <RelatedCard className="is-first" />
      <RelatedCard className="is-second" />
      <CaseButton className="is-view-all" href="/what-we-do/our-work">
        View All Case Studies
      </CaseButton>
    </section>
  );
}

function ServicesCta() {
  return (
    <section aria-labelledby="services-title" className="case-services">
      <span
        aria-hidden="true"
        className="case-services-image"
        style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
      />
      <div className="case-services-copy">
        <p>OUR SERVICES</p>
        <h2 id="services-title">Curious how we do it? Explore our services.</h2>
        <span>Discover how our services support ideas from start to finish.</span>
        <CaseButton className="is-services" href="/what-we-do/services">
          <span className="is-desktop-label">Our Services</span>
          <span className="is-mobile-label">Explore Services</span>
        </CaseButton>
      </div>
    </section>
  );
}

export default function CaseStudyClient({ initialMode = "sections" }: { initialMode?: ViewMode }) {
  const [mode, setMode] = useState<ViewMode>(initialMode);

  useEffect(() => {
    const syncLocationMode = () => {
      const params = new URLSearchParams(window.location.search);
      setMode(params.get("view") === "report" || window.location.hash === "#report" ? "report" : "sections");
    };

    syncLocationMode();
    window.addEventListener("hashchange", syncLocationMode);
    window.addEventListener("popstate", syncLocationMode);

    return () => {
      window.removeEventListener("hashchange", syncLocationMode);
      window.removeEventListener("popstate", syncLocationMode);
    };
  }, []);

  const setViewMode = (nextMode: ViewMode) => {
    setMode(nextMode);

    const url = new URL(window.location.href);
    if (nextMode === "report") {
      url.searchParams.set("view", "report");
      url.hash = "report";
    } else {
      url.searchParams.delete("view");
      url.hash = "sections";
    }

    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    window.scrollTo(0, 0);
  };

  return (
    <main className={`${styles.caseScope} case-page is-${mode}`}>
      <div className={`case-frame is-${mode}`}>
        <Header active="what" tone={mode === "report" ? "dark" : "default"} />

        {mode === "sections" ? <SearchControl /> : null}
        <HeroCard mode={mode} />

        {mode === "sections" ? (
          <CaseButton className="is-view-report" onClick={() => setViewMode("report")}>
            View as Single Page Report
          </CaseButton>
        ) : (
          <>
            <CaseButton className="is-read-sections is-top" onClick={() => setViewMode("sections")}>
              Read in Sections
            </CaseButton>
            <ReportSections />
            <CaseButton className="is-read-sections is-bottom" onClick={() => setViewMode("sections")}>
              Read in Sections
            </CaseButton>
          </>
        )}

        <RelatedWork />
        <ServicesCta />
      </div>

      <Footer />
    </main>
  );
}
