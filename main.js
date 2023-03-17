$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".mbl-link").addClass(".mbl-list");
    $(".mbl-link").toggle(".mbl-list");
  });

  $(".carousel-inner").slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
