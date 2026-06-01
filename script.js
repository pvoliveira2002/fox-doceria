const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.08,
    rootMargin: "0px 0px 90px 0px",
  }
);

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 28, 110)}ms`;
  observer.observe(element);
});

const productTrack = document.querySelector("[data-product-track]");
const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");

if (productTrack && prevButton && nextButton) {
  const scrollProducts = (direction) => {
    const card = productTrack.querySelector(".product-card");
    const gap = Number.parseFloat(getComputedStyle(productTrack).columnGap) || 0;
    const distance = card ? card.getBoundingClientRect().width + gap : 320;

    productTrack.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  prevButton.addEventListener("click", () => scrollProducts(-1));
  nextButton.addEventListener("click", () => scrollProducts(1));

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  productTrack.addEventListener("pointerdown", (event) => {
    isDragging = true;
    startX = event.clientX;
    startScrollLeft = productTrack.scrollLeft;
    productTrack.classList.add("is-dragging");
    productTrack.setPointerCapture(event.pointerId);
  });

  productTrack.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    productTrack.scrollLeft = startScrollLeft - (event.clientX - startX);
  });

  const stopDragging = () => {
    isDragging = false;
    productTrack.classList.remove("is-dragging");
  };

  productTrack.addEventListener("pointerup", stopDragging);
  productTrack.addEventListener("pointercancel", stopDragging);
  productTrack.addEventListener("pointerleave", stopDragging);
}
