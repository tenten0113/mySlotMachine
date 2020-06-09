"use strict";

//パネルにセクション（クラスはpanel）>
{
  class Panel {
    constructor(){
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src= this.getRandomImage();

      this.timeoutId = undefined; //!?

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop');
      this.stop.addEventListener('click',() => {
        clearTimeout(this.timeoutId);
      });


    }
      
      //配列に画像のソースを用意して、このメソッドが呼ばれたときにはimages配列の中からランダムなインデックス番号を返す
      getRandomImage() {
        const images = [
          'img/seven.png',
          'img/cherry.png',
          'img/bell.png'
        ];
        return images[Math.floor(Math.random()* images.length)];
      } 

      //画像のソースをランダムに出すためのメソッドを更に呼び出す
      spin() {
        this.img.src = this.getRandomImage(); //ソースが渡ってくる
        this.timeoutId = setTimeout(()=>{
          this.spin();
        },50);
      }

    }
  


}