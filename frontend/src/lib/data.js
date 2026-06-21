export const links = {
  home: "https://blowupstudio.dk/",
  booking: "https://blowup-studio.planway.com/",
  readyBeat: "https://www.beatstars.com/blowupstudio",
  customBeat: "https://www.instagram.com/blowup_studio_coprod?igsh=Zm1scmZrZWh4MHFs&utm_source=qr",
  instagram: "https://www.instagram.com/blowup_studio/",
  youtube: "https://youtube.com/@BLOWUP_studio?si=662OrVgAfNgG2IBz",
  tiktok: "https://www.tiktok.com/@blowupstudio?_r=1&_t=ZN-96m6FoQV5r4",
  discord: "https://discord.gg/zfPjfQ2KJg",
  spotifyEmbed: "https://open.spotify.com/embed/playlist/71CAFwukAKylGAjjmCwMrT?theme=0",
  spotifyOpen: "https://open.spotify.com/playlist/71CAFwukAKylGAjjmCwMrT",
  email: "blowupstudio.booking@gmail.com",
  maps: "https://maps.google.com/maps?q=Hovedgaden%20440%2C%202640%20Hedehusene&t=m&z=12&output=embed&iwloc=near",
  address: "Hovedgaden 440, 2640 Hedehusene",
  cvr: "44986582",
};

export const asset = (name) => `/assets/site/${name}`;

export const nav = [
  { label: "Session", href: "#session" },
  { label: "Lyt", href: "#lyt" },
  { label: "Artister", href: "#artister" },
  { label: "Om", href: "#om" },
  { label: "Kontakt", href: "#kontakt" },
];

export const marqueeWords = ["MIX", "MASTER", "BEATS", "COACHING", "VOKAL", "TOPLINE"];

export const stats = [
  { value: 100, suffix: "+", label: "Udgivelser" },
  { display: "5.0", label: "Google rating" },
  { display: "3–6", suffix: "t", label: "Timers session" },
];

export const services = [
  {
    no: "01",
    title: "Optagelse",
    text: "Coaching på flow, energi og delivery — takes der sidder.",
  },
  {
    no: "02",
    title: "Mix & Master",
    text: "Industri-standard finish. Release-klar lyd.",
  },
  {
    no: "03",
    title: "Beats & Topline",
    text: "Trap, drill, pop, soul — bygget til din vision.",
  },
];

export const sessions = [
  { id: "early", label: "3 TIMER", note: "Tidlig / sen", price: 1450 },
  { id: "weekday", label: "6 TIMER", note: "Hverdag", price: 2000, popular: true },
  { id: "weekend", label: "6 TIMER", note: "Weekend", price: 2400 },
  { id: "mix", label: "MIX / MASTER", note: "Fra bunden", price: 2000 },
];

export const sessionIncludes = ["Beat", "Mix & master", "Coaching", "Drikkevarer"];
export const addonBeat = { label: "Ekstra custom beat", price: 400 };

export const videos = [
  { title: "ON THE SPOT — Nikz", id: "qIq5klvtMxk", duration: "1:25", thumb: asset("youtube-nikz.jpg") },
  { title: "ON THE SPOT — Micass", id: "9FN129SrMjI", duration: "1:37", thumb: asset("youtube-micass.jpg") },
  { title: "ON THE SPOT — ZZZ", id: "0Fz6g9WdRjs", duration: "1:00", thumb: asset("youtube-zzz.jpg") },
  { title: "ON THE SPOT — Yayo", id: "Dz77YzqPU5k", duration: "1:45", thumb: asset("youtube-yayo.jpg") },
  { title: "STJERNER I BOKSEN — EP 1", id: "r5BuyJc2jDM", duration: "8:06", thumb: asset("youtube-stjerner.jpg") },
];

export const reviews = [
  { name: "Pelle Krusbæk", text: "Varmeste producer i Danmark. Gratis øl." },
  { name: "BERG", text: "Kæmpe nice oplevelse, sødeste fyr i verden. 10/10." },
  { name: "Willow", text: "Meget seriøst og produktivt. Talentfuld producer der ved hvad han laver." },
  { name: "It's olive333351", text: "Mega fedt studie, Patrick er super hjælpsom — godt med drikkevarer og snacks." },
  { name: "Birkehuset", text: "Super godt studie, man mangler ikke noget når man kommer ind." },
];

export const releaseTitles = [
  "Kamæleoner", "Holdin' On", "ETABLERET", "Mama", "Magisk", "Marseille",
  "UnderVand", "Formidable", "Tr3k vejret", "MATBLÅ", "STANGBACAARDI",
];

export const gallery = [
  asset("gallery-1.jpg"),
  asset("gallery-2.jpg"),
  asset("gallery-3.jpg"),
  asset("gallery-4.jpg"),
  asset("gallery-5.jpg"),
];

export const topics = ["Booking", "Mix / master", "Custom beat", "Andet"];
