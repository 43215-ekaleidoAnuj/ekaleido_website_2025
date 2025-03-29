$(document).ready(function(){
   $('.carouselDriving').slick({
      lazyLoad: 'ondemand',
     slidesToShow: 5,  // Show 5 images at a time
     slidesToScroll: 5, // Move 5 images at a time
     dots: true,
     centerMode: false,
   infinite: true, // Infinite looping
     arrows: true // Show navigation arrows
   });
 });
 
 // Slick version 1.5.8