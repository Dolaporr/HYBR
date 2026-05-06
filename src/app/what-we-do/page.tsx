import {
  Button,
  CaseCard,
  Footer,
  ImagePanel,
  Label,
  PageHero,
} from "../_components/marketing";
import { figmaAssets } from "@/content/site";

const services = [
  {
    title: "Discover",
    body: "We help you understand the problem, surface the opportunity, and make confident decisions with evidence.",
  },
  {
    title: "Develop",
    body: "We turn insight into action through prototyping, product and service design, experiments, and validation.",
  },
  {
    title: "Deploy",
    body: "We help you move solutions into market with strategy, venture building, scaling execution, and impact measurement.",
  },
];

const products = ["INDX", "FLYWHEEL", "ALPHA"];

export default function WhatWeDoPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="what"
        menu={[
          { label: "Our Services", href: "#services" },
          { label: "Our Work", href: "#work" },
          { label: "Our Products", href: "#products" },
          { label: "Our Impact", href: "#impact" },
          { label: "Our Team", href: "#team" },
        ]}
        subtitle="Your shortcut from 'what if' to 'what's next.'"
        title="What We Do"
      />

      <section
        id="services"
        className="bg-black px-6 py-20 text-white md:py-28"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.78), rgba(0,0,0,.52)), url(${figmaAssets.people})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[930px]">
            <Label>Our Services</Label>
            <h2 className="mt-3 font-display text-5xl font-medium leading-tight">
              We take you from understanding the problem to owning the market,
              all in one innovation pipeline.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article className="rounded-[20px] border border-white/20 bg-black/72 p-8 text-white backdrop-blur-sm" key={service.title}>
                <h3 className="font-display text-4xl font-medium md:text-5xl">{service.title}</h3>
                <p className="mt-16 text-lg leading-relaxed md:text-xl">{service.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/what-we-do/services">Explore Services</Button>
          </div>
        </div>
      </section>

      <section id="impact" className="px-6 py-24 text-center">
        <div className="mx-auto max-w-[1200px]">
          <Label>Our Impact</Label>
          <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
            We counted because it matters to us.
          </h2>
          <p className="mt-4 text-xl md:text-2xl">
            Every data point represents a life improved and a business transformed.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["35+", "Countries Reached"],
              ["300K+", "Jobs Created"],
              ["4000+", "Ventures Impacted"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-6xl font-extrabold text-hybr-blue md:text-7xl">{value}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em]">{label}</p>
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

      <section id="products" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Our Products</Label>
          <h2 className="mt-3 max-w-[820px] font-display text-4xl font-medium leading-tight md:text-5xl">
            Tools designed to make innovation feel effortless.
          </h2>
          <p className="mt-4 text-xl md:text-2xl">
            Helping you turn your best ideas into meaningful results.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article className="rounded-[20px] bg-[#f1f1f1] p-8 shadow-[0_18px_42px_rgba(0,0,0,0.06)]" key={product}>
                <h3 className="font-display text-4xl font-medium md:text-5xl">{product}</h3>
                <p className="mt-8 text-base leading-relaxed md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tempus dolor id metus auctor tincidunt.
                </p>
                <div className="mt-10">
                  <Button href="/what-we-do/products" variant="dark">
                    Access {product}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1fr_486px] lg:items-end">
          <div>
            <Label>Our Work</Label>
            <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
              One Liner To Lead User To Case Studies Page
            </h2>
            <p className="mt-4 text-xl md:text-2xl">
              A continuation of the one-liner above to drive users to visit Case
              Studies.
            </p>
            <div className="mt-8">
              <Button href="/what-we-do/our-work">View Case Studies</Button>
            </div>
          </div>
          <CaseCard dark />
        </div>
      </section>

      <section id="team" className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
          <ImagePanel
            className="h-[260px] rounded-[32px] sm:h-[336px]"
            overlay="linear-gradient(90deg, rgba(25,106,180,.22), rgba(0,0,0,.1))"
            src={figmaAssets.people}
          />
          <div>
            <Label>Our Team</Label>
            <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
              We are powered by a team that blends strategy, creativity, and
              execution.
            </h2>
            <p className="mt-5 text-xl leading-relaxed">
              If you&apos;re passionate about growth, creativity, and solving
              challenges that matter, this is the place for you.
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="/who-we-are/our-team">Our Team</Button>
              <Button href="/who-we-are/careers" variant="dark">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
