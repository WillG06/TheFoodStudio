import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface SideOrnamentProps {
  side: "left" | "right";
  /** Optional eyebrow label drawn vertically along the rule. */
  label?: string;
  /** Optional fixed top offset (e.g. "10rem") — defaults to 0. */
  top?: string;
  /** Color via Tailwind className, defaults to muted-foreground/30. */
  className?: string;
  /** Vertical span of the ornament — defaults to full section height. */
  height?: string;
}

/**
 * Editorial vertical line-art ornament that drifts as the page scrolls.
 * Renders a hairline rule, a small diamond mark, a circle, and an optional
 * vertical eyebrow label. Designed to sit at section edges as marginalia.
 *
 * Pure presentation — no business logic.
 */
const SideOrnament = ({
  side,
  label,
  top = "0",
  className = "text-graphite/40",
  height = "100%",
}: SideOrnamentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={ref}
      style={{ top, height }}
      className={`pointer-events-none absolute z-0 hidden md:block ${
        side === "left" ? "left-4 lg:left-8" : "right-4 lg:right-8"
      } ${className}`}
      aria-hidden
    >
      <motion.div style={{ y, opacity }} className="flex h-full flex-col items-center gap-6">
        {/* small numeral / mark */}
        <Mark y={y} />
        {/* hairline rule */}
        <div className="w-px flex-1 bg-current opacity-50" />
        {/* tiny diamond */}
        <svg viewBox="0 0 12 12" className="h-3 w-3">
          <path
            d="M6 1 L11 6 L6 11 L1 6 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </svg>
        <div className="w-px flex-1 bg-current opacity-30" />
        {/* circle */}
        <svg viewBox="0 0 12 12" className="h-2 w-2">
          <circle cx="6" cy="6" r="4.5" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </svg>
        {label && (
          <span
            className="font-sans text-[9px] uppercase tracking-eyebrow"
            style={{ writingMode: "vertical-rl" }}
          >
            {label}
          </span>
        )}
        <div className="w-px flex-1 bg-current opacity-50" />
      </motion.div>
    </div>
  );
};

const Mark = ({ y }: { y: MotionValue<string> }) => (
  <motion.svg
    viewBox="0 0 14 14"
    className="h-3.5 w-3.5"
    style={{ rotate: y }}
  >
    <path
      d="M7 0 L14 7 L7 14 L0 7 Z M7 3 L11 7 L7 11 L3 7 Z"
      fill="currentColor"
      fillRule="evenodd"
      opacity="0.8"
    />
  </motion.svg>
);

export default SideOrnament;
