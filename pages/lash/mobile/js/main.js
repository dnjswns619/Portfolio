(() => {
  let menuBtn = document.querySelector('.header__menu');
  let menu = document.querySelector('.header__menu--block');
  menuBtn.addEventListener('click', menuOpen);
  function menuOpen() {
    menu.classList.toggle('block');
  }
  let collectionBtn = document.querySelector('.header__nav--collection-btn');
  let collectionList = document.querySelector('.header__nav--collection-box');
  collectionBtn.addEventListener('click', listOpen);
  function listOpen() {
    collectionBtn.classList.toggle('block');
    collectionList.classList.toggle('block');
  }

  // swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
})();