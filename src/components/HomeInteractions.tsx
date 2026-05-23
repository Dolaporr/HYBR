"use client";

import { useEffect } from "react";

export function HomeInteractions() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".homepage-live");
    if (!page) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".home-reveal"));
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>(".home-tilt-card"));
    let pointerFrame = 0;

    page.classList.add("home-motion-ready");

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      page.classList.add("is-loaded");
      return () => {
        page.classList.remove("home-motion-ready", "is-loaded");
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
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      pointerFrame = requestAnimationFrame(() => {
        page.classList.add("has-pointer");
        page.style.setProperty("--home-pointer-x", `${event.clientX}px`);
        page.style.setProperty("--home-pointer-y", `${event.clientY}px`);
      });
    };

    const tiltCleanups = tiltItems.map((item) => {
      const move = (event: PointerEvent) => {
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
    });

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.clearTimeout(loaderTimer);
      observer.disconnect();
      window.removeEventListener("resize", revealVisibleItems);
      window.removeEventListener("pointermove", handlePointerMove);
      tiltCleanups.forEach((cleanup) => cleanup());
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      page.classList.remove("home-motion-ready", "is-loaded", "has-pointer");
    };
  }, []);

  return (
    <>
      <span aria-hidden="true" className="home-pointer-ring" />
      <span aria-hidden="true" className="home-loading-bar" />
    </>
  );
}
