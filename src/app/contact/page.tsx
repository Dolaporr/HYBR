import { Footer, Header } from "../_components/marketing";
import { figmaAssets } from "@/content/site";

export default function ContactPage() {
  return (
    <main className="provisional-page contact-page">
      <Header />
      <section className="provisional-hero provisional-hero--compact">
        <div className="provisional-shell">
          <h1 className="provisional-title">Let&apos;s Talk</h1>
          <p className="provisional-subtitle">
            Ready to build what&apos;s next? Tell us where you are, what you are trying to
            solve, and what you want to move faster.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="provisional-shell">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="provisional-kicker">Build Innovation that Works, with Us</p>
              <h2>Book a strategy call or send us a note.</h2>
              <p>
                Supporting lead generator body text to encourage users to book a strategy call.
              </p>
              <div className="provisional-media contact-media">
                <img alt="" src={figmaAssets.figmaBusinessPartners} />
              </div>
            </div>
            <form className="provisional-form">
              <input className="field" placeholder="Insert Your Name" />
              <input className="field" placeholder="Insert Your Email" type="email" />
              <textarea
                className="field"
                placeholder="What would you like us to know?"
              />
              <button type="button">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-details-section">
        <div className="provisional-shell contact-detail-grid">
          {["Address 1", "Phone Number", "Email Address"].map((item) => (
            <article className="contact-detail-card" key={item}>
              <p>{item}</p>
              <span>Details to be managed in WordPress.</span>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
