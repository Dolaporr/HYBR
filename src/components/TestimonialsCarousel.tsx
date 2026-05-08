"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "The curated innovation retreat for AFEX's 40-exco team was truly world class and highly impactful, shaping our strategic plans going forward.",
    name: "Ayo Balogun",
    title:
      "CEO, AFEX Commodities | 2022 Financial Times Fastest Growing Venture in Africa",
    image: "/home/testimonial.png",
  },
  {
    quote:
      "HYBR helped us navigate a complex market entry with clarity and speed. Their frameworks turned ambiguity into actionable strategy.",
    name: "Placeholder Client",
    title: "CEO, Innovation Corp",
    image: "/home/testimonial.png",
  },
  {
    quote:
      "Working with HYBR transformed how our leadership team approaches innovation. We now have the tools and confidence to build what's next.",
    name: "Placeholder Client",
    title: "Director of Strategy, Future Group",
    image: "/home/testimonial.png",
  },
];

const AUTO_DELAY = 5000;

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleNext = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, AUTO_DELAY);
  }, []);

  useEffect(() => {
    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, scheduleNext]);

  const go = useCallback((idx: number) => {
    setActive((idx + testimonials.length) % testimonials.length);
  }, []);

  const t = testimonials[active];

  return (
    <>
      <div className="home-testimonial-shell mt-10">
        <button
          aria-label="Previous testimonial"
          className="home-testimonial-arrow home-testimonial-arrow--left"
          onClick={() => go(active - 1)}
          type="button"
        >
          &#8249;
        </button>
        <div
          className="home-testimonial-card home-testimonial-animate grid gap-10 text-left text-white md:grid-cols-[116px_1fr]"
          key={active}
        >
          <div className="relative flex size-[116px] items-center justify-center rounded-full">
            <span className="absolute inset-0 rounded-full border-[1.5px] border-[#8dc540] opacity-60" />
            <img
              alt={t.name}
              className="size-[88px] rounded-full border-[3px] border-[#8dc540] object-cover"
              src={t.image}
            />
          </div>
          <div>
            <blockquote className="home-testimonial-quote">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="mt-8 font-display text-[16px] font-semibold">
              {t.name}
            </p>
            <p className="font-display text-[16px] font-semibold text-white/86">
              {t.title}
            </p>
          </div>
        </div>
        <button
          aria-label="Next testimonial"
          className="home-testimonial-arrow home-testimonial-arrow--right"
          onClick={() => go(active + 1)}
          type="button"
        >
          &#8250;
        </button>
      </div>
      <div className="home-testimonial-dots mt-5">
        {testimonials.map((_, i) => (
          <span
            aria-label={`Go to testimonial ${i + 1}`}
            className={i === active ? "is-active" : ""}
            key={i}
            onClick={() => go(i)}
            role="button"
            tabIndex={0}
          />
        ))}
      </div>
    </>
  );
}
