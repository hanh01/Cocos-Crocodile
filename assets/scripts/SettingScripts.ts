import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SettingScripts')
export class SettingScripts extends Component {

    @property(Node)
    SettingPanel: Node = null;

    public PenentyCount = 1;

    @property(Label)
    PenentyLb: Label = null;

    resultArr: number[] = [];

    protected onLoad(): void {
        cc.SettingScripts = this;
    }

    createRandom(): number[] {

        for (let i = 0; i < this.PenentyCount; i++) {
            var e = this.RandomFunc();

            this.resultArr.push(e);
        }
        return this.resultArr;
    }

    RandomFunc(): number {
        let random = Math.floor(Math.random() * 10);
        if (this.resultArr.indexOf(random) !== -1) {
            this.RandomFunc();
        } else {
            return random;
        }
    }


    onClick() {
        this.node.active = false;
        this.SettingPanel.active = true;
    }

    downCount() {
        if (this.PenentyCount > 1) {
            this.PenentyCount--;
            this.PenentyLb.string = this.PenentyCount.toString();
        }
    }
    InCreaseCount() {
        if (this.PenentyCount < 9) {
            this.PenentyCount++;
            this.PenentyLb.string = this.PenentyCount.toString();
        }
    }

    onSelect() {
        this.node.active = true;
        this.SettingPanel.active = false;
    }
}


