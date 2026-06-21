import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DURATION = 1000; // counter duration (ms)
const ACCEL = [0.5, 0, 0.75, 0]; // calm morph, then rushes through
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const MOBILE_QUERY = [
  "(max-width: 767px)",
  "(hover: none) and (pointer: coarse)",
  "(hover: none) and (any-pointer: coarse)",
].join(", ");

function matchesMedia(query) {
  return typeof window !== "undefined" && window.matchMedia && window.matchMedia(query).matches;
}

function shouldSkipZoom() {
  if (matchesMedia(REDUCED_MOTION_QUERY) || matchesMedia(MOBILE_QUERY)) return true;
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;

  const shortSide = Math.min(window.innerWidth || 0, window.innerHeight || 0);
  return navigator.maxTouchPoints > 0 && shortSide <= 767;
}

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading | zoom | done
  const [skipIntroZoom, setSkipIntroZoom] = useState(shouldSkipZoom);
  const [dims] = useState(() => ({
    w: typeof window !== "undefined" ? window.innerWidth : 1280,
    h: typeof window !== "undefined" ? window.innerHeight : 800,
  }));
  const [wpos, setWpos] = useState(null); // measured centre of the "W" glyph
  const textRef = useRef(null);

  const fs = Math.min(Math.max(dims.w * 0.16, 64), 150);
  const cx = dims.w / 2;
  const cy = dims.h / 2;
  const zoomScale = Math.max(dims.w, dims.h) / (fs * 0.55) + 6;

  // Measure the exact position of the W inside "BLOWUP"
  useEffect(() => {
    if (skipIntroZoom) return undefined;

    let cancelled = false;
    const measure = () => {
      const t = textRef.current;
      if (!t || cancelled) return;
      try {
        const s = t.getStartPositionOfChar(3); // B0 L1 O2 W3
        const e = t.getEndPositionOfChar(3);
        const ext = t.getExtentOfChar(3);
        setWpos({ x: (s.x + e.x) / 2, y: ext.y + ext.height / 2 });
      } catch (_) {
        setWpos({ x: cx, y: cy });
      }
    };
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => requestAnimationFrame(measure));
    }
    requestAnimationFrame(measure);
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skipIntroZoom]);

  useEffect(() => {
    const updateSkipIntroZoom = () => setSkipIntroZoom(shouldSkipZoom());
    updateSkipIntroZoom();
    window.addEventListener("resize", updateSkipIntroZoom);
    return () => window.removeEventListener("resize", updateSkipIntroZoom);
  }, []);

  useEffect(() => {
    if (phase === "zoom" && skipIntroZoom) setPhase("done");
  }, [phase, skipIntroZoom]);

  // Counter 0 -> 100, then trigger the zoom
  useEffect(() => {
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setPhase(shouldSkipZoom() ? "done" : "zoom");
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const originX = wpos ? wpos.x : cx;
  const originY = wpos ? wpos.y : cy;
  const zooming = phase === "zoom" && !skipIntroZoom;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[200] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          data-testid="preloader"
        >
          <motion.svg
            className="absolute inset-0"
            width="100%"
            height="100%"
            viewBox={`0 0 ${dims.w} ${dims.h}`}
            preserveAspectRatio="xMidYMid slice"
            style={{ transformOrigin: `${originX}px ${originY}px` }}
            initial={{ scale: 1, filter: "blur(0px)" }}
            animate={
              zooming
                ? { scale: zoomScale, filter: "blur(5px)" }
                : { scale: 1, filter: "blur(0px)" }
            }
            transition={{ duration: 1.0, ease: ACCEL }}
            onAnimationComplete={() => {
              if (zooming) setPhase("done");
            }}
          >
            <defs>
              <mask id="blowup-w-hole">
                <rect width={dims.w} height={dims.h} fill="white" />
                {!skipIntroZoom && wpos && (
                  <text
                    x={wpos.x}
                    y={wpos.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontFamily="'Barlow', sans-serif"
                    fontWeight="700"
                    fontSize={fs * 0.96}
                    fill="black"
                  >
                    W
                  </text>
                )}
              </mask>
            </defs>

            <rect width={dims.w} height={dims.h} fill="#0A0A0A" mask="url(#blowup-w-hole)" />

            <motion.text
              ref={textRef}
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="'Barlow', sans-serif"
              fontWeight="700"
              fontSize={fs}
              initial={{ opacity: 1 }}
              animate={{ opacity: zooming ? 0 : 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <tspan fill="#F4F4F4">BLOW</tspan>
              <tspan fill="#FFD834">UP</tspan>
            </motion.text>
          </motion.svg>

          <AnimatePresence>
            {phase === "loading" && (
              <motion.div
                key="meta"
                className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
                style={{ top: cy + fs * 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-44 sm:w-60 h-px bg-line relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-brand" style={{ width: `${count}%` }} />
                </div>
                <span className="mt-3 font-display text-ash text-xl tabular-nums">{count}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
