
//###{"class":"go.GraphLinksModel","nodeDataArray":[{"text":"YouYa","isInit":false,"key":-1,"loc":"374.8372500000001
// 39.25587500000006","callbacks":"{\"enter\":[\"onEnterYouYa\"],\"leave\":[]}"},{"text":"LvYe","isInit":false,"key":-2,"loc":"352.94062499999995 211.83725000000004","callbacks":"{\"enter\":[\"onEnterLvYe\"],\"leave\":[]}"},{"text":"MaoYe","isInit":false,"key":-3,"loc":"154 341","callbacks":"{\"enter\":[],\"leave\":[]}"},{"text":"KuYe","isInit":false,"key":-4,"loc":"532 394","callbacks":"{\"enter\":[\"onEnterKuYe\"],\"leave\":[]}"},{"text":"KuMaoYe","isInit":false,"key":-5,"loc":"-178 398","callbacks":"{\"enter\":[],\"leave\":[]}"},{"text":"ZhiYa","isInit":true,"key":-6,"loc":"399 -201","callbacks":"{\"enter\":[\"onEnterZhiYa\"],\"leave\":[]}"}],"linkDataArray":[{"from":-1,"to":-2,"points":[427.1628964937524,91.21724733912157,429.52430766468547,133.08697227426535,422.55238680896355,173.29469668817075,406.2536848617478,211.87465868926103],"text":"ToLvYe","callbacks":"{\"before\":[],\"after\":[]}"},{"from":-2,"to":-3,"points":[368.8643101312544,263.47257232493706,328.27183493360883,302.43163706869444,288.65544515018235,329.5920290940248,254.13911109290098,345.65783233744105],"text":"ToMaoYe","callbacks":"{\"before\":[],\"after\":[]}"},{"from":-2,"to":-4,"points":[426.68108031350505,262.1690922588294,469.4122235756582,294.56943931088097,512.5740459617333,337.3307953297598,556.5406907339344,394.10694031496143],"text":"ToKuYe","callbacks":"{\"before\":[],\"after\":[]}"},{"from":-3,"to":-5,"points":[156.74669922240994,383.02657866107774,84.5651672616224,405.56503371837044,19.551553647769893,417.4607652550956,-34.91318871483813,420.62125300198693],"text":"ToKuMaoYe","callbacks":"{\"before\":[],\"after\":[]}"},{"from":-6,"to":-1,"points":[440.85461278225296,-149.04814753361168,429.14295614043533,-94.11291962421555,421.85199908450295,-24.9100825335062,425.0325288770425,39.25632751018767],"text":"ToYouYa","callbacks":"{\"before\":[],\"after\":[]}"},{"from":-5,"to":-6,"points":[-84.96916876096294,398.1153967931501,73.61378475727008,205.47986252167004,241.9270514534521,23.057760027922058,419.8612627658083,-149.18748268520955],"callbacks":"{\"before\":[],\"after\":[]}","text":"ToZhiYaFromKuMaoYe"},{"from":-4,"to":-6,"points":[593.1360708222704,394.0764579185358,702.4329506965918,216.54814100758006,591.7436992475882,-16.87469011637644,470.33824918500727,-149.17350468595953],"text":"ToZhiyaFromKuYe","callbacks":"{\"before\":[],\"after\":[]}"}],"globalCallbacksText":"{\"enter\":[],\"leave\":[],\"before\":[],\"after\":[]}"}###
interface StateNameInterface{
    YouYa:string;
    LvYe:string;
    MaoYe:string;
    KuYe:string;
    KuMaoYe:string;
    ZhiYa:string;

}
interface EventNameInterface{
    ToLvYe:string;
    ToMaoYe:string;
    ToKuYe:string;
    ToKuMaoYe:string;
    ToYouYa:string;
    ToZhiYaFromKuMaoYe:string;
    ToZhiyaFromKuYe:string;

}
import StateMachine from "../libs/StateMachine";
export abstract class LeafItemFsm  extends cc.Component  {

    private fsm:any;

    protected fsmTrigger(eventName:string,...args:any[]){
        this.fsm[eventName](...args);
    };

    protected fsmIs(stateName:string):boolean {
        return this.fsm.is(stateName);
    };

    protected fsmCan(eventName:string):boolean {
        return this.fsm.can(eventName);
    };

    protected fsmCannot(eventName:string):boolean{
        return this.fsm.cannot(eventName);
    };

    protected fsmCurrent():string{
        return this.fsm.current;
    };

    protected fsmStartUp(){
        this.fsm = StateMachine.create({"initial":"ZhiYa","events":[{"name":"ToLvYe","from":"YouYa","to":"LvYe"},{"name":"ToMaoYe","from":"LvYe","to":"MaoYe"},{"name":"ToKuYe","from":"LvYe","to":"KuYe"},{"name":"ToKuMaoYe","from":"MaoYe","to":"KuMaoYe"},{"name":"ToYouYa","from":"ZhiYa","to":"YouYa"},{"name":"ToZhiYaFromKuMaoYe","from":"KuMaoYe","to":"ZhiYa"},{"name":"ToZhiyaFromKuYe","from":"KuYe","to":"ZhiYa"}],"callbacks":{"onenterYouYa":[this.onEnterYouYa],"onenterLvYe":[this.onEnterLvYe],"onenterKuYe":[this.onEnterKuYe],"onenterZhiYa":[this.onEnterZhiYa]}},this);
    };

    public readonly stateName:StateNameInterface = {
        YouYa:"YouYa",
    LvYe:"LvYe",
    MaoYe:"MaoYe",
    KuYe:"KuYe",
    KuMaoYe:"KuMaoYe",
    ZhiYa:"ZhiYa"
    };

    public readonly eventName:EventNameInterface = {
        ToLvYe:"ToLvYe",
    ToMaoYe:"ToMaoYe",
    ToKuYe:"ToKuYe",
    ToKuMaoYe:"ToKuMaoYe",
    ToYouYa:"ToYouYa",
    ToZhiYaFromKuMaoYe:"ToZhiYaFromKuMaoYe",
    ToZhiyaFromKuYe:"ToZhiyaFromKuYe"
    };

    protected ToLvYe(...args:any[]): void {this.fsm["ToLvYe"](...args);};
     protected ToMaoYe(...args:any[]): void {this.fsm["ToMaoYe"](...args);};
     protected ToKuYe(...args:any[]): void {this.fsm["ToKuYe"](...args);};
     protected ToKuMaoYe(...args:any[]): void {this.fsm["ToKuMaoYe"](...args);};
     protected ToYouYa(...args:any[]): void {this.fsm["ToYouYa"](...args);};
     protected ToZhiYaFromKuMaoYe(...args:any[]): void {this.fsm["ToZhiYaFromKuMaoYe"](...args);};
     protected ToZhiyaFromKuYe(...args:any[]): void {this.fsm["ToZhiyaFromKuYe"](...args);};

    protected abstract onEnterYouYa(eventName:string,from:string,to:string,...args:any[]) : void;
    protected abstract onEnterLvYe(eventName:string,from:string,to:string,...args:any[]) : void;
    protected abstract onEnterKuYe(eventName:string,from:string,to:string,...args:any[]) : void;
    protected abstract onEnterZhiYa(eventName:string,from:string,to:string,...args:any[]) : void;

}
    