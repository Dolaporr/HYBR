const assets = {
  hero:
    "https://www.figma.com/api/mcp/asset/95ed038c-dc61-43d7-bcca-fabdfe9d9264",
  logo:
    "https://www.figma.com/api/mcp/asset/a26cc075-62ac-4cd8-8253-a20930553d73",
  video:
    "https://www.figma.com/api/mcp/asset/f44f734a-7019-4532-a28a-137a9824172a",
  play:
    "https://www.figma.com/api/mcp/asset/124322ca-2bc8-4620-9f59-7c3d59ecaea3",
  riskImage:
    "https://www.figma.com/api/mcp/asset/9d3d7dbf-17f8-47eb-a97c-51ba20fc7236",
  whoImage:
    "https://www.figma.com/api/mcp/asset/72160259-5bd6-4fa5-93b6-9b5e49e2203e",
  testimonial:
    "https://www.figma.com/api/mcp/asset/23f7e594-6b2a-46cb-a2b3-3f7613073f60",
  testimonialRing:
    "https://www.figma.com/api/mcp/asset/8429c3de-4ca4-4b2b-ac9f-7f7af39e7f53",
  news:
    "https://www.figma.com/api/mcp/asset/c1b3d5e5-5a6a-4b39-bcda-911fa26c8a6d",
  contact:
    "https://www.figma.com/api/mcp/asset/e5edcada-e35b-42c2-82f7-9b6a9088e237",
  footerLogo:
    "https://www.figma.com/api/mcp/asset/8a8b4e5d-1e28-4ce2-992b-22d56c3ff03e",
  footerPattern:
    "https://www.figma.com/api/mcp/asset/7adca3e0-18c5-4818-bad1-f96b19cc6daa",
};

const trustedLogoStrip = "/logos/sliding-animation.svg";

const rotatingWords = ["ideas", "services", "markets", "products", "teams"];

const navItems = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Insights", href: "/insights" },
];

const risks = [
  "Wasting time and budget on ideas customers don't want",
  "Slow, fragmented decision-making",
  "Products that fail to scale",
  "Losing momentum - and market relevance",
];

const services = [
  {
    title: "Discover",
    first: "Applied Research and Strategy",
    second: "Market Acceleration",
  },
  {
    title: "Develop",
    first: "Prototyping, Product & Service Design",
    second: "Applied Research and Strategy",
  },
  {
    title: "Deploy",
    first: "Prototyping, Product & Service Design",
    second: "Market Acceleration",
  },
];

const impact = [
  { value: "300K+", label: "Jobs Created" },
  { value: "35+", label: "Countries Reached" },
  { value: "4000+", label: "Ventures Impacted" },
];

const footer = [
  {
    title: "Who We Are",
    links: [
      { label: "About Us", href: "/who-we-are/about-us" },
      { label: "Our Team", href: "/who-we-are/our-team" },
      { label: "Careers", href: "/who-we-are/careers" },
    ],
  },
  {
    title: "What We Do",
    links: [
      { label: "Our Services", href: "/what-we-do/services" },
      { label: "Our Products", href: "/what-we-do/products" },
      { label: "Our Work", href: "/what-we-do/our-work" },
      { label: "Our Impact", href: "/what-we-do/our-impact" },
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Articles & Posts", href: "/insights/articles" },
      { label: "Webinars", href: "/insights/webinars" },
      { label: "News & Updates", href: "/insights/news" },
    ],
  },
  {
    title: "Contact us",
    links: [
      { label: "Address 1", href: "/contact" },
      { label: "Phone Number", href: "/contact" },
      { label: "Email Address", href: "/contact" },
    ],
  },
];

function Button({
  children,
  href = "/contact",
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "dark" | "white";
}) {
  const variants = {
    primary: "border-hybr-blue bg-hybr-blue text-white",
    outline: "border-hybr-green bg-white text-hybr-green",
    dark: "border-black bg-white text-black",
    white: "border-white bg-white text-black",
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full border-2 px-6 text-sm font-semibold uppercase tracking-normal transition hover:-translate-y-0.5 ${variants[variant]}`}
      href={href}
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold uppercase tracking-normal text-current md:text-base">
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

export default function Home() {
  return (
    <main className="homepage-live min-h-screen overflow-hidden bg-white text-black">
      <header className="home-header absolute left-0 right-0 top-0 z-20">
        <div className="mx-auto flex min-h-28 max-w-[1200px] flex-col items-start justify-center gap-5 px-6 py-6 md:h-[152px] md:flex-row md:items-start md:justify-between md:py-0 lg:px-0">
          <a className="block h-10 w-[128px] overflow-hidden md:mt-[47px] md:h-14 md:w-[179px]" href="#">
            <img alt="HYBR" className="h-full w-full object-contain" src={assets.logo} />
          </a>
          <nav className="homepage-nav flex flex-wrap items-center gap-3 text-xs font-semibold uppercase text-white md:mt-[53px] md:h-12 md:w-[648px] md:flex-nowrap md:justify-end md:gap-8 md:text-xl md:leading-6">
            {navItems.map((item) => (
              <a className="md:text-right" key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
            <a
              className="homepage-talk-button inline-flex h-12 min-w-[162px] shrink-0 items-center justify-center whitespace-nowrap rounded-full border-2 border-hybr-blue bg-hybr-blue px-6 py-3 text-right text-sm font-semibold leading-6 text-white md:text-[20px]"
              href="/contact"
            >
              Let&apos;s Talk
            </a>
          </nav>
        </div>
      </header>

      <section
        className="homepage-hero relative min-h-[720px] px-6 pt-48 text-white md:min-h-[804px] md:pt-[205px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.62), rgba(0,0,0,.55)), url(${assets.hero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[1196px]">
            <h1 className="font-display text-[48px] font-medium leading-[1.08] min-[390px]:text-[54px] sm:text-[72px] md:text-[80px]">
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
                scaling what works - we help (you) find clarity, test ideas, and
                build with purpose.
              </span>
              <span className="homepage-hero-subtitle__tablet">
                A Tribe of Dynamic Doers — Building What&apos;s Next.
              </span>
            </p>
          </div>
          <div className="trusted-by-block mt-20 md:mt-0">
            <p className="trusted-by-label text-xs font-semibold uppercase tracking-normal">Trusted By</p>
            <div className="trusted-marquee mt-8">
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

        <img
          alt=""
          aria-hidden="true"
          className="home-green-inline"
          src="/green inline horizontal tab.svg"
        />

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
              As a leader, you face one common enemy: innovation by guesswork.
              Fragmented insights, slow decisions, siloed teams, and no clear
              direction. Yet you&apos;re still expected to deliver the next big win,
              without a roadmap.
            </p>
          </div>
          <div>
            <h3 className="font-display text-4xl font-medium md:text-5xl">
              You Risk...
            </h3>
            <ul className="mt-8 space-y-5 text-xl md:text-2xl">
              {risks.map((risk) => (
                <li key={risk} className="flex gap-4">
                  <span className="risk-marker">
                    x
                  </span>
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </div>
          <ImagePanel
            className="h-[260px] rounded-[32px] sm:h-[336px] sm:rounded-bl-[1000px] sm:rounded-br-[1000px] sm:rounded-tl-[1000px]"
            overlay="linear-gradient(120deg, rgba(141,197,64,.32), rgba(113,32,128,.42))"
            src={assets.riskImage}
          />
        </div>
      </section>
      </div>

      <section id="who-we-are" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-black p-8 text-white md:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">
                A Purpose-Led <br />
                Innovation Agency
              </h2>
              <p className="mt-6 max-w-[520px] text-lg leading-relaxed md:text-xl">
                At HYBR, we don&apos;t just advise - we help you navigate, build, and
                scale. With proven frameworks and deep ecosystem access, we guide
                teams to clarity and accelerate the work that unlocks your next
                big win.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-medium md:text-3xl">
                With HYBR, you get:
              </h3>
              <ul className="mt-6 space-y-4 text-lg leading-relaxed md:text-xl">
                <li>
                  <span className="text-[#8dc540]">✓</span> A trusted guide who understands your innovation challenges
                </li>
                <li>
                  <span className="text-[#8dc540]">✓</span> A partner who brings clarity, discipline, and purpose
                </li>
                <li>
                  <span className="text-[#8dc540]">✓</span> A proven system to cut through the noise and deliver results faster
                </li>
              </ul>
            </div>
          </div>
          <ImagePanel
            className="mt-12 h-[220px] rounded-3xl md:h-[245px]"
            overlay="linear-gradient(90deg, rgba(25,106,180,.26), rgba(0,0,0,.12))"
            src={assets.whoImage}
          />
          <div className="mt-8 flex justify-end">
            <Button href="/who-we-are/our-team" variant="white">
              Meet The Team
            </Button>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-2 max-w-[900px] font-display text-4xl font-medium md:text-5xl">
            We Help You Build Innovation That Works - and Works Fast
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl bg-black p-6 text-white md:p-8">
                <h3 className="font-display text-4xl font-medium">{service.title}</h3>
                <div className="mt-10 space-y-5 text-lg md:mt-16 md:text-xl">
                  <p>{service.first}</p>
                  <p className="text-white/55">{service.second}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/what-we-do/services" variant="outline">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-[1200px]">
          <SectionLabel>Our Impact</SectionLabel>
          <h2 className="mx-auto mt-2 max-w-[1100px] font-display text-4xl font-medium md:text-5xl">
            No jargon, no wasted experiments, no building in the dark - just
            clarity, alignment, and momentum.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {impact.map((item) => (
              <div key={item.label}>
                <p className="font-display text-6xl font-medium md:text-7xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm font-bold uppercase">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/what-we-do/our-impact" variant="dark">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-[690px_486px]">
          <div>
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="mt-2 font-display text-4xl font-medium md:text-5xl">
              Trusted by Innovators Across Industries
            </h2>
            <p className="mt-4 max-w-[690px] text-xl leading-relaxed md:text-2xl">
              We&apos;ve helped governments, corporations, startups, and ecosystem
              builders move from insight to impact - faster and more confidently.
            </p>
            <div className="mt-8">
              <Button href="/what-we-do/our-work" variant="outline">
                More Case Studies
              </Button>
            </div>
            <article className="mt-8 rounded-3xl bg-black p-6 text-white md:p-10">
              <SectionLabel>Case Study</SectionLabel>
              <h3 className="mt-2 font-display text-4xl font-medium">
                One Liner For Specific Case Study
              </h3>
              <p className="mt-4 text-lg leading-relaxed">
                A captivating statement about what service was offered to the
                company. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between md:mt-14">
                <span className="font-bold uppercase">Company Name</span>
                <Button href="/case-studies/one-liner" variant="white">
                  Read More
                </Button>
              </div>
            </article>
          </div>
          <article className="self-end rounded-3xl bg-[#f0f0f0] p-6 md:p-10">
            <SectionLabel>Case Study</SectionLabel>
            <h3 className="mt-2 font-display text-4xl font-medium">
              One Liner For Specific Case Study
            </h3>
            <p className="mt-4 text-lg leading-relaxed">
              A captivating statement about what service was offered to the
              company. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-12">
              <Button href="/case-studies/one-liner" variant="dark">
                Read More
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1200px] text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-2 font-display text-4xl font-medium md:text-5xl">
            Hear from Our Clients.
          </h2>
          <p className="mx-auto mt-4 max-w-[996px] text-xl leading-relaxed md:text-2xl">
            Captivating supporting statement that introduces the &quot;testimonial&quot;
            section, with text or video reviews from HYBR&apos;s clientele.
          </p>
          <div className="mt-12 grid gap-10 rounded-bl-[120px] rounded-tl-[120px] rounded-tr-[56px] bg-black p-6 text-left text-white md:grid-cols-[188px_1fr] md:p-16 lg:rounded-bl-[1000px] lg:rounded-tl-[1000px] lg:rounded-tr-[500px]">
            <div
              className="relative size-40 rounded-full bg-contain bg-center bg-no-repeat md:size-[188px]"
              style={{ backgroundImage: `url(${assets.testimonialRing})` }}
            >
              <img
                alt="Ayo Balogun"
                className="absolute bottom-0 left-1/2 size-[120px] -translate-x-1/2 rounded-full border-[3px] border-[#8dc540] object-cover md:size-[141px]"
                src={assets.testimonial}
              />
            </div>
            <div>
              <blockquote className="font-display text-3xl leading-snug md:text-4xl">
                &quot;The curated innovation retreat for AFEX&apos;s 40-exco team was
                truly world class and highly impactful, shaping our strategic
                plans going forward.&quot;
              </blockquote>
              <p className="mt-8 font-bold">Ayo Balogun</p>
              <p className="text-sm">
                CEO, AFEX Commodities | 2022 Financial Times Fastest Growing
                Venture in Africa
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="insights" className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">
          <article
            className="relative min-h-[520px] overflow-hidden rounded-2xl bg-black p-8 text-white"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.56)), url(${assets.news})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Button href="/insights/news/specific-news" variant="white">
              Read More
            </Button>
            <div className="absolute bottom-8 left-8 right-8">
              <SectionLabel>News</SectionLabel>
              <h3 className="mt-4 font-display text-4xl font-medium">
                One Liner For Specific News Update
              </h3>
              <p className="mt-4 text-lg">
                A short, captivating statement about what this news update covers.
              </p>
            </div>
          </article>
          <div className="space-y-6">
            <article
              className="relative min-h-[386px] overflow-hidden rounded-3xl bg-black p-8 text-white"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.62)), url(${assets.video})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <SectionLabel>Webinar</SectionLabel>
              <img alt="" className="absolute right-8 top-8 size-8 rotate-90" src={assets.play} />
              <h3 className="mt-36 font-display text-4xl font-medium">
                One Liner For Specific Webinar
              </h3>
              <p className="mt-4">Jedidiah Akpata & Charles Ojei</p>
              <p>November 2023</p>
              <p className="mt-6 text-right font-bold">01:40:35</p>
            </article>
            <div>
              <SectionLabel>Insights</SectionLabel>
              <h2 className="mt-2 font-display text-4xl font-medium">
                Connect with our latest thinking.
              </h2>
              <div className="mt-6">
                <Button href="/insights" variant="outline">
                  Our Insights
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-2 lg:items-center">
          <ImagePanel
            className="h-[260px] rounded-[32px] sm:h-[336px] sm:rounded-full"
            src={assets.whoImage}
          />
          <div>
            <h2 className="font-display text-4xl font-medium md:text-5xl">
              With HYBR, You Gain...
            </h2>
            <p className="mt-6 whitespace-pre-line text-xl leading-relaxed md:text-2xl">
              {`✓ Clarity on what to build and why
✓ Alignment across teams and leadership
✓ Faster decisions and smarter experiments
✓ A scalable roadmap for growth
✓ Confidence in every innovation step

You lead with vision.
We help you deliver with precision.`}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-[1020px]">
          <h2 className="font-display text-4xl font-medium md:text-5xl">
            Ready to Build What&apos;s Next?
          </h2>
          <p className="mt-4 text-xl md:text-2xl">
            Innovation deserves purpose, discipline, and momentum. We bring all
            three.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <Button variant="outline">Book a Strategy Call</Button>
            <Button href="/resources/innovation-guide" variant="dark">
              Download Our Innovation Guide
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-3xl bg-black text-white lg:grid-cols-2">
          <div
            className="min-h-[380px] bg-cover bg-center p-6 md:p-16 lg:min-h-0"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.22), rgba(0,0,0,.18)), url(${assets.contact})`,
            }}
          >
            <h2 className="font-display text-4xl font-medium md:text-5xl">
              Build Innovation that Works, with Us
            </h2>
            <p className="mt-6 max-w-[461px] text-xl leading-relaxed">
              Supporting lead generator body text to encourage users to book a
              strategy call.
            </p>
          </div>
          <form className="space-y-6 bg-black p-6 md:space-y-8 md:p-16">
            <input className="field" placeholder="Insert Your Name" />
            <input className="field" placeholder="Insert Your Email" type="email" />
            <textarea className="field min-h-40 resize-none" placeholder="What would you like us to know?" />
            <button className="min-h-14 w-full rounded-full bg-white px-8 text-lg font-semibold uppercase text-black transition hover:-translate-y-0.5">
              Submit
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <img
              alt=""
              className="pointer-events-none absolute -bottom-24 -right-40 hidden size-[360px] opacity-50 lg:block"
              src={assets.footerPattern}
            />
            {footer.map((group) => (
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
              <p className="mt-4 text-sm">Instagram X YouTube LinkedIn Medium</p>
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
            <span>© 2025 HYBR Group</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
