import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "./CountUp";
import { stats } from "../lib/data";

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-ink border-y border-line" data-testid="stats">
      <div className="max-w-shell mx-auto px-5 md:px-8 grid grid-cols-3 divide-x divide-line">
        {stats.map((s) => (
          <div key={s.label} className="py-10 sm:py-14 px-3 text-center">
            <div className="font-display font-bold text-5xl sm:text-7xl text-bone leading-none">
              {s.decimals ? (
                s.decimals
              ) : (
                <CountUp value={inView ? s.value : 0} />
              )}
              {s.suffix && <span className="text-brand">{s.suffix}</span>}
            </div>
            <div className="overline text-ash mt-3">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
