import { useState } from "react";
import { X } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import SectionHeader from "./SectionHeader";
import { gallery } from "../lib/data";

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="bg-ink py-20 md:py-28 border-t border-line" data-testid="gallery">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader index="05" label="Rummet" title="Et rum at lave hits i." />

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[170px] md:auto-rows-[230px] gap-3 sm:gap-4">
          {gallery.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 0.06}
              onClick={() => setActive(src)}
              className={`cursor-pointer ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              data-testid={`gallery-item-${i}`}
            >
              <TiltCard className="h-full w-full rounded-xl overflow-hidden border border-line group">
                <img
                  src={src}
                  alt={`BLOWUP studio ${i + 1}`}
                  className="h-full w-full object-cover brightness-[0.9] group-hover:brightness-110 transition-all duration-500"
                />
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[130] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
          data-testid="gallery-lightbox"
        >
          <button
            className="absolute top-5 right-5 text-bone hover:text-brand transition-colors"
            onClick={() => setActive(null)}
            data-testid="lightbox-close"
            aria-label="Luk"
          >
            <X size={30} />
          </button>
          <img src={active} alt="" className="max-h-[85vh] max-w-full object-contain rounded-xl border border-line" />
        </div>
      )}
    </section>
  );
}
