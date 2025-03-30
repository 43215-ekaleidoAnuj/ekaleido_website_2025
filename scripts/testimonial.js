 // Register ScrollTrigger plugin
 gsap.registerPlugin(ScrollTrigger);

 document.addEventListener('DOMContentLoaded', function() {
   // Set initial positions
   gsap.set("#left-col", { y: -550 });
   gsap.set("#middle-col", { y: 550 });
   gsap.set("#right-col", { y: -550 });

   // Create the parallax animation
   gsap.to("#left-col", {
     y: 550,
     ease: "none",
     scrollTrigger: {
       trigger: ".testimonials",
       start: "top bottom",
       end: "bottom top",
       scrub: 1
     }
   });

   gsap.to("#middle-col", {
     y: -550,
     ease: "none",
     scrollTrigger: {
       trigger: ".testimonials",
       start: "top bottom",
       end: "bottom top",
       scrub: 1
     }
   });

   gsap.to("#right-col", {
     y: 550,
     ease: "none",
     scrollTrigger: {
       trigger: ".testimonials",
       start: "top bottom",
       end: "bottom top",
       scrub: 1
     }
   });

   // Add subtle card animations
   const cards = gsap.utils.toArray(".testimonials-card");
   cards.forEach(card => {
     gsap.from(card, {
       y: 100,
       opacity: 0,
       duration: 0.8,
       scrollTrigger: {
         trigger: card,
         start: "top 80%",
         toggleActions: "play none none none"
       }
     });
   });

   // Orange shade animations
   gsap.to(".orange-top-right", {
     x: 50,
     y: 50,
     scrollTrigger: {
       trigger: ".testimonials",
       start: "top bottom",
       end: "bottom top",
       scrub: 1
     }
   });

   gsap.to(".orange-bottom-left", {
     x: -50,
     y: -50,
     scrollTrigger: {
       trigger: ".testimonials",
       start: "top bottom",
       end: "bottom top",
       scrub: 1
     }
   });
 });






 document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("insights-section");
  const bars = document.querySelectorAll(".bar");
  
  function handleScroll() {
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    
    if (sectionPos < screenPos) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      bars.forEach(bar => bar.style.transform = "scaleY(1)");
      window.removeEventListener("scroll", handleScroll);
    }
  }
  
  window.addEventListener("scroll", handleScroll);
});



document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("graph-section");
  const line = document.getElementById("graph-line");
  const points = [document.getElementById("point1"), document.getElementById("point2"), document.getElementById("point3")];
  const dashedLine = document.getElementById("dashed-line");
  
  function handleScroll() {
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    
    if (sectionPos < screenPos) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      line.style.strokeDashoffset = "0";
      points.forEach(point => point.style.opacity = "1");
      dashedLine.style.opacity = "1";
      window.removeEventListener("scroll", handleScroll);
    }
  }
  
  window.addEventListener("scroll", handleScroll);
});