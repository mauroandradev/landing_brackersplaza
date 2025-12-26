import { useEffect, useMemo, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt?: string;
};

type Props = {
  images: GalleryImage[];
  pageSize?: number;
  autoMsDesktop?: number;
  autoMsMobile?: number;
};

export default function GalleryMosaic({
  images,
  pageSize = 5,
  autoMsDesktop = 9000,
  autoMsMobile = 9000,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(images.length / pageSize));

  const current = useMemo(() => {
    const start = page * pageSize;
    return images.slice(start, start + pageSize);
  }, [images, page, pageSize]);

  const slots: (GalleryImage | null)[] = useMemo(() => {
    const arr: (GalleryImage | null)[] = [...current];
    while (arr.length < 5) arr.push(null);
    return arr;
  }, [current]);

  const goNextPage = () => setPage((p) => (p + 1) % totalPages);
  const goPrevPage = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  useEffect(() => {
    if (isMobile) return;
    if (totalPages <= 1) return;

    const id = window.setInterval(() => {
      goNextPage();
    }, autoMsDesktop);

    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, totalPages, autoMsDesktop]);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;

    const child = el.children.item(idx) as HTMLElement | null;
    if (!child) return;

    const left = child.offsetLeft; // posición dentro del track
    el.scrollTo({ left, behavior: "smooth" }); // ✅ solo horizontal, no afecta scroll vertical
  };

  const goNextMobile = () => {
    const next = (mobileIndex + 1) % Math.max(1, images.length);
    setMobileIndex(next);
    scrollToIndex(next);
  };

  const goPrevMobile = () => {
    const prev =
      (mobileIndex - 1 + Math.max(1, images.length)) %
      Math.max(1, images.length);
    setMobileIndex(prev);
    scrollToIndex(prev);
  };

  useEffect(() => {
    if (!isMobile) return;

    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      window.cancelAnimationFrame(raf);
      raf = window.requestAnimationFrame(() => {
        const children = Array.from(el.children) as HTMLElement[];
        if (!children.length) return;

        const left = el.getBoundingClientRect().left;
        let bestIdx = 0;
        let bestDist = Infinity;

        children.forEach((c, i) => {
          const dist = Math.abs(c.getBoundingClientRect().left - left);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = i;
          }
        });

        setMobileIndex(bestIdx);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    if (images.length <= 1) return;

    const id = window.setInterval(() => {
      setMobileIndex((i) => {
        const next = (i + 1) % images.length;
        requestAnimationFrame(() => scrollToIndex(next));
        return next;
      });
    }, autoMsMobile);

    return () => window.clearInterval(id);
  }, [isMobile, images.length, autoMsMobile]);

  const [open, setOpen] = useState(false);
  const [lightIdx, setLightIdx] = useState(0);

  const openLightbox = (idx: number) => {
    setLightIdx(idx);
    setOpen(true);
  };

  const closeLightbox = () => setOpen(false);

  const nextLight = () =>
    setLightIdx((i) => (i + 1) % Math.max(1, images.length));
  const prevLight = () =>
    setLightIdx(
      (i) => (i - 1 + Math.max(1, images.length)) % Math.max(1, images.length)
    );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLight();
      if (e.key === "ArrowLeft") prevLight();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, images.length]);

  const startIndex = page * pageSize;
  const slotToGlobalIndex = (slotIdx: number) => startIndex + slotIdx;

  return (
    <div className="mx-auto">
      <div className="md:hidden">
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3"
            style={{ WebkitOverflowScrolling: "touch" }}>
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative snap-start shrink-0 w-[85%] h-[240px] rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <img
                  src={img.src}
                  alt={img.alt ?? ""}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                <button
                  type="button"
                  onClick={() => openLightbox(idx)}
                  className="absolute top-3 left-3 h-9 w-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-slate-200 hover:cursor-pointer active:scale-95"
                  aria-label="Open image">
                  <span className="text-xl leading-none text-slate-700">+</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={goPrevMobile}
              className="h-10 text-black px-4 rounded-xl border border-slate-300 bg-white shadow-sm hover:bg-emerald-300/20 active:scale-95 hover:cursor-pointer"
              type="button">
              ← Back
            </button>

            <button
              onClick={goNextMobile}
              className="h-10 text-black px-4 rounded-xl border border-slate-300 bg-white shadow-sm hover:bg-emerald-300/20 active:scale-95 hover:cursor-pointer"
              type="button">
              Next →
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-12 gap-4">
          <ImageTile
            item={slots[0]}
            className="col-span-12 md:col-span-7 md:row-span-2 h-[450px]"
            onPlus={() => openLightbox(slotToGlobalIndex(0))}
          />
          <ImageTile
            item={slots[1]}
            className="col-span-12 md:col-span-5 h-[216px]"
            onPlus={() => openLightbox(slotToGlobalIndex(1))}
          />
          <ImageTile
            item={slots[2]}
            className="col-span-12 md:col-span-5 h-[216px]"
            onPlus={() => openLightbox(slotToGlobalIndex(2))}
          />
          <ImageTile
            item={slots[3]}
            className="col-span-12 md:col-span-4 h-[216px]"
            onPlus={() => openLightbox(slotToGlobalIndex(3))}
          />
          <ImageTile
            item={slots[4]}
            className="col-span-12 md:col-span-3 h-[216px]"
            onPlus={() => openLightbox(slotToGlobalIndex(4))}
          />

          <div className="relative flex justify-center items-center col-span-12 md:col-span-5 h-[216px] rounded-2xl border bg-white">
            <div className="flex gap-3 justify-center items-center">
              <button
                onClick={goPrevPage}
                className="text-black h-12 px-5 text-base font-semibold rounded-2xl border border-slate-300 bg-white shadow-sm hover:bg-emerald-300/20 active:scale-95 hover:cursor-pointer"
                type="button">
                ← Back
              </button>

              <button
                onClick={goNextPage}
                className="text-black h-12 px-6 text-base font-semibold rounded-2xl border border-slate-300 bg-white shadow-sm hover:bg-emerald-300/20 active:scale-95 hover:cursor-pointer"
                aria-label="Next images"
                type="button">
                Next →
              </button>
            </div>

            <div className="absolute bottom-3 right-3 text-xs text-slate-500">
              {page + 1} / {totalPages}
            </div>
          </div>
        </div>
      </div>

      {open && images[lightIdx] && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}>
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightIdx].src}
              alt={images[lightIdx].alt ?? ""}
              className="w-full max-h-[80vh] object-contain bg-black"
            />

            <button
              type="button"
              onClick={closeLightbox}
              className="absolute text-black top-3 right-3 h-10 w-10 rounded-full bg-white/95 shadow flex items-center justify-center hover:bg-white active:scale-95 hover:cursor-pointer"
              aria-label="Close">
              ✕
            </button>

            <button
              type="button"
              onClick={prevLight}
              className="absolute text-black left-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/95 shadow flex items-center justify-center hover:bg-white active:scale-95 hover:cursor-pointer"
              aria-label="Previous">
              ←
            </button>

            <button
              type="button"
              onClick={nextLight}
              className="absolute text-black right-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/95 shadow flex items-center justify-center hover:bg-white active:scale-95  hover:cursor-pointer"
              aria-label="Next">
              →
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/80">
              {lightIdx + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ImageTile({
  item,
  className = "",
  onPlus,
}: {
  item: GalleryImage | null;
  className?: string;
  onPlus?: () => void;
}) {
  if (!item) {
    return (
      <div
        className={`rounded-2xl bg-white/40 border border-slate-200 ${className}`}
      />
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white ${className}`}>
      <img
        src={item.src}
        alt={item.alt ?? ""}
        className="h-full w-full object-cover"
        loading="lazy"
      />

      {/* Botón + clickable */}
      <button
        type="button"
        onClick={onPlus}
        className="absolute top-3 left-3 h-9 w-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-slate-50 active:scale-95 hover:cursor-pointer"
        aria-label="Open image">
        <span className="text-xl leading-none text-slate-700">+</span>
      </button>
    </div>
  );
}
