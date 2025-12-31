import React from "react";
import { motion, type Transition, type Variants } from "framer-motion";

type MotionPreset =
  | "fadeUp"
  | "fade"
  | "scaleIn"
  | "slideLeft"
  | "slideRight"
  | "none";

type Props = {
  children: React.ReactNode;
  className?: string;

  preset?: MotionPreset;

  delay?: number;
  duration?: number;

  once?: boolean;

  amount?: number;

  hover?: "lift" | "scale" | "none";

  variants?: Variants;

  initial?: any;
  animate?: any;
  whileInView?: any;

  as?: "div" | "article" | "section";
};

const presetVariants: Record<MotionPreset, Variants> = {
  none: {
    hidden: {},
    show: {},
  },
  fadeUp: {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    show: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0 },
  },
};

const hoverMap = {
  none: undefined,
  lift: { y: -4 },
  scale: { scale: 1.02 },
} as const;

export default function MotionCard({
  children,
  className = "",
  preset = "fadeUp",
  delay = 0.3,
  duration = 0.8,
  once = true,
  amount = 0.1,
  hover = "none",
  variants,
  initial,
  animate,
  whileInView,
  as = "div",
}: Props) {
  const v = variants ?? presetVariants[preset];

  const transition: Transition = {
    duration,
    delay,
    ease: [0.22, 1, 0.36, 1],
  };

  const Comp =
    as === "article"
      ? motion.article
      : as === "section"
      ? motion.section
      : motion.div;

  return (
    <Comp
      className={className}
      variants={v}
      initial={initial ?? "hidden"}
      animate={animate}
      whileInView={whileInView ?? "show"}
      viewport={{ once, amount }}
      transition={transition}
      whileHover={hoverMap[hover]}>
      {children}
    </Comp>
  );
}
