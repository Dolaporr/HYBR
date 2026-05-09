import { Button, CaseCard, Footer, ImagePanel, Label, PageHero } from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

const metrics = [
  ["35+", "Countries Reached", "Helping organizations make confident decisions worldwide.", "View All Locations"],
  ["300K+", "Jobs Created", "Our work creates job opportunities at every level.", "View Our Reach"],
  ["4000+", "Ventures Impacted", "We help businesses turn good ideas into great results.", "View Our Reach"],
];

export default function OurImpactPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="what"
        menu={[
          { label: "HYBR's Impact", href: "#impact" },
          { label: "Countries Reached", href: "#countries" },
          { label: "Jobs Created", href: "#jobs" },
          { label: "Ventures Impacted", href: "#ventures" },
          { label: "Our Work", href: "#work" },
        ]}
        subtitle="How your ideas can bring a positive impact to your business."
        title="Our Impact"
      />

      <section id="impact" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <ImagePanel
            className="min-h-[336px] rounded-l-full rounded-r-[20px] lg:ml-auto lg:w-[976px]"
            overlay="linear-gradient(90deg, rgba(0,0,0,.12), rgba(0,0,0,.6))"
            src={figmaAssets.figmaBusinessPartners}
          >
            <div className="flex min-h-[336px] items-center p-8 text-white md:p-12 lg:ml-auto lg:w-[612px]">
              <div>
                <Label>HYBR&apos;s Impact</Label>
                <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
                  Making the right decisions for your business isn&apos;t always easy.
                </h2>
              </div>
            </div>
          </ImagePanel>

          <div className="mt-28 grid gap-6 lg:grid-cols-2">
            <article id="countries" className="rounded-[24px] bg-[#f1f1f1] p-8 md:p-10 lg:min-h-[316px]">
              <p className="font-display text-7xl font-medium text-hybr-blue">{metrics[0][0]}</p>
              <p className="mt-3 font-bold uppercase">{metrics[0][1]}</p>
              <p className="mt-5 max-w-[360px] text-lg leading-relaxed">{metrics[0][2]}</p>
              <div className="mt-8">
                <Button href="/what-we-do/our-work" variant="dark">{metrics[0][3]}</Button>
              </div>
            </article>
            <div className="rounded-full bg-black p-10 text-white lg:min-h-[588px]">
              <Label>Trusted By</Label>
              <div className="flex h-full items-center justify-center text-center">
                <p className="max-w-[360px] text-xl leading-relaxed">
                  Teams across regions trust HYBR to turn uncertainty into clear innovation action.
                </p>
              </div>
            </div>
            <article id="jobs" className="rounded-[24px] bg-[#f1f1f1] p-8 md:p-10 lg:-mt-64 lg:min-h-[215px]">
              <p className="font-display text-7xl font-medium text-hybr-blue">{metrics[1][0]}</p>
              <p className="mt-3 font-bold uppercase">{metrics[1][1]}</p>
              <p className="mt-5 max-w-[360px] text-lg leading-relaxed">{metrics[1][2]}</p>
            </article>
            <article id="ventures" className="rounded-[24px] bg-[#f1f1f1] p-8 md:p-10 lg:min-h-[316px]">
              <p className="font-display text-7xl font-medium text-hybr-blue">{metrics[2][0]}</p>
              <p className="mt-3 font-bold uppercase">{metrics[2][1]}</p>
              <p className="mt-5 max-w-[360px] text-lg leading-relaxed">{metrics[2][2]}</p>
              <div className="mt-8">
                <Button href="/what-we-do/our-work" variant="dark">{metrics[2][3]}</Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="work" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-2">
            <CaseCard className="min-h-[372px]" dark />
            <CaseCard className="min-h-[372px]" dark />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[588px_1fr] lg:items-start">
            <div>
              <Label>Our Work: Case Studies</Label>
              <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
                Supporting Ideas From Start To Finish
              </h2>
              <p className="mt-4 text-xl leading-relaxed">
                See how we&apos;re working with people like you to change the world.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <Button href="/what-we-do/our-work" variant="dark">All Case Studies</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
