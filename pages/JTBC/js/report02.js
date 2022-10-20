window.onload=function(){
    let lt01 = document.querySelector('#lt01');
    lt01.addEventListener('mouseenter', function(){
        lt01.classList.add('lt');
        lt01.id='lt';
    })
    lt01.addEventListener('mouseout', function(){
        lt01.classList.toggle('lt');
        lt01.id='lt01';
    })
    // img animation
    let itemimg = document.querySelector('.item1_img');
    window.addEventListener('scroll',function(){
        let value = window.scrollY;
        if(value > 400) {
            itemimg.classList.add('on');
        } else {
            itemimg.classList.remove('on');
        }
    })
    // header에 마우스 올렸을때 클래스 추가 혹은 제거
    let experience = document.querySelector(".experience")
    let expClose = document.querySelector(".exp_close")
    expClose.addEventListener('click',()=>{
        experience.classList.add('hidden');
    })
    let header = document.getElementById('header');
    header.addEventListener('mouseenter',function(){
        header.classList.add('hover-effect');
    })
    header.addEventListener('mouseleave',function(){
        header.classList.remove('hover-effect');
    })
    // footer 중앙그룹브랜드 클릭시 세부 메뉴창 띄우기
    let footerLink = document.querySelector('.brand_links');
    let linkContent = document.querySelector('.links_content');
    let fotClose = document.querySelector('.fot_close');
    footerLink.addEventListener('click', () => {
        footerLink.classList.toggle('open');
        linkContent.classList.toggle('block');
    })
    fotClose.addEventListener('click',() => {
        footerLink.classList.remove('open');
        linkContent.classList.remove('block');
    })
}