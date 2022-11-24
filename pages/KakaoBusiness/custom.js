$(function(){
  // slick slider - welcom
  $('.slideshow').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
  //faq-accordian
  $('.faq-desc').eq(0).show()
  $('.faq-title').click(function(){
    $(this).next().stop().slideDown()
    $(this).parent().siblings().children('.faq-desc').stop().slideUp()
    $(this).parent().addClass('active')
    $(this).parent().siblings().removeClass('active')
  })
  //wow scroll reveal animation
  wow = new WOW(
    {
    boxClass:     'wow',      // default
    offset:       150,          // default
    mobile:       true       // default
  }
  )
  wow.init();
  //header
  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('header, .btn-top').addClass('active')
    } else {
      $('header, .btn-top').removeClass('active')
    }
  })
  //header trigger 
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a, section').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })
})