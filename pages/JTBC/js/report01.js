window.onload=function(){
    let lt02 = document.querySelector('#lt02');
    lt02.addEventListener('mouseenter', function(){
        lt02.classList.add('lt');
        lt02.id='lt';
    })
    lt02.addEventListener('mouseout', function(){
        lt02.classList.toggle('lt');
        lt02.id='lt02';
    })
    // img animation
    let itemimg1 = document.getElementById('item1_img');
    let itemimg2 = document.getElementById('item2_img');
    let itemimg3 = document.getElementById('item3_img');
    window.addEventListener('scroll',function(){
        let value = window.scrollY;
        if(value>400) {
            itemimg1.classList.add('on');
            itemimg2.classList.add('on');
        } else {
            itemimg1.classList.remove('on');
            itemimg2.classList.remove('on');
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
