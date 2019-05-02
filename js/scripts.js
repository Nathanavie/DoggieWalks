$(document).ready(function() {
  $('.dropmenu').click(function(ev) {
    ev.preventDefault();
    $('.dropmenu').toggleClass("active");
    $('#dropdown').toggleClass("hidden");
    $('#dropdown').toggleClass("shownav");
  });
});
