import { Instagram, Youtube, Music2, MessageCircle, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { links, asset } from "../lib/data";

const socials = [
  { label: "Instagram", href: links.instagram, icon: Instagram },
  { label: "YouTube", href: links.youtube, icon: Youtube },
  { label: "TikTok", href: links.tiktok, icon: Music2 },
  { label: "Discord", href: links.discord, icon: MessageCircle },
];

function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <Magnetic key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="h-12 w-12 rounded-full border border-line hover:border-brand hover:text-brand text-bone flex items-center justify-center transition-colors"
              aria-label={s.label}
              data-testid={`social-${s.label.toLowerCase()}`}
            >
              <Icon size={20} />
            </a>
          </Magnetic>
        );
      })}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line overflow-hidden" data-testid="footer">
      <div className="max-w-shell mx-auto px-5 md:px-8 pt-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img src={asset("blowup-icon.svg")} alt="BLOWUP" className="h-8 w-8" />
              <span className="font-display font-black uppercase text-xl tracking-wide">
                BLOW<span className="text-brand">UP</span> studio
              </span>
            </div>
            <p className="text-ash text-sm max-w-xs">
              {links.address} · CVR {links.cvr}
            </p>
          </div>
          <SocialLinks />
        </div>
      </div>

      <div className="leading-[0.8] text-center select-none px-2">
        <span className="font-display font-black uppercase text-[22vw] text-stroke">BLOWUP</span>
      </div>

      <div className="border-t border-line">
        <div className="max-w-shell mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ash">
          <span>© {new Date().getFullYear()} BLOWUP studio. Alle rettigheder forbeholdes.</span>
          <a
            href={links.booking}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-bone hover:text-brand transition-colors"
            data-testid="footer-book-btn"
          >
            Book session <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
