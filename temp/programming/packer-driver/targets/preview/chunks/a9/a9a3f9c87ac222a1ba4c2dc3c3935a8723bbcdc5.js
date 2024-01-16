System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, size, _crd, GameConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      size = _cc.size;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6f79owMhZOLbqHstIY1XZq", "Config", undefined);

      __checkObsolete__(['size']);

      _export("GameConfig", GameConfig = {
        TOOTH_SZIE: size(149, 154),
        //size tooth
        TOOTH_HEIGTH_CLICK: 32,
        //size tooth when click
        TIME_CICK: 0.1 //tim tooth clicked

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a9a3f9c87ac222a1ba4c2dc3c3935a8723bbcdc5.js.map