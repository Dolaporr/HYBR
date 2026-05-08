import { Button, Footer, ImagePanel, Label, PageHero } from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

const missions = [
  { title: "Circular Economy" },
  { title: "Inclusion" },
  { title: "Sustainable Living" },
];

const values = [
  {
    title: "Purposeful Integrity",
    body: "We do the right work the right way—treating our people, clients, and partners with respect, honesty, and purpose.",
  },
  {
    title: "Applied Creativity",
    body: "We solve problems by stretching beyond the obvious—experimenting, playing, and staying curious. We're comfortable in uncertainty and open to being challenged as we search for new possibilities.",
  },
  {
    title: "Actively Entrepreneurial",
    body: "We think and act like entrepreneurs—doing more with less, improving everything we touch. We build faster and smarter by co-designing with our partners.",
  },
  {
    title: "Work and Win Together",
    body: "Real change happens together. We partner, listen, and co-create with people who share our mission. Collaboration fuels us; breakthroughs happen together.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="who"
        menu={[
          { label: "From Our Founder", href: "#founder" },
          { label: "Our History", href: "#history" },
          { label: "Our Purpose", href: "#purpose" },
          { label: "Our Missions", href: "#missions" },
          { label: "Our Values", href: "#values" },
          { label: "What We Do", href: "#what-we-do" },
        ]}
        subtitle="Builders shaping scalable, sustainable futures."
        title="About Us"
      />

      <section id="founder" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div
            className="relative overflow-hidden rounded-[20px] lg:h-[640px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.52)), url(${figmaAssets.people})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex min-h-[340px] items-center justify-center lg:min-h-0">
              <div className="py-16 lg:py-0">
                <img
                  alt="Play"
                  className="mx-auto h-16 w-16 lg:h-[104px] lg:w-[104px]"
                  src={figmaAssets.play}
                />
              </div>
            </div>
            <div className="p-8 text-white md:p-12 lg:absolute lg:bottom-10 lg:left-10 lg:max-w-[547px] lg:p-0">
              <h2 className="font-display text-3xl font-medium leading-snug">
                A Word from Our Founder
              </h2>
              <p className="mt-3 text-lg leading-relaxed">
                Operators and visionaries building scalable solutions in sustainability, technology, and inclusive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[2fr_3fr]">
            <div>
              <Label>Our History</Label>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
                Born in Africa, built for the world—HYBR began with a simple belief: innovation should leave no market behind.
              </h2>
            </div>
            <p className="text-xl leading-relaxed">
              HYBR was created in response to a simple truth: brilliance is everywhere, but opportunity is not. From day one, we set out to close that gap—building tools, communities, and systems that unlock innovation in places the world too often overlooks. What began as a mission to elevate entrepreneurs and teams across Africa has evolved into a global movement, shaping how organizations discover, design, and scale solutions that matter. Today, HYBR works across continents, proving that when innovation includes every market, everyone wins.
            </p>
          </div>
          <ImagePanel className="mt-12 h-[280px] rounded-2xl md:h-[340px]" />
          <div className="mt-8 flex justify-end">
            <Button href="/who-we-are" variant="dark">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div
            className="relative overflow-hidden rounded-[20px] lg:h-[386px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.62)), url(${figmaAssets.people})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="p-8 text-white md:p-12 lg:absolute lg:bottom-10 lg:left-10 lg:p-0">
              <h2 className="font-display text-3xl font-medium">Early Days</h2>
              <p className="mt-2 text-lg">A captivating statement about what this section represents.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="purpose" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_486px] lg:items-center">
            <div>
              <Label>Our Purpose</Label>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
                We tackle complex challenges to create prosperity for all.
              </h2>
              <div className="mt-6 space-y-4 text-xl leading-relaxed">
                <p>
                  Our work begins where the challenges are the hardest—messy markets, underserved communities, and fast-changing industries. By pairing deep local insight with global expertise, we design solutions that create real value for people, businesses, and entire ecosystems.
                </p>
                <p>
                  We&apos;re committed to building a future where prosperity isn&apos;t concentrated, but accessible; where innovation doesn&apos;t divide, but connects; and where solving complex problems becomes a catalyst for shared progress.
                </p>
              </div>
            </div>
            <ImagePanel className="h-[280px] rounded-2xl md:h-[336px]" />
          </div>
        </div>
      </section>

      <section id="missions" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Our Missions</Label>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
            To fulfil our purpose, we are pursuing three innovation missions.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {missions.map((mission) => (
              <article className="rounded-[20px] bg-[#f1f1f1] p-8 md:p-10" key={mission.title}>
                <h3 className="font-display text-3xl font-medium md:text-4xl">{mission.title}</h3>
                <p className="mt-6 text-base leading-relaxed md:text-lg">
                  Building solutions that create lasting impact and regenerative value across markets and communities.
                </p>
                <div className="mt-8">
                  <Button href="/what-we-do" variant="dark">Learn More</Button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/contact">Work With Us</Button>
          </div>
        </div>
      </section>

      <section id="values" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Our Values</Label>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
            The principles that guide how we innovate, lead, and build.
          </h2>
          <div className="mt-10 space-y-6">
            {values.map((value) => (
              <div
                className="relative overflow-hidden rounded-[24px]"
                key={value.title}
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.08), rgba(0,0,0,.04)), url(${figmaAssets.people})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="p-8 md:p-12">
                  <div className="rounded-[20px] bg-white p-8 lg:max-w-[798px]">
                    <h3 className="font-display text-3xl font-medium md:text-4xl">{value.title}</h3>
                    <p className="mt-4 text-lg leading-relaxed">{value.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-do" className="px-6 pb-36">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl lg:max-w-[996px]">
            We help organizations discover, design, and scale breakthrough innovations that drive growth and impact.
          </h2>
          <p className="mt-6 max-w-[996px] text-xl leading-relaxed">
            Our work starts by understanding your toughest challenges, then unlocking the insights and strategies to move you forward. Explore our services and see how HYBR helps teams think bigger—and execute with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/what-we-do">What We Do</Button>
            <Button href="/what-we-do/our-work" variant="dark">Explore Our Work</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
