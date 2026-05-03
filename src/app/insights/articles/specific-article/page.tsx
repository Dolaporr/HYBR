import { Button, Footer, ImagePanel, Label, PageHero } from "../../../_components/marketing";

export default function ArticleTemplatePage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="insights"
        subtitle="A short, captivating statement about what this article addresses."
        title="Header For Specific Article/Write-Up"
      />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[996px]">
          <p className="font-bold uppercase">Name of Writer • 00th Month, Year</p>
          <p className="mt-3 text-lg">Topics: Industry1, Industry2, Industry3</p>
          <ImagePanel className="mt-10 h-[320px] rounded-3xl md:h-[480px]" />
          {[1, 2].map((item) => (
            <article className="mt-20" key={item}>
              <Label>Header</Label>
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
          <aside className="mt-20 rounded-3xl bg-[#f1f1f1] p-10">
            <Label>Writer Profile</Label>
            <h3 className="mt-3 font-display text-4xl font-medium">
              FirstName LastName
            </h3>
            <p className="mt-3 text-lg">Title/Role, Company | Location</p>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim fringilla feugiat.
            </p>
          </aside>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto rounded-3xl bg-black p-12 text-white max-w-[1200px]">
          <Label>More Articles</Label>
          <h2 className="mt-3 font-display text-5xl font-medium">
            Enjoyed this article? Check out more insights like this.
          </h2>
          <p className="mt-4 text-xl">
            Explore ideas and perspectives designed to help organisations
            understand what is changing.
          </p>
          <div className="mt-8">
            <Button href="/insights/articles" variant="white">
              All Articles
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
