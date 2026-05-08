import type { ReactNode } from "react";
import { figmaAssets, footerGroups, navigation } from "@/content/site";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

const assets = {
  hero: figmaAssets.heroHome,
  logo: figmaAssets.logoBlue,
  video: figmaAssets.video,
  play: figmaAssets.play,
  riskImage: figmaAssets.risk,
  whoImage: figmaAssets.people,
  testimonial: figmaAssets.testimonial,
  testimonialRing: figmaAssets.testimonialRing,
  news: figmaAssets.news,
  contact: figmaAssets.contact,
  caseStudy: "/home/case-study.png",
  caseStudyLogo: "/home/logo-case-study.svg",
  ourWorkFeature: "/home/our-work-feature-source.png",
  ourWorkTall: "/home/our-work-tall-source.png",
  footerLogo: figmaAssets.logoWhite,
  footerPattern: figmaAssets.footerPattern,
};

const trustedLogoStrip = "/logos/sliding-animation.svg";

const rotatingWords = ["ideas", "services", "markets", "products", "teams"];

const risks = [
  "Wasting time and budget on ideas customers don’t want",
  "Slow, fragmented decision-making",
  "Products that fail to scale",
  "Losing momentum — and market relevance",
];

const services = [
  {
    title: "Discover",
    first: "Applied Research and Strategy",
    second: "Market Acceleration",
    icon: "bag",
    tag: "Applied Research and Strategy",
    bgPosition: "center 32%",
  },
  {
    title: "Develop",
    first: "Prototyping, Product & Service Design",
    second: "Applied Research and Strategy",
    icon: "palette",
    tag: "Prototyping, Product & Service Design",
    bgPosition: "center 42%",
  },
  {
    title: "Deploy",
    first: "Prototyping, Product & Service Design",
    second: "Market Acceleration",
    icon: "trend",
    tag: "Market Acceleration",
    bgPosition: "center 52%",
  },
] as const;

const impact = [
  { value: "300K+", label: "Jobs Created" },
  { value: "35+", label: "Countries Reached" },
  { value: "4000+", label: "Ventures Impacted" },
];

const gainList = [
  "Clarity on what to build and why",
  "Alignment across teams and leadership",
  "Faster decisions and smarter experiments",
  "A scalable roadmap for growth",
  "Confidence in every innovation step",
];

function Button({
  children,
  href = "/contact",
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "dark" | "white" | "glass";
  className?: string;
}) {
  return (
    <a className={`hybr-button hybr-button--${variant} ${className}`} href={href}>
      {children}
    </a>
  );
}

function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`home-section-label text-sm font-semibold uppercase tracking-normal text-current md:text-[20px] ${className}`}>
      {children}
    </p>
  );
}

function ImagePanel({
  className = "",
  src = assets.whoImage,
  overlay = "linear-gradient(90deg, rgba(0,0,0,.2), rgba(0,0,0,.08))",
}: {
  className?: string;
  src?: string;
  overlay?: string;
}) {
  return (
    <div
      className={`overflow-hidden bg-black ${className}`}
      style={{
        backgroundImage: `${overlay}, url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    />
  );
}

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={className}
      src={assets.caseStudyLogo}
    />
  );
}

function InfoBadge() {
  return (
    <span className="home-info-badge" aria-hidden="true">
      i
    </span>
  );
}

function SocialIcon({
  kind,
}: {
  kind: "instagram" | "x" | "linkedin" | "youtube" | "facebook" | "medium" | "tiktok";
}) {
  if (kind === "instagram") {
    return (
      <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 32 32">
        <rect x="6" y="6" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="22.4" cy="9.6" r="1.6" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "x") {
    return (
      <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 32 32">
        <path d="M7 7L25 25" stroke="currentColor" strokeWidth="2.8" />
        <path d="M25 7L7 25" stroke="currentColor" strokeWidth="2.8" />
      </svg>
    );
  }

  if (kind === "linkedin") {
    return (
      <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 32 32">
        <rect x="6" y="6" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M11 14V22" stroke="currentColor" strokeWidth="2.4" />
        <path d="M16 22V17.5C16 15.8431 17.3431 14.5 19 14.5C20.6569 14.5 22 15.8431 22 17.5V22" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="11" cy="10.5" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "youtube") {
    return (
      <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 32 32">
        <rect x="4.5" y="8" width="23" height="16" rx="5" stroke="currentColor" strokeWidth="2.2" />
        <path d="M14 12.8L20.4 16L14 19.2V12.8Z" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "facebook") {
    return (
      <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2.2" />
        <path d="M17.5 26V16.8H20.4L20.9 13.4H17.5V11.2C17.5 10.2 17.8 9.5 19.2 9.5H21V6.5C20.1 6.4 19.4 6.4 18.6 6.4C16.1 6.4 14.4 7.9 14.4 10.7V13.4H11.6V16.8H14.4V26" fill="currentColor" />
      </svg>
    );
  }

  if (kind === "tiktok") {
    return (
      <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 32 32">
        <path d="M18.5 6C19 9.1 20.8 11 24 11.4V14.7C21.9 14.7 20.1 14.1 18.5 12.9V20.2C18.5 23.8 16.2 26 12.9 26C9.9 26 7.7 24 7.7 21.1C7.7 18.1 10.1 16 13.5 16C14.1 16 14.6 16.1 15.1 16.2V19.6C14.6 19.4 14.1 19.3 13.5 19.3C12.1 19.3 11.1 20 11.1 21.1C11.1 22.2 11.9 22.9 13.1 22.9C14.4 22.9 15.2 22.1 15.2 20.5V6H18.5Z" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 32 32">
      <circle cx="10" cy="16" r="4" fill="currentColor" />
      <ellipse cx="18.5" cy="16" rx="3.5" ry="8" fill="currentColor" opacity="0.85" />
      <ellipse cx="24.5" cy="16" rx="2.5" ry="6" fill="currentColor" opacity="0.72" />
    </svg>
  );
}

function ServiceGlyph({ kind }: { kind: "bag" | "palette" | "trend" }) {
  if (kind === "bag") {
    return (
      <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 24 24">
        <path d="M6.5 8.5H17.5V19.5H6.5V8.5Z" stroke="currentColor" strokeWidth="2" />
        <path
          d="M9 8.5V6.75C9 5.23122 10.2312 4 11.75 4H12.25C13.7688 4 15 5.23122 15 6.75V8.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (kind === "palette") {
    return (
      <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 4C7.58172 4 4 7.35786 4 11.5C4 15.6421 7.58172 19 12 19H13.8C14.9046 19 15.8 18.1046 15.8 17C15.8 16.4091 15.542 15.8504 15.0941 15.4686C14.7608 15.1846 14.6 14.787 14.6 14.3936C14.6 13.5648 15.2712 12.8936 16.1 12.8936H17C18.6569 12.8936 20 11.5504 20 9.89355C20 6.63988 16.4183 4 12 4Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <circle cx="8" cy="10" r="1" fill="currentColor" />
        <circle cx="11" cy="8" r="1" fill="currentColor" />
        <circle cx="14.5" cy="9" r="1" fill="currentColor" />
        <circle cx="9.5" cy="13.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 24 24">
      <path d="M5 17L10 12L13.5 15.5L19 10" stroke="currentColor" strokeWidth="2" />
      <path d="M14 10H19V15" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="homepage-live min-h-screen overflow-hidden bg-white text-black">
      <header className="home-header absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex min-h-28 max-w-[1200px] items-center justify-between gap-5 px-6 py-6 md:h-[152px] md:py-0 lg:px-0">
          <a
            className="homepage-logo block overflow-hidden"
            href="#"
          >
            <img alt="HYBR" className="h-full w-full object-contain" src={assets.logo} />
          </a>
          <nav className="homepage-nav">
            {navigation.map((item) => (
              <a className="whitespace-nowrap text-center md:text-right" key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <a className="homepage-talk-button" href="/contact">
              Let&apos;s Talk
            </a>
          </nav>
          <button
            aria-label="Open navigation"
            className="homepage-menu-button"
            type="button"
          >
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path
                d="M3 6H21M3 12H21M3 18H21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.4"
              />
            </svg>
          </button>
        </div>
      </header>

      <section
        className="homepage-hero relative min-h-[720px] px-6 pt-48 text-white md:min-h-[804px] md:pt-[205px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.52), rgba(0,0,0,.62) 58%, rgba(0,0,0,.72)), url(${assets.hero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[1196px]">
            <h1 className="home-hero-title font-display text-[48px] font-medium leading-[1.08] min-[390px]:text-[54px] sm:text-[72px] md:text-[80px]">
              Build{" "}
              <span className="hero-rotator" aria-label="ideas services markets products teams">
                {rotatingWords.map((word) => (
                  <span key={word}>{word}</span>
                ))}
              </span>
              <br />
              faster, smarter
            </h1>
            <p className="homepage-hero-subtitle mt-4 max-w-[967px] text-lg font-medium leading-normal md:text-2xl">
              <span className="homepage-hero-subtitle__full">
                Whether you&apos;re launching something new, reimagining what exists, or
                scaling what works - we help you find clarity, test ideas, and build
                with purpose.
              </span>
              <span className="homepage-hero-subtitle__tablet">
                A Tribe of Dynamic Doers - Building What&apos;s Next.
              </span>
            </p>
          </div>
          <div className="trusted-by-block mt-24 md:mt-0">
            <p className="trusted-by-label text-xs font-semibold uppercase tracking-normal">
              Trusted By
            </p>
            <div className="trusted-marquee mt-9">
              <div className="trusted-marquee-track">
                {[0, 1, 2].map((item) => (
                  <img
                    alt={item === 0 ? "Trusted by partner logos" : ""}
                    aria-hidden={item === 0 ? undefined : true}
                    className="trusted-logo-strip"
                    key={item}
                    src={trustedLogoStrip}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="home-transition-wrap">
        <section className="home-video-section relative px-6 py-16 md:py-24">
          <img
            alt="Featured HYBR video"
            className="home-video-card"
            src="/Webinar Card - horizontal tab.svg"
          />
        </section>

        <img alt="" aria-hidden="true" className="home-green-inline" src="/green inline horizontal tab.svg" />

        <section className="home-risk-section relative bg-black px-6 py-20 text-white md:py-28">
          <img
            alt=""
            aria-hidden="true"
            className="home-risk-pattern absolute inset-0"
            src="/background section 3.svg"
          />
          <div className="home-risk-grid mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[1fr_667px] lg:items-center">
            <div className="lg:col-span-2 lg:mx-auto lg:max-w-[996px] lg:text-center">
              <h2 className="font-display text-4xl font-medium md:text-5xl">
                Innovation Is Slowed By Guesswork
              </h2>
              <p className="mt-4 text-xl leading-relaxed md:text-2xl">
                As a leader, you face one common enemy:{" "}
                <a className="home-risk-link" href="/resources/innovation-guide">
                  innovation by guesswork
                </a>
                .
                Fragmented insights, slow decisions, siloed teams, and no clear
                direction. Yet you&apos;re still expected to deliver the next big win,
                without a roadmap.
              </p>
            </div>
            <div>
              <h3 className="font-display text-4xl font-medium md:text-5xl">You Risk...</h3>
              <ul className="mt-8 space-y-5 text-xl md:text-2xl">
                {risks.map((risk) => (
                  <li key={risk} className="flex gap-4">
                    <span className="risk-marker">x</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ImagePanel
              className="home-droplet-right h-[260px] sm:h-[336px]"
              overlay="linear-gradient(120deg, rgba(141,197,64,.26), rgba(113,32,128,.28))"
              src={assets.riskImage}
            />
          </div>
        </section>
      </div>

      <div className="home-connector-zone relative">
        <img
          alt=""
          aria-hidden="true"
          className="home-inline-connector"
          src="/home/inline-connector.svg"
        />

        <section id="who-we-are" className="home-band home-who-band relative px-6 py-24">
          <div className="home-panel mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-black p-8 text-white md:p-12">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <SectionLabel className="text-[#8dc540]">Who We Are</SectionLabel>
                <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
                  A Purpose-Led <br />
                  Innovation Agency
                </h2>
                <p className="mt-4 max-w-[420px] text-lg leading-relaxed md:text-xl">
                  At HYBR, we don&apos;t just advise - we help you navigate, build, and
                  scale. With proven frameworks and deep ecosystem access, we guide
                  teams to clarity and accelerate the work that unlocks your next big win.
                </p>
              </div>
              <div className="lg:pt-2">
                <h3 className="font-display text-2xl font-medium md:text-[30px]">
                  With HYBR, you get:
                </h3>
                <ul className="mt-5 space-y-3 text-[15px] leading-[1.4] md:text-[20px]">
                  <li>
                    <span className="mr-2 text-[#8dc540]">&#10003;</span>
                    A trusted guide who understands your innovation challenges
                  </li>
                  <li>
                    <span className="mr-2 text-[#8dc540]">&#10003;</span>
                    A partner who brings clarity, discipline, and purpose
                  </li>
                  <li>
                    <span className="mr-2 text-[#8dc540]">&#10003;</span>
                    A proven system to cut through the noise and deliver results faster
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative mt-8">
              <ImagePanel
                className="h-[220px] rounded-[18px] md:h-[245px]"
                overlay="linear-gradient(90deg, rgba(25,106,180,.24), rgba(0,0,0,.12))"
                src={assets.whoImage}
              />
              <div className="absolute bottom-4 right-4">
                <Button href="/who-we-are/our-team" variant="glass">
                  Meet The Team
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-do" className="home-band home-what-band relative px-6 py-32">
          <div className="home-services-wrap mx-auto">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="home-section-title mt-2 max-w-[640px] font-display font-medium leading-tight">
              We Help You Build Innovation That Works - and Works Fast
            </h2>
            <div className="home-services-grid mt-8 grid gap-5 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="home-service-card rounded-3xl text-white"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.06), rgba(0,0,0,.74) 76%), url(${assets.whoImage})`,
                    backgroundPosition: service.bgPosition,
                    backgroundSize: "cover",
                  }}
                >
                  <InfoBadge />
                  <span className="home-service-glyph">
                    <ServiceGlyph kind={service.icon} />
                  </span>
                  <div className="home-service-body">
                    <h3 className="font-display text-[32px] font-medium leading-none">
                      {service.title}
                    </h3>
                    <p className="home-service-pill">{service.tag}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="home-services-cta mt-8 text-center">
              <Button href="/what-we-do/services" variant="outline">
                <span className="home-services-cta-full">Explore Our Services</span>
                <span className="home-services-cta-mobile">Explore Services</span>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <section className="home-band home-impact-section px-6 py-24 text-center">
        <div className="home-impact-wrap mx-auto">
          <SectionLabel>Our Impact</SectionLabel>
          <h2 className="home-impact-headline mx-auto mt-2 font-display font-medium leading-tight">
            No jargon, no wasted experiments, no building in the dark - just
            clarity, alignment, and momentum.
          </h2>
          <div className="home-impact-grid mt-12 grid gap-6 md:grid-cols-3">
            {impact.map((item) => (
              <div key={item.label} className="home-impact-stat">
                <p className="home-impact-value font-extrabold">{item.value}</p>
                <p className="home-impact-label mt-2 text-sm font-semibold uppercase">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/what-we-do/our-impact" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="home-band home-work-section px-6 py-28">
        <div className="home-work-wrap mx-auto grid">
          <div className="home-work-copy">
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="home-work-title mt-2 font-display font-medium leading-tight">
              Trusted by Innovators Across Industries
            </h2>
            <p className="home-work-body mt-4 text-base leading-relaxed md:text-lg">
              We&apos;ve helped governments, corporations, startups, and ecosystem
              builders move from insight to impact - faster and more confidently.
            </p>
          </div>
          <div className="home-work-cta">
            <Button href="/what-we-do/our-work" variant="outline">
              More Case Studies
            </Button>
          </div>
          <article
            className="home-case-feature overflow-hidden rounded-[14px] text-white"
          >
            <img alt="" aria-hidden="true" className="home-case-bg home-case-bg--feature" src={assets.ourWorkFeature} />
            <BrandMark className="home-case-mark" />
            <div className="home-case-content">
              <p className="home-case-kicker">CASE STUDY</p>
              <h3 className="text-[21px] font-medium leading-[1.1]">
                One Liner For Specific Case Study
              </h3>
              <p className="mt-3 max-w-[305px] text-[11px] font-semibold leading-[1.45] text-white/82">
                A captivating statement about what service was offered to the
                company. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-5 flex items-end justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] md:text-[20px]">
                  Company Name
                </span>
                <a className="home-inline-cta" href="/case-studies/one-liner">
                  Read More
                </a>
              </div>
            </div>
          </article>
          <article
            className="home-case-tall overflow-hidden rounded-[14px] text-white"
          >
            <img alt="" aria-hidden="true" className="home-case-bg home-case-bg--tall" src={assets.ourWorkTall} />
            <div className="home-case-tall-top">
              <BrandMark className="home-case-mark home-case-mark--small" />
              <a className="home-inline-cta home-inline-cta--light" href="/case-studies/one-liner">
                Read More
              </a>
            </div>
            <div className="home-case-tall-copy">
              <p className="home-case-kicker">CASE STUDY</p>
              <h3 className="text-[20px] font-medium leading-[1.12]">
                One Liner For Specific Case Study
              </h3>
              <p className="mt-3 max-w-[190px] text-[11px] font-semibold leading-[1.4] text-white/82">
                A captivating statement about what service was offered to the
                company. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="home-band home-testimonials-section px-6 py-24">
        <div className="home-testimonials-wrap mx-auto text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="home-testimonials-title mt-2 font-display font-medium">
            Hear from Our Clients.
          </h2>
          <p className="home-testimonials-copy mx-auto mt-4">
            Captivating supporting statement that introduces the
            &quot;testimonial&quot; section, with text or video reviews from HYBR&apos;s
            clientele.
          </p>
          <TestimonialsCarousel />
          <div className="mt-5">
            <Button href="/contact" variant="outline">
              Book A Strategy Call
            </Button>
          </div>
        </div>
      </section>

      <section id="insights" className="home-band home-insights-section px-6 py-24">
        <div className="home-insights-wrap mx-auto grid gap-4 lg:grid-cols-[289px_406px] lg:justify-center">
          <article
            className="home-news-card relative overflow-hidden rounded-[14px] bg-black p-5 text-white"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.56)), url(${assets.news})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex justify-end">
              <Button href="/insights/news/specific-news" variant="white">
                Read More
              </Button>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <SectionLabel>News</SectionLabel>
              <h3 className="mt-3 text-[22px] font-medium leading-[1.05]">
                One Liner For Specific News Update
              </h3>
              <p className="mt-3 max-w-[215px] text-[11px] leading-[1.4]">
                A short, captivating statement about what this news update covers.
              </p>
            </div>
          </article>
          <div className="home-insights-stack">
            <article
              className="home-webinar-card relative overflow-hidden rounded-[14px] bg-black p-5 text-white"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.62)), url(${assets.video})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <SectionLabel>Webinar</SectionLabel>
              <img alt="" className="absolute right-5 top-5 size-8 rotate-90" src={assets.play} />
              <h3 className="mt-18 max-w-[300px] text-[22px] font-medium leading-[1.06]">
                One Liner For Specific Webinar
              </h3>
              <p className="mt-3 text-[11px] font-semibold">Jedidiah Akpata & Charles Ojei</p>
              <p className="text-[11px] font-semibold">November 2023</p>
              <p className="absolute bottom-5 right-5 text-[11px] font-semibold">01:40:35</p>
            </article>
            <div className="home-insights-copy">
              <SectionLabel>Insights</SectionLabel>
              <h2 className="mt-2 font-display font-medium leading-tight">
                Connect with our latest thinking.
              </h2>
              <div className="mt-5">
                <Button href="/insights" variant="outline">
                  Our Insights
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-band home-gain-section px-6 py-24">
        <div className="home-gain-wrap mx-auto grid gap-10 lg:grid-cols-[384px_1fr] lg:items-center">
          <ImagePanel
            className="home-droplet-left home-gain-image h-[260px] sm:h-[336px]"
            overlay="linear-gradient(90deg, rgba(25,106,180,.2), rgba(0,0,0,.1))"
            src={assets.whoImage}
          />
          <div className="home-gain-copy">
            <h2 className="font-display text-[28px] font-medium leading-tight">
              With HYBR, You Gain...
            </h2>
            <ul className="home-gain-list mt-4 space-y-1">
              {gainList.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg aria-hidden="true" className="mt-1 size-5 shrink-0 text-black" fill="none" viewBox="0 0 20 20">
                    <path d="M4 10L8.5 14.5L16 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="home-gain-close mt-5">
              You lead with vision.
              <br />
              We help you deliver with precision.
            </p>
          </div>
        </div>
      </section>

      <section className="home-band home-cta-section px-6 py-16 text-center">
        <div className="home-cta-wrap mx-auto">
          <h2 className="font-display text-[26px] font-medium md:text-[28px]">
            Ready to Build What&apos;s Next?
          </h2>
          <p className="home-cta-copy mt-2">
            Innovation deserves purpose, discipline, and momentum. We bring all three.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <Button variant="outline">Book a Strategy Call</Button>
            <Button href="/resources/innovation-guide" variant="outline">
              Download Our Innovation Guide
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="home-band home-contact-section px-6 py-24">
        <div className="home-contact-shell mx-auto grid max-w-[1200px] overflow-hidden rounded-3xl bg-black text-white lg:grid-cols-2">
          <div
            className="min-h-[380px] bg-cover bg-center p-6 md:p-16 lg:min-h-0"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.22), rgba(0,0,0,.18)), url(${assets.contact})`,
            }}
          >
            <h2 className="font-display text-4xl font-medium md:text-5xl">
              Build Innovation that Works, with Us
            </h2>
            <p className="mt-6 max-w-[461px] font-medium text-xl leading-relaxed">
              Supporting lead generator body text to encourage users to book a strategy
              call.
            </p>
          </div>
          <form className="home-contact-form space-y-6 bg-black p-6 md:space-y-8 md:p-16">
            <input className="field" placeholder="Insert Your Name" />
            <input className="field" placeholder="Insert Your Email" type="email" />
            <textarea
              className="field min-h-40 resize-none"
              placeholder="What would you like us to know?"
            />
            <button className="home-submit-button min-h-14 w-full rounded-full bg-white px-8 text-lg font-medium text-black transition hover:-translate-y-0.5">
              Submit
            </button>
          </form>
        </div>
      </section>

      <footer className="home-footer bg-black px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <img
              alt=""
              className="pointer-events-none absolute -bottom-44 -right-64 hidden h-[390px] w-[390px] opacity-50 lg:block"
              src={assets.footerPattern}
            />
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold uppercase">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}-${link.href}`}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-bold uppercase">Follow us</h3>
              <div className="mt-4 flex flex-wrap gap-4 text-white">
                <SocialIcon kind="instagram" />
                <SocialIcon kind="linkedin" />
                <SocialIcon kind="x" />
                <SocialIcon kind="youtube" />
                <SocialIcon kind="facebook" />
                <SocialIcon kind="medium" />
                <SocialIcon kind="tiktok" />
              </div>
              <div className="mt-8">
                <Button variant="white">Let&apos;s Talk</Button>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-6 text-sm uppercase md:mt-20 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-5 md:gap-8">
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>
            <img alt="HYBR" className="h-10 w-[128px] object-contain" src={assets.footerLogo} />
            <span>&copy; 2025 HYBR GROUP</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
