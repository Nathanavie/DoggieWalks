$(document).ready(function() {
  $('.dropmenu').click(function(ev) {
    ev.preventDefault();
    $('.dropmenu').toggleClass("active");
    $('#dropdown').toggleClass("hidden");
    $('#dropdown').toggleClass("shownav");
  });

  $(".service").click(function(ev) {
    ev.preventDefault();
    var sh = $(this).attr("id");
    $(sh).toggleClass("hidden");
    $(sh).toggleClass("showh-cont");
  });

  $(".gal-img").click(function(ev) {
    ev.preventDefault();
    var img = $(this).css("background-image").replace(/^url\(['"](.+)['"]\)/, '$1');
    window.open(img);
  });

  $('#open').click(function(ev) {
    ev.preventDefault();
    $(".sidenav").css("width", "100%");
  });

  $('#close').click(function(ev) {
    ev.preventDefault();
    $(".sidenav").css("width", "0%");
  });
});
