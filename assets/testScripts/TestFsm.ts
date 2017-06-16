
//###{"class":"go.GraphLinksModel","nodeDataArray":[{"text":"A","isInit":true,"key":-1,"loc":"-97 -213","callbacks":"{\"enter\":[\"enterA\"],\"leave\":[]}"},{"text":"B","isInit":false,"key":-2,"loc":"-237 4","callbacks":"{\"enter\":[\"enterB\"],\"leave\":[]}"},{"text":"C","isInit":false,"key":-3,"loc":"46 7","callbacks":"{\"enter\":[\"enterC\"],\"leave\":[]}"}],"linkDataArray":[{"from":-1,"to":-2,"points":[-86.56169845566816,-162.0643462012028,-113.91654913380466,-98.4681867563597,-150.84957740713148,-41.22199293270312,-198.060626819444,10.511676143150698],"callbacks":"{\"before\":[],\"after\":[]}","text":"go"},{"from":-2,"to":-3,"points":[-194.66093196898092,26.87040790077855,-114.26748710834431,15.056592456644072,-34.04892861938821,15.906965868187779,46.006964901919844,29.410743386325514],"callbacks":"{\"before\":[],\"after\":[]}","text":"go"},{"from":-3,"to":-1,"points":[49.387938280493465,13.534573377954398,1.1989400807895123,-39.15800217730336,-36.68475508652189,-97.4406101270132,-64.94152885516418,-162.10596928256734],"callbacks":"{\"before\":[],\"after\":[]}","text":"go"}],"globalCallbacksText":"{\"enter\":[],\"leave\":[],\"before\":[],\"after\":[]}"}###
interface StateNameInterface{
    A:string;
    B:string;
    C:string;

}
interface EventNameInterface{
    go:string;

}
import StateMachine from "../libs/StateMachine";
export abstract class TestFsm  extends cc.Component  {

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
        this.fsm = StateMachine.create({"initial":"A","events":[{"name":"go","from":"A","to":"B"},{"name":"go","from":"B","to":"C"},{"name":"go","from":"C","to":"A"}],"callbacks":{"onenterA":[this.enterA],"onenterB":[this.enterB],"onenterC":[this.enterC]}},this);
    };

    public readonly stateName:StateNameInterface = {
        A:"A",
    B:"B",
    C:"C"
    };

    public readonly eventName:EventNameInterface = {
        go:"go"
    };

    protected go(...args:any[]): void {this.fsm["go"](...args);};

    protected abstract enterA(eventName:string,from:string,to:string,...args:any[]) : void;
    protected abstract enterB(eventName:string,from:string,to:string,...args:any[]) : void;
    protected abstract enterC(eventName:string,from:string,to:string,...args:any[]) : void;

}
    