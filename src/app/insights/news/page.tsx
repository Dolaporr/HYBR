import {
  Button,
  Footer,
  InsightCard,
  ListingControls,
  PageHero,
  WhatWeDoCta,
} from "../../_components/marketing";

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
      <section id="spotlight" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex items-center justify-between gap-6">
            <p className="font-bold uppercase">Spotlight</p>
            <ListingControls />
          </div>
          <article className="rounded-3xl bg-black p-10 text-white">
            <h2 className="mt-80 font-display text-5xl font-medium">
              Headline for News Update
            </h2>
            <p className="mt-4 text-xl">
              Short summary of what this news update/article covers.
            </p>
            <div className="mt-8">
              <Button href="/insights/news/specific-news" variant="white">
                Read More
              </Button>
            </div>
          </article>
        </div>
      </section>
      <section id="latest" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-bold uppercase">Latest Updates</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <InsightCard
                body="A short, captivating statement about what this news update covers."
                key={item}
                kind="News"
                title="One Liner For Specific News Update"
              />
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
          <InsightCard kind="Webinar" title="One Liner For Specific Webinar" />
          <InsightCard kind="Insights" title="Understand what's changing, and what to do about it." />
        </div>
      </section>
      <div id="what-we-do">
        <WhatWeDoCta />
      </div>
      <Footer />
    </main>
  );
}
