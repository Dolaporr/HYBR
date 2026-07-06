"use client";

import {
  type PointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const testimonials = [
  {
    quote:
      "Working with HYBR transformed how our leadership team approaches innovation. We now have the tools and confidence to build what's next.",
    name: "Placeholder Client",
    title: "Director of Strategy, Future Group",
    image: "/home/testimonial.png",
  },
  {
    quote:
      "The curated innovation retreat for AFEX's 40-exco team was truly world class and highly impactful, shaping our strategic plans going forward.",
    name: "Ayo Balogun",
    title:
      "CEO, AFEX Commodities | 2022 Financial Times Fastest Growing Venture in Africa",
    image: "/home/edit-flags/ayo-balogun.png",
  },
  {
    quote:
      "HYBR helped Coca-Cola turn a critical plastic waste challenge into a scalable innovation program with strong environmental and employment impact. Their work combined ecosystem insight, innovation sourcing and practical execution.",
    name: "Peter Ekunkoya",
    title: "Former Commercial Director, Coca-Cola",
    image: "/home/edit-flags/peter-ekunkoya.png",
  },
  {
    quote:
      "HYBR has been a reliable and trusted partner, bringing clarity, structure, and execution discipline to complex innovation and growth work. Their practical, collaborative approach makes them a valuable partner.",
    name: "Yewande Adewusi",
    title: "COO, Alitheia Capital",
    image: "/home/edit-flags/yewande-adewusi.png",
  },
];

const AUTO_DELAY = 5000;
const DOT_COUNT = 3;
const SWIPE_MIN_DISTANCE = 44;
const SWIPE_AXIS_LOCK = 1.2;

type HomeTestimonial = (typeof testimonials)[number];
type SwipeState = {
  pointerId: number | null;
  startX: number;
  startY: number;
};

function capturePointer(element: HTMLDivElement, pointerId: number) {
  try {
    element.setPointerCapture(pointerId);
  } catch {
    return;
  }
}

function releasePointer(element: HTMLDivElement, pointerId: number) {
  if (!element.hasPointerCapture(pointerId)) return;

  try {
    element.releasePointerCapture(pointerId);
  } catch {
    return;
  }
}

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
  const swipeRef = useRef<SwipeState>({
    pointerId: null,
    startX: 0,
    startY: 0,
  });

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

  const goBy = useCallback((step: number) => {
    setActive((idx) => (idx + step + testimonials.length) % testimonials.length);
  }, []);

  const handlePointerDown = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    swipeRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
    };
    capturePointer(event.currentTarget, event.pointerId);
  }, []);

  const handlePointerEnd = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const swipe = swipeRef.current;

      if (swipe.pointerId !== event.pointerId) return;

      const deltaX = event.clientX - swipe.startX;
      const deltaY = event.clientY - swipe.startY;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      releasePointer(event.currentTarget, event.pointerId);
      swipeRef.current.pointerId = null;

      if (absX >= SWIPE_MIN_DISTANCE && absX > absY * SWIPE_AXIS_LOCK) {
        goBy(deltaX < 0 ? 1 : -1);
      }
    },
    [goBy],
  );

  const handlePointerCancel = useCallback((event: PointerEvent<HTMLDivElement>) => {
    if (swipeRef.current.pointerId !== event.pointerId) return;

    releasePointer(event.currentTarget, event.pointerId);
    swipeRef.current.pointerId = null;
  }, []);

  const t = testimonials[active];
  const next = testimonials[(active + 1) % testimonials.length];
  const activeDot = active % DOT_COUNT;

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
          className="home-testimonial-stage"
          onPointerCancel={handlePointerCancel}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerEnd}
        >
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
        {Array.from({ length: DOT_COUNT }).map((_, i) => (
          <span
            aria-label={`Go to testimonial set ${i + 1}`}
            className={i === activeDot ? "is-active" : ""}
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
