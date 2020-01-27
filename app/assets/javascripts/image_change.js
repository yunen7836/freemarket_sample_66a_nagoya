$(function(){
  $(".contents__main-content--top-image--images__thumbnail").on("mouseenter", function() {
    var image = $(this).attr('src');
    $('.contents__main-content--top-image__thumbnail').attr('src', image);
  });
});