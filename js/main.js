"use strict";

//パネルにセクション（クラスはpanel）>
{
  class Panel {
    constructor(){
      const section = document.createElement('section');
      section.classList.add('panel');
      //ひとつの画像
      this.img = document.createElement('img');
      this.img.src= this.getRandomImage();

      this.timeoutId = undefined; //!?

      //ひとつのボタン
      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop','inactive');

      //stopボタンが押されたときの処理
      this.stop.addEventListener('click',() => {

        //stopボタンが何度も押せてしまうので、連打出来ないようにする
        if(this.stop.classList.contains('inactive')){
          return;
        }
        this.stop.classList.add('inactive');
        clearTimeout(this.timeoutId); //stopを押したらsetTimeoutを止める

        panelsLeft--; //パネルの枚数を減らす

        if(panelsLeft === 0){ //stopボタンをすべて押したら
          spin.classList.remove('inactive');
          panelsLeft = 3;
          checkResult(); //判定処理を呼ぶ
        }
      });

      //sectionに入れ子にしていく、最後にメインにセクションを追加する
      section.appendChild(this.img);
      section.appendChild(this.stop);
      const main = document.querySelector('main');
      main.appendChild(section);
    } //****** constructor end
      
      //配列に画像のソースを用意して、このメソッドが呼ばれたときにはimages配列の中からランダムなインデックス番号を返す
      getRandomImage() {
        const images = [
          'img/seven.png',
          'img/cherry.png',
          'img/bell.png'
        ];
        return images[Math.floor(Math.random()* images.length)];
      } 

      //画像のソースをランダムに出すメソッドを50ミリ秒ごとに更に呼び出す
      spin() {
        this.img.src = this.getRandomImage(); //ソースが渡ってくる
        this.timeoutId = setTimeout(()=>{
          this.spin();
        },50);
      }

      isUnmatched(p1,p2) {
        // if(this.img.src !== p1.img.src && this.img.src !== p2.img.src){
        //   return true;
        // }else {
        //   return false;
        // }
        return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
      }

      unmatch() {
        this.img.classList.add('unmatched');
      }

      activate() {
        this.stop.classList.remove('inactive');
        this.img.classList.remove('unmatched');
      }
    }

    //それぞれのパネルを比較したいのでクラスの外に判定処理を書く
    function checkResult(){
      if(panels[0].isUnmatched(panels[1],panels[2])) {
        panels[0].unmatch();
      }else if(panels[1].isUnmatched(panels[0],panels[2])) {
        panels[1].unmatch();
      }else if(panels[2].isUnmatched(panels[1],panels[2])) {
        panels[2].unmatch();
      }
    }
  
  //画面表示するために配列にインスタンスの生成をしているこいつらは独立している
  const panels = [
   new Panel(),
   new Panel(),
   new Panel(),
  ];

  let panelsLeft = 3;


  //スピンボタンを取得しスピンボタンをクリックしたら、画像が一回だけランダムで入れ替わるメソッドを呼ぶ、一回押したらinactiveクラスが付与される
  const spin = document.getElementById('spin');
  spin.addEventListener('click',()=>{
    //スピンボタンにinactiveがついていたら何もしない
    if(spin.classList.contains('inactive')){
      return;
    }
    spin.classList.add('inactive');

    panels.forEach(panel => {
      panel.activate();
      panel.spin();
    });
  });

}