"use strict";

//パネルにセクション（クラスはpanel）>
{
  class Panel {
    constructor(){


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


}