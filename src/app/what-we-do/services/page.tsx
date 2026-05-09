import {
  Button,
  Footer,
  ImagePanel,
  Label,
  PageHero,
} from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

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

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <ImagePanel
            className="flex min-h-[488px] items-center justify-center rounded-[20px]"
            overlay="linear-gradient(90deg, rgba(0,0,0,.5), rgba(0,0,0,.18))"
            src={figmaAssets.figmaBusinessPartners}
          >
            <div className="grid w-full gap-6 px-8 text-center text-white md:grid-cols-3 md:px-12">
              {services.map((service) => (
                <p className="font-display text-5xl font-medium md:text-6xl" key={service.title}>
                  {service.title}
                </p>
              ))}
            </div>
          </ImagePanel>
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-32">
        <div className="mx-auto max-w-[1200px]">
          {services.map((service, index) => (
            <div
              className={`grid gap-6 lg:grid-cols-[690px_486px] lg:items-center${index > 0 ? " mt-24 md:mt-40 lg:mt-[280px]" : ""}`}
              key={service.title}
            >
              <div className="flex flex-col justify-between py-2 lg:h-[340px] lg:py-0">
                <div>
                  <h2 className="font-display text-5xl font-medium leading-none md:text-6xl">{service.title}</h2>
                  <p className="mt-5 text-base leading-relaxed md:text-lg lg:text-xl">{service.body}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 lg:mt-0">
                  {service.list.map((item) => (
                    <span
                      className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <ImagePanel
                className="min-h-[260px] rounded-[20px] lg:h-[321px]"
                overlay="linear-gradient(90deg, rgba(0,0,0,.16), rgba(0,0,0,.04))"
                src={figmaAssets.figmaFieldHero}
              />
            </div>
          ))}
          <div className="mt-20 flex justify-center">
            <Button href="/contact">Book A Meeting</Button>
          </div>
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

      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1200px] text-center">
          <Label>Testimonials</Label>
          <h2 className="mt-3 font-display text-4xl font-medium md:text-5xl">
            What our clients say about working with us.
          </h2>
          <p className="mx-auto mt-4 max-w-[792px] text-xl leading-relaxed">
            These testimonials reflect the trust and confidence that come from
            our partnerships.
          </p>
          <div
            className="mx-auto mt-10 max-w-[1200px] rounded-[24px] bg-black p-8 text-left text-white md:p-12"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.7), rgba(0,0,0,.25)), url(${figmaAssets.figmaBuilding})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <p className="font-display text-3xl font-medium leading-snug md:text-4xl">
              &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris dignissim fringilla feugiat. Praesent sed condimentum
              nulla. Praesent lacinia eleifend turpis, sit amet dignissim massa
              accumsan in.&rdquo;
            </p>
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
