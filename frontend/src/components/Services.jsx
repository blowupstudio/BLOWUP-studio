import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { services } from "../lib/data";

export default function Services() {
  return (
    <section id="studie" className="bg-ink py-20 md:py-28" data-testid="services">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader index="01" label="Studiet" title="Hvad vi laver." />

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <Reveal
              key={s.no}
              delay={i * 0.1}
              className="group relative border border-line bg-surface hover:bg-brand rounded-2xl p-7 sm:p-8 min-h-[260px] flex flex-col justify-between transition-colors duration-500 overflow-hidden"
              data-testid={`service-${s.no}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-display font-bold text-5xl text-brand group-hover:text-ink transition-colors">
                  {s.no}
                </span>
                <ArrowUpRight
                  size={26}
                  className="text-ash group-hover:text-ink -translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                />
              </div>
              <div>
                <h3 className="font-display font-semibold uppercase text-3xl tracking-tight text-bone group-hover:text-ink transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-ash group-hover:text-ink/70 leading-relaxed mt-2 transition-colors">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
