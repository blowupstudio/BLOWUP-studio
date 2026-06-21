import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { scrollToHash } from "../lib/scroll";
import { links, nav, asset } from "../lib/data";

function DesktopNav({ onNavigate }) {
  return (
    <nav className="hidden lg:flex items-center gap-9">
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            onNavigate(item.href);
          }}
          className="overline text-ash hover:text-bone transition-colors"
          data-testid={`nav-${item.label.toLowerCase()}`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function MobileMenu({ onNavigate }) {
  return (
    <div className="lg:hidden glass border-t border-line" data-testid="mobile-menu">
      <div className="px-5 py-3 flex flex-col">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(item.href);
            }}
            className="py-3 font-display font-semibold uppercase text-2xl border-b border-line/70"
            data-testid={`mobile-nav-${item.label.toLowerCase()}`}
          >
            {item.label}
          </a>
        ))}
        <a
          href={links.booking}
          target="_blank"
          rel="noreferrer"
          className="mt-4 mb-2 inline-flex justify-center items-center gap-2 bg-brand text-ink font-semibold px-5 py-3.5 rounded-full"
        >
          Book session <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = (href) => {
    setOpen(false);
    scrollToHash(href);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[110] transition-all duration-300 ${
        scrolled ? "py-3 glass border-b border-line" : "py-4 sm:py-5"
      }`}
      data-testid="site-header"
    >
      <div className="max-w-shell mx-auto px-5 md:px-8 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            navigate("#top");
          }}
          className="flex items-center gap-2.5"
          data-testid="brand-link"
        >
          <img src={asset("blowup-icon.svg")} alt="BLOWUP" className="h-7 w-7" />
          <span className="font-display font-bold uppercase text-xl tracking-wide">
            BLOW<span className="text-brand">UP</span>
          </span>
        </a>

        <DesktopNav onNavigate={navigate} />

        <div className="flex items-center gap-3">
          <Magnetic className="hidden sm:block">
            <a
              href={links.booking}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-brand hover:bg-brandDark text-ink font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
              data-testid="header-book-btn"
            >
              Book session <ArrowUpRight size={16} />
            </a>
          </Magnetic>
          <button
            className="lg:hidden text-bone -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && <MobileMenu onNavigate={navigate} />}
    </header>
  );
}
