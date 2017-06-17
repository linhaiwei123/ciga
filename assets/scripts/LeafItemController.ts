import {LeafItemFsm} from "./LeafItemFsm";
const {ccclass, property} = cc._decorator;
import * as Global from "./Global";
import QuestionPanel from "./QuestionPanel";
@ccclass
export default class LeafItemController extends LeafItemFsm {

    private handler: number = null;
    private handlerFunc: ()=>void = null;

    private startTimeStamp: number = null;

    private freezeDeltaTime: number = null;

    @property(cc.Node)
    questionPanel: cc.Node;

    @property(cc.Node)
    touchMask: cc.Node;



    public onLoad() {
        this.node.on("touchend",this.onTouchEnd,this);
        cc.find("Canvas").on("pauseAllLeafItem",this.onPauseAllLeafItem,this);
        cc.find("Canvas").on("resumeAllLeafItem",this.onResumeAllLeafItem,this);
    }

    private onTouchEnd() {
        if(this.fsmCurrent() !== this.stateName.LvYe) return;
        //TODO 显示问题
        this.showQuestionPanel();
        //TODO 停止计时器
        this.pauseAllLeafItem();

    }

    private pauseAllLeafItem () {
        cc.find("Canvas").emit("pauseAllLeafItem");
    }

    private onPauseAllLeafItem() {
        if(this.fsmCurrent() !== this.stateName.LvYe) {
            let totalDeltaTime =  Global.timeConfigData[this.fsmCurrent()];
            let currentTimeStamp = +new Date();
            this.freezeDeltaTime = totalDeltaTime - (currentTimeStamp - this.startTimeStamp)/1000;
            clearTimeout(this.handler);
        }
    }

    private onResumeAllLeafItem() {
        if(this.fsmCurrent() !== this.stateName.LvYe) {
            this.handler = setTimeout(this.handlerFunc,this.freezeDeltaTime);
        }
    }

    private showQuestionPanel() {
        this.touchMask.position = cc.v2(0,0);
        this.questionPanel.getComponent<QuestionPanel>(QuestionPanel).initQuestion(this);
        this.questionPanel.position = cc.v2(0,0);
    }


    protected onEnterYouYa(eventName: string, from: string, to: string, ...args): void {
       //TODO 幼芽生成动画



        //倒计时到幼芽
        //记录当前时间戳
        this.startTimeStamp = +new Date();
        this.handler = setTimeout(this.onTimeoutFromYouYaToLvYe,Global.timeConfigData.YouYa);
        this.handlerFunc = this.onTimeoutFromYouYaToLvYe;
    }


    protected onEnterLvYe(eventName: string, from: string, to: string, ...args): void {
        //TODO 可以点击
    }

    protected onEnterKuYe(eventName: string, from: string, to: string, ...args): void {

    }

    protected onEnterZhiYa(eventName: string, from: string, to: string, ...args): void {

        //倒计时到幼芽
        //记录当前时间戳
        this.startTimeStamp = +new Date();
        this.handler = setTimeout(this.onTimeoutFromZhiYaToYouYa,Global.timeConfigData.ZhiYa);
        this.handlerFunc = this.onTimeoutFromZhiYaToYouYa;
    }


    private onTimeoutFromZhiYaToYouYa() {
        //TODO 枝桠回收的动画

        this.ToYouYa();
    }

    private onTimeoutFromYouYaToLvYe() {
        //TODO 幼芽回收动画

        this.ToLvYe();
    }
}
