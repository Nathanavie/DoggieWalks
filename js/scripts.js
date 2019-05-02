$(document).ready(function() {
  $('.dropmenu').click(function(ev) {
    ev.preventDefault();
    $('.dropmenu').toggleClass("active");
    $('#dropdown').toggleClass("hidden");
    $('#dropdown').toggleClass("shownav");
  });

  $(".service").click(function(ev){
  var sh = $(this).attr("id");
  $(sh).toggleClass("hidden");
  $(sh).toggleClass("showh-cont");
});

});
