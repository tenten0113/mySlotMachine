"use strict";

//パネルにセクション（クラスはpanel）>
{
  class Panel {
      //imagesのソースを取得して、ランダムな番号をソースに返す
      getRandomImage() {
        const images = [
          'img/seven.png',
          'img/cherry.png',
          'img/bell.png'
        ];
        return images[Math.floor(Math.random()* images.length)];
      }
      //画像のソースがランダムに変わるメソッド呼ぶ
      spin() {
        this.img.src = this.getRandomImage();
      }

    }


    //スピンで画像が変わる処理
  const spin = document.getElementById('spin');
  spin.addEventListener('click',()=>{
    panels.forEach(panel => {
      panel.spin();
    });
  });

}