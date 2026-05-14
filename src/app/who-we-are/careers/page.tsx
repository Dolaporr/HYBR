import Link from "next/link";
import type { ReactNode } from "react";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../../_components/marketing";
import styles from "./page.module.css";

const contentLinks = [
  { label: "Working at HYBR", href: "#working" },
  { label: "Why Join", href: "#why" },
  { label: "Team Testimonials", href: "#testimonials" },
  { label: "Benefits", href: "#benefits" },
  { label: "Innovation Fellowship", href: "#fellowship" },
  { label: "Internship Program", href: "#internship" },
  { label: "Open Roles", href: "#roles" },
  { label: "Newsletter", href: "#newsletter" },
];

const whyCards = [
  {
    className: "is-purpose",
    icon: "bag",
    title: "Work with Purpose",
    body: "Every project is an opportunity to solve meaningful problems and contribute to the future of work, leadership, and innovation.",
  },
  {
    className: "is-curiosity",
    icon: "palette",
    title: "A Culture Built on Curiosity & Creativity",
    body: "We believe in experimentation, questioning assumptions, and exploring new ways to solve problems.",
  },
  {
    className: "is-growth",
    icon: "trend",
    title: "Grow Faster Than You Thought Possible",
    body: "Evolve as a creator and professional. You'll work on challenges that accelerate your growth, from ambitious projects to cross-collaboration.",
  },
  {
    className: "is-boring",
    icon: "mask",
    title: "We're Definitely not Boring",
    body: "We work hard, laugh often, and support one another. You'll join a team that values empathy, openness, and genuine human connection - a team where your voice matters and your contributions are valued.",
  },
];

const benefitIcons = ["clock", "calendar", "certificate", "cursor", "heart", "coins", "globe"];

const roles = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  title: "Name of Position/Role",
  meta: "Tier | Department | Location",
}));

function FigmaIcon({ type, className = "" }: { type: string; className?: string }) {
  const common = {
    className,
    fill: "none",
    viewBox: "0 0 80 80",
    "aria-hidden": true,
  };

  if (type === "bag") {
    return (
      <svg {...common}>
        <path d="M25 30V24C25 18.5 29.5 14 35 14H45C50.5 14 55 18.5 55 24V30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M18 30H62V60C62 64.4 58.4 68 54 68H26C21.6 68 18 64.4 18 60V30Z" stroke="currentColor" strokeWidth="5" />
        <path d="M18 42H62" stroke="currentColor" strokeWidth="5" />
      </svg>
    );
  }

  if (type === "palette") {
    return (
      <svg {...common}>
        <path d="M40 13C24.5 13 12 24.3 12 38.2C12 51.2 22.6 62 36.2 62H42C45.5 62 48 59.3 48 56.2C48 54.7 47.5 53.3 46.6 52.2C45.9 51.3 45.8 50.1 46.4 49.1C47 48.1 48 47.5 49.2 47.5H53.5C62 47.5 68 40.9 68 33.2C68 22 55.6 13 40 13Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
        <circle cx="27" cy="35" r="3" fill="currentColor" />
        <circle cx="36" cy="27" r="3" fill="currentColor" />
        <circle cx="48" cy="27" r="3" fill="currentColor" />
        <circle cx="55" cy="37" r="3" fill="currentColor" />
      </svg>
    );
  }

  if (type === "trend") {
    return (
      <svg {...common}>
        <path d="M14 56L32 38L44 50L66 28" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 28H66V44" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "mask") {
    return (
      <svg {...common}>
        <path d="M15 25C25 18 34 18 40 25C46 18 55 18 65 25V42C65 55 55 65 44 65C38 65 33 62.2 30 58C27 62.2 22 65 16 65C15.3 65 15 64.7 15 64V25Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
        <path d="M25 40H34M46 40H55M22 51C25 54 29 55 34 54M46 54C51 55 55 54 58 51" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg {...common}>
        <circle cx="37" cy="38" r="22" stroke="currentColor" strokeWidth="5" />
        <path d="M37 26V40L47 47" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="58" cy="56" r="10" fill="#ffffff" stroke="currentColor" strokeWidth="5" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg {...common}>
        <path d="M19 20H61C64.3 20 67 22.7 67 26V61C67 64.3 64.3 67 61 67H19C15.7 67 13 64.3 13 61V26C13 22.7 15.7 20 19 20Z" stroke="currentColor" strokeWidth="5" />
        <path d="M26 13V27M54 13V27M13 35H67" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <circle cx="29" cy="47" r="3" fill="currentColor" />
        <circle cx="40" cy="47" r="3" fill="currentColor" />
        <circle cx="51" cy="47" r="3" fill="currentColor" />
      </svg>
    );
  }

  if (type === "certificate") {
    return (
      <svg {...common}>
        <path d="M18 17H62V56H18V17Z" stroke="currentColor" strokeWidth="5" />
        <path d="M27 29H53M27 40H45" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M36 56L29 69L40 64L51 69L44 56" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "cursor") {
    return (
      <svg {...common}>
        <path d="M20 14L58 52L43 55L35 70L20 14Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
        <path d="M46 46L62 62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg {...common}>
        <path d="M17 39C17 29 25 22 34 27C37 28.7 39 31.6 40 34C41 31.6 43 28.7 46 27C55 22 63 29 63 39C63 52 46 62 40 67C34 62 17 52 17 39Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
        <path d="M13 58H27L37 66H51" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "coins") {
    return (
      <svg {...common}>
        <ellipse cx="40" cy="24" rx="21" ry="10" stroke="currentColor" strokeWidth="5" />
        <path d="M19 24V48C19 53.5 28.4 58 40 58C51.6 58 61 53.5 61 48V24M19 36C19 41.5 28.4 46 40 46C51.6 46 61 41.5 61 36" stroke="currentColor" strokeWidth="5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="40" cy="40" r="27" stroke="currentColor" strokeWidth="5" />
      <path d="M13 40H67M40 13C48 21 52 30 52 40C52 50 48 59 40 67C32 59 28 50 28 40C28 30 32 21 40 13Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
    </svg>
  );
}

function ContentDrop() {
  return (
    <aside aria-label="Careers page contents" className="careers-content-drop">
      <span
        aria-hidden="true"
        className="careers-content-drop-media"
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

function ImagePill({ className = "", overlay = false }: { className?: string; overlay?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`careers-image-pill ${overlay ? "has-overlay" : ""} ${className}`}
      style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
    />
  );
}

function WhyCard({ card }: { card: (typeof whyCards)[number] }) {
  return (
    <article className={`careers-why-card ${card.className}`}>
      <div>
        <FigmaIcon className="careers-card-icon" type={card.icon} />
        <h3>{card.title}</h3>
      </div>
      <p>{card.body}</p>
    </article>
  );
}

function CultureVisual() {
  return (
    <div
      aria-hidden="true"
      className="careers-culture-visual"
      style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
    >
      <span className="careers-play-mark" />
      <img alt="" src={figmaAssets.logoWhite} />
    </div>
  );
}

function TestimonialCard() {
  return (
    <section aria-label="Team testimonial carousel" className="careers-testimonial-card">
      <span
        aria-hidden="true"
        className="careers-testimonial-bg"
        style={{ backgroundImage: `url(${figmaAssets.figmaBuilding})` }}
      />
      <div className="careers-testimonial-inner">
        <div className="careers-testimonial-avatar">
          <span />
          <img alt="" src={figmaAssets.figmaTeamPortrait} />
        </div>
        <div className="careers-testimonial-copy">
          <p>
            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim fringilla feugiat. Praesent sed condimentum nulla. Praesent
            lacinia eleifend turpis, sit amet dignissim massa accumsan in.&rdquo;
          </p>
          <div>
            <strong>FirstName LastName</strong>
            <span>Title/Role | Location</span>
          </div>
        </div>
      </div>
      <button aria-label="Previous testimonial" className="careers-carousel-arrow is-left" type="button">
        <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
          <path d="M39 18L25 32L39 46" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </svg>
      </button>
      <button aria-label="Next testimonial" className="careers-carousel-arrow is-right" type="button">
        <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
          <path d="M25 18L39 32L25 46" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </svg>
      </button>
      <div aria-hidden="true" className="careers-carousel-dots">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <div aria-label="Benefits of working with HYBR" className="careers-benefits-grid">
      {benefitIcons.map((icon, index) => (
        <article className="careers-benefit" key={`${icon}-${index}`}>
          <FigmaIcon className="careers-benefit-icon" type={icon} />
          <h3>Benefit Name</h3>
          <p>Brief description of benefit</p>
        </article>
      ))}
    </div>
  );
}

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
    <Link className={`careers-button ${className}`} href={href}>
      {children}
    </Link>
  );
}

function InternshipProgram() {
  return (
    <section
      aria-labelledby="careers-internship-title"
      className="careers-internship"
      id="internship"
      style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
    >
      <p className="careers-internship-partner">IN PARTNERSHIP WITH 7EDU IMPACT ACADEMY</p>
      <div>
        <h2 id="careers-internship-title">Join the 2026 HYBR internship program.</h2>
        <p>
          Through hands-on projects, mentorship, and collaboration, the HYBR
          Industry Shadowing Program gives bright young talents the chance to
          build new skills, gain practical experience, and contribute to real
          industry challenges with guidance from seasoned experts.
        </p>
        <ButtonLink className="is-white" href="/contact">Learn More</ButtonLink>
      </div>
      <p className="careers-internship-alpha">ALPHA</p>
    </section>
  );
}

function Roles() {
  return (
    <div className="careers-roles-list">
      {roles.map((role) => (
        <article className="careers-role" key={role.id}>
          <div>
            <h3>{role.title}</h3>
            <p>{role.meta}</p>
          </div>
          <ButtonLink href="/contact">Apply Now</ButtonLink>
        </article>
      ))}
    </div>
  );
}

function NewsletterCard() {
  return (
    <section
      aria-labelledby="careers-newsletter-title"
      className="careers-newsletter"
      id="newsletter"
      style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
    >
      <div className="careers-newsletter-copy">
        <h2 id="careers-newsletter-title">
          We&rsquo;d Love to Get <span>to Know You.</span>
        </h2>
        <p>
          We&rsquo;re always looking to connect with talented folks like you. Show
          us what you&rsquo;ve got or tell us what you do.
        </p>
      </div>
      <form className="careers-newsletter-form">
        <input aria-label="First name" placeholder="Insert Your First Name" />
        <input aria-label="Last name" placeholder="Insert Your Last Name" />
        <input aria-label="Email" placeholder="Insert Your Email" type="email" />
        <button type="button">Submit</button>
      </form>
    </section>
  );
}

export default function CareersPage() {
  return (
    <main className={`${styles.careersScope} careers-page`}>
      <div className="careers-frame">
        <Header active="who" />

        <section aria-labelledby="careers-title" className="careers-hero">
          <h1 id="careers-title">Careers</h1>
          <p>Explore career paths designed for curious minds ready to build what&rsquo;s next.</p>
        </section>

        <ContentDrop />

        <ImagePill className="careers-working-image" />
        <section aria-labelledby="careers-working-title" className="careers-working" id="working">
          <h2 id="careers-working-title">Working at HYBR</h2>
          <p>
            At HYBR, your ideas don&rsquo;t sit on a shelf &mdash; they shape how
            organizations innovate, grow, and create real impact across Africa
            and beyond. Help organizations solve real challenges.
          </p>
          <ButtonLink className="careers-working-button" href="/contact">Learn More</ButtonLink>
        </section>

        <section aria-labelledby="careers-why-title" className="careers-why" id="why">
          <p>WHY JOIN?</p>
          <h2 id="careers-why-title">Why become a HYBRian?</h2>
        </section>

        <div className="careers-why-cards">
          {whyCards.map((card) => (
            <WhyCard card={card} key={card.title} />
          ))}
          <CultureVisual />
        </div>

        <section aria-labelledby="careers-testimonials-title" className="careers-testimonials" id="testimonials">
          <p>OUR TEAM</p>
          <h2 id="careers-testimonials-title">Hear from Our Own<span>.</span></h2>
          <p>
            Our people are the pulse of HYBR. Discover the insights, stories,
            and lived experiences shaping our innovation journey.
          </p>
        </section>
        <TestimonialCard />

        <section aria-labelledby="careers-benefits-title" className="careers-benefits" id="benefits">
          <p>BENEFITS</p>
          <h2 id="careers-benefits-title">Benefits of Working with Us</h2>
          <p>
            Our benefits are designed to support your journey and empower you
            with the tools to build a career you are proud of.
          </p>
        </section>
        <Benefits />

        <ImagePill className="careers-fellowship-image" />
        <section aria-labelledby="careers-fellowship-title" className="careers-fellowship" id="fellowship">
          <p>INNOVATION FELLOWSHIP</p>
          <h2 id="careers-fellowship-title">Accelerating the next generation of Innovation leaders.</h2>
          <p>
            Our Innovation Fellowship Program connects ambitious talent with
            live projects, expert guidance, and a dynamic learning environment
            designed to shape thinkers who solve problems, create impact, and
            drive meaningful transformation.
          </p>
          <ButtonLink href="/contact">Learn More</ButtonLink>
        </section>

        <InternshipProgram />

        <section aria-labelledby="careers-roles-title" className="careers-open" id="roles">
          <h2 id="careers-roles-title">Open Roles</h2>
          <p>A short, captivating statement about what this section is for.</p>
        </section>
        <Roles />

        <NewsletterCard />
      </div>

      <Footer />
    </main>
  );
}
