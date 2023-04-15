// navigational sticky header starts here
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.main_container').addClass('redColored');
      $('.logo').addClass('scroll_logo');
      $('.logo_sub_text').addClass('scroll_logo_sub_text');
  } else {
      $('.main_container').removeClass('redColored');
      $('.logo').removeClass('scroll_logo');
      $('.logo_sub_text').removeClass('scroll_logo_sub_text');
  }
  });
// navigational sticky header ends here


// banner starts here
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 3000,
        // pause: "false"
    });
});
// banner ends here

  $('.association').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows : false,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: true,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
// association ends here