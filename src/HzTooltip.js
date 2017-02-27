(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./HzTooltipResource"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Davinchi. All Rights Reserved.
     */
    var HzTooltipResource_1 = require("./HzTooltipResource");
    exports.HzTooltipResource = HzTooltipResource_1.HzTooltipResource;
});
//# sourceMappingURL=HzTooltip.js.map