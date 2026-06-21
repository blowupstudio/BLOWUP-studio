import { useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="cursor-dot"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      data-testid="cursor-dot"
    />
  );
}
