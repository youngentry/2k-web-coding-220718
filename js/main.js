$(function () {
  // .mainVisual;;
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
    swipe: false,
    cssEase: "ease-in-out",
  });

  var num = 0;
  $(".slider").on("afterChange", function (e, s, c) {
    num = c;
  });
  function descriptionControl(className) {
    $(className).on("click", function () {
      $(".infoWrap").removeClass("on");
      $(".description .info").removeClass("on");
      if (!$(".infoWrap").hasClass("on")) {
        for (i = 0; i < 4; i++) {
          $("iframe")[i].contentWindow.postMessage('{"event":"command","func":"' + "stopVideo" + '","args":""}', "*");
        }
      }
    });
  }
  descriptionControl(".infoWrap");
  descriptionControl(".description .closeBtn");
  $(".title img").on("click", function () {
    $(".infoWrap").addClass("on");
    $(".info").eq(num).addClass("on");
  });

  $(".mainArrow .prev").on("click", function () {
    $(".titleSlider").slick("slickPrev");
  });
  $(".mainArrow .next").on("click", function () {
    $(".titleSlider").slick("slickNext");
  });

  $(".infoSlideBtn .prev").on("click", function () {
    $(".titleSlider").slick("slickPrev");
    $(".description")
      .children()
      .eq((num - 1) % 4)
      .addClass("on")
      .siblings()
      .removeClass("on");
  });
  $(".infoSlideBtn .next").on("click", function () {
    $(".titleSlider").slick("slickNext");
    $(".description")
      .children()
      .eq((num + 1) % 4)
      .addClass("on")
      .siblings()
      .removeClass("on");
  });
  // .mainVisual;;

  // .promotion;;
  $(".promotionSlider").slick({
    arrows: true,
    slidesToShow: 3,
    swipeToSlide: true,
  });
  // .promotion;;

  // .category;;
  $(".category .tab div").on("click", function () {
    var idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".genre").eq(idx).addClass("on").siblings().removeClass("on");
  });
  // .category;;
});
