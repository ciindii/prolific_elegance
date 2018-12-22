$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 30) {
    $('nav').slideUp('slow');
  } else {
    $('nav').slideDown('fast');
  }
});

$(document).ready(function () {
    $('.toggle-button a').click(function () {
        $('.overlay-bg').fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
      });
  });

$('.overlay-bg').on('click', function () {
    $('.overlay-bg').fadeToggle(200);
    $('.toggle-button a').toggleClass('btn-open').toggleClass('btn-close');
    open = false;
  });

$('.side-menu').on('click', function () {
    $('.side-menu').removeClass('selected');
    $(this).addClass('selected');
  });
