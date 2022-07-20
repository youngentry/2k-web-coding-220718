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

  ////////////////////////////////////////////////////

  // $("h1").on("click", function () {
  //   console.log(num, "얘는22222222 num");
  // });

  // $(".title.quarryTitle[aria-hidden='false']").on("click", function () {
  //   $(".infoWrap").addClass("on");
  // });

  //////////////////////////////////////////////////

  // var TUL = $(".titleSlider img");
  // console.log(TUL);
  // TUL.each((idx, el) => {
  //   console.log(idx, el);
  // });
  // console.log($(".description .quarryInfo"));
  // $(".titleSlider").on("afterChange", function (e, s, c, n) {
  //   console.log($(".mainBg")[c]);
  //   console.log($(".title")[c + 2]);
  //   console.log($(".info")[c]);

  // var title = $(".titleSlider .title")[c + 2];
  // var description = $(".description .info")[c];

  // title.on("click", function () {
  //   $(".infoWrap").addClass("on");
  //   description.addClass("on");
  // });
  // $(".description .closeBtn").on("click", function () {
  //   $(".infoWrap").removeClass("on");
  //   description.removeClass("on");
  // });
  var num = 0;

  $(".mainSlider").on("afterChange", function (e, s, c) {
    num = c;
  });

  $(".infoWrap").on("click", function () {
    $(".infoWrap").removeClass("on");
    $(".description .info").removeClass("on");
  });

  $(".description .closeBtn").on("click", function () {
    $(".infoWrap").removeClass("on");
    $(".description .info").removeClass("on");
  });

  $(".quarryCover").on("click", function () {
    $(this).addClass("on");
  });
  $(".tinyCover").on("click", function () {
    $(this).addClass("on");
  });
  $(".midnightCover").on("click", function () {
    $(this).addClass("on");
  });
  $(".wweCover").on("click", function () {
    $(this).addClass("on");
  });

  $(".title img").on("click", function () {
    $(".infoWrap").addClass("on");
    $(".info").eq(num).addClass("on");
    console.log($(".titleSlider figure").eq(num));
  });
});
