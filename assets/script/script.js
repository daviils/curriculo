tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: "#f3efe7",
        mute: "#9ca3af",
        night: "#0d1117",
        ember: "#ff8a5b",
        fog: "#161b22"
      },
      boxShadow: {
        panel: "0 24px 70px rgba(0, 0, 0, 0.35)"
      },
      fontFamily: {
        sans: ["Segoe UI", "Arial", "sans-serif"]
      }
    }
  }
};

if (window.gsap) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion) {
    const hasScrollTrigger = window.ScrollTrigger;

    if (hasScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap.from("[data-hero-item]", {
      autoAlpha: 0,
      y: 28,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12
    });

    if (hasScrollTrigger) {
      gsap.to("[data-page-header]", {
        backgroundColor: "rgba(9, 12, 16, 0.72)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 18px 50px rgba(0, 0, 0, 0.25)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        duration: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: document.body,
          start: "top -24",
          toggleActions: "play none none reverse"
        }
      });
    }

    gsap.utils.toArray("[data-reveal]").forEach(function (element) {
      gsap.from(element, {
        autoAlpha: 0,
        y: 36,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: hasScrollTrigger ? {
          trigger: element,
          start: "top 82%",
          once: true
        } : undefined
      });
    });

    if (document.querySelector("[data-project-card]") && document.querySelector("#projetos")) {
      gsap.from("[data-project-card]", {
        autoAlpha: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: hasScrollTrigger ? {
          trigger: "#projetos",
          start: "top 75%",
          once: true
        } : undefined
      });
    }

    if (document.querySelector("[data-skill-tag]") && document.querySelector("#habilidades")) {
      gsap.from("[data-skill-tag]", {
        autoAlpha: 0,
        scale: 0.92,
        duration: 0.45,
        ease: "back.out(1.4)",
        stagger: 0.05,
        scrollTrigger: hasScrollTrigger ? {
          trigger: "#habilidades",
          start: "top 78%",
          once: true
        } : undefined
      });
    }

    if (document.querySelector("[data-float]")) {
      gsap.to("[data-float]", {
        y: 26,
        x: 12,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 1.2
      });
    }
  }
}
