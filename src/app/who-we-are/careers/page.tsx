import { Button, Footer, ImagePanel, Label, PageHero } from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

const whyJoinRow1 = [
  {
    title: "Work with Purpose",
    body: "Every project is an opportunity to solve challenges that matter—for businesses, communities, and entire ecosystems.",
  },
  {
    title: "A Culture of Experimentation",
    body: "We embrace testing and iteration. Fail fast, learn faster—and build something better.",
  },
  {
    title: "Grow Faster Than You Thought Possible",
    body: "At HYBR, you don't wait for opportunity. You help create it. Growth happens every time you push a boundary.",
  },
];

const whyJoinRow2 = [
  {
    title: "A Culture Built on Curiosity & Creativity",
    body: "We believe the best ideas come from teams that feel free to explore, experiment, and challenge the status quo.",
  },
  {
    title: "Build What Comes Next",
    body: "From frontier markets to global stages, you'll work at the edge of what's possible.",
  },
];

const benefits = [
  "Benefit Name",
  "Benefit Name",
  "Benefit Name",
  "Benefit Name",
  "Benefit Name",
  "Benefit Name",
  "Benefit Name",
];

const openRoles = [
  { title: "Name of Position/Role", tags: "Tier | Department | Location" },
  { title: "Name of Position/Role", tags: "Tier | Department | Location" },
  { title: "Name of Position/Role", tags: "Tier | Department | Location" },
  { title: "Name of Position/Role", tags: "Tier | Department | Location" },
  { title: "Name of Position/Role", tags: "Tier | Department | Location" },
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
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-[612px_1fr] lg:items-start">
            <div>
              <Label>Working at HYBR</Label>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
                At HYBR, your ideas don&apos;t sit on a shelf - they shape real impact.
              </h2>
              <p className="mt-6 text-xl leading-relaxed">
                At HYBR, your ideas don&apos;t sit on a shelf - they shape how organizations innovate, grow, and create real impact across Africa and beyond. Help organizations solve real challenges.
              </p>
            </div>
            <div />
          </div>
          <ImagePanel className="mt-10 h-[280px] rounded-2xl md:h-[336px]" />
        </div>
      </section>

      <section id="why" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Why Join?</Label>
          <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
            Why become a HYBRian?
          </h2>
          <p className="mt-4 max-w-[760px] text-xl leading-relaxed">
            Every project is an opportunity to solve meaningful problems and
            contribute to the future of work, leadership, and innovation.
          </p>
          <div className="mt-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {whyJoinRow1.map((card) => (
                <article className="rounded-[20px] bg-[#f1f1f1] p-8 md:p-10" key={card.title}>
                  <h3 className="font-display text-3xl font-medium leading-tight">{card.title}</h3>
                  <p className="mt-6 text-base leading-relaxed md:text-lg">{card.body}</p>
                </article>
              ))}
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {whyJoinRow2.map((card) => (
                <article className="rounded-[20px] bg-[#f1f1f1] p-8 md:p-10" key={card.title}>
                  <h3 className="font-display text-3xl font-medium leading-tight">{card.title}</h3>
                  <p className="mt-6 text-base leading-relaxed md:text-lg">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Our Team</Label>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
            Hear from Our Own.
          </h2>
          <p className="mt-4 max-w-[760px] text-xl leading-relaxed">
            Our people are the pulse of HYBR. Discover the insights, stories,
            and lived experiences shaping our innovation journey.
          </p>
          <div
            className="relative mt-10 overflow-hidden rounded-[20px] lg:h-[344px]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.52)), url(${figmaAssets.people})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex min-h-[220px] items-end justify-end p-8 md:p-12">
              <Button href="/who-we-are/our-team" variant="white">Meet The Team</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px] rounded-[24px] bg-black p-8 text-white md:p-12">
          <p className="max-w-[860px] font-display text-3xl font-medium leading-snug md:text-4xl">
            &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            dignissim fringilla feugiat. Praesent sed condimentum nulla.
            Praesent lacinia eleifend turpis, sit amet dignissim massa accumsan
            in.&rdquo;
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold uppercase text-white/75">
            <span>FirstName LastName</span>
            <span>|</span>
            <span>Title/Role</span>
            <span>|</span>
            <span>Location</span>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Benefits</Label>
          <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
            Benefits of Working with Us
          </h2>
          <p className="mt-4 max-w-[760px] text-xl leading-relaxed">
            Our benefits are designed to support your journey and empower you
            with the tools to build a career you are proud of.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                className="flex items-center gap-4 rounded-[16px] bg-[#f1f1f1] p-6"
                key={benefit}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 20 20">
                    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 10l2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.06em]">{benefit}</p>
                  <p className="mt-1 text-sm">Brief description of benefit</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Innovation Fellowship</Label>
          <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
            We&apos;re Definitely not Boring
          </h2>
          <p className="mt-4 max-w-[860px] text-xl leading-relaxed">
            Accelerating the next generation of Innovation leaders.
            Our Innovation Fellowship Program connects ambitious talent with
            live projects, expert guidance, and a dynamic learning environment
            designed to shape thinkers who solve problems, create impact, and
            drive meaningful transformation.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-[20px] bg-[#f1f1f1] p-8">
              <p className="text-lg leading-relaxed">
                We work hard, laugh often, and support one another. You&apos;ll
                join a team that values empathy, openness, and genuine human
                connection - a team where your voice matters and your
                contributions are valued.
              </p>
            </article>
            <article className="rounded-[20px] bg-[#f1f1f1] p-8">
              <p className="text-lg leading-relaxed">
                We believe in experimentation, questioning assumptions, and
                exploring new ways to solve problems.
              </p>
            </article>
            <article className="rounded-[20px] bg-[#f1f1f1] p-8">
              <p className="text-lg leading-relaxed">
                Evolve as a creator and professional. You&apos;ll work on
                challenges that accelerate your growth, from ambitious projects
                to cross-collaboration.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px] rounded-[24px] bg-[#f1f1f1] p-8 md:p-12">
          <p className="font-bold uppercase">In Partnership With 7EDU Impact Academy</p>
          <p className="mt-2 font-bold uppercase text-hybr-blue">Alpha</p>
          <h2 className="font-display text-4xl font-medium md:text-5xl">
            Join the 2026 HYBR internship program.
          </h2>
          <p className="mt-4 text-xl leading-relaxed">
            Through hands-on projects, mentorship, and collaboration, the HYBR
            Industry Shadowing Program gives bright young talents the chance to
            build new skills, gain practical experience, and contribute to real
            industry challenges with guidance from seasoned experts.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 rounded-[24px] bg-black p-8 text-white md:p-12 lg:grid-cols-2">
          <div>
            <Label>Newsletter</Label>
            <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
              We&apos;d Love to Get to Know You.
            </h2>
            <p className="mt-4 text-xl leading-relaxed">
              We&apos;re always looking to connect with talented folks like you.
              Show us what you&apos;ve got or tell us what you do.
            </p>
            <p className="mt-8 font-bold uppercase">Team Testimonials</p>
          </div>
          <form className="space-y-4">
            <input className="field" placeholder="Insert Your First Name" />
            <input className="field" placeholder="Insert Your Last Name" />
            <input className="field" placeholder="Insert Your Email" type="email" />
            <button className="min-h-14 w-full rounded-full bg-white px-8 text-lg font-medium text-black" type="button">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.62), rgba(0,0,0,.28)), url(${figmaAssets.people})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[588px_1fr] lg:items-center">
            <div className="text-white">
              <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
                In partnership with the best.
              </h2>
              <p className="mt-5 text-xl leading-relaxed">
                We collaborate with world-class organizations to bring transformative innovation to every market we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="roles" className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Open Roles</Label>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
            Open Roles
          </h2>
          <p className="mt-4 text-xl leading-relaxed">
            A short, captivating statement about what this section is for.
          </p>
          <div className="mt-10">
            {openRoles.map((role, i) => (
              <div key={role.title + i}>
                <div className="h-px bg-black/10" />
                <div className="flex items-center justify-between gap-4 py-6">
                  <div>
                    <h3 className="font-display text-2xl font-medium md:text-3xl">{role.title}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-black/60">{role.tags}</p>
                  </div>
                  <Button href="/contact" variant="dark">Apply Now</Button>
                </div>
              </div>
            ))}
            <div className="h-px bg-black/10" />
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div
          className="mx-auto overflow-hidden rounded-[20px] max-w-[1200px] relative lg:h-[596px]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.72)), url(${figmaAssets.people})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="p-8 text-white md:p-12 lg:absolute lg:left-10 lg:top-1/2 lg:max-w-[540px] lg:-translate-y-1/2 lg:p-0">
            <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
              Ready to build the future?
            </h2>
            <p className="mt-5 text-xl leading-relaxed">
              Join us and build the future — turning tough challenges into breakthrough solutions.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="white">Apply Now</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
