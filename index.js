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
   $('.carouselDrivingtwo').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Ensures middle slide can be styled uniquely
    centerPadding: "0", // Remove extra spacing
 });
 $(".carouselDrivingtwo").on("afterChange", function (event, slick, currentSlide) {
  let centerSlide = Math.floor(slick.$slides.length / 2); // Get the center slide index
  let selectedImageSrc = $(".carouselDrivingtwo .slick-center img").attr("src");

  if (selectedImageSrc) {
    $("#selected-image").attr("src", selectedImageSrc);
  }
});

// Initial update on page load
let initialImageSrc = $(".carouselDrivingtwo .slick-center img").attr("src");
if (initialImageSrc) {
  $("#selected-image").attr("src", initialImageSrc);
}
 });
 
 
 // Slick version 1.5.8
 