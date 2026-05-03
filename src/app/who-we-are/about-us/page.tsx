import { Button, Footer, ImagePanel, Label, PageHero } from "../../_components/marketing";

export default function AboutUsPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="who"
        menu={[
          { label: "Purpose", href: "#purpose" },
          { label: "Beliefs", href: "#beliefs" },
          { label: "Our Team", href: "#team" },
          { label: "Careers", href: "#careers" },
        ]}
        subtitle="We help innovators turn untapped potential into world-shaping solutions."
        title="About Us"
      />
      <section id="purpose" className="px-6 pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Label>About Us</Label>
            <h2 className="mt-3 font-display text-5xl font-medium leading-tight">
              We reimagine how innovation is discovered, nurtured, and scaled.
            </h2>
            <p className="mt-6 text-2xl leading-relaxed">
              At HYBR, we don&apos;t just innovate - we reimagine the very
              blueprint of how innovation is discovered, nurtured, and scaled in
              underserved markets.
            </p>
          </div>
          <ImagePanel className="h-[336px] rounded-full" />
        </div>
      </section>
      <section id="beliefs" className="px-6 py-24">
        <div className="mx-auto rounded-3xl bg-black p-12 text-white max-w-[1200px]">
          <h2 className="font-display text-5xl font-medium">
            From Lagos to London, Cape Town to California, HYBR is where big
            ideas meet bold execution.
          </h2>
          <p className="mt-6 max-w-[900px] text-xl leading-relaxed">
            We transform ideas, products, services, and organizations into
            innovation leaders. We are a purpose-driven innovation agency -
            unearthing breakthrough ideas, empowering brilliant innovation
            leaders, and igniting solutions with global impact.
          </p>
        </div>
      </section>
      <section id="team" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px] text-center">
          <Label>Our Team</Label>
          <h2 className="mt-3 font-display text-5xl font-medium">
            The people powering HYBR.
          </h2>
          <div className="mt-8">
            <Button href="/who-we-are/our-team">Meet The Team</Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
