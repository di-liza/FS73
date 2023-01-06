$('.background-slides').slick({
    dots: false,
    arrows: true,
  infinite: true,
  speed: 500,
  fade: true,
    cssEase: 'linear',
    autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $('.prev'),
nextArrow: $('.next'),
  // nextArrow: document.querySelector('#my-arrow-next'),
  // prevArrow: document.querySelector('#my-arrow-prev')
});

$('div').on('click', function() {
  $('.slick-btn').slick('slickNext');
  $('.slick-btn').slick('slickPrev');
});