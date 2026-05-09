import {
  Button,
  CaseCard,
  Footer,
  ImagePanel,
  Label,
  PageHero,
} from "../_components/marketing";
import { figmaAssets } from "@/content/site";

const products = [
  {
    name: "FLYWHEEL",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus dolor id metus auctor tincidunt. Cras et gravida dolor. Morbi auctor nibh lacus. Nulla luctus, risus nec lobortis iaculis, ante est imperdiet augue, id mattis tellus sapien quis purus. Nullam faucibus, sapien id condimentum sagittis, justo urna rhoncus lacus, viverra lacinia nibh ex in neque.",
  },
  {
    name: "INDX",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus dolor id metus auctor tincidunt. Cras et gravida dolor. Morbi auctor nibh lacus. Nulla luctus, risus nec lobortis iaculis, ante est imperdiet augue, id mattis tellus sapien quis purus. Nullam faucibus, sapien id condimentum sagittis, justo urna rhoncus lacus, viverra lacinia nibh ex in neque.",
  },
  {
    name: "ALPHA",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus dolor id metus auctor tincidunt. Cras et gravida dolor. Morbi auctor nibh lacus. Nulla luctus, risus nec lobortis iaculis, ante est imperdiet augue, id mattis tellus sapien quis purus. Nullam faucibus, sapien id condimentum sagittis, justo urna rhoncus lacus, viverra lacinia nibh ex in neque.",
  },
];

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
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.78), rgba(0,0,0,.52)), url(${figmaAssets.figmaBusinessPartners})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-[588px_1fr] lg:items-center">
            <div className="text-white">
              <Label>Our Services</Label>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
                We take you from understanding the problem to owning the market, all in one innovation pipeline.
              </h2>
              <div className="mt-8">
                <Button href="/what-we-do/services" variant="white">Explore Services</Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-white lg:items-end">
              {["Discover", "Develop", "Deploy"].map((word, i) => (
                <p
                  className="font-display font-medium leading-none"
                  key={word}
                  style={{ fontSize: `${5 + i * 0.5}rem`, opacity: 0.85 - i * 0.1 }}
                >
                  {word}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-[486px_690px] lg:items-start">
            <div className="overflow-hidden rounded-[20px] lg:h-[712px]">
              <CaseCard className="h-full" dark imageSrc={figmaAssets.figmaBuilding} />
            </div>
            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-[20px] lg:h-[386px]">
                <CaseCard className="h-full" dark imageSrc={figmaAssets.figmaBuilding} />
              </div>
              <div className="flex flex-col justify-between py-4 lg:flex-1">
                <div>
                  <Label>Our Work</Label>
                  <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
                    One Liner To Lead User To Case Studies Page
                  </h2>
                  <p className="mt-4 text-xl leading-relaxed">
                    A short, captivating statement about what this case study is about.
                    A continuation of the one-liner above to drive users to visit
                    &ldquo;Case Studies&rdquo;.
                  </p>
                </div>
                <div className="mt-8">
                  <Button href="/what-we-do/our-work">View Case Studies</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Our Products</Label>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
            Tools designed to make innovation feel effortless.
          </h2>
          <p className="mt-4 text-xl">
            Helping you turn your best ideas into meaningful results.
          </p>
          <div className="mt-10 space-y-6">
            {products.map((product) => (
              <div
                className="grid gap-8 rounded-[20px] bg-[#f1f1f1] p-8 md:p-10 lg:grid-cols-[340px_1fr] lg:items-center"
                key={product.name}
              >
                <div>
                  <h3 className="font-display text-5xl font-medium">{product.name}</h3>
                  <div className="mt-6">
                    <Button href="/what-we-do/products" variant="dark">Learn More</Button>
                  </div>
                </div>
                <div className="lg:border-l lg:border-black/10 lg:pl-8">
                  <p className="text-lg leading-relaxed">{product.body}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <input
                      aria-label="Email address"
                      className="min-h-12 flex-1 rounded-full border border-black/15 bg-white px-5 text-sm outline-none focus:border-black/30 md:min-h-[46px]"
                      placeholder="Your email address"
                      type="email"
                    />
                    <Button href="/what-we-do/products" variant="dark">
                      Access {product.name}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/what-we-do/products" variant="dark">Explore All Products</Button>
          </div>
        </div>
      </section>

      <section id="impact" className="bg-black px-6 py-24 text-center text-white md:py-36">
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
            <Button href="/what-we-do/our-impact" variant="dark">Learn More</Button>
          </div>
        </div>
      </section>

      <section id="team" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Our Team</Label>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:max-w-[1104px] md:text-5xl">
            We are powered by a team that blends strategy, creativity, and execution.
          </h2>
          <p className="mt-4 max-w-[1104px] text-xl leading-relaxed">
            If you&apos;re passionate about growth, creativity, and solving challenges that matter, this is the place for you—learn more about the team you could be a part of.
          </p>
          <ImagePanel
            className="mt-10 h-[260px] rounded-l-full rounded-r-[20px] md:h-[344px]"
            src={figmaAssets.figmaBusinessPartners}
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/who-we-are/our-team">Our Team</Button>
            <Button href="/who-we-are/careers" variant="dark">Join Us</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
