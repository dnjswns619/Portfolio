$(function(){
  //header gnb
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
    $('body').toggleClass('active')
  })
  $('.gnb a, section').click(function(){
    $('.trigger').removeClass('active')
    $('.gnb').removeClass('active')
    $('body').removeClass('active')
  })
  //header scroll
  $(window).scroll(function(){
    if($(window).scrollTop() > 10){
      $('header').addClass('active')
    } else {
      $('header').removeClass('active')
    }
  })
  //slick slider 
  $('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // scroll animation
  wow = new WOW(
    {
      boxClass:     'wow',      
      offset:       150,          
      mobile:       true,       
    }
  );
  wow.init(); 
  //typeit
  new TypeIt("#typeit", { 
    lifeLike: false, 
    speed: 0
  })
    .pause(3400)
    .type("ㄱ")
    .pause(123)
    .delete(1)
    .type("구")
    .pause(102)
    .delete(1)
    .type("궇")
    .pause(130)
    .delete(1)
    .type("구")
    .pause(1)
    .type("혀")
    .pause(84)
    .delete(1)
    .type("현")
    .pause(124)
    .delete(1)
    .type("혆")
    .pause(60)
    .delete(1)
    .type("현")
    .pause(1)
    .type("하")
    .pause(148)
    .delete(1)
    .type("학")
    .pause(80)
    .delete(1)
    .type("하")
    .pause(1)
    .type("고")
    .pause(75)
    .type(" ")
    .pause(306)
    .type("ㄱ")
    .pause(99)
    .delete(1)
    .type("기")
    .pause(149)
    .delete(1)
    .type("길")
    .pause(135)
    .delete(1)
    .type("기")
    .pause(1)
    .type("로")
    .pause(89)
    .delete(1)
    .type("록")
    .pause(194)
    .type("ㅎ")
    .pause(65)
    .delete(1)
    .type("하")
    .pause(127)
    .delete(1)
    .type("함")
    .pause(109)
    .delete(1)
    .type("하")
    .pause(1)
    .type("며")
    .pause(118)
    .type(" ")
    .pause(349)
    .type("ㅅ")
    .pause(113)
    .delete(1)
    .type("서")
    .pause(107)
    .delete(1)
    .type("성")
    .pause(135)
    .type("ㅈ")
    .pause(86)
    .delete(1)
    .type("자")
    .pause(74)
    .delete(1)
    .type("장")
    .pause(206)
    .type("ㅎ")
    .pause(70)
    .delete(1)
    .type("하")
    .pause(117)
    .delete(1)
    .type("한")
    .pause(60)
    .delete(1)
    .type("하")
    .pause(2)
    .type("느")
    .pause(72)
    .delete(1)
    .type("는")
    .go();
})