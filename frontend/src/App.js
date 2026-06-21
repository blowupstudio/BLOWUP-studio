import { useEffect } from "react";
import Lenis from "lenis";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Noise from "./components/Noise";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Configurator from "./components/Configurator";
import Releases from "./components/Releases";
import Artists from "./components/Artists";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
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
      <Cursor />
      <ScrollProgress />
      <Noise />
      <Header />
      <main>
        <Hero />
        <Marquee items={marqueeWords} yellow />
        <Stats />
        <Configurator />
        <Releases />
        <Artists />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
