"use client";

import { useEffect } from "react";

export default function FoxInteractions() {
  useEffect(() => {
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

    const menuButton = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-nav]");

    const toggleMenu = () => {
      nav?.classList.toggle("is-open");
    };

    const closeMenu = () => {
      nav?.classList.remove("is-open");
    };

    menuButton?.addEventListener("click", toggleMenu);
    nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

    const counters = document.querySelectorAll("[data-count-to]");
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const counter = entry.target;
          const target = Number(counter.dataset.countTo) || 0;
          const duration = 1200;
          const startedAt = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startedAt) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.round(target * eased).toString();

            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              counter.textContent = target.toString();
            }
          };

          requestAnimationFrame(tick);
          counterObserver.unobserve(counter);
        });
      },
      { threshold: 0.35 }
    );

    counters.forEach((counter) => {
      counter.textContent = counter.dataset.countTo || "0";
      counterObserver.observe(counter);
    });

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
      menuButton?.removeEventListener("click", toggleMenu);
      nav?.querySelectorAll("a").forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, []);

  return null;
}
