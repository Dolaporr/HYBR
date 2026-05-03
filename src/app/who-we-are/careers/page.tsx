import { Button, Footer, ImagePanel, Label, PageHero } from "../../_components/marketing";

const benefits = [
  "Work with Purpose",
  "A Culture Built on Curiosity & Creativity",
  "Grow Faster Than You Thought Possible",
  "Build What Comes Next",
];

export default function CareersPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="who"
        menu={[
          { label: "Working at HYBR", href: "#working" },
          { label: "Why Join", href: "#why" },
          { label: "Open Roles", href: "#roles" },
        ]}
        subtitle="Explore career paths designed for curious minds ready to build what's next."
        title="Careers"
      />
      <section id="working" className="px-6 pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Label>Working at HYBR</Label>
            <h2 className="mt-3 font-display text-5xl font-medium leading-tight">
              Your ideas do not sit on a shelf - they shape real impact.
            </h2>
            <p className="mt-6 text-2xl leading-relaxed">
              At HYBR, your ideas shape how organizations innovate, grow, and
              create real impact across Africa and beyond.
            </p>
          </div>
          <ImagePanel className="h-[336px] rounded-full" />
        </div>
      </section>
      <section id="why" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Why Join?</Label>
          <h2 className="mt-3 font-display text-5xl font-medium">
            Why become a HYBRian?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <article className="rounded-3xl bg-black p-10 text-white" key={benefit}>
                <h3 className="font-display text-4xl font-medium">{benefit}</h3>
                <p className="mt-6 text-xl leading-relaxed">
                  Every project is an opportunity to solve meaningful problems
                  and contribute to the future of work, leadership, and
                  innovation.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="roles" className="px-6 py-24">
        <div className="mx-auto rounded-3xl bg-[#f1f1f1] p-12 max-w-[1200px]">
          <Label>Open Roles</Label>
          <div className="mt-8 space-y-4">
            {[1, 2, 3].map((role) => (
              <div
                className="flex items-center justify-between rounded-2xl bg-white p-6"
                key={role}
              >
                <div>
                  <h3 className="font-display text-3xl font-medium">
                    Name of Position/Role
                  </h3>
                  <p>Tier | Department | Location</p>
                </div>
                <Button href="/contact" variant="dark">
                  Apply
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
