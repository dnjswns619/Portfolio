(() => {
  let textboxActiveBtn = document.querySelectorAll('.info__title');
  let textBox = document.querySelectorAll('.info__text-box');
  for (let i = 0; i < textBox.length; i++) {
    textboxActiveBtn[i].addEventListener('click', () => {
      textBox[i].classList.toggle('block');
    })
  }
})();