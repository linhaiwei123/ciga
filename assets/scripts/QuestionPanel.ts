import LeafController from "./LeafController";
const {ccclass, property} = cc._decorator;
import * as Global from "./Global"
import LeafItemController from "./LeafItemController";
@ccclass
export default class QuestionPanel extends cc.Component {

    @property(cc.Node)
    yesBtn: cc.Node;

    @property(cc.Node)
    noBtn: cc.Node;

    @property(cc.Node)
    id: cc.Node;

    @property(cc.Node)
    storyName: cc.Node;

    @property(cc.Node)
    title: cc.Node;

    @property(cc.Node)
    content: cc.Node;

    @property(cc.Node)
    touchMask: cc.Node;

    @property(LeafController)
    leafController: LeafController;


    private currentStory: IStory;

    private leafItemController: LeafItemController;

    onLoad() {
        this.yesBtn.on("touchend", this.onYesBtnTouchEnd, this);
        this.noBtn.on("touchend", this.onNoBtnTouchend, this);
    }

    initQuestion(leafItemController: LeafItemController) {
        this.leafItemController = leafItemController;

        //TODO 如果所有的故事都使用过了，则可能死循环
        let randomI = Math.ceil(cc.random0To1() * 10);
        while (Global.storyArrayConfigData[randomI].isUsed !== 0) {
            randomI = (randomI++) % 10;
        }
        Global.storyArrayConfigData[randomI].isUsed = 1;

        this.currentStory = Global.storyArrayConfigData[randomI];

        this.initStoryView(Global.storyArrayConfigData[randomI]);
    }

    private initStoryView(story: IStory) {
        this.id.getComponent<cc.Label>(cc.Label).string = `${story.id}`;
        this.storyName.getComponent<cc.Label>(cc.Label).string = `${story.storyName}`;
        this.title.getComponent<cc.Label>(cc.Label).string = `${story.title}`;
        this.content.getComponent<cc.Label>(cc.Label).string = `${story.content}`;
    }

    onYesBtnTouchEnd() {
        this.leafController.updateHp(this.currentStory.yesToHp, true);
        if(!this.leafController.isGameEnd()) {
            this.onAfterBtnTouchend();
        }
    }

    onNoBtnTouchend() {
        this.leafController.updateHp(this.currentStory.noToHp, false);
        if(!this.leafController.isGameEnd()) {
            this.onAfterBtnTouchend();
        }
    }

    onAfterBtnTouchend() {
        //TODO 移开touchMask
        this.touchMask.position = cc.v2(10000,10000);
        //TODO 移开questionPanel
        this.node.position = cc.v2(10000,10000);
        //通知所有叶子继续计时
        cc.find("Canvas").emit("resumeAllLeafItem");
    }
}
