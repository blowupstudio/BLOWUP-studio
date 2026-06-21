import { useEffect } from "react";
import Lenis from "lenis";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Configurator from "./components/Configurator";
import Releases from "./components/Releases";
import Artists from "./components/Artists";
import Gallery from "./components/Gallery";
import Owner from "./components/Owner";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import { marqueeWords } from "./lib/data";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    window.lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.lenis;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-ink text-bone min-h-screen relative">
      <Preloader />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Marquee items={marqueeWords} yellow />
        <Stats />
        <Configurator />
        <Releases />
        <Artists />
        <Gallery />
        <Owner />
        <Reviews />
        <Contact />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
