$(function () {
  // .header;;

  $(".header .burger").on("click", function (e) {
    e.preventDefault();
    $(".menu").toggleClass("on");
  });

  $(".header .search").on("click", function (e) {
    e.preventDefault();
    $(".header form").toggleClass("on");
    $(".header input").toggleClass("on");
  });

  $(".bottomSlide").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 8,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 4000,
          pauseOnFocus: false,
          pauseOnHover: false,
          slidesToShow: 3,
          cssEase: "linear",
        },
      },
    ],
  });

  // .header;;

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
    focusOnSelect: true,
  });
  // .promotion;;

  // .category;;
  $(".category .tab div").on("click", function () {
    var idx = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".genre").eq(idx).addClass("on").siblings().removeClass("on");
  });
  // .category;;

  // 반응형
  var screenWidth = $(window).width();
  var scrWLow = screenWidth < 769;

  function menuSlide() {
    console.log(scrWLow == true);
    $(".menu ul li").on("click", function () {
      $(this).children().toggleClass("on").parent().siblings().children().removeClass("on");
      $(this).parent().siblings().children().children().removeClass("on");
    });
    $(window).on("resize", function () {
      var screenWidth = $(window).width();
      var scrWLow = screenWidth < 769;
      if (scrWLow) {
        console.log(scrWLow == true);
        $(".menu ul li").on("click", function () {
          $(this).children().toggleClass("on").parent().siblings().children().removeClass("on");
          $(this).parent().siblings().children().children().removeClass("on");
        });
      }
    });
  }
  menuSlide();

  function promoSlideResponsive() {
    var screenWidth = $(window).width();
    var scrWLow = screenWidth < 769;
    // promo 슬릭을 centerMode로 전환합니다.
    if (scrWLow) {
      $(".promotionSlider").slick("unslick");
      $(".promotionSlider").slick({
        arrows: true,
        centerMode: true,
        centerPadding: "10%",
        slidesToShow: 1,
        swipeToSlide: true,
      });
    } else {
      $(".promotionSlider").slick("unslick");
      $(".promotionSlider").slick({
        arrows: true,
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true,
      });
    }
  }
  promoSlideResponsive();

  var header = $(".header");
  var category = $(".category");
  var footer = $(".footer");
  var categoryTab = $(".category .tab");
  function categoryTopEvent() {
    // header를 감추면 category tab을 나타나게하고, category tab을 감추면 header를 나타나게 합니다.
    var screenWidth = $(window).width();
    if (scrWLow && header.offset().top > category.offset().top) {
      header.addClass("on");
    } else if (scrWLow && header.offset().top < category.offset().top) {
      header.removeClass("on");
    }
    if (scrWLow && header.offset().top > footer.offset().top - 600) {
      categoryTab.addClass("on");
    } else if (scrWLow && header.offset().top < footer.offset().top - 600) {
      categoryTab.removeClass("on");
    }
  }
  categoryTopEvent();
  $(window).on("scroll", function () {
    categoryTopEvent();
    if (scrWLow && header.offset().top > footer.offset().top - 600) {
      header.removeClass("on");
    }
  });
  categoryTopEvent();

  $(window).on("resize", function () {
    if (screenWidth >= 769) {
      console.log(screenWidth + ">");
    }
    if (scrWLow) {
      promoSlideResponsive();
      console.log($(window).scrollTop());
      console.log(header.offset().top, "1");
      categoryTopEvent();
    }
  });

  // 반응형
});
