import Link from "next/link";

const imageUrl =
  "https://www.figma.com/api/mcp/asset/e037b24c-53d2-4cd7-865d-4252e16bd27c";

const timeline = [
  {
    year: "2016",
    text: "HYBR conceptualised to help ventures scale their impact in Africa.",
  },
  {
    year: "2017",
    text: "Launched maiden edition of the Young Enterprise (YES) Bootcamp in Lagos in partnership with Samsung, Google, Deloitte, and Sage.",
  },
  {
    year: "2018",
    text: "YES expands to reach ventures in Lagos, Johannesburg, and Nairobi. HYBR opens office in Cape Town.",
  },
  {
    year: "2019",
    text: "Implements the Merck-Make-IT-Africa Joint program to impact healthcare ventures across Africa.",
  },
  {
    year: "2019",
    text: "Implements the Entrepreneurs Plastics Innovation Challenge (EPIC) powered by Coca-Cola.",
  },
  {
    year: "2020",
    text: "Supports ventures globally, through the Growing through Uncertainty program during COVID-19.",
  },
  {
    year: "2020",
    text: "Ecosystem study - Innovating in the New Normal post COVID-19. Opens operations in London, UK.",
  },
  {
    year: "2021",
    text: "Partnership with ABSA for continent-wide innovation intelligence.",
  },
  {
    year: "2022",
    text: "Strategic reorganization, new purpose, and missions.",
  },
  {
    year: "2024",
    text: "Transition into a full-service innovation agency.",
  },
  {
    year: "2025",
    text: "HYBR continues to help leaders build innovation with clarity, discipline, and momentum.",
  },
];

const contentLinks = [
  { label: "Our History", href: "#history" },
  { label: "Early Days", href: "#early-days" },
  { label: "About Us", href: "#about-us" },
  { label: "Our Team", href: "#our-team" },
  { label: "Careers", href: "#careers" },
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

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 px-6">
      <div className="mx-auto flex min-h-28 max-w-[1200px] flex-col items-start justify-center gap-5 py-6 md:h-[152px] md:flex-row md:items-center md:justify-between md:py-0">
        <Link className="font-display text-2xl font-semibold text-hybr-blue" href="/">
          HYBR
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase sm:gap-5 md:gap-8 md:text-sm">
          <Link className="text-hybr-blue" href="/who-we-are">
            Who We Are
          </Link>
          <Link href="/what-we-do">What We Do</Link>
          <Link href="/insights">Insights</Link>
          <Link
            className="rounded-full border-2 border-hybr-blue bg-hybr-blue px-4 py-2 text-white md:px-6 md:py-3"
            href="/contact"
          >
            Let&apos;s Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-base font-bold uppercase">{children}</p>;
}

function Button({
  children,
  href,
  light = false,
}: {
  children: React.ReactNode;
  href: string;
  light?: boolean;
}) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-full border-2 px-5 text-sm font-medium md:min-h-[61px] md:px-8 md:text-lg ${
        light
          ? "border-white text-white"
          : "border-hybr-green bg-white text-hybr-green"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}

function ImageCard({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-black ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.3), rgba(0,0,0,.08)), url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
}

export default function WhoWeArePage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <Header />

      <section className="relative min-h-[540px] px-6 pt-48 md:min-h-[705px] md:pt-[232px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="font-display text-[56px] font-medium leading-none sm:text-[76px] md:text-[112px] lg:text-[160px]">
            Who We Are
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed md:text-2xl">
            A Tribe of Dynamic Doers - Building What&apos;s Next.
          </p>
        </div>

        <aside className="mx-auto mt-10 max-w-[1200px] rounded-3xl bg-black p-6 text-white xl:absolute xl:right-[-259px] xl:top-[238px] xl:mt-0 xl:h-[197px] xl:w-[337px] xl:overflow-hidden xl:rounded-bl-[1000px] xl:rounded-br-[800px] xl:rounded-tl-[1000px] xl:p-0">
          <ImageCard className="absolute inset-0 opacity-70" />
          <p className="relative z-10 mb-4 font-display text-base font-bold xl:absolute xl:left-8 xl:top-1/2 xl:mb-0 xl:-translate-y-1/2 xl:-rotate-90">
            CONTENT
          </p>
          <nav className="relative z-10 flex flex-wrap gap-3 text-base font-medium xl:absolute xl:right-[108px] xl:top-1/2 xl:-translate-y-1/2 xl:flex-col xl:text-right">
            {contentLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </aside>
      </section>

      <section id="history" className="relative bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex items-center justify-between gap-8">
            <SectionLabel>Our History</SectionLabel>
            <a
              className="hidden rounded-full border-2 border-black bg-white px-8 py-4 text-lg font-medium text-black md:inline-flex"
              href="#careers"
            >
              See The Whole Journey
            </a>
          </div>

          <div className="relative overflow-x-auto pb-8">
            <div className="absolute left-8 right-8 top-[240px] h-1 bg-white/70" />
            <div className="grid min-w-[2600px] grid-cols-11 gap-8 md:min-w-[2600px]">
              {timeline.map((item, index) => (
                <article
                  className={`relative rounded-3xl bg-white p-8 text-black ${
                    index % 2 === 0 ? "mt-0" : "mt-80"
                  }`}
                  key={`${item.year}-${item.text}`}
                >
                  <span className="absolute left-1/2 top-[calc(100%+54px)] grid size-12 -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-black text-sm font-bold text-white">
                    {item.year.slice(2)}
                  </span>
                  <p className="font-display text-xl leading-snug">{item.text}</p>
                  <p className="mt-5 text-sm font-bold">{item.year}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="early-days" className="relative px-6 py-28">
        <div className="pointer-events-none absolute -right-[560px] top-20 hidden h-[1200px] w-[1200px] rounded-full border border-hybr-green/30 md:block" />
        <div className="mx-auto max-w-[1200px]">
          <ImageCard className="h-[300px] rounded-2xl md:h-[386px]">
            <div className="absolute bottom-8 left-8 right-8 text-white md:bottom-12 md:left-12 md:right-auto">
              <h2 className="font-display text-3xl font-medium">Early Days</h2>
              <p className="mt-2 text-lg">
                A captivating statement about what this section represents.
              </p>
            </div>
          </ImageCard>
        </div>
      </section>

      <section id="about-us" className="relative px-6 pb-36">
        <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2 className="mt-2 font-display text-5xl font-medium leading-tight">
              We help innovators turn untapped potential into world-shaping
              solutions.
            </h2>
            <div className="mt-6 space-y-5 text-2xl leading-relaxed">
              <p>
                At HYBR, we don&apos;t just innovate - we reimagine the very
                blueprint of how innovation is discovered, nurtured, and scaled
                in underserved markets.
              </p>
              <p>
                We transform ideas, products, services, and organizations into
                innovation leaders. We are a purpose-driven innovation agency -
                unearthing breakthrough ideas, empowering brilliant innovation
                leaders, and igniting solutions with global impact. From Lagos
                to London, Cape Town to California, HYBR is where big ideas meet
                bold execution.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/who-we-are/about-us">Learn More</Button>
            </div>
          </div>
          <ImageCard className="h-[260px] rounded-[32px] sm:h-[336px] sm:rounded-full lg:translate-x-40" />
        </div>
      </section>

      <section id="our-team" className="px-6 pb-36">
        <div className="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-black p-6 text-white md:p-12">
          <div className="grid gap-12 lg:grid-cols-[461px_1fr]">
            <div>
              <SectionLabel>Our Team</SectionLabel>
              <h2 className="mt-4 font-display text-5xl font-medium leading-tight">
                The people powering{" "}
                <span className="text-[#8dc540]">HYBR</span>: innovators
                obsessed with building what&apos;s next.
              </h2>
            </div>
            <p className="text-xl leading-relaxed">
              Our team brings together decades of experience across innovation
              strategy, venture building, AI, and enterprise transformation.
              From designing market-shifting business models to launching
              scalable technologies in frontier markets, we combine analytic
              rigor, creative problem-solving, and deep sector expertise to help
              organizations unlock what&apos;s possible.
            </p>
          </div>
          <ImageCard className="mt-12 h-[245px] rounded-3xl">
            <div className="absolute bottom-8 left-8 right-auto md:bottom-12 md:left-auto md:right-16">
              <Button href="/who-we-are/our-team" light>
                Learn More
              </Button>
            </div>
          </ImageCard>
        </div>
      </section>

      <section id="careers" className="px-6 pb-36">
        <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
          <ImageCard className="h-[260px] rounded-[32px] sm:h-[336px] sm:rounded-full lg:-translate-x-40" />
          <div className="text-right">
            <SectionLabel>Careers</SectionLabel>
            <h2 className="mt-2 font-display text-5xl font-medium leading-tight">
              Join us and build the future - turning tough challenges into
              breakthrough solutions.
            </h2>
            <p className="mt-6 text-2xl leading-relaxed">
              If you&apos;re driven by curiosity, obsessed with solving complex
              problems, and excited to shape the future of global underserved
              markets, you&apos;ll feel right at home here. Explore careers at
              HYBR and build what&apos;s next with us.
            </p>
            <div className="mt-8">
              <Button href="/who-we-are/careers">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {footer.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold uppercase">{group.title}</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}-${link.href}`}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-bold uppercase">Follow us</h3>
              <p className="mt-4 text-sm">Instagram X YouTube LinkedIn Medium</p>
              <div className="mt-8">
                <Link
                  className="inline-flex rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-bold uppercase text-black"
                  href="/contact"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-6 text-sm uppercase md:mt-20 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-5 md:gap-8">
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>
            <span className="font-display text-xl font-semibold">HYBR</span>
            <span>© 2025 HYBR Group</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
