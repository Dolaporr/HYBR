import {
  Button,
  Footer,
  InsightCard,
  ListingControls,
  PageHero,
  SearchBar,
  WhatWeDoCta,
} from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

export default function NewsPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="insights"
        menu={[
          { label: "Spotlight", href: "#spotlight" },
          { label: "Latest Updates", href: "#latest" },
          { label: "More Insights", href: "#more" },
          { label: "What We Do", href: "#what-we-do" },
        ]}
        subtitle="Updates from HYBR's work, partnerships, and ecosystem activity."
        title="News"
      />
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <SearchBar />
        </div>
      </section>
      <section id="spotlight" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-8 font-bold uppercase">Spotlight</p>
          <div className="overflow-hidden rounded-[20px] lg:h-[408px]">
            <InsightCard
              body="Short summary of what this news update/article covers."
              className="h-full"
              imageSrc={figmaAssets.figmaBuilding}
              kind="News"
              title="Headline for News Update"
            />
          </div>
          <div className="mt-12">
            <ListingControls />
          </div>
        </div>
      </section>
      <section id="latest" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-bold uppercase">Latest Updates</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[487px_1fr]">
            {[1, 2, 3, 4].map((item) => (
              <div className={`${item === 2 || item === 3 ? "lg:col-span-1" : ""} overflow-hidden rounded-[20px] lg:h-[296px]`} key={item}>
                <InsightCard
                  body="A short, captivating statement about what this news update covers."
                  className="h-full"
                  imageSrc={figmaAssets.figmaBuilding}
                  kind="News"
                  title="One Liner For Specific News Update"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/insights/news/specific-news" variant="dark">
              View All News
            </Button>
          </div>
        </div>
      </section>
      <section id="more" className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">
          <InsightCard imageSrc={figmaAssets.figmaBusinessPartners} kind="Webinar" title="One Liner For Specific Webinar" />
          <InsightCard imageSrc={figmaAssets.figmaBuilding} kind="Article" title="One Liner For Specific Article" />
        </div>
        <div className="mx-auto mt-10 max-w-[1200px]">
          <p className="font-bold uppercase">Our Insights</p>
          <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
            Catch up on what matters and stay prepared for what&apos;s next.
          </h2>
          <p className="mt-4 text-xl leading-relaxed">
            Understand what&apos;s changing, and what to do about it.
          </p>
        </div>
      </section>
      <div id="what-we-do">
        <WhatWeDoCta />
      </div>
      <Footer />
    </main>
  );
}
