import { Asterisk } from "lucide-react";

export default function Marquee({
  items,
  reverse = false,
  yellow = false,
  fast = false,
}) {
  const row = [...items, ...items];
  const anim = reverse
    ? "animate-marqueeReverse"
    : fast
    ? "animate-marqueeFast"
    : "animate-marquee";
  return (
    <div
      className={`overflow-hidden select-none marquee-pause ${
        yellow ? "bg-brand text-ink" : "text-bone"
      }`}
      data-testid="marquee"
    >
      <div className={`marquee-track flex w-max items-center ${anim} ${yellow ? "py-3.5" : "py-2"}`}>
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center">
            <span
              className={`font-display font-bold uppercase px-5 ${
                yellow ? "text-2xl sm:text-3xl" : "text-3xl sm:text-5xl text-stroke"
              }`}
            >
              {t}
            </span>
            <Asterisk size={yellow ? 18 : 22} strokeWidth={2.4} className={yellow ? "" : "text-brand"} />
          </span>
        ))}
      </div>
    </div>
  );
}
