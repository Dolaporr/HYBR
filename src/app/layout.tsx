import type { Metadata } from "next";
import { Montserrat, Raleway, Inter } from "next/font/google";
import { SiteInteractions } from "@/components/HomeInteractions";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HYBR | Build Ideas Faster, Smarter",
  description:
    "HYBR helps leaders find clarity, test ideas, and build innovation with purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contentDrawerScript = `
(() => {
  const selector = [
    ".figma-content-drop",
    ".insights-content-drop",
    ".webinars-content-drop",
    ".articles-content-drop",
    ".news-content-drop",
    ".who-content-drop",
    ".team-content-drop",
    ".about-content-drop",
    ".what-content-drop",
    ".services-content-drop",
    ".work-content-drop",
    ".impact-content-drop",
    ".careers-content-drop"
  ].join(",");

  window.__HYBR_CONTENT_DRAWERS__ = true;

  const setOpen = (drop, isOpen) => {
    drop.classList.toggle("is-content-open", isOpen);
    drop.setAttribute("aria-expanded", String(isOpen));
  };

  const closeAll = (except) => {
    document.querySelectorAll(selector).forEach((drop) => {
      if (drop !== except) setOpen(drop, false);
    });
  };

  const prepare = () => {
    document.querySelectorAll(selector).forEach((drop) => {
      if (drop.dataset.contentDrawerReady === "true") return;
      drop.dataset.contentDrawerReady = "true";
      drop.classList.add("site-content-drop");
      drop.setAttribute("aria-expanded", "false");
      if (!drop.hasAttribute("role")) drop.setAttribute("role", "button");
      if (!drop.hasAttribute("tabindex")) drop.tabIndex = 0;
    });
  };

  const onClick = (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const drop = target.closest(selector);
    if (!drop) {
      closeAll();
      return;
    }

    const link = target.closest("a");
    if (link && drop.contains(link) && drop.classList.contains("is-content-open")) {
      window.setTimeout(() => setOpen(drop, false), 120);
      return;
    }

    event.preventDefault();
    const shouldOpen = !drop.classList.contains("is-content-open");
    closeAll(drop);
    setOpen(drop, shouldOpen);
  };

  const onKeydown = (event) => {
    if (event.key === "Escape") {
      closeAll();
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") return;
    const active = document.activeElement instanceof Element ? document.activeElement : null;
    const drop = active?.closest(selector);
    if (!drop || active?.closest("a")) return;

    event.preventDefault();
    const shouldOpen = !drop.classList.contains("is-content-open");
    closeAll(drop);
    setOpen(drop, shouldOpen);
  };

  prepare();
  document.addEventListener("click", onClick);
  document.addEventListener("keydown", onKeydown);
  new MutationObserver(prepare).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
`;

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${raleway.variable} ${inter.variable}`}
    >
      <body>
        <SiteInteractions />
        {children}
        <script dangerouslySetInnerHTML={{ __html: contentDrawerScript }} />
      </body>
    </html>
  );
}
