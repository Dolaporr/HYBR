import Link from "next/link";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../_components/marketing";
import styles from "./page.module.css";

const contentLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Our Products", href: "#products" },
  { label: "Our Impact", href: "#impact" },
  { label: "Our Team", href: "#team" },
];

const productBody = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus dolor id metus auctor tincidunt. Cras et gravida dolor. Morbi auctor nibh lacus. Nulla luctus, risus nec lobortis iaculis, ante est imperdiet augue, id mattis tellus sapien quis purus.",
  "Nullam faucibus, sapien id condimentum sagittis, justo urna rhoncus lacus, viverra lacinia nibh ex in neque.",
];

const products = [
  { key: "flywheel", name: "FLYWHEEL", cta: "Access FLYWHEEL", hasDesktopEmail: true },
  { key: "indx", name: "INDX", cta: "Access INDX", hasDesktopEmail: true },
  { key: "alpha", name: "ALPHA", cta: "Access ALPHA", hasDesktopEmail: false },
] as const;

function ButtonLink({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link className={`what-button ${className}`} href={href}>
      {children}
    </Link>
  );
}

function ContentDrop() {
  return (
    <aside aria-label="What We Do page contents" className="what-content-drop">
      <span
        aria-hidden="true"
        className="what-content-drop-media"
        style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
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

function ProductIcon({ type }: { type: string }) {
  if (type === "flywheel") {
    return (
      <svg aria-hidden="true" className="what-product-icon" fill="none" viewBox="0 0 96 96">
        <circle cx="48" cy="48" r="28" stroke="currentColor" strokeWidth="5" />
        <path d="M48 20C59 30 64 39 64 48C64 57 59 66 48 76C37 66 32 57 32 48C32 39 37 30 48 20Z" stroke="currentColor" strokeWidth="5" />
        <path d="M20 48H76M48 20V76" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
      </svg>
    );
  }

  if (type === "indx") {
    return (
      <svg aria-hidden="true" className="what-product-icon" fill="none" viewBox="0 0 96 96">
        <path d="M48 15L75 30V61L48 77L21 61V30L48 15Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="5" />
        <path d="M21 30L48 46L75 30M48 46V77M33 38L60 23M63 38L36 23" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="what-product-icon" fill="none" viewBox="0 0 120 96">
      <path d="M18 76C37 29 72 19 101 20C93 51 74 76 38 76H18Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="5" />
      <path d="M32 66C47 53 65 43 89 35" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
      <path d="M46 76C47 63 44 53 36 43" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
    </svg>
  );
}

function ProcessMap() {
  return (
    <div aria-hidden="true" className="what-process-map">
      <span className="what-process-word is-discover">Discover</span>
      <span className="what-process-word is-develop">Develop</span>
      <span className="what-process-word is-deploy">Deploy</span>
      <svg className="what-process-arrow is-first" fill="none" viewBox="0 0 128 136">
        <path d="M103 13C67 30 44 57 33 111" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
        <path d="M19 91L33 116L55 96" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </svg>
      <svg className="what-process-arrow is-second" fill="none" viewBox="0 0 104 112">
        <path d="M18 17C60 29 82 55 88 91" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
        <path d="M70 82L89 96L99 73" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </svg>
    </div>
  );
}

function CaseStudyCard({ kind }: { kind: "feature" | "tall" }) {
  const image = kind === "feature" ? figmaAssets.ourWorkFeature : figmaAssets.ourWorkTall;

  return (
    <article className={`what-case-card is-${kind}`}>
      <span
        aria-hidden="true"
        className="what-case-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="what-case-copy">
        <p>CASE STUDY</p>
        <h3>One Liner For Specific Case Study</h3>
        <span>A short, captivating statement about what this case study is about.</span>
      </div>
      <ButtonLink className="is-white is-read" href="/case-studies/one-liner">
        Read More
      </ButtonLink>
    </article>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className={`what-product-card is-${product.key}`}>
      <div className="what-product-brand">
        <ProductIcon type={product.key} />
        <div>
          <h3>{product.name}</h3>
          <Link href="/what-we-do/products">Learn More</Link>
        </div>
      </div>
      <div className="what-product-copy">
        <div>
          {productBody.map((paragraph) => (
            <p key={`${product.key}-${paragraph}`}>{paragraph}</p>
          ))}
        </div>
        <form className="what-product-actions">
          <input
            aria-label={`${product.name} email access`}
            className={product.hasDesktopEmail ? "" : "is-tablet-only"}
            placeholder="Insert Your Email"
            type="email"
          />
          <ButtonLink className="is-lime" href="/what-we-do/products">
            {product.cta}
          </ButtonLink>
        </form>
      </div>
    </article>
  );
}

function TeamStatement() {
  return (
    <>
      We are powered by a team that blends{" "}
      <span>strategy</span>, <span>creativity</span>, and <span>execution</span>.
    </>
  );
}

export default function WhatWeDoPage() {
  return (
    <main className={`${styles.whatScope} what-page`}>
      <div className="what-frame">
        <Header active="what" />

        <section aria-labelledby="what-title" className="what-hero">
          <h1 id="what-title">What We Do</h1>
          <p>Your shortcut from &lsquo;what if&rsquo; to &lsquo;what&rsquo;s next.&rsquo;</p>
        </section>

        <ContentDrop />

        <section aria-labelledby="services-title" className="what-services" id="services">
          <span
            aria-hidden="true"
            className="what-services-bg"
            style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
          />
          <div className="what-services-copy">
            <p>OUR SERVICES</p>
            <h2 id="services-title">
              We take you from understanding the problem to owning the market,
              all in one innovation pipeline.
            </h2>
            <ButtonLink className="is-glass" href="/what-we-do/services">
              Explore Services
            </ButtonLink>
          </div>
          <ProcessMap />
        </section>

        <section aria-label="Our work case studies" className="what-work" id="work">
          <CaseStudyCard kind="tall" />
          <CaseStudyCard kind="feature" />
          <div className="what-work-copy">
            <p>OUR WORK</p>
            <h2>One Liner To Lead User To Case Studies Page</h2>
            <span>
              A continuation of the one-liner above to drive users to visit
              &ldquo;Case Studies&rdquo;.
            </span>
            <ButtonLink href="/what-we-do/our-work">View Case Studies</ButtonLink>
          </div>
        </section>

        <section aria-labelledby="products-title" className="what-products" id="products">
          <span aria-hidden="true" className="what-product-orbit" />
          <div className="what-section-heading">
            <p>OUR PRODUCTS</p>
            <h2 id="products-title">Tools designed to make innovation feel effortless.</h2>
            <span>Helping you turn your best ideas into meaningful results.</span>
          </div>
          <div className="what-products-list">
            {products.map((product) => (
              <ProductCard key={product.key} product={product} />
            ))}
          </div>
          <ButtonLink className="what-products-button" href="/what-we-do/products">
            Explore All Products
          </ButtonLink>
        </section>

        <section aria-labelledby="impact-title" className="what-impact" id="impact">
          <div className="what-impact-heading">
            <p>OUR IMPACT</p>
            <h2 id="impact-title">We counted because it matters to us.</h2>
            <span>
              Every data point represents a life improved and a business transformed.
            </span>
          </div>
          <div className="what-impact-stats">
            <div className="is-countries">
              <strong>35+</strong>
              <span>COUNTRIES REACHED</span>
            </div>
            <div className="is-jobs">
              <strong>300K+</strong>
              <span>JOBS CREATED</span>
            </div>
            <div className="is-ventures">
              <strong>4000+</strong>
              <span>VENTURES IMPACTED</span>
            </div>
          </div>
          <ButtonLink className="what-impact-button is-clear" href="/what-we-do/our-impact">
            Learn More
          </ButtonLink>

          <section aria-labelledby="team-title" className="what-team" id="team">
            <div className="what-team-copy">
              <p>OUR TEAM</p>
              <h2 id="team-title"><TeamStatement /></h2>
              <span>
                If you&rsquo;re passionate about growth, creativity, and solving
                challenges that matter, this is the place for you &mdash; learn
                more about the team you could be a part of.
              </span>
            </div>
            <div
              aria-hidden="true"
              className="what-team-image"
              style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
            />
            <div className="what-team-actions">
              <ButtonLink className="is-clear" href="/who-we-are/our-team">
                Our Team
              </ButtonLink>
              <ButtonLink className="is-clear" href="/who-we-are/careers">
                Join Us
              </ButtonLink>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </main>
  );
}
