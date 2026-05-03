import { Button, Footer, ImagePanel, Label, PageHero } from "../../../_components/marketing";

export default function NewsTemplatePage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="insights"
        subtitle="A short, captivating statement about what this news update addresses."
        title="Headline for News Update"
      />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[996px]">
          <p className="font-bold uppercase">Name of Writer • 00th Month, Year</p>
          <ImagePanel className="mt-10 h-[320px] rounded-3xl md:h-[480px]" />
          <article className="mt-20">
            <Label>Header</Label>
            <h2 className="mt-3 font-display text-5xl font-medium">
              One-liner for section to give an overview
            </h2>
            <p className="mt-6 whitespace-pre-line text-xl leading-relaxed">
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel dapibus ipsum, a tristique sem. Ut sed scelerisque sem. Nulla eget gravida quam, eget scelerisque elit.

Suspendisse ullamcorper condimentum molestie. Pellentesque fringilla tristique purus, vitae euismod tortor tempor eu. In posuere libero sed scelerisque rutrum. Aenean sit amet hendrerit lacus.`}
            </p>
          </article>
          <div className="mt-12">
            <Button href="/insights/news" variant="dark">
              More News
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
