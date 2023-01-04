(() => {
  //애니메이션 정보를 담은 배열
  const sceneInfo = [
    {
      type: 'sticky',
      heightNum: 3,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#home'),
        messageBox: document.querySelector('.home-content'),
        messageA: document.querySelector('.scroll-text-a'),
        messageB: document.querySelector('.scroll-text-b'),
        messageC: document.querySelector('.scroll-text-c'),
        airplane: document.querySelector('.airplane'),
      },
      values: {
        messageA_opacity_out: [1, 0, {start: 0, end: 0.2}],
        messageA_translate_out: [0, 20, {start: 0, end: 0.2}],
        messageB_opacity_in: [0, 1, {start: 0.25, end: 0.35}],
        messageB_opacity_out: [1, 0, {start: 0.45, end: 0.55}],
        messageC_opacity_in: [0, 1, {start: 0.55, end: 0.65}],
        messageC_opacity_out: [1, 0, {start: 0.7, end: 0.8}],
        airplane_translateX_first: [0, 100, {start: 0, end: 0.45}],
        airplane_translateX_second: [100, 0, {start: 0.55, end: 0.8}],
        airplane_translateY_first: [0, 20, {start: 0, end: 0.45}],
        airplane_translateY_second: [10, 0, {start: 0.55, end: 0.8}],
        airplane_rotate_45: [45, 47, {start: 0, end: 0.45}],
        airplane_rotate_90: [89, 90, {start:0.28, end: 0.4}],
      }
    },
    {
      type: 'normal',
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#project')
      }
    }
  ]
  function setLayout() {
    //home section 높이값 설정하는 함수
    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].type === 'sticky') {
        //type이 sticky 섹션만 화면높이의 3배
        sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
        sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`
      } 
    }
    //현재 섹션 확인하는 식
    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo < length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight;
      if (yOffset <= totalScrollHeight) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute('id', `show-effect-${currentScene}`);
  }

  let yOffset = 0;
  let prevScrollHeight = 0;
  let currentScene = 0;
  function scrollLoop() {
    //섹션 이동시 body id 바꾸기
    prevScrollHeight = 0;
    
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      if (currentScene < sceneInfo.length - 1) {//섹션이 1까지만 증가
        currentScene++;
      }
      document.body.setAttribute('id', `show-effect-${currentScene}`);
    }
    if (yOffset < prevScrollHeight) {
      if (currentScene === 0) return; //0에서 더이상 작이지지 않게
      currentScene--;
      document.body.setAttribute('id', `show-effect-${currentScene}`);
    }

    playAnimation();
  }

  function calcValues(values, currentYOffSet) {
    //스크롤에 따른 애니메이션을 위해 현재 스크롤의 위치값 구하기
    let rv;
    let scrollHeight = sceneInfo[currentScene].scrollHeight;
    let scrollRatio = currentYOffSet / scrollHeight; //현재 스크롤 비율
    if (values.length === 3) { //start와 end값이 있을때만 실행
      let partScrollEnd = values[2].end * scrollHeight;
      let partScrollStart = values[2].start * scrollHeight;
      let partScrollHeight = partScrollEnd - partScrollStart;
      rv = (currentYOffSet - partScrollStart) / partScrollHeight * (values[1]- values[0]) + values[0];
    } else {
      rv = scrollRatio * (values[1]- values[0]) + values[0];
    }
    return rv;
  }

  function playAnimation() {
    //calcValues값을 활용해 애니메이션 실행
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    let currentYOffSet = yOffset - prevScrollHeight;
    let scrollHeight = sceneInfo[currentScene].scrollHeight;
    let scrollRatio = currentYOffSet / scrollHeight;
    switch (currentScene) {
      case 0:
        objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffSet);
        if (scrollRatio < 0.4) {
          objs.messageB.style.opacity = calcValues(values.messageB_opacity_in,currentYOffSet);
        } else {
          objs.messageB.style.opacity = calcValues(values.messageB_opacity_out,currentYOffSet);
        }
        if (scrollRatio < 0.77) {
          objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffSet);
        } else {
          objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffSet);
        }
        // project 섹션이랑 겹치는 부분에선 display none을 주기 위해 
        if(scrollRatio >= 0.8) {
          objs.messageBox.classList.add('none');
          objs.messageA.classList.add('none');
        } else {
          objs.messageBox.classList.remove('none');
          objs.messageA.classList.remove('none');
        }
        if (scrollRatio <= 0.5) {
          objs.airplane.style.marginLeft = `${calcValues(values.airplane_translateX_first, currentYOffSet)}%`;
        } else {
          objs.airplane.style.marginLeft = `${calcValues(values.airplane_translateX_second, currentYOffSet)}%`
          
        }
        if (scrollRatio <= 0.5) {
          objs.airplane.style.marginTop = `${calcValues(values.airplane_translateY_first, currentYOffSet)}%`;
          objs.airplane.style.transform = `rotate(47deg)`;
        } else {
          objs.airplane.style.marginTop = `${calcValues(values.airplane_translateY_second, currentYOffSet)}%`;
          objs.airplane.style.transform = `scaleX(-1) rotate(40deg)`;
        } 
        
        break;
    }
  }

  window.addEventListener('load', () => {
    setLayout();
    //로드할때마다 버그 예방을 위해 살짝식 스크롤 되게 하는 식
    let tempYOffset = yOffset;
    let tempScrollCount = 0;
    let siId = setInterval(() => { 
      window.scrollTo(0, tempYOffset);
      tempYOffset += 2;
      if (tempScrollCount > 20) {
        clearInterval(siId);
      }
      tempScrollCount++;
    }, 20)
    
    window.addEventListener('scroll', () => {
      yOffset = window.pageYOffset;
      scrollLoop();
    })
  })
})();