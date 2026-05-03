import { Button, Footer, Header, ImagePanel, Label } from "../../_components/marketing";

export default function InnovationGuidePage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <Header />
      <section className="px-6 pb-24 pt-48 md:pt-[232px]">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_520px] lg:items-end">
          <div>
            <Label>Resource</Label>
            <h1 className="mt-3 font-display text-[54px] font-medium leading-none sm:text-[74px] md:text-[104px] lg:text-[130px]">
              Innovation Guide
            </h1>
            <p className="mt-8 text-lg leading-relaxed md:text-2xl">
              Download HYBR&apos;s practical guide for replacing guesswork with
              clarity, discipline, and momentum.
            </p>
          </div>
          <ImagePanel className="h-[300px] rounded-3xl md:h-[420px]" />
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-3xl bg-black text-white lg:grid-cols-2">
          <div className="p-6 md:p-12">
            <h2 className="font-display text-5xl font-medium">
              Get the guide in your inbox.
            </h2>
            <p className="mt-6 text-xl leading-relaxed">
              This becomes a WordPress-managed gated resource flow later.
            </p>
          </div>
          <form className="space-y-6 bg-hybr-blue p-6 md:space-y-8 md:p-12">
            <input className="field" placeholder="Insert Your Name" />
            <input className="field" placeholder="Insert Your Email" type="email" />
            <button className="min-h-14 w-full rounded-full bg-black px-8 text-lg font-semibold uppercase text-white">
              Download
            </button>
          </form>
        </div>
      </section>
      <section className="px-6 py-24 text-center">
        <Label>Ready to go further?</Label>
        <h2 className="mx-auto mt-3 max-w-[900px] font-display text-5xl font-medium">
          Let HYBR help you turn the guide into action.
        </h2>
        <div className="mt-8">
          <Button href="/contact" variant="dark">
            Book a Strategy Call
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
