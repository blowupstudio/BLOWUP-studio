import { useState } from "react";
import { ArrowUpRight, Check, Disc3, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Magnetic from "./Magnetic";
import CountUp from "./CountUp";
import { sessions, sessionIncludes, links } from "../lib/data";

const daKr = (n) => n.toLocaleString("da-DK");

function SessionOption({ s, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(s.id)}
      className={`w-full text-left rounded-2xl border p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors ${
        selected ? "border-brand bg-brand/[0.07]" : "border-line bg-ink hover:border-lineStrong"
      }`}
      data-testid={`session-option-${s.id}`}
    >
      <div className="flex items-center gap-4">
        <span
          className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
            selected ? "border-brand" : "border-lineStrong"
          }`}
        >
          {selected && <span className="h-2.5 w-2.5 rounded-full bg-brand" />}
        </span>
        <div>
          <div className="font-display font-semibold uppercase text-2xl tracking-tight leading-none">{s.label}</div>
          <div className="overline text-ash mt-1">{s.note}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {s.popular && (
          <span className="hidden sm:inline-block bg-brand text-ink text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
            Populær
          </span>
        )}
        <span className="font-display font-black text-2xl text-bone">{daKr(s.price)},-</span>
      </div>
    </button>
  );
}

function SummaryPanel({ total }) {
  return (
    <div className="rounded-2xl border border-line bg-ink p-6 sm:p-8 lg:sticky lg:top-24">
      <div className="overline text-ash">Din pris</div>
      <div className="font-display font-black text-7xl sm:text-8xl text-brand leading-none my-3">
        <CountUp value={total} format={daKr} />
        <span className="text-bone text-5xl align-top">,-</span>
      </div>
      <ul className="space-y-2.5 my-6">
        {sessionIncludes.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-bone/90">
            <Check size={16} className="text-brand shrink-0" /> {f}
          </li>
        ))}
      </ul>
      <Magnetic className="block">
        <a
          href={links.booking}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brandDark text-ink font-semibold text-base px-6 py-4 rounded-full transition-colors"
          data-testid="configurator-book-btn"
        >
          Book denne session <ArrowUpRight size={18} />
        </a>
      </Magnetic>
    </div>
  );
}

function BeatCard({ href, icon: Icon, title, note, testid }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-line bg-ink hover:border-tide p-6 flex items-center justify-between gap-4 transition-colors"
      data-testid={testid}
    >
      <div className="flex items-center gap-4">
        <span className="h-12 w-12 rounded-xl bg-tide/15 text-tide flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <Icon size={22} />
        </span>
        <div>
          <div className="font-display font-semibold uppercase text-xl tracking-tight leading-none">{title}</div>
          <div className="overline text-ash mt-1.5">{note}</div>
        </div>
      </div>
      <ArrowUpRight size={20} className="text-ash group-hover:text-tide transition-colors shrink-0" />
    </a>
  );
}

export default function Configurator() {
  const [sel, setSel] = useState(sessions[1].id);
  const current = sessions.find((s) => s.id === sel) ?? sessions[0];
  const total = current.price;

  return (
    <section id="session" className="bg-surface py-20 md:py-28" data-testid="configurator">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader index="01" label="Byg din session" title="Vælg din session." />
        <div className="grid lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3 space-y-3">
            {sessions.map((s) => (
              <SessionOption key={s.id} s={s} selected={s.id === sel} onSelect={setSel} />
            ))}
          </div>
          <div className="lg:col-span-2">
            <SummaryPanel total={total} />
          </div>
        </div>

        <div className="mt-14">
          <div className="overline text-ash mb-4">Eller køb et beat</div>
          <div className="grid sm:grid-cols-2 gap-4">
            <BeatCard
              href={links.readyBeat}
              icon={Disc3}
              title="Køb færdigt beat"
              note="BeatStars"
              testid="buy-ready-beat"
            />
            <BeatCard
              href={links.customBeat}
              icon={Sparkles}
              title="Køb skræddersyet beat"
              note="Instagram · co-prod"
              testid="buy-custom-beat"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
