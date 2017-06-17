import TouchLayer from "./TouchLayer";
const {ccclass, property} = cc._decorator;
import * as Global2 from "./Global2";
@ccclass
export default class MainController extends cc.Component {

    @property(cc.Node)
    yesBtn: cc.Node;

    @property(cc.Node)
    noBtn: cc.Node;

    @property(cc.Node)
    goodDialog: cc.Node;

    @property(cc.Node)
    badDialog: cc.Node;

    @property(TouchLayer)
    touchLayer: TouchLayer;

    //TODO 上面十个节点和下面十个节点

    @property(cc.Node)
    upNode1: cc.Node;
    @property(cc.Node)
    upNode2: cc.Node;
    @property(cc.Node)
    upNode3: cc.Node;
    @property(cc.Node)
    upNode4: cc.Node;
    @property(cc.Node)
    upNode5: cc.Node;
    @property(cc.Node)
    upNode6: cc.Node;
    @property(cc.Node)
    upNode7: cc.Node;
    @property(cc.Node)
    upNode8: cc.Node;
    @property(cc.Node)
    upNode9: cc.Node;
    @property(cc.Node)
    upNode10: cc.Node;

    @property(cc.Node)
    downNode1: cc.Node;
    @property(cc.Node)
    downNode2: cc.Node;
    @property(cc.Node)
    downNode3: cc.Node;
    @property(cc.Node)
    downNode4: cc.Node;
    @property(cc.Node)
    downNode5: cc.Node;
    @property(cc.Node)
    downNode6: cc.Node;
    @property(cc.Node)
    downNode7: cc.Node;
    @property(cc.Node)
    downNode8: cc.Node;
    @property(cc.Node)
    downNode9: cc.Node;
    @property(cc.Node)
    downNode10: cc.Node;

    onLoad() {
        this.hideAll();

        /**
         * 获取随机故事
         * @type {any}
         */
        this.newTurn();
    }

    private newTurn(){
        let randomI: number = null;
        if (Global2.storyNumConfigData2.currentStoryNum !== Global2.storyNumConfigData2.totalStoryNum) {
            randomI = Math.floor(cc.random0To1() * Global2.storyNumConfigData2.totalStoryNum);
            while (Global2.storyConfigDataArray2[randomI].isUsed === 1) {
                randomI = (randomI++) % Global2.storyNumConfigData2.totalStoryNum;
            }
        }
        Global2.storyNumConfigData2.currentStoryNum++;
        this.touchLayer.node.active = true;
        this.touchLayer.show(Global2.storyConfigDataArray2[randomI]);
    }

    onAnswerEnd(result: number) {
        this.hideAll();
        if(result === 0) {
            //TODO 确认是不是++
            Global2.hpConfigData2.currentHp++;
            //TODO down效果
        } else {
            Global2.hpConfigData2.currentHp--;
            //TODO  up效果
        }
        //故事数目-1
        let isEnd = this.checkEnd();
        Global2.storyNumConfigData2.currentStoryNum++;
        if(!isEnd) {
            this.newTurn();
        }
    }


    checkEnd() : boolean {

        if(Global2.storyNumConfigData2.currentStoryNum === Global2.storyNumConfigData2.totalStoryNum) {
            //中立
            this.resetResultState();
            Global2.resultState.middle = true;
            cc.director.loadScene("end");
            return true;
        } else if(Global2.hpConfigData2.currentHp > Global2.hpConfigData2.goodWinHp) {
            //好
            this.resetResultState();
            Global2.resultState.good = true;
            cc.director.loadScene("end");
            return true;
        } else if(Global2.hpConfigData2.currentHp < Global2.hpConfigData2.badWinHp) {
            //坏
            this.resetResultState();
            Global2.resultState.bad = true;
            cc.director.loadScene("end");
            return true;
        } else
            return false;

    }

    resetResultState(){
        Global2.resultState.good = false;
        Global2.resultState.bad = false;
        Global2.resultState.middle = false;
        Global2.resultState.none = false;
    }

    hideAll() {
       this.yesBtn.active = false;
       this.noBtn.active = false;
       this.touchLayer.node.active = false;
       this.goodDialog.active = false;
       this.badDialog.active = false;
    }




}
