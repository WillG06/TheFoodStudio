import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

interface LogoMarkProps {
  className?: string;
  animated?: boolean;
}

/**
 * Small editorial logo mark — a stylised "F·S" inside a hand-drawn diamond,
 * with thin rules. Designed to read at small sizes against dark backgrounds.
 */
const LogoMark = ({ className, animated = true }: LogoMarkProps) => {
  const Wrap = animated ? motion.svg : "svg";
  const props = animated
    ? {
        initial: { opacity: 0, scale: 0.92 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 1.6, ease: easeOut, delay: 0.1 },
      }
    : {};

  return (
    <Wrap
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...(props as object)}
    >
      {/* outer diamond */}
      <path
        d="M60 6 L114 60 L60 114 L6 60 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.75"
      />
      {/* inner diamond */}
      <path
        d="M60 22 L98 60 L60 98 L22 60 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
        opacity="0.45"
      />
      {/* horizontal & vertical hairlines */}
      <line x1="0" y1="60" x2="22" y2="60" stroke="currentColor" strokeWidth="0.4" opacity="0.45" />
      <line x1="98" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="0.4" opacity="0.45" />
      <line x1="60" y1="0" x2="60" y2="22" stroke="currentColor" strokeWidth="0.4" opacity="0.45" />
      <line x1="60" y1="98" x2="60" y2="120" stroke="currentColor" strokeWidth="0.4" opacity="0.45" />
      {/* monogram */}
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Cormorant Garamond', serif"
        fontStyle="italic"
        fontSize="26"
        letterSpacing="-0.5"
      >
        F·S
      </text>
      {/* tiny dot accent */}
      <circle cx="60" cy="82" r="0.9" fill="currentColor" opacity="0.7" />
    </Wrap>
  );
};

export default LogoMark;
