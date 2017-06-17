import MainController from "./MainController";
const {ccclass, property} = cc._decorator;
import * as Global2 from "./Global2"
@ccclass
export default class TouchLayer extends cc.Component {
    @property(cc.Node)
    mainControllerNode: cc.Node;

    private mainController: MainController;

    @property(cc.Node)
    yesBtn: cc.Node;

    @property(cc.Node)
    noBtn: cc.Node;

    @property(cc.Node)
    goodDialog: cc.Node;

    @property(cc.Node)
    badDialog: cc.Node;


    private storyData: IStoryConfigData2;
    private dialogData: IdialogConfigData2;

    private currentDialogNum: number = 0;

    private isContentShowed: boolean = false;

    onLoad() {
        this.mainController = this.mainControllerNode.getComponent<MainController>(MainController);
        this.node.on("touchend",this.onTouchEnd,this);

        this.yesBtn.on("touchend",this.onYesBtnTouchEnd,this);
        this.noBtn.on("touchend",this.onNoBtnTouchEnd,this);
    }

    onYesBtnTouchEnd() {
        //console.log("yesBtnTouchEnd");
            this.mainController.onAnswerEnd(this.storyData.yesToHp);

    }

    onNoBtnTouchEnd() {
        //console.log("noBtnTouchEnd");
            this.mainController.onAnswerEnd(this.storyData.noToHp);

    }

    public show(storyData: IStoryConfigData2) {
        this.node.active = true;
        this.isContentShowed = false;
        this.currentDialogNum = 0 ;
        this.storyData = storyData;
        this.dialogData = Global2.dialogConfigDataArray2[this.storyData.dialogId];
        this.node.position = cc.v2(0,0);
        this.onTouchEnd();
    }

    public hideWithRunning() {
        //this.node.active = false;
        this.node.position = cc.v2(10000,10000);
    }

    private onTouchEnd() {
        //TODO 继续对话 或者显示按钮
        if(this.currentDialogNum == this.dialogData.length - 1) {
            if(!this.isContentShowed) {
                this.isContentShowed = true;
                this.showContent();
                this.showBtn();
                this.hideWithRunning();
            }
        }else {
            this.showContent();
            this.currentDialogNum++;
        }
    }

    private showContent(){
        let content = this.getDialogContent(this.currentDialogNum);
        if (this.isStartFromUp(this.currentDialogNum)) {
            this.goodDialog.getChildByName('goodLabel').getComponent<cc.Label>(cc.Label).string = content;
            this.goodDialog.active = true;
            this.badDialog.active = false;
        } else {
            this.badDialog.getChildByName('badLabel').getComponent<cc.Label>(cc.Label).string = content;
            this.badDialog.active = true;
            this.goodDialog.active = false;
        }
    }

    private showBtn() {
        this.yesBtn.active = true;
        this.noBtn.active = true;
    }

    private isStartFromUp(index: number) : boolean{
        let dialogString = this.dialogData[index];
        let target = dialogString.split(":")[0];
        if(target === 'up'){
            return true;
        }else {
            return false;
        }
    }
    private getDialogContent(index: number): string {
        let dialogString = this.dialogData[index];
        let content = dialogString.split(":")[1];
        return content;
    }
}
