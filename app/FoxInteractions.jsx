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

    return () => {
      observer.disconnect();
      menuButton?.removeEventListener("click", toggleMenu);
      nav?.querySelectorAll("a").forEach((link) => link.removeEventListener("click", closeMenu));
    };
  }, []);

  return null;
}
