import {
  Button,
  CaseCard,
  Footer,
  Header,
  Label,
  SearchBar,
  WhatWeDoCta,
} from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

const sections = ["Cover", "Section 1", "Section 2", "Section 3"];

export default function CaseStudyPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <Header active="what" />

      <section className="px-6 pb-24 pt-[216px]">
        <div className="mx-auto max-w-[1200px]">
          <SearchBar />
          <article
            className="figma-case-cover relative mt-10 min-h-[520px] overflow-hidden rounded-[20px] bg-black p-8 text-white md:min-h-[680px] md:p-10"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.1), rgba(0,0,0,.72)), url(${figmaAssets.figmaFieldHero})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <nav className="absolute left-8 right-8 top-8 flex flex-wrap justify-center gap-5 text-xs font-bold uppercase md:left-10 md:right-10 md:top-10 md:gap-14">
              {sections.map((section) => (
                <a
                  className="rounded-full px-2 py-2 backdrop-blur-sm"
                  href={`#${section.toLowerCase().replace(" ", "-")}`}
                  key={section}
                >
                  {section}
                </a>
              ))}
            </nav>
            <div className="absolute left-8 right-8 top-[170px] max-w-[720px] md:left-16 md:top-[250px]">
              <h1 className="font-display text-4xl font-medium leading-tight md:text-6xl">
                One Liner For Specific Case Study
              </h1>
              <p className="mt-4 max-w-[620px] text-lg leading-relaxed md:text-xl">
                A captivating statement about what service was offered to the company.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between gap-6 text-xs font-bold uppercase tracking-[0.08em] md:bottom-10 md:left-16 md:right-16">
              <div className="flex items-center gap-4">
                <img alt="" className="h-8 w-8" src="/home/logo-case-study.svg" />
                <span>Company Name</span>
              </div>
              <span>Case Study</span>
            </div>
          </article>
          <div className="mt-12 flex justify-center">
            <Button href="#related" variant="dark">
              View as Single Page Report
            </Button>
          </div>
        </div>
      </section>

      <section id="related" className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10">
            <Label>More Work</Label>
            <h2 className="mt-2 font-display text-4xl font-medium">Related Case Studies</h2>
            <p className="mt-2 max-w-[588px] text-lg leading-relaxed">
              Work that reflects how we think, collaborate, and deliver.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[588px_588px]">
            <CaseCard className="min-h-[372px]" dark />
            <CaseCard className="min-h-[372px]" dark imageSrc={figmaAssets.figmaFieldHero} />
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/what-we-do/our-work">View All Case Studies</Button>
          </div>
        </div>
      </section>

      <div id="section-1">
        <WhatWeDoCta />
      </div>

      <Footer />
    </main>
  );
}
