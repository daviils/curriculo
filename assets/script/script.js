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
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("[data-hero-item]", {
      autoAlpha: 0,
      y: 28,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.12
    });

    gsap.utils.toArray("[data-reveal]").forEach(function (element) {
      gsap.from(element, {
        autoAlpha: 0,
        y: 36,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 82%",
          once: true
        }
      });
    });

    gsap.from("[data-project-card]", {
      autoAlpha: 0,
      y: 20,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: "#projetos",
        start: "top 75%",
        once: true
      }
    });

    const horizontalSection = document.querySelector("[data-horizontal-section]");
    const horizontalTrack = horizontalSection && horizontalSection.querySelector("[data-horizontal-track]");

    if (horizontalSection && horizontalTrack) {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {
          const distance = Math.max(0, horizontalTrack.scrollWidth - horizontalSection.clientWidth);

          gsap.set(horizontalTrack, { x: 0 });

          if (!distance) {
            return;
          }

          gsap.to(horizontalTrack, {
            x: -distance,
            ease: "none",
            scrollTrigger: {
              trigger: horizontalSection,
              start: "top top",
              end: function () {
                return "+=" + distance;
              },
              scrub: true,
              pin: true,
              anticipatePin: 1
            }
          });
        }
      });
    }

    gsap.from("[data-skill-tag]", {
      autoAlpha: 0,
      scale: 0.92,
      duration: 0.45,
      ease: "back.out(1.4)",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "#habilidades",
        start: "top 78%",
        once: true
      }
    });

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
