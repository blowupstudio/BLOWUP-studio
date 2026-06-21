import { ArrowUpRight, Quote } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { links, asset } from "../lib/data";

export default function Owner() {
  return (
    <section id="om" className="bg-ink py-20 md:py-28" data-testid="owner">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="order-1">
            <div className="relative border border-line bg-white rounded-none overflow-hidden">
              <img
                src={asset("patrick.jpeg")}
                alt="Patrick Forslund — grundlægger af BLOWUP studio"
                className="w-full h-full object-cover object-top aspect-[4/5]"
                data-testid="owner-photo"
              />
              <div className="absolute bottom-0 left-0 bg-brand text-ink px-4 py-2 overline">
                BLOWUP · Hedehusene
              </div>
            </div>
          </Reveal>

          <div className="order-2">
            <Reveal className="mb-3">
              <span className="font-display text-brand text-lg font-black leading-none tracking-tight">05</span>
            </Reveal>
            <Reveal as="h2" delay={0.05} className="font-display font-black uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight">
              Manden bag.
            </Reveal>
            <Reveal delay={0.1} className="overline text-tide mt-4">
              Grundlægger &amp; producer · Patrick Forslund
            </Reveal>

            <Reveal delay={0.15} className="text-ash text-base md:text-lg leading-relaxed mt-6 space-y-4 max-w-xl">
              <p>
                Patrick Forslund er manden bag BLOWUP studio i Hedehusene. Med
                hånden på både beat, vokal, mix og master har han taget over 100
                artister fra første idé til færdig udgivelse.
              </p>
              <p>
                For Patrick handler det lige så meget om stemningen som om lyden:
                et roligt rum, ærlig coaching og en producer der brænder for at få
                det bedste frem i dig — derfor kommer artisterne igen og igen.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 border-l-2 border-brand pl-5 max-w-xl">
              <p className="flex items-start gap-3 text-bone/90 italic">
                <Quote size={18} className="text-brand shrink-0 mt-1" />
                "Varmeste producer i Danmark. Sødeste fyr i verden — 10/10."
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-8">
              <Magnetic>
                <a
                  href={links.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-brand hover:bg-brandDark text-ink font-semibold px-7 py-4 rounded-none transition-colors"
                  data-testid="owner-book-btn"
                >
                  Book en session med Patrick <ArrowUpRight size={18} />
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
