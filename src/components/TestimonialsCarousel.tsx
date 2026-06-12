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

type HomeTestimonial = (typeof testimonials)[number];

function TestimonialCard({
  ariaHidden = false,
  className,
  testimonial,
}: {
  ariaHidden?: boolean;
  className?: string;
  testimonial: HomeTestimonial;
}) {
  return (
    <div
      aria-hidden={ariaHidden}
      className={`home-testimonial-card grid gap-10 text-left text-white md:grid-cols-[116px_1fr] ${className ?? ""}`}
    >
      <div className="home-testimonial-avatar relative flex size-[116px] items-center justify-center rounded-full">
        <span className="absolute inset-0 rounded-full border-[1.5px] border-[#8dc540] opacity-60" />
        <img
          alt={ariaHidden ? "" : testimonial.name}
          className="home-testimonial-avatar-image size-[88px] rounded-full border-[3px] border-[#8dc540] object-cover"
          src={testimonial.image}
        />
      </div>
      <div>
        <blockquote className="home-testimonial-quote">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <p className="mt-8 font-display text-[16px] font-semibold">
          {testimonial.name}
        </p>
        <p className="font-display text-[16px] font-semibold text-white/86">
          {testimonial.title}
        </p>
      </div>
    </div>
  );
}

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
  const next = testimonials[(active + 1) % testimonials.length];

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
        <div className="home-testimonial-stage">
          <TestimonialCard
            className="home-testimonial-animate is-active"
            key={active}
            testimonial={t}
          />
          <TestimonialCard
            ariaHidden
            className="home-testimonial-preview"
            key={`preview-${active}`}
            testimonial={next}
          />
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
