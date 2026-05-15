import Link from "next/link";
import type { ReactNode } from "react";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../../_components/marketing";
import styles from "./page.module.css";

const contentLinks = [
  { label: "HYBR's Impact", href: "/what-we-do/our-impact" },
  { label: "Countries Reached", href: "/what-we-do/our-impact#countries" },
  { label: "Jobs Created", href: "/what-we-do/our-impact#jobs" },
  { label: "Ventures Impacted", href: "/what-we-do/our-impact#ventures" },
  { label: "Our Work", href: "/what-we-do/our-work" },
];

const services = [
  {
    key: "discover",
    title: "Discover",
    body: "We help you discover what matters most. Using applied research, data and analytics, innovation sourcing, and value chain diagnostics, we reveal insights that guide confident decisions and unlock real value.",
    tags: [
      "Applied Research",
      "Value Chain Diagnostics",
      "Innovation Sourcing",
      "Data & Analytics",
    ],
  },
  {
    key: "develop",
    title: "Develop",
    body: "Where insight becomes action. Through product and service innovation, experience design, fast prototyping, and field experiments, concepts evolve into solutions that work in practice.",
    tags: [
      "Product & Service Innovation",
      "User Experience & Interface Design",
      "Rapid Prototyping",
      "Pilot & Field Experiments",
    ],
  },
  {
    key: "deploy",
    title: "Deploy",
    body: "Your solutions are ready for the real world. From go-to-market strategy and venture building to scaling execution and impact assessment, everything is focused on helping you launch with confidence and grow with purpose.",
    tags: [
      "Go-To Market Strategy",
      "Venture Building",
      "Market Execution and Scaling",
      "Impact Assessment",
    ],
  },
] as const;

function ButtonLink({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link className={`services-button ${className}`} href={href}>
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
    <aside aria-label="Our Services page contents" className="services-content-drop">
      <span
        aria-hidden="true"
        className="services-content-drop-media"
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

function ProcessMap() {
  return (
    <div aria-hidden="true" className="services-process-map">
      <span className="services-process-word is-discover">Discover</span>
      <span className="services-process-word is-develop">Develop</span>
      <span className="services-process-word is-deploy">Deploy</span>
      <svg className="services-process-arrow is-first" fill="none" viewBox="0 0 128 136">
        <path d="M103 13C67 30 44 57 33 111" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
        <path d="M19 91L33 116L55 96" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </svg>
      <svg className="services-process-arrow is-second" fill="none" viewBox="0 0 104 112">
        <path d="M18 17C60 29 82 55 88 91" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
        <path d="M70 82L89 96L99 73" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </svg>
    </div>
  );
}

function CaseStudyCard() {
  return (
    <article className="services-case-card">
      <span
        aria-hidden="true"
        className="services-case-image"
        style={{ backgroundImage: `url(${figmaAssets.servicesCaseStudy})` }}
      />
      <div className="services-case-company">
        <HybrMark className="services-case-mark" />
        <h3>COMPANY NAME</h3>
      </div>
      <p className="services-case-statement">
        A captivating statement about what service was offered to the company.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        dignissim fringilla feugiat.
      </p>
      <p className="services-case-label">CASE STUDY</p>
      <ButtonLink className="is-read" href="/case-studies/one-liner">
        Read More
      </ButtonLink>
    </article>
  );
}

function ServiceSection({ service }: { service: (typeof services)[number] }) {
  return (
    <section className={`services-service is-${service.key}`} id={service.key}>
      <div className="services-service-copy">
        <h2>{service.title}</h2>
        <p>{service.body}</p>
      </div>
      <div className="services-tags">
        {service.tags.map((tag) => (
          <span key={`${service.key}-${tag}`}>{tag}</span>
        ))}
      </div>
      <CaseStudyCard />
    </section>
  );
}

function ArrowButton({ direction }: { direction: "left" | "right" }) {
  return (
    <button
      aria-label={`${direction === "left" ? "Previous" : "Next"} testimonial`}
      className={`services-carousel-arrow is-${direction}`}
      type="button"
    >
      <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
        {direction === "left" ? (
          <path d="M39 18L25 32L39 46" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        ) : (
          <path d="M25 18L39 32L25 46" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        )}
      </svg>
    </button>
  );
}

function CarouselDots() {
  return (
    <div aria-hidden="true" className="services-carousel-dots">
      <span />
      <span className="is-active" />
      <span />
    </div>
  );
}

function TestimonialCard() {
  return (
    <section aria-label="Client testimonial carousel" className="services-testimonial-card">
      <span
        aria-hidden="true"
        className="services-testimonial-bg"
        style={{ backgroundImage: `url(${figmaAssets.servicesTestimonialBg})` }}
      />
      <div className="services-testimonial-inner">
        <div className="services-testimonial-avatar">
          <span />
          <img alt="" src={figmaAssets.servicesTestimonialAvatar} />
        </div>
        <div className="services-testimonial-copy">
          <p>
            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim fringilla feugiat. Praesent sed condimentum nulla.
            Praesent lacinia eleifend turpis, sit amet dignissim massa accumsan
            in.&rdquo;
          </p>
          <div>
            <strong>FirstName LastName</strong>
            <span>Title/Role | Location</span>
          </div>
        </div>
      </div>
      <ArrowButton direction="left" />
      <ArrowButton direction="right" />
      <CarouselDots />
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className={`${styles.servicesScope} services-page`}>
      <div className="services-frame">
        <Header active="what" />

        <section aria-labelledby="services-title" className="services-hero">
          <h1 id="services-title">Our Services</h1>
          <p>Built to attain your goals — find the service that fits your next step.</p>
        </section>

        <ContentDrop />

        <section aria-label="Discover develop deploy process" className="services-process">
          <span
            aria-hidden="true"
            className="services-process-bg"
            style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
          />
          <ProcessMap />
        </section>

        {services.map((service) => (
          <ServiceSection key={service.key} service={service} />
        ))}

        <ButtonLink className="services-book-button" href="/contact">
          Book A Meeting
        </ButtonLink>

        <section aria-labelledby="services-testimonials-title" className="services-testimonials-heading">
          <p>TESTIMONIALS</p>
          <h2 id="services-testimonials-title">What our clients say about working with us.</h2>
          <span>These testimonials reflect the trust and confidence that come from our partnerships.</span>
        </section>

        <TestimonialCard />

        <ButtonLink className="services-talk-button" href="/contact">
          Let&apos;s Talk
        </ButtonLink>
      </div>

      <Footer />
    </main>
  );
}
