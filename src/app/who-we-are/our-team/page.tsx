import { Button, Footer, ImagePanel, Label, PageHero } from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

const teamGroups = [
  { label: "Core", description: "Responsible for the operation and function of the business across strategy, operations, commercial, finance, and communications." },
  { label: "Associates", description: "Subject matter authorities and/ or niche experts with distinctive highly specialised skills sets. Supplement the Core team with in-depth proficiencies." },
  { label: "Affiliates", description: "Networked organisations and / or individuals offer a broad range of services that complement the Core team." },
  { label: "Advisors", description: "World authorities and renowned experts in their fields who provide the critique necessary for improvement and progression." },
];

const teamMembers = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: "Team Member Name",
  role: i === 0 ? "Marketing & Communications Analyst" : "Role Title",
}));

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
        <div className="mx-auto max-w-[1200px]">
          <div
            className="relative overflow-hidden rounded-[20px] lg:h-[344px]"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(25,106,180,.18), rgba(0,0,0,.08)), url(${figmaAssets.people})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex min-h-[220px] items-end p-8 md:p-12 lg:min-h-0">
              <p className="font-bold uppercase text-white lg:absolute lg:left-10 lg:top-10">
                Our Network
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {teamGroups.map((group) => (
              <div className="rounded-[20px] bg-[#f1f1f1] p-8" key={group.label}>
                <h3 className="font-display text-3xl font-medium">{group.label}</h3>
                <p className="mt-4 text-base leading-relaxed">{group.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="max-w-[894px] text-xl leading-relaxed">
              Our network model enables us to go further faster, be radically
              original, achieve greater lasting impact, and do so with ruthless
              efficiency.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#team">View as Single Page</Button>
            <Button href="/who-we-are/about-us" variant="dark">Learn More About Us</Button>
          </div>
        </div>
      </section>

      <section id="team" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Core Team</Label>
          <p className="mt-2 text-xl leading-relaxed">
            Oversees strategy, operations, commercial, finance, and
            communications, supported by expert specialists and project managers.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                className="relative overflow-hidden rounded-[20px] lg:h-[425px]"
                key={member.id}
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.62)), url(${figmaAssets.people})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-display text-2xl font-medium">{member.name}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] opacity-75">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 pb-36">
        <div className="mx-auto max-w-[1200px]">
          <Label>Tiers</Label>
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                The people powering HYBR: innovators obsessed with building what&apos;s next.
              </h2>
              <p className="mt-5 text-xl leading-relaxed">
                Empowering organizations to unlock new value, create impact,
                and shape tomorrow.
                <br />
                <br />
                Build what&apos;s next - collaborate, experiment, and create
                change with HYBR. Join a team where curiosity, creativity, and
                impact drive everything we do.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/who-we-are/about-us">About Us</Button>
                <Button href="/who-we-are/careers" variant="dark">Join Us</Button>
              </div>
            </div>
            <ImagePanel className="h-[280px] rounded-2xl md:h-[336px]" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
