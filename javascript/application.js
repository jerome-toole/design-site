
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
    appendDots: $("#" + carouselId).closest('li')
  });
  $('.slick-slide').click(function() {
    $("#" + carouselId).slick('slickNext');
    console.log('this');
  });
});