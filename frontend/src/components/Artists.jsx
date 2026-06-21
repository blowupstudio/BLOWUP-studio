import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { videos } from "../lib/data";

const MODAL_BG = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
const MODAL_INNER = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
};

function VideoCard({ v, onOpen }) {
  return (
    <button
      onClick={() => onOpen(v)}
      className="group relative shrink-0 snap-start w-[78%] sm:w-[400px] rounded-2xl overflow-hidden border border-line text-left"
      data-testid={`video-item-${v.id}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={v.thumb}
          alt={v.title}
          className="h-full w-full object-cover brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="h-14 w-14 rounded-full bg-brand text-ink flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play size={22} fill="currentColor" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <span className="font-display font-semibold uppercase text-lg tracking-tight truncate">{v.title}</span>
        <span className="overline text-ash shrink-0 ml-3">{v.duration}</span>
      </div>
    </button>
  );
}

function VideoModal({ video, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-[130] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4"
      {...MODAL_BG}
      onClick={onClose}
      data-testid="artists-modal"
    >
      <button
        className="absolute top-5 right-5 text-bone hover:text-brand transition-colors"
        onClick={onClose}
        aria-label="Luk"
        data-testid="artists-modal-close"
      >
        <X size={30} />
      </button>
      <motion.div
        {...MODAL_INNER}
        className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-line"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          title={video.title}
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Artists() {
  const scroller = useRef(null);
  const [active, setActive] = useState(null);
  const scrollBy = (dir) => scroller.current?.scrollBy({ left: dir * 380, behavior: "smooth" });

  return (
    <section id="artister" className="bg-surface py-20 md:py-28" data-testid="artists">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHeader index="03" label="Artister" title="Oplev artisterne." />
          <div className="hidden md:flex gap-2 mb-10 md:mb-14">
            <button
              onClick={() => scrollBy(-1)}
              className="h-11 w-11 rounded-full border border-line hover:border-brand text-bone flex items-center justify-center transition-colors"
              aria-label="Forrige"
              data-testid="artists-prev"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              className="h-11 w-11 rounded-full border border-line hover:border-brand text-bone flex items-center justify-center transition-colors"
              aria-label="Næste"
              data-testid="artists-next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 md:px-8 pb-2 max-w-shell mx-auto"
      >
        {videos.map((v) => (
          <VideoCard key={v.id} v={v} onOpen={setActive} />
        ))}
      </div>

      <AnimatePresence>
        {active && <VideoModal video={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
