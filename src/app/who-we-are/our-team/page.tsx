import { Button, Footer, ImagePanel, Label, PageHero } from "../../_components/marketing";

const groups = ["Core", "Associates", "Affiliates", "Advisors"];

export default function OurTeamPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="who"
        menu={[
          { label: "Our Network", href: "#network" },
          { label: "Meet The Team", href: "#team" },
          { label: "More About Us", href: "#about" },
        ]}
        subtitle="Explore the network model behind the people powering HYBR."
        title="Our Team"
      />
      <section id="network" className="px-6 pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_520px] lg:items-center">
          <div>
            <Label>Our Network</Label>
            <h2 className="mt-3 font-display text-5xl font-medium leading-tight">
              Our network model enables us to go further faster.
            </h2>
            <p className="mt-6 text-2xl leading-relaxed">
              We combine core operators, associates, affiliates, and advisors to
              bring focused expertise to each innovation challenge.
            </p>
          </div>
          <ImagePanel className="h-[336px] rounded-full" />
        </div>
      </section>
      <section id="team" className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <article className="rounded-3xl bg-black p-10 text-white" key={group}>
              <h2 className="font-display text-5xl font-medium">{group}</h2>
              <p className="mt-8 text-xl leading-relaxed">
                Responsible for adding distinctive expertise, critique, and
                execution capacity to HYBR&apos;s work.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section id="about" className="px-6 py-24 text-center">
        <Label>More About Us</Label>
        <h2 className="mx-auto mt-3 max-w-[900px] font-display text-5xl font-medium">
          Learn more about the purpose behind HYBR.
        </h2>
        <div className="mt-8">
          <Button href="/who-we-are/about-us" variant="dark">
            About Us
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
