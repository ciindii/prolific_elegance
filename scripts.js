AOS.init();

//TOGGLE OVERLAY NAVIGATION
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

// END TOGGLE OVERLAY NAVIGATION

//animate elements
$(function () {
  $('#an-btn').click(function () {
    animate('#about', 'bounce');
    animate('#anymatewhatyouwant', 'bounce');
    return false;
  });

  //makes elements go away
  $('#an-btn2').click(function () {
    animate('#anymatewhatyouwant', 'slideOutUp');
    $('#animatewhatyouwant').css('visibility', 'hidden');
  }, 1000);

  return false;
});

//animated function
function animate(element, animation) {
  $(element).addClass('animated' + animation);
  var wait = setTimeout(function () {
      $(element).removeClass('animated' + animation);
    }, 1000);
}

function toggle(id) {
  var e = document.getElementById(id);
  if (e.style.display == null || e.style.display == 'none') {
    e.style.display = 'block';
  } else {
    e.style.display = 'none';
  }
}

//filter images in gallery
$(function () {
  var selectedClass = '';
  $('.filter').click(function () {
    selectedClass = $(this).attr('data-rel');
    $('#gallery').fadeTo(100, 0.1);
    $('#gallery div').not('.' + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function () {
      $('.' + selectedClass).fadeIn().addClass('animation');
      $('#gallery').fadeTo(300, 1);
    }, 300);
  });
});

//BACK TO TOP button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
