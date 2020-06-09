"use strict";

//パネルにセクション（クラスはpanel）>
{
  class Panel {
    constructor(){


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
          checkResult(); //判定処理を呼ぶ

        }
      });

    } //****** constructor end
      


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
    }

  



  //スピンボタンを取得しスピンボタンをクリックしたら、画像が一回だけランダムで入れ替わるメソッドを呼ぶ、一回押したらinactiveクラスが付与される
  const spin = document.getElementById('spin');
  spin.addEventListener('click',()=>{
    //スピンボタンにinactiveがついていたら何もしない
    if(spin.classList.contains('inactive')){
      return;
    }
    spin.classList.add('inactive');

    panels.forEach(panel => {
      panel.spin();
    });
  });

}