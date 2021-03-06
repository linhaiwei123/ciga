import {TestFsm} from "./TestFsm";
const {ccclass, property} = cc._decorator;

@ccclass
export default class TestFsmSubClass extends TestFsm {

    protected enterA(eventName: string, from: string, to: string, ...args): void {
        console.log('enterA');
    }

    protected enterB(eventName: string, from: string, to: string, ...args): void {
        console.log('enterB');
    }

    protected enterC(eventName: string, from: string, to: string, ...args): void {
        console.log('enterC');
    }

    public async onLoad(){
        this.fsmStartUp();
        for(let i = 0; i < 5; i++) {
            await this.waitGo();
        }
    }

    protected async waitGo(): Promise<any> {
        return new Promise<any>((resolve, reject)=>{
            setTimeout(()=>{
                this.go();
                resolve();
            }, 2000)
        })
    }
}
