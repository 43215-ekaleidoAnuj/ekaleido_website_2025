$(document).ready(function () {
  $(".carouselDriving").slick({
    lazyLoad: "ondemand",
    slidesToShow: 5, // Show 5 images at a time
    slidesToScroll: 5, // Move 5 images at a time
    dots: false,
    centerPadding: "30px",
    focusOnSelect: true,
    centerMode: true,
    infinite: true, // Infinite looping
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  });
  $(".carouselDrivingtwo").slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 3,
    // Ensures middle slide can be styled uniquely
    centerPadding: "0", // Remove extra spacing
  });
  $(".carouselDrivingtwo").on(
    "afterChange",
    function (event, slick, currentSlide) {
      let centerSlide = Math.floor(slick.$slides.length / 2); // Get the center slide index
      let selectedImageSrc = $(".carouselDrivingtwo .slick-center img").attr(
        "src"
      );

      if (selectedImageSrc) {
        $("#selected-image").attr("src", selectedImageSrc);
      }
    }
  );

  // Initial update on page load
  let initialImageSrc = $(".carouselDrivingtwo .slick-center img").attr("src");
  if (initialImageSrc) {
    $("#selected-image").attr("src", initialImageSrc);
  }

  $(".services-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "40px",
    slidesToScroll: 2,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slick-prev-custom").click(function () {
    $(".services-slider").slick("slickPrev");
  });
  $(".slick-next-custom").click(function () {
    $(".services-slider").slick("slickNext");
  });
  // case-study-slider
  $(".case-study-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: "0",
    slidesToScroll: 2,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".case-slick-prev-custom").click(function () {
    $(".case-study-slider").slick("slickPrev");
  });
  $(".case-slick-next-custom").click(function () {
    $(".case-study-slider").slick("slickNext");
  });
});

// Slick version 1.5.8
