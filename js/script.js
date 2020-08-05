$(document).ready(function () {
    $('.header__button').click(function (event) {
        $('.header__button, .header__menu,button').toggleClass('active');
        $('body').toggleClass('lock');
    });
  });

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });