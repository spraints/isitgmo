$(function() {
  $(window).resize(sizeEverything);
  sizeEverything();
});

function sizeEverything() {
  var height = window.innerHeight;
  if(height < 380)
    height = 380;
  margin = (height - 160) / 2;
  $('.answer').css('margin-top', margin).css('margin-bottom', margin);
}
