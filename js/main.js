const pages = document.querySelectorAll(".main_pages");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.5,
  }
);

pages.forEach((page) => {
  observer.observe(page);
});
