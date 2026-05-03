import { Footer, Header, ImagePanel, Label } from "../_components/marketing";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <Header />
      <section className="px-6 pb-24 pt-48 md:pt-[232px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="font-display text-[56px] font-medium leading-none sm:text-[76px] md:text-[112px] lg:text-[150px]">
            Let&apos;s Talk
          </h1>
          <p className="mt-4 max-w-[780px] text-lg leading-relaxed md:text-2xl">
            Ready to build what&apos;s next? Tell us where you are, what you are
            trying to solve, and what you want to move faster.
          </p>
        </div>
      </section>
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-3xl bg-black text-white lg:grid-cols-2">
          <div className="p-6 md:p-12">
            <Label>Build Innovation that Works, with Us</Label>
            <h2 className="mt-3 font-display text-5xl font-medium">
              Book a strategy call or send us a note.
            </h2>
            <p className="mt-6 text-xl leading-relaxed">
              Supporting lead generator body text to encourage users to book a
              strategy call.
            </p>
            <ImagePanel className="mt-12 h-[240px] rounded-3xl" />
          </div>
          <form className="space-y-6 bg-hybr-blue p-6 md:space-y-8 md:p-12">
            <input className="field" placeholder="Insert Your Name" />
            <input className="field" placeholder="Insert Your Email" type="email" />
            <textarea
              className="field min-h-44 resize-none"
              placeholder="What would you like us to know?"
            />
            <button className="min-h-14 w-full rounded-full bg-black px-8 text-lg font-semibold uppercase text-white">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
          {["Address 1", "Phone Number", "Email Address"].map((item) => (
            <article className="rounded-3xl bg-[#f1f1f1] p-10" key={item}>
              <Label>{item}</Label>
              <p className="mt-8 text-xl">Details to be managed in WordPress.</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
