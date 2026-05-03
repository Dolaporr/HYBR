import {
  Button,
  CaseCard,
  Footer,
  Label,
  PageHero,
} from "../../_components/marketing";

const services = [
  {
    title: "Discover",
    body: "We help you discover what matters most. Using applied research, data and analytics, innovation sourcing, and value chain diagnostics, we reveal insights that guide confident decisions and unlock real value.",
    list: [
      "Applied Research",
      "Value Chain Diagnostics",
      "Innovation Sourcing",
      "Data & Analytics",
    ],
  },
  {
    title: "Develop",
    body: "Where insight becomes action. Through product and service innovation, experience design, fast prototyping, and field experiments, concepts evolve into solutions that work in practice.",
    list: [
      "Product & Service Innovation",
      "User Experience & Interface Design",
      "Rapid Prototyping",
      "Pilot & Field Experiments",
    ],
  },
  {
    title: "Deploy",
    body: "Your solutions are ready for the real world. From go-to-market strategy and venture building to scaling execution and impact assessment, everything is focused on helping you launch with confidence and grow with purpose.",
    list: [
      "Go-To Market Strategy",
      "Venture Building",
      "Market Execution and Scaling",
      "Impact Assessment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="what"
        menu={[
          { label: "HYBR's Impact", href: "#impact" },
          { label: "Our Work", href: "#work" },
          { label: "Let's Talk", href: "#talk" },
        ]}
        subtitle="Built to attain your goals - find the service that fits your next step."
        title="Our Services"
      />

      <section className="px-6 pb-20">
        <div className="mx-auto space-y-12 max-w-[1200px]">
          {services.map((service, index) => (
            <article
              className="grid gap-8 rounded-3xl bg-black p-10 text-white lg:grid-cols-[1fr_420px]"
              key={service.title}
            >
              <div>
                <h2 className="font-display text-6xl font-medium">{service.title}</h2>
                <p className="mt-6 text-xl leading-relaxed">{service.body}</p>
                <ul className="mt-8 grid gap-3 text-xl md:grid-cols-2">
                  {service.list.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>
              <CaseCard dark={index % 2 === 0} />
            </article>
          ))}
        </div>
      </section>

      <section id="impact" className="px-6 py-24 text-center">
        <div className="mx-auto max-w-[1200px]">
          <Label>HYBR&apos;s Impact</Label>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {["Countries Reached", "Jobs Created", "Ventures Impacted"].map((item) => (
              <div className="rounded-3xl bg-[#f1f1f1] p-10" key={item}>
                <p className="font-display text-6xl font-medium">
                  {item === "Countries Reached" ? "35+" : item === "Jobs Created" ? "300K+" : "4000+"}
                </p>
                <p className="mt-3 font-bold uppercase">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="talk" className="px-6 py-24">
        <div className="mx-auto rounded-3xl bg-black p-12 text-center text-white max-w-[1200px]">
          <h2 className="font-display text-5xl font-medium">Ready to build?</h2>
          <p className="mx-auto mt-4 max-w-[760px] text-xl">
            Book a meeting and we will help you decide which service fits your
            next step.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="white">
              Book A Meeting
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
