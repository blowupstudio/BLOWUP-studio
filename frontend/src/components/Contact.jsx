import { Mail, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { links } from "../lib/data";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-ink py-20 md:py-28" data-testid="contact">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader index="06" label="Kontakt" title="Sig hej." />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${links.email}`}
              className="flex items-center gap-4 border border-line bg-surface rounded-2xl p-5 hover:border-brand transition-colors group"
              data-testid="contact-email-link"
            >
              <span className="h-11 w-11 rounded-xl bg-brand/15 flex items-center justify-center text-brand shrink-0">
                <Mail size={18} />
              </span>
              <span className="text-bone/90 group-hover:text-bone break-all">{links.email}</span>
            </a>
            <a
              href={links.maps.replace("&output=embed", "")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-line bg-surface rounded-2xl p-5 hover:border-brand transition-colors group"
              data-testid="contact-address-link"
            >
              <span className="h-11 w-11 rounded-xl bg-brand/15 flex items-center justify-center text-brand shrink-0">
                <MapPin size={18} />
              </span>
              <span className="text-bone/90 group-hover:text-bone">{links.address}</span>
            </a>
          </div>

          <div className="border border-line rounded-2xl overflow-hidden min-h-[260px] lg:min-h-full">
            <iframe
              title="Kort over BLOWUP studio"
              src={links.maps}
              className="w-full h-full min-h-[260px] grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
