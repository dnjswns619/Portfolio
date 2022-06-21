window.onload = function(){
    let experience = document.querySelector(".experience")
    let expClose = document.querySelector(".exp_close")
    expClose.addEventListener('click',()=>{
        experience.classList.add('hidden');
    })
    let header = document.getElementById('header');
    header.addEventListener('mouseenter',function(){
        header.classList.add('headerhov');
    })
    header.addEventListener('mouseleave',function(){
        header.classList.toggle('headerhov');
    })
    // slide hover shadow
    let slide = document.querySelectorAll('.mini');
    for(let i=0; i<slide.length; i++){
        slide[i].addEventListener('mouseover',function(){
            slide[i].classList.add('shadow_img');
        })
        slide[i].addEventListener('mouseout',function(){
            slide[i].classList.toggle('shadow_img');
        })
    }
    // hover item
    let item1 = document.getElementById('item1');
    let item2 = document.getElementById('item2');
    let item3 = document.getElementById('item3');
    let itemcont = document.querySelectorAll('.item_cont');
    let hoverbg = document.querySelectorAll('.hover_txt');
    let bluebox = document.querySelectorAll('.blue_box');
    let conttxt = document.querySelectorAll('.cont_txt')
    item1.addEventListener('mouseenter',function(e){
        itemcont[0].classList.add('disappear');
        hoverbg[0].classList.add('appear_bg');
        bluebox[0].classList.add('box_row');
        conttxt[0].classList.add('txt_up');
    })
    item1.addEventListener('mouseleave',function(e){
        itemcont[0].classList.toggle('appear')
        itemcont[0].classList.toggle('disappear');
        hoverbg[0].classList.toggle('appear_bg');
        hoverbg[0].classList.toggle('disappear_bg');
        bluebox[0].classList.toggle('box_row');
        bluebox[0].classList.toggle('box_up');
        conttxt[0].classList.toggle('txt_up');
        conttxt[0].classList.toggle('txt_down');
    })
    item2.addEventListener('mouseenter',function(e){
        itemcont[1].classList.add('disappear');
        hoverbg[1].classList.add('appear_bg');
        bluebox[1].classList.add('box_row');
        conttxt[1].classList.add('txt_up');
    })
    item2.addEventListener('mouseleave',function(e){
        itemcont[1].classList.toggle('appear')
        itemcont[1].classList.toggle('disappear');
        hoverbg[1].classList.toggle('appear_bg');
        hoverbg[1].classList.toggle('disappear_bg');
        bluebox[1].classList.toggle('box_row');
        bluebox[1].classList.toggle('box_up');
        conttxt[1].classList.toggle('txt_up');
        conttxt[1].classList.toggle('txt_down');
    })
    item3.addEventListener('mouseenter',function(e){
        itemcont[2].classList.add('disappear');
        hoverbg[2].classList.add('appear_bg');
        bluebox[2].classList.add('box_row');
        conttxt[2].classList.add('txt_up');
    })
    item3.addEventListener('mouseleave',function(e){
        itemcont[2].classList.toggle('appear')
        itemcont[2].classList.toggle('disappear');
        hoverbg[2].classList.toggle('appear_bg');
        hoverbg[2].classList.toggle('disappear_bg');
        bluebox[2].classList.toggle('box_row');
        bluebox[2].classList.toggle('box_up');
        conttxt[2].classList.toggle('txt_up');
        conttxt[2].classList.toggle('txt_down');
    })
    // footer 
    let fotlink2 = document.getElementById('fot_link2');
    let link2cont = document.getElementById('link2_cont');
    let fotClose = document.querySelector('.fot_close');
    fotlink2.addEventListener('click',function(){
        fotlink2.classList.add('open');
        link2cont.classList.add('block');
        fotlink2.addEventListener('click',function(){
            fotlink2.classList.toggle('open');
            link2cont.classList.toggle('block');
        })
    })
    fotClose.addEventListener('click',function(){
        fotlink2.classList.toggle('open');
        link2cont.classList.toggle('block');
    })
    // modal js
    let modal = document.getElementById("modal");
    let modalClose = document.querySelector(".modal_close");
    let swiperCont = document.querySelectorAll(".mini");
    let currentCont = document.querySelector(".swiper-pagination-current");
    let closeModal = () => {
        modal.classList.add('hidden');
    }
    modalClose.addEventListener('click',closeModal);
    for(let i = 0; i<swiperCont.length; i++){
        swiperCont[i].addEventListener('click',()=>{
            modal.classList.remove('hidden');
        });
        
    }
    //swiper.js 
    let swiper1 = new Swiper(".first", {
        slidesPerView: 3.75,
        spaceBetween: 30,
        freeMode: true,
        slideToClickedSlide: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let swiper2 = new Swiper(".second", {
        slideToClickedSlide: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
        
}
