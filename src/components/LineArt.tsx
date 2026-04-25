import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

/**
 * Architectural SVG line art — wireframe forms ghosted into the background.
 * Always positioned absolutely off-center, partially cropped, drifts on scroll.
 * pointer-events-none, hidden under md.
 */

type Side = "left" | "right";

interface BaseProps {
  side?: Side;
  /** vertical anchor inside parent (e.g. "10%", "40%") */
  top?: string;
  className?: string;
  /** scroll target — defaults to its own parent section */
  containerRef?: React.RefObject<HTMLElement>;
}

const useDrift = (containerRef: React.RefObject<HTMLElement> | undefined) => {
  const localRef = useRef<HTMLDivElement>(null);
  const target = containerRef ?? localRef;
  const { scrollYProgress } = useScroll({
    target: target as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 8]);
  return { y, rotate, localRef };
};

const stroke = "hsl(var(--foreground))";
const strokeProps = {
  fill: "none",
  stroke,
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  vectorEffect: "non-scaling-stroke" as const,
};

const positionFor = (side: Side) =>
  side === "right"
    ? "right-[-6vw] xl:right-[-4vw]"
    : "left-[-6vw] xl:left-[-4vw]";

/** Wireframe deconstructed cube — Home hero edge */
export const WireCube = ({
  side = "right",
  top = "20%",
  className = "",
  containerRef,
}: BaseProps) => {
  const { y, rotate, localRef } = useDrift(containerRef);
  return (
    <motion.div
      ref={localRef}
      aria-hidden
      style={{ y, rotate, top, opacity: 0.12 }}
      className={`pointer-events-none absolute z-0 hidden h-[55vh] w-[40vw] max-w-[520px] md:block ${positionFor(side)} ${className}`}
    >
      <svg viewBox="0 0 400 500" className="h-full w-full">
        {/* outer cube */}
        <polygon points="80,140 280,90 360,160 160,210" {...strokeProps} />
        <polygon points="80,140 80,400 160,470 160,210" {...strokeProps} />
        <polygon points="160,210 360,160 360,420 160,470" {...strokeProps} />
        {/* inner offset cube — fragmented */}
        <polyline points="120,200 260,170 320,220" {...strokeProps} />
        <polyline points="120,200 120,380 200,430" {...strokeProps} />
        <line x1="200" y1="430" x2="320" y2="380" {...strokeProps} />
        <line x1="320" y1="220" x2="320" y2="380" {...strokeProps} />
        {/* axial diagonal */}
        <line x1="80" y1="140" x2="360" y2="420" {...strokeProps} strokeDasharray="2 6" />
        {/* tick rule */}
        <line x1="20" y1="250" x2="60" y2="250" {...strokeProps} />
        <line x1="20" y1="260" x2="40" y2="260" {...strokeProps} />
        <text
          x="20"
          y="240"
          fill={stroke}
          fontSize="9"
          letterSpacing="3"
          fontFamily="Inter, sans-serif"
        >
          FIG · A
        </text>
      </svg>
    </motion.div>
  );
};

/** Deconstructed sphere — concentric rings + meridian arcs */
export const WireSphere = ({
  side = "left",
  top = "30%",
  className = "",
  containerRef,
}: BaseProps) => {
  const { y, rotate, localRef } = useDrift(containerRef);
  return (
    <motion.div
      ref={localRef}
      aria-hidden
      style={{ y, rotate, top, opacity: 0.1 }}
      className={`pointer-events-none absolute z-0 hidden h-[60vh] w-[36vw] max-w-[480px] md:block ${positionFor(side)} ${className}`}
    >
      <svg viewBox="0 0 400 500" className="h-full w-full">
        <circle cx="200" cy="250" r="180" {...strokeProps} />
        <circle cx="200" cy="250" r="140" {...strokeProps} />
        <circle cx="200" cy="250" r="90" {...strokeProps} strokeDasharray="2 5" />
        {/* meridians as ellipses */}
        <ellipse cx="200" cy="250" rx="60" ry="180" {...strokeProps} />
        <ellipse cx="200" cy="250" rx="120" ry="180" {...strokeProps} />
        <ellipse cx="200" cy="250" rx="180" ry="60" {...strokeProps} />
        {/* crosshair */}
        <line x1="200" y1="40" x2="200" y2="460" {...strokeProps} />
        <line x1="20" y1="250" x2="380" y2="250" {...strokeProps} />
        <text
          x="210"
          y="60"
          fill={stroke}
          fontSize="9"
          letterSpacing="3"
          fontFamily="Inter, sans-serif"
        >
          ORB · 02
        </text>
      </svg>
    </motion.div>
  );
};

/** Elongated pyramid + stacked triangulation — for Menu */
export const WirePyramid = ({
  side = "left",
  top = "8%",
  className = "",
  containerRef,
}: BaseProps) => {
  const { y, rotate, localRef } = useDrift(containerRef);
  return (
    <motion.div
      ref={localRef}
      aria-hidden
      style={{ y, rotate, top, opacity: 0.11 }}
      className={`pointer-events-none absolute z-0 hidden h-[70vh] w-[34vw] max-w-[460px] md:block ${positionFor(side)} ${className}`}
    >
      <svg viewBox="0 0 400 600" className="h-full w-full">
        {/* base */}
        <polygon points="60,520 340,520 280,560 120,560" {...strokeProps} />
        {/* faces */}
        <polygon points="60,520 200,40 340,520" {...strokeProps} />
        <polyline points="120,560 200,40 280,560" {...strokeProps} />
        {/* internal triangulation */}
        <line x1="60" y1="520" x2="280" y2="560" {...strokeProps} strokeDasharray="2 6" />
        <line x1="340" y1="520" x2="120" y2="560" {...strokeProps} strokeDasharray="2 6" />
        {/* horizontal sections */}
        <line x1="130" y1="380" x2="270" y2="380" {...strokeProps} />
        <line x1="160" y1="270" x2="240" y2="270" {...strokeProps} />
        <line x1="180" y1="170" x2="220" y2="170" {...strokeProps} />
        {/* spec text */}
        <text
          x="20"
          y="100"
          fill={stroke}
          fontSize="9"
          letterSpacing="3"
          fontFamily="Inter, sans-serif"
        >
          ELEV · 03
        </text>
        <text
          x="20"
          y="115"
          fill={stroke}
          fontSize="8"
          letterSpacing="2"
          fontFamily="Inter, sans-serif"
        >
          1 : 200
        </text>
      </svg>
    </motion.div>
  );
};

/** Fragmented ring — used as secondary marker */
export const WireRing = ({
  side = "right",
  top = "55%",
  className = "",
  containerRef,
}: BaseProps) => {
  const { y, rotate, localRef } = useDrift(containerRef);
  return (
    <motion.div
      ref={localRef}
      aria-hidden
      style={{ y, rotate, top, opacity: 0.09 }}
      className={`pointer-events-none absolute z-0 hidden h-[40vh] w-[28vw] max-w-[360px] md:block ${positionFor(side)} ${className}`}
    >
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <circle cx="200" cy="200" r="170" {...strokeProps} strokeDasharray="40 12 8 12" />
        <circle cx="200" cy="200" r="120" {...strokeProps} />
        <circle cx="200" cy="200" r="60" {...strokeProps} strokeDasharray="2 4" />
        <line x1="200" y1="20" x2="200" y2="80" {...strokeProps} />
        <line x1="200" y1="320" x2="200" y2="380" {...strokeProps} />
        <line x1="20" y1="200" x2="80" y2="200" {...strokeProps} />
        <line x1="320" y1="200" x2="380" y2="200" {...strokeProps} />
      </svg>
    </motion.div>
  );
};
