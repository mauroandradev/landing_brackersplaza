import { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

type TTestimonial = {
  id: number;
  name: string;
  rating: number;
  text: string;
  date?: string;
};

const TESTIMONIALS: TTestimonial[] = [
  {
    id: 1,
    name: "Julio De la Fuente S.",
    rating: 5,
    text: "My family and I had one apartment for more than 30 years. The Condos have a great staff and always gentle treatment. Over the years, they have improve a lot and always making maintenance to keep it at great state all the structure.",
    date: "5 years ago",
  },
  {
    id: 2,
    name: "Andrew Posada",
    rating: 5,
    text: "Gorgeous place to be , very helpful staff & Management, very helpful and very clean place , nice beachfront and a lot of swimming pools.",
    date: "2 years ago",
  },
  {
    id: 3,
    name: "Ruben Barrera",
    rating: 4.5,
    text: "Amazing view beautiful place.",
    date: "3 years ago",
  },
  {
    id: 4,
    name: "Jdot Prez",
    rating: 5,
    text: "Relocation of a house to this address was smooth",
    date: "4 years ago",
  },
  {
    id: 5,
    name: "Patricia Coffey",
    rating: 5,
    text: "New name,PARIDISE.",
    date: "4 years ago",
  },
  {
    id: 6,
    name: "Ignacia Vasquez",
    rating: 5,
    text: "Hermosos departamentos.",
    date: "5 years ago",
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

  const setIndexKeepScroll = (fn: (i: number) => number) => {
    const y = window.scrollY;
    setIndex((i) => fn(i));
    requestAnimationFrame(() =>
      window.scrollTo({ top: y, left: 0, behavior: "auto" })
    );
  };

  const goTo = (i: number) => {
    const y = window.scrollY;
    setIndex(i);
    requestAnimationFrame(() =>
      window.scrollTo({ top: y, left: 0, behavior: "auto" })
    );
  };

  const prev = () =>
    setIndexKeepScroll((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndexKeepScroll((i) => (i + 1) % items.length);

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

  // ✅ armamos 3 visibles siempre (izq, centro, der)
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
              className="h-10 w-10 rounded-full hover:cursor-pointer border border-black/10 bg-white/80 backdrop-blur hover:bg-white transition shadow-sm"
              aria-label="Previous testimonial">
              <FontAwesomeIcon icon={faChevronLeft} className="text-gray-700" />
            </button>
            <button
              type="button"
              onClick={next}
              className="h-10 w-10 rounded-full hover:cursor-pointer border border-black/10 bg-white/80 backdrop-blur hover:bg-white transition shadow-sm"
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

          {/* ✅ contenedor con altura y stretch */}
          <div className="relative min-h-[380px] md:min-h-[420px] lg:min-h-[440px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
              {visible.map((t, idx) => {
                const isCenter = idx === 1;

                // ✅ mostrar 1 en mobile, 2 en md, 3 en lg (sin hacks raros)
                const responsiveVisibility =
                  idx === 2 ? "md:hidden lg:block" : ""; // la 3ra se oculta solo en md

                return (
                  <div key={t.id} className={"h-full " + responsiveVisibility}>
                    <article
                      className={[
                        "h-full min-h-[340px] md:min-h-[360px] lg:min-h-[380px]",
                        "rounded-2xl border border-black/5 bg-white/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)]",
                        "p-6 md:p-7 transition-all duration-500",
                        "grid grid-rows-[auto_1fr_auto]", // ✅ header / body / footer
                        isCenter
                          ? "lg:scale-[1.02] lg:border-emerald-500/20 lg:shadow-[0_20px_60px_rgba(16,185,129,0.12)]"
                          : "opacity-95 hover:opacity-100",
                      ].join(" ")}>
                      {/* HEADER */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="text-left">
                          <p className="font-semibold text-gray-900 leading-tight">
                            {t.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {t.date ? ` • ${t.date}` : ""}
                          </p>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                          <Stars rating={t.rating} />
                          <p className="text-xs text-gray-400">
                            {t.rating.toFixed(1)} / 5
                          </p>
                        </div>
                      </div>

                      {/* BODY (CRECE) */}
                      <div className="mt-5 min-h-0">
                        <p className="text-gray-700 leading-relaxed text-sm md:text-[15px]">
                          {t.text}
                        </p>
                      </div>

                      {/* FOOTER (ALINEADO ABAJO) */}
                      <div className="pt-6 flex flex-wrap gap-2 self-end">
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
                  </div>
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
                onClick={() => goTo(i)}
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
