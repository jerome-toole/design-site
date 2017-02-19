
// $('.post-images').slick({
//   dots: true,
//   infinite: true,
//   appendDots: $(this),
//   cssEase: 'linear'
// });

$('.post-images').each(function (idx, item) {
  var carouselId = "carousel" + idx;
  this.id = carouselId;
  $(this).slick({
    dots: true,
    infinite: true,
    cssEase: 'linear',
    appendDots: $("#" + carouselId).closest('.browser').next('.dots-container')
  });
  $(this).click(function() {
    $('#'+this.id).slick('slickNext');
  });
});