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
    centerPadding: "25%",
    focusOnSelect: true,
    swipeToSlide: true,
    cssEase: "ease-in-out",
  });

  $(".title.slick-current.quarryTitle").on("click", function () {
    $(".quarryWrap").addClass("on");
  });
  $(".description .closeBtn").on("click", function () {
    $(".quarryWrap").removeClass("on");
  });
});
