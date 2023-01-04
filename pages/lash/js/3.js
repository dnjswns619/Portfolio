(() => {
  const sceneInfo = [
    {
      type: 'normal',
      scrollHeight: document.querySelector('.main-banner').offsetHeight,
      objs: {
        container: document.querySelector('.main-banner')
      }
    },
    {
      type: 'flex',
      scrollHeight: document.querySelector('.slide-wrapper').offsetHeight,
      objs: {
        container: document.querySelector('.slide-wrapper'),
      },
      value: {
        translateRight: [0, 75, {start: 0.1, end: 0.71}]
      }

    },
    {
      type: 'normal',
      scrollHeight: document.querySelector('.footer').offsetHeight,
      objs: {
        container: document.querySelector('.footer'),
      }
    }
  ]

  function setLayout() {
    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].type === 'normal') {
        sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
      } else if (sceneInfo[i].type === 'flex') {
        sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight * 10;
        sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
      }
    }
    let totalHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalHeight += sceneInfo[i].scrollHeight;
      document.body.style.height = `${totalHeight}px`;
    }
  }
  setLayout();

  let yOffset = 0
  function scrollLoop() {
    if (yOffset >= 520 ) {
      document.querySelector('.main').classList.add('fixed');
    } else {
      document.querySelector('.main').classList.remove('fixed');
    }
    playAnimation();
  }

  function calcValues(values, currentYOffset) {
    let scrollHeight = document.body.offsetHeight;
    let scrollRatio = currentYOffset / scrollHeight; // 현재 스크롤값의 비율
    let rv;
    if (values.length === 3) { 
      //시작 시점과 끝나는 시점을 가진 함수만 실행
      let partScrollEnd = values[2].end * scrollHeight;
      let partScrollStart = values[2].start * scrollHeight;
      let partScrollHeight = partScrollEnd - partScrollStart;
      if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
        //(currentYOffset - partScrollStart) / partScrollHeight = 시작시점과 끝나는 시점 사이에 있는지 판단하고 그 시점 안에서의 스크롤 비율을 구함
        rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
      } else if (currentYOffset < partScrollStart) {
        rv = values[0];
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1];
      }
    } 
    return rv;
  }

  function playAnimation() {
    let currentYOffset = yOffset;
    let scrollHeight = document.body.offsetHeight;
    let scrollRatio = currentYOffset / scrollHeight;

    if (scrollRatio >= 0.1) {
      sceneInfo[1].objs.container.style.marginLeft = `-${calcValues(sceneInfo[1].value.translateRight, currentYOffset)}%`
    }
    if (scrollRatio >= 0.71) {
      console.log(sceneInfo[1].scrollHeight)
      document.querySelector('.main').classList.remove('fixed');
      document.querySelector('.main').style.marginTop = `${0.61 * scrollHeight}px`;
    } else {
      document.querySelector('.main').style.marginTop = 0;
    }
  }
  window.addEventListener('scroll', () => {
    yOffset = window.pageYOffset;
    console.log(yOffset);
    scrollLoop();
  })
})();