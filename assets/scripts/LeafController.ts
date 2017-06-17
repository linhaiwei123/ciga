const {ccclass, property} = cc._decorator;
import * as Global from './Global';
@ccclass
export default class LeafController extends cc.Component {

    @property(cc.Node)
    leaf1A: cc.Node;
    @property(cc.Node)
    leaf2A: cc.Node;
    @property(cc.Node)
    leaf3A: cc.Node;
    @property(cc.Node)
    leaf4A: cc.Node;
    @property(cc.Node)
    leaf5A: cc.Node;
    @property(cc.Node)
    leaf6A: cc.Node;
    @property(cc.Node)
    leaf7A: cc.Node;
    @property(cc.Node)
    leaf8A: cc.Node;
    @property(cc.Node)
    leaf9A: cc.Node;
    @property(cc.Node)
    leaf10A: cc.Node;

    @property(cc.Node)
    leaf1B: cc.Node;
    @property(cc.Node)
    leaf2B: cc.Node;
    @property(cc.Node)
    leaf3B: cc.Node;
    @property(cc.Node)
    leaf4B: cc.Node;
    @property(cc.Node)
    leaf5B: cc.Node;
    @property(cc.Node)
    leaf6B: cc.Node;
    @property(cc.Node)
    leaf7B: cc.Node;
    @property(cc.Node)
    leaf8B: cc.Node;
    @property(cc.Node)
    leaf9B: cc.Node;
    @property(cc.Node)
    leaf10B: cc.Node;

    public onLoad() {

    }

    public start() {
        this.generateZhiYa();
    }

    private generateZhiYa() {
        let randomI = Math.ceil(cc.random0To1() * 10);

        //TODO 如果所有的叶子都使用过了，则可能死循环

        while(Global.leafToNodeConfigData[randomI] !== 0){
            randomI = (randomI++) % 10;
        }


        //TODO 叶子进入初始状态

    }

    public updateHp(deltaHp: number, isGood: boolean) {
        if(isGood) {
            Global.hpConfigData.hpToGood += deltaHp;
        } else {
            Global.hpConfigData.hpToBad += deltaHp;
        }

        //TODO 检查是否生成茂叶
    }

    public isGameEnd(): boolean {
        //检查血量
        if(Global.hpConfigData.hpToGood > Global.hpConfigData.hpToGoodWin){
            //TODO 好的一方赢
            return true;
        } else if (Global.hpConfigData.hpToBad > Global.hpConfigData.hpToBadWin) {
            //TODO 坏的一方赢
            return true;
        }else
            return false;
    }
}
