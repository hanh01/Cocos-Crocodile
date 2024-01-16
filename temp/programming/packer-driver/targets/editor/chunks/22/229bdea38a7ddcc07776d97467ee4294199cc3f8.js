System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, size, tween, UITransform, AudioMgr, GameConfig, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Tooth;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "./AudioMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "./Config", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      size = _cc.size;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      AudioMgr = _unresolved_2.AudioMgr;
    }, function (_unresolved_3) {
      GameConfig = _unresolved_3.GameConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "524a94okF9MSooQ3Xp1mOG7", "Tooth", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'NodeEventType', 'size', 'tween', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Tooth", Tooth = (_dec = ccclass('Tooth'), _dec2 = property(Node), _dec(_class = (_class2 = class Tooth extends Component {
        constructor(...args) {
          super(...args);
          this.index = -1;

          _initializerDefineProperty(this, "tooth", _descriptor, this);

          this.clickEvent = void 0;
        }

        onLoad() {
          this.reset();
        }

        touchEnd(e) {
          console.log(e);
          (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
            error: Error()
          }), AudioMgr) : AudioMgr).inst.play("sounds/click");
          this.tooth.targetOff(this);
          tween(this.tooth.getComponent(UITransform)).to((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).TIME_CICK, {
            contentSize: size((_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).TOOTH_SZIE.width, this.index == -1 ? 154 : (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig).TOOTH_HEIGTH_CLICK)
          }).call(() => this.clickEvent(this.index)).start();
        }

        reset() {
          this.tooth.on(Node.EventType.TOUCH_END, this.touchEnd.bind(this), this);
        }

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tooth", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=229bdea38a7ddcc07776d97467ee4294199cc3f8.js.map