import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span" | "blockquote" | "li";
  once?: boolean;
}

const Reveal = ({ children, className, delay = 0, as = "div", once = true }: RevealProps) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
