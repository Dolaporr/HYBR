"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const figmaLockedPageFilters = [
  ".what-page",
  ".services-page",
  ".work-page",
  ".impact-page",
  ".who-page",
  ".about-page",
  ".team-page",
  ".careers-page",
  ".insights-hub-page",
  ".articles-page",
  ".webinars-listing-page",
  ".news-page",
].map((selector) => `:not(${selector})`).join("");

const animatedMainSelector = `main:not(.homepage-live)${figmaLockedPageFilters}`;

const revealSelectors = [
  ".site-reveal",
  ".home-reveal",
  `${animatedMainSelector} .inner-page-hero`,
  `${animatedMainSelector} section`,
  `${animatedMainSelector} article`,
].join(",");

const tiltSelectors = [
  ".site-tilt-card",
  ".home-tilt-card",
  `${animatedMainSelector} article`,
  `${animatedMainSelector} .what-services`,
  `${animatedMainSelector} .what-team`,
  `${animatedMainSelector} .figma-content-drop`,
].join(",");

const revealDirections = ["up", "left", "right", "scale"] as const;

export function SiteInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    const page = document.body;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>(tiltSelectors));
    let pointerFrame = 0;

    revealItems.forEach((item, index) => {
      item.classList.add("site-reveal");
      if (!item.dataset.reveal) {
        item.dataset.reveal = revealDirections[index % revealDirections.length];
      }
    });

    tiltItems.forEach((item) => {
      item.classList.add("site-tilt-card");
    });

    page.classList.add("site-motion-ready", "home-motion-ready");

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      page.classList.add("is-loaded");
      return () => {
        page.classList.remove("site-motion-ready", "home-motion-ready", "is-loaded");
      };
    }

    const loaderTimer = window.setTimeout(() => {
      page.classList.add("is-loaded");
    }, 520);

    const revealVisibleItems = () => {
      const triggerLine = window.innerHeight * 0.94;
      revealItems.forEach((item) => {
        if (item.classList.contains("is-visible")) return;
        const rect = item.getBoundingClientRect();
        if (rect.top < triggerLine && rect.bottom > 0) {
          item.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.05 },
    );

    revealItems.forEach((item) => observer.observe(item));
    requestAnimationFrame(revealVisibleItems);
    window.addEventListener("resize", revealVisibleItems, { passive: true });

    const handlePointerMove = (event: PointerEvent) => {
      if (!supportsFinePointer || event.pointerType !== "mouse") return;
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        page.classList.add("has-pointer");
        page.style.setProperty("--home-pointer-x", `${event.clientX}px`);
        page.style.setProperty("--home-pointer-y", `${event.clientY}px`);
        page.style.setProperty("--site-pointer-x", `${event.clientX}px`);
        page.style.setProperty("--site-pointer-y", `${event.clientY}px`);
      });
    };

    const tiltCleanups = supportsFinePointer ? tiltItems.map((item) => {
      const move = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        const rect = item.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        item.style.setProperty("--home-tilt-x", `${(-y * 7).toFixed(2)}deg`);
        item.style.setProperty("--home-tilt-y", `${(x * 7).toFixed(2)}deg`);
      };
      const leave = () => {
        item.style.setProperty("--home-tilt-x", "0deg");
        item.style.setProperty("--home-tilt-y", "0deg");
      };

      item.addEventListener("pointermove", move);
      item.addEventListener("pointerleave", leave);

      return () => {
        item.removeEventListener("pointermove", move);
        item.removeEventListener("pointerleave", leave);
      };
    }) : [];

    if (supportsFinePointer) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    return () => {
      window.clearTimeout(loaderTimer);
      observer.disconnect();
      window.removeEventListener("resize", revealVisibleItems);
      if (supportsFinePointer) {
        window.removeEventListener("pointermove", handlePointerMove);
      }
      tiltCleanups.forEach((cleanup) => cleanup());
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      page.classList.remove("site-motion-ready", "home-motion-ready", "is-loaded", "has-pointer");
    };
  }, [pathname]);

  return (
    <>
      <span aria-hidden="true" className="site-pointer-ring home-pointer-ring" />
      <span aria-hidden="true" className="site-loading-bar home-loading-bar" />
    </>
  );
}

export function HomeInteractions() {
  return <SiteInteractions />;
}
