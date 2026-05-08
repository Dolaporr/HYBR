import {
  Button,
  CaseCard,
  Footer,
  ListingControls,
  PageHero,
} from "../../_components/marketing";

export default function OurWorkPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="what"
        menu={[
          { label: "Spotlight", href: "#spotlight" },
          { label: "Search & Filter", href: "#search" },
          { label: "Recent Case Studies", href: "#recent" },
          { label: "Our Services", href: "#services" },
        ]}
        subtitle="Ideas are easy. Getting results is work."
        title="Our Work"
      />

      <section id="spotlight" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="mb-8 font-bold uppercase">Spotlight</p>
          <CaseCard dark />
          <div className="mt-10 flex items-center justify-between gap-4">
            <ListingControls />
          </div>
        </div>
      </section>

      <section id="recent" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-bold uppercase">Case Studies</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <CaseCard dark />
            <CaseCard />
          </div>
          <div className="mt-10 text-center">
            <Button href="/case-studies/one-liner" variant="dark">
              View All Case Studies
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto rounded-3xl bg-black p-12 text-white max-w-[1200px]">
          <p className="font-bold uppercase">Our Services</p>
          <h2 className="mt-3 font-display text-5xl font-medium">
            Curious how we do it? Explore our services.
          </h2>
          <p className="mt-4 text-xl">
            Discover how our services support ideas from start to finish.
          </p>
          <div className="mt-8">
            <Button href="/what-we-do/services" variant="white">
              Our Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
