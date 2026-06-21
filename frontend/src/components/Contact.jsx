import { Mail, MapPin, ArrowUpRight, Instagram, Youtube, MessageCircle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Magnetic from "./Magnetic";
import { links } from "../lib/data";

const socials = [
  { label: "Instagram", href: links.instagram, icon: Instagram },
  { label: "YouTube", href: links.youtube, icon: Youtube },
  { label: "Discord", href: links.discord, icon: MessageCircle },
];

export default function Contact() {
  return (
    <section id="kontakt" className="bg-ink py-20 md:py-28" data-testid="contact">
      <div className="max-w-shell mx-auto px-5 md:px-8">
        <SectionHeader index="06" label="Kontakt" title="Kontakt." />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${links.email}`}
              className="flex items-center gap-4 border border-line bg-surface rounded-none p-5 hover:border-brand transition-colors group"
              data-testid="contact-email-link"
            >
              <span className="h-11 w-11 rounded-none bg-brand/15 flex items-center justify-center text-brand shrink-0">
                <Mail size={18} />
              </span>
              <div className="min-w-0">
                <div className="overline text-ash mb-0.5">Skriv til os</div>
                <div className="text-bone/90 group-hover:text-bone break-all">{links.email}</div>
              </div>
            </a>
            <a
              href={links.maps.replace("&output=embed", "")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-line bg-surface rounded-none p-5 hover:border-brand transition-colors group"
              data-testid="contact-address-link"
            >
              <span className="h-11 w-11 rounded-none bg-brand/15 flex items-center justify-center text-brand shrink-0">
                <MapPin size={18} />
              </span>
              <div className="min-w-0">
                <div className="overline text-ash mb-0.5">Find studiet</div>
                <div className="text-bone/90 group-hover:text-bone">{links.address}</div>
              </div>
            </a>

            <div className="border border-line bg-surface rounded-none p-6 sm:p-7 flex-1 flex flex-col justify-between gap-6">
              <div>
                <h3 className="font-display font-black uppercase text-3xl sm:text-4xl tracking-tight leading-none">
                  Klar i <span className="text-brand">studiet?</span>
                </h3>
                <p className="text-ash mt-3 max-w-sm">
                  Book din session direkte, eller følg med bag kulisserne.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Magnetic>
                  <a
                    href={links.booking}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-brand hover:bg-brandDark text-ink font-semibold px-6 py-3.5 rounded-none transition-colors"
                    data-testid="contact-book-btn"
                  >
                    Book din session <ArrowUpRight size={16} />
                  </a>
                </Magnetic>
                <div className="flex gap-3">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="h-11 w-11 rounded-none border border-line hover:border-brand hover:text-brand text-bone flex items-center justify-center transition-colors"
                        data-testid={`contact-social-${s.label.toLowerCase()}`}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="border border-line rounded-none overflow-hidden min-h-[320px] lg:min-h-full">
            <iframe
              title="Kort over BLOWUP studio"
              src={links.maps}
              className="w-full h-full min-h-[320px] grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
