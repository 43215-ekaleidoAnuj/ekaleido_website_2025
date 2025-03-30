document.addEventListener('DOMContentLoaded', function() {
    const imagesUp = document.querySelectorAll('.img-up');
    const imagesDown = document.querySelectorAll('.img-down');
    
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      const section = document.querySelector('.engagment_section');
      const sectionPosition = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      // Only animate when section is in view
      if (scrollPosition > sectionPosition - window.innerHeight && 
          scrollPosition < sectionPosition + sectionHeight) {
        
        // Calculate scroll progress (0 to 1)
        const scrollProgress = (scrollPosition - sectionPosition + window.innerHeight) / 
                             (window.innerHeight + sectionHeight);
        
        // Move images in opposite vertical directions
        const movement = scrollProgress * 250; // Adjust this value for more/less movement
        
        imagesUp.forEach(img => {
          img.style.transform = `translateY(${-movement}px)`;
        });
        
        imagesDown.forEach(img => {
          img.style.transform = `translateY(${movement}px)`;
        });
      }
    });
  });
  