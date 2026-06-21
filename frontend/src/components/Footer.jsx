import { ArrowUpRight } from "lucide-react";
import { links, asset } from "../lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink overflow-hidden" data-testid="footer">
      <div className="max-w-shell mx-auto px-5 md:px-8 pt-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12">
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
          <a
            href={links.booking}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brandDark text-ink font-semibold px-6 py-3.5 rounded-none transition-colors"
            data-testid="footer-book-btn"
          >
            Book session <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="leading-[0.8] text-center select-none px-2">
        <span className="font-display font-black uppercase text-[22vw] text-stroke">BLOWUP</span>
      </div>

      <div>
        <div className="max-w-shell mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ash">
          <span>© {new Date().getFullYear()} BLOWUP studio. Alle rettigheder forbeholdes.</span>
          <span>Hedehusene · Danmark</span>
        </div>
      </div>
    </footer>
  );
}
