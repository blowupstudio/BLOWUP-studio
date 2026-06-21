import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Disc3,
  Headphones,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Mic,
  Music,
  Play,
  Radio,
  Send,
  Star,
  X,
  Youtube,
} from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { useMemo, useState } from "react";

const links = {
  home: "https://blowupstudio.dk/",
  booking: "https://blowup-studio.planway.com/",
  readyBeat: "https://www.beatstars.com/blowupstudio",
  customBeat: "https://www.instagram.com/blowup_studio_coprod/",
  instagram: "https://www.instagram.com/blowup_studio/",
  youtube: "https://youtube.com/@BLOWUP_studio?si=662OrVgAfNgG2IBz",
  tiktok: "https://www.tiktok.com/@blowupstudio?_r=1&_t=ZN-96m6FoQV5r4",
  discord: "https://discord.gg/zfPjfQ2KJg",
  spotify: "https://open.spotify.com/embed/playlist/71CAFwukAKylGAjjmCwMrT?theme=0",
  email: "mailto:blowupstudio.booking@gmail.com",
  maps: "https://maps.google.com/maps?q=Hovedgaden%20440%2C%202640%20Hedehusene&t=m&z=12&output=embed&iwloc=near",
};

const asset = (path: string) => `${import.meta.env.BASE_URL}assets/${path}`;

const ctas = [
  {
    label: "Book din session",
    href: links.booking,
    icon: Calendar,
    kind: "primary",
  },
  {
    label: "Køb færdigt beat",
    href: links.readyBeat,
    icon: Disc3,
    kind: "secondary",
  },
  {
    label: "Custom beat",
    href: links.customBeat,
    icon: Music,
    kind: "ghost",
  },
] as const;

const pricing = [
  {
    title: "Tidlig / sen session",
    duration: "3 timer",
    price: "1.450,-",
    tag: "Hurtig release-klar session",
    included: ["Drikkevarer", "Beat", "Mix og master", "Flow- og tekstcoaching"],
  },
  {
    title: "Hverdags-session",
    duration: "6 timer",
    price: "2.000,-",
    tag: "Mest værdi",
    featured: true,
    included: ["Drikkevarer", "Beat", "Mix og master", "Flow- og tekstcoaching"],
  },
  {
    title: "Weekend-session",
    duration: "6 timer",
    price: "2.400,-",
    tag: "Når kalenderen skal passe",
    included: ["Drikkevarer", "Beat", "Mix og master", "Flow- og tekstcoaching"],
  },
  {
    title: "Mix / master",
    duration: "Fra bunden",
    price: "2.000,-",
    tag: "Industri-standard finish",
    included: ["Teknisk mix", "Mastering", "Balance", "Release-klar lyd"],
  },
  {
    title: "Skræddersyet beat",
    duration: "Custom",
    price: "400,-",
    tag: "Bygget til din vision",
    included: ["Moodmatch", "Arrangement", "Feedbackrunde", "Eksport"],
  },
];

const sessionFlow = [
  {
    title: "1. Retning",
    text: "Vi finder vibe, reference og mål, så sessionen starter med en klar plan.",
    icon: Music,
  },
  {
    title: "2. Optagelse",
    text: "Patrick coacher flow, energi og delivery, mens takes bliver bygget hurtigt op.",
    icon: Mic,
  },
  {
    title: "3. Sound",
    text: "Beat, vokalchain, mix og master formes omkring artisten, ikke omvendt.",
    icon: Headphones,
  },
  {
    title: "4. Release",
    text: "Du går derfra med en sang, der føles tættere på færdig end bare en demo.",
    icon: CheckCircle2,
  },
];

const videos = [
  {
    title: "ON THE SPOT - Nikz",
    id: "qIq5klvtMxk",
    duration: "1:25",
    thumb: asset("site/youtube-nikz.jpg"),
  },
  {
    title: "ON THE SPOT - Micass",
    id: "9FN129SrMjI",
    duration: "1:37",
    thumb: asset("site/youtube-micass.jpg"),
  },
  {
    title: "ON THE SPOT - ZZZ",
    id: "0Fz6g9WdRjs",
    duration: "1:00",
    thumb: asset("site/youtube-zzz.jpg"),
  },
  {
    title: "ON THE SPOT - Yayo",
    id: "Dz77YzqPU5k",
    duration: "1:45",
    thumb: asset("site/youtube-yayo.jpg"),
  },
  {
    title: "Micass X BLOWUP studio - STJERNER I BOKSEN | EP 1",
    id: "r5BuyJc2jDM",
    duration: "8:06",
    thumb: asset("site/youtube-stjerner.jpg"),
  },
];

const reviews = [
  {
    name: "Birkehuset Hundested",
    text: "Super godt studie og man mangler ikke noget når man kommer ind.",
  },
  {
    name: "It’s olive333351 #1",
    text: "Mega fedt studie, Patrick er mega hjælpsom og fornuftig at høre på, godt med drikkevarer og snacks.",
  },
  {
    name: "Pelle Krusbæk",
    text: "Varmeste producer i Danmark. Gratis øl.",
  },
  {
    name: "Willow",
    text: "Meget seriøst og produktivt arbejde, rigtig god og talentfuld producer der ved hvad han laver.",
  },
  {
    name: "BERG",
    text: "Kæmpe nice oplevelse, sødeste fyr i verden. 10/10.",
  },
];

const gallery = [
  asset("site/gallery-1.jpg"),
  asset("site/gallery-2.jpg"),
  asset("site/gallery-3.jpg"),
  asset("site/gallery-4.jpg"),
  asset("site/gallery-5.jpg"),
];

function ExternalAnchor({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  return (
    <a
      aria-label={ariaLabel}
      className={className}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu}>
        <img src={asset("site/blowup-icon.svg")} alt="" />
        <span>BLOWUP studio</span>
      </a>

      <button
        className="icon-button nav-toggle"
        type="button"
        aria-label={isOpen ? "Luk menu" : "Åbn menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={isOpen ? "site-nav is-open" : "site-nav"}>
        <a href="#studio" onClick={closeMenu}>
          Studio
        </a>
        <a href="#flow" onClick={closeMenu}>
          Flow
        </a>
        <a href="#priser" onClick={closeMenu}>
          Priser
        </a>
        <a href="#udgivelser" onClick={closeMenu}>
          Udgivelser
        </a>
        <a href="#artister" onClick={closeMenu}>
          Artister
        </a>
        <ExternalAnchor className="nav-book" href={links.booking}>
          Book <ArrowRight size={16} />
        </ExternalAnchor>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <video
        className="hero-video"
        src={asset("site/studio-hero.mp4")}
        poster={asset("site/youtube-nikz.jpg")}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="eyebrow">
          <span />
          Musikstudie i Hedehusene
        </div>
        <h1>BLOWUP studio</h1>
        <p>
          Fra ide til release-klar sang. Patrick og teamet hjælper med beat,
          vokal, coaching, mix og master, så projektet føles skarpt fra første
          take.
        </p>
        <div className="hero-actions" aria-label="Primære handlinger">
          {ctas.map((cta) => {
            const Icon = cta.icon;
            return (
              <ExternalAnchor key={cta.label} className={`button ${cta.kind}`} href={cta.href}>
                <Icon size={18} />
                {cta.label}
              </ExternalAnchor>
            );
          })}
        </div>
      </div>
      <div className="hero-proof" aria-label="Studio highlights">
        <div>
          <strong>5.0</strong>
          <span>Google-stemning</span>
        </div>
        <div>
          <strong>3-6t</strong>
          <span>Sessioner</span>
        </div>
        <div>
          <strong>Alt-i-en</strong>
          <span>Beat, coaching og mix</span>
        </div>
      </div>
    </section>
  );
}

function MobileActionStrip() {
  return (
    <section className="mobile-action-strip" aria-label="Andre handlinger">
      <ExternalAnchor className="mobile-action-link" href={links.readyBeat}>
        <Disc3 size={18} />
        Køb færdigt beat
      </ExternalAnchor>
      <ExternalAnchor className="mobile-action-link" href={links.customBeat}>
        <Music size={18} />
        Custom beat
      </ExternalAnchor>
    </section>
  );
}

function StudioSection() {
  return (
    <section className="section studio-section" id="studio">
      <div className="section-inner two-column">
        <div className="section-copy">
          <div className="section-kicker">Hvad tilbyder vi?</div>
          <h2>Et studie der får artister hurtigt fra ide til færdig lyd.</h2>
          <p>
            BLOWUP studio tilbyder professionel hjælp til mix, master, beats og
            tekster. Uanset om du er ny eller rutineret, får du en proces hvor
            pengene bruges på det, der faktisk løfter sangen.
          </p>
          <div className="studio-stats" aria-label="BLOWUP studio styrker">
            <div>
              <strong>Pop</strong>
              <span>Trap, drill, soul og dancehall</span>
            </div>
            <div>
              <strong>FL Studio</strong>
              <span>Plus erfaring i Cubase og liveinstrumenter</span>
            </div>
          </div>
          <div className="feature-list">
            <span>
              <Mic size={18} /> Vokal og flow
            </span>
            <span>
              <Headphones size={18} /> Mix og mastering
            </span>
            <span>
              <Music size={18} /> Beats og toplines
            </span>
          </div>
        </div>
        <div className="studio-portrait">
          <img src={asset("site/patrick.jpg")} alt="Patrick fra BLOWUP studio" />
          <div className="portrait-caption">
            <BadgeCheck size={18} />
            Patrick Forslund, producer og mix/master-engineer
          </div>
        </div>
      </div>
      <div className="gallery-strip" aria-label="Billeder fra BLOWUP studio">
        {gallery.map((src, index) => (
          <img key={src} src={src} alt={`BLOWUP studio galleri ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

function SessionFlowSection() {
  return (
    <section className="section flow-section" id="flow">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Session flow</div>
            <h2>Færre løse ideer. Mere færdig sang.</h2>
          </div>
          <ExternalAnchor className="button secondary compact" href={links.customBeat}>
            <Music size={17} />
            Tal om custom beat
          </ExternalAnchor>
        </div>
        <div className="flow-grid">
          {sessionFlow.map((step) => {
            const Icon = step.icon;
            return (
              <article className="flow-card" key={step.title}>
                <span>
                  <Icon size={20} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="section prices-section" id="priser">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Priser</div>
            <h2>Vælg pakken der passer til sangen.</h2>
            <p className="section-lead">
              Alle sessioner samler coaching, beat, optagelse og teknisk finish i
              en tydelig proces.
            </p>
          </div>
          <ExternalAnchor className="button primary compact" href={links.booking}>
            <Calendar size={17} />
            Book tid
          </ExternalAnchor>
        </div>

        <div className="price-grid">
          {pricing.map((item) => (
            <article
              className={item.featured ? "price-card is-featured" : "price-card"}
              key={item.title}
            >
              <div className="price-card-top">
                <span>{item.tag}</span>
                <Clock size={18} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.duration}</p>
              <strong>{item.price}</strong>
              <ul>
                {item.included.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <ExternalAnchor className="inline-link" href={links.booking}>
                Book denne løsning <ChevronRight size={16} />
              </ExternalAnchor>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReleasesSection() {
  return (
    <section className="section releases-section" id="udgivelser">
      <div className="section-inner two-column reverse-on-mobile">
        <div className="spotify-frame">
          <iframe
            title="BLOWUP studio Spotify playlist"
            src={links.spotify}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        <div className="section-copy">
          <div className="section-kicker">Udgivelser</div>
          <h2>Lyt til artisterne, ikke bare ordene.</h2>
          <p>
            Live-siden peger på BLOWUPs Spotify-playlist med udgivelser fra
            blandt andre han$en, Micass, RX, HYPD, MIBE, Nikz, $ly og flere.
            Her ligger beviset på, hvordan studiet lyder uden filter.
          </p>
          <div className="release-highlights">
            <span>Kamæleoner</span>
            <span>Holdin’ On</span>
            <span>ETABLERET</span>
            <span>Mama</span>
            <span>Magisk</span>
            <span>Marseille</span>
          </div>
          <ExternalAnchor className="button secondary compact" href="https://open.spotify.com/playlist/71CAFwukAKylGAjjmCwMrT">
            <Radio size={17} />
            Åbn playlist
          </ExternalAnchor>
        </div>
      </div>
    </section>
  );
}

function ArtistVideos() {
  const [selectedId, setSelectedId] = useState(videos[0].id);
  const selectedVideo = useMemo(
    () => videos.find((video) => video.id === selectedId) ?? videos[0],
    [selectedId],
  );

  return (
    <section className="section artists-section" id="artister">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Mød artisterne</div>
            <h2>Videoer der viser energien i rummet.</h2>
          </div>
          <ExternalAnchor className="button ghost compact" href={links.youtube}>
            <Youtube size={17} />
            YouTube
          </ExternalAnchor>
        </div>

        <div className="video-workbench">
          <div className="video-player">
            <iframe
              key={selectedVideo.id}
              title={selectedVideo.title}
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-list" aria-label="Video playlist">
            {videos.map((video) => (
              <button
                className={video.id === selectedId ? "video-item is-selected" : "video-item"}
                key={video.id}
                type="button"
                onClick={() => setSelectedId(video.id)}
              >
                <img src={video.thumb} alt="" />
                <span>
                  <strong>{video.title}</strong>
                  <small>{video.duration}</small>
                </span>
                <Play size={17} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="section reviews-section">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Anmeldelser</div>
            <h2>Det kunderne fremhæver igen og igen.</h2>
          </div>
          <div className="rating-badge" aria-label="Fem stjerner">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={18} fill="currentColor" />
            ))}
          </div>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="review-top">
                <span>{review.name.slice(0, 1)}</span>
                <div>
                  <strong>{review.name}</strong>
                  <small>Google review</small>
                </div>
              </div>
              <p>“{review.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section className="social-section">
      <video
        src={asset("site/studio-social.mp4")}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="social-overlay" />
      <div className="social-content">
        <div className="section-kicker">Følg med</div>
        <h2>Se sessions, drops og nye artister hvor de sker.</h2>
        <div className="social-links">
          <ExternalAnchor href={links.instagram} className="social-link" ariaLabel="Instagram">
            <Instagram size={22} />
            Instagram
          </ExternalAnchor>
          <ExternalAnchor href={links.youtube} className="social-link" ariaLabel="YouTube">
            <Youtube size={22} />
            YouTube
          </ExternalAnchor>
          <ExternalAnchor href={links.tiktok} className="social-link" ariaLabel="TikTok">
            <Music size={22} />
            TikTok
          </ExternalAnchor>
          <ExternalAnchor href={links.discord} className="social-link" ariaLabel="Discord">
            <Send size={22} />
            Discord
          </ExternalAnchor>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={asset("site/blowup-icon.svg")} alt="" />
          <div>
            <strong>BLOWUP studio</strong>
            <span>Alle rettigheder forbeholdes.</span>
          </div>
        </div>
        <div className="footer-contact">
          <a href={links.email}>
            <Mail size={17} />
            blowupstudio.booking@gmail.com
          </a>
          <span>
            <MapPin size={17} />
            Hovedgaden 440, 2640 Hedehusene
          </span>
          <span>CVR-nummer: 44986582</span>
        </div>
        <div className="map-frame">
          <iframe title="BLOWUP studio adresse" src={links.maps} loading="lazy" />
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div
      className="page-shell"
      style={
        {
          "--page-pattern": `url(${asset("site/blowup-pattern.png")})`,
        } as CSSProperties
      }
    >
      <Header />
      <main>
        <Hero />
        <MobileActionStrip />
        <StudioSection />
        <SessionFlowSection />
        <PricingSection />
        <ReleasesSection />
        <ArtistVideos />
        <ReviewsSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}
