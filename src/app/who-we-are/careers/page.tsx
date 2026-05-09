import { Button, Footer, ImagePanel, Label, PageHero } from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

const whyJoinTop = [
  {
    title: "Work with Purpose",
    body: "Every project is an opportunity to solve meaningful problems and contribute to the future of work, leadership, and innovation.",
  },
  {
    title: "A Culture Built on Curiosity & Creativity",
    body: "We believe in experimentation, questioning assumptions, and exploring new ways to solve problems.",
  },
  {
    title: "Grow Faster Than You Thought Possible",
    body: "Evolve as a creator and professional. You'll work on challenges that accelerate your growth, from ambitious projects to cross-collaboration.",
  },
];

const benefits = Array.from({ length: 7 }, () => "Benefit Name");

const openRoles = Array.from({ length: 5 }, () => ({
  title: "Name of Position/Role",
  tags: "Tier | Department | Location",
}));

export default function CareersPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="who"
        menu={[
          { label: "Working at HYBR", href: "#working" },
          { label: "Why Join", href: "#why" },
          { label: "Team Testimonials", href: "#testimonials" },
          { label: "Benefits", href: "#benefits" },
          { label: "Innovation Fellowship", href: "#fellowship" },
          { label: "Open Roles", href: "#roles" },
        ]}
        subtitle="Explore career paths designed for curious minds ready to build what's next."
        title="Careers"
      />

      <section id="working" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <ImagePanel
            className="min-h-[336px] rounded-l-full rounded-r-[20px] lg:ml-auto lg:w-[976px]"
            overlay="linear-gradient(90deg, rgba(0,0,0,.14), rgba(0,0,0,.58))"
            src={figmaAssets.figmaBusinessPartners}
          >
            <div className="flex min-h-[336px] items-center p-8 text-white md:p-12 lg:ml-auto lg:w-[612px]">
              <div>
                <Label>Working at HYBR</Label>
                <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
                  At HYBR, your ideas don&apos;t sit on a shelf — they shape real impact.
                </h2>
              </div>
            </div>
          </ImagePanel>
        </div>
      </section>

      <section id="why" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>Why Join?</Label>
          <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
            Why become a HYBRian?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyJoinTop.map((card) => (
              <article className="rounded-[20px] bg-black p-8 text-white md:p-10" key={card.title}>
                <h3 className="font-display text-3xl font-medium leading-tight">{card.title}</h3>
                <p className="mt-6 text-base leading-relaxed md:text-lg">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-[20px] bg-black p-8 text-white md:p-10">
              <h3 className="font-display text-3xl font-medium leading-tight">
                We&apos;re Definitely not Boring
              </h3>
              <p className="mt-6 text-base leading-relaxed md:text-lg">
                We work hard, laugh often, and support one another. You&apos;ll join a team that values empathy, openness, and genuine human connection.
              </p>
            </article>
            <ImagePanel
              className="min-h-[237px] rounded-[20px]"
              overlay="linear-gradient(90deg, rgba(0,0,0,.08), rgba(0,0,0,.18))"
              src={figmaAssets.figmaBusinessPartners}
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-[894px]">
            <Label>Our Team</Label>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
              Hear from Our Own.
            </h2>
            <p className="mt-4 text-xl leading-relaxed">
              Our people are the pulse of HYBR. Discover the insights, stories, and lived experiences shaping our innovation journey.
            </p>
          </div>
          <div
            className="figma-testimonial-card relative mt-12 min-h-[344px] overflow-hidden rounded-[20px] bg-black p-8 text-white md:p-12"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.72), rgba(0,0,0,.24)), url(${figmaAssets.figmaBuilding})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <img
              alt=""
              className="absolute bottom-0 right-6 hidden h-[320px] w-[260px] object-cover object-top md:block"
              src={figmaAssets.figmaTeamPortrait}
            />
            <p className="relative max-w-[760px] font-display text-3xl font-medium leading-snug md:text-4xl">
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim fringilla feugiat. Praesent sed condimentum nulla.&rdquo;
            </p>
            <div className="relative mt-8 flex flex-wrap gap-3 text-sm font-semibold uppercase text-white/75">
              <span>FirstName LastName</span>
              <span>|</span>
              <span>Title/Role</span>
              <span>|</span>
              <span>Location</span>
            </div>
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
              <span className="h-3 w-3 rounded-full bg-[#8dc540]" />
              <span className="h-3 w-3 rounded-full bg-white/55" />
              <span className="h-3 w-3 rounded-full bg-white/55" />
            </div>
            <button className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-5xl text-[#8dc540] md:block" type="button">
              ‹
            </button>
            <button className="absolute right-4 top-1/2 hidden -translate-y-1/2 text-5xl text-[#8dc540] md:block" type="button">
              ›
            </button>
          </div>
        </div>
      </section>

      <section id="benefits" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[1036px] text-center">
            <Label>Benefits</Label>
            <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
              Benefits of Working with Us
            </h2>
            <p className="mt-4 text-xl leading-relaxed">
              Our benefits are designed to support your journey and empower you with the tools to build a career you are proud of.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-[996px] gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div className="flex items-center gap-4 rounded-[16px] bg-[#f1f1f1] p-6" key={`${benefit}-${index}`}>
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

      <section id="fellowship" className="px-6 pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[588px_1fr] lg:items-center">
          <div>
            <Label>Innovation Fellowship</Label>
            <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
              Accelerating the next generation of Innovation leaders.
            </h2>
            <p className="mt-4 text-xl leading-relaxed">
              Our Innovation Fellowship Program connects ambitious talent with live projects, expert guidance, and a dynamic learning environment designed to shape thinkers who solve problems, create impact, and drive meaningful transformation.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="dark">Learn More</Button>
            </div>
          </div>
          <ImagePanel
            className="min-h-[360px] rounded-l-full rounded-r-[20px]"
            overlay="linear-gradient(90deg, rgba(0,0,0,.04), rgba(0,0,0,.16))"
            src={figmaAssets.figmaBusinessPartners}
          />
        </div>
      </section>

      <section className="px-6 pb-24">
        <div
          className="mx-auto min-h-[430px] max-w-[1200px] overflow-hidden rounded-[20px] bg-black p-8 text-white md:p-12"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.7), rgba(0,0,0,.28)), url(${figmaAssets.figmaBusinessPartners})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <p className="font-bold uppercase">In Partnership With 7EDU Impact Academy</p>
          <p className="mt-2 font-bold uppercase text-[#8dc540]">Alpha</p>
          <h2 className="mt-4 max-w-[640px] font-display text-4xl font-medium md:text-5xl">
            Join the 2026 HYBR internship program.
          </h2>
          <p className="mt-4 max-w-[680px] text-xl leading-relaxed">
            Through hands-on projects, mentorship, and collaboration, the HYBR Industry Shadowing Program gives bright young talents the chance to build new skills and contribute to real industry challenges.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="white">Learn More</Button>
          </div>
        </div>
      </section>

      <section id="roles" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="font-display text-4xl font-medium leading-tight md:text-5xl">
            Open Roles
          </h2>
          <p className="mt-4 text-xl leading-relaxed">
            A short, captivating statement about what this section is for.
          </p>
          <div className="mt-10">
            {openRoles.map((role, index) => (
              <div key={`${role.title}-${index}`}>
                <div className="h-px bg-black/10" />
                <div className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
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
          className="mx-auto grid min-h-[596px] max-w-[1200px] gap-10 overflow-hidden rounded-[20px] bg-black p-8 text-white md:p-12 lg:grid-cols-2"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.72), rgba(0,0,0,.34)), url(${figmaAssets.figmaBusinessPartners})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="self-center">
            <h2 className="font-display text-4xl font-medium md:text-5xl">
              We&apos;d Love to Get to Know You.
            </h2>
            <p className="mt-4 text-xl leading-relaxed">
              We&apos;re always looking to connect with talented folks like you. Show us what you&apos;ve got or tell us what you do.
            </p>
          </div>
          <form className="self-center space-y-4">
            <input className="field" placeholder="Insert Your First Name" />
            <input className="field" placeholder="Insert Your Last Name" />
            <input className="field" placeholder="Insert Your Email" type="email" />
            <button className="min-h-14 w-full rounded-full bg-white px-8 text-lg font-medium text-black" type="button">
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
