$(function () {
  $(".slider").slick({
    arrows: false,
    fade: true,
    swipe: false,
  });
  $(".titleSlider").slick({
    asNavFor: ".slider",
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "480px",
    focusOnSelect: true,
    swipeToSlide: true,
    cssEase: "ease-in-out",
  });

  $(".title.slick-current").on("click", function () {
    $(".slider .info").toggleClass("on");
  });
});
