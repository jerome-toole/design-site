
// $('.post-images').slick({
//   dots: true,
//   infinite: true,
//   appendDots: $(this),
//   cssEase: 'linear'
// });


  //Defer image loading till rest of the page is loaded
function init() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i=0; i<imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-src')) {
    imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
    } 
  } 
}
window.onload = init;

$('.post-images').each(function (idx, item) {
  var carouselId = "carousel" + idx;
  this.id = carouselId;
  $(this).slick({
    dots: true,
    infinite: true,
    cssEase: 'ease',
    speed: 200,
    appendDots: $("#" + carouselId).closest('.browser').next('.dots-container')
  });
  $(this).click(function() {
    $('#'+this.id).slick('slickNext');
  });
});