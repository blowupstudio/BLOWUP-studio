import Reveal from "./Reveal";

export default function SectionHeader({ index, label, title, sub, center }) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center mx-auto" : ""}`}>
      <Reveal
        className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}
      >
        <span className="font-display text-brand text-lg font-bold leading-none">
          {index}
        </span>
        <span className="h-px w-8 bg-brand" />
        <span className="overline text-ash">{label}</span>
      </Reveal>
      <Reveal
        as="h2"
        delay={0.05}
        className="font-display font-bold uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl"
      >
        {title}
      </Reveal>
      {sub && (
        <Reveal
          delay={0.1}
          className={`mt-5 text-ash text-base md:text-lg leading-relaxed ${
            center ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {sub}
        </Reveal>
      )}
    </div>
  );
}
