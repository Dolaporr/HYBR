import { Button, Footer, ImagePanel, Label, PageHero } from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

const missions = ["Circular Economy", "Inclusion", "Sustainable Living"];

const values = [
  {
    title: "Purposeful Integrity",
    body: "We do the right work the right way-treating our people, clients, and partners with respect, honesty, and purpose.",
    imageSrc: figmaAssets.figmaBusinessPartners,
  },
  {
    title: "Applied Creativity",
    body: "We solve problems by stretching beyond the obvious-experimenting, playing, and staying curious. We're comfortable in uncertainty and open to being challenged as we search for new possibilities.",
    imageSrc: figmaAssets.figmaBuilding,
  },
  {
    title: "Actively Entrepreneurial",
    body: "We think and act like entrepreneurs-doing more with less, improving everything we touch. We build faster and smarter by co-designing with our partners.",
    imageSrc: figmaAssets.figmaBusinessPartners,
  },
  {
    title: "Work and Win Together",
    body: "Real change happens together. We partner, listen, and co-create with people who share our mission. Collaboration fuels us; breakthroughs happen together.",
    imageSrc: figmaAssets.figmaFieldHero,
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
            className="relative min-h-[420px] overflow-hidden rounded-[20px] bg-black md:min-h-[640px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.52)), url(${figmaAssets.figmaFieldHero})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 grid place-items-center">
              <img alt="Play" className="h-16 w-16 md:h-[104px] md:w-[104px]" src={figmaAssets.play} />
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-white md:bottom-10 md:left-10 md:max-w-[547px]">
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
                Born in Africa, built for the world-HYBR began with a simple belief: innovation should leave no market behind.
              </h2>
            </div>
            <p className="text-xl leading-relaxed">
              HYBR was created in response to a simple truth: brilliance is everywhere, but opportunity is not. From day one, we set out to close that gap-building tools, communities, and systems that unlock innovation in places the world too often overlooks.
            </p>
          </div>
          <ImagePanel className="mt-12 h-[386px] rounded-[20px]" src={figmaAssets.figmaBusinessPartners} />
          <div className="mt-8 flex justify-end">
            <Button href="/who-we-are" variant="dark">Learn More</Button>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <ImagePanel
            className="min-h-[386px] rounded-[20px]"
            overlay="linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.62))"
            src={figmaAssets.figmaBusinessPartners}
          >
            <div className="absolute bottom-8 left-8 text-white md:bottom-10 md:left-10">
              <h2 className="font-display text-3xl font-medium">Early Days</h2>
              <p className="mt-2 text-lg">A captivating statement about what this section represents.</p>
            </div>
          </ImagePanel>
        </div>
      </section>

      <section id="purpose" className="bg-black px-6 py-24 text-white">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[714px_1fr] lg:items-center">
          <div>
            <Label>Our Purpose</Label>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
              We tackle complex challenges to create prosperity for all.
            </h2>
            <div className="mt-6 space-y-4 text-xl leading-relaxed">
              <p>
                Our work begins where the challenges are the hardest-messy markets, underserved communities, and fast-changing industries.
              </p>
              <p>
                We&apos;re committed to building a future where prosperity is accessible; where innovation connects; and where solving complex problems becomes a catalyst for shared progress.
              </p>
            </div>
          </div>
          <ImagePanel className="min-h-[336px] rounded-l-full rounded-r-[20px]" src={figmaAssets.figmaBusinessPartners} />
        </div>
      </section>

      <section id="missions" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Our Missions</Label>
          <h2 className="mt-3 max-w-[894px] font-display text-4xl font-medium leading-tight md:text-5xl">
            To fulfil our purpose, we are pursuing three innovation missions.
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {missions.map((mission) => (
              <article className="flex min-h-[237px] flex-col justify-between rounded-[20px] bg-[#f1f1f1] p-8" key={mission}>
                <h3 className="font-display text-3xl font-medium md:text-4xl">{mission}</h3>
                <Button href="/what-we-do" variant="dark">Learn More</Button>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button href="/contact">Work With Us</Button>
          </div>
        </div>
      </section>

      <section id="values" className="px-6 pb-24">
        <div className="mx-auto max-w-[894px]">
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
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.08), rgba(0,0,0,.04)), url(${value.imageSrc})`,
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
        <div className="mx-auto max-w-[996px] text-center">
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            We help organizations discover, design, and scale breakthrough innovations that drive growth and impact.
          </h2>
          <p className="mt-6 text-xl leading-relaxed">
            Our work starts by understanding your toughest challenges, then unlocking the insights and strategies to move you forward.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/what-we-do">What We Do</Button>
            <Button href="/what-we-do/our-work" variant="dark">Explore Our Work</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
