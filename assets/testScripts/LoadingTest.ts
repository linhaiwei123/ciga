const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingTest extends cc.Component {

    onLoad() {
        // init logic
        this.node.on("touchstart", () => {
            console.log("touch start");
            cc.loader.loadRes("testLoadingScene", (current, total) => {
                console.log(`${ current / total * 100 } %`);
            }, (err) => {
                if (err) {
                    return console.error(`load error: ${ err }`);
                }
                console.log("done");
                cc.director.loadScene("testLoadingScene");
            })

        })
    }
}
