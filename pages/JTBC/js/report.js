window.onload = function(){
    // header에 마우스 올렸을때 클래스 추가 혹은 제거
    let experience = document.querySelector(".experience")
    let experienceClose = document.querySelector(".experience_close")
    experienceClose.addEventListener('click',()=>{
        experience.classList.add('hidden');
    })
    let header = document.getElementById('header');
    header.addEventListener('mouseenter',function(){
        header.classList.add('hover-effect');
    })
    header.addEventListener('mouseleave',function(){
        header.classList.remove('hover-effect');
    })
    // slide드 hover시 shadow효과
    let slide = document.querySelectorAll('.mini');
    for(let i = 0; i < slide.length; i++){
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
    let item = document.querySelectorAll('.item')
    let itemcont = document.querySelectorAll('.item_content');
    let hoverbg = document.querySelectorAll('.hover_txt');
    let bluebox = document.querySelectorAll('.blue_box');
    let conttxt = document.querySelectorAll('.cont_txt')
    for (let i = 0; i < 3; i++) {
        item[i].addEventListener('mouseover', () => {
            itemcont[i].classList.add('disappear');
            hoverbg[i].classList.add('appear_bg');
            bluebox[i].classList.add('box_row');
            conttxt[i].classList.add('txt_up');
            itemcont[i].classList.remove('appear')
            hoverbg[i].classList.remove('disappear_bg');
            bluebox[i].classList.remove('box_up');
            conttxt[i].classList.remove('txt_down');
        })
        item[i].addEventListener('mouseleave', () => {
            itemcont[i].classList.remove('disappear');
            hoverbg[i].classList.remove('appear_bg');
            bluebox[i].classList.remove('box_row');
            conttxt[i].classList.remove('txt_up');
            itemcont[i].classList.add('appear')
            hoverbg[i].classList.add('disappear_bg');
            bluebox[i].classList.add('box_up');
            conttxt[i].classList.add('txt_down');
        })
    }
    // footer 
    let footerLink = document.querySelector('.brand_links');
    let linkContent = document.querySelector('.links_content');
    let fotClose = document.querySelector('.links-close');
    footerLink.addEventListener('click', () => {
        footerLink.classList.toggle('open');
        linkContent.classList.toggle('block');
    })
    fotClose.addEventListener('click',() => {
        footerLink.classList.remove('open');
        linkContent.classList.remove('block');
    })
}
