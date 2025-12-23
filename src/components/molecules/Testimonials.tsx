import { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faStarHalfStroke,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

type TTestimonial = {
  id: number;
  name: string;
  role?: string;
  location?: string;
  rating: number;
  text: string;
  date?: string;
};

const TESTIMONIALS: TTestimonial[] = [
  {
    id: 1,
    name: "Sarah Miller",
    role: "Family trip",
    location: "Houston, TX",
    rating: 5,
    text: "Perfect location! Walking distance to everything and the private beach access made our trip so easy with kids.",
    date: "Dec 2025",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Weekend getaway",
    location: "San Antonio, TX",
    rating: 5,
    text: "Clean, stylish, and super comfortable. The check-in was seamless and the views were even better than the photos.",
    date: "Nov 2025",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Couple’s stay",
    location: "McAllen, TX",
    rating: 4.5,
    text: "Great value for South Padre. Loved being steps from the beach and close to restaurants. Would definitely return.",
    date: "Oct 2025",
  },
  {
    id: 4,
    name: "Michael Nguyen",
    role: "Business + leisure",
    location: "Dallas, TX",
    rating: 5,
    text: "Fast Wi-Fi, quiet at night, and the place felt premium. The host was responsive and everything was well organized.",
    date: "Sep 2025",
  },
  {
    id: 5,
    name: "Alyssa Bennett",
    role: "Friends trip",
    location: "Austin, TX",
    rating: 5,
    text: "The amenities were on point and the overall vibe was resort-like. We enjoyed the pool and easy beach access.",
    date: "Aug 2025",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <FontAwesomeIcon
          key={`f-${i}`}
          icon={faStar}
          className="text-amber-400"
        />
      ))}
      {half && (
        <FontAwesomeIcon icon={faStarHalfStroke} className="text-amber-400" />
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <FontAwesomeIcon
          key={`e-${i}`}
          icon={faStar}
          className="text-amber-400/30"
        />
      ))}
    </div>
  );
}

export default function TestimonialsCarouselPremium() {
  const items = useMemo(() => TESTIMONIALS, []);
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  // Autoplay
  useEffect(() => {
    if (isHover) return;

    intervalRef.current = window.setInterval(() => {
      setIndex((prevIdx) => (prevIdx + 1) % items.length);
    }, 4500);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [items.length, isHover]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const visible = (() => {
    const arr: TTestimonial[] = [];
    for (let offset = -1; offset <= 1; offset++) {
      const i = (index + offset + items.length) % items.length;
      arr.push(items[i]);
    }
    return arr;
  })();

  return (
    <section
      className="w-full mt-10"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-semibold tracking-wide text-emerald-600">
              Guests love it here
            </p>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              More reviews from recent stays
            </h3>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="h-10 w-10 rounded-full border border-black/10 bg-white/80 backdrop-blur hover:bg-white transition shadow-sm"
              aria-label="Previous testimonial">
              <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700" />
            </button>
            <button
              type="button"
              onClick={next}
              className="h-10 w-10 rounded-full border border-black/10 bg-white/80 backdrop-blur hover:bg-white transition shadow-sm"
              aria-label="Next testimonial">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-gray-700"
              />
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="mt-4 h-1.5 w-full rounded-full bg-black/5 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 transition-all duration-500"
            style={{ width: `${((index + 1) / items.length) * 100}%` }}
          />
        </div>

        <div className="relative mt-6">
          <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 blur-2xl" />

          {/* ✅ Altura estable del bloque: evita “salto” */}
          <div className="relative min-h-[380px] md:min-h-[420px] lg:min-h-[440px]">
            {/* ✅ items-stretch para que todas las cards igualen altura */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative items-stretch">
              {visible.map((t, idx) => {
                const isCenter = idx === 1;

                return (
                  <article
                    key={t.id}
                    className={[
                      // ✅ altura estable por card
                      "h-full min-h-[340px] md:min-h-[360px] lg:min-h-[380px]",
                      "rounded-2xl border border-black/5 bg-white/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
                      "p-6 md:p-7 transition-all duration-500 flex flex-col",
                      isCenter
                        ? "lg:scale-[1.02] lg:border-emerald-500/20 lg:shadow-[0_20px_60px_rgba(16,185,129,0.12)]"
                        : "opacity-95 hover:opacity-100",
                      // visibilidad responsiva (1 card mobile, 2 md, 3 lg)
                      idx !== 1 ? "md:block hidden lg:block" : "",
                      idx === 0 ? "lg:block hidden" : "",
                    ].join(" ")}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="text-left">
                          <p className="font-semibold text-gray-900 leading-tight">
                            {t.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {t.role ? t.role : "Guest"}{" "}
                            {t.location ? `• ${t.location}` : ""}
                            {t.date ? ` • ${t.date}` : ""}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <Stars rating={t.rating} />
                        <p className="text-xs text-gray-400">
                          {t.rating.toFixed(1)} / 5
                        </p>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-5 relative flex-1">
                      <FontAwesomeIcon
                        icon={faQuoteLeft}
                        className="absolute -top-2 -left-1 text-emerald-500/15 text-3xl"
                      />

                      {/* ✅ reservar altura para que no cambie el layout */}
                      <p className="text-gray-700 leading-relaxed text-sm md:text-[15px] min-h-[96px]">
                        {t.text}
                      </p>
                    </div>

                    {/* Chips (siempre pegadas abajo) */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/15">
                        Verified stay
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/5 text-gray-700 ring-1 ring-black/5">
                        Great location
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black/5 text-gray-700 ring-1 ring-black/5">
                        Easy check-in
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Mobile arrows */}
          <div className="mt-6 flex md:hidden items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              className="h-11 w-11 rounded-full border border-black/10 bg-white/80 backdrop-blur hover:bg-white transition shadow-sm"
              aria-label="Previous testimonial">
              <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700" />
            </button>
            <button
              type="button"
              onClick={next}
              className="h-11 w-11 rounded-full border border-black/10 bg-white/80 backdrop-blur hover:bg-white transition shadow-sm"
              aria-label="Next testimonial">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-gray-700"
              />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setIndex(i)}
                className={[
                  "h-2.5 rounded-full transition-all",
                  i === index
                    ? "w-8 bg-emerald-600"
                    : "w-2.5 bg-black/15 hover:bg-black/25",
                ].join(" ")}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
