import {
  Button,
  Footer,
  InsightCard,
  Label,
  ListingControls,
  PageHero,
} from "../_components/marketing";
import { figmaAssets } from "@/content/site";

const newsletterCategories = ["Webinars", "Articles", "News", "Newsletter"];

export default function InsightsPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="insights"
        menu={[
          { label: "Spotlight", href: "#spotlight" },
          { label: "Webinars", href: "#webinars" },
          { label: "Articles", href: "#articles" },
          { label: "News", href: "#news" },
          { label: "Newsletter", href: "#newsletter" },
        ]}
        subtitle="Understand what's changing, and what to do about it."
        title="Our Insights"
      />

      <section className="px-6 pb-8">
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
              imageSrc={figmaAssets.webinar}
              kind="Webinar"
              title="Title of Specific Webinar"
            />
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px] lg:h-[386px]">
              <InsightCard
                className="h-full"
                imageSrc={figmaAssets.article}
                kind="Article"
                title="One Liner For Specific Article"
                body="A short, captivating statement about what this article is about."
              />
            </div>
            <div className="overflow-hidden rounded-[20px] lg:h-[386px]">
              <InsightCard
                className="h-full"
                imageSrc={figmaAssets.news}
                kind="News"
                title="One Liner For Specific News Update"
                body="A short, captivating statement about what this news update covers."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="webinars" className="px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[792px]">
            <Label>Webinars</Label>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
              Understand what&apos;s changing, and how leaders are responding&mdash;live.
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Join the next session or watch past conversations.
            </p>
            <p className="mt-3 text-lg leading-relaxed">
              Understand what&apos;s changing, and how leaders are responding&mdash;live.
              Join the next session or watch past conversations.
            </p>
            <p className="mt-3 text-lg leading-relaxed">
              Learn how leaders are navigating today&apos;s toughest challenges.
            </p>
            <div className="mt-8">
              <Button href="/insights/webinars" variant="dark">View Webinars</Button>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px] lg:h-[386px]">
              <InsightCard className="h-full" imageSrc={figmaAssets.webinar} kind="Webinar" title="One Liner For Specific Webinar" />
            </div>
            <div className="overflow-hidden rounded-[20px] lg:h-[386px]">
              <InsightCard className="h-full" imageSrc={figmaAssets.webinar} kind="Webinar" title="One Liner For Specific Webinar" />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button href="/insights/webinars" variant="dark">View All Webinars</Button>
          </div>
        </div>
      </section>

      <section id="articles" className="px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-[690px_486px] lg:items-start">
            <div className="flex flex-col">
              <div className="max-w-[588px]">
                <Label>Article</Label>
                <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
                  Still unsure about what&apos;s next? Start reading and feel confident in your next move.
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  Insights from our team to help you make better decisions faster.
                </p>
                <p className="mt-3 text-lg leading-relaxed">
                  Learn what works before you decide what&apos;s next.
                </p>
                <div className="mt-8">
                  <Button href="/insights/articles" variant="dark">View All Articles</Button>
                </div>
              </div>
              <div className="mt-8 overflow-hidden rounded-[20px] lg:mt-[142px] lg:h-[386px]">
                <InsightCard className="h-full" imageSrc={figmaAssets.article} kind="Article" title="One Liner For Specific Article" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[20px] lg:h-[712px]">
              <InsightCard className="h-full" imageSrc={figmaAssets.article} kind="Article" title="One Liner For Specific Article" />
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[690px]">
            <Label>News</Label>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
              Stay current on what&apos;s shaping innovation.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[486px_690px]">
            <div className="overflow-hidden rounded-[20px] lg:h-[299px]">
              <InsightCard className="h-full" compact imageSrc={figmaAssets.news} kind="News" title="One Liner For Specific News Update" />
            </div>
            <div className="overflow-hidden rounded-[20px] lg:h-[299px]">
              <InsightCard className="h-full" compact imageSrc={figmaAssets.news} kind="News" title="One Liner For Specific News Update" />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button href="/insights/news" variant="dark">View All News</Button>
          </div>
        </div>
      </section>

      <section id="newsletter" className="px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <div
            className="relative overflow-hidden rounded-[20px] lg:h-[596px]"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.72), rgba(0,0,0,.28)), url(${figmaAssets.people})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="p-8 text-white md:p-12 lg:absolute lg:left-10 lg:top-1/2 lg:max-w-[480px] lg:-translate-y-1/2 lg:p-0">
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                Unveil more industry secrets.
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                Subscribe to get our latest thinking delivered to your inbox.
              </p>
              <p className="mt-3 text-lg leading-relaxed">
                Catch up on what matters and stay prepared for what&apos;s next.
                Stay updated with innovation news currently shaping the future
                of business.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="white">Subscribe</Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-8 md:p-12 lg:absolute lg:right-10 lg:top-1/2 lg:-translate-y-1/2 lg:p-0">
              <input
                className="w-full rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white placeholder:text-white/75 backdrop-blur-sm lg:w-[430px]"
                placeholder="Insert Your First Name"
              />
              <input
                className="w-full rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white placeholder:text-white/75 backdrop-blur-sm lg:w-[430px]"
                placeholder="Insert Your Last Name"
              />
              <input
                className="w-full rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white placeholder:text-white/75 backdrop-blur-sm lg:w-[430px]"
                placeholder="Insert Your Email"
                type="email"
              />
              <p className="max-w-[430px] text-sm text-white/80">
                Encouragement for user to subscribe to HYBR&apos;s newsletter for more perks.
              </p>
              {newsletterCategories.map((cat) => (
                <button
                  className="w-full rounded-full border border-white/30 bg-white/10 px-8 py-4 text-left text-sm font-semibold uppercase tracking-[0.04em] text-white backdrop-blur-sm lg:w-[430px]"
                  key={cat}
                  type="button"
                >
                  {cat}
                </button>
              ))}
              <button
                className="w-full rounded-full bg-white px-8 py-4 text-sm font-semibold text-black lg:w-[430px]"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
