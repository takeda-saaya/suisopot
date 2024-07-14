jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  $(document).ready(function () {
    // ハンバーガーメニュー
    $("#js-hamburger").click(function () {
      $("body").toggleClass("is-open");
      if ($(this).attr("aria-expanded") === "false") {
        $(this).attr("aria-expanded", "true");
        $(".p-header-sp__wrap").attr("aria-hidden", "false");
      } else {
        $(this).attr("aria-expanded", "false");
        $(".p-header-sp__wrap").attr("aria-hidden", "true");
      }
    });
  });

  // ハンバーガーメニューアンカーリンク
  $(".p-sp-nav__item a").click(function () {
    $("body").removeClass("is-open");
    $("#js-hamburger").attr("aria-expanded", "false");
    $("#js-sp-nav").attr("aria-hidden", "true");
  });

  // アコーディオン
  $(function () {
    $(".p-qa-box:first-of-type .p-qa-box__wrap").css("display", "block");
    $(".p-qa-box:first-of-type").addClass("is-open");

    $(".js-accordion").on("click", function () {
      var parentBox = $(this).closest(".p-qa-box");
      var content = $(this).next(".p-qa-box__wrap");

      if (parentBox.hasClass("is-open")) {
        content.slideUp(300, function () {
          parentBox.removeClass("is-open");
        });
      } else {
        content.slideDown(300, function () {
          parentBox.addClass("is-open");
        });
      }
    });
  });

  // room swiper
  function cloneAndAppend(element, swiperWrap) {
    let clonedElement = element.cloneNode(true);
    swiperWrap.appendChild(clonedElement);
  }

  const swiperWrap = document.querySelector("#js-swiper-wrap");
  const swiperSlides = swiperWrap.querySelectorAll(".swiper-slide");

  for (let swiperSlide of swiperSlides) {
    cloneAndAppend(swiperSlide, swiperWrap);
  }

  const roomSwiper = new Swiper(".p-room-swiper", {
    loop: true,
    speed: 500,
    slidesPerView: "1.28",
    spaceBetween: 24,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
    },
  });

  // use swiper
  $(document).ready(function () {
    const useSwiper = new Swiper(".p-use-swiper", {
      loop: true,
      speed: 500,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1080: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
      pagination: {
        el: ".p-use-swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".p-use-swiper-button-next",
        prevEl: ".p-use-swiper-button-prev",
      },
    });
  });

  // voiceアコーディオン
  $(document).ready(function () {
    $(".js-accordion-voice").on("click", function () {
      var parentBox = $(this).closest(".p-voice-box");
      var content = parentBox.find(".p-voice-box__text");

      if (parentBox.hasClass("is-open")) {
        content.slideUp(300, function () {
          parentBox.removeClass("is-open");
        });
      } else {
        content.slideDown(300, function () {
          parentBox.addClass("is-open");
        });
      }
    });
  });

  // voice swiper
  const voiceSwiper = new Swiper(".p-voice-swiper", {
    loop: true,
    speed: 500,
    slidesPerView: "1",
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
    pagination: {
      el: ".p-voice-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".p-voice-swiper-button-next",
      prevEl: ".p-voice-swiper-button-prev",
    },
  });

  // price scrol
  document.addEventListener("DOMContentLoaded", function () {
    const tableContainer = document.querySelector(".js-table-scroll-hint");
    const scrollHint = tableContainer.querySelector(".p-scroll-hint");

    tableContainer.addEventListener("click", function () {
      scrollHint.classList.remove("is-active");
    });
  });

  new ScrollHint(".js-table-scroll-hint", {
    scrollHintIconAppendClass: "scroll-hint-icon-white",
    i18n: {
      scrollable: "スクロールできます",
    },
  });
});
