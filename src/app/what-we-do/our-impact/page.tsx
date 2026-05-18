import Link from "next/link";
import type { ReactNode } from "react";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../../_components/marketing";
import styles from "./impact.module.css";

const contentLinks = [
  { label: "HYBR's Impact", href: "#impact" },
  { label: "Countries Reached", href: "#countries" },
  { label: "Jobs Created", href: "#jobs" },
  { label: "Ventures Impacted", href: "#ventures" },
  { label: "Our Work", href: "#work" },
] as const;

function ImpactButton({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link className={`impact-button ${className}`} href={href}>
      {children}
    </Link>
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

function ContentDrop() {
  return (
    <aside aria-label="Our Impact page contents" className="impact-content-drop">
      <span
        aria-hidden="true"
        className="impact-content-drop-media"
        style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
      />
      <p>CONTENT</p>
      <nav>
        {contentLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

function Metric({
  body,
  button,
  className,
  id,
  label,
  value,
}: {
  body: string;
  button?: string;
  className: string;
  id: string;
  label: string;
  value: string;
}) {
  return (
    <section className={`impact-metric ${className}`} id={id}>
      <div className="impact-metric-text">
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
      <p>{body}</p>
      {button ? (
        <ImpactButton href="/what-we-do/our-work">
          {button}
        </ImpactButton>
      ) : null}
    </section>
  );
}

function TrustedGrid() {
  return (
    <div aria-hidden="true" className="impact-trusted-grid">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function CaseStudyCard({ className = "" }: { className?: string }) {
  return (
    <article className={`impact-case-card ${className}`}>
      <span
        aria-hidden="true"
        className="impact-case-image"
        style={{ backgroundImage: `url(${figmaAssets.ourWorkCard})` }}
      />
      <p className="impact-case-label">CASE STUDY</p>
      <h3>One Liner For Specific Case Study</h3>
      <p className="impact-case-body is-long">
        A captivating statement about what service was offered to the company.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        dignissim fringilla feugiat.
      </p>
      <p className="impact-case-body is-short">
        A short, captivating statement about what this case study is about.
      </p>
      <p className="impact-case-company">COMPANY NAME</p>
      <HybrMark className="impact-case-mark" />
      <ImpactButton className="is-read" href="/case-studies/one-liner">
        Read More
      </ImpactButton>
    </article>
  );
}

export default function OurImpactPage() {
  return (
    <main className={`${styles.impactScope} impact-page`}>
      <div className="impact-frame">
        <Header active="what" />

        <section aria-labelledby="impact-title" className="impact-hero">
          <h1 id="impact-title">Our Impact</h1>
          <p>How your ideas can bring a positive impact to your business.</p>
        </section>

        <ContentDrop />

        <span
          aria-hidden="true"
          className="impact-intro-image"
          style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
        />
        <section aria-labelledby="impact-intro-title" className="impact-intro-copy" id="impact">
          <h2 id="impact-intro-title">HYBR&rsquo;s Impact</h2>
          <div>
            <p>
              Making the right decisions for your business isn&rsquo;t always easy.
              Many organisations struggle to get it right. HYBR brings structure
              to the process, helping you turn business ideas into clear,
              informed decisions.
            </p>
            <p>
              With the right decisions in place, confidence follows. Your ideas
              will be tested, validated, and made ready to work in the real
              world, so you can deliver solutions that create real impact for
              your business.
            </p>
          </div>
        </section>

        <img alt="" className="impact-globe" src={figmaAssets.impactGlobe} />

        <Metric
          body="Helping organizations make confident decisions worldwide."
          button="View All Locations"
          className="is-countries"
          id="countries"
          label="COUNTRIES REACHED"
          value="35+"
        />

        <div aria-hidden="true" className="impact-blue-band" />
        <p className="impact-trusted-label">TRUSTED BY</p>
        <TrustedGrid />

        <Metric
          body="Our work creates job opportunities at every level."
          className="is-jobs"
          id="jobs"
          label="JOBS CREATED"
          value="300K+"
        />

        <CaseStudyCard className="is-feature" />

        <Metric
          body="We help businesses turn good ideas into great results."
          button="View Our Reach"
          className="is-ventures"
          id="ventures"
          label="VENTURES IMPACTED"
          value="4000+"
        />

        <section aria-labelledby="impact-work-title" className="impact-work-heading" id="work">
          <p>OUR WORK: CASE STUDIES</p>
          <h2 id="impact-work-title">Supporting Ideas From Start To Finish</h2>
          <span>See how we&rsquo;re working with people like you to change the world.</span>
        </section>

        <CaseStudyCard className="is-work-one" />
        <CaseStudyCard className="is-work-two" />
        <ImpactButton className="is-all" href="/what-we-do/our-work">
          All Case Studies
        </ImpactButton>
      </div>

      <Footer />
    </main>
  );
}
