import { motion } from "framer-motion";

const VIEWPORT = { once: true, margin: "-80px" };
const EASE = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  const initial = { opacity: 0, y };
  const whileInView = { opacity: 1, y: 0 };
  const transition = { duration: 0.7, delay, ease: EASE };
  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={VIEWPORT}
      transition={transition}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
