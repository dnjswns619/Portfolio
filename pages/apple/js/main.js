(() => {
  //각 섹션의 정보와 애니메이션 값을 담아놓음
  const sceneInfo = [
    {
      //0
      type: 'sticky',
      heightNum: 3,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-0'),
        messageA: document.querySelector('#scroll-section-0 .main-message-a'),
        messageB: document.querySelector('#scroll-section-0 .main-message-b'),
        messageC: document.querySelector('#scroll-section-0 .main-message-c'),
        canvas: document.querySelector('#video-canvas-0'),
        context: document.querySelector('#video-canvas-0').getContext('2d'),
        imgPath: [
          './images/AirPods (1).png',
          './images/AirPods (2).png'
        ],
        images: []
      },
      values: {
        canvas_scale: [1, 10, {start:0, end: 0.3}],
        canvas_opacity_out: [1, 0, {start:0.8, end: 1}],
        messageA_scale: [1, 1.3, {start: 0, end: 0.3}],
        messageB_scale: [1, 1.3, {start: 0, end: 0.3}],
        messageA_opacity_out: [1, 0, {start: 0.2, end: 0.3}],
        messageB_opacity_out: [1, 0, {start: 0.25, end: 0.3}],
        messageC_opacity_in: [0, 1, {start: 0.3, end: 0.4}],
        messageC_translateY_in: [20, 0, {start: 0.3, end: 0.4}],
        messageC_opacity_out: [1, 0, {start: 0.7, end: 0.8}],
        messageC_translateY_out: [0, -20, {start: 0.7, end: 0.8}],
      }
    },
    {
      //1
      type: 'sticky',
      heightNum: 4,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-1'),
        messageA: document.querySelector('#scroll-section-1 .main-message-a'),
        messageB: document.querySelector('#scroll-section-1 .main-message-b'),
        messageC: document.querySelector('#scroll-section-1 .desc-message-c'),
        pin: document.querySelector('.pin'),
        canvas: document.querySelector('#video-canvas-1'),
        context: document.querySelector('#video-canvas-1').getContext('2d'),
        videoImages: []
      },
      values: {
        videoImageCount: 216,
        imageSeqeunce: [0, 215],
        canvas_opacity_in: [0, 1, {start:0, end: 0.1}],
        // canvas_opacity_out: [1, 0, {start: 0.9, end: 1}],
        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.15 }],
        messageB_translateY_in: [30, 0, { start: 0.35, end: 0.4 }],
        messageC_translateY_in: [30, 0, { start: 0.55, end: 0.6 }],
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.15 }],
        messageB_opacity_in: [0, 1, { start: 0.35, end: 0.4 }],
        messageC_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],
        messageA_translateY_out: [0, -20, { start: 0.2, end: 0.25 }],
        messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
        messageC_translateY_out: [0, -20, { start: 0.7, end: 0.8 }],
        messageA_opacity_out: [1, 0, { start: 0.2, end: 0.25 }],
        messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
        messageC_opacity_out: [1, 0, { start: 0.65, end: 0.75 }],
        pin_scale_in: [0.5, 1, {start: 0.55, end: 0.6}],
      }
    },
    {
      //2
      type: 'sticky',
      heightNum: 4,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-2'),
        messageA: document.querySelector('#scroll-section-2 .main-message-a'),
        messageB: document.querySelector('#scroll-section-2 .main-message-b'),
        canvas: document.querySelector('#video-canvas-2'),
        context: document.querySelector('#video-canvas-2').getContext('2d'),
        videoImages: []
      },
      values: {
        videoImageCount: 55,
        imageSeqeunce: [0, 54],
        canvas_opacity_in: [0, 1, {start:0, end: 0.1}],
        canvas_opacity_out: [1, 0, {start: 0.9, end: 1}],
        messageA_translateY_in: [20, 0, { start: 0.15, end: 0.2 }],
        messageB_translateY_in: [30, 0, { start: 0.58, end: 0.63 }],
        messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
        messageB_opacity_in: [0, 1, { start: 0.58, end: 0.63 }],
        messageA_translateY_out: [0, -20, { start: 0.3, end: 0.35 }],
        messageB_translateY_out: [0, -20, { start: 0.70, end: 0.77 }],
        messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
        messageB_opacity_out: [1, 0, { start: 0.70, end: 0.77 }]
      }
    },
    {
      //3
      type: 'sticky',
      heightNum: 4,
      scrollHeight: 0,
      objs: {
        container: document.querySelector('#scroll-section-3'),
        messageA: document.querySelector('#scroll-section-3 .main-message-a'),
        messageB: document.querySelector('#scroll-section-3 .main-message-b'),
        canvas: document.querySelector('#video-canvas-3'),
        context: document.querySelector('#video-canvas-3').getContext('2d'),
        videoImages: []
      },
      values: {
        videoImageCount: 111,
        imageSeqeunce: [0, 110],
        canvas_opacity_in: [0, 1, {start:0, end: 0.1}],
        // canvas_opacity_out: [1, 0, {start: 0.9, end: 1}],
        canvas_scale: [1, 0, {start: 0.6, end: 0.8}],
        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.15 }],
        messageB_translateY_in: [30, 0, { start: 0.25, end: 0.3 }],
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.15 }],
        messageB_opacity_in: [0, 1, { start: 0.25, end: 0.3 }],
        messageA_translateY_out: [0, -20, { start: 0.2, end: 0.25 }],
        messageB_translateY_out: [0, -20, { start: 0.35, end: 0.4 }],
        messageA_opacity_out: [1, 0, { start: 0.2, end: 0.25 }],
        messageB_opacity_out: [1, 0, { start: 0.35, end: 0.4 }]
      }
    },
    {
      //4
      type: 'normal',
      scrollHeight: document.querySelector('#about-section').offsetHeight,
      objs: {
        container: document.querySelector('#about-section'),
        messageA: document.querySelector('.grid-box-1 .scroll-message-a'),
        messageB: document.querySelector('.grid-box-1 .scroll-message-b'),
        messageC: document.querySelector('.grid-box-2 .scroll-message-a'),
        messageD: document.querySelector('.grid-box-6 .scroll-message-a'),
        messageE: document.querySelector('.grid-box-7 .scroll-message-a'),
        messageF: document.querySelector('.grid-box-7 .scroll-message-b')
      },
      values: {
        messageA_opacity_out: [1, 0, {start: 0.9, end: 0.95}],
        messageB_opacity_in: [0, 1, {start: 0.95, end: 1}],
        messageC_opacity_in: [0, 1, {start: 0.07, end: 0.1}],
        messageC_translateY_in: [5, 0, {start: 0.07, end: 0.1}],
        messageD_opacity_in: [0, 1, {start: 0.35, end: 0.38}],
        messageD_translateY_in: [5, 0, {start: 0.35, end: 0.38}],
        messageE_opacity_out: [1, 0, {start: 0.43, end: 0.46}],
        messageF_opacity_in: [0, 1, {start: 0.46, end: 0.49}],
      }
    }
  ];

  function setLayout() {
    //각 섹션의 높이를 정하는 식
    for (let i = 0; i < sceneInfo.length; i++) {
      if (sceneInfo[i].type === 'sticky') {
        // type이 sticky 일때만 실행
        sceneInfo[i].scrollHeight = window.innerHeight * sceneInfo[i].heightNum;
        sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
      }
    }

    //현재 스크롤에 값에 따라 위치한 섹션의 순서를 구하는 식
    yOffset = window.pageYOffset;
    let totalScrollHeight = 0;
    for (let i = 0; i < sceneInfo.length; i++) {
      totalScrollHeight += sceneInfo[i].scrollHeight
      if (totalScrollHeight >= yOffset) {
        currentScene = i;
        break;
      }
    }
    document.body.setAttribute('id', `show-scene-${currentScene}`);

    if(sceneInfo[currentScene].type === 'sticky') {
      //캔버스에 그리는 이미지가 크기와 맞지 않을때 화면에 채우기 위한 식
      // 현재 화면 크기 / canvas 설정 크기
      let widthRatio = window.innerWidth / sceneInfo[currentScene].objs.canvas.width;
      let heightRatio = window.innerHeight / sceneInfo[currentScene].objs.canvas.height;
      let canvasScaleRatio;
      if (widthRatio < heightRatio) {
        canvasScaleRatio = heightRatio;
      } else {
        canvasScaleRatio = widthRatio;
      }
      sceneInfo[1].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${canvasScaleRatio})`
      sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${canvasScaleRatio})`
    }
  }

  function checkMenu() {
    //nav의 높이보다 많이 스크롤시 local-nav position 변경
    if (yOffset > 52) {
      document.querySelector('#header').classList.add('local-nav-sticky');
    } else {
      document.querySelector('#header').classList.remove('local-nav-sticky');
    }
  }
  
  let yOffset = 0 //현재 스크롤한 값을 담음
  let prevScrollHeight = 0; //현재 스크롤 값 이전에 위치한 섹션의 높이를 담음
  let currentScene = 0; //현재 위치한 섹션의 순서를 담음
  let enterNewScene = false; 
  function scrollLoop() {
    //섹션을 넘어갈 떄 마다 섹션의 값을 변화 시키는 함수
    prevScrollHeight = 0;
    enterNewScene = false;
    for (let i = 0; i < currentScene; i++) {
      prevScrollHeight += sceneInfo[i].scrollHeight;
    }
    //스크롤 효과가 있는 섹션에 들어가면 scroll-effect-end 클래스 제거
    if (delayYOffSet < prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      document.body.classList.remove('scroll-effect-end');
    }
    if (delayYOffSet > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
      enterNewScene = true;
      //스크롤 효과가 있는 섹션이 끝나면 scroll-effect-end 클래스 추가
      if (currentScene === sceneInfo.length - 1) {
        document.body.classList.add('scroll-effect-end');
      }
      if (currentScene < sceneInfo.length - 1) {
        //sceneInfo에 담아둔 길이까지 도달했을 때 더이상 숫자가 증가하지 안도록 조건 추가
        currentScene++
      }
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    }
    if (delayYOffSet < prevScrollHeight) {
      if (currentScene === 0) return; //섹션의 숫자가 0 아래로 떨어지지 않게
      enterNewScene = true;
      currentScene--;
      document.body.setAttribute('id', `show-scene-${currentScene}`);
    }

    if(enterNewScene) return; // 섹션을 넘어갈때 이상한 값이 나오는 것을 방지

    playAnimation();

  }

  function calcValues(values, currentYOffset) {
    let scrollHeight = sceneInfo[currentScene].scrollHeight;
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
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }
    return rv;
  }

  function setCanvasImage() {
    //캔버스의 이미지를 그려주기위해 이미지 객체를 생성하고 주소값을 만들어두었던 배열에 넣어줌
    let imgElem;
    for (let i = 0; i < sceneInfo[1].values.videoImageCount; i++) {
      imgElem = new Image();
      imgElem.src = `./images/001/AirPods (${1 + i}).jpg`;
      sceneInfo[1].objs.videoImages.push(imgElem)
    }

    let imgElem2;
    for (let i = 0; i < sceneInfo[2].values.videoImageCount; i++) {
      imgElem2 = new Image();
      imgElem2.src = `./images/002/AirPods (${1 + i}).jpg`;
      sceneInfo[2].objs.videoImages.push(imgElem2)
    }

    let imgElem3;
    for (let i = 0; i < sceneInfo[3].values.videoImageCount; i++) {
      imgElem3 = new Image();
      imgElem3.src = `./images/003/AirPods (${1 + i}).jpg`;
      sceneInfo[3].objs.videoImages.push(imgElem3)
    }

    let imgElem4;
    for (let i = 0; i < sceneInfo[0].objs.imgPath.length; i++) {
      imgElem4 = new Image();
      imgElem4.src = `./images/AirPods (${1 + i}).png`;
      sceneInfo[0].objs.images.push(imgElem4);
    }
  }
  setCanvasImage();

  function playAnimation() {
    //animation의 시작과 끝값을 가진 배열을 clacValues함수로 계산 하여 스크롤에 따라 animation이 실행되게하는 함수
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    let currentYOffset = yOffset - prevScrollHeight; //현재까지 스크롤 - 전 섹션의 높이 = 현제 섹션에 위치한 스크롤 값
    let scrollHeight = sceneInfo[currentScene].scrollHeight;
    let scrollRatio = currentYOffset / scrollHeight; //현제 섹션에서 몇퍼센트 만큼 스크롤 했는지 구하는 식
    switch (currentScene) {
      case 0:
        objs.context.drawImage(objs.images[0], 380, -50);  // 0번째 섹션 에어팟 그리기
        objs.context.drawImage(objs.images[1], 1070, 400); // 0번째 섹션 에어팟 그리기
        objs.canvas.style.transform = `scale(${calcValues(values.canvas_scale, currentYOffset)})`
        
        //messageA
        if (scrollRatio <= 0.55) {
          objs.messageA.style.transform = `scale(${calcValues(values.messageA_scale, currentYOffset)})`;
          objs.messageB.style.transform = `scale(${calcValues(values.messageB_scale, currentYOffset)})`;
          objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
          objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
          objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
          objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
        } else {
          objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
          objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
        }
        break;
      case 1:
        // let sequence = Math.round(calcValues(values.imageSeqeunce,currentYOffset));
        // objs.context.drawImage(objs.videoImages[sequence], 0, 0, objs.canvas.width, objs.canvas.height);
        if (scrollRatio <= 0.5) {
          objs.canvas.style.opacity = calcValues(values.canvas_opacity_in,currentYOffset)
        } 
        //messageA
        if (scrollRatio <= 0.17) {
          objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
          objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
        } else {
          objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
          objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
        }
        //messageB
        if (scrollRatio <= 0.43) {
          objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
          objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`
        } else {
          objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
          objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
        }
        //messageC
        if (scrollRatio <= 0.625) {
          objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
          objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`
          objs.pin.style.transform = `scale(${calcValues(values.pin_scale_in, currentYOffset)})`
        } else {
          objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
          objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
        }

        break;
      case 2:
        // let sequence2 = Math.round(calcValues(values.imageSeqeunce,currentYOffset));
        // objs.context.drawImage(objs.videoImages[sequence2], 0, 0, objs.canvas.width, objs.canvas.height);
        objs.canvas.style.opacity = calcValues(values.canvas_opacity_out,currentYOffset)
        //messageA
        if (scrollRatio <= 0.25) {
          objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
          objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
        } else {
          objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
          objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
        }
        //messageB
        if (scrollRatio <= 0.66) {
          objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
          objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`
        } else {
          objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
          objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
        }
        if (scrollRatio < 0.9) {
          sceneInfo[3].objs.canvas.classList.remove('sticky');
        }
        break;
      case 3:
        // let sequence3 = Math.round(calcValues(values.imageSeqeunce,currentYOffset));
        // objs.context.drawImage(objs.videoImages[sequence3], 0, 0, objs.canvas.width, objs.canvas.height);
        if (scrollRatio <= 0.5) {
          objs.canvas.style.opacity = calcValues(values.canvas_opacity_in,currentYOffset)
        } 
        //messageA
        if (scrollRatio <= 0.17) {
          objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
          objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
        } else {
          objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
          objs.messageA.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
        }
        //messageB
        if (scrollRatio <= 0.32) {
          objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
          objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`
        } else {
          objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
          objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
        }

        let widthRatio = window.innerWidth / objs.canvas.width;
        let heightRatio = window.innerHeight / objs.canvas.height;
        let canvasScaleRatio;
        if (widthRatio < heightRatio) {
          canvasScaleRatio = heightRatio;
        } else {
          canvasScaleRatio = widthRatio;
        }
        if (scrollRatio < 0.6) {
          objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${canvasScaleRatio})`;
        } else if (scrollRatio >= 0.6) {
          values.canvas_scale[1] = window.innerWidth / (objs.canvas.width * 2.1);
          objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${calcValues(values.canvas_scale, currentYOffset)})`
        }
        if (scrollRatio >= 0.6) {
          objs.container.classList.remove('sticky');
        } else {
          objs.container.classList.add('sticky');
        }
        if (scrollRatio >= 0.8) {
          objs.canvas.classList.remove('sticky');
          objs.canvas.style.marginTop = `${0.79 * scrollHeight}px`;
          objs.canvas.style.transform = `translate3d(-50%, 0, 0) scale(${calcValues(values.canvas_scale, currentYOffset)})`
        } else {
          objs.canvas.style.marginTop = `0px`;
          objs.canvas.classList.add('sticky');
        }
        if (scrollRatio >= 0.9) {
          sceneInfo[4].objs.messageA.style.opacity = calcValues(sceneInfo[4].values.messageA_opacity_out, currentYOffset);
          sceneInfo[4].objs.messageB.style.opacity = calcValues(sceneInfo[4].values.messageB_opacity_in, currentYOffset)
        }
        break;
        case 4: 
          objs.messageB.style.opacity = values.messageB_opacity_in[1];
          objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
          objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in,currentYOffset)}%, 0)`;
          objs.messageD.style.opacity = calcValues(values.messageD_opacity_in, currentYOffset);
          objs.messageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_in,currentYOffset)}%, 0)`;
          objs.messageE.style.opacity = calcValues(values.messageE_opacity_out, currentYOffset);
          objs.messageF.style.opacity = calcValues(values.messageF_opacity_in, currentYOffset)
          break;
    }
  }

  let delayYOffSet = 0;
  let acc = 0.1;
  let rafId;
  let rafState;
  function loop() {
    //부드러운 스크롤 효과를 위해 delayYOffSet 값을 계산
    delayYOffSet = delayYOffSet + (yOffset - delayYOffSet) * acc;
    if (!enterNewScene) {
      if (currentScene === 1 || currentScene === 2 || currentScene === 3) {
        //섹션 1, 2, 3일때만 실행
        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        let currentYOffset = delayYOffSet - prevScrollHeight;
        let sequence = Math.round(calcValues(values.imageSeqeunce,currentYOffset));
        if (objs.videoImages[sequence]) {
          objs.context.drawImage(objs.videoImages[sequence], 0, 0, objs.canvas.width, objs.canvas.height);
        }
        
      }
    }
    rafId = requestAnimationFrame(loop);

    if (Math.abs(yOffset - delayYOffSet) < 1) {
      cancelAnimationFrame(rafId);
      rafState = false;
    }
  }

  window.addEventListener('load', () => {
    document.body. classList.remove('before-load');

    sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.images[0], 380, -50);
    sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.images[1], 1070, 400);
    setLayout();

    //새로고침할때 마다 살짝 스크롤을 움직이는 식 = 잘못 나온 컨텐츠들을 제대로 돌려놓음
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

    window.addEventListener('resize', setLayout());

    window.addEventListener('scroll', () => {
      yOffset = window.pageYOffset;
      scrollLoop();
      checkMenu();
      if (!rafState) {
        rafId = requestAnimationFrame(loop);
        rafState = true;
      }
    })
  })
})();