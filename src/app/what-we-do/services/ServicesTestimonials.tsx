"use client";

import { useEffect, useState } from "react";

const CAROUSEL_DELAY_MS = 5500;

export type ServiceTestimonial = {
  avatar: string;
  background: string;
  id: string;
  name: string;
  quote: string;
  role: string;
};

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      aria-label={`${direction === "left" ? "Previous" : "Next"} testimonial`}
      className={`services-carousel-arrow is-${direction}`}
      onClick={onClick}
      type="button"
    >
      <svg aria-hidden="true" fill="none" viewBox="0 0 64 64">
        {direction === "left" ? (
          <path
            d="M39 18L25 32L39 46"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        ) : (
          <path
            d="M25 18L39 32L25 46"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        )}
      </svg>
    </button>
  );
}

export function ServicesTestimonials({
  testimonials,
}: {
  testimonials: ServiceTestimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex] ?? testimonials[0];
  const total = testimonials.length;

  useEffect(() => {
    if (total < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % total);
    }, CAROUSEL_DELAY_MS);

    return () => window.clearInterval(intervalId);
  }, [total]);

  if (!active) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((index) => (index - 1 + total) % total);
  };

  const goToNext = () => {
    setActiveIndex((index) => (index + 1) % total);
  };

  return (
    <section
      aria-label="Client testimonial carousel"
      className="services-testimonial-card"
    >
      <span
        aria-hidden="true"
        className="services-testimonial-bg"
        style={{ backgroundImage: `url(${active.background})` }}
      />
      <div
        aria-live="polite"
        className="services-testimonial-inner"
        key={active.id}
      >
        <div className="services-testimonial-avatar">
          <span />
          <img alt="" src={active.avatar} />
        </div>
        <div className="services-testimonial-copy">
          <p>&ldquo;{active.quote}&rdquo;</p>
          <div>
            <strong>{active.name}</strong>
            <span>{active.role}</span>
          </div>
        </div>
      </div>
      <ArrowButton direction="left" onClick={goToPrevious} />
      <ArrowButton direction="right" onClick={goToNext} />
      <div className="services-carousel-dots" role="tablist">
        {testimonials.map((testimonial, index) => (
          <button
            aria-label={`Show testimonial ${index + 1}`}
            aria-selected={index === activeIndex}
            className={index === activeIndex ? "is-active" : ""}
            key={testimonial.id}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </section>
  );
}
