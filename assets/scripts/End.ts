const {ccclass, property} = cc._decorator;

import * as Global2 from "./Global2"
@ccclass
export default class End extends cc.Component {

    @property(cc.Label)
    testLabel:cc.Label

    onLoad() {
        if(Global2.resultState.good) {
            //TODO 显示好
            console.log("good");
            this.testLabel.string = "good";
        } else if(Global2.resultState.bad) {
            //TODO 显示坏
            this.testLabel.string = "bad";
        } else if(Global2.resultState.middle) {
            //TODO 显示中立
            this.testLabel.string = "middle";
        }
    }
}
