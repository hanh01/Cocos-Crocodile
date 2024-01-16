import { _decorator, Component, director, EventTouch, Node, NodeEventType, size, tween, UITransform } from 'cc';
import { AudioMgr } from './AudioMgr';
import { GameConfig } from './Config';
const { ccclass, property } = _decorator;

@ccclass('Tooth')
export class Tooth extends Component {
    public index: number = -1;

    @property(Node)
    readonly tooth: Node = null;

   

    protected onLoad(): void {
        this.reset();
    }

    clickEvent: (index: number) => void;

    touchEnd(e: EventTouch) {
        AudioMgr.inst.play("sounds/click");
        this.tooth.targetOff(this);
        
        tween(this.tooth.getComponent(UITransform)).to(GameConfig.TIME_CICK, {
            contentSize: size(GameConfig.TOOTH_SZIE.width, GameConfig.TOOTH_HEIGTH_CLICK)
        }).call(() => this.clickEvent(this.index)).start();
         
    }

    reset(): void {
        this.tooth.on(Node.EventType.TOUCH_END, this.touchEnd.bind(this), this);  
    }

}

