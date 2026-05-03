import { Button, Footer, PageHero } from "../../_components/marketing";

const products = ["INDX", "FLYWHEEL", "ALPHA"];

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <PageHero
        active="what"
        subtitle="Tools designed to make innovation feel effortless."
        title="Our Products"
      />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="max-w-[760px] text-2xl leading-relaxed">
            Helping you turn your best ideas into meaningful results through
            repeatable tools, frameworks, and productized innovation systems.
          </p>
          <div className="mt-12 space-y-8">
            {products.map((product) => (
              <article
                className="grid gap-8 rounded-3xl bg-black p-10 text-white lg:grid-cols-[320px_1fr_260px] lg:items-center"
                key={product}
              >
                <h2 className="font-display text-6xl font-medium">{product}</h2>
                <p className="text-xl leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  tempus dolor id metus auctor tincidunt. Cras et gravida dolor.
                </p>
                <Button href="/contact" variant="white">
                  Access {product}
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
