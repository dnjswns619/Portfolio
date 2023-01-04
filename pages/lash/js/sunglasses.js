(() => {
  const imgInfo = [
    {
      //0
      values: [
        "../images/선글라스/a9e40dc6b240b6cb244b57502478724e.jpg",
        "../images/선글라스/ec562dc4e8dd1174f3c6e7b4d59d3358.jpg",
        "../images/선글라스/5aa534f041d0297bedb2cddb6d0ff3d6.jpg",
        "../images/선글라스/9c5e9652c6197f76ee5a342dc7967ad4.jpg"
      ]
    },
    {
      //1
      values: [
        "../images/선글라스/f61ec326eb6e3efafd31ef56ab80eb1f.jpg",
        "../images/선글라스/a5716abd5168ca30e07745a3acb83ffd.jpg",
        "../images/선글라스/d99dd6212713f63e4e0887526d9771d8.jpg",
        "../images/선글라스/8a90ffc9722e631b6a18a5dc0503871e.jpg"
      ]
    },
    {
      //2
      values: [
        "../images/선글라스/ef85fc912dbf5fbc52c719cfa54043a4.jpg",
        "../images/선글라스/596b1fd468781d99fddaf3fd212fedac.jpg",
        "../images/선글라스/5e0f4ecea58e1dcdca97b7a48434d18c.jpg"
      ]
    },
    {
      //3
      values: [
        "../images/선글라스/3532573690c60c615048263e81248988.jpg",
        "../images/선글라스/843b05216c153df89ddb78cb3908fdd4.jpg",
        "../images/선글라스/a72b739c86b69aabfc81312f31ccbb55.jpg",
        "../images/선글라스/b13433ee49632525b3a4562699abc4f7.jpg",
        "../images/선글라스/001d68ea8f0bd18d5b0c9ca323df4c70.jpg"
      ]
    },
    {
      //4
      values: [
        "../images/선글라스/8669dfd7b19d72b88a1f475ea6101af8.jpg",
        "../images/선글라스/2ce4fe9ac91496375d958a52bfcc9b17.jpg",
        "../images/선글라스/7d2d51f66740f5e54ae331f1c3f846c2.jpg",
        "../images/선글라스/bf8180df638d7c12bb0372a5a7d4a864.jpg"
      ]
    },
    {
      //5
      values: [
        "../images/선글라스/25e53135f999828c1876a2584c9dba01.jpg",
        "../images/선글라스/a9a988da160aa26b4595f7a29085a6d2.jpg",
        "../images/선글라스/d8d10b64382ced6def2816b08b8a2b86.jpg",
        "../images/선글라스/71b9bc99e64ae7588af411324c8fbd58.jpg"
      ]
    },
    {
      //6
      values: [
        "../images/선글라스/cb1a75ecac075800539941ea08c6a65c.jpg"
      ]
    },
    {
      //7
      values: [
        "../images/선글라스/fabafa5f031545afc0d04b9b2eb431d9.jpg",
        "../images/선글라스/9a55c462e4d303f7b1def8e113ae7bea.jpg",
        "../images/선글라스/36be311c7dc40d2cf771504a18c508e8.jpg",
        "../images/선글라스/0ed3a4a6ee958a564edb1455e248b239.jpg",
        "../images/선글라스/57279451342f0c81ca1d09351924405b.jpg"
      ]
    },
    {
      //8
      values: [
        "../images/선글라스/7f50b9206368932481998cc19661fe17.jpg",
        "../images/선글라스/1e8f8b0e95ea118fab338a80b6251a2f.jpg",
        "../images/선글라스/ad5853816ffc6f92bd5e9474135e3ce6.jpg",
        "../images/선글라스/0a4b9d8112c3fbb4eb0ba6ad32a64f04.jpg"
      ]
    },
    {
      //9
      values: [
        "../images/선글라스/ddc18223a590f5adabafae36dd98423c.jpg",
        "../images/선글라스/b3dd3f9b46fbfb1d5d595366762cc157.jpg",
        "../images/선글라스/ea355fde28ccd9fde2af0ea7ebd23408.jpg",
        "../images/선글라스/3a79a3b5aad899c563e51f5395f989f7.jpg"
      ]
    },
    {
      //10
      values: [
        "../images/선글라스/00e63c8b80b8c160c6fc65e8d82a47a0.jpg",
        "../images/선글라스/d930f516b73f187b334f70572e748d6c.jpg",
        "../images/선글라스/32b1ebd3c730c2f288cf92c7f6b7238c.jpg",
        "../images/선글라스/39b3e78760141b576252efcb95bfad86.jpg"
      ]
    },
    {
      //11
      values: [
        "../images/선글라스/8cfb54628149f7a9c7a389c54639bd75.jpg",
        "../images/선글라스/5221de37f713c17e92afe6149fc6fa74.jpg",
        "../images/선글라스/27fd5578f7db0ee06c032dc986592b52.jpg",
        "../images/선글라스/d47ff52eddd6c702a5cf2e971bcfbcdd.jpg"
      ]
    },
    {
      //12
      values: [
        "../images/선글라스/204c979f7a5c7046a1829ceace845b6f.jpg",
        "../images/선글라스/d022515f2185001715ff0ad67f28613c.jpg",
        "../images/선글라스/4aee97c6b309702127b48e2b3ac16fa0.jpg",
        "../images/선글라스/adccb342f6b3957e872acec2402af90c.jpg"
      ]
    },
    {
      //13
      values: [
        "../images/선글라스/e4b385df679c9c4d0a71935bd7817c05.jpg",
        "../images/선글라스/3b5a302d9ee9af03de59c36d918ee836.jpg",
        "../images/선글라스/a3e55d32a90b69f4c478d99a0e15c596.jpg",
        "../images/선글라스/d0e14bcd4e4819beac8bc255f69f7e55.jpg"
      ]
    }
  ];
  
  for (let e = 0; e < imgInfo.length; e++) {
    for (let i = 0; i < imgInfo[e].values.length; i++) {
      document.querySelector(`.item${e}-${i}`).addEventListener('mouseover', () => {
        document.querySelector(`.item${e}`).src = imgInfo[e].values[i];
      })
    }
  }
})();