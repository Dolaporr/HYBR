import {
  Button,
  CaseCard,
  Footer,
  ImagePanel,
  Label,
  PageHero,
} from "../../_components/marketing";

const sections = ["Section 1", "Section 2", "Section 3", "Section 4"];

export default function CaseStudyPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="what"
        menu={sections.map((section) => ({
          label: section,
          href: `#${section.toLowerCase().replace(" ", "-")}`,
        }))}
        subtitle="A captivating statement about what service was offered to the company. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        title="One Liner For Specific Case Study"
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <Label>Case Study</Label>
              <p className="mt-2 font-bold uppercase">Company Name</p>
            </div>
            <Button href="#section-1" variant="dark">
              Read in Sections
            </Button>
          </div>
          <ImagePanel className="h-[320px] rounded-3xl md:h-[520px]" />
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-[996px] space-y-24">
          {sections.map((section) => (
            <article id={section.toLowerCase().replace(" ", "-")} key={section}>
              <Label>{section}</Label>
              <h2 className="mt-3 font-display text-5xl font-medium">
                One-liner for section to give an overview
              </h2>
              <p className="mt-6 whitespace-pre-line text-xl leading-relaxed">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel dapibus ipsum, a tristique sem. Ut sed scelerisque sem. Nulla eget gravida quam, eget scelerisque elit.

Suspendisse ullamcorper condimentum molestie. Pellentesque fringilla tristique purus, vitae euismod tortor tempor eu. In posuere libero sed scelerisque rutrum. Aenean sit amet hendrerit lacus. Duis facilisis ac purus a blandit.

Integer porttitor sagittis massa in ultricies. Praesent vitae laoreet sem, ac aliquet metus. Curabitur tincidunt sit amet eros eget placerat.`}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1200px]">
          <Label>More Work</Label>
          <h2 className="mt-3 font-display text-5xl font-medium">
            Related Case Studies
          </h2>
          <p className="mt-4 text-xl">
            Work that reflects how we think, collaborate, and deliver.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <CaseCard />
            <CaseCard dark />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
