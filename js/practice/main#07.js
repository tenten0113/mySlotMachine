"use strict";

//パネルにセクション（クラスはpanel）>
{
  class Panel {
    constructor(){
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src= 'img/seven.png';
      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop');
      
      //sectionに入れ子にしていく
      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);

    }
  }

  //インスタンスの作成
  const panels = [
   new Panel(),
   new Panel(),
   new Panel(),
  ];
  console.log(panel);

}