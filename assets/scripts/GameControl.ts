import { _decorator, AudioClip, tween, Label, Component, director, log, Node, random } from "cc";
import { Tooth } from "./Tooth";
import { GameConfig } from './Config';

import { SettingScripts } from "./SettingScripts";

const { ccclass, property } = _decorator;
@ccclass('GameControl')
export class GameControl extends Component {
    @property(Node)
    readonly nodeTooths: Node = null;

    @property(Node)
    readonly crocodile: Node = null;

    @property(Node)
    readonly crocodile2: Node = null;

    @property(AudioClip)
    readonly endAudioSource = null;

    @property(Node)
    playAgainBtn: Node = null;

    @property(Node)
    VicNode: Node = null;

    @property(Node)
    SettingBtn: Node = null;



    randoms: number[];
    // random: number;
    count: number = 0;


    @property(Node)
    SettingPanel: Node = null;

    PenentyCount: number = 1;   

    @property(Label)
    PenentyLb: Label = null;



    protected onLoad(): void {
        this.randoms = this.createRandom();

        // this.random = Math.floor(Math.random() * 10);
        var index = -1;
        this.nodeTooths.getComponentsInChildren(Tooth).forEach(tooth => {
            tooth.index = ++index;

            tooth.clickEvent = this.toothClick.bind(this);
        });
    }



    toothClick(index: number) {

        this.randoms.forEach(element => {
            console.log(element);
        });
        if (this.randoms.indexOf(index) !== -1) {

            this.crocodile.active = true;
            this.crocodile2.active = false;
            this.playAgainBtn.active = true;
            this.endAudioSource.playOneShot();
        } else {
            this.count++;
            if (this.count >= (10 - this.PenentyCount)) {
                console.log("victory");
                this.VicNode.active = true;
                this.playAgainBtn.active = true;
            }
        }
    }

    playAgain(): void {
        this.crocodile.active = false;
        this.crocodile2.active = true;
        this.playAgainBtn.active = false;

        director.loadScene("game");
    }






    createRandom(): number[] {
        this.randoms = [];
        let possibleValues = Array.from({ length: 10 }, (_, index) => index); // Tạo mảng [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        while (possibleValues.length > (10 - this.PenentyCount)) {
            const randomIndex = Math.floor(Math.random() * possibleValues.length);
            const selectedValue = possibleValues.splice(randomIndex, 1)[0];
            this.randoms.push(selectedValue);
        }
        return this.randoms;
    }



    settingOnClick() {
        this.SettingBtn.active = false;
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
        this.SettingBtn.active = true;
        this.SettingPanel.active = false;
        this.createRandom();
    }

}