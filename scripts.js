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
