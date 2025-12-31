import { useEffect, useMemo, useState } from "react";
import UlNav from "../atoms/UlNav";

function useActiveSection(ids: string[], rootMargin = "-30% 0px -60% 0px") {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [ids, rootMargin]);

  return active;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const yOffset = -90; // alto del navbar
  const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  const sections = useMemo(
    () => ["header", "us", "amenities", "gallery", "location", "contact"],
    []
  );

  const active = useActiveSection(sections);

  // ✅ si entran con URL que trae hash (#contact), scrollea
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.replace("#", "");
    // pequeño delay para asegurar que el DOM ya montó
    setTimeout(() => scrollToId(id), 0);
  }, []);

  const linkClass = (id: string) =>
    [
      "transition font-medium",
      active === id ? "text-teal-300" : "text-white/90 hover:text-teal-200",
    ].join(" ");

  const ctaClass =
    "py-2 px-4 rounded bg-teal-300 text-gray-900 font-semibold hover:opacity-90 transition";

  const onNavClick = (id: string) => {
    setOpen(false);
    // actualiza URL sin recargar (opcional, pero útil)
    window.history.replaceState(null, "", `#${id}`);
    scrollToId(id);
  };

  return (
    <nav className="w-full fixed top-0 border-b border-white/10 bg-gray-600/60 backdrop-blur z-50">
      <div className="w-3/4 h-20 flex justify-between items-center px-4 lg:px-8 m-auto">
        {/* Logo */}
        <button
          type="button"
          onClick={() => onNavClick("header")}
          className="flex gap-2 text-lg sm:text-xl font-bold flex-wrap text-left"
          aria-label="Go to home">
          <span>Breakers Plaza</span>
          <span className="text-teal-300">Condominiums</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:block">
          <UlNav className="flex items-center gap-10">
            <button
              type="button"
              onClick={() => onNavClick("header")}
              className={linkClass("header")}>
              Home
            </button>

            <button
              type="button"
              onClick={() => onNavClick("us")}
              className={linkClass("us")}>
              Us
            </button>

            <button
              type="button"
              onClick={() => onNavClick("amenities")}
              className={linkClass("amenities")}>
              Amenities
            </button>

            <button
              type="button"
              onClick={() => onNavClick("gallery")}
              className={linkClass("gallery")}>
              Gallery
            </button>

            <button
              type="button"
              onClick={() => onNavClick("location")}
              className={linkClass("location")}>
              Location
            </button>

            <button
              type="button"
              onClick={() => onNavClick("contact")}
              className={ctaClass}>
              Contact
            </button>
          </UlNav>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-7 h-7 text-white">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={open ? "md:hidden" : "hidden"}>
        <UlNav className="flex flex-col gap-3 mx-auto p-4 w-3/4 border-t border-white/10">
          <button
            type="button"
            onClick={() => onNavClick("header")}
            className={linkClass("header")}>
            Home
          </button>
          <button
            type="button"
            onClick={() => onNavClick("us")}
            className={linkClass("us")}>
            Us
          </button>
          <button
            type="button"
            onClick={() => onNavClick("amenities")}
            className={linkClass("amenities")}>
            Amenities
          </button>
          <button
            type="button"
            onClick={() => onNavClick("gallery")}
            className={linkClass("gallery")}>
            Gallery
          </button>
          <button
            type="button"
            onClick={() => onNavClick("location")}
            className={linkClass("location")}>
            Location
          </button>
          <button
            type="button"
            onClick={() => onNavClick("contact")}
            className={ctaClass}>
            Contact
          </button>
        </UlNav>
      </div>
    </nav>
  );
}
