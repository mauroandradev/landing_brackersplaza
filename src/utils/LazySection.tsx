import { type ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: number; // para reservar espacio y evitar saltos
};

export function LazySection({
  children,
  rootMargin = "300px",
  minHeight = 200,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight }}>
      {visible ? children : null}
    </div>
  );
}
