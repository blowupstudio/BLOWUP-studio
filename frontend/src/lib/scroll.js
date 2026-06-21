export function scrollToHash(href, offset = -70) {
  if (window.lenis) window.lenis.scrollTo(href, { offset });
  else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}
