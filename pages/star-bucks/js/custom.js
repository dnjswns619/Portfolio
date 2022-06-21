window.onload = function(){
    let gnb = document.querySelector('.store');
    let submenu = document.querySelector('.store_submenu');

    gnb.addEventListener("mouseover", function(){
        submenu.classList.add('active');
    });
    submenu.addEventListener("mouseover", function(){
      submenu.classList.add("active")
    })
    gnb.addEventListener('mouseout',function(){
        submenu.classList.remove('active');
    })
    submenu.addEventListener('mouseout',function(){
      submenu.classList.remove('active');
    })

    let trigger = document.querySelector('.trigger')
    let nav = document.querySelector('.nav')
    let body = document.querySelector('body')
    trigger.addEventListener('click', function(){
      nav.classList.toggle("active")
      body.classList.toggle("active")
    })

    // slick-slider
    $('.slick_slider').slick({
        dots: true,
        slidesToShow: 3,
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
}

