import {
  Button,
  Footer,
  ImagePanel,
  InsightCard,
  Label,
  ListingControls,
  PageHero,
} from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

export default function ArticlesPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="insights"
        menu={[
          { label: "Spotlight", href: "#spotlight" },
          { label: "Recent Articles", href: "#recent" },
          { label: "More Insights", href: "#more" },
        ]}
        subtitle="Learn what works before you decide what's next."
        title="Articles"
      />

      <section className="px-6 pb-6">
        <div className="mx-auto max-w-[1200px]">
          <ListingControls />
        </div>
      </section>

      <section id="spotlight" className="px-6 pb-16">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-6 font-bold uppercase">Spotlight</p>
          <div className="overflow-hidden rounded-[20px] lg:h-[408px]">
            <InsightCard
              className="h-full"
              imageSrc={figmaAssets.article}
              kind="Article"
              title="Article Headline"
              body="Short captivating blurb covering what this article is about."
            />
          </div>
        </div>
      </section>

      <section id="recent" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Recent Articles</Label>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div className="overflow-hidden rounded-[20px]" key={i}>
                <InsightCard
                  className="h-full"
                  compact
                  imageSrc={figmaAssets.article}
                  kind="Article"
                  title="One Liner For Specific Article"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/insights/articles/specific-article" variant="dark">View All Articles</Button>
          </div>
        </div>
      </section>

      <section id="more" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-[486px_690px] lg:items-start">
            <div className="overflow-hidden rounded-[20px] lg:h-[712px]">
              <InsightCard className="h-full" imageSrc={figmaAssets.article} kind="Article" title="One Liner For Specific Article" />
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <Label>More Insights</Label>
                <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
                  Understand what&apos;s changing, and what to do about it.
                </h2>
                <div className="mt-6">
                  <Button href="/insights" variant="dark">All Insights</Button>
                </div>
              </div>
              <div className="overflow-hidden rounded-[20px] lg:h-[386px]">
                <InsightCard className="h-full" imageSrc={figmaAssets.webinar} kind="Webinar" title="One Liner For Specific Webinar" />
              </div>
              <div className="overflow-hidden rounded-[20px] lg:h-[386px]">
                <InsightCard
                  body="A short, captivating statement about what this news update covers."
                  className="h-full"
                  imageSrc={figmaAssets.news}
                  kind="News"
                  title="One Liner For Specific News Update"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[588px_1fr] lg:items-center">
            <div>
              <Label>Our Insights</Label>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
                Connect with our latest thinking.
              </h2>
              <p className="mt-5 text-xl leading-relaxed">
                Explore ideas and perspectives designed to help organisations understand what is changing and what it means for the decisions they make next.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/insights/webinars">Webinars</Button>
                <Button href="/insights/news" variant="dark">News</Button>
              </div>
            </div>
            <ImagePanel
              className="h-[260px] rounded-[32px] sm:h-[336px]"
              overlay="linear-gradient(90deg, rgba(25,106,180,.22), rgba(0,0,0,.1))"
              src={figmaAssets.people}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
