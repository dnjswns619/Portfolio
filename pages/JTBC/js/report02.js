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
    let itemimg2 = document.getElementById('item2_img');
    let itemimg3 = document.getElementById('item3_img');
    window.addEventListener('scroll',function(){
        let value = window.scrollY;
        if(value>400) {
            itemimg2.classList.add('on');
            itemimg3.classList.add('on');
        } else {
            itemimg2.classList.remove('on');
            itemimg3.classList.remove('on');
        }
    })
    // header
    let header = document.getElementById('header');
    header.addEventListener('mouseenter',function(){
        header.classList.add('headerhov');
    })
    header.addEventListener('mouseleave',function(){
        header.classList.toggle('headerhov');
    })
    // footer
    let fotlink2 = document.getElementById('fot_link2');
    let link2cont = document.getElementById('link2_cont');
    let close = document.getElementById('close');
    fotlink2.addEventListener('click',function(){
        fotlink2.classList.add('open');
        link2cont.classList.add('block');
        fotlink2.addEventListener('click',function(){
            fotlink2.classList.toggle('open');
            link2cont.classList.toggle('block');
        })
    })
    close.addEventListener('click',function(){
        fotlink2.classList.toggle('open');
        link2cont.classList.toggle('block');
    })
}