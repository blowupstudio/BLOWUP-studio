import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import { asset } from "../lib/data";

export default function Owner() {
  return (
    <section id="om" className="bg-ink py-20 md:py-28" data-testid="owner">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="order-1">
            <div className="relative border border-line bg-white rounded-none overflow-hidden">
              <img
                src={asset("patrick.jpeg")}
                alt="Patrick Forslund — stifter af BLOWUP studio"
                className="w-full h-full object-cover object-top aspect-[4/5]"
                data-testid="owner-photo"
              />
            </div>
          </Reveal>

          <div className="order-2">
            <Reveal as="h2" className="font-display font-black uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight">
              Om os.
            </Reveal>
            <Reveal delay={0.1} className="overline text-tide mt-4">
              Stifter &amp; producer · Patrick Forslund
            </Reveal>

            <Reveal delay={0.15} className="text-ash text-base md:text-lg leading-relaxed mt-6 space-y-4 max-w-xl">
              <p>
                Patrick Forslund er producer og stifter af BLOWUP studio med en
                livslang passion for musik. Allerede som 9-årig begyndte han at
                spille i band, og siden har musikken været en naturlig og central
                del af hans liv.
              </p>
              <p>
                Med erfaring fra både live-scenen og studiet har Patrick opbygget
                en stærk forståelse for sangskrivning, produktion, mix og mastering
                samt den kreative proces, der ligger bag en stærk lyd. Gennem årene
                har han arbejdet med forskellige DAWs som Cubase og Reaper, men
                bruger i dag primært FL Studio som sit værktøj.
              </p>
              <p>
                Som producer har Patrick fokus på at skabe kvalitet, stemning og
                identitet, hvor målet altid er at fremhæve artistens udtryk og få
                hver sang til at stå så stærkt som muligt.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-8 border-l-2 border-brand pl-5 max-w-xl">
              <p className="flex items-start gap-3 text-bone/90 italic">
                <Quote size={18} className="text-brand shrink-0 mt-1" />
                "Varmeste producer i Danmark. Sødeste fyr i verden — 10/10."
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
