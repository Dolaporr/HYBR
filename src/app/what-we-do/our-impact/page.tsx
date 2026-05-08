import { Button, CaseCard, Footer, Label, PageHero } from "../../_components/marketing";

const metrics = [
  ["35+", "Countries Reached", "Helping organizations make confident decisions worldwide.", "View All Locations"],
  ["300K+", "Jobs Created", "Creating pathways for work, skills, and livelihoods across markets.", "View Our Reach"],
  ["4000+", "Ventures Impacted", "We help businesses turn good ideas into great results.", "View Our Reach"],
];

export default function OurImpactPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="what"
        subtitle="How your ideas can bring a positive impact to your business."
        title="Our Impact"
      />
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_486px] lg:items-start">
          <div>
            <Label>HYBR&apos;s Impact</Label>
            <h2 className="mt-3 font-display text-5xl font-medium leading-tight">
              Making the right decisions for your business isn&apos;t always easy.
            </h2>
            <p className="mt-5 text-2xl leading-relaxed">
              Many organisations struggle to get it right. HYBR brings structure
              to the process, helping you turn business ideas into clear,
              informed decisions.
              <br />
              <br />
              With the right decisions in place, confidence follows. Your ideas
              will be tested, validated, and made ready to work in the real
              world, so you can deliver solutions that create real impact for
              your business.
            </p>
            <p className="mt-5 text-xl leading-relaxed">
              Making the right decisions for your business isn&apos;t always easy.
              Many organisations struggle to get it right. HYBR brings structure
              to the process, helping you turn business ideas into clear,
              informed decisions. With the right decisions in place, confidence
              follows. Your ideas will be tested, validated, and made ready to
              work in the real world, so you can deliver solutions that create
              real impact for your business.
            </p>
          </div>
          <div className="rounded-[20px] bg-black p-8 text-white md:p-10">
            <Label>Trusted By</Label>
            <p className="mt-4 text-xl leading-relaxed">
              Teams across regions trust HYBR to turn uncertainty into clear
              innovation action.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-[1200px] gap-8 md:grid-cols-3">
          {metrics.map(([value, label, body, cta]) => (
            <div className="rounded-3xl bg-[#f1f1f1] p-10 text-center" key={label}>
              <p className="font-display text-7xl font-medium text-hybr-blue">{value}</p>
              <p className="mt-3 font-bold uppercase">{label}</p>
              <p className="mx-auto mt-4 max-w-[280px] text-base leading-relaxed">{body}</p>
              <div className="mt-6">
                <Button href="/what-we-do/our-work" variant="dark">{cta}</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 grid max-w-[1200px] gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <Label>Our Work: Case Studies</Label>
            <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
              Supporting Ideas From Start To Finish
            </h2>
            <p className="mt-4 text-xl leading-relaxed">
              See how we&apos;re working with people like you to change the
              world. Our work creates job opportunities at every level.
            </p>
            <div className="mt-8">
              <Button href="/what-we-do/our-work" variant="dark">All Case Studies</Button>
            </div>
          </div>
          <CaseCard dark />
          <CaseCard />
        </div>
        <div className="mx-auto mt-16 max-w-[1200px] rounded-3xl bg-black p-12 text-center text-white">
          <h2 className="font-display text-5xl font-medium">
            Curious how we do it? Explore our services.
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-xl">
            Discover how our services support ideas from start to finish.
          </p>
          <div className="mt-8">
            <Button href="/what-we-do/services" variant="white">
              Our Services
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
