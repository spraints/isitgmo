$(function() {
  $('body').mousemove(function() {
    $('#teaser').fadeIn();
  });
  $(window).resize(sizeEverything);
  sizeEverything();
});

function sizeEverything() {
  var height = window.innerHeight;
  if(height < 380)
    height = 380;
  $('header').height(height);
}
