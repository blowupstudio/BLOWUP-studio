import { Instagram, Youtube, Music2, MessageCircle } from "lucide-react";
import { links } from "../lib/data";

const socials = [
  { label: "Instagram", href: links.instagram, icon: Instagram },
  { label: "YouTube", href: links.youtube, icon: Youtube },
  { label: "TikTok", href: links.tiktok, icon: Music2 },
  { label: "Discord", href: links.discord, icon: MessageCircle },
];

export default function Socials() {
  return (
    <section className="bg-surface py-12 md:py-14" data-testid="socials">
      <div className="max-w-shell mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-display font-black uppercase text-2xl sm:text-3xl tracking-tight">
            Følg <span className="text-brand">BLOWUP</span>
          </span>
        </div>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 border border-line bg-ink rounded-none px-4 py-3 text-bone hover:border-brand hover:text-brand transition-colors"
                data-testid={`social-${s.label.toLowerCase()}`}
              >
                <Icon size={18} className="text-brand group-hover:text-brand" />
                <span className="overline">{s.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
