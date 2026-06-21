import { Radio } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import Marquee from "./Marquee";
import Magnetic from "./Magnetic";
import { links, releaseTitles } from "../lib/data";

export default function Releases() {
  return (
    <section id="lyt" className="bg-ink py-20 md:py-28" data-testid="releases">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader index="02" label="Lyt" title="Lyt til artisterne." />
      </div>

      <div className="my-10">
        <Marquee items={releaseTitles} />
      </div>

      <div className="max-w-shell mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-5 gap-6 items-center">
          <Reveal className="lg:col-span-3 rounded-2xl overflow-hidden border border-line">
            <iframe
              title="BLOWUP studio playlist"
              src={links.spotifyEmbed}
              width="100%"
              height="420"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="block"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-2">
            <p className="text-ash text-lg leading-relaxed max-w-sm">
              100+ udgivelser fra studiet. Tryk play.
            </p>
            <Magnetic>
              <a
                href={links.spotifyOpen}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-brand hover:bg-brandDark text-ink font-semibold text-sm px-6 py-3.5 rounded-full transition-colors"
                data-testid="releases-spotify-btn"
              >
                <Radio size={16} /> Åbn på Spotify
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
