AOS.init();

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

//scrolls to #element when you click a tag
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);

    //scroll and show hash
    $('html, body').animate({
      scrollTop: $target.offset(),
    }, 1000, 'swing', function () {
      window.location.hash = target;
    });
  });
});

function toggle(id) {
  var e = document.getElementById(id);
  if (e.style.display == null || e.style.display == 'none') {
    e.style.display = 'block';
  } else {
    e.style.display = 'none';
  }
}

// function toggle(target) {
//   document.getElementById(target).style.display = 'block';
//   // document.getElementById('toggleDiv').style.display = //'none';
// }
// function hide(target) {
//   document.getElementById(target).style.display = 'none';
//   document.getElementById('toggleDiv').style.display = 'block';
// }

$(document).ready(function () {
    $('#toggleDiv a').click(function () {
        $('#toggleMeetOwner').fadeToggle(200);
        $(this).toggleClass('show-div').toggleClass('hide-div');
      });
  });

$('#toggleMeetOwner').on('click', function () {
    $('#toggleMeetOwner').fadeToggle(200);
    $('#toggleDiv').toggleClass('show-div').toggleClass('hide-div');
    open = false;
  });

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }

  x[myIndex - 1].style.display = 'block';

  setTimeout(carousel, 2000); // Change image every 2 seconds
}
