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
    //slide animation
    let slides = document.querySelector(".slides");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    let currentIndex = 0;
    let slideCount = slide.length - 3;
    let moveSlides = function(num){
        slides.style.left = -num * 300 + 'px';
    }
    next.addEventListener('click',function(){
        if(currentIndex < slideCount){
            next.classList.remove('default');
            prev.classList.remove('default');
            currentIndex++;
            moveSlides(currentIndex);
        } else {
            next.classList.add('default');
            next.preventDefault();
        }
    })
    prev.addEventListener('click',function(){
        if(currentIndex>0){
            prev.classList.remove('default');
            next.classList.remove('default');
            currentIndex--;
            moveSlides(currentIndex);
        } else {
            prev.classList.add('default');
        }
    })
    // modal slider js
    let modal = document.getElementById("modal");
    let modalClose = document.querySelector(".modal_close");
    let modalSlide = document.querySelectorAll(".modal-mini");
    let modalSlides = document.querySelector(".modal-slides");
    let modalNext = document.querySelector(".modal-next");
    let modalPrev = document.querySelector(".modal-prev");
    let modalCount = modalSlide.length
    let closeModal = () => {
        modal.classList.add('hidden');
    }
    let moveModalSlides = function(num){
        modalSlides.style.left = -num * 900 + 'px';
    }
    modalClose.addEventListener('click',closeModal);
    for(let i = 0; i < slide.length; i++){
        slide[i].addEventListener('click',()=>{
            modal.classList.remove('hidden');
            modalSlides.style.left = -i * 900 + 'px'
            let modalIndex = i
            modalNext.addEventListener('click',function(){
                if(modalIndex < modalCount - 1){
                    modalIndex++;
                    moveModalSlides(modalIndex);
                } else {
                    stopImmediatePropagation();
                }
            })
            modalPrev.addEventListener('click',function(){
                if(modalIndex > 0){
                    modalIndex--;
                    moveModalSlides(modalIndex);
                } else {
                    stopImmediatePropagation();
                }
            })
        });
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
}
