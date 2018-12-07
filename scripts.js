$(document).ready(function () {
  $('.icon').click(function () {
    $('.icon').toggleClass('active');
  });
});

function myFunction() {
  document.getElementById('toggle-nav').classList.toggle('show');
}

window.onclick = function (event) {
  if (!event.target.matches('.icon')) {

    var dropdowns = document.getElementsByClassName('drop-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
