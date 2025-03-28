document.addEventListener("DOMContentLoaded", () => {
  const testimonialsSection = document.querySelector(".testimonials");
  const leftCol = document.querySelector("#left-col");
  const middleCol = document.querySelector("#middle-col");
  const rightCol = document.querySelector("#right-col");

  // Optimize for smooth animations
  [leftCol, middleCol, rightCol].forEach(col => {
    col.style.willChange = "transform";
  });

  let isInViewport = false;
  let animationFrameId = null;
  let observer = null;

  // Calculate the scrollable range within the testimonials section
  const getScrollProgress = () => {
    const sectionRect = testimonialsSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    
    // How far the section top is from the viewport bottom (entering)
    // and how far the section bottom is from the viewport top (exiting)
    const scrollStart = viewportHeight * 0.2; // Start when 20% visible
    const scrollEnd = viewportHeight * 0.8;   // End when 80% visible
    
    // Calculate progress (0 to 1) based on scroll position within the section
    let progress = (sectionRect.top - scrollStart) / (scrollEnd - scrollStart);
    progress = Math.max(0, Math.min(2, 1 - progress)); // Clamp between 0 and 1
    
    return progress;
  };

  const animateTestimonials = () => {
    if (!isInViewport) return;

    const progress = getScrollProgress();
    const maxMovement = 100; // Adjust this to control how far columns move (in pixels)
    console.log(progress, maxMovement)
    leftCol.style.transform = `translateY(${progress * maxMovement}px)`;
    middleCol.style.transform = `translateY(-${progress * maxMovement}px)`;
    rightCol.style.transform = `translateY(${progress * maxMovement}px)`;
  };

  const debouncedAnimate = () => {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(animateTestimonials);
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isInViewport = true;
        debouncedAnimate();
        window.addEventListener("scroll", debouncedAnimate);
      } else {
        if (isInViewport) {
          isInViewport = false;
          window.removeEventListener("scroll", debouncedAnimate);
          
          // Reset positions when leaving viewport
          [leftCol, middleCol, rightCol].forEach(col => {
            col.style.transform = "translateY(0)";
          });
        }
      }
    });
  };

  observer = new IntersectionObserver(handleIntersection, { 
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px" // Slight bottom offset for early trigger
  });

  observer.observe(testimonialsSection);

  // Cleanup (for SPAs)
  const cleanup = () => {
    if (observer) observer.disconnect();
    window.removeEventListener("scroll", debouncedAnimate);
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
  };

  // Uncomment if needed in an SPA:
  // window.addEventListener("beforeunload", cleanup);
});