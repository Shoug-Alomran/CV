document.addEventListener("DOMContentLoaded", () => {
  const links = Array.from(document.querySelectorAll(".section-nav a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const active = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!active) return;

      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${active.target.id}`);
      });
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.3, 0.5] },
  );

  sections.forEach((section) => observer.observe(section));
});
