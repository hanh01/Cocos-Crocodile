System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, Node, Tooth, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTooth(extras) {
    _reporterNs.report("Tooth", "./Tooth", _context.meta, extras);
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
      log = _cc.log;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Tooth = _unresolved_2.Tooth;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e8ebd32GzVDWLDRXp9X7Lxo", "GameControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameControl", GameControl = (_dec = ccclass('GameControl'), _dec2 = property(Node), _dec(_class = (_class2 = class GameControl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nodeTooths", _descriptor, this);

          this.random = void 0;
        }

        onLoad() {
          this.random = Math.floor(Math.random() * 10);
          console.log("random", this.random);
          var index = -1;
          this.nodeTooths.getComponentsInChildren(_crd && Tooth === void 0 ? (_reportPossibleCrUseOfTooth({
            error: Error()
          }), Tooth) : Tooth).forEach(tooth => {
            tooth.index = ++index;
            console.log("tootthClick:", tooth.index);
            tooth.clickEvent = this.toothClick.bind(this);
          });
        }

        toothClick(index) {
          log("tootthClick:", index);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nodeTooths", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f6a61b9dca6972f268c8e0e1c0cfba16122ccd5b.js.map