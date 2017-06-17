const {ccclass, property} = cc._decorator;
import * as Global from './Global';
@ccclass
export default class MainController extends cc.Component {


    @property(cc.Node)
    grayLayer: cc.Node;
    @property(cc.Node)
    dialog: cc.Node;
    @property(cc.Node)
    yesBtn: cc.Node;
    @property(cc.Node)
    noBtn: cc.Node;
    @property(cc.Node)
    devilEffect: cc.Node;
    @property(cc.Node)
    angelEffect: cc.Node;
    @property(cc.Node)
    devilHurtPoint: cc.Node;
    @property(cc.Node)
    angelHurtPoint: cc.Node;


    private question: QuestionConfigData;

    newTurn() {
        let randomI: number = null;
        if (Global.countConfigData.currentNum <= Global.countConfigData.totalNum) {
            randomI = Math.floor(cc.random0To1() * Global.countConfigData.totalNum);
            while (Global.questionConfigDataArray[randomI].isUsed) {
                randomI = (randomI++) % Global.countConfigData.totalNum;
            }
        }
        Global.countConfigData.currentNum++;

        let question = Global.questionConfigDataArray[randomI];
        this.question = question;
        this.showAll();
        this.showData(question);
    }

    onLoad() {
        this.yesBtn.on('touchstart',this.onYesBtnStart,this);
        this.noBtn.on('touchend',this.onNoBtnStart,this);

        this.yesBtn.on("touchend", this.onYesBtn, this);
        this.noBtn.on("touchend", this.onNoBtn, this);

        this.newTurn();
    }

    onYesBtnStart(){
        this.yesBtn.color = cc.Color.GRAY;
    }

    onNoBtnStart(){
        this.noBtn.color = cc.Color.GRAY;
    }

    onYesBtn() {
        this.yesBtn.color = cc.Color.WHITE;
        Global.scoreConfigData.score += this.question.yesAttr;
        this.hideAll();
        //TODO 播放动画
        this.playAnim(this.question.yesAttr,()=>{
            let isEnd = this.checkEnd();
            if (!isEnd) {
                this.newTurn();
            }
        });
    }

    onNoBtn() {
        this.noBtn.color = cc.Color.WHITE;
        Global.scoreConfigData.score += this.question.noAttr;
        this.hideAll();
        //TODO 播放动画
        this.playAnim(this.question.noAttr,()=>{
            let isEnd = this.checkEnd();
            if (!isEnd) {
                this.newTurn();
            }
        });

    }

    playAnim(attr: number,cb: ()=>void) {
        let i = 1;
        if(attr > 0) {
            while(this.angelHurtPoint.getChildByName('angelHurtPoint' + i).active){
                i++;
            }
            this.angelHurtPoint.getChildByName('angelHurtPoint' + i).active = true;
            this.angelHurtPoint.getChildByName('angelHurtPoint' + i).opacity = 0;
            this.angelHurtPoint.getChildByName('angelHurtPoint' + i).runAction(cc.fadeIn(3));
            setTimeout(cb,5000);
        } else {
            while(this.devilHurtPoint.getChildByName('devilHurtPoint' + i).active){
                i++;
            }
            this.devilHurtPoint.getChildByName('devilHurtPoint' + i).active = true;
            this.devilHurtPoint.getChildByName('devilHurtPoint' + i).opacity = 0;
            this.devilHurtPoint.getChildByName('devilHurtPoint' + i).runAction(cc.fadeIn(3));
            setTimeout(cb,5000);
        }
    }

    checkEnd() {
        this.resetResultState();
        if (Global.countConfigData.currentNum > Global.countConfigData.totalNum) {
            if (Global.scoreConfigData.score === 0) {
                //中立
                Global.resultState.normal = true;
                cc.director.loadScene("end");
            } else if (Global.scoreConfigData.score > 0) {
                //天使活
                Global.resultState.good = true;
                cc.director.loadScene("end");
            } else if (Global.scoreConfigData.score < 0) {
                //恶魔活
                Global.resultState.bad = true;
                cc.director.loadScene("end");
            }
        }
    }

    resetResultState() {
        Global.resultState.good = false;
        Global.resultState.bad = false;
        Global.resultState.normal = false;
    }


    private hideAll() {
        this.grayLayer.active = false;
        this.dialog.active = false;
        this.yesBtn.active = false;
        this.noBtn.active = false;
    }

    private showAll() {
        this.grayLayer.active = true;
        this.dialog.active = true;
        this.yesBtn.active = true;
        this.noBtn.active = true;
    }

    private showData(data: QuestionConfigData) {

        this.dialog.getChildByName("content").getComponent<cc.Label>(cc.Label).string = data.content;
        this.dialog.getChildByName("title").getComponent<cc.Label>(cc.Label).string = data.name;

    }
}
