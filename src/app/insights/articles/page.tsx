import {
  Button,
  Footer,
  InsightCard,
  ListingControls,
  PageHero,
  WhatWeDoCta,
} from "../../_components/marketing";

export default function ArticlesPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="insights"
        menu={[
          { label: "Spotlight", href: "#spotlight" },
          { label: "Recent Articles", href: "#recent" },
          { label: "More Insights", href: "#more" },
          { label: "What We Do", href: "#what-we-do" },
        ]}
        subtitle="Learn what works before you decide what's next."
        title="Articles"
      />
      <section id="spotlight" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex items-center justify-between gap-6">
            <p className="font-bold uppercase">Spotlight</p>
            <ListingControls />
          </div>
          <article className="rounded-3xl bg-black p-10 text-white">
            <h2 className="mt-80 font-display text-5xl font-medium">
              Article Headline
            </h2>
            <p className="mt-4 text-xl">
              Short captivating blurb covering what this article is about.
            </p>
            <div className="mt-8">
              <Button href="/insights/articles/specific-article" variant="white">
                Read More
              </Button>
            </div>
          </article>
        </div>
      </section>
      <section id="recent" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-bold uppercase">Recent Articles</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <InsightCard
                key={item}
                kind="Article"
                title="One Liner For Specific Article"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/insights/articles/specific-article" variant="dark">
              View All Articles
            </Button>
          </div>
        </div>
      </section>
      <section id="more" className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-2">
          <InsightCard kind="Webinar" title="One Liner For Specific Webinar" />
          <InsightCard
            body="A short, captivating statement about what this news update covers."
            kind="News"
            title="One Liner For Specific News Update"
          />
        </div>
      </section>
      <div id="what-we-do">
        <WhatWeDoCta />
      </div>
      <Footer />
    </main>
  );
}
