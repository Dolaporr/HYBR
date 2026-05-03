import { Button, Footer, ImagePanel, Label, PageHero } from "../../_components/marketing";

const metrics = [
  ["35+", "Countries Reached"],
  ["300K+", "Jobs Created"],
  ["4000+", "Ventures Impacted"],
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
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_520px] lg:items-center">
          <div>
            <Label>Our Impact</Label>
            <h2 className="mt-3 font-display text-5xl font-medium leading-tight">
              We counted because it matters to us.
            </h2>
            <p className="mt-5 text-2xl leading-relaxed">
              Every data point represents a life improved, a venture supported,
              and a leader equipped to make better innovation decisions.
            </p>
          </div>
          <ImagePanel className="h-[336px] rounded-full" />
        </div>
        <div className="mx-auto mt-16 grid max-w-[1200px] gap-8 md:grid-cols-3">
          {metrics.map(([value, label]) => (
            <div className="rounded-3xl bg-black p-10 text-center text-white" key={label}>
              <p className="font-display text-7xl font-medium">{value}</p>
              <p className="mt-3 font-bold uppercase">{label}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-[1200px] rounded-3xl bg-[#f1f1f1] p-12 text-center">
          <h2 className="font-display text-5xl font-medium">
            Impact is not a claim. It is evidence.
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-xl">
            HYBR helps organisations connect strategy, execution, and measurable
            outcomes across the innovation journey.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="dark">
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
