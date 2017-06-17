const {ccclass, property} = cc._decorator;
import * as Global from "./Global"
@ccclass
export default class End extends cc.Component {
    @property(cc.Node)
    angel: cc.Node;
    @property(cc.Node)
    devil: cc.Node;
    @property(cc.Node)
    normal: cc.Node;

    onLoad(){
        if(Global.resultState.good) {
            this.angel.active = true;
        } else if(Global.resultState.bad) {
            this.devil.active = true;
        } else if(Global.resultState.normal) {
            this.normal.active = true;
        }
    }
}
