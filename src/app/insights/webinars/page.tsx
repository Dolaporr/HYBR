import {
  Button,
  Footer,
  InsightCard,
  Label,
  ListingControls,
  PageHero,
} from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

const webinarImages = [
  figmaAssets.figmaBusinessPartners,
  figmaAssets.figmaBuilding,
  figmaAssets.figmaFieldHero,
  figmaAssets.figmaBuilding,
  figmaAssets.figmaFieldHero,
  figmaAssets.figmaBusinessPartners,
];

export default function WebinarsPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="insights"
        menu={[
          { label: "Spotlight", href: "#spotlight" },
          { label: "Recent Webinars", href: "#recent" },
          { label: "More Insights", href: "#more" },
        ]}
        subtitle="Learn how leaders are navigating today's toughest challenges."
        title="Webinars"
      />

      <section id="spotlight" className="px-6 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-6 font-bold uppercase">Spotlight</p>
          <div className="overflow-hidden rounded-[20px] lg:h-[408px]">
            <InsightCard
              className="h-full"
              imageSrc={figmaAssets.figmaBuilding}
              kind="Webinar"
              title="Title of Specific Webinar"
            />
          </div>
          <div className="mt-12">
            <ListingControls />
          </div>
        </div>
      </section>

      <section id="recent" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Recent Webinars</Label>
          <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
            Newest Webinars
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => (
              <div className="overflow-hidden rounded-[20px] lg:h-[357px]" key={i}>
                <InsightCard
                  className="h-full"
                  imageSrc={webinarImages[i % webinarImages.length]}
                  kind="Webinar"
                  title="Title of Specific Webinar"
                  body="Speaker 1 & Speaker 2 Date/Period Added"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/insights" variant="dark">View All Webinars</Button>
          </div>
        </div>
      </section>

      <section id="more" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-[486px_690px] lg:items-start">
            <div className="overflow-hidden rounded-[20px] lg:h-[712px]">
              <InsightCard className="h-full" imageSrc={figmaAssets.figmaBuilding} kind="Article" title="One Liner For Specific Article" />
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <Label>Our Insights</Label>
                <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
                  Understand what&apos;s changing, and what to do about it.
                </h2>
                <p className="mt-4 text-xl leading-relaxed">
                  Learn how leaders are navigating today&apos;s toughest challenges.
                </p>
                <div className="mt-6">
                  <Button href="/insights" variant="dark">All Insights</Button>
                </div>
              </div>
              <div className="overflow-hidden rounded-[20px] lg:h-[386px]">
                <InsightCard
                  body="A short, captivating statement about what this news update covers."
                  className="h-full"
                  imageSrc={figmaAssets.figmaBuilding}
                  kind="News"
                  title="One Liner For Specific News Update"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
