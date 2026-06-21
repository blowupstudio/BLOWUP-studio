import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { scrollToHash } from "../lib/scroll";
import { links, asset } from "../lib/data";

const WORD = {
  hidden: { y: "110%" },
  show: (i) => ({ y: 0, transition: { duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};
const OVERLINE_INITIAL = { opacity: 0 };
const OVERLINE_ANIMATE = { opacity: 1 };
const OVERLINE_TRANSITION = { delay: 0.1 };

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-end overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={asset("studio-hero.mp4")}
        poster={asset("gallery-1.jpg")}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />

      <div className="relative max-w-shell w-full mx-auto px-5 md:px-8 pb-12 sm:pb-16 pt-32">
        <motion.div
          initial={OVERLINE_INITIAL}
          animate={OVERLINE_ANIMATE}
          transition={OVERLINE_TRANSITION}
          className="overline text-brand mb-5 flex items-center gap-2.5"
        >
          <span className="h-2 w-2 bg-brand animate-pulseDot" />
          Musikstudie · Hedehusene
        </motion.div>

        <h1 className="font-display font-black uppercase tracking-tight text-bone leading-[0.85] text-7xl sm:text-8xl lg:text-[9rem]">
          <span className="block overflow-hidden">
            <motion.span custom={0} variants={WORD} initial="hidden" animate="show" className="block">
              Fra idé
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span custom={1} variants={WORD} initial="hidden" animate="show" className="block">
              til <span className="text-brand">hit.</span>
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
          <Magnetic>
            <a
              href={links.booking}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-brand hover:bg-brandDark text-ink font-semibold text-base px-8 py-4 rounded-none transition-colors"
              data-testid="hero-book-btn"
            >
              Book din session
            </a>
          </Magnetic>
          <a
            href="#session"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash("#session", -40);
            }}
            className="inline-flex items-center justify-center gap-2 text-bone/90 hover:text-brand font-medium transition-colors"
            data-testid="hero-products-btn"
          >
            Se sessions &amp; beats <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="relative max-w-shell w-full mx-auto px-5 md:px-8 pb-8 flex items-center">
        <span className="hidden sm:flex items-center gap-2 overline text-ash">
          Scroll <ArrowDown size={14} className="animate-bounce" />
        </span>
      </div>
    </section>
  );
}
