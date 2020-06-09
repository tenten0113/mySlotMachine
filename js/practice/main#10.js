"use strict";

//パネルにセクション（クラスはpanel）>
{
  class Panel {
    constructor(){

      //stopボタンが押されたときの処理
      this.stop.addEventListener('click',() => {
        clearTimeout(this.timeoutId);

        panelsLeft--;

        if(panelsLeft === 0){
          checkResult();
        }
      });

    } //****** constructor end
      

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
  


  let panelsLeft = 3;

}