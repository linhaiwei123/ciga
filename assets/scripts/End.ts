const {ccclass, property} = cc._decorator;

import * as Global2 from "./Global2"
@ccclass
export default class End extends cc.Component {

    onLoad() {
        if(Global2.resultState.good) {
            //TODO 显示好
        } else if(Global2.resultState.bad) {
            //TODO 显示坏
        } else if(Global2.resultState.middle) {
            //TODO 显示中立
        }
    }
}