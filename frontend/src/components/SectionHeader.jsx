import Reveal from "./Reveal";

export default function SectionHeader({ title, sub, center }) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center mx-auto" : ""}`}>
      <Reveal
        as="h2"
        className="font-display font-black uppercase text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight max-w-3xl"
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
