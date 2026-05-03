import {
  Button,
  Footer,
  InsightCard,
  ListingControls,
  PageHero,
} from "../../_components/marketing";

export default function WebinarsPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="insights"
        menu={[
          { label: "Featured", href: "#featured" },
          { label: "Recent Webinars", href: "#recent" },
          { label: "More Insights", href: "#more" },
        ]}
        subtitle="Conversations and sessions for leaders building what's next."
        title="Webinars"
      />
      <section id="featured" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex items-center justify-between gap-6">
            <p className="font-bold uppercase">Featured Webinar</p>
            <ListingControls />
          </div>
          <article className="rounded-3xl bg-black p-10 text-white">
            <p className="font-bold uppercase">Webinar</p>
            <h2 className="mt-80 font-display text-5xl font-medium">
              One Liner For Specific Webinar
            </h2>
            <p className="mt-4">Jedidiah Akpata & Charles Ojei</p>
            <p>November 2023</p>
            <p className="mt-8 text-right font-bold">01:40:35</p>
          </article>
        </div>
      </section>
      <section id="recent" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-bold uppercase">Recent Webinars</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <InsightCard
                key={item}
                kind="Webinar"
                title="One Liner For Specific Webinar"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/insights" variant="dark">
              More Insights
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
