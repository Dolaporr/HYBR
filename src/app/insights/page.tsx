import {
  Button,
  Footer,
  ImagePanel,
  InsightCard,
  Label,
  PageHero,
  WhatWeDoCta,
} from "../_components/marketing";
import { figmaAssets } from "@/content/site";

export default function InsightsPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="insights"
        menu={[
          { label: "Articles", href: "#articles" },
          { label: "Webinars", href: "#webinars" },
          { label: "News", href: "#news" },
          { label: "What We Do", href: "#what-we-do" },
        ]}
        subtitle="Understand what's changing, and what to do about it."
        title="Insights"
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 lg:grid-cols-[1fr_486px]">
          <article
            id="articles"
            className="overflow-hidden rounded-3xl bg-black p-10 text-white"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.72)), url(${figmaAssets.article})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Label>Article</Label>
            <h2 className="mt-64 font-display text-5xl font-medium">
              One Liner For Specific Article
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
          <div className="space-y-6">
            <article
              id="webinars"
              className="rounded-3xl bg-black p-8 text-white"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.68)), url(${figmaAssets.webinar})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <Label>Webinar</Label>
              <h3 className="mt-32 font-display text-4xl font-medium">
                One Liner For Specific Webinar
              </h3>
              <p className="mt-4">Jedidiah Akpata & Charles Ojei</p>
              <p>November 2023</p>
              <p className="mt-6 text-right font-bold">01:40:35</p>
            </article>
            <InsightCard
              body="A short, captivating statement about what this news update covers."
              kind="News"
              title="One Liner For Specific News Update"
            />
          </div>
        </div>
      </section>

      <section id="news" className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-center">
          <ImagePanel
            className="h-[260px] rounded-[32px] sm:h-[336px] sm:rounded-full"
            src={figmaAssets.people}
          />
          <div>
            <Label>Our Insights</Label>
            <h2 className="mt-3 font-display text-5xl font-medium">
              Connect with our latest thinking.
            </h2>
            <p className="mt-5 text-xl leading-relaxed">
              Explore ideas and perspectives designed to help organisations
              understand what is changing and what it means for the decisions
              they make next.
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="/insights/articles">Articles</Button>
              <Button href="/insights/news" variant="dark">
                News
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div id="what-we-do">
        <WhatWeDoCta />
      </div>
      <Footer />
    </main>
  );
}
