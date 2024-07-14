"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    var clonedElement = element.cloneNode(true);
    swiperWrap.appendChild(clonedElement);
  }
  var swiperWrap = document.querySelector("#js-swiper-wrap");
  var swiperSlides = swiperWrap.querySelectorAll(".swiper-slide");
  var _iterator = _createForOfIteratorHelper(swiperSlides),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var swiperSlide = _step.value;
      cloneAndAppend(swiperSlide, swiperWrap);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var roomSwiper = new Swiper(".p-room-swiper", {
    loop: true,
    speed: 500,
    slidesPerView: "1.28",
    spaceBetween: 24,
    centeredSlides: true,
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 80
      }
    }
  });

  // use swiper
  $(document).ready(function () {
    var useSwiper = new Swiper(".p-use-swiper", {
      loop: true,
      speed: 500,
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 16
        },
        1080: {
          slidesPerView: 4,
          spaceBetween: 16
        }
      },
      pagination: {
        el: ".p-use-swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".p-use-swiper-button-next",
        prevEl: ".p-use-swiper-button-prev"
      }
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
  var voiceSwiper = new Swiper(".p-voice-swiper", {
    loop: true,
    speed: 500,
    slidesPerView: "1",
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 16
      }
    },
    pagination: {
      el: ".p-voice-swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".p-voice-swiper-button-next",
      prevEl: ".p-voice-swiper-button-prev"
    }
  });

  // price scrol
  document.addEventListener("DOMContentLoaded", function () {
    var tableContainer = document.querySelector(".js-table-scroll-hint");
    var scrollHint = tableContainer.querySelector(".p-scroll-hint");
    tableContainer.addEventListener("click", function () {
      scrollHint.classList.remove("is-active");
    });
  });
  new ScrollHint(".js-table-scroll-hint", {
    scrollHintIconAppendClass: "scroll-hint-icon-white",
    i18n: {
      scrollable: "スクロールできます"
    }
  });
});